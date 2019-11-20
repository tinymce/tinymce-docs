---
layout: default
title: Advanced table plugin
title_nav: Advanced Table
description: Add sorting functionality to tables.
keywords: advtable premium
---

The `advtable` plugin is a premium plugin that extends the core [`table` plugin]({{site.baseurl}}/plugins/table/) by adding sort options for rows and columns. Tables can be sorted by row or column values using:
* The Sort options in the Table menu.
* The Sort options in the table contextual menu.

**For example:**

| Sort rows based on the selected column                   | Advanced Sort Dialog                                 |
| -------------------------------------------------------- | ---------------------------------------------------- |
| ![Advanced Tables enhanced contextual menu for sorting rows based on the selected Column (Sort > Sort table by column ascending/descending).]({{ site.baseurl }}/images/advtable_context_menu_sort.png) | ![Advanced Tables sort dialog (Sort > Advanced Sort{{site.ellps}}).]({{ site.baseurl }}/images/advtable_dialog_sort.png) |

## Enabling the Advanced Tables plugin
To enable the Advanced Tables plugin, add `advtable` to the list of plugins. For example:

```js
tinymce.init({
  plugins: 'table advtable',
  menubar: 'table'
});
```

