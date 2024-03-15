<p align="center">
<img src="assets/aui-logo.png?raw=true" alt="AUI logo" height="50"/>
</p>

# AdminUI - Inertia Routes

<a href="https://packagist.org/packages/adminui/inertia-routes"><img src="https://img.shields.io/packagist/v/adminui/inertia-routes?logo=packagist&logoColor=white" alt="Build status" /></a>
<a href="https://packagist.org/packages/adminui/inertia-routes"><img src="https://img.shields.io/packagist/dt/adminui/inertia-routes" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/adminui/inertia-routes"><img src="https://img.shields.io/packagist/l/adminui/inertia-routes" alt="License"></a>
<img src="https://github.com/adminui/inertia-routes/actions/workflows/build.yml/badge.svg?branch=main">

This package is designed to complement Laravel/Inertia/Vue3 applications that want to use named routes within their Javascript, only without the overhead of loading the routes with every single API request.

A Vue plugin is also provided which offers both a `composable` function to resolve route names as well as a `global property`

---

## Installation

`composer require adminui/inertia-routes`

> vite.config.js

Add the following settings to your config

```js
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
	resolve: {
		alias: {
			inertiaRoutes: resolve("vendor/adminui/inertia-routes"),
		},
	},
});
```

> app.js

```js
import { useInertiaRoutes } from "inertiaRoutes";

setup({ el, App, props, plugin }) {
    const inertiaRoutesPlugin = useInertiaRoutes(props);

    createApp({ render: () => h(App, props) })
        .use(plugin)
        .use(inertiaRoutesPlugin)
        .mount(el);
}
```

> ssr.js

```js
import { useInertiaRoutes } from "inertiaRoutes";

setup({ app, props, plugin }) {
    const inertiaRoutesPlugin = useInertiaRoutes(props);

    return createSSRApp({
        render: () => h(app, props),
    })
        .use(plugin)
        .use(inertiaRoutesPlugin);
}
```

## Usage

> Composition API

```js
import { useRoute } from "inertiaRoutes";
const route = useRoute();

console.log(route("home"));
```

> Options API

```js
export default {
	data() {
		return {};
	},
	computed: {
		homeUrl() {
			return this.$route("home");
		},
	},
};
```

> Template

```html
<inertia-link :href="$route('home')">Home Page</inertia-link>
```

## Vuetify 3 Plugin

The package also offers a new plugin for Vuetify 3-based projects. This plugin enables `Inertia Routes` support for the `to` parameter on any applicable components.

### Usage

```html
<template>
	<v-btn to="pages.about-us">About Us</v-btn>
</template>
```

or if you need to pass route parameters, send a tuple instead:

```html
<template>
	<v-btn :to="['pages.case-studies', { study: 42 }]"> Read this Case Study </v-btn>
</template>
```

### Installation

```js
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { useInertiaRoutes, vuetifyRoutesPlugin } from "inertiaRoutes";
import { createVuetify } from "vuetify";

const vuetify = createVuetify();

createInertiaApp({
	resolve: (name) => {
		const pages = import.meta.glob("./Pages/**/*.vue", { eager: true });
		return pages[`./Pages/${name}.vue`];
	},
	setup({ el, App, props, plugin }) {
		const inertiaRoutesPlugin = useInertiaRoutes(props);

		createApp({ render: () => h(App, props) })
			.use(plugin)
			.use(vuetify)
			.use(inertiaRoutesPlugin)
			.use(vuetifyRoutesPlugin)
			.mount(el);
	},
});
```

---

## Configuration

You can publish your config file by running `php artisan v:p --tag=inertia-routes` in the command line

This will publish a file in `/config/inertia-routes.php` where you can override the default options. Full details and examples regarding the below configuration options can be found there.

Be aware that defining both `except` and `only` within the same config block will result in no route filtering being applied

| variable           | type     | description                                                              |
| ------------------ | -------- | ------------------------------------------------------------------------ |
| `configs`          | array    | An associative array containing configuration options for Inertia Routes |
| `configs.*.group`  | string   | Uses a Ziggy route group defined in /config/ziggy.php.                   |
| `configs.*.except` | array    | Include all routes except ones matching the defined patterns             |
| `configs.*.only`   | array    | Include only routes that match the defined patterns                      |
| `configs.*.filter` | callable | A final callable function to execute on the generated routes array       |

See the [Ziggy documentation](https://github.com/tighten/ziggy#filtering-routes) for further details about formatting your `group`, `only` and `except` options.

### Changing config

Inertia Routes provides a facade for changing the config block that will be used when generating your routes:

```php
\AdminUI\InertiaRoutes\Facades\InertiaRoutes::setConfig('admin');
```

You can call this function any time before the Inertia shares are compiled, but a good place might be from within your Inertia Middleware's constructor.

---

## How it works

Each method of integrating named routes from your Laravel backend with a JS framework on the frontend via Ziggy usually comes with its own pros and cons:

1. **`@routes` blade directive:** Has to download the entire Ziggy JS library as part of the HTML document with every full page load. Also not compatible with SSR since it relies on accessing methods from the `window` object.
2. **`ziggy:generate` routes file:** Needs to be regenerated with any route or environment changes (since the root URL is hard-coded into the .js file)
3. **API route call:** Can be tricky to set up to work with dev, production and SSR environments. Also carries the overhead of waiting for a separate Ajax request to complete before the app can be rendered.
4. **`Inertia::share` of routes object:** A good option with one downside – The routes are sent down as part of every Inertia request (initial or navigational).

What this library does is tweak option 4 as well as adding extra functionality. The package detects when it is the initial full-page Inertia request and then sends down the Ziggy routes object. On subsequent navigations, the routes are not sent down again. Your app instead retains and uses the routes from the first request.

The extra configuration options also allow you to set `group`, `only` and `except` options that only affect your frontend Ziggy routes. This can be helpful if you have separate Inertia apps running your backend and frontend and you wish to include only a subset of your total routes.

> AdminUI is a product of [evoMark](https://evomark.co.uk)
