
## `custom_undo_redo_levels`

This option should contain the number of undo levels to keep in memory. By default, it is set to use an unlimited number of undo levels. The value of `custom_undo_redo_levels` should be 10 or lower for low-end systems otherwise it **steals a lot of memory**.

**Type:** `Number`

**Default Value:** `unlimited`

### Example: Using `custom_undo_redo_levels`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  custom_undo_redo_levels: 10
});
```
