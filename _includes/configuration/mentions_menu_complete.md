### `mentions_menu_complete`

This option overrides the default logic for inserting the mention into the editor. The callback should return an element created using the editor's document.

**Type:** `Function`

**Default Value:** `none`

#### Example: Using `mentions_menu_complete`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'mentions',
  mentions_selector: 'span.mymention',
  mentions_menu_complete: function (editor, userInfo) {
    var span = editor.getDoc().createElement('span');
    span.className = 'mymention';
    // store the user id in the mention so it can be identified later
    span.setAttribute('data-mention-id', userInfo.id);
    span.appendChild(editor.getDoc().createTextNode('@' + userInfo.name));
    return span;
  }
});
```

