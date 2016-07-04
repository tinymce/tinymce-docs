## menu

This option allows you to specify which menus should appear on TinyMCE's menu bar and the [items]({{ site.baseurl }}/advanced/editor-control-identifiers/#menucontrols) that should appear within the menus themselves.

To specify the menus that should appear on TinyMCE's menu bar, the menu option should be provided with a JavaScript object containing a property for each menu. These properties should contain a JavaScript object themselves with properties `title` and `items`.

The `title` property should contain a string with the name of the `menu`. The `items` field should contain a space separated list of the controls that should populate the `menu`.

If you would like to group these menu items, please insert a `|` pipe character between the menu items.

**Type:** `Object`

##### Example

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menu: {
    file: {title: 'File', items: 'newdocument'},
    edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
    insert: {title: 'Insert', items: 'link media | template hr'},
    view: {title: 'View', items: 'visualaid'},
    format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
    table: {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'},
    tools: {title: 'Tools', items: 'spellchecker code'}
  }
});
```

If all you need is to control which menus are available and/or in what order, see the [menubar parameter](#menubar).
