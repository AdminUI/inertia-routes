# Extended Inertia Form Helper

This composable supercharges the standard Inertia form helper by connecting with the Laravel controller, and accessing your FormRequest rules to provide the following features:

## Standard form inputs

- Automatic form hydration, no need to pass a data object
- Resolves your route and uses it for submission methods
- Infers necessary HTML attributes based on Laravel validation rules (required,minlength,maxlength,step,accept,type=email)
- Adds required to inputs when present in the ruleset
- Automatic v-model binding

## Vuetify form components

- Binds your error messages for each field automatically to the error-messages prop
- Passes a label field derived from the field name
- Activates counter for strings with a min:NUM or max:NUM validation

## Usage

```html
<template>
  <VForm @submit.prevent="form.post()">
    <VTextField v-bind="form.bind.name" />
    <VBtn type="submit">Submit</VBtn>
  </VForm>
</template>

<script setup>
  import { useExtendedForm } from "@adminui/inertia-routes";

  const form = useExtendedForm("user.store", {
    framework: "vuetify",
  });
</script>
```

## Props

The following props can be passed to `useExtendedForm`:

| **Arg**                  | **Type**    | **Default** | **Description**                                                               |
| ------------------------ | ----------- | ----------- | ----------------------------------------------------------------------------- |
| `routeName`              | `RouteProp` | _required_  | Either a string route name, or a tuple with [routeName, routeParams (object)] |
| `options`                | `object`    |             |                                                                               |
| `options.rememberKey`    | `string`    | None        | Inertia form key to store data/errors in history state                        |
| `options.data`           | `object`    | None        | Any default data needed to pass to `useForm`                                  |
| `options.framework`      | `Framework` | "none"      | Currently "none" or "vuetify", add extra bindings to Vuetify inputs           |
| `options.autoHydrate`    | `boolean`   | true        | Infer form fields and default values from your controller form request        |
| `options.model`          | `boolean`   | true        | Include v-model in the automatic bindings for each input                      |
| `options.resetOnSuccess` | `boolean`   | false       | Reset the form to default when it is successfully submitted                   |
| `options.visitOptions`   | `object`    | {}          | Inertia visit options that are passed through to submission methods           |

## Advanced Example

```js
import { useExtendedForm } from "@adminui/inertia-routes";

const form = useExtendedForm(
  [
    "users.store",
    {
      account: props.account.id,
    },
  ],
  {
    data: { name: `${props.account.name} user` },
    framework: "vuetify",
    model: false,
  },
);
```

## Requirements

All you need on your backend is to bind a FormRequest class into the controller action that your route resolves to.

```php
public function store(CreateUserRequest $request)
{
	//
}
```

> [!WARNING]
> If you usually validate your request input inside the controller, this won't work. You **must** use a FormRequest class

## Submit functions

All of the standard Inertia form-helper methods are available for submitting a form: `submit`, `get`, `post`, `patch`, `put` and `delete`.

By default, you don't need to pass any arguments since the extended helper reuses the route you provided to `useExtendedForm`.

```js
const onSubmit = () => {
  form.post();
};
```

If you need to override the URL, you can pass it as the first argument to the methods:

```js
const onSubmit = () => {
  form.patch("/override-the-url");
};
```

Alternatively, if you need to pass Inertia visit options, you can do that too:

```js
const onSubmit = () => {
  form.put({
    only: ["users"],
  });
};
```

Want to send both, go for it:

```js
const onSubmit = () => {
  form.delete("/override-the-url", {
    preserveState: true,
    preserveScroll: true,
    only: ["users"],
  });
};
```

## Highlighting Vuetify required fields

If you want your required fields to stand out, try adding

```css
.v-field__field:has(input[required]) .v-field-label::after {
  content: "*";
  color: rgb(var(--v-theme-error));
}
```

to your stylesheet.
