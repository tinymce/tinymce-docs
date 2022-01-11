---
layout: default
title: Custom Toggle menu items
title_nav: Custom Toggle menu items
description: How to create custom Toggle menu items.
keywords: menu menuitem menuitems
---

A toggle menu item triggers its `onAction` when clicked. It also has a concept of state. This means it can be toggled `on` and `off`. A toggle menu item gives the user visual feedback for its state through a checkmark that appears to the right of the menu item's text when it is `on`.

## Config options

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| text | string | optional | Text to display. |
| icon | string | optional | {% include /misc/admon_predefined_icons_only.md %} |
| value | string | optional | A value to associate with the menu item. |
| active | boolean | optional | Initial state value for the toggle menu item |
| disabled | boolean | optional | default: false - Represents the menu item's state. When true, the menu item is unclickable. Toggled by the menu item's API. |
| onSetup | `(api) => (api) => void` | optional | default: `() => () => {}` - Function invoked when the menu item is rendered, each time its menu is opened. For details, see: [Using `onSetup`](#usingonsetup). |
| onAction | `(api) => void` | required | Function invoked when the menu item is clicked. |

## API

| Name | Value | Description |
| ---- | ----- | ----------- |
| isActive | `() => boolean` | Checks if the menu item is active. |
| setActive | `(state: boolean) => void` | Sets the menu item's active state. |
| isDisabled | `() => boolean` | Checks if the menu item is disabled. |
| setDisabled | `(state: boolean) => void` | Sets the menu item's disabled state. |

## Example: Creating a toggle menu item

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

{% include misc/onSetup.md %}
