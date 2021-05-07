---
layout: default
title: relative_urls
---

If this option is set to true, all URLs returned from the MCFileManager will be relative from the specified [document_base_url](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@document_base_url/). If it's set to false all URLs will be converted to absolute URLs. This option is set to true by default.

## Example of usage of the relative_urls option:

```js
tinyMCE.init({
  ...
  relative_urls : false
});
```
