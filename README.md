# AdminUI - Inertia Routes

This package is designed to complement Laravel/Inertia applications that want to use named routes within their Javascript, only without the overhead of loading the routes with every single API request.

A Vue plugin is also provided which offers both a `composable` function to resolve route names as well as a `global property`

## Installation

`composer require adminui/inertia-routes`

---
> ### vite.config.js
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
> ### app.js / ssr.js 
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

> ### Composition API

```js
import { useRoute } from "inertiaRoutes";
const route = useRoute();

console.log(route('home'));
```

> ### Options API

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

> ### Template

```html
<inertia-link :href="$route('home')">Home Page</inertia-link>
```

## Configuration

There are a couple of extra options you can add to your `config/inertia.php` file that will be used by Inertia Routes:

| variable      | type           | description |
| ------------- | -------------- | ----------- |
| `route_group` | array\|string  | Pass a route group to be used instead of your standard Ziggy routes.  |
| `route_only`  | array          | Filters your routes to only include ones matching the supplied array. |
| `route_except`| array          | Filters your routes to include all except ones matching the supplied array. |
| `ssr.tidy`    | boolean        | Runs a TIDY filter over the SSR output |

See the [Ziggy documentation](https://github.com/tighten/ziggy#filtering-routes) for further details about formatting your `route_group`, `route_only` and `route_except` options.

*Note: Your `only` and `except` options in `config/ziggy.php` will be temporarily overridden if you set the `route_only` or `route_except` options in `config.php/inertia.php`*

## How it works 

Each method of integrating named routes from your Laravel backend with a JS framework on the frontend via Ziggy usually comes with its own pros and cons:

1. **`@routes` blade directive:** Has to download the entire Ziggy JS library as part of the HTML document with every full page load. Also not compatible with SSR since it relies on accessing methods from the `window` object.
2. **`ziggy:generate` routes file:** Needs to be regenerated with any route or environment changes (since the root URL is hard-coded into the .js file)
3. **API route call:** Can be tricky to set up to work with dev, production and SSR environments. Also carries the overhead of waiting for a separate Ajax request to complete before the app can be rendered.
4. **`Inertia::share` of routes object:** A good option with one downside – The routes are sent down as part of every Inertia request (initial or navigational). 

What this library does is tweak option 4 as well as adding extra functionality. The package detects when it is the initial full-page Inertia request and then sends down the Ziggy routes object. On subsequent navigations, the routes are not sent down again. Your app instead retain and use the routes from the first request.

The extra configuration options also allow you to set `group`, `only` and `except` options that only affect your frontend Ziggy routes. This can be helpful if you have separate Inertia `apps` running your backend and frontend and you wish to include only a subset of your total routes.

## What's the Tidy function about?

This package was created as a complement to the AdminUI CMS/Ecommerce sites running on InertiaJS. As such, it may contain a few other helpful options we use.

When the SSR script outputs your rendered HTML, it's usually in a single, compressed line. While this is often fine (indeed usually preferable), we had a few clients who disliked not being to read the HTML page source formatted like a normal website. We built this function for them. It simply passes the rendered HTML through a PHP extension called `Tidy` which formats the HTML in a standardised way. This is an optional extra and not enabled by default.
