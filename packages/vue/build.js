#!/usr/bin/env node
import esbuild from "esbuild";
import { nodeExternalsPlugin } from "esbuild-node-externals";

const watch = process.argv.slice(1).includes("--watch");

const config = {
	bundle: true,
	minify: true,
	sourcemap: true,
	target: "es2020",
	alias: {
		ziggy: "../../vendor/tightenco/ziggy/src/js",
	},

	plugins: [
		nodeExternalsPlugin({
			allowList: ["ziggy", "@vueuse/core"],
		}),
		{
			name: "inertia-routes",
			setup(build) {
				let count = 0;
				build.onEnd(() => {
					if (count++ !== 0) {
						console.log(`Rebuilding ${build.initialOptions.entryPoints} (${build.initialOptions.format})…`);
					}
				});
			},
		},
	],
};

const builds = [
	{
		entryPoints: ["index.ts"],
		format: "esm",
		outfile: "../../dist/vue/index.mjs",
		platform: "browser",
		target: ["esnext"],
	},
	{
		entryPoints: ["index.ts"],
		format: "cjs",
		outfile: "../../dist/vue/index.cjs",
		platform: "browser",
		target: ["esnext"],
	},
];

builds.forEach(async (build) => {
	const context = await esbuild.context({ ...config, ...build });

	if (watch) {
		console.log(`Watching ${build.entryPoints} (${build.format})…`);
		await context.watch();
	} else {
		await context.rebuild();
		context.dispose();
		console.log(`Built ${build.entryPoints} (${build.format})…`);
	}
});
