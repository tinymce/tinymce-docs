---
layout: default
title: add_unload_trigger
---

If you set this option to true, page contents will be stored away if the page is unloaded, for example if the user navigates away from the page and then navigated back to it by pressing the back button. This option is set to true by default.

## Example of usage of the add_unload_trigger option:

```js
tinyMCE.init({
  ...
  add_unload_trigger : false
});
```
