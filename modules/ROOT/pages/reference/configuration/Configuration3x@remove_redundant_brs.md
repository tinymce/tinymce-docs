---
layout: default
title: remove_redundant_brs
---

**Removed in 3.4, this is now default behavior.**

This option is enabled by default and will control the output of trailing BR elements at the end of block elements. Since IE can't render these properly we need to remove them by default to ensure proper output across all browsers. So for some browsers this BR at the end of the LI at the example below is redundant.

## Example of input/output

```js
This:
<li>Text<br /></li>

Will become:
<li>Text</li>
```

## Example of usage of the remove_redundant_brs option:

```js
tinyMCE.init({
  ...
  remove_redundant_brs : false
});
```
