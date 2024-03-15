import { resolve } from "node:path";
import { visualizer } from "rollup-plugin-visualizer";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), visualizer()],
	resolve: {
		alias: {
			ziggy: resolve("vendor/tightenco/ziggy/src/js"),
		},
	},
	build: {
		lib: {
			entry: resolve(__dirname, "resources/index"),
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			external: ["vue", "@inertiajs/vue3"],
		},
	},
});
