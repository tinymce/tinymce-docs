---
layout: default
title: removeformat_selector
---

**Removed in 3.3**

This option allows specification of which elements should be removed when you press the `removeformat` button. This is a CSS selector pattern.

## Example of usage of the removeformat_selector option:

```js
tinyMCE.init({
  ...
  removeformat_selector : 'b,strong,em,i,span,ins'
});
```

You can now use the [formats](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@formats/) option instead.
