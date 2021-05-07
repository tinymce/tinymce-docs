---
layout: default
title: invalid_elements
---

This option should contain a comma separated list of element names to exclude from the content. Elements in this list will be removed when TinyMCE executes a cleanup.

## Example of usage of the invalid_elements option

```js
tinyMCE.init({
  ...
  invalid_elements : "strong,em"
});
```

Caution: This option doesn't accept attributes in the list, only elements

Also see [valid_elements](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@valid_elements/) and [extended_valid_elements](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@extended_valid_elements/) for more configuration options.
