---
layout: default
title: cleanup_callback
---

This option is considered deprecated. Use the new [Event API](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html/)

This option enables you to add custom cleanup logic to TinyMCE. This function is called when the cleanup process is executed. This process occurs when the editor saves/submits content, user hits the cleanup button and when the HTML editor dialog is presented. The format of this function is: `customCleanup(type, value)`, where type can be `"get_from_editor"` when the content is extracted from TinyMCE, for example when the user submits the form. The `"insert_to_editor"` type value gets passed when new content is inserted into the editor on initialization or when the HTML editor dialog commits new content. The `"get_from_editor_dom"` value is executed when the cleanup process has a valid DOM tree and is extracted from the editor. The `"insert_to_editor_dom"` gets passed when the editor has a valid DOM tree and content has been inserted into the editor. The example below illustrates all these types.

## Example of usage of the cleanup_callback option

```js
function myCustomCleanup(type, value) {
  switch (type) {
    case "get_from_editor":
      alert("Value HTML string: " + value);
      // Do custom cleanup code here
      break;
    case "insert_to_editor":
      alert("Value HTML string: " + value);
      // Do custom cleanup code here
      break;
    case "submit_content":
      alert("Value HTML Element: " + value);
      // Do custom cleanup code here
      break;
    case "get_from_editor_dom":
      alert("Value DOM Element " + value);
      // Do custom cleanup code here
      break;
    case "insert_to_editor_dom":
      alert("Value DOM Element: " + value);
      // Do custom cleanup code here
      break;
    case "setup_content_dom":
      alert("Value DOM Element: " + value);
      // Do custom cleanup code here
      break;
    case "submit_content_dom":
      alert("Value DOM Element: " + value);
      // Do custom cleanup code here
      break;
  }

  return value;
}

tinyMCE.init({
  cleanup_callback : "myCustomCleanup"
});
```
