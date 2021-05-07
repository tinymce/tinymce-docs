---
layout: default
title: verify_html
---

This option enables or disables the element cleanup functionality. If you set this option to false, all element cleanup will be skipped but other cleanup functionality such as URL conversion will still be executed.

## Example of usage of the verify_html option:

```js
tinyMCE.init({
  ...
  verify_html : false
});
```
