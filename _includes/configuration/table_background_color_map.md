### `table_background_color_map`

{{site.requires_5_9v}}

This option is used to specify the default values for the table cell background color picker `tablecellbackgroundcolor`. If no values are defined, the toolbar button and menu item will use the values or default values of the [`color_map` option]({{site.baseurl}}/configure/content-appearance/#color_map). This option accepts Hex, RGB and HSL color values.

The [custom color picker]({{site.baseurl}}/configure/content-appearance/#custom_colors) is not available for the `tablecellbackgroundcolor` toolbar button or menu item.

**Type:** `Array`

**Default Value:** See [`color_map` option]({{site.baseurl}}/configure/content-appearance/#color_map)

#### Example: Using `table_background_color_map`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
  menubar: 'table',
  toolbar: 'table',
  table_background_color_map: [
    {title: 'Red', value: 'FF0000'},
    {title: 'White', value: 'FFFFFF'},
    {title: 'Yellow', value: 'F1C40F'}
  ]
});
```
