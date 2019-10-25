---
layout: default
title: Advanced table plugin
title_nav: Advanced table
description:
keywords: advtable premium
---

The `advtable` plugin extends the core [`table` plugin]({{site.baseurl}}/plugins/table/) by adding sort options for rows and columns.

Contextual menus and Table menu item

```js
tinymce.init({
  plugins: 'table advtable',
  menubar: 'table'
});
```