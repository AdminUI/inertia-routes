import { inject } from "vue";

export const routeKey = Symbol.for("inertia-routes-key");

export const useRoute = () => {
    return inject(routeKey);
};
