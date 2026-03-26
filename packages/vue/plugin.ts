import { reactive, watch, toRaw, type App } from "vue";
import { routeKey } from "./useRoute";
import { route, Config } from "ziggy";
import { usePage } from "@inertiajs/vue3";

interface PluginConfig {
	global?: boolean;
}

type ZiggyRoutesObject = Omit<Config, "location"> & {
	location: string | Config["location"];
};
const ziggy: Partial<ZiggyRoutesObject> = reactive({
	routes: {},
});

export const inertiaRoutes = {
	install: (app: App, options: PluginConfig = {}) => {
		const updateZiggy = (pageProps) => {
			if (!pageProps) return;

			if (pageProps.ziggy) {
				for (const key in pageProps.ziggy) {
					ziggy[key] = toRaw(pageProps.ziggy[key]);
				}
				if (typeof ziggy.location === "string") {
					ziggy.location = new URL(ziggy.location);
				}
			}
		};

		const isGlobal = options.global ?? true;
		watch(() => usePage().props, updateZiggy, {
			immediate: true,
			flush: "sync",
		});

		if (typeof window === "undefined") {
			updateZiggy(app.config.globalProperties.$page?.props);
		}

		const routeFunction = ((...args: Parameters<typeof route>): ReturnType<typeof route> => {
			args[0] ??= undefined;
			args[1] ??= undefined;
			args[2] ??= true;
			args[3] ??= toRaw(ziggy) as Config;
			// When global is available, drop the preloaded location to allow dynamic reading
			if (ziggy.location && typeof window !== "undefined") {
				ziggy.location = null;
			}

			if (!Object.keys(ziggy.routes)?.length) return "";
			else return route(...args);
		}) as typeof route;

		app.provide(routeKey, routeFunction);

		if (isGlobal) {
			app.config.globalProperties.$route = routeFunction;
		}
	},
};

export default function () {
	return inertiaRoutes;
}
