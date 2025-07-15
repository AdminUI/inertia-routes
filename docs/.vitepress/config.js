import { defineConfig } from "vitepress";
import { generateChangelogMenu } from "./helpers/generateChangelogMenu";
import { copyChangelogs } from "./helpers/copyChangelogs";

copyChangelogs();

// https://vitepress.dev/reference/site-config
export default defineConfig({
	title: "Inertia Routes",
	description: "Supercharge your InertiaJS experience",
	themeConfig: {
		// https://vitepress.dev/reference/default-theme-config
		nav: [{ text: "Home", link: "/" }, generateChangelogMenu()],

		sidebar: [
			{
				text: "Getting Started",
				items: [
					{ text: "Installation", link: "/getting-started/installation" },
					{ text: "Setup", link: "/getting-started/setup" },
					{ text: "Usage", link: "/getting-started/usage" },
				],
			},
			{
				text: "Configuration",
				items: [{ text: "Editing your Config", link: "/configuration/publication-configuration" }],
			},
			{
				text: "Extras",
				items: [
					{ text: "Vuetify 3 Plugin", link: "/extras/vuetify-3-plugin" },
					{ text: "Extended Form Helper", link: "/extras/extended-form-helper" },
				],
			},
			{
				text: "Other Information",
				items: [
					{ text: "How it Works", link: "/information/how-it-works" },
					{ text: "FAQ", link: "/information/faq" },
					{ text: "Support Open-Source Software", link: "/information/sponsor" },
				],
			},
		],

		socialLinks: [
			{ icon: "packagist", link: "https://packagist.org/packages/adminui/inertia-routes" },
			{ icon: "github", link: "https://github.com/adminui/inertia-routes" },
		],

		footer: {
			message: "Released under the MIT License.",
			copyright: "Copyright © 2025 Evo Mark Ltd",
		},
	},
	base: "/inertia-routes/",
});
