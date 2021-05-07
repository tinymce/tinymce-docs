---
layout: default
title: browsers
---

This option should contain a comma separated list of supported browsers. This enables you, for example, to disable the editor while running on Safari. The default value of this option is: msie,gecko,safari,opera. Since the support for Safari is very limited, a warning message will appear until a better version is released. The possible values of this option are msie, gecko, safari and opera.

## Example of usage of the browsers option:

```js
tinyMCE.init({
  ...
  browsers : "msie,gecko,opera"
});

```
