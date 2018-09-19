---
layout: draft
title: Components
title_nav: Components
description: Context Toolbar Components
keywords: contexttoolbar context toolbar contexttoolbarapi
---


## Context toolbar items

These items currently appear at the end of the toolbar. Specific configuration is not available as they may move to a different part of the UI in a future release. They can however be disabled:

```js
var customToolbar = {
    contextual: [ ]
};

var config = {
    ui : { toolbar : customToolbar }
};

var editor = textboxio.replace('#targetId', config);
```

## Properties

| Item | Properties | Default | Description |
| ---- | ---------- | ------- | ----------- |
| items	| Array	| (Default Toolbar) | An array representing the structure of the Textbox.io toolbar and menu system. Each item represents a toolbar group. |
| contextual | Array | [ 'table-tools','image-tools' ] | An array listing the items that can appear depending on the selection context |
| visible (demo) | Boolean | true |	Inline editing only. Whether the toolbar should be visible in the UI at all. |
| draggable (demo) | Boolean | true | Inline editing only. Whether the editor should be draggable from its offset position. |
| offset ↳ top ↳ left (demo) | Position | top: 0, left: 0 | Inline editing only. The offset coordinates of the toolbar from the top-left vertex of the container being edited. |
| sticky | Boolean the same value as ui.autoresize | Iframe editing only. Whether the toolbar should stick to the top of the window as it scrolls, similar to Inline editing behaviour. > Note: This option was introduced in Textbox.io release 2.4.1 |

## Items

Toolbars are made up of item objects. Items represent either editor commands (apply bold), toolbar groups, or menus.

Items infer their UI from their position in an the items array. An item placed inside a menu will be rendered as a menu item, while an item placed inside a toolbar group will be rendered as a button. Similarly, a menu item placed within a menu will result in a sub-menu.

### Item Type

Items have 3 distinct types, representing ui constructs in a Textbox.io editor. command items represent discrete editor functionality. menu items represent a nested group of commands invoked from a root UI element.   group items represent logical groupings of commands either inside the toolbar or within menus.

#### Command

Command type items represent discrete editor commands, such as: apply bold, insert link, etc.

> Note: Built-in command items are referenced by their string id rather than specified as objects.

| Properties | Value | Description |
| ---------- | ----- | ----------- |
| id | String | Id string for the command. |
| text | String | (Optional) Friendly name of the command, shown in tooltips. |
| icon | String | Path to the icon used to represent the command. |
| action | Function | A function to be executed when the command is invoked via user action. |

#### Menu

Menu type items represent groupings of commands in a menu. When rendered, menus appear on the host toolbar as an icon, or on a host menu via an icon followed by the menu's name.

For users of assistive devices, the name of the menu is applied to menu's aria-label per WAI-ARIA.

| Properties | Value | Description |
| ---------- | ----- | ----------- |
| id | String | Id string for the menu. |
| label | String | (Optional) Friendly name of the menu, visible to assistive devices per WAI-ARIA. |
| icon | String | Path to the icon used to represent the command. |
| action | Array | Array of command or menu items. |

#### Options

Group type items represent logical groupings of commands on a toolbar or within a menu. When an editor is rendered groups are designated by visual separators.

For users of assistive devices, the name of the group is applied to group's aria-label per WAI-ARIA.

| Properties | Value | Description |
| ---------- | ----- | ----------- |
| label | String | (Optional) Friendly name of the menu, visible to assistive devices per WAI-ARIA. |
| items | Array | An array of command or menu items. |


> **Built-In Command Item IDs**

  Built-in editor commands are represented by a predefined string id in toolbar configurations. For a list of built-in editor command ids see: Command Item IDs.


### Items Array Structure

The toolbar items array is the primary way to configure toolbars, menus and buttons for a Textbox.io editor instance. The items array can be set to one or more toolbar group objects. These group objects can themselves be populated with further items to create toolbar buttons and menus in a rendered editor.

```
Toolbar Items Array Structure
Toolbar Items
    ↳ Toolbar Group(s)
        ↳ Command Item(s)
        ↳ Menu Item(s)
            ↳ Command Item(s)
            ↳ Menu Items(s)
```

####  Group Items

Group items are objects that consist of a string name and an items array.

The items array may contain Command Item IDs or command item objects.

#### Group Item Example

```js
var items = [
    // Simple Toolbar group object with 2 function IDs
    {
        label  : 'Toolbar Group 1',
        items : ['undo', 'redo']
    }
];
```

#### Command Items

Command items are objects that consist of a string id, a string name, a string path to an icon resource, and an action function.

When command items are placed in a toolbar group, their functionality will be represented on an editor toolbar with a button. The button will will contain the specified icon image.

When command items are placed within a menu item object, their functionality will be represented with a menu item. The menu item will contain the specified icon image and the name string.

When a user clicks on the button (toolbar) or menu item (menu), the function specified in action will execute.

#### Command Item Example
```js
// Command Item Object
var customItem = {
    id     : 'custom1',
    text   : 'Custom Button 1',
    icon   : '/path/to/icon1.png',
    action : function () { alert('Custom Button 1 Clicked'); }
};

var items = [
    {
        //  Toolbar group object with custom command
        label  : 'Toolbar Group 2',
        items : ['undo', 'redo', customItem]
    }
];
```

#### Menu Items

Toolbar menu items are objects that consist of a string id, a string name, a string path to an icon resource, and an items array.

The items array may contain Command Item IDs or command item objects.

#### Menu Item Example

```js
// Menu Item Object with 2 function IDs
var customMenuItem = {
    id     : 'custom1',
    label  : 'Custom Menu',
    icon   : '/path/to/icon1.png',
    items  : ['bold', 'italics'] }
};

// Items array with one group object containing 2 function IDs and a custom menu item object
var items = [
    {   //  Toolbar group object with custom menu item
        label  : 'Toolbar Group 2',
        items : ['undo', 'redo', customMenuItem]
    }
];
```

> Important: Nested menus are only supported to the second level.