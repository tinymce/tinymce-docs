### `linkchecker_service_url`

A URL of the server-side link validation service. This is required option, without it plugin will fail to operate and will throw a corresponding warning on the screen.

**Type:** `String`

#### Example: Using `linkchecker_service_url`

```js
tinymce.init({
    selector: 'textarea',
    plugins: 'linkchecker',
    linkchecker_service_url: 'http://mydomain.com/linkchecker'
});
```

