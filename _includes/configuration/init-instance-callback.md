## `init_instance_callback`

The **init_instance_callback** option allows you to specify a function name to be executed each time an editor instance is initialized. The format of this function is `initInstance(editor)` where `editor` is the editor instance object reference.

**Type:** `JavaScript Function`

### Example: Using `init_instance_callback`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  init_instance_callback : function(editor) {
    console.log('Editor: ' + editor.id + ' is now initialized.');
  }
});
```

You may also want to take a look at the [setup callback option](#setup) as it can be used to bind events before the editor instance is initialized.
