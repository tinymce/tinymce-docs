---
layout: default
title: Callbacks
---

These settings allow the execution of callbacks after specific events have occurred in the editor.

## color_picker_callback

This option enables you to provide your own color picker.

Example of usage

```js
tinymce.init({
    color_picker_callback: function(callback, value) {
        callback('#FF00FF');
    }
});
```



## file_browser_callback

This option enables you to add your own file browser/image browser to TinyMCE. If this option is set with a value a browse button will appear in different dialogues such as "insert/edit link" or "insert/edit image". If this option hasn't got a value set (or equals to false or null) the dialogues in question won't show any browse button.

This function is executed each time a user clicks on the "browse" buttons in various dialogues. The format of this callback function is: fileBrowser(field_name, url, type, win) where field_name is the id/name of the form element that the browser should insert its URL into. The url parameter contains the URL value that is currently inside the field. The type parameter contains what type of browser to present; this value can be file, image or flash depending on what dialogue is calling the function. The win parameter contains a reference to the dialog/window that executes the function.

Example of usage of the file_browser_callback option:

```js
tinymce.init({
    ...
    file_browser_callback: function(field_name, url, type, win) {
        win.document.getElementById(field_name).value = 'my browser value';
    }
});
```

You can fiddle with this example at the [fiddle.tinymce.com](fiddle.tinymce.com) site.

## file_browser_callback_types

This option enables you to specify what types of file pickers you need by a space or comma separated list of type names. There are currently three valid types file, image and media.

Example of usage

```js
tinymce.init({
    file_browser_callback_types: 'file image media'
});
```

## file_picker_callback

This option enables you add your own file picker for various dialog fields. This replaces the old [file_browser_callback](#). This new callback option has the ability to update meta data inside the dialogs.

Example of usage of the file_picker_callback option:

```js
tinymce.init({
    ...
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

## file_picker_types

This option enables you to specify what types of file pickers you need by a space or comma separated list of type names. There are currently three valid types file, image and media.

Example of usage

```js
tinymce.init({
    file_picker_types: 'file image media'
});
```



## init_instance_callback

This option should contain a function name to be executed each time a editor instance is initialized. The format of this function is: initInstance(editor) where editor is the editor instance object reference.

Example of usage of the init_instance_callback option:

```js
tinymce.init({
    ...
    init_instance_callback : function(editor) {
        console.log("Editor: " + editor.id + " is now initialized.");
    }
});
```

Also see the the [setup callback option](#setup) it enabled you to bind events before the editor instance is initialized.

## setup

This option allows you to specify an event that will be executed before the TinyMCE editor instance is rendered.

To specify a setup event, please provide the setup option with a javascript function. This function should have one argument, which is a reference to the editor that is being set up.

A common use case for this setting is to add editor events to TinyMCE. For instance, if you would like to add a click event to TinyMCE, you would add it through the setup configuration setting.

An example of this setting is as follows:

```js
tinymce.init({
    ...
    setup: function(editor) {
        editor.on('click', function(e) {
            console.log('Editor was clicked');
        });
    },
    ...
});
```

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
