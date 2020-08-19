## body_class

Use the `body_class` option to add a class to the body of each editor instance. This class can be used to override the styles added by `content_css`. The `body_class` will be removed if the editor is removed and is not be included on any content retrieved from the editor.

**Type:** `String`

##### Example

This will add the same class to all editors that gets created by the `init` call.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  body_class: 'my_class'
});
```

This will set specific classes on the bodies of specific editors.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  body_class: 'elm1=my_class, elm2=my_class'
});
```
