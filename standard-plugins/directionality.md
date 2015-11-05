---
layout: default
title: directionality
---

# Directionality Plugin

// adds toolbar control

This plugin adds directionality controls to the toolbar, enabling TinyMCE to better handle languages written from right to left.

**Type:** `String`

**Possible Values:** `ltr`, `rtl`

**Example:**

```js
tinymce.init({
    selector: "textarea",  // change this value according to your html
    plugins: "directionality",
    toolbar: "ltr rtl"
});
```
