## file_browser_callback_types

This option enables you to specify what types of file pickers you need by using a space or comma separated list of type names. There are currently three valid types: `file`, `image` and `media`.

**Type:** `String`

**Possible Values:** `file`, `image`, `media`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  file_browser_callback_types: 'file image media'
});
```
