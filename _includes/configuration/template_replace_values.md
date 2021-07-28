### `template_replace_values`

This is an object containing items that will be replaced with their respective string values when a template is inserted into the editor content.

**Type:** `Object`

#### Example: Using `template_replace_values`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'template',
  menubar: 'insert',
  toolbar: 'template',
  template_replace_values: {
    username: 'Jack Black',
    staffid: '991234'
  }
});
```

This can then be used in a template or snippet that looks like this:

```html
<p>Name: {$username}, StaffID: {$staffid}</p>
```

And that will be changed to:

```html
<p>Name: Jack Black, StaffID: 991234</p>
```

