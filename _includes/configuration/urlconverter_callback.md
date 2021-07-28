## `urlconverter_callback`

This option enables you to add your own URL converter logic. This option should contain a JavaScript function name.

The format of the converter function is: `URLConverter(url, node, on_save)`, where:

* url = the URL string to convert,
* node = the element that contains the URL that is to be converted (this parameter may be set to null if there is no element for the URL), and
* on_save is always set to true.
* name = the attribute name that is being set.

This function should return the converted URL as a string. This option is set to an internal {{site.productname}} function [convertURL()]({{ site.baseurl }}/api/tinymce/tinymce.editor/) by default. You may call this function from your extension in order to use the built-in convert options.

**Type:** `Javascript Function`

### Example: Using `urlconverter_callback`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  urlconverter_callback: function(url, node, on_save, name) {
    // Do some custom URL conversion
    url = url.substring(3);

    // Return new URL
    return url;
  }
});
```
