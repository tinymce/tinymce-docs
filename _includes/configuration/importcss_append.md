### `importcss_append`

If set to `true` this option will append the imported styles to the end of the `Format` menu and will replace the default formats.

Type
: `Boolean`

Default Value
: `false`

#### Example: Using `importcss_append`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'importcss',
  menubar: 'format',
  content_css: '/my-styles.css',
  importcss_append: true
});
```
