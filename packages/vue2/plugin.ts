import Vue, { reactive, type Component } from "vue";
import { Page } from "@inertiajs/core";
import { route, Config } from "ziggy";

interface InertiaProps {
	initialPage: Page;
	initialComponent?: object;
	resolveComponent?: (name: string) => Component;
	titleCallback?: (title: string) => string;
	onHeadUpdate?: (elements: string[]) => void;
}

type InertiaAppProps = {
	props: InertiaProps;
};

interface PluginConfig {
	mixin?: boolean;
}

type ZiggyRoutesObject = Omit<Config, "location"> & {
	location: string | Config["location"];
};
const ziggy: Partial<ZiggyRoutesObject> = reactive({});

export default function (props: InertiaAppProps) {
	const ziggyProps = props?.props?.initialPage?.props?.ziggy ?? null;
	if (ziggyProps) {
		Object.keys(ziggyProps).forEach((key) => {
			ziggy[key] = ziggyProps[key];
		});
		if (typeof ziggy.location === "string") {
			ziggy.location = new URL(ziggy.location);
		}
	}

	return {
		install: (VueApp: typeof Vue, { mixin = false }: PluginConfig = {}) => {
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

			if (mixin === true) {
				VueApp.mixin({
					methods: {
						route: routeFunction,
					},
				});
			}
			VueApp.prototype.$route = routeFunction;
		},
	};
}
