---
layout: default
title: Emoticons plugin
title_nav: Emoticons
description: Bring a smiley to your content.
keywords: smiley happy smiling emoji
controls: toolbar button
---

The Emoticons plugin adds a toolbar control that lets users insert smiley images into TinyMCE's editable area.

> Note: it doesn't automatically convert text emoticons into graphical smilies.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "emoticons",
  toolbar: "emoticons"
});
```
