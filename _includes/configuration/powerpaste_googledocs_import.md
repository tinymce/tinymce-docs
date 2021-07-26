### `powerpaste_googledocs_import`

{{site.requires_5_8v}}

This option controls how content pasted from Google Docs is filtered.

**Type:** `String` or `Function`

**Default Value:** `prompt`

{% include plugins/powerpaste_import_types.md %}

#### Example: `powerpaste_googledocs_import` using an asynchronous function

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'powerpaste',
  powerpaste_googledocs_imports: function() {
    // use a native confirm dialog to prompt the user to choose between clean and merge
    return new Promise(function (resolve) {
      if (confirm('Would you like to keep formatting?')) {
        resolve('merge');
      } else {
        resolve('clean');
      }
    });
  }
});
```
