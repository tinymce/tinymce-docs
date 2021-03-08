## `table_column_resizing`

{{ site.requires_5_5v }}

{% if page.dir != "/plugins/opensource/table/" %}
> **Note**: The `table_column_resizing` option requires the `table` plugin.
{% endif %}

The `table_column_resizing` option sets whether a table or other columns are resized when a user resizes, inserts, or deletes a table column.

There are two settings:

- `preservetable`: The table width is maintained when manipulating table columns by changing the size of nearby columns.
- `resizetable`: The table width is changed when manipulating table columns and the size of other columns is maintained.

**Type:** `String`

**Default Value:** `'preservetable'`

**Possible values:** `'preservetable'`, `'resizetable'`

### Example: Using `table_column_resizing`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'table',
  table_column_resizing: 'resizetable'
});
```
