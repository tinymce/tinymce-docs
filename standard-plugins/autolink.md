---
layout: default
title: autolink
---

# Autolink Plugin

The `autolink` plugin automatically creates hyperlinks when a user inputs a valid, complete url, e.g `www.example.com`, which would be converted to `http://www.example.com`.

Note that this option won't convert incomplete urls, for example `example.com` would remain as unlinked text. i.e. urls must include `www` to be automatically converted.

**Type:** `String`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "autolink"
});
```
