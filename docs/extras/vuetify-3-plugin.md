# Vuetify 3 Plugin

## What it does

This package provides a plugin for projects using Vuetify 3 that integrates you routes with Vuetify components' `:to` prop.

```html
<template>
  <v-btn to="pages.about-us">About Us</v-btn>
</template>
```

or if you need to pass route parameters, send a tuple instead:

```html
<template>
  <v-btn
    :to="[
		'pages.case-studies', 
		{ study: 42 }
	]"
  >
    Read this Case Study
  </v-btn>
</template>
```

## Inertia link props support

All router-enabled components in Vuetify also support any Link props from InertiaJS:

```html
<template>
	<v-btn
		prefetch
		cache-for="20s"
		:to="[
			'pages.testimonials',
			{ company: "acme-inc" }
		]"
	> Read Acme Inc's Review </v-btn>
</template>
```

## Installing the plugin

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
