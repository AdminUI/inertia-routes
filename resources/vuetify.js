import { computed, useAttrs, ref, getCurrentInstance, onMounted, onUnmounted } from "vue";
import { router } from "@inertiajs/vue3";
import { useBrowserLocation } from "@vueuse/core";
import { useResolvedRoute } from "./useResolvedRoute";
import { lowerCase, omit, pick, castArray } from "lodash-es";

const currentLocation = ref(null);
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
];
const camelise = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());
const resolveValue = (key, value) => {
	if (["replace", "preserve-scroll", "preserve-state", "async"].includes(key)) {
		return true;
	} else if (key === "prefetch") {
		return !value ? ["hover"] : castArray(value);
	} else if (["method"].includes(key)) {
		return lowerCase(value);
	} else return value;
};

const resolveParameters = (attrs) => {
	const parameters = inertiaLinkProps.reduce((acc, curr) => {
		if (typeof attrs[curr] !== "undefined") {
			acc[camelise(curr)] = resolveValue(curr, attrs[curr]);
		}
		return acc;
	}, {});
	if (!parameters.method) parameters.method = "get";

	return parameters;
};

const useLink = (props) => {
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
		if (prefetch?.length > 0) {
			if (prefetch.includes("mount")) prefetchCallback();
			if (prefetch.includes("hover") && vm.proxy?.$el) {
				vm.proxy.$el.addEventListener("mouseenter", prefetchCallback, {
					signal: controller.signal,
				});
			}
			if (prefetch.includes("click") && vm.proxy?.$el) {
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
		isActive: computed(() => currentLocation.value.startsWith(target.value)),
		navigate(e) {
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
	install: (app) => {
		app.component("RouterLink", Plugin);
	},
};
