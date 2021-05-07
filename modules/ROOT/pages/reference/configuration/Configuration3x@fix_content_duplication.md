---
layout: default
title: fix_content_duplication
---

**Removed in 3.4**

This option is available since MSIE has a serious bug where the DOM tree sometimes can include the same node twice. This produces duplication of content when the cleanup process runs. This option is enabled by default and removes any duplicated nodes.

## Example of usage of the fix_content_duplication option:

```js
tinyMCE.init({
  ...
  fix_content_duplication : false
});
```
