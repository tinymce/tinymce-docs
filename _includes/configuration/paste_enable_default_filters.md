### `paste_enable_default_filters`

This option allows you to disable {{site.productname}}'s default paste filters when set to false.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Using `paste_enable_default_filters`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  menubar: 'edit',
  toolbar: 'paste',
  paste_enable_default_filters: false
});
```

