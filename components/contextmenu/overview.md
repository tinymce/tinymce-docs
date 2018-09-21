---
layout: draft
title: Overview
title_nav: Overview
description: Context Menu Overview
keywords: contextmenu context menu contextmenuapi
---

## Introduction

The context menu is a configurable component that appears when the user right clicks in the editable area. By default it does not disable the operating system's native context menu, if there are no items to display at the cursor position the native context menu will be shown.

## Options

### `contextmenu`

This option allows you to specify which items appear on the context menu. The option is a space separated list of items in a string.

The context menu setting accepts three styles of item:
* Any registered menu item
* A `|` pipe character to indicate a separator should be added to delineate a group of menu items
* Context menu sections defined by a plugin (usually equal to the plugin name). Separators are automatically inserted between context menu sections.

If a name is registered as both a context menu section and a menu item, the section takes preference.

The default configuration includes all plugins that provide a context menu; `link`, `image`, `imagetools`, `table`, and `spellchecker`.

**Type:** `String`

#### Default Configuration Example

```js
tinymce.init({
  selector: "textarea",
  contextmenu: "link image imagetools table spellchecker"
});
```

### `contextmenu_never_use_native`

This option allows you to disable the browser's native context menu from appearing within the editor.

We advise you give some thought about whether you really want to do this. Many users expect certain behavior when right clicking in text areas and changes may be unwelcome.

Type: `Boolean`

Default Value: `false`

#### Example

```js
tinymce.init({
  selector: "textarea",
  contextmenu_never_use_native: true
});
```

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