---
layout: default
title: 3.x Compatibility Plugin
title_nav: 3.x Compatibility
description: Run old plugins on version 4.
keywords: compat3x utils tiny_mce_popup editor_plugin
---

This plugin makes possible to run majority of old 3.x plugins on the latest TinyMCE, without any modification. However you need to take a few steps to enable it:

**Installation Instructions**

1. Download TinyMCE [development package](https://www.tinymce.com/download/).
2. Copy `compat3x` plugin to your site.
3. Copy `utils` and `tiny_mce_popup.js` to the same directory, where your `tinymce.min.js` resides.
4. Load `compat3x` after TinyMCE core.
5. (Optional) If you rename `editor_plugin.js` file to `plugin.min.js` then you will be able to load your old plugin as the regular one.

**Type:** `String`

Example of loading the compat3x **before** `tinymce.init`:

```html
<script src="/tinymce/tinymce.min.js"></script>
<script src="/tinymce/plugins/compat3x/plugin.min.js"></script>
<script type="text/javascript">
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  external_plugins: {
    "myoldplugin": "/tinymce/plugins/myoldplugin/editor_plugin.js"
  }
});
</script>
```
