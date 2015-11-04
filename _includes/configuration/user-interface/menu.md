## menu

This option allows you to specify which menus should appear on TinyMCE's menu bar and the items that should appear within the menus themselves.

To specify the menus that should appear on TinyMCE's menu bar, the menu option should be provided with a javascript object containing a property for each menu. These properties should contain a javascript object themselves with properties "title" and "items". The title property should contain a string with the name of the menu. The items field should contain a space seperated list of the controls that should populate the menu. If you would like to group these menu items, please insert a "|" pipe character between the menu items.

Check the [controls list](http://www.tinymce.com/wiki.php/Controls) for all available items that may be placed inside a menu.

An example of this setting is as follows:

```js
tinymce.init({
    ...
    menu: {
        file: {title: 'File', items: 'newdocument'},
        edit: {title: 'Edit', items: 'undo redo | cut copy paste pastetext | selectall'},
        insert: {title: 'Insert', items: 'link media | template hr'},
        view: {title: 'View', items: 'visualaid'},
        format: {title: 'Format', items: 'bold italic underline strikethrough superscript subscript | formats | removeformat'},
        table: {title: 'Table', items: 'inserttable tableprops deletetable | cell row column'},
        tools: {title: 'Tools', items: 'spellchecker code'}
    }
    ...
});
```

If all you need is to control which menus are available and/or in what order, see the [menubar parameter](#menu_bar).
