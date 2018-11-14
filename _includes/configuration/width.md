## width

Set the width of the editor.

> Note: If given a number, TinyMCE sets the width in pixels. If given a string, TinyMCE assumes the value is valid CSS and simply sets the editor's width as the string value. This allows for alternate units such as `%`, `em` and `vh`.

**Type:** `Number` or `String`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  width : 300
});
