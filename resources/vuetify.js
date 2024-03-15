import { computed, useAttrs, ref } from "vue";
import { router } from "@inertiajs/vue3";
import { useBrowserLocation } from "@vueuse/core";
import { useResolvedRoute } from "./useResolvedRoute";

const currentLocation = ref(null);
const inertiaLinkProps = [
	"data",
	"method",
	"replace",
	"preserve-scroll",
	"preserve-state",
	"only",
	"headers",
	"queryStringArrayFormat",
	"on-before",
	"on-start",
	"on-progress",
	"on-finish",
	"on-cancel",
	"on-error",
	"on-success",
];
const camelise = (s) => s.replace(/-./g, (x) => x[1].toUpperCase());
const resolveValue = (key, value) => {
	if (["replace", "preserve-scroll", "preserve-state"].includes(key)) {
		return true;
	} else return value;
};

const resolveParameters = (attrs) => {
	const parameters = inertiaLinkProps.reduce((acc, curr) => {
		if (typeof attrs[curr] !== "undefined") {
			acc[camelise(curr)] = resolveValue(curr, attrs[curr]);
		}
		return acc;
	}, {});
	if (!parameters.method) parameters.method = "GET";

	return parameters;
};

const Plugin = {
	useLink(props) {
		const browserLocation = useBrowserLocation();
		if (!currentLocation.value) {
			currentLocation.value = `${browserLocation.value.origin}${browserLocation.value.pathname}`;
		}

		const target = useResolvedRoute(props.to);
		const attrs = useAttrs();

		const parameters = resolveParameters(attrs);

		return {
			route: computed(() => ({ href: target.value })),
			isExactActive: computed(() => currentLocation.value === target.value),
			isActive: computed(() => currentLocation.value.startsWith(target.value)),
			navigate(e) {
				if (e.shiftKey || e.metaKey || e.ctrlKey) return;
				e.preventDefault();

				currentLocation.value = target.value;
				router.visit(target.value, parameters);
			},
		};
	},
};

export default {
	install: (app) => {
		app.component("RouterLink", Plugin);
	},
};
