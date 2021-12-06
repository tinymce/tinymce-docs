### `table_border_styles`

This option is used to specify a list of pre-defined cell border widths for quick access on the `tablecellborderstyle` toolbar button or menu item, in addition to the dialog options. This option accepts any valid [CSS border style](https://developer.mozilla.org/en-US/docs/Web/CSS/border-style#values).

Type
: `Array`

Default Value
: ```
[
  {title: 'Solid', value: 'solid'},
  {title: 'Dotted', value: 'dotted'},
  {title: 'Dashed', value: 'dashed'},
  {title: 'Double', value: 'double'},
  {title: 'Groove', value: 'groove'},
  {title: 'Ridge', value: 'ridge'},
  {title: 'Inset', value: 'inset'},
  {title: 'Outset', value: 'outset'},
  {title: 'None', value: 'none'},
  {title: 'Hidden', value: 'hidden'}
]
```

#### Example: Using `table_border_styles`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
  menubar: 'table',
  toolbar: 'table',
  table_border_styles: [
    {title: 'Solid', value: 'solid'},
    {title: 'Dotted', value: 'dotted'},
    {title: 'Dashed', value: 'dashed'}
  ]
});
```