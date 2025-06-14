import { route } from "ziggy";

declare module "vue" {
	interface ComponentCustomProperties {
		$route: typeof route;
	}
}
