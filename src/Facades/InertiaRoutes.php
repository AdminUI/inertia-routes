<?php

namespace AdminUI\InertiaRoutes\Facades;

use Illuminate\Support\Facades\Facade;

class InertiaRoutes extends Facade
{

	protected static function getFacadeAccessor()
	{
		return 'inertia-routes';
	}
}
