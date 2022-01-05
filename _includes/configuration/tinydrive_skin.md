## tinydrive_skin

This option sets the skin applied to {{site.cloudfilemanager}}. The default skin included with {{site.cloudfilemanager}} is named "oxide".

Type
: `String`

Default Value
: `'oxide'`

Possible Values
: `'oxide'`, `'oxide-dark'`

If the `tinydrive_skin` option is not specified, {{site.cloudfilemanager}} will try and use the skin specified by the [{{site.productname}} `skin` option]({{ site.baseurl }}/interface/editor-appearance/editor-skin/#skin) before falling back to the default "oxide" skin.

### Example: Using `tinydrive_skin`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  tinydrive_skin: 'oxide-dark'
});
```
