## valid_styles

This option enables you specify the available styles for each element. This means you can force ordering and only specific styles to be valid within style attribute values. Specify the element name, then it's styles or * for all elements.

Example of usage of the auto_focus option:

```js
tinymce.init({
    ...
    valid_styles: {
        "*": "border,font-size",
        "div": "width,height"
    }
});
```
