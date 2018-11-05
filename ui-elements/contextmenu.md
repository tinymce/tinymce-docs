---
layout: default
title: Context Menu
title_nav: Context Menu
description: Context Menu Overview
keywords: contextmenu context menu contextmenuapi
---

## Introduction

The context menu is a configurable component that appears when the user right clicks in the editable area. By default it does not disable the operating system's native context menu, if there are no items to display at the cursor position the native context menu will be shown.

The context menu supports both individual menu items and dynamic context menu sections.

## Options

### `contextmenu`

This option allows you to specify which items appear on the context menu. The option is a space separated list of items in a string.

The context menu option accepts three styles of item:
* Any registered menu item
* A `"|"` pipe character to indicate a separator should be added to delineate a group of menu items
* Context menu sections defined by a plugin (usually equal to the plugin name). Separators are automatically inserted between context menu sections.

If the same name is registered as both a context menu section and a menu item, the section takes preference.

The default configuration includes all plugins that provide a context menu; `link`, `image`, `imagetools`, `table`, and `spellchecker`.

**Type:** `String`

#### Default Configuration Example

```js
tinymce.init({
  selector: "textarea",
  contextmenu: "link image imagetools table spellchecker"
});
```

Further examples of the `contextmenu` option are available in the [context menu examples]({{site.baseurl}}/ui-elements/contextmenu/#exampleusage).

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

## Registering Context Menu Sections

The structure of context menu sections is a simple query system indexed by name. We strongly recommend using the name of the plugin as the context menu name for ease of configuration.

In the menu shown to the user, sections are delineated by separators. Sections can return an empty array of menu items to indicate that section has no applicable items to the current context and should not be shown.

```typescript
type ContextMenuApi = {
  update: (element: Element) => Array<ContextMenuContents>
}

editor.ui.registry.addContextMenu(name: string, feature: ContextMenuApi);
```

Every time the user opens the context menu, the selected element is passed to the update function which must return an array of items to display. The types of the items returned are as follows:

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

The most common type to use is `string`, which references an existing registered menu item.

`ContextMenuItem`, `ContextSubMenu` and `SeparatorMenuItemApi` types are intended for use by plugins with completely dynamic menu requirements, where registering each menu item would be onerous and wasteful. For example, the spellchecker shows a list of suggestions specific to the selected word.

When creating a dynamic menu, the structure `type` properties are used in order to support untyped API usage:

* type `item` (default) is a regular menu item, and must have an `onAction` method.
* type `submenu` must have `getSubmenuItems`, and if it has an `onAction` property it is ignored.
* type `separator` ignores all other properties.

<!--- ## Example Usage

This example creates a menu with a mixture of dynamic and static menu items. While `link` is the name of both a context menu section and a menu item, context menu sections take preference (the link context menu is dynamic based on the cursor position).

The other item names are all menu items and will appear on the context menu regardless of cursor position. A separator is used to distinguish the table edit features from the table insert feature. As `link` is a context menu section, a separator will automatically be inserted after it so it is not necessary to specify one in the configuration.

```js
tinymce.init({
  selector: "textarea",
  contextmenu: "link bold italic inserttable | cell row column deletetable"
});
``` 
--->

## Defining a Context Menu Section

This example shows how the image plugin dynamically adds the standard image menu section to the context menu. The image context menu section is empty unless the selected element is an image.

{% include codepen.html id="contextmenu-section" height="900" tab="js" %}

