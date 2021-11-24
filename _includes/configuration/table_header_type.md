### `table_header_type`

The `table_header_type` option affects how tables are structured when a table row is set as a header row. Note that this setting does not affect header columns.

The `table_header_type` option has four different settings: `'section`', `'cells'`, `'sectionCells'`, and `'auto'`.

- `section` - When a table row is set as a header row, the row (`tr`) is moved to the `thead` element. The cell types (`td` and/or `th`) are unaffected.

  For example:

  ```html
  <table>
    <thead>
      <tr>
        <td>&nbsp;</td>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
    </tbody>
  </table>
  ```

- `cells` - When a table row is set as a header row, the row (`tr`) moves to the `tbody` element (if in a `thead` element). All table data cell elements (`td`) in the row are changed to table header cell elements (`th`).

  For example:

  ```html
  <table>
    <tbody>
      <tr>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
      </tr>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
    </tbody>
  </table>
  ```

- `sectionCells` - When a table row is set as a header row, the row (`tr`) is moved to the `thead` element. All cells in the row are changed to table header cell elements (`th`).

  For example:

  ```html
  <table>
    <thead>
      <tr>
        <th>&nbsp;</th>
        <th>&nbsp;</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>&nbsp;</td>
        <td>&nbsp;</td>
      </tr>
    </tbody>
  </table>
  ```

- `auto` - Finds the first existing header row in the table and uses the same structure. If no other table header row exists, the `section` header type will be applied.

**Type:** `String`

**Default Value:** `'section'`

**Possible Values:** `'section`', `'cells'`, `'sectionCells'`, `'auto'`

#### Example: Using `table_header_type`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
  menubar: 'table',
  toolbar: 'table',
  table_header_type: 'sectionCells'
});
```

