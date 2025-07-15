# How it Works

Each method of integrating named routes from your Laravel backend with a JS framework on the frontend via Ziggy usually comes with its own pros and cons:

1. @routes blade directive: Has to download the entire Ziggy JS library as part of the HTML document with every full page load. Also not compatible with SSR since it relies on accessing methods from the window object.
2. ziggy:generate routes file: Needs to be regenerated with any route or environment changes (since the root URL is hard-coded into the .js file)
3. API route call: Can be tricky to set up to work with dev, production and SSR environments. Also carries the overhead of waiting for a separate Ajax request to complete before the app can be rendered.
4. Inertia::share of routes object: A good option with one downside – The routes are sent down as part of every Inertia request (initial or navigational).

What this library does is tweak option 4 as well as adding extra functionality. The package detects when it is the initial full-page Inertia request and then sends down the Ziggy routes object. On subsequent navigations, the routes are not sent down again. Your app instead retains and uses the routes from the first request.

The extra configuration options also allow you to set group, only and except options that only affect your frontend Ziggy routes. This can be helpful if you have separate Inertia apps running your backend and frontend and you wish to include only a subset of your total routes.
