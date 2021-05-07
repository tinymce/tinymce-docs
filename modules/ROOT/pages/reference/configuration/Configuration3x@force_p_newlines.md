---
layout: default
title: force_p_newlines
---

**This option is deprecated as of 3.5 use `forced_root_blocks: false` instead to control `p` vs `br` behavior.**

This option enables you to disable/enable the creation of paragraphs on return/enter in Mozilla/Firefox. The default value of this option is true.

## Example of usage of the force_p_newlines option:

```js
tinyMCE.init({
  ...
  force_p_newlines : true
});
```
