### `table_use_colgroups`



This option adds `colgroup` and `col` elements to new tables for specifying column widths. Existing tables and tables added using `setContent` or paste are not affected.

{{site.productname}} only supports the `width` attribute on `col` elements. Other attributes are not supported, such as the `span` attribute.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:**  `true`, `false`

#### Example: Enabling `colgroup` support using `table_use_colgroups`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
  table_use_colgroups: true
});
```

