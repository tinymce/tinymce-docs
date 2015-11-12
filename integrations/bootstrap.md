---
layout: default
title: Bootstrap Integration
title_nav: Bootstrap
description: How to override the built-in block on `focusin` in Bootstrap dialogs when using TinyMCE.
keywords: integration integrate bootstrap
---

## Using TinyMCE in a Bootstrap Dialog

You need to override the built-in block on `focusin` in Bootstrap dialogs when using TinyMCE inside it. See this working example for details.

Bootstrap blocks all focus events on contents within the dialog. Add this script to your page and it will allow users to click inside the editor.

```js
// Prevent Bootstrap dialog from blocking focusin
$(document).on('focusin', function(e) {
  if ($(e.target).closest(".mce-window").length) {
    e.stopImmediatePropagation();
  }
});
```

> This document is a work in progress. Click the contribute button (in the blue area above) to improve this page.
