## `valid_styles`

To use this option, specify an object containing a mapping of element names to allowed styles. To specify the allowed styles for all elements, use `*` as the element name.

By default, all styles are allowed unless `valid_styles` or `invalid_styles` is configured.

**Type:** `Object`

### Example: Using `valid_styles`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  valid_styles: {
    '*': 'border,font-size',
    'div': 'width,height'
  }
});
```
