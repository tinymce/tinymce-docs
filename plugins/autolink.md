---
layout: default
title: Autolink plugin
title_nav: Autolink
description: Automatically create hyperlinks.
keywords: link url urls
---


The Autolink plugin automatically creates hyperlinks when a user inputs a valid, complete URL. For example `www.example.com` is converted to `http://www.example.com`.

Note that this option won't convert incomplete URLs. For example `example.com` would remain as unlinked text and URLs must include `www` to be automatically converted.

**Type:** `String`

##### Autolink plugin example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "autolink"
});
```
