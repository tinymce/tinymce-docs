---
layout: default
title: Table Plugin
title_nav: Table
description: Table editing features.
keywords: row, cell, column
controls: toolbar button, menu item
---

The `table` plugin adds table management functionality to TinyMCE. It also adds a new menubar item `Table` with various options in its dropdown including `Insert table` and options to modify cells, rows and columns, and a toolbar button with the same functionality.

**Type:** `String`

##### Example

```js
tinymce.init({
  plugins: "table",
  menubar: "table",
  toolbar: "table"
});
```

### Options

These settings affect the execution of the `table` plugin and let you modify the default styles and attributes for tables, preset class lists and table behavior.

### `table_appearance_options`

This option allows you to disable some of the options available to a user when inserting or editing a table. When set to `false` the following fields will not appear: Cell spacing, Cell padding, Border and Caption.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:**  `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "table",
  table_appearance_options: false
});
```

### `table_clone_elements`

This option enables you to specify which elements should be cloned as empty children when inserting rows/columns to a table. By default it will clone these "`strong` `em` `b` `i` `span` `font` `h1` `h2` `h3` `h4` `h5` `h6` `p` `div`" into new cells.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  table_clone_elements: "strong em a"
});
```

### `table_grid`

This option allows you disable the table grid feature of the table menu. The grid feature (which is enabled by default) consists of a dragable matrix that a user can interact with to automatically create a table of x-rows by x-columns based upon their input.

However, if you set this option to `false` the dragable matrix will be replaced with a table dialog box into which a user can enter various parameters to create a table (e.g. cols, rows, width, height, cell spacing, cell padding, border, caption and alignment). There are also advanced style options available in the dialog.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:**  `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_grid: false
});
```

### `table_tab_navigation`

This option enables you to disable the default tab between table cells feature. By default, when a user presses tab the cursor will move between cells within the table. By setting the `table_tab_navigation` value to `false` the cursor will tab between browser elements (such as the url bar or form fields, etc).

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_tab_navigation: false
});
```

### `table_default_attributes`

This option enables you to specify default attributes for inserted tables.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_default_attributes: {
    title: 'My table'
  }
});
```

### `table_default_styles`

This option enables you to specify default styles for inserted tables.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_default_styles: {
    fontWeight: 'bold'
  }
});
```

### `table_class_list`

This option enables you to specify a list of classes to present in the table options dialog box. This is useful if you want users to assign predefined classes to table elements.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_class_list: [
    {title: 'None', value: ''},
    {title: 'Dog', value: 'dog'},
    {title: 'Cat', value: 'cat'}
  ]
});
```

### `table_cell_class_list`

This option enables you to specify a list of classes to present in the table cell options dialog box. This is useful if you want users to assign predefined classes to table cells.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_cell_class_list: [
    {title: 'None', value: ''},
    {title: 'Dog', value: 'dog'},
    {title: 'Cat', value: 'cat'}
  ]
});
```

### `table_row_class_list`

This option enables you to specify a list of classes to present in the table row options dialog. This is useful if you want users to assign predefined classes to table rows.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_row_class_list: [
    {title: 'None', value: ''},
    {title: 'Dog', value: 'dog'},
    {title: 'Cat', value: 'cat'}
  ]
});
```

### `table_advtab`

This option makes it possible to disable the advanced tab in the table dialog box. The advanced tab allows a user to input `style`, `border color` and `background color` values.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_advtab: false
});
```

### `table_cell_advtab`

This option makes it possible to disable the advanced tab in the table cell dialog box. The advanced tab allows a user to input `style`, `border color` and `background color` values.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_cell_advtab: false
});
```

### `table_row_advtab`

This option makes it possible to disable the advanced tab in the table row dialog box. The advanced tab allows a user to input `style`, `border color` and `background color` values.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_row_advtab: false
});
```
