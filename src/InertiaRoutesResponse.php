<?php

namespace AdminUI\InertiaRoutes;

use Illuminate\Support\Arr;

class InertiaRoutesResponse
{
	protected string $selectedConfig = 'default';

	public function getConfig(): array
	{
		$selectedIsValid = $this->validateKey($this->selectedConfig);
		return $selectedIsValid ? $this->normaliseSelectedConfig() : $this->fallbackConfig();
	}

	public function setConfig(string $key): void
	{
		$isValid = $this->validateKey($key);
		if (true === $isValid) {
			$this->selectedConfig = $key;
		} else {
			throw new \Exception("Inertia Routes config block named \"$key\" not found. Please check your inertia-routes config file");
		}
	}

	private function validateKey(string $key): bool
	{
		if (config()->has('inertia-routes.configs') === false) {
			throw new \Exception("Inertia Routes configs array not found. Please check your inertia-routes config file");
		}
		return Arr::exists(config('inertia-routes.configs'), $key) && Arr::isAssoc(config('inertia-routes.configs.' . $key));
	}

	private function normaliseSelectedConfig(): array
	{
		$config = config('inertia-routes.configs.' . $this->selectedConfig);
		return array_merge($this->fallbackConfig(), $config);
	}

	private function fallbackConfig(): array
	{
		return [
			'group' => null,
			'only' => null,
			'except' => null,
			'filter' => null
		];
	}
}
