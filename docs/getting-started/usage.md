# Using the Inertia Routes Composable

Your main point-of-contact with Inertia Routes is via the `useRoute` composable, which returns a function that can be used to resolve any provided route names.

::: code-group

```html [Composition API]
<script setup>
  import { useRoute } from "@adminui/inertia-routes";
  const route = useRoute();

  console.log(route("home"));
</script>
```

```js [Options API]
export default {
  data() {
    return {};
  },
  computed: {
    homeUrl() {
      return this.$route("home");
    },
  },
};
```

:::

Alternatively, you can use global helper directly in your template:

```html
<template>
  <inertia-link :href="$route('home')">Home Page</inertia-link>
</template>
```
