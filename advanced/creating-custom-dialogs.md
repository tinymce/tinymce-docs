---
layout: default
title: Create Custom Dialogs
title_nav: Create Custom Dialogs
description_short: Learn how to make custom dialogs.
description: Learn how to make custom dialogs with WindowManager.
keywords: custom dialog dialogs cdn windowmanager
---

## Dialogs as HTML pages

In TinyMCE 3.x all dialogs were HTML pages that got loaded into an iframe or window. This was changed in TinyMCE 4 to make it easier to create plugins and fully support CDNs. But you can still load HTML based pages into TinyMCE dialogs by using the WindowManager.

```js
// Opens a HTML page inside a TinyMCE dialog
editor.windowManager.open({
  title: 'My html dialog',
  url: 'mydialog.html',
  width: 700,
  height: 600
});
```

You can also pass in parameters to the dialog just as you could in 3.x by using the second parameter of the WindowManager.open.

```js
// Opens a HTML page inside a TinyMCE dialog and pass in two parameters
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

You can access these parameters from your mydialog.html page by using this code:

```js
// Get the parameters passed into the window from the top frame
var args = top.tinymce.activeEditor.windowManager.getParams();
console.log(args.arg1, args.arg2);
```

You can also close the current window by calling:

```js
// Close the front most window (mydialog.html)
top.tinymce.activeEditor.windowManager.close();
```
