## `elementpath`

This option allows you to disable the _element path_ within the status bar at the bottom of the editor.

The element path shows the selected element and the parent elements. Clicking an element on the element path will select the element in the editor.

For example: If a paragraph element within a table is selected, the element path will show `table > tbody > tr > td > p`.

Selecting elements from the element path allows users to perform operations on blocks, such as applying formatting or copying an entire block.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

### Example: Using `elementpath`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  elementpath: false
});
```
