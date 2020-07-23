---
layout: default
title: Advanced Tables plugin
title_nav: Advanced Tables
description: Add sorting functionality to tables.
keywords: sort tables advanced advtable premium
---

{{site.requires_5_1v}}

{{site.premiumplugin}}

The `advtable` plugin is a premium plugin that extends the core [`table` plugin]({{site.baseurl}}/plugins/table/) by adding sort options for rows and columns. Tables can be sorted by row or column values using:

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

## Enabling the Advanced Tables plugin
To enable the Advanced Tables plugin, add `advtable` to the list of plugins. For example:

```js
tinymce.init({
  plugins: 'table advtable',
  menubar: 'table'
});
```

## Commands

The Table plugin provides the following JavaScript commands.

{% include commands/advtable-cmds.md %}