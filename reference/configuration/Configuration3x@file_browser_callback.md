---
layout: default
title: file_browser_callback
---

This option enables you to add your own file browser/image browser to TinyMCE. If this option is set with a value a browse button will appear in different dialogues such as "insert/edit link" or "insert/edit image". If this option hasn't got a value set (or equals to false or null) the dialogues in question won't show any browse button.

This function is executed each time a user clicks on the "browse" buttons in various dialogues. The format of this callback function is: fileBrowser(field_name, url, type, win) where field_name is the id/name of the form element that the browser should insert its URL into. The url parameter contains the URL value that is currently inside the field. The type parameter contains what type of browser to present; this value can be file, image or flash depending on what dialogue is calling the function. The win parameter contains a reference to the dialog/window that executes the function.

## Example of usage of the file_browser_callback option:

```js
function myCustomFileBrowser(field_name, url, type, win) {
  // Do custom browser logic
  win.document.forms[0].elements[field_name].value = 'my browser value';
}

tinyMCE.init({
  file_browser_callback : "myCustomFileBrowser"
});
```

## HowTo for this Option

There is a HowTo article for this option which also provides a working example (without a server-side counterpart yet): [Custom FileBrowser Implementation](https://www.tiny.cloud/docs-3x/howto/TinyMCE3x@How-to_implement_a_custom_file_browser/)
