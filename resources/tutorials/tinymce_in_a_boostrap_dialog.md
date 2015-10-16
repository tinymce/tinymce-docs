---
layout: default
title: TinyMCE in a Boostrap Dialog
---

You need to override the built in block on `focusin` in bootstrap dialogs when using TinyMCE inside it. See this working example for details.

Bootstrap blocks all focus events on contents within the dialog. Add this script to your page and it will allow users to click inside the editor.

```js
// Prevent bootstrap dialog from blocking focusin
$(document).on('focusin', function(e) {
    if ($(e.target).closest(".mce-window").length) {
        e.stopImmediatePropagation();
    }
});
```
