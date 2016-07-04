---
layout: default
title: cleanup_on_startup
---

**Removed in 3.4**

If you set this option to true, TinyMCE will perform a HTML cleanup call when the editor loads. This option is set to false by default.

## Example of usage of the cleanup_on_startup option:

```html
tinyMCE.init({
	...
	cleanup_on_startup : true
});
```

## See also

[cleanup](/Configuration:cleanup)