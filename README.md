# AdminUI - Inertia Routes

This package is designed to complement Laravel/Inertia applications that want to use named routes within their Javascript, only without the overhead of loading the routes with every single API request.

A Vue plugin is also provided which offers both a `composable` function to resolve route names as well as a `global property`

## Installation

`composer require adminui/inertia-routes`

---
### vite.config.js
---

Add the following settings to your config

```js
resolve: {
    alias: {
        ziggy: resolve("vendor/tightenco/ziggy/src/js"),
        inertiaRoutes: resolve("vendor/adminui/inertia-routes"),
    },
},
```
---
### app.js / ssr.js 
---
```js
import { useInertiaRoutes } from "inertiaRoutes";

// Then, inside the app.js setup function:
setup({ el, App, props, plugin }) {
    const inertiaRoutesPlugin = useInertiaRoutes(props);

    createApp({ render: () => h(App, props) })
        .use(plugin)
        .use(inertiaRoutesPlugin)
        .mount(el);
}

// Or in your ssr.js file
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

### Composition API

```js
import { useRoute } from "inertiaRoutes";
const route = useRoute();

console.log(route('home'));
```

### Options API

```js
export default {
    data() {
        return {}
    },
    computed: {
        homeUrl() {
            return this.$route('home');
        }
    }
}
```

### Template

```html
<inertia-link :href="$route('home')">Home Page</inertia-link>
```

## Options

There are a couple of extra options you can add to your `config/inertia.php` file that will be used by Inertia Routes:

| variable      | type           | description |
| ------------- | -------------- | ----------- |
| `route_group` | array\|string  | Pass a route group to be used instead of your standard Ziggy routes. |
| `ssr.tidy`    | boolean        | Runs a TIDY filter over the SSR output |

*Note: You can still use your standard `config/ziggy.php` settings to designate routes to be included or excluded if you don't set a `route_group`*
