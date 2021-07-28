### `table_row_class_list`

This option enables you to specify a list of classes to present in the table row options dialog. This is useful if you want users to assign predefined classes to table rows.

**Type:** `Array`

#### Example: Using `table_row_class_list`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
  menubar: 'table',
  toolbar: 'table',
  table_row_class_list: [
    {title: 'None', value: ''},
    {title: 'No Border', value: 'table_row_no_border'},
    {title: 'Red border', value: 'table_row_red_border'},
    {title: 'Blue border', value: 'table_row_blue_border'},
    {title: 'Green border', value: 'table_row_green_border'}
  ]
});
```

#### Example of a nested list of table row classes

{{site.requires_5_5v}}

To create a nested list, replace `value` with `menu` to add the top level of the list, then provide an array of items.

For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
  menubar: 'table',
  toolbar: 'table',
  table_row_class_list: [
    {title: 'None', value: ''},
    {title: 'No Border', value: 'table_row_no_border'},
    {title: 'Border',
      menu: [
        {title: 'Red border', value: 'table_row_red_border'},
        {title: 'Blue border', value: 'table_row_blue_border'},
        {title: 'Green border', value: 'table_row_green_border'}
      ]
    }
  ]
});
```

