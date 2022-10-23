<?php

namespace AdminUI\InertiaRoutes;

use Illuminate\Support\Arr;

class InertiaRoutesResponse
{
	protected string $selectedConfig = 'default';

	public function getConfig(): array
	{
		$selectedIsValid = $this->validateKey($this->selectedConfig);
		return $selectedIsValid ? config('inertia-routes.configs.' . $this->selectedConfig) : $this->fallbackConfig();
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
		return Arr::exists(config('inertia-routes.configs'), $key) && Arr::isAssoc(config('inertia-routes.configs.' . $key));
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
