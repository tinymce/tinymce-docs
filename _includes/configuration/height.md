## height

**height** sets the height of the entire editor, including the menubar, toolbars, and status bar.

> Note: If given a number, TinyMCE sets the height in pixels. If given a string, TinyMCE assumes the value is valid CSS and simply sets the editor's height as the string value. This allows for alternate units such as `%`, `em` and `vh`.

**Type:** `Number` or `String`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  height: 300
});
```
