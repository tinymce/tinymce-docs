## file_picker_callback

This hook can be used to add custom file picker to those dialogs that have it. Internally we support this in *Image*, *Media* and *Link* dialogs. Option replaces deprecated [file_browser_callback](#file_browser_callback). New callback has ability to update values of other fields in the dialog.

Once you define `file_picker_callback`, small browse button will appear along the fields of supported file types (see [file_picker_types](#file_picker_types)). When user clicks the button, TinyMCE will automatically call the callback with three arguments:

* **callback** - *a callback to call, once you have hold of the file; it expects new value for the field as the first argument and optionally meta information for other fields in the dialog as the second one*
* **value** - *current value of the affected field*
* **meta** - *object containing values of other fields in the specified dialog (notice that `meta.filetype` contains the type of the field)*
 
It should be noted, that we only provide a hook. It is up to you to implement specific functionality. 

**Type:** `JavaScript Function`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  file_picker_callback: function(callback, value, meta) {
    // Provide file and text for the link dialog
    if (meta.filetype == 'file') {
      callback('mypage.html', {text: 'My text'});
    }

    // Provide image and alt text for the image dialog
    if (meta.filetype == 'image') {
      callback('myimage.jpg', {alt: 'My alt text'});
    }

    // Provide alternative source and posted for the media dialog
    if (meta.filetype == 'media') {
      callback('movie.mp4', {source2: 'alt.ogg', poster: 'image.jpg'});
    }
  }
});
```

You might also consider our [MoxieManager]({{ site.baseurl }}/docs/plugins/moxiemanager/) module, which can hook onto `file_picker_callback` and provide feature-rich file manager UI right in the popup. With accompanying plugins it is possible to pick files from Dropbox, Google Drive and more. It's awesome!

