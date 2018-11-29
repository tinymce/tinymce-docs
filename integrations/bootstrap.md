---
layout: default
title: Bootstrap integration
title_nav: Bootstrap
description: How to override the built-in block on `focusin` in Bootstrap dialogs when using TinyMCE.
keywords: integration integrate bootstrap
---

## Using TinyMCE in a Bootstrap dialog

You need to override the built-in block on `focusin` in Bootstrap dialogs when using TinyMCE inside it. See this fiddle for a [working example](http://fiddle.tinymce.com/oxdaab).

Bootstrap blocks all focus events on contents within the dialog. Add this script to your page, and it will allow users to click inside the editor.

```js
// Prevent Bootstrap dialog from blocking focusin
$(document).on('focusin', function(e) {
  if ($(e.target).closest(".mce-window").length) {
    e.stopImmediatePropagation();
  }
});
```

#### A note about integrations

> Note:  We are pleased to provide integrations/code guidance to help you build great products with TinyMCE. If you have queries about this integration, please join the [TinyMCE Community](https://community.tinymce.com).
