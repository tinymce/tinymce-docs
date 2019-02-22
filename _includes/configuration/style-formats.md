
## style_formats

This option enables you to add more advanced style formats for text and other elements to the editor. The value of this option will be rendered as styles in the `styleselect` dropdown toolbar item.

It's important to note that the `style_formats` option, while similar in syntax, is entirely separate from the `formats` option. For a complete reference of the different format options then check the [formats]({{ site.baseurl }}/configure/content-formatting/#formats)

**Type:** `Array`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  toolbar: "styleselect",
  style_formats: [
    {title: 'Bold text', inline: 'b'},
    {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}},
    {title: 'Red header', block: 'h1', styles: {color: '#ff0000'}},
    {title: 'Example 1', inline: 'span', classes: 'example1'},
    {title: 'Example 2', inline: 'span', classes: 'example2'},
    {title: 'Table styles'},
    {title: 'Table row 1', selector: 'tr', classes: 'tablerow1'}
  ]
});
```

Another example, this will add two options to the Formats dropdown, one for aligning an image left and adding a margin, one for putting it on the right side and setting a margin.

**Type:** `Array`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: "styleselect",
  style_formats: [
    {
      title: 'Image Left',
      selector: 'img',
      styles: {
        'float': 'left',
        'margin': '0 10px 0 10px'
      }
    },
    {
      title: 'Image Right',
      selector: 'img',
      styles: {
        'float': 'right',
        'margin': '0 0 10px 10px'
      }
    }
  ]
});
```

A live demo of this option can be found in the [custom formats]({{ site.baseurl }}/demo/format-custom/) example.

If you want to merge your styles to the default `styles_format`, you can use the `style_formats_merge` settings:

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: "styleselect",
  style_formats_merge: true,
  style_formats: [
      // Your format as described on this page
  ]
});
```

The default is very similar to the following:

**Type:** `Array`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  toolbar: "styleselect",
  style_formats: [
    {title: 'Headers', items: [
      {title: 'Header 1', format: 'h1'},
      {title: 'Header 2', format: 'h2'},
      {title: 'Header 3', format: 'h3'},
      {title: 'Header 4', format: 'h4'},
      {title: 'Header 5', format: 'h5'},
      {title: 'Header 6', format: 'h6'}
    ]},
    {title: 'Inline', items: [
      {title: 'Bold', icon: 'bold', format: 'bold'},
      {title: 'Italic', icon: 'italic', format: 'italic'},
      {title: 'Underline', icon: 'underline', format: 'underline'},
      {title: 'Strikethrough', icon: 'strikethrough', format: 'strikethrough'},
      {title: 'Superscript', icon: 'superscript', format: 'superscript'},
      {title: 'Subscript', icon: 'subscript', format: 'subscript'},
      {title: 'Code', icon: 'code', format: 'code'}
    ]},
    {title: 'Blocks', items: [
      {title: 'Paragraph', format: 'p'},
      {title: 'Blockquote', format: 'blockquote'},
      {title: 'Div', format: 'div'},
      {title: 'Pre', format: 'pre'}
    ]},
    {title: 'Alignment', items: [
      {title: 'Left', icon: 'alignleft', format: 'alignleft'},
      {title: 'Center', icon: 'aligncenter', format: 'aligncenter'},
      {title: 'Right', icon: 'alignright', format: 'alignright'},
      {title: 'Justify', icon: 'alignjustify', format: 'alignjustify'}
    ]}
  ]
});
```

Hopefully we'll have an [exact replica of the defaults](https://community.tiny.cloud/communityQuestion?id=90661000000Mrw1AAC) soon.
