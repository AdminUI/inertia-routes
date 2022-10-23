<?php

namespace AdminUI\InertiaRoutes\Tests\Mocks\Controllers;

use Illuminate\Routing\Controller;

class AdminController extends Controller
{
	public function index()
	{
		return inertia('admin');
	}
}
