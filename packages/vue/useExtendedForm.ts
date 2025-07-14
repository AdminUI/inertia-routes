import { type FormDataConvertible, type VisitOptions, type Method } from "@inertiajs/core";
import { useForm, type InertiaForm } from "@inertiajs/vue3";
import { computed, type ComputedRef, ref, toValue } from "vue";
import axios from "axios";
import { useResolvedRoute, type RouteProp } from "./useResolvedRoute";
import { intersection } from "es-toolkit";

type FormDataType = Record<string, FormDataConvertible>;
type FormOptions = Omit<VisitOptions, "data">;

type ExtendedForm<TForm extends FormDataType> = Omit<
	InertiaForm<TForm>,
	"submit" | "get" | "post" | "patch" | "put" | "delete"
> & {
	bind: ComputedRef<Record<keyof TForm, FormFieldBinding>>;
	get: (maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => void;
	post: (maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => void;
	patch: (maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => void;
	put: (maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => void;
	delete: (maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => void;
	submit: (method: Method, maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => void;
};

interface FormFieldBinding {
	name: string;
	required?: boolean;
	type?: "email" | "text" | "password";
	"error-messages"?: Record<string, string[]>;
}

export function useExtendedForm<TForm extends FormDataType>(
	routeName: RouteProp,
	options: {
		rememberKey: string;
		data?: TForm | (() => TForm);
		framework: "vuetify" | "none";
		autoHydrate?: boolean;
	},
): ExtendedForm<TForm> {
	const { rememberKey, data, framework = "none", autoHydrate = true } = options;
	const resolvedRoute = useResolvedRoute(routeName);

	const _form = !!rememberKey
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
	const _formMeta = ref({});

	const getFormDefaults = () => {
		return Object.keys(_formMeta.value).reduce((acc, curr) => {
			const rules = _formMeta.value[curr];
			let defaultValue: unknown;
			if (!rules || !Array.isArray(rules)) {
				defaultValue = null;
			} else if (
				intersection(rules, ["string", "email", "url", "uuid", "ulid", "alpha", "alpha_dash", "alpha_num"])
					.length
			) {
				defaultValue = "";
			} else if (intersection(rules, ["array"])) {
				defaultValue = [];
			} else if (intersection(rules, ["decimal", "digits", "integer", "numeric"])) {
				defaultValue = 0;
			} else if (intersection(rules, ["boolean", "accepted", "declined"])) {
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
	extendedForm.get = (maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => {
		const { url, visitOptions } = resolveRequestOptions(maybeUrlOrOptions, maybeOptions);
		original.get(url, visitOptions);
	};
	extendedForm.post = (maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => {
		const { url, visitOptions } = resolveRequestOptions(maybeUrlOrOptions, maybeOptions);
		original.post(url, visitOptions);
	};
	extendedForm.put = (maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => {
		const { url, visitOptions } = resolveRequestOptions(maybeUrlOrOptions, maybeOptions);
		original.put(url, visitOptions);
	};
	extendedForm.patch = (maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => {
		const { url, visitOptions } = resolveRequestOptions(maybeUrlOrOptions, maybeOptions);
		original.patch(url, visitOptions);
	};
	extendedForm.delete = (maybeUrlOrOptions?: string | FormOptions, maybeOptions?: FormOptions) => {
		const { url, visitOptions } = resolveRequestOptions(maybeUrlOrOptions, maybeOptions);
		original.delete(url, visitOptions);
	};

	extendedForm.bind = computed(
		() =>
			Object.fromEntries(
				Object.entries(_formMeta.value).map(([field, value]) => {
					if (Array.isArray(value) === false) {
						return [field, {}];
					}
					const bind = {
						name: field,
					} as Partial<FormFieldBinding>;
					if (value.includes("required")) {
						bind.required = true;
					}
					if (value.includes("email")) {
						bind.type = "email";
					}
					if (framework === "vuetify") {
						bind["error-messages"] = _form.errors[field];
					}
					return [field, bind];
				}),
			) as Record<keyof TForm, FormFieldBinding>,
	);

	return extendedForm;
}
