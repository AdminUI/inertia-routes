import { inject, InjectionKey } from "vue";
import { route } from "ziggy";

export const routeKey = Symbol.for("inertia-routes") as InjectionKey<typeof route>;

export const useRoute = () => {
	return inject(routeKey);
};
