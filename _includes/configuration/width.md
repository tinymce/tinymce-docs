## width

Set the width of the editor.

> Note: TinyMCE sets the width in pixels if a number is provided. However, if TinyMCE is provided a string it assumes the value is valid CSS and simply sets the editor's width as the string value. This allows for alternate units such as `%`, `em` and `vh`. 

**Type:** `Number` or `String`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  width : 300
});
