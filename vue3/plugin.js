import { reactive } from "vue";
import { routeKey } from "./useRoute";
import route from "ziggy";

const ziggy = reactive({});

export default function (props) {
	if (props.initialPage.props.ziggy) {
		Object.keys(props.initialPage.props.ziggy).forEach((key) => {
			ziggy[key] = props.initialPage.props.ziggy[key];
		});
		ziggy.location = new URL(ziggy.location);
	}

	return {
		install: (app) => {
			const routeFunction = (name, params, absolute, config = ziggy) => {
				// When global is available, drop the preloaded location to allow dynamic reading
				if (ziggy.location && typeof window !== "undefined") {
					ziggy.location = null;
				}
				return route(name, params, absolute, config);
			};

			app.provide(routeKey, routeFunction);
			app.config.globalProperties.$route = routeFunction;
		}
	};
}
