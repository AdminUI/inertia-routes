<?php

use Illuminate\Support\Facades\Route;
use AdminUI\InertiaRoutes\Tests\Mocks\Controllers\HomeController;
use AdminUI\InertiaRoutes\Tests\Mocks\Controllers\AdminController;

Route::get('/', [HomeController::class, 'index'])->name('home');

Route::get('/admin', [AdminController::class, 'index'])->name('admin.dashboard');
