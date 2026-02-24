<?php

namespace AdminUI\InertiaRoutes\FormHelper;

use ReflectionClass;
use Illuminate\Support\Arr;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rules\Enum;
use Illuminate\Support\Facades\Validator;
use AdminUI\InertiaRoutes\Exceptions\InvalidRouteException;
use AdminUI\InertiaRoutes\Exceptions\MissingRouteException;
use AdminUI\InertiaRoutes\Exceptions\NoRulesFoundException;
use AdminUI\InertiaRoutes\Exceptions\MissingFormRequestException;

class FormHelperController
{
	  public function __invoke(Request $request)
    {
        $validated = $request->validate([
            'routeName' => ['nullable'],
        ]);

        if (empty($validated['routeName'])) {
            return response()->json(['error' => (new MissingRouteException)->getMessage()], 422);

        } elseif ($this->isValid($validated['routeName']) === false) {
            return response()->json(['error' => (new InvalidRouteException)->getMessage()], 422);
        }

        if (is_array($validated['routeName'])) {
            $routeName = Arr::first($validated['routeName']);
        } else {
            $routeName = $validated['routeName'];
        }

        $route = Route::getRoutes()->getByName($routeName);
        if (empty($route) || ! method_exists($route, 'signatureParameters')) {
            return response()->json(['error' => (new InvalidRouteException)->getMessage()], 422);
        }

        $params = $route->signatureParameters();
        $requestClass = $this->getRequestClassFromParams($params);
        if (empty($requestClass)) {
            return response()->json(['error' => (new MissingFormRequestException)->getMessage()], 422);
        }

        $normalisedRules = $this->getNormalisedRulesFromRequestClass($requestClass);

        if (empty($normalisedRules)) {
            return response()->json(['error' => (new NoRulesFoundException)->getMessage()], 404);
        }

        $filtered = collect($normalisedRules)->map(function ($ruleset) {
            return collect($ruleset)->map(fn ($rule) => $this->replaceEnums($rule))->filter(fn ($rule) => is_string($rule) === true)->values();
        });

        return response()->json($this->checkForSpecialFields($filtered));
    }

	private function replaceEnums($rule): mixed
	{
		if ($rule instanceof Enum) {
			$ref = new ReflectionClass($rule);
			$props = ['type', 'only', 'except'];
			$data = [];
			foreach ($props as $key) {
				$prop = $ref->getProperty($key);
				$prop->setAccessible(true);
				$data[$key] = $prop->getValue($rule);
			}
			// If it's not a backed enum, abort
			if (empty($data['type']) || is_subclass_of($data['type'], \BackedEnum::class) === false) {
				return $rule;
			}

			if (!empty($data['only'])) {
				$data['only'] = array_column($data['only'], 'value');
			}
			if (!empty($data['except'])) {
				$data['except'] = array_column($data['except'], 'value');
			}

			$cases = $data['type']::cases();
			$values = array_column($cases, 'value');
			if (!empty($data['only'])) {
				$options = $data['only'];
			} else if (!empty($data['except'])) {
				$options = Arr::reject($values, fn($value) => in_array($value, $data['except']));
			} else {
				$options = $values;
			}

			return "in:" . implode(",", $options);
		} else return $rule;
	}

	private function checkForSpecialFields(Collection $fields): Collection
	{
		$newFields = collect();
		$fields->each(function ($rules, $field) use ($newFields) {
			$confirmed = $rules->firstWhere(fn($rule) => Str::startsWith($rule, "confirm"));
			if (!empty($confirmed)) {
				$confirmedField = Str::contains($confirmed, ":") ? Str::afterLast($confirmed, ":") : $field . "_confirmation";
				$newFields->put($confirmedField, $rules->filter(fn($rule) => Str::doesntStartWith($rule, "confirm"))->values());
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
			else if (is_subclass_of($class, 'Illuminate\Foundation\Http\FormRequest', true)) return true;
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
