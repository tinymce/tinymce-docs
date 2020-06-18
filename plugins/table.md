---
layout: default
title: Table plugin
title_nav: Table
description: Table editing features.
keywords: row cell column table_appearance_options table_clone_elements table_grid table_tab_navigation table_default_attributes table_default_styles table_class_list table_cell_class_list table_row_class_list table_advtab table_cell_advtab table_row_advtab
controls: toolbar button, menu item
---

The `table` plugin adds table management functionality to {{site.productname}}. It also adds a new menubar item `Table` with various options in its dropdown including `Insert table` and options to modify cells, rows and columns, and a toolbar button with the same functionality.

**Type:** `String`

##### Example

```js
tinymce.init({
  plugins: "table",
  menubar: "table",
  toolbar: "table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol"
});
```

### Config Options

These settings affect the execution of the `table` plugin and let you modify the default styles and attributes for tables, preset class lists, and table behavior.

### `table_toolbar`

This option allows you to specify the buttons and the order that they will appear on within {{site.productname}}'s inline contextual toolbar for tables. To specify the controls that should appear on {{site.productname}}'s table toolbar, the `table_toolbar` option should be provided with a space separated list of toolbar controls. To create groups within this list, please add `|` pipe characters between the groups of controls that you would like to create. If you want to disable this toolbar simply set the value to an empty string.

**Type:** `String`

**Default Value:** `"tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol"`

**Possible Values:**  `table`, `tablerowprops`, `tablecellprops`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  table_toolbar: "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol"
});
```

### `table_appearance_options`

This option allows you to disable some of the options available to a user when inserting or editing a table. When set to `false` the following fields will not appear: Cell spacing, Cell padding, Border and Caption.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:**  `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
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
  selector: "textarea",  // change this value according to your HTML
  table_clone_elements: "strong em a"
});
```

### `table_grid`

This option allows you to disable the grid-like table picker in the Table menu. The grid feature (which is enabled by default) consists of a dragable matrix that a user can interact with to automatically create a table of x-rows by x-columns based upon their input.

However, if `table_grid` is set to `false` the table picker will be replaced by a menu item that opens a dialog that users can use to insert a table. This dialog allows users to set various parameters such as the number of columns and rows, width, height, cell spacing and padding, border width, alignment, and whether to display a caption. There are also advanced style options available if `table_advtab` is set to `true`.

> Note: To configure the Table menu to include both the table picker and the table dialog menu items, set `table_grid` to `true` and configure [`menu`]({{ site.baseurl}}/configure/editor-appearance/#menu) to include both the `inserttable` and `inserttabledialog` menu items.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:**  `true`, `false`

{{site.differs_for_mobile}}

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_grid: false
});
```

### `table_tab_navigation`

This option enables you to disable the default tab between table cells feature. By default, when a user presses tab the cursor will move between cells within the table. By setting the `table_tab_navigation` value to `false` the cursor will tab between browser elements (such as the URL bar or form fields, etc).

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_tab_navigation: false
});
```

### `table_default_attributes`

This option enables you to specify default attributes for inserted tables.

**Type:** `Object`

**Default Value:** `{ border: '1' }`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_default_attributes: {
    border: '1'
  }
});
```

### `table_default_styles`

This option enables you to specify the default styles for inserted tables.

**Type:** `Object`

**Default Value:** `{ 'border-collapse': 'collapse', 'width': '100%' }`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_default_styles: {
    width: '50%'
  }
});
```
### `table_responsive_width`

This option enables you to force pixels or percentage sizes for tables. Setting this to true will force resizing by percentages and setting this to false
will force pixel resizing. The default is to automatically detect what the table size is and just use that unit for resizing.

**Type:** `Boolean`

**Default Value:** `none`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_responsive_width: false
});
```
### `table_class_list`

This option enables you to specify a list of classes to present in the table options dialog box. This is useful if you want users to assign predefined classes to table elements.

**Type:** `Array`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
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

**Type:** `Array`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
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

**Type:** `Array`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
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
  selector: "textarea",  // change this value according to your HTML
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
  selector: "textarea",  // change this value according to your HTML
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
  selector: "textarea",  // change this value according to your HTML
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_row_advtab: false
});
```

### `table_resize_bars`

This option makes it possible to disable the ability to resize table columns and rows by dragging the border between two columns or rows.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_resize_bars: false
});
```

### `table_style_by_css`

This option enables you to force Table Properties dialog to use HTML5/CSS3 standards for setting cell spacing and cellpadding. By default, these are added as attributes to the table element. By setting this to true, cell spacing is applied to the table element as a `border-spacing` style and cell padding is applied to all `td` elements as a `padding` style

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "table",
  menubar: "table",
  toolbar: "table",
  table_style_by_css: false
});
```
### Examples of various table setups

Here are some examples of configuration for common setups.

##### No default attributes or styles on tables

```js
tinymce.init({
  plugins: "table",
  table_default_attributes: {},
  table_default_styles: {}
});
```
##### Pixel based resizing

```js
tinymce.init({
  plugins: "table",
  table_default_attributes: {},
  table_default_styles: {},
  table_responsive_width: false
});
```
##### Percentage based resizing

```js
tinymce.init({
  plugins: "table",
  table_default_attributes: {
    'border': '1'
  },
  table_default_styles: {
    'border-collapse': 'collapse',
    'width': '100%'
  },
  table_responsive_width: true
});
```

> Note: The advanced tabs of the table, row, and cell properties dialogs use the `colorpicker` to allow for border and background colors to be applied. See docs to use and configure a custom [colorpicker]({{site.baseurl}}/plugins/colorpicker/).

### API

| Name | Arguments | Description |
|------| ------| ----------- |
| insertTable | columns: number, rows: number | Insert a table with the given number of columns and rows at the current cursor location |
| getClipboardCols |  | Returns the data for any columns cut or copied using `mceTableCutCol` or `mceTableCopyCol`. {{site.requires_5_4v}} |
| setClipboardCols | cols: HTMLElement[] | Set the data to be used by `mceTablePasteColBefore` or `mceTablePasteColAfter` for pasting columns into a table. {{site.requires_5_4v}} |
| getClipboardRows |  | Returns the data for any rows cut or copied using `mceTableCutRow` or `mceTableCopyRow` |
| setClipboardRows | rows: HTMLElement[] | Set the data to be used by `mceTablePasteRowBefore` or `mceTablePasteRowAfter` for pasting rows into a table |

#### Example

```js
tinymce.activeEditor.plugins.table.insertTable(2, 3);
```

### Events

| Name | Description |
|------| ----------- |
| newrow | Fired when a row is created |
| newcell | Fired when a cell is created |
| ObectResizeStart | Fired when a resize action is started on a table, row, column or cell using the resize bars |
| ObjectResized | Fired when a resize action is finished on a table, row, column or cell using the resize bars |

## Commands

The Table plugin provides the following JavaScript commands.

{% include commands/table-cmds.md %}