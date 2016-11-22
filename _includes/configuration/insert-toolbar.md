## insert_toolbar

This enables you to specify toolbar items to include in the [inlite]({{ site.baseurl }}/themes/inlite) themes insert toolbar. We recommend that you only have insert related controls in this toolbar but nothing is restricting you to use any of the available [toolbar controls]({{ site.baseurl }}/advanced/editor-control-identifiers/#toolbarcontrols).

**Type:** `String`

**Defaults:** `quickimage quicktable`

##### Example

```js
tinymce.init({
  selector: 'div.tinymce',
  theme: 'inlite',
  inline: true,
  insert_toolbar: 'quickimage quicktable'
});
```
