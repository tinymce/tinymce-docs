---
layout: default
title: User Interface
---

These settings affect the user interface. Settings that control toolbars, menus, buttons and more are available here.

## elementpath

This option allows you to disable the element path within the status bar at the bottom of the editor.

An example of this setting is as follows:

```js
tinymce.init({
    elementpath: false
});
```

## max_height

This option allows you to set the maximum height that TinyMCE can stretch to when using the modern theme.

An example of this setting is as follows:

```js
tinymce.init({
    max_height: 500
});
```

## max_width

This option allows you to set the maximum width that TinyMCE can stretch to when using the modern theme.

An example of this setting is as follows:

```js
tinymce.init({
    max_width: 500
});
```

## min_height

This option allows you to set the minimum height that TinyMCE can stretch to when using the modern theme.

An example of this setting is as follows:

```js
tinymce.init({
    min_height: 100
});
```

## min_width

This option allows you to set the minimum width that TinyMCE can stretch to when using the modern theme.

An example of this setting is as follows:

```js
tinymce.init({
    min_width: 400
});
```

## toolbar

This option allows you to specify the buttons and the order that they will appear on TinyMCE's toolbar.

To specify the controls that should appear on TinyMCE's toolbar, the toolbar option should be provided with a space separated list of toolbar controls. To create groups within this list, please add "|" pipe characters between the groups of controls that you would like to create.

You can find a [complete list of toolbar controls here](http://www.tinymce.com/wiki.php/Controls).

An example of such a grouped toolbar is as follows:

```js
tinymce.init({
    ...
    toolbar: "undo redo | styleselect | bold italic | link image",
    ...
});
```

To disable the toolbar, the toolbar option should be provided a boolean value of false.

An example of a disabled toolbar is as follows:

```js
tinymce.init({
    ...
    toolbar: false,
    ...
});
```

To specify multiple toolbars, the toolbar option should be provided with an array of space separated strings.

An example of multiple toolbars is as follows:

```js
tinymce.init({
    ...
    toolbar: [
        "undo redo | styleselect | bold italic | link image",
        "alignleft aligncenter alignright"
    ]
    ...
});
```

Alternatively, you may specify multiple toolbars through the use of the [toolbar&lt;N&gt;](#toolbar<N>) option.

## toolbar&lt;N&gt;

This option allows you to specify the buttons and the order that they will appear on multiple of TinyMCE's toolbars.

Please see the [toolbar](#toolbar) configuration option for details.

An example of this setting is as follows:

```js
tinymce.init({
    ...
    toolbar1: "undo redo | styleselect | bold italic | link image",
    toolbar2: "alignleft aligncenter alignright",
    ...
});
```

## menubar

This option allows you to specify which menus should appear and the order that they appear in the menu bar at the top of TinyMCE.

To specify the menus that should appear on TinyMCE's menu bar, the menubar option should be provided with a space separated list of menus.

An example of this setting is as follows:

```js
tinymce.init({
    ...
    menubar: "file edit insert view format table tools",
    ...
});
```

To disable the menu bar, the menubar option should be provided a boolean value of false.

An example of a disabled menubar is as follows:

```js
tinymce.init({
    ...
    menubar: false,
    ...
});
```

If you need more control over the contents of the menus, see the [menu parameter](#menu).

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

## statusbar

This option allows you to specify whether or not TinyMCE should display the statusbar at the bottom of the editor.

To disable the statusbar, the statusbar option should be provided with a boolean false value.

An example of this setting is as follows:

```js
tinymce.init({
    ...
    statusbar: false,
    ...
});
```

## resize

This option gives you the ability to disable the resize handle or set it to resize both horizontal and vertically. The option can be true, false or the string "both". False disables the resize, true enables vertical resizing only, "both" makes it possible to resize in both directions horizontal and vertical.

Example of disabling the resize

```js
tinymce.init({
    ...
    resize: false
});
```

Example of enabling both vertical and horizontal resize

```js
tinymce.init({
    ...
    resize: "both"
});
```

## width

Set the width of the editor.

```js
width : 300
```

## height

Set the height of the editor.

```js
height : 500
```

## preview_styles

The enables you to turn of the preview of styles in format/style listboxes. It's turned on by default.

Example of usage

```js
tinyMCE.init({
   mode: "textareas",
   preview_styles: false
});
```

## fixed_toolbar_container

Use this option to render the inline toolbar into a fixed positioned HTML element for example a top positioned toolbar. This option takes a CSS 3 selector for example "#mytoolbar" and renders any inline toolbars into this element.

Example

```js
tinymce.init({
    inline: true,
    fixed_toolbar_container: "#mytoolbar"
});
```

## event_root

Use this option enables you to specify a CSS selector for an element to be used as the event root in inline mode by default all events gets bound to the editable area but in some implementations where the DOM gets modified you want to bind these events to a container then delegate the events down to the right editor based on the element ID.

Example

```js
tinymce.init({
    inline: true,
    event_root: "#root"
});
```

## removed_menuitems

This option allows you to remove items from TinyMCE's drop down menus.

An example of this setting is as follows:

```js
tinymce.init({
    removed_menuitems: "undo,redo"
});
```
