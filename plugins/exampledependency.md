---
layout: default
title: Example_dependency plugin
title_nav: Example_dependency
description: How to build a plugin that depends on another plugin.
keywords: example template custom example_dependency
---

The Example_dependency plugin is an example plugin with a dependency on another plugin.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "example_dependency"
});
```
