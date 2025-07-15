<?php

namespace AdminUI\InertiaRoutes;

use Illuminate\Contracts\Http\Kernel;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\ServiceProvider;
use AdminUI\InertiaRoutes\InertiaRoutesResponse;
use AdminUI\InertiaRoutes\FormHelper\FormHelperController;

class InertiaRoutesProvider extends ServiceProvider
{
	public function register()
	{
		// Register the package's facades
		$this->app->singleton('inertia-routes', function () {
			return new InertiaRoutesResponse;
		});
		// Merge in inertia-routes config
		$this->mergeConfigFrom(__DIR__ . '/../config/inertia-routes.php', 'inertia-routes');
	}

	/**
	 * @param \Illuminate\Foundation\Http\Kernel $kernel
	 */
	public function boot(Kernel $kernel)
	{
		$this->packageSetup();
		$kernel->prependMiddleware(InertiaRoutesMiddleware::class);

		// Declare the endpoint for getting input inherence
		Route::post('/inertia-routes/form-helper', FormHelperController::class);
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
