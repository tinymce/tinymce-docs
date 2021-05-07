---
layout: default
title: fix_nesting
---

**Removed in 3.4**

This option controls if invalid contents should be corrected before insertion in IE. IE has a bug that produced an invalid DOM tree if the input contents aren't correct so this option tries to fix this using preprocessing of the HTML string. This option is disabled by default since it might be a bit slow.

## This invalid code:

```html
<p><b></p></b>
```

## Gets converted into this correct value:

```html
<p><b></b></p>
```

## Example of usage of the fix_nesting option:

```js
tinyMCE.init({
  ...
  fix_nesting : true
});
```
