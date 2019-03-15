---
layout: default
title: custom_shortcuts
---

This option enables you to disable/enable the custom keyboard shortcuts, which plugins and themes may register. The value of this option is set to true by default.

## Example of usage of the custom_shortcuts option:

```js
tinyMCE.init({
  custom_shortcuts : false
});
```

In case you'd like to register custom shortcuts you'll need <editor>.[addShortcut()](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html/#addshortcut/).
