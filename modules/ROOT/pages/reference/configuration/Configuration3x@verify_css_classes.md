---
layout: default
title: verify_css_classes
---

If you enable this option, class names placed in class attributes will be verified against the content CSS so elements with a class attribute containing a class that doesn't exist in the CSS will be removed.

## Example of usage of the verify_css_classes option:

```js
tinyMCE.init({
  ...
  verify_css_classes : true
});
```
