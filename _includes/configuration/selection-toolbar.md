## quickbars_selection_toolbar

This option enables specifying toolbar items to include on the Quick Selection toolbar or to disable the toolbar. 

It is recommended that only formatting related controls are specified in this toolbar. However, any of the available [toolbar controls]({{ site.baseurl }}/advanced/editor-control-identifiers/#toolbarcontrols) can also be used.

**Type:** `String`

**Defaults:** `bold italic | quicklink h2 h3 blockquote`

##### Example customizing the Quick Selection toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickbars',
  quickbars: true,
  quickbars_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote'
});
```

##### Example disabling the Quick Selection toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickbars',
  quickbars: true,
  quickbars_selection_toolbar: false
});
```
