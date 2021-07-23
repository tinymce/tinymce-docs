### `importcss_file_filter`

This option enables you to add the CSS files that should be used for populating the styles drop down. This will go through any `@import` rules and only target the specified file. This option can be either a `string`, `regexp` or a `function`. This also allows you to import styles form existing files on the currently editable page in inline mode.

**Type:** `String`

#### Example: Using `importcss_file_filter`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'importcss',
  menubar: 'format',
  content_css: '/my-styles.css',
  importcss_file_filter: '/my-styles.css'
});
```
