
| Command                 | Description                                     |
| ----------------------- | ----------------------------------------------- |
| mceTableRowType | 'header', 'body', or 'footer' {{site.requires_5_4v}} |
| mceTableColType | 'td' or 'th' {{site.requires_5_4v}} |
| mceTableCellType | 'td' or 'th' {{site.requires_5_4v}} |

**Examples**

```js
tinymce.activeEditor.queryCommandValue('mceTableCellType');
tinymce.activeEditor.queryCommandValue('mceTableRowType');
tinymce.activeEditor.queryCommandValue('mceTableColType');
```