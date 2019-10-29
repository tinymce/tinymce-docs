---
layout: default
title: Advanced table plugin
title_nav: Advanced Table
description: Add sorting functionality to tables.
keywords: advtable premium
---

The `advtable` plugin is a premium plugin that extends the core [`table` plugin]({{site.baseurl}}/plugins/table/) by adding sort options for rows and columns. Tables can be sorted by row or column values using the additional menu and contextual menu items.

**Such as:**

| Sort columns based on the selected row                   | Sort rows based on the selected column               |
| -------------------------------------------------------- | ---------------------------------------------------- |
| ![]({{ site.baseurl }}/images/advtable-sort-columns.png) | ![]({{ site.baseurl }}/images/advtable-sort-row.png) |

## Enabling the Advanced Tables plugin
To enable the Advanced Tables plugin, add `advtable` to the list of plugins. For example:

```js
tinymce.init({
  plugins: 'table advtable',
  menubar: 'table'
});
```

