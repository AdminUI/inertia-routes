import Vue from "vue";
import { route } from "ziggy";

declare module "vue/types/vue" {
	interface Vue {
		$route: typeof route;
	}
}
