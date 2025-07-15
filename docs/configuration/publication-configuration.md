# Configuring Inertia Routes

## Publishing your config

All configuration for Inertia Routes is done via the designated Laravel config file. You can access this by publishing it in your app.

From the command line at the root of your app, type:

```sh
php artisan v:p --tag=inertia-routes
```

This will publish a file in `/config/inertia-routes.php` where you can override the default options.

## Options

| variable           | type     | description                                                              |
| ------------------ | -------- | ------------------------------------------------------------------------ |
| `configs`          | array    | An associative array containing configuration options for Inertia Routes |
| `configs.*.group`  | string   | Uses a Ziggy route group defined in /config/ziggy.php.                   |
| `configs.*.except` | array    | Include all routes except ones matching the defined patterns             |
| `configs.*.only`   | array    | Include only routes that match the defined patterns                      |
| `configs.*.filter` | callable | A final callable function to execute on the generated routes array       |

See the [Ziggy documentation](https://github.com/tighten/ziggy#filtering-routes) for further details about formatting your group, only and except options.

> [!WARNING]
> Defining both except and only within the same config block will result in no route filtering being applied

## Changing config programmatically

Inertia Routes provides a facade for changing the config block that will be used when generating your routes:

```php
\AdminUI\InertiaRoutes\Facades\InertiaRoutes::setConfig('admin');
```

You can call this function any time before the Inertia shares are compiled, but a good place might be from within your Inertia middleware's constructor.
