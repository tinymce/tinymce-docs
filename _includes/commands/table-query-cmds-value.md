The following table-related values can be queried using the [queryCommandValue]({{ site.baseurl }}/api/tinymce/tinymce.editorcommands/#querycommandvalue) API.

| Value                 | Description                                     |
| ----------------------- | ----------------------------------------------- |
| mceTableRowType | Returns the row type of the current table row, either: `"header"`, `"body"`, or `"footer"`. {{site.requires_5_4v}} |
| mceTableColType | Returns the column type of the current table column, either: `"td"` or `"th"`. {{site.requires_5_4v}} |
| mceTableCellType | Returns the cell type of the current table cell, either: `"td"` or `"th"`. {{site.requires_5_4v}} |

**Examples**

```js
tinymce.activeEditor.queryCommandValue('mceTableCellType');
tinymce.activeEditor.queryCommandValue('mceTableRowType');
tinymce.activeEditor.queryCommandValue('mceTableColType');
```