## convert_fonts_to_spans

If you set this option to `true`, {{site.productname}} will convert all `font` elements to `span` elements and generate `span` elements instead of `font` elements. This option should be used in order to get more W3C compatible code, since font elements are deprecated.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  convert_fonts_to_spans : false
});
```
