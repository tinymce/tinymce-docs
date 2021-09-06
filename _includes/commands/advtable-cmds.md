
| Command                  | Description                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| mceAdvancedTableSort     | Opens the Advanced Table Sort Dialog for the current selection or cursor location.              |
| mceSortTableAdvanced     | Performs an Advanced Table Sort. For details, see [mceSortTableAdvanced](#mcesorttableadvanced).                                         |
| mceSortTableByColumnAsc  | Sorts the current table ascending by column based on the current cursor position or selection.  |
| mceSortTableByColumnDesc | Sorts the current table descending by column based on the current cursor position or selection. |
| mceSortTableByRowAsc     | Sorts the current table ascending by row based on the current cursor position or selection.     |
| mceSortTableByRowDesc    | Sorts the current table descending by row based on the current cursor position or selection.    |
| mceTableToggleSeries     | Toggles a series column on the selected table. For details, see [mceTableToggleSeries](#mcetabletoggleseries). {{ site.requires_5_9v }} |

**Examples**

```js
tinymce.activeEditor.execCommand('mceAdvancedTableSort')
tinymce.activeEditor.execCommand('mceSortTableAdvanced', false, { sortby: 'row', roworcol: '2', sort: 'table', order: 'ascending' })
tinymce.activeEditor.execCommand('mceSortTableByColumnAsc')
tinymce.activeEditor.execCommand('mceSortTableByColumnDesc')
tinymce.activeEditor.execCommand('mceSortTableByRowAsc')
tinymce.activeEditor.execCommand('mceSortTableByRowDesc')
tinymce.activeEditor.execCommand('mceTableToggleSeries', false, { name: 'numeric', location: 'left' })
```

### `mceSortTableAdvanced`

`mceSortTableAdvanced` accepts an object with the following key-value pairs:

- `sortby` - `'row'` or `'column'`
- `roworcol` - a zero-indexed integer in a string representing the row from the top of the table or column from the left of the table.
- `sort` - `'row'`, `'column'`, `'selection'`, or `'table'`
- `order` - `'ascending'` or `'descending'`

### `mceTableToggleSeries`

`mceTableToggleSeries` accepts an object with the following key-value pairs:

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| name | `string` | Required |  Specifies the series to toggle. Series and their associated names are configured using the [advtable_value_series option]({{site.baseurl}}/plugins/premium/advtable/#advtable_value_series). If the series name provided is not present on the table, a series column will be inserted or an existing series column will be replaced by the new series. |
| location | `'left'` | Required | Specifies the location of where the series is toggled in the table. For example, a location of `left` will toggle a series column on the left side of the table.  |
