---
layout: default
title: custom_undo_redo_levels
---

This option should contain the number of undo levels to keep in memory. By default is set to use an unlimited number of undo levels. But this steals lots of memory so for low end systems a value of 10 may be better.

## Example of usage of the custom_undo_redo_levels option:

```js
tinyMCE.init({
  ...
  custom_undo_redo_levels : 10
});
```
