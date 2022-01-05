### `permanentpen_properties`

The default formats for Permanent Pen can be specified in the following configuration.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'permanentpen',
  contextmenu: 'configurepermanentpen',
  toolbar: 'permanentpen',
  permanentpen_properties: {
    fontname: 'arial,helvetica,sans-serif',
    forecolor: '#E74C3C',
    fontsize: '12pt',
    hilitecolor: '',
    bold: true,
    italic: false,
    strikethrough: false,
    underline: false
  }
});
```

For more information on {{site.productname}} formats, refer to the [formats]({{site.baseurl}}/content/content-formatting/#formats) section.
