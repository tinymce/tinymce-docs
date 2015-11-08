---
layout: default
title: 3.x Compatibility Plugin
---

This plugin contains a few compatibility files for the old 3.x branch. This enables you to run most old 3.x plugins with out any modifications. You need to take a few steps to enable this plugin:

**Installation Instructions**

1. Download the tinymce development package.
2. Copy the `compat3x` plugin to your site.
3. Copy `utils` and `tiny_mce_popup.js` to the root directory, if `tinymce` where the `tinymce.min.js` file is located.
4. Add the `compat3x` plugin as your first plugin in the plugins `init` option or load it after the TinyMCE core.
5. (Optional) Rename the old plugins `editor_plugin.js` file to `plugin.min.js` then you can load it as a normal plugin.

**Type:** `String`

**Example:**

Example of usage **in** `tinymce.init`:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  plugins: "compat3x",
  external_plugins: {
    "myoldplugin": "/tinymce/plugins/myoldplugin/editor_plugin.js"
  }
});
```

Example of loading the compat3x **before** `tinymce.init`:

```html
<script src="/tinymce/tinymce.min.js"></script>
<script src="/tinymce/plugins/compat3x/plugin.min.js"></script>
<script>
tinymce.init({
  selector: "textarea",  // change this value according to your html
  external_plugins: {
    "myoldplugin": "/tinymce/plugins/myoldplugin/editor_plugin.js"
  }
});
</script>
```
