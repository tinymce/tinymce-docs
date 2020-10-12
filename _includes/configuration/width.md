## `width`

Set the width of the editor.

> **Note**: {{site.productname}} sets the width in pixels if a number is provided. However, if {{site.productname}} is provided a string it assumes the value is valid CSS and simply sets the editor's width as the string value. This allows for alternate units such as `%`, `em` and `vh`.

**Type:** `Number` or `String`

### Example: Using `width`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  width : 300
});
```
