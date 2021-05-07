---
layout: default
title: keep_styles
---

(Requires: 3.2)

This option enables keeping the current text style when you press enter/return on non-IE browsers. This feature is enabled by default but can be disabled by setting the value to false.

### Example of usage of the keep_styles option

```js
// Output elements in HTML style
tinyMCE.init({
  ...
  theme : "advanced",
  keep_styles : false
});
```
