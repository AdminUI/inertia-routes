## Dropped Vue 2 support

As `Vue 2` is now End of Life, support for it has been removed.

## Added build step

`Inertia Routes` is no longer dependent on your project for its Ziggy JS dependecies, these are now bundled into the `inertiaRoutes` JS package. You can therefore remove the `ziggy` alias from your Vite config file.

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
	<v-btn :to="['pages.case-studies', { study: 42 }]">Read this Case Study</v-btn>
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

## Laravel 11 Support

`Inertia Routes` is now compatible with applications running Laravel versions 9, 10 and 11.

## Ziggy version 2

This package now uses Ziggy version 2. This will affect the methods and properties available on the `route()` class. Please consult their upgrade guide for changes you may have to implement.

[Ziggy: Upgrading from 1.x to 2.x](https://github.com/tighten/ziggy/blob/2.x/UPGRADING.md#upgrading-from-1x-to-2x)
