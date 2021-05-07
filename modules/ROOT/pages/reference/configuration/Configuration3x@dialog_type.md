---
layout: default
title: dialog_type
---

This option enables you to specify how dialogs/popups should be opened. Possible values are "window" and "modal", where the "window" option opens a normal window and the "modal" option opens a modal dialog. This option is set to "window" by default.

Note that this currently only has an effect in Internet Explorer (in other browsers, "window" is always used).

## Example of usage of the dialog_type option:

```js
tinyMCE.init({
  ...
  dialog_type : "modal"
});
```
