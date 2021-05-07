---
layout: default
title: browser_spellcheck
---

This option enables you toggle the internal Gecko/WebKit/IE spellchecker logic. This option is set to false by default and will then remove the spellchecker from TinyMCE since they are some what buggy in different browsers.

## Example of usage of the browser_spellcheck option:

```js
tinyMCE.init({
  ...
  browser_spellcheck : true
});
```
