## file_picker_types

This option enables you to specify what types of file pickers you need by a space or comma separated list of type names. There are currently three valid types file, image and media.

Example of usage

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  file_picker_types: 'file image media'
});
```
