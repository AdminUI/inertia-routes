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
        //
    }

    public function boot(Request $request)
    {
        $this->app->bind(\Inertia\Ssr\HttpGateway::class, \AdminUI\InertiaRoutes\TidyHttpGateway::class);

        $group = config('inertia.route_group', null);

        $firstLoadOnlyProps = $request->inertia() ? null : fn () => new Ziggy($group, $request->url());
        Inertia::share('ziggy', $firstLoadOnlyProps);
    }
}
