import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Inertia Routes",
	description: "Documentation for AdminUI's Inertia Routes",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [
			{ text: "Home", link: "/" },
			{ text: "Examples", link: "/markdown-examples" },
		],

		sidebar: [
			{
				text: "Examples",
				items: [
					{ text: "Markdown Examples", link: "/markdown-examples" },
					{ text: "Runtime API Examples", link: "/api-examples" },
				],
			},
		],

		socialLinks: [
			{ icon: "packagist", link: "https://packagist.org/packages/adminui/inertia-routes" },
			{ icon: "github", link: "https://github.com/adminui/inertia-routes" },
		],
	},
});
