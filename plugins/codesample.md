---
layout: default
title: Code Sample Plugin
description: Insert and embed syntax highlighted code snippets.
keywords: syntax, highlight, codesample
---

> New in 4.3!

The Code Sample plugin (`codesample`) lets a user insert and embed code snippets into the editable area. Code snippets will be syntax color highlighted.

This plugin demonstrates the support for the new block based `contenteditable=false` elements available in version 4.3.

By default `codesample` uses http://prismjs.com/ to embed the code samples within the editor and works "out of the box". That is, when a user copies valid code syntax into the editable area the code will be automatically formatted according to Prism default css rules.

Of course, you could also use other client side syntax highlighters if you prefer.

**Example:**

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "codesample"
});
