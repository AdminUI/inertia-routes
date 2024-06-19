import { computed } from "vue";
// Using @vueuse version of toValue to allow Vue2 compatibility
import { toValue } from "@vueuse/core";
import { useRoute } from "./useRoute";

/**
 * Takes either a route string, or a tuple of string/params object and resolves a URL
 * @param {string|[string, Record<string, unknown>]} routeProp The route to resolve
 * @returns { import("vue").ComputedRef<string> } The resolved URL for the given route
 */
export const useResolvedRoute = (routeProp) => {
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
			if (!path) return "#";
			else if (typeof params !== "object") return route(path);
			else return route(path, toValue(params));
		} else return routeProp ? route(routeProp) : "#";
	});
};
