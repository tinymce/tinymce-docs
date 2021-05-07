---
layout: default
title: constrain_menus
---

(Requires: 3.0.4)

This option enables you to force all menus to be constrained to the current view port. Drop menus can be placed outside the visible area of a window by default. Enabling this option will move them inside the currently visible area to reduce scrollbars, etc.

## Example of usage of the constrain_menus option:

```js
tinyMCE.init({
  ...
  constrain_menus : true
});
```
