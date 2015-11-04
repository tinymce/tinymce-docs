## custom_elements

This option enables you to specify non-HTML elements for the editor.

This way you can handle non-HTML elements inside an HTML editor. You can prefix the element names with a ~ if you want the element to behave as a span element and not a div element.

The default behavior is to behave like div elements.

```js
tinyMCE.init({
        ...
        extended_valid_elements : 'mycustomblock[id],mycustominline',
        custom_elements : 'mycustomblock,~mycustominline' // Notice the ~ prefix to force a span element for the element
});
```
