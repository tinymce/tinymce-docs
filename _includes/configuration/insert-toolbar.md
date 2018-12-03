## quickbars_insert_toolbar

The **quickbars_insert_toolbar** option enables specifying toolbar items to include on the Quick Insert toolbar enabled by the [quickbars]({{ site.baseurl }}/plugins/quickbar) plugin. It is recommended to only have controls in this toolbar related to inserting content. However, nothing is restricting to use any of the available [toolbar controls]({{ site.baseurl }}/advanced/editor-control-identifiers/#toolbarcontrols).

**Type:** `String`

**Defaults:** `quickimage quicktable`

##### Example customizing the Quick Insert toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickbars',
  quickbars: true,
  quickbars_insert_toolbar: 'quickimage quicktable'
});
```


##### Example disabling the Quick Insert toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickbars',
  quickbars: true,
  quickbars_insert_toolbar: false
});
```
