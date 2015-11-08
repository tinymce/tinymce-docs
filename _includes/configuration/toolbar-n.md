## toolbar&lt;N&gt;

This option allows you to specify the buttons and the order that they will appear on multiple of TinyMCE's toolbars.

Please see the [toolbar](#toolbar) configuration option for details.

An example of this setting is as follows:

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  toolbar1: "undo redo | styleselect | bold italic | link image",
  toolbar2: "alignleft aligncenter alignright"
});
```
