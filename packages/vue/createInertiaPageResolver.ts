import type { Component } from "vue";
import { h } from "vue";
import { castArray, map, join, first } from "es-toolkit/compat";
import { unzip, uniq, takeWhile } from "es-toolkit";

interface ConditionalLayout {
	condition: ((name: string) => boolean) | string | RegExp | boolean;
	layout: Component;
}
interface PageResolverConfig {
	wrapper?: Component & { __is_wrapper?: boolean };
	default?: Component;
	layouts: ConditionalLayout[];
	errorClass: string;
	errorTextClass: string;
	rootPath: string;
	fileSuffix: string;
}
type PageModule = { default: Component & { layout: Component } };
type PageLoader = () => Promise<PageModule>;
type PagesGlob = Record<string, PageModule | PageLoader>;

const pageNotFound = (name: string, errorClass: string, errorTextClass: string) => {
	return h(
		"div",
		{
			class: errorClass,
		},
		[h("span", "Unable to find page: "), h("span", { class: errorTextClass }, name)],
	);
};

const resolveConfig = (config: Partial<PageResolverConfig>): PageResolverConfig => {
	const resolvedConfig = {
		default: config.default,
		wrapper: config.wrapper,
		layouts: config.layouts ?? [],
		errorClass: config.errorClass ?? "inertia-page-resolver--error",
		errorTextClass: config.errorTextClass ?? "inertia-page-resolver--error-text",
		fileSuffix: config.fileSuffix ?? ".vue",
		rootPath: config.rootPath ?? "./pages"
	};
	if (resolvedConfig.rootPath.endsWith("/") === false) {
		resolvedConfig.rootPath += "/";
	}

	if (resolvedConfig.wrapper) {
		if (typeof config.wrapper === "function") {
			console.error("resolveInertiaPage: Layout wrapper must be a synchronous component");
		}
		resolvedConfig.wrapper.__is_wrapper = true;
	}
	if (resolvedConfig.rootPath.startsWith("./") === false) {
		console.error("resolveInertiaPage: rootPath should start with ./");
	}

	return resolvedConfig;
};

export function createInertiaPageResolver(pagesGlob: PagesGlob, config: Partial<PageResolverConfig> = {}) {
	if (!pagesGlob) {
		return console.error("[Inertia Routes]: No pages passed to `createInertiaPageResolver`");
	}

	const resolvedConfig = resolveConfig(config);

	return async (name: string): Promise<PageModule | Component> => {
		const resolved = pagesGlob[`${resolvedConfig.rootPath}${name}${resolvedConfig.fileSuffix}`];
		const page = typeof resolved === "function" ? await resolved() : resolved;

		if (!page) {
			return pageNotFound(name, resolvedConfig.errorClass, resolvedConfig.errorTextClass);
		}

		if (page.default?.layout) {
			page.default.layout = castArray(page.default.layout);
			const hasWrapper = page.default.layout.some((l) => l.__is_wrapper === true);
			if (hasWrapper === false && resolvedConfig.wrapper) {
				page.default.layout.unshift(resolvedConfig.wrapper);
			}
			return page;
		}

		if (resolvedConfig.default) {
			// Push the default layout to the end of the layouts array
			resolvedConfig.layouts.push({ condition: true, layout: resolvedConfig.default });
		}

		for (const configLayout of resolvedConfig.layouts) {
			const { condition, layout } = configLayout;
			let shouldUse = false;
			if (typeof condition === "function") {
				shouldUse = condition(name);
			} else if (typeof condition === "boolean") {
				shouldUse = condition;
			} else if (condition instanceof RegExp) {
				shouldUse = condition.test(name);
			} else {
				shouldUse = name.startsWith(condition);
			}

			if (shouldUse) {
				page.default.layout = castArray(layout);
				break;
			}
		}

		if (!page.default.layout && resolvedConfig.wrapper) {
			page.default.layout = [resolvedConfig.wrapper];
		} else if (resolvedConfig.wrapper) {
			page.default.layout ??= [];

			if (Array.isArray(page.default.layout)) {
				const hasWrapper = page.default.layout.some((l) => l.__is_wrapper === true);
				if (hasWrapper === false && resolvedConfig.wrapper) {
					/** @ts-expect-error */
					page.default.layout.unshift(resolvedConfig.wrapper);
				}
			}
		}

		return page;
	};
}
