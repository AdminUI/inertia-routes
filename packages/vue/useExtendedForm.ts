import { type FormDataConvertible, type VisitOptions, type Method } from "@inertiajs/core";
import { useForm, type InertiaForm } from "@inertiajs/vue3";
import { computed, type ComputedRef, ref, toValue, watch } from "vue";
import axios from "axios";
import { useResolvedRoute, type RouteProp } from "./useResolvedRoute";
import { intersection, last, startCase, memoize } from "es-toolkit";

type Framework = "vuetify" | "none";

type FormDataType = Record<string, FormDataConvertible>;
type FormOptions = Omit<VisitOptions, "data">;

type ExtendedForm<TForm extends FormDataType> = Omit<
	InertiaForm<TForm>,
	"submit" | "get" | "post" | "patch" | "put" | "delete"
> & {
	bind: Record<keyof TForm, ComputedRef<FormFieldBinding>>;
	get: (maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => void;
	post: (maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => void;
	patch: (maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => void;
	put: (maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => void;
	delete: (maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => void;
	submit: (method: Method, maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => void;
};

interface FormFieldBinding {
	name?: string;
	label?: string;
	required?: boolean;
	type?: "email" | "text" | "password" | "number" | "url";
	minlength?: number;
	maxlength?: number;
	min?: number;
	max?: number;
	counter?: boolean;
	step?: number;
	accept?: string;
	"error-messages"?: Record<string, string[]>;
	modelValue?: unknown;
	"onUpdate:modelValue"?: (newValue: unknown) => void;
}

const STRING_RULES = ["string", "email", "url", "uuid", "ulid", "alpha", "alpha_dash", "alpha_num"];
const NUMBER_RULES = ["decimal", "digits", "integer", "numeric"];
const BOOLEAN_RULES = ["boolean", "accepted", "declined"];
const FILE_RULES = ["file", "image", "image:allow_svg"];

function addInputBindings(value: string[], framework: Framework = "none"): FormFieldBinding {
	const obj = {} as Partial<FormFieldBinding>;
	const isString = intersection(value, STRING_RULES)?.length > 0;
	const isNumber = intersection(value, NUMBER_RULES)?.length > 0;
	const isFile = intersection(value, FILE_RULES)?.length > 0;

	if (value.includes("required")) {
		obj.required = true;
	}
	if (value.includes("email")) {
		obj.type = "email";
	} else if (value.some((v) => v.startsWith("url"))) {
		obj.type = "url";
	}
	let min: string;
	let max: string;
	let step: string;
	let accept: string;
	if (isString && (min = value.find((rule) => /^min:\d+$/.test(rule)))) {
		obj.minlength = +last(min.split(":"));
		if (framework === "vuetify") {
			obj.counter = true;
		}
	}
	if (isString && (max = value.find((rule) => /^max:\d+$/.test(rule)))) {
		obj.maxlength = +last(max.split(":"));
		if (framework === "vuetify") {
			obj.counter = true;
		}
	}
	if (isNumber) {
		obj.type = "number";
	}
	if (isNumber && (step = value.find((rule) => /^multiple_of:\d+$/.test(rule)))) {
		obj.step = +last(step.split(":"));
	}
	let minNum: string;
	let maxNum: string;
	if (isNumber && (minNum = value.find((rule) => /^min:\d+$/.test(rule)))) {
		obj.min = +last(minNum.split(":"));
	}
	if (isNumber && (maxNum = value.find((rule) => /^max:\d+$/.test(rule)))) {
		obj.max = +last(maxNum.split(":"));
	}
	if (isFile && (accept = value.find((rule) => /^mimetypes:/.test(rule)))) {
		obj.accept = last(accept.split(":"));
	}
	return obj;
}

interface ExtendedFormOptions<TForm> {
	rememberKey?: string;
	data?: TForm | (() => TForm);
	framework?: Framework;
	autoHydrate?: boolean;
	model?: boolean;
}

export function useExtendedForm<TForm extends FormDataType>(
	routeName: RouteProp,
	options: ExtendedFormOptions<TForm> = {},
): ExtendedForm<TForm> {
	const { rememberKey, data = {}, framework = "none", autoHydrate = true, model = true } = options;
	const resolvedRoute = useResolvedRoute(routeName);

	const _form = rememberKey
		? useForm<TForm>(rememberKey, data as TForm | (() => TForm))
		: useForm<TForm>(data as TForm | (() => TForm));

	const original = {
		submit: _form.submit.bind(_form),
		get: _form.get.bind(_form),
		post: _form.post.bind(_form),
		patch: _form.patch.bind(_form),
		put: _form.put.bind(_form),
		delete: _form.delete.bind(_form),
	};
	const extendedForm = _form as ExtendedForm<TForm>;

	const _formMeta = ref<Record<string, string[]>>({});

	const getFormDefaults = () => {
		return Object.keys(_formMeta.value).reduce((acc, curr) => {
			const rules = _formMeta.value[curr];
			let defaultValue: unknown;
			if (!rules || !Array.isArray(rules)) {
				defaultValue = null;
			} else if (intersection(rules, STRING_RULES).length) {
				defaultValue = "";
			} else if (intersection(rules, ["array"])) {
				defaultValue = [];
			} else if (intersection(rules, NUMBER_RULES)) {
				defaultValue = 0;
			} else if (intersection(rules, BOOLEAN_RULES)) {
				defaultValue = false;
			}
			acc[curr] = Object.hasOwn(_form, curr) ? _form[curr] : defaultValue;
			return acc;
		}, {});
	};

	if (routeName) {
		axios
			.post("/inertia-routes/form-helper", {
				routeName,
			})
			.then((response) => {
				_formMeta.value = response.data;
				if (autoHydrate) {
					_form.defaults(getFormDefaults());
					_form.reset();
				}
			});
	}

	const resolveRequestOptions = (maybeUrlOrOptions?: string | VisitOptions, maybeOptions?: VisitOptions) => {
		const url = typeof maybeUrlOrOptions === "string" ? maybeUrlOrOptions : toValue(resolvedRoute);
		const visitOptions = typeof maybeUrlOrOptions === "object" ? maybeUrlOrOptions : maybeOptions;
		return {
			url,
			visitOptions,
		};
	};

	extendedForm.submit = (method: Method, maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => {
		const { url, visitOptions } = resolveRequestOptions(maybeUrlOrOptions, maybeOptions);
		original.submit(method, url, visitOptions);
	};

	(["get", "post", "put", "patch", "delete"] as const).forEach((method) => {
		extendedForm[method] = (maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => {
			const { url, visitOptions } = resolveRequestOptions(maybeUrlOrOptions, maybeOptions);
			original[method](url, visitOptions);
		};
	});

	const memoisedAddInputBindings = memoize(
		({ value, framework }) => {
			return addInputBindings(value, framework);
		},
		{
			getCacheKey: ({ value, framework }) => JSON.stringify([value, framework]),
		},
	);

	function fieldBindFactory(field) {
		return computed(() => {
			const metaValue = _formMeta.value[field];
			if (Array.isArray(metaValue) === false) {
				return {};
			}
			const bind = {
				name: field,
			} as Partial<FormFieldBinding>;
			const inputBindings = memoisedAddInputBindings({ value: metaValue, framework });
			for (const inputBinding in inputBindings) {
				bind[inputBinding] = inputBindings[inputBinding];
			}

			if (framework === "vuetify") {
				bind.label = startCase(field);
				bind["error-messages"] = _form.errors[field];
			}

			if (model) {
				bind.modelValue = _form[field];
				/** @ts-expect-error */
				bind["onUpdate:modelValue"] = ($event) => (_form[field] = $event);
			}
			return bind;
		});
	}

	extendedForm.bind = {} as Record<keyof TForm, ComputedRef<FormFieldBinding>>;
	watch(_formMeta, (meta) => {
		for (const field in meta) {
			if (Object.prototype.hasOwnProperty.call(meta, field)) {
				const typedField = field as keyof TForm;
				extendedForm.bind[typedField] = fieldBindFactory(typedField);
			}
		}
	});

	return extendedForm;
}
