import { reactive, type App } from "vue";
import { routeKey } from "./useRoute";
import { route, Config } from "ziggy";
import { InertiaAppProps } from "@inertiajs/vue3/types/app";

interface PluginConfig {
	global?: boolean;
}

type ZiggyRoutesObject = Omit<Config, "location"> & {
	location: string | Config["location"];
};
const ziggy: Partial<ZiggyRoutesObject> = reactive({});

export default function (props: InertiaAppProps) {
	if (props.initialPage.props.ziggy) {
		Object.keys(props.initialPage.props.ziggy).forEach((key) => {
			ziggy[key] = props.initialPage.props.ziggy[key];
		});
		if (typeof ziggy.location === "string") {
			ziggy.location = new URL(ziggy.location);
		}
	}

	return {
		install: (app: App, options: PluginConfig = {}) => {
			const isGlobal = options.global ?? true;

			const routeFunction = ((...args: Parameters<typeof route>): ReturnType<typeof route> => {
				args[0] ??= undefined;
				args[1] ??= undefined;
				args[2] ??= true;
				args[3] ??= ziggy as Config;
				// When global is available, drop the preloaded location to allow dynamic reading
				if (ziggy.location && typeof window !== "undefined") {
					ziggy.location = null;
				}
				return route(...args);
			}) as typeof route;

			app.provide(routeKey, routeFunction);

			if (isGlobal) {
				app.config.globalProperties.$route = routeFunction;
			}
		},
	};
}
