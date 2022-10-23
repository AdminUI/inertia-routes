<?php

namespace AdminUI\InertiaRoutes\Tests\Mocks\Controllers;

use Illuminate\Routing\Controller;

class HomeController extends Controller
{
	public function index()
	{
		return inertia('home');
	}
}
