---
layout: default
title: fix_table_elements
---

**Removed in 3.4, this is now the default behavior.**

This option enables you to specify that table elements should be moved outside paragraphs or other block elements. If you enable this option block elements will be split into two chunks when a table is found within it, see the example below for details. This option is disabled by default.

## This invalid table:

```html
<p>
a
<table>
  <tr><td>b</td></tr>
  <tr><td>c</td></tr>
</table>
d
</p>
```

## Gets converted into this valid XHTML:

```html
<p>
a
</p>
<table>
  <tr><td>b</td></tr>
  <tr><td>c</td></tr>
</table>
<p>
d
</p>
```

## Example of usage of the fix_table_elements option:

```js
tinyMCE.init({
  ...
  fix_table_elements : true
});
```
