## init_instance_callback

This option should contain a function name to be executed each time a editor instance is initialized. The format of this function is `initInstance(editor)` where `editor` is the editor instance object reference.

**Type:** `JavaScript Function`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  init_instance_callback : function(editor) {
    console.log("Editor: " + editor.id + " is now initialized.");
  }
});
```

Also see the the [setup callback option](#setup) it enabled you to bind events before the editor instance is initialized.
