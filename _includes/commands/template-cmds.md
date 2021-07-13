
| Command           | Description                                                                     |
| ----------------- | ------------------------------------------------------------------------------- |
| mceInsertTemplate | Inserts a template the value should be the template HTML to process and insert. |
| mceTemplate       | Opens the Template dialog. |

**Example**

```js
tinymce.activeEditor.execCommand('mceInsertTemplate', false, '<p>This is my template text.</p>');
tinymce.activeEditor.execCommand('mceTemplate');
```
