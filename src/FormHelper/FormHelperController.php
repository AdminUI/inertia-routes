<?php

namespace AdminUI\InertiaRoutes\FormHelper;

use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Validator;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\ValidationException;

class FormHelperController
{
	public function __invoke(Request $request)
	{
		$validated = $request->validate([
			'routeName' => ['nullable']
		]);

		if (empty($validated['routeName'])) {
			return ValidationException::withMessages([
				'routeName' => ['No route given. Ensure it is passed as the first argument of "useExtendedForm"']
			]);
		} else if ($this->isValid($validated['routeName']) === false) {
			return ValidationException::withMessages([
				'routeName' => ['Invalid route given']
			]);
		}

		if (is_array($validated['routeName'])) {
			$routeName = Arr::first($validated['routeName']);
		} else {
			$routeName = $validated['routeName'];
		}

		$route = Route::getRoutes()->getByName($routeName);
		if (empty($route) || !method_exists($route, 'signatureParameters')) {
			return ValidationException::withMessages([
				'routeName' => ['Couldn\'t find a valid route with this name']
			]);
		}

		$params = $route->signatureParameters();
		$requestClass = $this->getRequestClassFromParams($params);
		if (empty($requestClass)) {
			return ValidationException::withMessages([
				'routeName' => ['No form request found in controller action arguments']
			]);
		}

		$normalisedRules = $this->getNormalisedRulesFromRequestClass($requestClass);

		if (empty($normalisedRules)) {
			return ValidationException::withMessages([
				'routeName' => ['Couldn\'t resolve any rules from this route']
			]);
		}

		$filtered = collect($normalisedRules)->map(function ($ruleset) {
			return collect($ruleset)->filter(fn($rule) => is_string($rule) === true)->values();
		});
		return response()->json($this->checkForSpecialFields($filtered));
	}

	private function checkForSpecialFields(Collection $fields): Collection
	{
		$newFields = collect();
		$fields->each(function ($rules, $field) use ($newFields) {
			$confirmed = $rules->firstWhere(fn($rule) => Str::startsWith($rule, "confirm"));
			if (!empty($confirmed)) {
				$confirmedField = Str::contains($confirmed, ":") ? Str::afterLast($confirmed, ":") : $field . "_confirmation";
				$newFields->put($confirmedField, $rules->filter(fn($rule) => Str::doesntStartWith($rule, "confirm")));
			}
		});

		return $fields->merge($newFields);
	}

	/**
	 * Get an array of rules for each field
	 */
	private function getNormalisedRulesFromRequestClass(string $requestClass): ?array
	{
		$instance = new $requestClass;
		if (empty($instance) || !method_exists($instance, 'rules')) return null;

		$validator = Validator::make([], $instance->rules());
		return $validator->getRules();
	}

	/**
	 * Using refection controller actions params, find the form request class
	 */
	private function getRequestClassFromParams(array $params): ?string
	{
		$requestClass = collect($params)->first(function ($param) {
			if ($param->getName() === "request") return true;
			$class = $param->getType();
			if (Str::endsWith($class, 'Request')) return true;
			else if (is_subclass_of($class, FormRequest::class, true)) return true;
			else return false;
		});
		return !empty($requestClass) ? $requestClass->getType()->getName() : null;
	}

	/**
	 * Check if the input is a valid route prop
	 */
	private function isValid(mixed $route): bool
	{
		if (is_string($route)) return true;
		if (is_array($route) && is_string(Arr::first($route))) return true;
		return false;
	}
}
