---
layout: default
title: Custom Nested menu items
title_nav: Custom Nested menu items
description: How to create custom Nested menu items.
keywords: menu menuitem menuitems
---

A nested menu item is a menu item with a submenu. Registering a submenu this way allows it to be reused in menubar menus and toolbar button menus without having to define the submenu twice. The submenu can contain any combination of basic menu items and toggle menu items.

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| text | string | optional | Text to display if no icon is found. |
| icon | string | optional | {{site.predefinedIconsOnly}} |
| value | string | optional | A value to associate with the menu item. |
| onSetup | `(api) => (api) => void` | optional | default: `() => () => {}` - Function invoked when the menu item is rendered, each time its menu is opened. For details, see: [Using `onSetup`](#usingonsetup). |
| getSubmenuItems | `() => string` or `MenuItem[]` | required | Function invoked when the menu item is clicked to open its submenu. Must return either a space separated string of registered menu names or an array of basic, toggle or nested menu items specifications. |
| shortcut | string | optional | Text to display in the shortcut label. To register a shortcut, see: [Add custom shortcuts to TinyMCE]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/shortcuts/). |

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

{% include misc/onSetup.md %}
