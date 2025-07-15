# Setting Inertia Routes up in Your App

In your InertiaJS app's entry file, you should install Inertia Routes as a plugin like so:

```js
// app.js
import { useInertiaRoutes } from "@adminui/inertia-routes";

setup({ el, App, props, plugin }) {
    const inertiaRoutesPlugin = useInertiaRoutes(props);

    createApp({ render: () => h(App, props) })
        .use(plugin)
        .use(inertiaRoutesPlugin)
        .mount(el);
}
```

## With Server-Side Rendering

If you have an SSR entry file, the installation method is exactly the same:

```js
// ssr.js
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
