### `paste_webkit_styles`

This option allows you to specify styles you want to keep when pasting in WebKit. WebKit has a bug where it will take all the computed CSS properties for an element and add them to spans within the editor. Since most users don't want random spans added all over their document, we need to manually clean that up until the bug is fixed. This option defaults to `"none"` but can be set to `"all"` or a specific list of styles to retain.

**Type:** `String`

#### Example: Using `paste_webkit_styles`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menubar: 'edit',
  toolbar: 'paste',
  paste_webkit_styles: 'color font-size'
});
```
