import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue2";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
	esbuild: {
		pure: mode === "production" ? ["console.log"] : [],
	},
	plugins: [vue()],
	resolve: {
		alias: {
			ziggy: resolve("vendor/tightenco/ziggy/src/js"),
		},
	},
	build: {
		outDir: "dist-legacy",
		lib: {
			entry: resolve(__dirname, "resources/legacy/index"),
			formats: ["es", "cjs"],
		},
		rollupOptions: {
			external: ["vue", "@inertiajs/vue2"],
		},
	},
}));
