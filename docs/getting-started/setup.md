# Setting Inertia Routes up in Your App

In your InertiaJS app's entry file, you should install Inertia Routes as a plugin like so:

::: code-group

```js [Inertia v3]
import { inertiaRoutes } from "@adminui/inertia-routes";

createInertiaApp({
  layout: () => DefaultLayout,
  withApp(app) {
    app
      .use(vuetify) //
      .use(inertiaRoutes, { global: false })
      .use(vuetifyRoutesPlugin);
  },
});
```

```js [Inertia v2]
// app.js
import { useInertiaRoutes } from "@adminui/inertia-routes";

createInertiaApp({
  setup({ el, App, props, plugin }) {
    const inertiaRoutesPlugin = useInertiaRoutes(props);

    createApp({ render: () => h(App, props) })
      .use(plugin)
      .use(inertiaRoutesPlugin)
      .mount(el);
  },
});
```

:::

## With Server-Side Rendering

From Inertia v3 onwards, SSR should work out-of-the-box when using the Inertia Vite plugin, there is no longer a need for a separate `ssr.js` file.

However, if you do have an SSR entry file, the installation method is exactly the same:

```js
// ssr.js
import { inertiaRoutes } from "@adminui/inertia-routes";

createServer((page) =>
  createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => resolvePageComponent(`./pages/${name}.vue`, import.meta.glob("./pages/**/*.vue")),
    setup({ app, props, plugin }) {
      return createSSRApp({
        render: () => h(app, props),
      })
        .use(plugin)
        .use(inertiaRoutes);
    },
  }),
);
```
