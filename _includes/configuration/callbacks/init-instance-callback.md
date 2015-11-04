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
