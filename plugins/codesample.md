---
layout: default
title: Codesample Plugin
title_nav: Code Sample
description: Insert and embed syntax highlighted code snippets.
keywords: syntax, highlight, codesample
controls: toolbar button
---

> New in 4.3!

The Code Sample plugin (`codesample`) lets a user insert and embed code snippets into the editable area. Code snippets will be syntax color highlighted. It also adds a button to the toolbar which on click will open a dialog box to accept raw code input.

This plugin demonstrates the support for the new block based `contenteditable=false` elements available in version TinyMCE 4.3.

By default `codesample` uses http://prismjs.com/ to embed the code samples within the editor and works out of the box. That is, when a user copies valid code syntax into the editable area the code will be automatically formatted according to Prism default css rules.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "codesample"
});
