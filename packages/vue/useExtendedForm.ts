import { type VisitOptions, type Method, type FormDataType } from "@inertiajs/core";
import { useForm, type InertiaForm } from "@inertiajs/vue3";
import { computed, type ComputedRef, ref, toValue, watch } from "vue";
import axios from "axios";
import { useResolvedRoute, type RouteProp } from "./useResolvedRoute";
import { intersection, last, startCase, memoize, noop, clone } from "es-toolkit";

type Framework = "vuetify" | "none";

type FormOptions = Omit<VisitOptions, "data">;

type ExtendedForm<TForm extends FormDataType<TForm>> = Omit<
	InertiaForm<TForm>,
	"submit" | "get" | "post" | "patch" | "put" | "delete"
> & {
	bind: Record<string, ComputedRef<FormFieldBinding>>;
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
	items?: { title: string; value: unknown }[];
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
	let options: string;
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
	if (framework === "vuetify" && (options = value.find((rule) => /^in:/.test(rule)))) {
		const [_, values] = options.split(":");
		const selectValues = values.split(",");
		obj.items = selectValues.map((v) => ({
			value: v,
			title: startCase(v),
		}));
	}
	return obj;
}

interface ExtendedFormOptions<TForm> {
	rememberKey?: string;
	data?: TForm | (() => TForm);
	visitOptions?: Omit<VisitOptions, "method" | "data">;
	framework?: Framework;
	autoHydrate?: boolean;
	model?: boolean;
	resetOnSuccess?: boolean;
}

export function useExtendedForm<TForm extends FormDataType<TForm>>(
	routeName: RouteProp,
	options: ExtendedFormOptions<TForm> = {},
): ExtendedForm<TForm> {
	const {
		rememberKey,
		data = {},
		framework = "none",
		autoHydrate = true,
		model = true,
		visitOptions: userVisitOptions = {},
	} = options;
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
	const extendedForm = Object.assign(_form, {
		bind: {} as Record<string, ComputedRef<FormFieldBinding>>,
	}) as ExtendedForm<TForm>;

	const _formMeta = ref<Record<string, string[]>>({});
	const _initialFormData = ref(null);

	const getFormDefaults = () => {
		return Object.keys(_formMeta.value).reduce((acc, curr) => {
			const rules = _formMeta.value[curr];
			let defaultValue: unknown;
			// NOTE: Make sure to do condition on the 'length' property, not the array itself
			if (!rules || !Array.isArray(rules)) {
				defaultValue = null;
			} else if (intersection(rules, STRING_RULES).length) {
				defaultValue = "";
			} else if (intersection(rules, ["array"]).length) {
				defaultValue = [];
			} else if (intersection(rules, NUMBER_RULES).length) {
				defaultValue = 0;
			} else if (intersection(rules, BOOLEAN_RULES).length) {
				defaultValue = false;
			}
			acc[curr] = Object.hasOwn(_form, curr) ? _form[curr] : defaultValue;
			_initialFormData.value = clone(acc);
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

	/**
	 * Prevent event objects from being used as visit options if users pass a bare callback to `@submit`
	 */
	const filterEvents = (maybeEvent: VisitOptions | SubmitEvent): VisitOptions => {
		return maybeEvent instanceof SubmitEvent || !maybeEvent ? {} : maybeEvent;
	};

	const resolveRequestOptions = (maybeUrlOrOptions?: string | VisitOptions, maybeOptions?: VisitOptions) => {
		const url = typeof maybeUrlOrOptions === "string" ? maybeUrlOrOptions : toValue(resolvedRoute);
		const visitOptions = typeof maybeUrlOrOptions === "object" ? filterEvents(maybeUrlOrOptions) : maybeOptions;
		if (options.resetOnSuccess) {
			const _originalCallback = visitOptions.onSuccess ? visitOptions.onSuccess.bind(_form) : noop;
			visitOptions.onSuccess = () => {
				_form.defaults(_initialFormData.value);
				_form.reset();
				_originalCallback();
			};
		}
		return {
			url,
			visitOptions: Object.assign(userVisitOptions, visitOptions ?? {}),
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
				bind["onUpdate:modelValue"] = ($event) => (_form[field] = $event);
			}
			return bind;
		});
	}

	extendedForm.bind = {} as Record<string, ComputedRef<FormFieldBinding>>;
	watch(_formMeta, (meta) => {
		for (const field in meta) {
			if (Object.prototype.hasOwnProperty.call(meta, field)) {
				extendedForm.bind[field] = fieldBindFactory(field);
			}
		}
	});

	return extendedForm;
}
