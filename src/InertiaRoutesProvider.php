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
        $this->app->bind(\Inertia\Ssr\HttpGateway::class, \AdminUI\InertiaRoutes\TidyHttpGateway::class);
        //
    }

    public function boot(Request $request)
    {
        $firstLoadOnlyProps = $request->inertia() ? null : function () use ($request) {
            $group = config('inertia.route_group', null);
            $only = config('inertia.route_only', null);
            $except = config('inertia.route_except', null);

            $initialOnly = config('ziggy.only');
            $initialExcept = config('ziggy.except');

            if (!empty($only)) {
                config(['ziggy.only' => $only]);
            }
            if (!empty($except)) {
                config(['ziggy.except' => $except]);
            }

            $routes = new Ziggy($group, $request->url());
            $jsonRoutes = $routes->toArray();

            if (!empty($only)) {
                config(['ziggy.only' => $initialOnly]);
            }
            if (!empty($except)) {
                config(['ziggy.except' => $initialExcept]);
            }
            return $jsonRoutes;
        };
        Inertia::share('ziggy', $firstLoadOnlyProps);
    }
}
