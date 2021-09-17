---
layout: default
title: Table plugin
title_nav: Table
description: Table editing features.
keywords: row cell column table_appearance_options table_clone_elements table_grid table_tab_navigation table_default_attributes table_default_styles table_class_list table_cell_class_list table_row_class_list table_advtab table_cell_advtab table_row_advtab
controls: toolbar button, menu item
---

{% assign pluginname = "Table" %}
{% assign plugincode = "table" %}

The `table` plugin adds table management functionality to {{site.productname}}. It also adds a new menubar item `Table` with various options in its dropdown including `Insert table` and options to modify cells, rows and columns, and a toolbar button with the same functionality.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
  menubar: 'table',
  toolbar: 'table tabledelete | tableprops tablerowprops tablecellprops | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol'
});
```

## Config Options

These settings affect the execution of the `table` plugin and let you modify the default styles and attributes for tables, preset class lists, and table behavior.

{% include configuration/table_toolbar.md %}

{% include configuration/table_appearance_options.md %}

{% include configuration/table_use_colgroups.md %}

{% include configuration/table_clone_elements.md %}

{% include configuration/table_grid.md %}

{% include configuration/table_tab_navigation.md %}

{% include configuration/table_default_attributes.md %}

{% include configuration/table_default_styles.md %}

{% include configuration/table_responsive_width.md %}

{% include configuration/table_sizing_mode.md %}

{% include configuration/table_column_resizing.md %}

{% include configuration/table_class_list.md %}

{% include configuration/table_cell_class_list.md %}

{% include configuration/table_row_class_list.md %}

{% include configuration/table_border_widths.md %}

{% include configuration/table_border_styles.md %}

{% include configuration/table_background_color_map.md %}

{% include configuration/table_border_color_map.md %}

{% include configuration/table_advtab.md %}

{% include configuration/table_cell_advtab.md %}

{% include configuration/table_row_advtab.md %}

{% include configuration/table_resize_bars.md %}

{% include configuration/table_style_by_css.md %}

{% include configuration/table_header_type.md %}

### Examples of various table setups

Here are some examples of configuration for common setups.

#### No default attributes or styles on tables

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
  table_default_attributes: {},
  table_default_styles: {}
});
```

#### Pixel based resizing

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
  table_default_attributes: {},
  table_default_styles: {},
  table_responsive_width: false
});
```

#### Percentage based resizing

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
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

> **Note**: The advanced tabs of the table, row, and cell properties dialogs use the `colorpicker` to allow for border and background colors to be applied. See docs to use and configure a custom [colorpicker]({{site.baseurl}}/configure/content-appearance/#textcoloroptions).

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## API

| Name | Arguments | Description |
|------| ------| ----------- |
| insertTable | columns: number, rows: number | Insert a table with the given number of columns and rows at the current cursor location |
| getClipboardCols |  | Returns the data for any columns cut or copied using `mceTableCutCol` or `mceTableCopyCol`.  |
| setClipboardCols | cols: HTMLTableRowElement[] | Set the data to be used by `mceTablePasteColBefore` or `mceTablePasteColAfter` for pasting columns into a table. (A column as a series of cells. One or more cells from each row in the selection).  |
| getClipboardRows |  | Returns the data for any rows cut or copied using `mceTableCutRow` or `mceTableCopyRow` |
| setClipboardRows | rows: HTMLTableRowElement[] | Set the data to be used by `mceTablePasteRowBefore` or `mceTablePasteRowAfter` for pasting rows into a table. |

### Example: Using `table` plugin APIs

```js
tinymce.activeEditor.plugins.table.insertTable(2, 3);
```

## Events

{% include events/table-events.md %}

## Commands

The Table plugin provides the following JavaScript commands.

{% include commands/table-cmds.md %}

## Query command values

{% include commands/table-query-cmd-values.md %}
