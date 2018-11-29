## quickbar_selection_toolbar

This option enables you to specify toolbar items to include on the Quick Selection toolbar or to disable the toolbar. 

We recommend that you only have formatting related controls in this toolbar. However, you are able to use any of the available [toolbar controls]({{ site.baseurl }}/advanced/editor-control-identifiers/#toolbarcontrols).

**Type:** `String`

**Defaults:** `bold italic | quicklink h2 h3 blockquote`

##### Example customizing the Quick Selection toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickbar',
  quickbar: true,
  quickbar_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote'
});
```

##### Example disabling the Quick Selection toolbar

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quickbar',
  quickbar: true,
  quickbar_selection_toolbar: false
});
```