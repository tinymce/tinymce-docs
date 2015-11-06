## toolbar

This option allows you to specify the buttons and the order that they will appear on TinyMCE's toolbar.

To specify the controls that should appear on TinyMCE's toolbar, the toolbar option should be provided with a space separated list of toolbar controls. To create groups within this list, please add "|" pipe characters between the groups of controls that you would like to create.

An example of such a grouped toolbar is as follows:

```js
tinymce.init({
    ...
    toolbar: "undo redo | styleselect | bold italic | link image",
    ...
});
```

To disable the toolbar, the toolbar option should be provided a boolean value of false.

An example of a disabled toolbar is as follows:

```js
tinymce.init({
    ...
    toolbar: false,
    ...
});
```

To specify multiple toolbars, the toolbar option should be provided with an array of space separated strings.

An example of multiple toolbars is as follows:

```js
tinymce.init({
    ...
    toolbar: [
        "undo redo | styleselect | bold italic | link image",
        "alignleft aligncenter alignright"
    ]
    ...
});
```

Alternatively, you may specify multiple toolbars through the use of the [toolbar&lt;N&gt;](#toolbar<N>) option.
