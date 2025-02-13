import { inject } from "vue";

export const routeKey = Symbol.for("inertia-routes");

/**
 * @typedef {(name: string, params?: import("../globals.d.ts").ZiggyParameterValue | undefined, absolute?: boolean, config?: import("../globals.d.ts").ZiggyConfig) => string} RouteFunction
 */

/**
 * @returns { RouteFunction } resolved route function
 */
export const useRoute = () => {
  return inject(routeKey);
};
