The following table-related values can be queried using the [queryCommandValue]({{ site.baseurl }}/apis/tinymce/tinymce.editorcommands/#querycommandvalue) API.

| Value                 | Description                                     |
| ----------------------- | ----------------------------------------------- |
| mceTableRowType | Returns the row type of the current table row, either: `"header"`, `"body"`, or `"footer"`.  |
| mceTableColType | Returns the column type of the current table column, either: `"td"` or `"th"`.  |
| mceTableCellType | Returns the cell type of the current table cell, either: `"td"` or `"th"`.  |

**Examples**

```js
tinymce.activeEditor.queryCommandValue('mceTableCellType');
tinymce.activeEditor.queryCommandValue('mceTableRowType');
tinymce.activeEditor.queryCommandValue('mceTableColType');
```