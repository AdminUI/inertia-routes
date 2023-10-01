# AdminUI - Inertia Routes

<a href="https://packagist.org/packages/adminui/inertia-routes"><img src="https://img.shields.io/packagist/v/adminui/inertia-routes?logo=packagist&logoColor=white" alt="Build status" /></a>
<a href="https://packagist.org/packages/adminui/inertia-routes"><img src="https://img.shields.io/packagist/dt/adminui/inertia-routes" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/adminui/inertia-routes"><img src="https://img.shields.io/packagist/l/adminui/inertia-routes" alt="License"></a>
<img src="https://github.com/adminui/inertia-routes/actions/workflows/tests.yml/badge.svg?branch=main">

This package is designed to complement Laravel/Inertia applications that want to use named routes within their Javascript, only without the overhead of loading the routes with every single API request.

A Vue plugin is also provided which offers both a `composable` function to resolve route names as well as a `global property`

---

## Installation

`composer require adminui/inertia-routes`

---

> ### vite.config.js

---

Add the following settings to your config

```js
import { resolve } from "node:path";

resolve: {
    alias: {
        ziggy: resolve("vendor/tightenco/ziggy/src/js"),
        inertiaRoutes: resolve("vendor/adminui/inertia-routes"),
    },
},
```

---

> ### app.js

---

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

---

> ### ssr.js

---

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

> ### Composition API

```js
import { useRoute } from "inertiaRoutes";
const route = useRoute();

console.log(route("home"));
```

> ### Options API

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

> ### Template

```html
<inertia-link :href="$route('home')">Home Page</inertia-link>
```

---

## Configuration

You can publish your config file by running `php artisan v:p --tag=inertia-routes` in the command line

This will publish a file in `/config/inertia-routes.php` where you can override the default options. Full details and examples regarding the below configuration options can be found there.

Be aware that defining both `except` and `only` within the same config block will result in no route filtering being applied

| variable           | type     | description                                                              |
| ------------------ | -------- | ------------------------------------------------------------------------ |
| `tidy`             | boolean  | Runs a TIDY filter over the SSR output                                   |
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

---

## Frequently Asked Questions

### What's the Tidy function about?

This package was created as a complement to the AdminUI CMS/Ecommerce sites running on InertiaJS. As such, it may contain a few other helpful options we use.

When the SSR script outputs your rendered HTML, it's usually in a single, compressed line. While this is often fine (indeed usually preferable), we had a few clients who disliked not being to read the HTML page source formatted like a normal website. We built this function for them. It simply passes the rendered HTML through a PHP extension called `Tidy` which formats the HTML in a standardised way. This is an optional extra and not enabled by default.
