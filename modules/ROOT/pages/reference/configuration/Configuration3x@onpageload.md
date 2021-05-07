---
layout: default
title: onpageload
---

This option enables you to specify a function name to be executed when the page is loaded but before the TinyMCE instances are created.

## Example of usage of the onpageload option:

```js
function myCustomOnPageLoad() {
  alert("We are nearly ready to rumble!!");
}

tinyMCE.init({
  ...
  onpageload : "myCustomOnPageLoad"
});
```
