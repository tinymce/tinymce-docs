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
<br/>
{% include /misc/admon_premium_plugin.md %}

The `advtable` plugin is a premium plugin that extends the core [`table` plugin]({{site.baseurl}}/plugins-ref/opensource/table/) by adding the following advanced functionality:

- Sort options for rows and columns.
- Row numbering column for tables.

## Try our Advanced Tables Demo

{% include live-demo.html id="advtable" %}

{% assign pluginminimumplan = 'tiertwo' %}
{% include misc/purchase-premium-plugins.md %}

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

A row numbering column containing a series of values can be added to a table to help identify rows in a table. To allow row numbering on tables, the `advtablerownumbering` toolbar button and menu item can be used.

A numeric and alpha value series are available by default. The available value series can be configured using the [`advtable_value_series` option](#advtable_value_series).

![Table with numeric row numbering column and row numbering menu open (Numeric item checked)]({{ site.baseurl }}/images/advtable_row_numbering.png)

## Configuration options

The following configuration options affect the behavior of the {{pluginname}} plugin.

#{% include configuration/advtable_value_series.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Advanced Tables plugin provides the following {{site.productname}} commands.

{% include commands/advtable-cmds.md %}

## Events

For events applicable to the Advanced Tables plugin, see: [Table plugin - Events]({{ site.baseurl }}/plugins-ref/opensource/table/#events).
