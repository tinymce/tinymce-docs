---
layout: default
title: Code plugin
title_nav: Code
description: Edit your content's HTML source.
keywords: wysiwyg source html edit 
controls: toolbar button, menu item
---

This plugin adds a toolbar button that allows a user to edit the HTML code hidden by the WYSIWYG view. It also adds the menu item `Source code` under the `Tools` menu.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "code",
  toolbar: "code",
  menubar: "tools"
});
```




