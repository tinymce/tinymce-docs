## urlconverter_callback
This option enables you to add your own URL converter logic. This option should contain a JavaScript function name. The format of this converter function is: URLConverter(url, node, on_save), where:

url = the URL string to convert,

node = the element that contains the URL that is to be converted (this parameter may be set to null if there is no element for the URL), and

on_save is always set to true.

name = the attribute name that is being set.

This function should return the converted URL as a string. This option is set to an internal TinyMCE function <editor>.[convertURL()](http://www.tinymce.com/wiki.php/API4:method.tinymce.Editor.convertURL) by default. You may call this function from your extension in order to use the built-in convert options.

Example of usage of the urlconverter_callback option:

```js
function myCustomURLConverter(url, node, on_save, name) {
        // Do some custom URL convertion
        url = url.substring(3);

        // Return new URL
        return url;
}

tinyMCE.init({
        ...
        urlconverter_callback : "myCustomURLConverter"
});
```
