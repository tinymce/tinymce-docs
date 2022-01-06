## `editable_class`

This option allows you to specify the class name that {{site.productname}} will use to determine which areas of content are editable. This would be the same as `contenteditable=true`, forcing an element to be editable.

Note that classes with the `mceItem` prefix are invisible within {{site.productname}}.

Type
: `String`

Default Value
: `'mceEditable'`

#### Example: Using `editable_class`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  editable_class: 'mceEditable'
});
```

