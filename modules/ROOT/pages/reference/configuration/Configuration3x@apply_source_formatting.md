---
layout: default
title: apply_source_formatting
---

(Removed in: 3.0)

This option enables you to tell TinyMCE to apply some source formatting to the output HTML code.

With this option set to **true**, line break characters are placed after and before some tags (defined in the options "indent_before" and "indent_after").

With this option set to **false**, the line breaks are stripped from the HTML source.

## Example of usage of the apply_source_formatting option:

```js
tinyMCE.init({
  ...
  apply_source_formatting : true
});
```
