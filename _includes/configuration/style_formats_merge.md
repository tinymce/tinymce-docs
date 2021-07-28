## `style_formats_merge`

This option allows you to set whether {{site.productname}} should append custom styles defined using the [`style_formats`]({{ site.baseurl }}/configure/editor-appearance/#style_formats) setting to the default style formats or completely replace them.

**Type:** `Boolean`
**Default:** `false`

### Example: Using `style_formats_merge`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  style_formats: [
    {title: 'Bold text', inline: 'b'},
    {title: 'Red text', inline: 'span', styles: {color: '#ff0000'}}
  ],
  style_formats_merge: true
});
```
