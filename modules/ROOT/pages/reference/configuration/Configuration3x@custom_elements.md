---
layout: default
title: custom_elements
---

(Requires: 3.0.1)

This option enables you to specify non-HTML elements for the editor. These non-HTML elements will then be converted into divs and spans internally and then back to their original element names when you get contents from the editor. This way you can handle non-HTML elements inside an HTML editor. You can prefix the element names with a ~ if you want the element to be converted into a span element. The default behavior is to convert them to div elements. These div/span elements will be totally invisible to the user because they will see the custom names everywhere in the UI and on input/output.

## Example of usage of the custom_elements option:

```js
tinyMCE.init({
  ...
  extended_valid_elements : 'mycustomblock[id],mycustominline',
  custom_elements : 'mycustomblock,~mycustominline' // Notice the ~ prefix to force a span element for the element
});
```
