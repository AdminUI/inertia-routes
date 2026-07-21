<?php

declare(strict_types=1);

namespace AdminUI\InertiaRoutes\Helpers;

use Illuminate\Support\Arr;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Str;
use Illuminate\Validation\Rules\Enum;
use ReflectionMethod;

class RequestHelper
{
    /**
     * When given an Enum rule, creates an array of value options
     */
    public static function extractOptionsFromEnumRule(Enum $rule): array
    {
        $ref = invade($rule);
        $props = ['type', 'only', 'except'];
        $data = [];
        foreach ($props as $key) {
            $data[$key] = $ref->{$key};
        }

        // If it's not a backed enum, abort
        if (empty($data['type']) || is_subclass_of($data['type'], \BackedEnum::class) === false) {
            return [];
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

        return $options;
    }

    public static function extractParamsFromRoute(\Illuminate\Routing\Route $route, array|Collection $namespaces): ?Collection
    {
        $controller = $route->getControllerClass();
        $namespaces = collect($namespaces);

        if ($namespaces->isNotEmpty() && ! $namespaces->contains(
            fn(string $namespace) => Str::startsWith($controller, $namespace)
        )) {
            return null;
        }

        $method = $route->getActionMethod();

        if ($method === $controller) {
            $method = "__invoke";
        }
        $reflection = new ReflectionMethod($controller, $method);

        return collect($reflection->getParameters());
    }

    public static function extractRulesetsFromFormRequest(string $class): ?Collection
    {
        $req = new $class;
        if (empty($req) || !method_exists($req, 'rules')) {
            return null;
        }

        $validator = Validator::make([], $req->rules());
        return collect($validator->getRules());
    }
}
