---
layout: default
title: elements
---

This option should contain a comma separated list of element IDs to convert into editor instances. This option is only used if [mode](../configuration/Configuration3x@mode) is set to "exact".

## Example of usage of the elements option:

```html
tinyMCE.init({
	...
	elements : "elm1,elm2"
});
```