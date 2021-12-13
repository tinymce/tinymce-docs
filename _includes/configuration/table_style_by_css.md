### `table_style_by_css`

This option enables you to force the Table Properties dialog to use HTML5/CSS3 standards for setting cell spacing and cellpadding. By default, these are added as attributes to the table element. By setting this to true, cell spacing is applied to the table element as a `border-spacing` style and cell padding is applied to all `td` elements as a `padding` style.

Type
: `Boolean`

Default Value
: `false`

Possible Values
: `true`, `false`

#### Example: Using `table_style_by_css`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
  menubar: 'table',
  toolbar: 'table',
  table_style_by_css: false
});
```

