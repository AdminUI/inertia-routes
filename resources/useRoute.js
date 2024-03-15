import { inject } from "vue";

export const routeKey = Symbol.for("inertia-routes");

export const useRoute = () => {
  return inject(routeKey);
};
