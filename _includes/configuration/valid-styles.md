## valid_styles

This option allows you to specify the available styles for each element. This option also forces the ordering of the styles. To use this option, specify the element name, then the allowed styles or `*` for all elements.

By default, `valid_styles` is undefined, therefore all styles are valid. If a [`schema`](#schema) is set, `valid_styles` will override relevant parts of the `schema`.

**Type:** `Object`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  valid_styles: {
    '*': 'border,font-size',
    'div': 'width,height'
  }
});
```
