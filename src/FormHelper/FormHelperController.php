<?php

namespace AdminUI\InertiaRoutes\FormHelper;

use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Arr;

class FormHelperController
{
	public function __invoke(Request $request)
	{
		$validated = $request->validate([
			'routeName' => ['nullable']
		]);

		if (empty($validated['routeName'])) {
			return response()->json([]);
		} else if (is_array($validated['routeName'])) {
			$routeName = Arr::first($validated['routeName']);
		} else {
			$routeName = $validated['routeName'];
		}

		$route = Route::getRoutes()->getByName($routeName)->signatureParameters();
		$requestClass = collect($route)->first(function ($param) {
			if ($param->getName() === "request") return true;
			$class = $param->getType();
			if (Str::endsWith($class, 'Request')) return true;
			else if (is_subclass_of($class, FormRequest::class, true)) return true;
			else return false;
		});
		$requestClass = $requestClass->getType()->getName();
		$instance = new $requestClass;
		$rules = $instance->rules();
		$validator = Validator::make([], $rules);
		$normalised = $validator->getRules();
		$filtered = collect($normalised)->map(function ($ruleset) {
			return collect($ruleset)->filter(fn($rule) => is_string($rule) === true)->values();
		});
		return response()->json($filtered);
	}
}
