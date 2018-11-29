## insert_toolbar

The **insert_toolbar** option enables you to specify toolbar items to include in the [quickbar]({{ site.baseurl }}/plugins/quickbar) plugin Insert minibar. It is recommended that you only have controls in this toolbar related to inserting content. However, nothing is restricting you to use any of the available [toolbar controls]({{ site.baseurl }}/advanced/editor-control-identifiers/#toolbarcontrols).

**Type:** `String`

**Defaults:** `quickimage quicktable`

##### Example customizing the Insert toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickbar',
  quickbar: true,
  quickbar_insert_toolbar: 'quickimage quicktable'
});
```


##### Example disabling the Insert toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickbar',
  quickbar: true,
  quickbar_insert_toolbar: false
});
```
