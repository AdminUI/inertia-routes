# Installing Inertia Routes

Because it requires features provided to Laravel packages through composer, we distribute Inertia Routes through Packagist (the main Composer repository). So first, go to the root of your Laravel application and run the following:

```sh
composer require adminui/inertia-routes
```

> [!IMPORTANT]
> When requiring this package, you'll be asked to allow the **pixelfear/composer-dist-plugin** Composer plugin. This is used to download the JavaScript assets for the package and **must be accepted**.

## Installing the JavaScript

Since we're not installing our JavaScript via the NPM repository, we need another way to add the package.

::: code-group

```sh [pnpm]
pnpm add ./vendor/adminui/inertia-routes
```

```sh [yarn]
yarn add ./vendor/adminui/inertia-routes
```

```sh [npm]
npm install ./vendor/adminui/inertia-routes
```

:::
