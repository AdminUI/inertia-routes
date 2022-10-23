<?php

return [
	/*
    |--------------------------------------------------------------------------
    | Enable SSR Tidy
    |--------------------------------------------------------------------------
    |
    | An additional utility that passes the output from the Inertia SSR render
	| function through a tidy filter. This will convert "minimised" style HTML
	| into traditional multi-line nested HTML.
	|
	| Requires the php-tidy extension to be installed
    |
    */
	'tidy' => false,

	/*
    |--------------------------------------------------------------------------
    | Configuration Settings
    |--------------------------------------------------------------------------
    |
    | Inertia Routes allows having multiple configuration settings inside your
	| Laravel app. While "default" is initially loaded, you can change this
	| by calling `AdminUI\InertiaRoutes\Facades\InertiaRoutes::setConfig('key')`
	| at any point before Inertia renders your page output.
	|
	| This can be useful if your Laravel app has multiple Inertia apps running,
	| such as a backend admin panel in conjunction with a frontend public-facing
	| Inertia-based application.
	|
	| Within the `__construct()` function on each applicable Inertia Middleware
	| file might be a good place to call the `setConfig` function
    |
    */
	'configs' => [
		'default' => [
			/**
			 * @var string - Use a group defined in your Ziggy config file
			 *
			 * @see https://github.com/tighten/ziggy#filtering-using-groups
			 */
			'group' => null,
			/**
			 * @var array - Only include routes matching the following patterns
			 *
			 * @see https://github.com/tighten/ziggy#basic-filtering
			 */
			'only' => null,
			/**
			 * @var array - Include all routes except those matching the following patterns
			 *
			 * @see https://github.com/tighten/ziggy#basic-filtering
			 */
			'except' => null,
			/**
			 * @var callable
			 * @param array {$routes} - The Ziggy routes associative array
			 * @param array {$config} - Your current Inertia Routes config array
			 *
			 * A function or method that executes just before generating your routes.
			 * At this point, all the previous filters (group, only, except) have already
			 * been applied. You can use this function to add or remove routes based on
			 * execution context, such as whether the current user has permission to perform
			 * a certain action.
			 *
			 * You can use lambas, closures, class/object methods and any other callable type
			 * here. For example:
			 *
			 * Lambda
			 * 'filter' => function (array $routes, array $config): array {
			 * 	   // Your filtering code here
			 *     return $routes;
			 * }
			 *
			 * Static class method
			 * 'filter' => [RoutesFilter::class, 'removeVipRoutes']
			 *
			 * Object/instance method
			 * 'filter' => [new RoutesFilter, 'removeVipRoutes']
			 *
			 * @return array - An associative array of Ziggy routes
			 */
			'filter' => null
		],
	]
];
