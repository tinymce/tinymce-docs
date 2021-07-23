### `table_sizing_mode`

{{site.requires_5_4v}}

The `table_sizing_mode` option enforces the table sizing method used for new and modified tables (including resizing operations on tables). This option only impacts the _width_ of tables and cells and does not apply to the _height_ of tables and cells.

This option accepts the following values:

- `fixed` - Use pixel-based widths.
- `relative` - Use percent-based widths.
- `responsive` - Use no specified widths. **Note**: If a `responsive` table is resized, it will be converted to a `relative` table (a table cannot be resized without widths).
- `auto` - Detects the table sizing based on the width style or attribute and attempts to keep the current sizing mode.

**Type:** `String`

**Default Value:** `'auto'`

**Possible Values:**  `'fixed'`, `'relative'`, `'responsive'`, `'auto'`

#### Example: Using `table_sizing_mode`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table',
  menubar: 'table',
  toolbar: 'table',
  table_sizing_mode: 'relative'
});
```

