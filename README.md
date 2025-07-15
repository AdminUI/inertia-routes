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

### PHP

```sh
composer require adminui/inertia-routes
```

> [!IMPORTANT]
> When requiring this package, you'll be asked to allow the `pixelfear/composer-dist-plugin` Composer plugin. This is used to download the JavaScript assets for the package and must be accepted.

### JavaScript

After running the composer function above, you can link the JavaScript package by doing the following:

```sh
pnpm add ./vendor/adminui/inertia-routes
# OR
npm install ./vendor/adminui/inertia-routes
# OR
yarn add ./vendor/adminui/inertia-routes
```

> app.js

```js
import { useInertiaRoutes } from "@adminui/inertia-routes";

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
import { useInertiaRoutes } from "@adminui/inertia-routes";

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
import { useRoute } from "@adminui/inertia-routes";
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

## Extended Form Helper

The Vue3 package offers a bonus export in the form of `useExtendedForm`. This composable supercharges the standard Inertia form helper by connecting with the Laravel controller, and accessing your **FormRequest** rules to provide the following features:

- Automatic form hydration, no need to pass a data object
- Resolves your route and uses it for submission methods
- Infers necessary HTML attributes based on Laravel validation rules (required,minlength,maxlength,step,accept,type=email)
- Adds `required` to inputs when present in the ruleset
- Automatic `v-model` binding

Then for Vuetify:

- Binds your error messages for each field automatically to the `error-messages` prop
- Passes a label field derived from the field name
- Activates counter for strings with a `min:NUM` or `max:NUM` validation

> [!TIP]
> If you want your required fields to stand out, try adding
>
> ```
> .v-field__field:has(input[required]) .v-field-label::after {
> 	content: "*";
> 	color: rgb(var(--v-theme-error));
> }
> ```
>
> to your stylesheet

### Example

```html
<script setup>
	import { useExtendedForm } from "@adminui/inertia-routes";

	const form = useExtendedForm("about.store", {
		framework: "vuetify",
	});
</script>

<template>
	<VForm @submit.prevent="form.post()">
		<VTextField v-bind="form.bind.name" />
		<VBtn type="submit">Submit</VBtn>
	</VForm>
</template>
```

You can use any of the normal form methods like "submit", "get", "post", "patch", "put" and "delete". The only difference is that now the URL is not required.

Then all you need is your Laravel controller is a `FormRequest` class binding to receive the request:

```php
public function store(CreateUserRequest $request)
{
	//
}
```

Then when you want to submit your form, simply call:

```js
const onSubmit = () => {
	form.post();
};
```

_or_

```js
const onSubmit = () => {
	form.post("/override-the-url");
};
```

_or_

```js
const onSubmit = () => {
	form.post({
		only: ["users"], // Pass Inertia visit options
	});
};
```

_or_

```js
const onSubmit = () => {
	form.post("/override-the-url", {
		only: ["users"], // Override URL and pass Inertia visit options
	});
};
```

> [!TIP]
> If you usually validate your request input inside the controller, this won't work. You _must_ use a FormRequest class

### Props

The following props can be passed to `useExtendedForm`:

| **Arg**               | **Type**    | **Default** | **Description**                                                               |
| --------------------- | ----------- | ----------- | ----------------------------------------------------------------------------- |
| `routeName`           | `RouteProp` | _required_  | Either a string route name, or a tuple with [routeName, routeParams (object)] |
| `options`             | `object`    |             |                                                                               |
| `options.rememberKey` | `string`    | None        | Inertia form key to store data/errors in history state                        |
| `options.data`        | `object`    | None        | Any default data needed to pass to `useForm`                                  |
| `options.framework`   | `Framework` | "none"      | Currently "none" or "vuetify", add extra bindings to Vuetify inputs           |
| `options.autoHydrate` | `boolean`   | true        | Infer form fields and default values from your controller form request        |
| `options.model`       | `boolean`   | true        | Include v-model in the automatic bindings for each input                      |

### Advanced Example

```js
import { useExtendedForm } from "@adminui/inertia-routes";

const form = useExtendedForm(
	[
		"users.store",
		{
			account: props.account.id,
		},
	],
	{
		data: { name: `${props.account.name} user` },
		framework: "vuetify",
		model: false,
	},
);
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

All router-enabled components in Vuetify also support any `Link` props from InertiaJS:

```html
<template>
	<v-btn prefetch cache-for="20s" :to="['pages.testimonials', { company: "acme-inc" }]"> Read Acme Inc's Review </v-btn>
</template>
```

### Installation

```js
import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/vue3";
import { useInertiaRoutes, vuetifyRoutesPlugin } from "@adminui/inertia-routes";
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

## Support Open-Source Software

We're providing this package free-of-charge to the community. However, all development and maintenance costs time, energy and money. So please help fund this project if you can.

<p align="center" style="display:flex;align-items:center;gap:1rem;justify-content:center">
<a href="https://github.com/sponsors/craigrileyuk" target="_blank">
<img src="https://img.shields.io/badge/sponsor-GitHub%20Sponsors-fafbfc?style=for-the-badge&logo=github">
</a>
<a href="https://www.buymeacoffee.com/craigrileyuk" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" ></a>
</p>
