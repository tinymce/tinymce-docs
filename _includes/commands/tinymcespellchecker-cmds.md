{{ site.requires_5_7v }}

| Command                  | Description                      |
| ------------------------ | -------------------------------- |
| mceSpellcheckEnable      | Turns spellchecking on.          |
| mceSpellcheckDisable     | Turns spellchecking off.         |
| mceSpellcheckDialog      | Opens the spellchecking dialog.  |
| mceSpellcheckDialogClose | Closes the spellchecking dialog. |

**Example**

```js
tinymce.activeEditor.execCommand('mceSpellcheckEnable');
tinymce.activeEditor.execCommand('mceSpellcheckDisable');
tinymce.activeEditor.execCommand('mceSpellcheckDialog');
tinymce.activeEditor.execCommand('mceSpellcheckDialogClose');
```
