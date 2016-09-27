---
layout: default
title: inlinepopups
---

This plugin makes all dialogs to open as floating DIV layers instead of popup windows. This option can be very useful in order to get around popup blockers. You can also make them modal by setting the dialog_type to modal see the example below.

## Options

| Name | Summary |
| --- | --- |
| inlinepopups_skin | Enables you to specify a custom skin name. Defaults to clearlooks2. |

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "inlinepopups",
  dialog_type : "modal"
});
```
