---
layout: draft
title: Example
title_nav: Example
description: Context Menu Example
keywords: contextmenu context menu contextmenuapi
---

### Example usage

The default context menu includes all plugins that provide a context menu; `link`, `image`, `imagetools`, `table`, and `spellchecker`.

```js
tinymce.init({
  selector: "textarea",
  contextmenu: "link image imagetools table spellchecker" // equal to the default
});
```

The context menu setting accepts two styles of values:
* Context menu sections defined by a plugin (usually equal to the plugin name)
* Any registered menu item

If a name is registered as both a context menu section and a menu item, the section takes preference. In the example below, rather than adding the `link` menu item, the `link` context menu section will be used (which is dynamic depending on whether the cursor is in a link).

```js
tinymce.init({
  selector: "textarea",
  contextmenu: "bold italic link inserttable | cell row column deletetable"
});
```

#### Defining a context menu

This example shows how the image plugin dynamically adds the standard image menu section to the context menu. The image context menu section is empty unless the selected element is an image.

```js
PluginManager.add('image', function (editor) {
  editor.ui.registry.addMenuItem('image', {
    icon: 'image',
    text: 'Image',
    onAction: Dialog(editor).open
  });

  editor.ui.registry.addContextMenu('image', {
    update: (element) => {
      return !element.src ? [] : ['image'];
    }
  });
});
```