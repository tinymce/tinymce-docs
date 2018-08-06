## insert_button_items

The **insert_button_items** enables you to specify what to display in the insert buttons menu. The value of this option should be a space-separated list of menu items [control identifiers]({{ site.baseurl }}/advanced/editor-control-identifiers/#menucontrols) or `|` for a menu separator.

**Type:** `String`

**Defaults:** Defaults to anything marked with the "insert" context

##### Example

```js
tinymce.init({
  ...
  toolbar: 'insert',
  insert_button_items: 'image link | inserttable'
});
```
