---
layout: default
title: encoding
---

This option enables you to get XML escaped contents out of TinyMCE. Posted content will be converted to an XML string escaping characters such as `<`, `>`, `"`, and `&` to `&lt;`, `&gt;`, `&quot;`, and `&amp;`. This option is set to nothing by default and is therefore disabled.

## Example of usage of the encoding option:

```js
tinyMCE.init({
  ...
  encoding : "xml"
});
```
