import { computed, toValue } from "vue";
import { useRoute } from "inertiaRoutes";

/**
 * Takes either a route string, or a tuple of string/params object and resolves a URL
 * @param {string|[string, Record<string, unknown>]} routeProp The route to resolve
 * @returns { import("vue").ComputedRef<string> } The resolved URL for the given route
 */
export const useRouteProp = (routeProp) => {
	const route = useRoute();
	return computed(() => {
		routeProp = toValue(routeProp);
		if (!routeProp) {
			console.warn("[Inertia Routes] You must pass a route string or tuple to useRouteProp");
			return "#";
		} else if (typeof routeProp === "string" && /^http/.test(routeProp)) {
			return routeProp;
		} else if (Array.isArray(routeProp)) {
			const [path, params] = toValue(routeProp);
			if (typeof params !== "object") return route(path);
			else return route(path, toValue(params));
		} else return route(routeProp);
	});
};
