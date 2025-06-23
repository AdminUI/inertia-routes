import { computed, type ComputedRef, isRef, MaybeRefOrGetter, toValue } from "vue";
import { useRoute } from "./useRoute";

export type RouteProp = MaybeRefOrGetter<string | [string, Record<string, unknown>]>;

export const useResolvedRoute = (routeProp: RouteProp): ComputedRef<string> => {
	const route = useRoute();
	return computed(() => {
		// Extract the raw value of the routeProp
		let routePropValue = toValue(routeProp);
		while (isRef(routePropValue)) {
			routePropValue = toValue(routePropValue as RouteProp);
		}
		// Empty
		if (!routePropValue) {
			console.warn("[Inertia Routes] You must pass a route string or tuple to useRouteProp");
			return "#";
		} else if (typeof routePropValue === "string" && /^http/.test(routePropValue)) {
			return routePropValue;
		} else if (Array.isArray(routePropValue)) {
			const [path, params] = routePropValue;
			if (!path) return "#";
			else if (typeof params !== "object") return route(path) as string;
			else return route<string>(path, toValue(params));
		} else return routePropValue ? (route(routePropValue) as string) : "#";
	});
};
