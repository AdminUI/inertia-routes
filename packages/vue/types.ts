declare module "vue" {
	interface ComponentCustomProperties {
		$route: typeof import("ziggy").route;
	}
}

export {}
 