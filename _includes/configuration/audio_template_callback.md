### `audio_template_callback`

This option allows you to specify the function that will return the HTML embed code of the audio media that you are attempting to insert into {{site.productname}}.

**Type:** `String`

#### Example: Using `audio_template_callback`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'media',
  menubar: 'insert',
  toolbar: 'media',
  audio_template_callback: function(data) {
   return '<audio controls>' + '\n<source src="' + data.source + '"' + (data.sourcemime ? ' type="' + data.sourcemime + '"' : '') + ' />\n' + (data.altsource ? '<source src="' + data.altsource + '"' + (data.altsourcemime ? ' type="' + data.altsourcemime + '"' : '') + ' />\n' : '') + '</audio>';
 }
});
```
