## `file_picker_types`

This option enables you to specify what types of file pickers you need by a space or comma separated list of type names. There are currently three valid types: `file`, `image` and `media`.

**Type:** `String`

**Possible Values:** `file`, `image`, `media`

### Example: Using `file_picker_types`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  file_picker_types: 'file image media'
});
```
