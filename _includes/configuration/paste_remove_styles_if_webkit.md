### `paste_remove_styles_if_webkit`

This option allows you to disable {{site.productname}}'s default paste filters for webkit styles.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Using `paste_remove_styles_if_webkit`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menubar: 'edit',
  toolbar: 'paste',
  paste_remove_styles_if_webkit: false
});
```

