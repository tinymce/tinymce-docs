
> **Note**: Table row and table column cut, copy, and paste commands work with
{{site.productname}}'s internal table clipboard, not the user's system clipboard.

| Command                 | Description                                     |
| ----------------------- | ----------------------------------------------- |
| mceTableSizingMode | When `table_sizing_mode` is set to `'auto'`, this command sets the sizing mode of the currently selected table. For information on table sizing modes, see: [Table plugin - `table_sizing_mode`]({{site.baseurl}}/plugins/opensource/table/#table_sizing_mode). {{site.requires_5_4v}} |
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
| mceTableCellToggleClass | Adds a class to all selected cells that do not have it, or removes the class if all of them have it. {{site.requires_5_9v}}                  |
| mceTableToggleClass     | Adds a class to all selected tables that do not have it, or removes the class if all of them have it. {{site.requires_5_9v}}                 |
| mceTableToggleCaption   | Adds a caption to all selected tables that do not have it, or removes the class if all of them have it. {{site.requires_5_9v}}.              |
| mceInsertTable          | Opens the insert/edit table dialog or inserts a table without using a dialog if additional arguments are provided (see examples below).      |
| mceTableProps           | Opens the Table Properties dialog.              |
| mceTableRowProps        | Opens the table row properties dialog.          |
| mceTableCellProps       | Opens the table cell properties dialog.         |
| mceTableRowType       | Changes the current row or rows to the specified type, either: `'header'`, `'body'`, or `'footer'`. The structure of header rows is dependent on the [`table_header_type` option]({{site.baseurl}}/plugins/opensource/table/#table_header_type). {{site.requires_5_4v}} |
| mceTableColType       | Changes all cells in the current column or columns to the specified type, either: `'td'` or `'th'`. {{site.requires_5_4v}} |
| mceTableCellType       | Changes the current cell or cells to the specified type, either: `'td'` or `'th'`. {{site.requires_5_4v}} |

**Examples**

```js
tinymce.activeEditor.execCommand('mceTableSizingMode', false, 'fixed');
tinymce.activeEditor.execCommand('mceTableSizingMode', false, 'relative');
tinymce.activeEditor.execCommand('mceTableSizingMode', false, 'responsive');
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
tinymce.activeEditor.execCommand('mceInsertTable', false, { rows: 2, columns: 2 });
tinymce.activeEditor.execCommand('mceInsertTable', false, { rows: 3, columns: 2, options: { headerRows: 1 } });
tinymce.activeEditor.execCommand('mceInsertTable', false, { rows: 3, columns: 2, options: { headerRows: 1, headerColumns: 1 } });
tinymce.activeEditor.execCommand('mceTableProps');
tinymce.activeEditor.execCommand('mceTableRowProps');
tinymce.activeEditor.execCommand('mceTableCellProps');
tinymce.activeEditor.execCommand('mceTableRowType', false, { type: 'header' });
tinymce.activeEditor.execCommand('mceTableColType', false, { type: 'th' });
tinymce.activeEditor.execCommand('mceTableCellType', false, { type: 'th' });
```