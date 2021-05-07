---
layout: default
title: custom_undo_redo
---

This option is a true/false option that enables you to disable/enable the custom undo/redo logic within TinyMCE. This option is enabled by default, if you disable it some operations may not be undo able.

## Example of usage of the custom_undo_redo option:

```js
tinyMCE.init({
  ...
  custom_undo_redo : false
});
```
