---
layout: default
title: cleanup_on_startup
---

**Removed in 3.4**

If you set this option to true, TinyMCE will perform a HTML cleanup call when the editor loads. This option is set to false by default.

## Example of usage of the cleanup_on_startup option:

```js
tinyMCE.init({
  ...
  cleanup_on_startup : true
});
```

## See also

The [cleanup](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@cleanup/) configuration option.
