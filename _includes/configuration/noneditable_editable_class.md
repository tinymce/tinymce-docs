### `noneditable_editable_class`

This option allows you to specify the class name that {{site.productname}} will use to determine which areas of content are editable when using the `noneditable` plugin. This would be the the same as `contenteditable=true`, forcing an element to be editable.

Note that classes with the `mceItem` prefix are invisible within {{site.productname}}.

Type
: `String`

Default Value
: `'mceEditable'`

#### Example: Using `noneditable_editable_class`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'noneditable',
  noneditable_editable_class: 'mceEditable'
});
```

