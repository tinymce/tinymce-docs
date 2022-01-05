### `table_border_color_map`

This option is used to specify the default values for the table cell border color picker, which can be opened with the `tablecellbordercolor` toolbar button or menu item. If no values are defined, the toolbar button and menu item will use the values or default values of the [`color_map` option]({{site.baseurl}}/content/user-formatting-options/#color_map). This option does not modify the border color picker in the table dialogs. This option accepts Hex, RGB and HSL color values.

The [custom color picker]({{site.baseurl}}/content/user-formatting-options/#custom_colors) is not available for the `tablecellbordercolor` toolbar button or menu item.

Type
: `Array`

Default Value
: See [`color_map` option]({{site.baseurl}}/content/user-formatting-options/#color_map)

#### Example: Using `table_border_color_map`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
  menubar: 'table',
  toolbar: 'table',
  table_border_color_map: [
    {title: 'Red', value: 'FF0000'},
    {title: 'White', value: 'FFFFFF'},
    {title: 'Yellow', value: 'F1C40F'}
  ]
});
```
