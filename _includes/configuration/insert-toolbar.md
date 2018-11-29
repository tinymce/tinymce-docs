## insert_toolbar

The **insert_toolbar** option enables you to specify toolbar items to include in the [quickui]({{ site.baseurl }}/plugins/quickui) plugin Insert minibar. It is recommended that you only have controls in this toolbar related to inserting content. However, nothing is restricting you to use any of the available [toolbar controls]({{ site.baseurl }}/advanced/editor-control-identifiers/#toolbarcontrols).

**Type:** `String`

**Defaults:** `quickimage quicktable`

##### Example

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickui',
  inline: true,
  quickui_insert_toolbar: 'quickimage quicktable'
});
```
