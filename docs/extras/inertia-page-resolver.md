# Inertia Page Resolver

## What it does

A helper function exported by the Vue3 package, this gives greater flexibility for setting up layouts at an application level as well as providing a few nice-to-haves.

```js
createInertiaApp({
  resolve: createInertiaPageResolver(
    import.meta.glob("./Pages/**/*.vue", { eager: true }), //
    {
      rootPath: "./Pages",
      default: DefaultLayout,
    },
  ),
  title: (title) => (title ? `${title} - Ping CRM` : "Ping CRM"),
  withApp(app) {
    app.use(inertiaRoutes);
  },
});
```

> [!IMPORTANT]  
> If you have both an client-side and an SSR entry-point for your app, the config object must be identical for both, to avoid hydration errors.

## Requirements

Since this helper function requires a `import.meta.glob` object, your application must use Vite for the build process.

## Arguments

### PagesGlob

The first argument to `createInertiaPageResolver` must be a glob of pages (usually created via `import.meta.glob()`).

### Config

| **Property**     | **Type**    | **Default** | **Description**                                                        |
| ---------------- | ----------- | ----------- | ---------------------------------------------------------------------- |
| `wrapper`        | `Component` | null        | A layout wrapper that is added to the start of the layout stack always |
| `default`        | `Component` | null        | The default layout to use if the Vue page doesn't override             |
| `layouts`        | `array`     | null        | An array of conditional layout loaders, see below for more details     |
| `errorClass`     | `string`    | \<empty>    | Class string to apply to the error page when a page isn't found        |
| `errorTextClass` | `string`    | \<empty>    | Class string to apply to the page name on the error page               |
| `rootPath`       | `string`    | "./pages"   | The root path of your pages glob.                                      |
| `fileSuffix`     | `string`    | ".vue"      | The suffix of the pages in your glob                                   |

### Layouts

The `layouts` array, passed to the helper as part of the config (see above) allows you to conditionally change the default layout based on the page loaded.

::: tip

Unlike the `layout` callback that can be passed to `createInertiaApp` (v3+), this method allows you to wrap a Layout around all layouts (via the `wrapper` prop), even if your page has defined a layout in its options.

For example:

```js
// SomePage.vue
<script setup>
defineOptions({
  layout: SomeOtherLayout,
});
</script>

// app.js
createInertiaApp({
  layout: (name, props) => {
    // This callback is never called for SomePage.vue
    return DefaultLayout
  },
  withApp(app) {
    app.use(inertiaRoutes);
  },
});
```

:::

Each item in the array must be an object with a `condition` property and a `layout` property.

Conditions may be any of the following:

- **Boolean**: Useful for always including or excluding a layout
- **String**: Loads the layout if the page name starts with the given string
- **RegExp**: The page name matches the given regular expression
- **Function**: A function that receives the page name and returns a boolean

```js
{
  resolve: createInertiaPageResolver(import.meta.glob("./Pages/**/*.vue", { eager: true }), {
    rootPath: "./Pages",
    default: DefaultLayout,
    layouts: [
      {
        condition: "auth/",
        layout: AuthLayout,
      },
      {
        condition: /^user\/[0-9]+\/account/,
        layout: UserAccountLayout,
      },
      {
        condition: (name) => name.includes("experimental"),
        layout: ExperimentalLayout,
      },
    ],
  });
}
```
