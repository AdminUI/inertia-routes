<?php

declare(strict_types=1);

namespace AdminUI\InertiaRoutes\Commands;

use AdminUI\InertiaRoutes\Helpers\RequestHelper;
use Illuminate\Console\Command;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Process;
use Illuminate\Support\Facades\Route;
use Illuminate\Validation\Rules\Enum;
use ReflectionNamedType;

use function Illuminate\Filesystem\join_paths;

class GenerateFormTypesCommand extends Command
{
    protected $signature = 'inertia:generate-form-types';

    protected $description = 'Generate a TypeScript file containing all eligible form types';

    public function handle(): int
    {
        $namespaces = config('inertia.types.namespaces', ['App\\']);
        $outputFile = config('inertia.types.output_file', join_paths('resources', 'js'));

        $output = "";

        foreach (Route::getRoutes() as $route) {
            $parameters = RequestHelper::extractParamsFromRoute($route, $namespaces);
            if (!$parameters) continue;

            foreach ($parameters as $parameter) {
                $type = $parameter->getType();

                if (! $type instanceof ReflectionNamedType || $type->isBuiltin()) {
                    continue;
                }

                $class = $type->getName();
                if (! is_subclass_of($class, FormRequest::class)) {
                    continue;
                }

                $baseName = class_basename($class);
                $rulesets = RequestHelper::extractRulesetsFromFormRequest($class);

                $types = collect();

                foreach ($rulesets as $key => $ruleset) {
                    $field = [
                        'type' => 'unknown',
                        'nullable' => false,
                        'optional' => true
                    ];

                    foreach ($ruleset as $rule) {
                        if (is_string($rule)) {
                            [$name] = explode(':', $rule, 2);
                            match ($name) {
                                'required', 'present' => $field['optional'] = false,
                                'nullable' => $field['nullable'] = true,
                                'string', 'email', 'uuid', 'url', 'date', 'date_format' => $field['type'] = 'string',
                                'integer', 'numeric', 'decimal' => $field['type'] = 'number',
                                'boolean' => $field['type'] = 'boolean',
                                'array' => $field['type'] = 'array',
                                'file', 'image' => $field['type'] = 'File',
                                default => null
                            };
                        } else if ($rule instanceof Enum) {
                            $options = RequestHelper::extractOptionsFromEnumRule($rule);
                            $field['type'] = implode("|", $options);
                            break;
                        }
                    }

                    $types->put($key, $field);
                }

                $processedFields = self::nest($types);
                $renderedTypes = self::render($processedFields);

                $output .= "  interface " . $baseName . "Form {\n";
                $output .= "  " . $renderedTypes . "\n";
                $output .= "  }";
            }
        }

        $output = "export {};\n\ndeclare namespace InertiaForms {\n   " . $output . "\n}";

        $target = join_paths(base_path($outputFile), 'forms.d.ts');

        file_put_contents($target, $output);

        if (Process::run('which npx')->successful()) {
            $result = Process::run([
                'npx',
                'prettier',
                '--write',
                $target,
            ]);
        }

        $this->info("Form types written to " . $target);

        return self::SUCCESS;
    }

    private static function nest(Collection $fields): Collection
    {
        $tree = collect();

        foreach ($fields as $key => $field) {
            $parts = explode('.', $key);

            self::insert($tree, $parts, $field);
        }

        return $tree;
    }

    private static function insert(Collection &$tree, array $parts, array $field): void
    {
        $name = array_shift($parts);

        if (empty($parts)) {
            if ($tree->has($name)) {
                $existing = $tree->get($name);

                if (isset($existing['children'])) {
                    $field['children'] = $existing['children'];
                }

                if (isset($existing['isArray'])) {
                    $field['isArray'] = true;
                }
            }

            $tree->put($name, $field);

            return;
        }

        $isArray = isset($parts[0]) && $parts[0] === '*';

        if ($isArray) {
            array_shift($parts);
        }

        if (! $tree->has($name)) {
            $tree->put($name, [
                'type' => 'object',
                'nullable' => false,
                'optional' => false,
                'children' => collect(),
            ]);
        }

        $node = $tree->get($name);

        $node['children'] ??= collect();
        $node['isArray'] ??= $isArray;

        self::insert($node['children'], $parts, $field);

        $tree->put($name, $node);
    }

    private static function render(Collection $fields, int $depth = 1): string
    {
        $indent = str_repeat('    ', $depth);

        return $fields
            ->map(function (array $field, string $name) use ($depth, $indent) {
                $optional = $field['optional'] ? '?' : '';

                if (isset($field['children'])) {
                    $children = self::render($field['children'], $depth + 1);

                    $type = "{\n{$children}\n{$indent}}";

                    if ($field['type'] === 'array' && $field['isArray']) {
                        $type .= '[]';
                    }

                    if ($field['nullable']) {
                        $type .= ' | null';
                    }

                    return "{$indent}{$name}{$optional}: {$type};";
                }

                $type = match ($field['type']) {
                    'string' => 'string',
                    'boolean' => 'boolean',
                    'number', 'numeric', 'integer' => 'number',
                    default => str_contains($field['type'], '|')
                        ? collect(explode('|', $field['type']))
                        ->map(fn($v) => "'{$v}'")
                        ->implode(' | ')
                        : $field['type'],
                };

                if ($field['nullable']) {
                    $type .= ' | null';
                }

                return "{$indent}{$name}{$optional}: {$type};";
            })
            ->implode("\n");
    }
}
