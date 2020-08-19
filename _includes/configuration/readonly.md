## readonly

Setting the `readonly` option to `true` will initialize the editor in `"readonly"` mode instead of editing (`"design"`) mode. Once initialized, the editor can be set to editing (`"design"`) mode using the [`tinymce.editor.mode.set` API]({{site.baseurl}}/api/tinymce/tinymce.editormode/#set).

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  readonly: true
});
```

{% include live-demo.html id="readonly-demo" %}