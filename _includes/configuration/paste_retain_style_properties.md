### `paste_retain_style_properties`

{% include DEPRECATED/generic-5_10.md %}

This option allows you to specify which styles you want to retain when pasting contents from MS Word and similar Office suite products. This option can be set to a space-separated list of CSS style names, or `"all"` if you want all styles to be retained.

**Type:** `String`

#### Example: Using `paste_retain_style_properties`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  menubar: 'edit',
  toolbar: 'paste',
  paste_retain_style_properties: 'color font-size'
});
```

