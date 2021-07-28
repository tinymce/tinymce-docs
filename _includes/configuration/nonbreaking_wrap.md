### `nonbreaking_wrap`

This option allows you to force {{site.productname}} to wrap non-breaking space characters inserted by the plugin in a `<span class="mce-nbsp-wrap"></span>` element. This will prevent the non-breaking space being replaced by the editor or browser when typing additional spaces.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Using `nonbreaking_wrap`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'nonbreaking',
  menubar: 'insert',
  toolbar: 'nonbreaking',
  nonbreaking_wrap: false
});
```

