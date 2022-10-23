<?php

use AdminUI\InertiaRoutes\Facades\InertiaRoutes;
use Inertia\Testing\AssertableInertia as Assert;


it('gets the Ziggy routes object on first navigation', function () {

	$response = $this->get('/');
	$response->assertInertia(
		function (Assert $page) {
			$page->component('home')
				->has('ziggy')
				->has('ziggy.routes');

			$routesArray = $page->toArray()['props']['ziggy']['routes'];

			expect($routesArray)->toHaveKeys(['home', 'admin.dashboard']);
		}
	);
});

it('filters out routes when config has "except" prop', function () {
	InertiaRoutes::setConfig('frontend');

	$response = $this->get('/');
	$response->assertInertia(
		function (Assert $page) {
			$routesArray = $page->toArray()['props']['ziggy']['routes'];

			expect($routesArray)->toHaveKeys(['home']);
			expect($routesArray)->not->toHaveKeys(['admin.dashboard']);
		}
	);
});

it('includes matching routes when config has "only" prop', function () {
	InertiaRoutes::setConfig('backend');

	$response = $this->get('/');
	$response->assertInertia(
		function (Assert $page) {
			$routesArray = $page->toArray()['props']['ziggy']['routes'];

			expect($routesArray)->not->toHaveKey('home');
			expect($routesArray)->toHaveKeys(['admin.dashboard']);
		}
	);
});

it('receives no routes on subsequent requests', function () {
	InertiaRoutes::setConfig('backend');

	$response = $this->withHeaders([
		'X-Inertia' => true,
		'X-Requested-With' => 'XMLHttpRequest'
	])->get('/');

	$updatedProps = $response['props'];
	expect($updatedProps['ziggy'])->toBeNull();
});
