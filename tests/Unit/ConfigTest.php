<?php

use AdminUI\InertiaRoutes\Facades\InertiaRoutes;

it('returns the default config', function () {
	$config = InertiaRoutes::getConfig();
	expect($config)->toBeArray();
	expect($config)->toMatchArray([
		'group' => null,
		'only'	=> null,
		'except' => null,
		'filter' => null
	]);
});

it('throws an error is no configs array is found', function () {
	config(['inertia-routes' => null]);

	expect(fn () => InertiaRoutes::getConfig())
		->toThrow("Inertia Routes configs array not found. Please check your inertia-routes config file");
});

it('throws an error when trying to set a non-existent config', function () {
	expect(fn () => InertiaRoutes::setConfig('fictional'))
		->toThrow('Inertia Routes config block named "fictional" not found. Please check your inertia-routes config file');
});
