<?php

namespace AdminUI\InertiaRoutes;

use Inertia\Inertia;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Http\Request;
use Illuminate\Support\ServiceProvider;

class InertiaRoutesProvider extends ServiceProvider
{
    public function register()
    {
        // Bind our custom Gateway to the Inertia SSR one to allow us to override the dispatch function
        $this->app->bind(\Inertia\Ssr\HttpGateway::class, \AdminUI\InertiaRoutes\TidyHttpGateway::class);
    }

    public function boot(Request $request)
    {
        $firstLoadOnlyProps = $request->inertia() ? null : function () use ($request) {
            // Get the Inertia Routes settings
            $group = config('inertia.route_group', null);
            $only = config('inertia.route_only', null);
            $except = config('inertia.route_except', null);

            // Get the Ziggy config so that we can restore them after temporarily overriding them
            $initialOnly = config('ziggy.only');
            $initialExcept = config('ziggy.except');

            // If set, temporarily override Ziggy settings
            if (!empty($only)) {
                config(['ziggy.only' => $only]);
            }
            if (!empty($except)) {
                config(['ziggy.except' => $except]);
            }

            // Generate the routes object and convert it to an array
            $routes = new Ziggy($group);
            $jsonRoutes = $routes->toArray();
            // Add the request URL to the array to enable SSR/first load to use current()
            $jsonRoutes['location'] = $request->url();

            // Revert the Ziggy settings to their initial state
            if (!empty($only)) {
                config(['ziggy.only' => $initialOnly]);
            }
            if (!empty($except)) {
                config(['ziggy.except' => $initialExcept]);
            }
            return $jsonRoutes;
        };
        // Share either the routes object (first load) or `null` (navigation loads)
        Inertia::share('ziggy', $firstLoadOnlyProps);
    }
}
