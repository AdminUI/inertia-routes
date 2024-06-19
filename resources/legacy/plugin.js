import { reactive } from "vue";
import { routeKey } from "../useRoute";
import { route } from "ziggy";

const ziggy = reactive({});

export default function (props) {
	const ziggyProps = props?.props?.initialPage?.props?.ziggy ?? null;
	if (ziggyProps) {
		Object.keys(ziggyProps).forEach((key) => {
			ziggy[key] = ziggyProps[key];
		});
		ziggy.location = new URL(ziggy.location);
	}

	return {
		install: (Vue, { mixin = false } = {}) => {
			const routeFunction = (name, params, absolute, config = ziggy) => {
				// When global is available, drop the preloaded location to allow dynamic reading
				if (ziggy.location && typeof window !== "undefined") {
					ziggy.location = null;
				}
				return route(name, params, absolute, config);
			};

			Vue.provide(routeKey, routeFunction);
			if (mixin === true) {
				Vue.mixin({
					methods: {
						route: routeFunction,
					},
				});
			}
			Vue.prototype.$route = routeFunction;
		},
	};
}
