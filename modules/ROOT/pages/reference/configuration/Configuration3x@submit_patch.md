---
layout: default
title: submit_patch
---

This toggle option enables you to turn on/off the auto patching of the submit function in forms. TinyMCE will auto move contents from the iframe to the hidden textarea field if for example a JavaScript uses a `form[0].submit()` call. This is the same as using the `tinyMCE.triggerSave()` call. This option is set to true by default.

Enable this option if your submit buttons are named "submit", to fix JavaScript errors in Internet Explorer 7.

## Example of usage of the submit_patch option:

```js
tinyMCE.init({
  ...
  submit_patch : false
});
```
