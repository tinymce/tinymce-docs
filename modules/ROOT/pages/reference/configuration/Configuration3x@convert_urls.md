---
layout: default
title: convert_urls
---

This option enables you to control whether TinyMCE is to be clever and restore URLs to their original values. URLs are automatically converted (messed up) by default because the built-in browser logic works this way. There is no way to get the real URL unless you store it away. If you set this option to false it will try to keep these URLs intact. This option is set to true by default, which means URLs will be forced to be either absolute or relative depending on the state of [relative_urls](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@relative_urls/).

## Example of usage of the convert_urls option:

```js
tinyMCE.init({
  ...
  convert_urls : false
});
```
