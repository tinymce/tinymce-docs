---
layout: default
title: readonly
---

This option enables you to specify make editor instances in readonly mode. When they are in readonly mode nothing can be changed and the contents are just presented to the user. You can use this in combination with [body_class](https://tiny.cloud/docs-3x/reference/configuration/Configuration3x@body_class/) to present a different visual presentation for the readonly mode.

### Example of usage of the readonly option

```js
// Move focus to specific element
tinyMCE.init({
  theme : "advanced",
  readonly : 1
});
```
