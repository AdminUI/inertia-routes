import { computed, useAttrs, ref, getCurrentInstance, onMounted, onUnmounted, type App } from "vue";
import { router } from "@inertiajs/vue3";
import type { Method } from "@inertiajs/core";
import { useBrowserLocation } from "@vueuse/core";
import { RouteProp, useResolvedRoute } from "./useResolvedRoute";
import { lowerCase, omit, pick } from "es-toolkit";
import { castArray } from "es-toolkit/compat";

type ToCamelCase<T extends string> = T extends `${infer First}-${infer Rest}` // Handles cases with underscores
	? `${Lowercase<First>}${Capitalize<ToCamelCase<Rest>>}`
	: T extends `${infer First}${infer Rest}` // Handles normal uppercase cases
		? `${Lowercase<First>}${Rest}`
		: never;

const currentLocation = ref<string>();
const inertiaLinkProps = [
	"cache-for",
	"data",
	"method",
	"replace",
	"prefetch",
	"preserve-scroll",
	"preserve-state",
	"only",
	"except",
	"headers",
	"query-string-array-format",
	"on-before",
	"on-start",
	"on-progress",
	"on-finish",
	"on-cancel",
	"on-cancel-token",
	"on-error",
	"on-success",
	"async",
] as const;

type InertiaLinkPropMap = {
	[K in ToCamelCase<(typeof inertiaLinkProps)[number]>]: K extends "method" ? Method : any;
};

export interface UseLinkProps extends InertiaLinkPropMap {
	to: RouteProp;
}

const camelise = (s: string): string => s.replace(/-./g, (x) => x[1].toUpperCase());
const resolveValue = (key: string, value: unknown) => {
	if (["replace", "preserve-scroll", "preserve-state", "async"].includes(key)) {
		return true;
	} else if (key === "prefetch") {
		return !value ? ["hover"] : castArray(value);
	} else if (["method"].includes(key) && typeof value === "string") {
		return lowerCase(value);
	} else return value;
};

const resolveParameters = (attrs: Record<string, unknown>) => {
	const parameters = inertiaLinkProps.reduce((acc, curr) => {
		if (typeof attrs[curr] !== "undefined") {
			acc[camelise(curr)] = resolveValue(curr, attrs[curr]);
		}
		return acc;
	}, {} as InertiaLinkPropMap);
	if (!parameters.method) parameters.method = "get";

	return parameters;
};

const useLink = (props: UseLinkProps) => {
	const vm = getCurrentInstance();
	const controller = new AbortController();

	const browserLocation = useBrowserLocation();
	if (!currentLocation.value) {
		currentLocation.value = `${browserLocation.value.origin}${browserLocation.value.pathname}`;
	}

	const target = useResolvedRoute(props.to);
	const attrs = useAttrs();

	const parameters = resolveParameters(attrs);

	onMounted(() => {
		const { prefetch } = parameters;
		const prefetchCallback = () => {
			router.prefetch(target.value, omit(parameters, ["cacheFor"]), pick(parameters, ["cacheFor"]));
		};
		if (Array.isArray(prefetch) && prefetch?.length > 0) {
			if (prefetch.includes("mount")) prefetchCallback();
			if (prefetch.includes("hover") && vm && vm.proxy?.$el) {
				vm.proxy.$el.addEventListener("mouseenter", prefetchCallback, {
					signal: controller.signal,
				});
			}
			if (prefetch.includes("click") && vm && vm.proxy?.$el) {
				vm.proxy.$el.addEventListener("click", prefetchCallback, {
					signal: controller.signal,
				});
			}
		}
	});
	onUnmounted(() => controller.abort());

	return {
		route: computed(() => ({ href: target.value })),
		isExactActive: computed(() => currentLocation.value === target.value),
		isActive: computed(() => currentLocation.value?.startsWith(target.value) ?? false),
		navigate(e: TouchEvent) {
			if (e.shiftKey || e.metaKey || e.ctrlKey) return;
			e.preventDefault();

			currentLocation.value = target.value;
			router.visit(target.value, omit(parameters, ["prefetch", "cacheFor"]));
		},
	};
};

const Plugin = {
	name: "RouterLink",
	useLink,
};

export default {
	install: (app: App) => {
		app.component("RouterLink", Plugin);
	},
};
