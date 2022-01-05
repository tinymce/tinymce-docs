---
layout: default
title: Creating custom menu items
title_nav: Creating custom menu items
description: This section demonstrates different types of menu items.
keywords: menu menuitem menuitems
---

## Use Cases

* Create a shortcut for an action or a series of actions that the user repeatedly does.
* Create a button for custom behavior.

## How to create custom menu items

The methods for adding custom menu items are in the UI Registry part of the editor API editor.ui.registry. The API has three methods for adding menu items:

* `editor.ui.registry.addMenuItem`(identifier, configuration)
* `editor.ui.registry.addNestedMenuItem`(identifier, configuration)
* `editor.ui.registry.addToggleMenuItem`(identifier, configuration)

The two arguments these methods take are:

* `identifier` - a unique name for the button
* `configuration` - an object containing your configuration for that button.

Define the custom toolbar button with the `setup` callback of the {{site.productname}} configuration to add it to the editor. This callback is invoked automatically for every initialized editor instance. Access to the UI registry API occurs when the callback receives a reference to the editor instance as its argument.

### Example of adding a custom menu item

```js
tinymce.init({
  selector: '#editor',
  menu: {
    custom: { title: 'Custom Menu', items: 'undo redo myCustomMenuItem' }
  },
  menubar: 'file edit custom',
  setup: function(editor) {
    editor.ui.registry.addMenuItem('myCustomMenuItem', {
      text: 'My Custom Menu Item',
      onAction: function() {
        alert('Menu item clicked');
      }
    });
  }
});
```

> **Note**: The identifier used to create the menu item must be included in the [`menu`]({{site.baseurl}}/interface/menus/menus-configuration-options/#menu) option in the {{site.productname}} configuration for it to be added to the menubar's menus. It will not be added to the menubar's menus if `menu` is not configured correctly.

## Interactive example

This example shows you how to add some simple menu items to a new "custom" menu.

{% include live-demo.html id="custom-menu-item" %}
