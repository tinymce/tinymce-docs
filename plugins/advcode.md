---
layout: default
title: Advanced Code Editor plugin
title_nav: Advanced Code Editor
description: How to setup TinyMCE's Advanced Code Editor plugin.
keywords: code advcode codemirror
controls: toolbar button, menu item
---

This plugin adds a toolbar button that allows a user to edit the HTML code using a more advanced [code editor]({{ site.baseurl }}/enterprise/advcode/) than the default textarea.

If you are using Advanced Code Editor `advcode` plugin, make sure you do not use Code `code` plugin.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "advcode",
  toolbar: "code"
});
```

> The Advanced Code Editor plugin is included with a [TinyMCE Enterprise](https://www.tinymce.com/pricing/) subscription. Please [click here](https://www.tinymce.com/pricing/) to learn more about our flexible subscriptions plans.
