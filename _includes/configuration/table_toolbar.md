## table_toolbar

This option allows you to specify the buttons and the order that they will appear on TinyMCE's inline contextual toolbar for tables.

### Grouping table toolbar controls

To specify the controls that should appear on TinyMCE's table toolbar, the `table_toolbar` option should be provided with a space separated list of toolbar controls. To create groups within this list, please add `|` pipe characters between the groups of controls that you would like to create.

**Type:** `String`

##### Example grouped table toolbar

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  table_toolbar: "tableprops tabledelete | tableinsertrowbefore tableinsertrowafter tabledeleterow | tableinsertcolbefore tableinsertcolafter tabledeletecol"
});
```