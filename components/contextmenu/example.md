---
layout: draft
title: Example
title_nav: Example
description: Context Menu Example
keywords: contextmenu context menu contextmenuapi
---

## Example usage

This example creates a menu with a mixture of dynamic and static menu items. While `link` is the name of both a context menu section and a menu item, context menu sections take preference (the link context menu is dynamic based on the cursor position).

The other item names are all menu items and will appear on the context menu regardless of cursor position. A separator is used to distinguish the table edit features from the table insert feature. As `link` is a context menu section, a separator will automatically be inserted after it so it is not necessary to specify one in the configuration.

```js
tinymce.init({
  selector: "textarea",
  contextmenu: "link bold italic inserttable | cell row column deletetable"
});
```

## Defining a context menu section

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

To configure the editor with this context menu section:
```js
tinymce.init({
  selector: "textarea",
  contextmenu: "image"
});
```