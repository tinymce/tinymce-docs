
| Command                  | Description                                                                                     |
| ------------------------ | ----------------------------------------------------------------------------------------------- |
| mceAdvancedTableSort     | Opens the Advanced Table Sort Dialog for the current selection or cursor location.              |
| mceSortTableAdvanced     | Performs an Advanced Table Sort. For details, see [Using `mceSortTableAdvanced`](#usingmcesorttableadvanced).                                         |
| mceSortTableByColumnAsc  | Sorts the current table ascending by column based on the current cursor position or selection.  |
| mceSortTableByColumnDesc | Sorts the current table descending by column based on the current cursor position or selection. |
| mceSortTableByRowAsc     | Sorts the current table ascending by row based on the current cursor position or selection.     |
| mceSortTableByRowDesc    | Sorts the current table descending by row based on the current cursor position or selection.    |
| mceTableToggleSeries     | Toggles a series column on the selected table. For details, see [Using `mceTableToggleSeries`](#usingmcetabletoggleseries).  |

**Examples**

```js
tinymce.activeEditor.execCommand('mceAdvancedTableSort')
tinymce.activeEditor.execCommand('mceSortTableAdvanced', false, { sortby: 'row', roworcol: '2', sort: 'table', order: 'ascending' })
tinymce.activeEditor.execCommand('mceSortTableByColumnAsc')
tinymce.activeEditor.execCommand('mceSortTableByColumnDesc')
tinymce.activeEditor.execCommand('mceSortTableByRowAsc')
tinymce.activeEditor.execCommand('mceSortTableByRowDesc')
tinymce.activeEditor.execCommand('mceTableToggleSeries', false, { name: 'numeric' })
```

### Using `mceSortTableAdvanced`

`mceSortTableAdvanced` accepts an object with the following key-value pairs:

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| sortby | `'row'` or `'column'` | Required | |
| roworcol | `number` | Required | A zero-indexed integer in a string representing the row from the top of the table or column from the left of the table. |
| sort | `'row'`, `'column'`, `'selection'`, or `'table'` | Required | |
| order | `'ascending'` or `'descending'` | Required | |

### Using `mceTableToggleSeries`

`mceTableToggleSeries` accepts an object with the following key-value pairs:

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| name | `string` | Required |  Specifies the series to toggle. Series and their associated names are configured using the [`advtable_value_series` option]({{site.baseurl}}/plugins-ref/premium/advtable/#advtable_value_series). |

If the table already has a series column that uses the series specified in `name`, the series column will be removed from the table. Otherwise, a new series column will be created, replacing any other series column that may already be in the table.
