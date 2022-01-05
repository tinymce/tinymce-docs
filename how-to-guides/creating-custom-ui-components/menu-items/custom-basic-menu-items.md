---
layout: default
title: Custom Basic menu items
title_nav: Custom Basic menu items
description: How to create custom basic menu items.
keywords: menu menuitem menuitems
---

A basic menu item triggers its `onAction` function when clicked.

#### Config options

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| text | string | optional | Text to display if no icon is found. |
| icon | string | optional | {{site.predefinedIconsOnly}} |
| value | string | optional | A value to associate with the menu item. |
| disabled | boolean | optional | default: false - Represents the menu item's state. When true, the menu item is unclickable. Toggled by the menu item's API. |
| onSetup | `(api) => (api) => void` | optional | default: `() => () => {}` - Function invoked when the menu item is rendered, each time its menu is opened. For details, see: [Using `onSetup`](#usingonsetup). |
| onAction | `(api) => void` | required | Function invoked when the menu item is clicked. |
| shortcut | string | optional | Text to display in the shortcut label. To register a shortcut, see: [Add custom shortcuts to TinyMCE]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/shortcuts/). |

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

{% include misc/onSetup.md %}
