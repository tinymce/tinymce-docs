---
layout: default
title: Advanced Tables plugin
title_nav: Advanced Tables
description: Add advanced functionality to tables.
keywords: sort rownumbering series tables advanced advtable premium
---

{% assign pluginname = "Advanced Tables" %}
{% assign plugincode = "advtable" %}
{% assign plugincategory = "premium" %}
{{site.premiumplugin}}

The `advtable` plugin is a premium plugin that extends the core [`table` plugin]({{site.baseurl}}/plugins/opensource/table/) by adding the following advanced functionality:
- sort options for rows and columns.
- row numbering column for tables.

## Enabling the Advanced Tables plugin

To enable the Advanced Tables plugin, add `advtable` to the list of plugins. For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table advtable',
  menubar: 'table'
});
```

## Sorting table rows and columns
{{site.requires_5_1v}}

Tables can be sorted by row or column values using:

* The **Sort** options in the **Table** menu.
* The **Sort** options in the table contextual menu.
* The **Sort** options in the **Table** toolbar menu button.

**For example:**

| Sort rows based on the selected column                   | Advanced Sort Dialog                                 |
| -------------------------------------------------------- | ---------------------------------------------------- |
| ![Advanced Tables enhanced contextual menu for sorting rows based on the selected Column (Sort > Sort table by column ascending/descending).]({{ site.baseurl }}/images/advtable_context_menu_sort.png) | ![Advanced Tables sort dialog (Sort > Advanced Sort{{site.ellps}}).]({{ site.baseurl }}/images/advtable_dialog_sort.png) |

The plugin is capable of sorting:

* Numerical data
* Text data

> **Note**: Currently, the sort function will treat cells with Alphanumeric data as Text data. This includes currency symbols which are text characters.

## Adding row numbering to a table
{{ site.requires_5_9_1v }}

A row numbering column containing a series of values can be added to a table to help identify rows in a table. To allow row numbering on tables, the `advtablerownumbering` toolbar button and menu item can be used.

A numeric and alpha value series are available by default. The available value series can be configured using the [`advtable_value_series` option](#advtable_value_series).

![Table with numeric row numbering column and row numbering menu open (Numeric item checked)]({{ site.baseurl }}/images/advtable_row_numbering.png)

## Configuration options

The following configuration options affect the behavior of the {{pluginname}} plugin.

{% include configuration/advtable-value-series.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Advanced Tables plugin provides the following JavaScript commands.

{% include commands/advtable-cmds.md %}

## Events

For events applicable to the Advanced Tables plugin, see: [Table plugin - Events]({{ site.baseurl }}/plugins/opensource/table/#events).
