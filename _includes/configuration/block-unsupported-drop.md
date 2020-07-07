## block_unsupported_drop

Enable or disable blocking unsupported images or files being dropped within the editor. An unsupported file is any image or file that is not handled by a plugin and would cause the browser to navigate away from the editor.

{{site.requires_5_4v}}

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  block_unsupported_drop: false
});
```
