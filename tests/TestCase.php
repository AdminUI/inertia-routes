<?php

namespace AdminUI\InertiaRoutes\Tests;

use Illuminate\Support\Facades\Route;
use AdminUI\InertiaRoutes\InertiaRoutesProvider;
use Inertia\ServiceProvider as InertiaServiceProvider;

class TestCase extends \Orchestra\Testbench\TestCase
{
	protected function setUp(): void
	{
		parent::setUp();
		Route::middleware('web')
			->group(__DIR__ . '/Mocks/Routes/web.php');
	}

	protected function getPackageProviders($app)
	{
		return [
			InertiaRoutesProvider::class,
			InertiaServiceProvider::class
		];
	}

	protected function getEnvironmentSetUp($app)
	{
		$app['config']->set('inertia-routes.configs', [
			'default' => [],
			'frontend' => [
				'except' => ['admin.*']
			],
			'backend' => [
				'only' => ['admin.*']
			]
		]);

		// Set the path used for view files
		$app['config']->set('view.paths', [
			__DIR__ . '/Mocks/Views'
		]);

		// Set the path used for view files
		$app['config']->set('inertia.testing.page_paths', [
			__DIR__ . '/Mocks/Pages'
		]);
	}
}
