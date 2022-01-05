## `noneditable_class`

This option allows you to specify the class name that {{site.productname}} will use to determine which areas of content are non-editable. This would be the same as `contenteditable=false`.

Note that classes with the `mceItem` prefix are invisible within {{site.productname}}.

Type
: `String`

Default Value
: `'mceNonEditable'`

#### Example: Using `noneditable_class`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  noneditable_class: 'mceNonEditable'
});
```

