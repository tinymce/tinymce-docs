---
layout: default
title: Autolink Plugin
title_nav: Autolink
description: Automatically create hyperlinks.
keywords: link url urls
---


The Autolink plugin automatically creates hyperlinks when a user inputs a valid, complete url. For example `www.example.com` is converted to `http://www.example.com`.

Note that this option won't convert incomplete urls, for example `example.com` would remain as unlinked text. i.e. urls must include `www` to be automatically converted.

**Type:** `String`

##### Autolink plugin example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "autolink"
});
```
