### `table_border_widths`

This option is used to specify a list of pre-defined cell border widths for quick access on the `tablecellborderwidth` toolbar button or menu item. This option accepts any valid [CSS numeric value](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Values_and_Units#numeric_data_types).

Type
: `Array`

Default Value
: ```
[
  {title: '1px', value: '1px'},
  {title: '2px', value: '2px'},
  {title: '3px', value: '3px'},
  {title: '4px', value: '4px'},
  {title: '5px', value: '5px'}
]
```

#### Example: Using `table_border_widths`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
  menubar: 'table',
  toolbar: 'table',
  table_border_widths: [
    {title: 'small', value: '1px'},
    {title: 'medium', value: '3px'},
    {title: 'large', value: '5px'},
  ]
});
```