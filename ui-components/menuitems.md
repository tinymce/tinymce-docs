---
layout: default
title: Custom menu items
title_nav: Custom menu items
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

> **Note**: The identifier used to create the menu item must be included in the [`menu`]({{site.baseurl}}/configure/editor-appearance/#menu) option in the {{site.productname}} configuration for it to be added to the menubar's menus. It will not be added to the menubar's menus if `menu` is not configured correctly.

## Interactive example

This example shows you how to add some simple menu items to a new "custom" menu.

{% include live-demo.html id="custom-menu-item" %}

## Types of menu items

There are three types of menu items in {{site.productname}} {{site.productmajorversion}}:

* Basic menu items
* Nested menu items
* Toggle menu items

### Basic menu items

A basic menu item triggers its `onAction` function when clicked.

#### Config options

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| text | string | optional | Text to display if no icon is found. |
| icon | string | optional | {{site.predefinedIconsOnly}} |
| value | string | optional | A value to associate with the menu item. |
| disabled | boolean | optional | default: false - Represents the menu item's state. When true, the menu item is unclickable. Toggled by the menu item's API. |
| onSetup | `(api) => (api) => void` | optional | default: `() => () => {}` - Function invoked when the menu item is rendered, each time its menu is opened. |
| onAction | `(api) => void` | required | Function invoked when the menu item is clicked. |
| shortcut | string | optional | Text to display in the shortcut label. To register a shortcut, see: [Add custom shortcuts to TinyMCE]({{site.baseurl}}/advanced/keyboard-shortcuts/#addcustomshortcutstotinymce). |

#### API

| Name | Value | Description |
| ---- | ----- | ----------- |
| isDisabled | `() => boolean` | Checks if the menu item is disabled. |
| setDisabled | `(state: boolean) => void` | Sets the menu item's disabled state. |

#### Example: Creating a basic menu item

```js
tinymce.init({
  selector: 'textarea',
  menu: {
    custom: { title: 'Custom Menu', items: 'undo redo basicitem' }
  },
  menubar: 'file edit custom',

  setup: function(editor) {
    editor.ui.registry.addMenuItem('basicitem', {
      text: 'My basic menu item',
      onAction: function() {
        alert('Menu item clicked');
      }
    });
  }

});
```

### Nested menu items

A nested menu item is a menu item with a submenu. Registering a submenu this way allows it to be reused in menubar menus and toolbar button menus without having to define the submenu twice. The submenu can contain any combination of basic menu items and toggle menu items.

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| text | string | optional | Text to display if no icon is found. |
| icon | string | optional | {{site.predefinedIconsOnly}} |
| value | string | optional | A value to associate with the menu item. |
| onSetup | `(api) => (api) => void` | optional | default: `() => () => {}` - Function invoked when the menu item is rendered, each time its menu is opened. |
| getSubmenuItems | `() => string` or `MenuItem[]` | required | Function invoked when the menu item is clicked to open its submenu. Must return either a space separated string of registered menu names or an array of basic, toggle or nested menu items specifications. |
| shortcut | string | optional | Text to display in the shortcut label. To register a shortcut, see: [Add custom shortcuts to TinyMCE]({{site.baseurl}}/advanced/keyboard-shortcuts/#addcustomshortcutstotinymce). |

#### API

| Name | Value | Description |
| ---- | ----- | ----------- |
| isDisabled | `() => boolean` | Checks if the menu item is disabled. |
| setDisabled | `(state: boolean) => void` | Sets the menu item's disabled state. |

#### Example: Creating a nested menu item

```js
tinymce.init({
  selector: 'textarea',
  menu: {
    custom: { title: 'Custom Menu', items: 'undo redo nesteditem' }
  },
  menubar: 'file edit custom',

  setup: function(editor) {
    editor.ui.registry.addNestedMenuItem('nesteditem', {
    text: 'My nested menu item',
    getSubmenuItems: function() {
    return [{
      type: 'menuitem',
      text: 'My submenu item',
      onAction: function() {
        alert('Submenu item clicked');
      }
    }];
    }
  });
  }

});
```

### Toggle menu items

A toggle menu item triggers its `onAction` when clicked. It also has a concept of state. This means it can be toggled `on` and `off`. A toggle menu item gives the user visual feedback for its state through a checkmark that appears to the right of the menu item's text when it is `on`.

#### Config options

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| text | string | optional | Text to display. |
| icon | string | optional | {{site.predefinedIconsOnly}} |
| value | string | optional | A value to associate with the menu item. |
| active | boolean | optional | Initial state value for the toggle menu item |
| disabled | boolean | optional | default: false - Represents the menu item's state. When true, the menu item is unclickable. Toggled by the menu item's API. |
| onSetup | `(api) => (api) => void` | optional | default: `() => () => {}` - Function invoked when the menu item is rendered, each time its menu is opened. |
| onAction | `(api) => void` | required | Function invoked when the menu item is clicked. |

> **Note**: The `icon` option for Toggle menu items was added in {{site.productname}} 5.3.

#### API

| Name | Value | Description |
| ---- | ----- | ----------- |
| isActive | `() => boolean` | Checks if the menu item is active. |
| setActive | `(state: boolean) => void` | Sets the menu item's active state. |
| isDisabled | `() => boolean` | Checks if the menu item is disabled. |
| setDisabled | `(state: boolean) => void` | Sets the menu item's disabled state. |

#### Example: Creating a toggle menu item

```js
// Menu items are recreated when the menu is closed and opened, so we need
// a variable to store the toggle menu item state.
var toggleState = false;

tinymce.init({
  selector: 'textarea',
  menu: {
    custom: { title: 'Custom Menu', items: 'undo redo toggleitem' }
  },
  menubar: 'file edit custom',

  setup: function(editor) {
    editor.ui.registry.addToggleMenuItem('toggleitem', {
      text: 'My toggle menu item',
      icon: 'home',
      onAction: function() {
        toggleState = !toggleState;
        alert('Toggle menu item clicked');
      },
      onSetup: function(api) {
        api.setActive(toggleState);
        return function() {};
      }
    });
  }

});
```
