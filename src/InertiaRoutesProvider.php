<?php

namespace AdminUI\InertiaRoutes;

use Inertia\Inertia;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Http\Request;
use Illuminate\Contracts\Http\Kernel;
use Illuminate\Support\ServiceProvider;
use AdminUI\InertiaRoutes\InertiaRoutesResponse;

class InertiaRoutesProvider extends ServiceProvider
{
	public function register()
	{
		// Bind our custom Gateway to the Inertia SSR one to allow us to override the dispatch function
		$this->app->bind(\Inertia\Ssr\HttpGateway::class, \AdminUI\InertiaRoutes\TidyHttpGateway::class);
		// Register the packages facades
		$this->app->singleton('inertia-routes', function () {
			return new InertiaRoutesResponse;
		});
		// Merge in inertia-routes config
		$this->mergeConfigFrom(__DIR__ . '/../config/inertia-routes.php', 'inertia-routes');
	}

	public function boot(Kernel $kernel)
	{
		$this->packageSetup();
		$kernel->prependMiddleware(InertiaRoutesMiddleware::class);
	}

	private function packageSetup()
	{
		if ($this->app->runningInConsole()) {
			$this->publishes([
				__DIR__ . '/../config/inertia-routes.php' => config_path('inertia-routes.php'),
			], 'inertia-routes');
		}
	}
}
