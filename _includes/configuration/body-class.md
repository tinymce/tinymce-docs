## body_class

This option enables you to specify a class for the body of each editor instance. This class can then be used to do {{site.productname}} specific overrides in your `content_css`. There is also a specific `mceForceColors` class that can be used to override the text and background colors to be black and white.

**Type:** `String`

##### Examples: body_class

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
