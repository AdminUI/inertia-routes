<?php

namespace AdminUI\InertiaRoutes;

use Closure;
use Inertia\Inertia;
use Tighten\Ziggy\Ziggy;
use AdminUI\InertiaRoutes\Facades\InertiaRoutes;

class InertiaRoutesMiddleware
{
	public function handle($request, Closure $next)
	{
		$firstLoadOnlyProps = $request->inertia() ? null : function () use ($request) {

			// Get the Inertia Routes settings
			$config = InertiaRoutes::getConfig();

			// Get the Ziggy config so that we can restore them after temporarily overriding them
			$initialConfig = config('ziggy');

			// If set, temporarily override Ziggy settings
			if (!empty($config['only'])) {
				config(['ziggy.only' => $config['only']]);
			}
			if (!empty($config['except'])) {
				config(['ziggy.except' => $config['except']]);
			}

			// Generate the routes object and convert it to an array
			$routes = new Ziggy($config['group']);
			$jsonRoutes = $routes->toArray();

			// Run any filters on the routes defined in the config file
			if (isset($config['filter']) && is_callable($config['filter']) === true) {
				$jsonRoutes['routes'] = call_user_func($config['filter'], $jsonRoutes['routes'], $config);
			}
			// Add the request URL to the array to enable SSR/first load to use current()
			$jsonRoutes['location'] = $request->url();

			// Revert the Ziggy settings to their initial state
			config(['ziggy' => $initialConfig]);
			return $jsonRoutes;
		};
		// Share either the routes object (first load) or `null` (navigation loads)
		Inertia::share('ziggy', $firstLoadOnlyProps);

		return $next($request);
	}
}
