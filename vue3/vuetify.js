import { computed, useAttrs } from "vue";
import { router, usePage } from "@inertiajs/vue3";
import { useBrowserLocation } from "@vueuse/core";
import { useRouteProp } from "./utils";

const Plugin = {
	useLink(props) {
		const browserLocation = useBrowserLocation();
		const routeHref = useRouteProp(props.to);
		console.log(routeHref.value);
		const currentUrl = computed(() => browserLocation.value.origin + usePage().url);
		const attrs = useAttrs();
		const method = attrs["method"] || "GET";

		return {
			route: computed(() => ({ href: routeHref.value })),
			isExactActive: computed(() => currentUrl.value === routeHref.value),
			isActive: computed(() => currentUrl.value.startsWith(routeHref.value)),
			navigate(e) {
				if (e.shiftKey || e.metaKey || e.ctrlKey) return;
				e.preventDefault();

				console.log(routeHref.value, method);
				//router.visit(routeHref.value, { method });
			},
		};
	},
};

export default {
	install: (app) => {
		app.component("RouterLink", Plugin);
	},
};
