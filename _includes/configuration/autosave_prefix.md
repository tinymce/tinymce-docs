### `autosave_prefix`

This option allows you to set the prefix that is used for local storage keys.

**Type**: `String`

**Default Value**: `'tinymce-autosave-{path}{query}-{id}-'`

#### Example: Using `autosave_prefix`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'autosave',
  autosave_prefix: 'tinymce-autosave-{path}{query}-{id}-'
});
```
