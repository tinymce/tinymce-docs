
> **Note**: Table row and table column cut, copy, and paste commands work with
{{site.productname}}'s internal table clipboard, not the user's system clipboard.

| Command                 | Description                                     |
| ----------------------- | ----------------------------------------------- |
| mceTableApplyCellStyle | Applies the specified styles to the selected cells. The following styles can be changed with this command: `background-color`, `border-color`, `border-style`, and `border-width`. Providing an empty value for a style will remove the style, such as `{ 'background-color': '' }`. {{site.requires_5_4v}} |
| mceTableSplitCells      | Splits the current merged table cell.           |
| mceTableMergeCells      | Merges the selected cells.                      |
| mceTableInsertRowBefore | Inserts a row before the current row.           |
| mceTableInsertRowAfter  | Inserts a row after the current row.            |
| mceTableInsertColBefore | Inserts a column before the current column.     |
| mceTableInsertColAfter  | Inserts a column after the current column.      |
| mceTableDeleteCol       | Deletes the current column.                     |
| mceTableDeleteRow       | Deletes the current row.                        |
| mceTableCutRow          | Cuts the current row to the {{site.productname}} clipboard.        |
| mceTableCutCol          | Cuts the current column to the {{site.productname}} clipboard. {{site.requires_5_4v}}    |
| mceTableCopyRow         | Copies the current row to the {{site.productname}} clipboard.      |
| mceTableCopyCol         | Copies the current column to the {{site.productname}} clipboard. {{site.requires_5_4v}}  |
| mceTablePasteRowBefore  | Paste the {{site.productname}} clipboard row before the current row. |
| mceTablePasteRowAfter   | Paste the {{site.productname}} clipboard row after the current row.  |
| mceTablePasteColBefore  | Paste the {{site.productname}} clipboard column before the current row. {{site.requires_5_4v}} |
| mceTablePasteColAfter   | Paste the {{site.productname}} clipboard column after the current row. {{site.requires_5_4v}} |
| mceTableDelete          | Deletes the current table.                      |
| mceInsertTable          | Opens the insert/edit table dialog.             |
| mceTableProps           | Opens the Table Properties dialog.              |
| mceTableRowProps        | Opens the table row properties dialog.          |
| mceTableCellProps       | Opens the table cell properties dialog.         |

**Examples**

```js
tinymce.activeEditor.execCommand('mceTableApplyCellStyle', false, { 'background-color': 'red', 'border-color': 'blue' });
tinymce.activeEditor.execCommand('mceTableApplyCellStyle', false, { 'background-color': '' }); // removes the current background-color
tinymce.activeEditor.execCommand('mceTableSplitCells');
tinymce.activeEditor.execCommand('mceTableMergeCells');
tinymce.activeEditor.execCommand('mceTableInsertRowBefore');
tinymce.activeEditor.execCommand('mceTableInsertRowAfter');
tinymce.activeEditor.execCommand('mceTableInsertColBefore');
tinymce.activeEditor.execCommand('mceTableInsertColAfter');
tinymce.activeEditor.execCommand('mceTableDeleteCol');
tinymce.activeEditor.execCommand('mceTableDeleteRow');
tinymce.activeEditor.execCommand('mceTableCutRow');
tinymce.activeEditor.execCommand('mceTableCutCol');
tinymce.activeEditor.execCommand('mceTableCopyRow');
tinymce.activeEditor.execCommand('mceTableCopyCol');
tinymce.activeEditor.execCommand('mceTablePasteRowBefore');
tinymce.activeEditor.execCommand('mceTablePasteRowAfter');
tinymce.activeEditor.execCommand('mceTablePasteColBefore');
tinymce.activeEditor.execCommand('mceTablePasteColAfter');
tinymce.activeEditor.execCommand('mceTableDelete');
tinymce.activeEditor.execCommand('mceInsertTable');
tinymce.activeEditor.execCommand('mceTableProps');
tinymce.activeEditor.execCommand('mceTableRowProps');
tinymce.activeEditor.execCommand('mceTableCellProps');
```
