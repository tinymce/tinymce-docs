
| Command              | Description                                   |
| -------------------- | --------------------------------------------- |
| InsertDefinitionList | Inserts a definition list into the editor.    |
| InsertOrderedList    | Inserts an ordered list into the editor.      |
| InsertUnorderedList  | Inserts an unordered list into the editor.    |
| RemoveList           | Removes the list elements from the selection. |

**Examples**

```js
tinymce.activeEditor.execCommand('InsertDefinitionList');
tinymce.activeEditor.execCommand('InsertOrderedList', false, {
  'list-style-type': 'decimal'
});
tinymce.activeEditor.execCommand('InsertUnorderedList', false, {
  'list-style-type': 'disc'
});
tinymce.activeEditor.execCommand('RemoveList');
```
