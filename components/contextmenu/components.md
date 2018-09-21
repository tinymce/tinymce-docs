---
layout: draft
title: Components
title_nav: Components
description: Context Menu Components
keywords: contextmenu context menu contextmenuapi
---


## Registering context menus

The structure of context menu sections is a very simple query system indexed by name. The strong recommendation is that the name of the menu section used matches the plugin name for ease of configuration.

In the menu shown to the user, sections are delineated by separators. Sections can return an empty array of menu items to indicate that section has no applicable items to the current context and should not be shown.

```typescript
type ContextMenuApi = {
  update: (element: Element) => Array<ContextMenuContents>
}

editor.ui.registry.addContextMenu(name: string, feature: ContextMenuApi);
```

Every time the user opens the context menu, the selected element is passed to the update function which must return an array of items to display.

```typescript
type ContextMenuContents = string | ContextMenuItem | SeparatorMenuItemApi | ContextSubMenu

type ContextMenuItem = {
  type?: 'item';
  text: string;
  icon?: string;
  onAction: () => void;
}
type ContextSubMenu = {
  type: 'submenu';
  text: string;
  icon?: string;
  getSubmenuItems: () => Array<ContextMenuContents>;
}

type SeparatorMenuItemApi = {
  type: 'separator'
}
```

The most common use case is `string`, which references an existing registered menu item. The item and submenu structures are intended for use by plugins with completely dynamic menu requirements, where registering each menu item would be onerous and wasteful. For example the spellchecker which shows a list of suggestions specific to the selected word.

When creating a dynamic menu, the structure `type` properties are used in order to support untyped API usage:

* type `item` (default) is a regular menu item, and must have an `onAction` method
* type `submenu` must have `getSubmenuItems`, and if it has an `onAction` property it is ignored
* type `separator` ignores all other properties