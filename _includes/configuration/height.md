## `height`

**height** sets the height of the entire editor, including the menu bar, toolbars, and status bar.

> **Note**: If a number is provided, {{site.productname}} sets the height in pixels. If a string is provided, {{site.productname}} assumes the value is valid CSS and sets the editor's height as the string value. This allows for alternate units such as `%`, `em`, and `vh`.

**Type:** `Number` or `String`

### Example: Using `height`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  height: 300
});
```
