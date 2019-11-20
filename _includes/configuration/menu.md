## menu

This option allows you to specify which menus should appear on {{site.productname}}'s menu bar and the [items]({{ site.baseurl }}/advanced/editor-control-identifiers/#menucontrols) that should appear within the menus themselves.

To specify the menus that should appear on {{site.productname}}'s menu bar, the menu option should be provided with a JavaScript object containing a property for each menu. These properties should contain a JavaScript object themselves with properties `title` and `items`.

The `title` property should contain a string with the name of the `menu`. The `items` field should contain a space separated list of the controls that should populate the `menu`.

If you would like to group these menu items, please insert a `|` pipe character between the menu items.

**Type:** `Object`

##### Example: The TinyMCE Default Menu Items

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  menu: {
    file: { title: 'File', items: 'newdocument restoredraft | preview | print ' },
    edit: { title: 'Edit', items: 'undo redo | cut copy paste | selectall | searchreplace' },
    view: { title: 'View', items: 'code | visualaid visualchars visualblocks | spellchecker | preview fullscreen' },
    insert: { title: 'Insert', items: 'image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime' },
    format: { title: 'Format', items: 'bold italic underline strikethrough superscript subscript codeformat | formats blockformats fontformats fontsizes align | forecolor backcolor | removeformat' },
    tools: { title: 'Tools', items: 'spellchecker spellcheckerlanguage | code wordcount' },
    table: { title: 'Table', items: 'inserttable | cell row column | tableprops deletetable' },
    help: { title: 'Help', items: 'help' }
  }
});
```

If all you need is to control which menus are available and/or in what order, see the [menubar parameter](#menubar).
