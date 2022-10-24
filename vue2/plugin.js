import Vue from "vue";
import route from "ziggy";

const ziggy = Vue.observable({});

export default function (props) {
	if (props && props.props && props.props.initialPage && props.props.initialPage.props.ziggy) {
		Object.keys(props.props.initialPage.props.ziggy).forEach((key) => {
			ziggy[key] = props.props.initialPage.props.ziggy[key];
		});
		ziggy.location = new URL(ziggy.location);
	}

	return {
		install: (VueInstance, { mixin = false } = {}) => {
			const routeFunction = (name, params, absolute, config = ziggy) => {
				// When global is available, drop the preloaded location to allow dynamic reading
				if (ziggy.location && typeof window !== "undefined") {
					ziggy.location = null;
				}
				return route(name, params, absolute, config);
			};

			if (mixin === true) {
				VueInstance.mixin({
					methods: {
						route: routeFunction
					}
				});
			}
			VueInstance.prototype.$route = routeFunction;
		}
	};
}
