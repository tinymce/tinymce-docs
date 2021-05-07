---
layout: default
title: forced_root_block
---

(Requires: 2.1.1)

This option enables you to make sure that any non block elements or text nodes are wrapped in block elements. For example <strong>something</strong> will result in output like: `<p><strong>something</strong></p>`. This option is enabled by default as of 3.0a1. **If you set this option to false it will never produce `p` tags on enter or automatically it will instead produce `br` elements and Shift+Enter will produce a `p`.**

## Example of usage of the forced_root_block option:

```js
tinyMCE.init({
  ...
  forced_root_block : 'p'
});
```
