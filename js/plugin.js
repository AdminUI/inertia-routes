import { reactive } from "vue";
import { routeKey } from "./useRoute";
import route from "ziggy";

const ziggy = reactive({});

export default function (props) {
    if (props.initialPage.props.ziggy) {
        Object.keys(props.initialPage.props.ziggy).forEach((key) => {
            ziggy[key] = props.initialPage.props.ziggy[key];
        });
        ziggy.location = new URL(props.initialPage.props.ziggy.url);
    }

    return {
        install: (app) => {
            const routeFunction = (name, params, absolute, config = ziggy) =>
                route(name, params, absolute, config);

            app.provide(routeKey, routeFunction);

            app.config.globalProperties.$route = routeFunction;
        },
    };
}
