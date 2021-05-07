---
layout: default
title: remove_linebreaks
---

This option controls whether line break characters should be removed from output HTML. This option is enabled by default because there are differences between browser implementations regarding what to do with white space in the DOM. Gecko and Safari place white space in text nodes in the DOM. IE and Opera remove them from the DOM and therefore the line breaks will automatically be removed in those. This option will normalize this behavior when enabled (true) and all browsers will have a white-space-stripped DOM serialization.

## Example of usage of the remove_linebreaks option:

```js
tinyMCE.init({
  ...
  remove_linebreaks : false
});
```
