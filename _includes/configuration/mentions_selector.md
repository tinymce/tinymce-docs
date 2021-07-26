### `mentions_selector`

This option enables you to provide a custom CSS selector that should match the element created using `mentions_menu_complete`. This enables the plugin to find existing mentions. The callback takes two parameters: the editor instance and the userInfo object.

**Type:** `Function`

#### Example: Using `mentions_selector`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'mentions',
  mentions_selector: 'span.mymention',
  mentions_menu_complete: function (editor, userInfo) {
    var span = editor.getDoc().createElement('span');
    span.className = 'mymention';
    span.setAttribute('data-mention-id', userInfo.id);
    span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
    return span;
  }
});
```
