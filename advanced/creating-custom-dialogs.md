---
layout: default
title: Create custom dialogs
title_nav: Create custom dialogs
description_short: Learn how to make custom dialogs.
description: Learn how to make custom dialogs with WindowManager.
keywords: custom dialog dialogs cdn windowmanager
---

## Dialogs as HTML pages

HTML based pages can be loaded into TinyMCE dialogs by using the WindowManager.This makes it easier to create plugins and fully support CDNs.

```js
// Opens a HTML page inside a TinyMCE dialog
editor.windowManager.open({
  title: 'My html dialog',
  url: 'mydialog.html',
  width: 700,
  height: 600
});
```

Parameters can be passed to the dialog by using the second parameter of the `WindowManager.open`

```js
// Opens an HTML page inside a TinyMCE dialog and pass in two parameters
editor.windowManager.open({
  title: 'My html dialog',
  url: 'mydialog.html',
  width: 700,
  height: 600
}, {
  arg1: 42,
  arg2: 'Hello world'
});
```

Access these parameters from the `mydialog.html` page by using this code:

```js
// Get the parameters passed into the window from the top frame
var args = top.tinymce.activeEditor.windowManager.getParams();
console.log(args.arg1, args.arg2);
```

Close the current window by calling:

```js
// Close the front most window (mydialog.html)
top.tinymce.activeEditor.windowManager.close();
```
