## `body_id`

This option enables you to specify an id for the body of each editor instance. This id can then be used to do {{site.productname}} specific overrides in your `content_css`.

**Type:** `String`

### Example: Using `body_id`

This will add the same id to all editors that gets created by the `init` call.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  body_id: 'my_id'
});
```

This will set specific ids on the bodies of specific editors.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  body_id: 'elm1=my_id, elm2=my_id2'
});
```
