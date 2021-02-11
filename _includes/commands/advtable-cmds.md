
| Command                  | Description                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| mceAdvancedTableSort     | Opens the Advanced Table Sort Dialog for the current selection or cursor location.              |
| mceSortTableAdvanced     | Performs an Advanced Table Sort. See below for details.                                         |
| mceSortTableByColumnAsc  | Sorts the current table ascending by column based on the current cursor position or selection.  |
| mceSortTableByColumnDesc | Sorts the current table descending by column based on the current cursor position or selection. |
| mceSortTableByRowAsc     | Sorts the current table ascending by row based on the current cursor position or selection.     |
| mceSortTableByRowDesc    | Sorts the current table descending by row based on the current cursor position or selection.    |
| mceTableToggleSeries     | Toggles a series column on the selected table. See below for more details. |

`mceSortTableAdvanced` accepts an object with the following value pairs:

- `sortby` - `'row'` or `'column'`
- `roworcol` - a zero-indexed integer in a string representing the row from the top of the table or column from the left of the table.
- `sort` - `'row'`, `'column'`, `'selection'`, or `'table'`
- `order` - `'ascending'` or `'descending'`

`mceTableToggleSeries` accepts an object with the following key-value pairs:

- `name` - a string indicating the series to toggle. Series and their associated names are configured using the [advtable_value_series]({{site.baseurl}}/plugins/premium/advtable/#advtable_value_series) option. If a different series name is provided than what is present on the table, the series column will be updated to use the new series.
- `location` - `'left'`

**Examples**

```js
tinymce.activeEditor.execCommand('mceAdvancedTableSort')
tinymce.activeEditor.execCommand('mceSortTableAdvanced', false, { sortby: 'row', roworcol: '2', sort: 'table', order: 'ascending' })
tinymce.activeEditor.execCommand('mceSortTableByColumnAsc')
tinymce.activeEditor.execCommand('mceSortTableByColumnDesc')
tinymce.activeEditor.execCommand('mceSortTableByRowAsc')
tinymce.activeEditor.execCommand('mceSortTableByRowDesc')
tinymce.activeEditor.execCommand('mceTableToggleSeries', false, { name: 'numbers', location: 'left' })
```