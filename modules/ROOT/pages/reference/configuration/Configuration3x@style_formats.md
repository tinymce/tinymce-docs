---
layout: default
title: style_formats
---

(Requires: 3.3)

This option enables you to add more advanced style formats for text and other elements to the editor. The value of this option will be rendered as styles in the styles drop down if you use the advanced theme. The format of the option is very similar to the [formats](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@formats/) option the only difference is the title name that is used for presentation in the drop list.

## Example of usage of the style_formats option:

```js
tinyMCE.init({
    ...
    style_formats : [
        {title : 'Bold text', inline : 'b'},
        {title : 'Red text', inline : 'span', styles : {color : '#ff0000'}},
        {title : 'Red header', block : 'h1', styles : {color : '#ff0000'}},
        {title : 'Example 1', inline : 'span', classes : 'example1'},
        {title : 'Example 2', inline : 'span', classes : 'example2'},
        {title : 'Table styles'},
        {title : 'Table row 1', selector : 'tr', classes : 'tablerow1'}
    ]
});
```

A live demo of this option can be found in the [Custom formats example](https://www.tiny.cloud/docs/demo/format-custom/).
