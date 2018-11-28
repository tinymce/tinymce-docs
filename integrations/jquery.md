---
layout: default
title: jQuery integration
title_nav: jQuery
description: Add custom logic to render TinyMCE inside jQuery dialogs.
keywords: integration integrate jquery javascript
---

## TinyMCE in a jQuery UI Dialog

You need to add some custom logic when rendering TinyMCE instances inside jQuery UI dialogs since it blocks all focus in calls of elements outside the dialog. [Check this fiddle out](http://fiddle.tinymce.com/rsdaab/713) for a working example.

```js
// Prevent jQuery UI dialog from blocking focusin
$(document).on('focusin', function(e) {
    if ($(e.target).closest(".mce-window, .moxman-window").length) {
		e.stopImmediatePropagation();
	}
});
```


#### A note about integrations

> Note: We are pleased to provide integrations/code guidance to help you build great products with TinyMCE. If you have queries about this integration, please join the [TinyMCE Community](https://community.tinymce.com).
