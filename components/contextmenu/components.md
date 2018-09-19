---
layout: draft
title: Components
title_nav: Components
description: Context Menu Components
keywords: contextmenu context menu contextmenuapi
---


## Structure

The basic structure will be a method similar to but far simpler than Textbox.io:

```js
editor.ui.registry.addContextMenu(name: string, feature: Feature);

type Feature = {
  update: (element: DomElement) => Array<ContextMenuContents>
}
```

The idea is that we combine the situation and assign concepts, and do away with the need for a handle concept instead moving that into each menu item.

The strong recommendation is that the name match the plugin name for ease of configuration. There doesn't seem to be a way to enforce this, short of passing a plugin-specific editor object into each plugin.
Update
The return value array for this API describes the entire menu section.

```js
type ContextMenuContents = string | ContextMenuItem | SeparatorMenuItemApi | ContextSubMenu

type ContextMenuItem = {
  text: string;
  icon?: string;
  onAction: () => void;
}
type ContextSubMenu = {
  text: string;
  icon?: string;
  getSubmenuItems: () => Array<MenuItem>;
}

// copied from standard menus
type SeparatorMenuItemApi = {
  type: 'separator'
}
```

Where the type is string, it is a reference to an existing registered menu item.

The types overlap in order to support untyped API usage with the type property:

type 'item' (default) is a regular menu item, and must have an onAction method
type 'submenu' must have items, and if it has an onAction property it is ignored
type 'separator' ignores all other fields