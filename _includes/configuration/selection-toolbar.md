## quick_selection_toolbar

This option enables you to specify toolbar items to include in the Selection minibar. We recommend that you only have formatting related controls in this toolbar but nothing is restricting you to use any of the available [toolbar controls]({{ site.baseurl }}/advanced/editor-control-identifiers/#toolbarcontrols).

**Type:** `String`

**Defaults:** `bold italic | quicklink h2 h3 blockquote`

##### Example

```js
tinymce.init({
  selector: 'div.tinymce',
  plugins: 'quick',
  quick_ui: true,
  quick_selection_toolbar: 'bold italic | quicklink h2 h3 blockquote'
});
```
