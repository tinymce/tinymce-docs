---
layout: default
title: setupcontent_callback
---

This option is considered deprecated use the new [Event API](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html/)

This option enables you to execute custom content set up logic when the editor initializes. The format of this callback is: setupContent(editor_id, body, doc), where "editor_id" is the TinyMCE editor instance ID. The editor instance object reference can be retrieved by using tinyMCE.getInstanceById(editor_id). The "body" parameter is a reference to the IFRAME's BODY element and "doc" is the IFRAME's document element. This option is not used if it's not specified.

## Example of usage of the setupcontent_callback option:

```js
function myCustomSetupContent(editor_id, body, doc) {
  body.innerHTML = "my new content" + body.innerHTML;
}

tinyMCE.init({
  setupcontent_callback : "myCustomSetupContent"
});
```
