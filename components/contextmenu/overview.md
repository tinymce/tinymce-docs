---
layout: draft
title: Overview
title_nav: Overview
description: Context Menu Overview
keywords: contextmenu context menu contextmenuapi
---

## Introduction

The context menu used in Textbox.io is focused on modularity above all else. Individual features within the editor are registered as context menu providers, they have no knowledge of each other. When the user opens the context menu each feature is asked in turn for items to show. If no items are returned that section is not shown; sections that show are divided by menu separator lines.

At a high level, this is what we want to use for TinyMCE 5. Plugins can register themselves as context menu providers and follow a similar logic flow. However there are three significant limitations with the Textbox.io architecture that we will look to address:
Menu item event handling is done at the feature level. Logically it makes more sense for menu items to respond to their own events, otherwise the feature must keep a copy of the item record list to look up the action (this is what happens in Textbox.io).
Menus are fixed once the context menu has shown. There is no capacity for dynamic menus, as was shown in the product week spelling demo (this is not solved by the specification detailed here).
Only one submenu is supported. There is no architecture for nested submenus. Arguably a context menu should not have nested submenus, but this decision impacted the API.

This document will detail the architecture used in Textbox.io today and propose an API (with rough architecture ideas) for TinyMCE 5.
Configuration and compatibility with contextmenu plugin
This is a bit out of scope for how plugins define context menus, but is worth noting in the wider context of configuring a context menu. The existing plugin supports adding any menu item to the context menu, using the same string reference as on a menu.

At a high level, we can use the plugin name to indicate that a specific plugin context menu "group" of items should be inserted. There are two options here, and both seem equally bad:

Deprecate the old style, and switch to something more like TBIO with nested arrays to delineate groups of existing menu items and specific plugin groups which are just strings:
[ [ 'bold', 'italic' ], 'link', [ 'table', 'image' ], 'spelling' ]
This is a fairly nice API, but means existing context menu configs would need a big change
Allow mixing and matching of menu item names and plugin names in the existing flat list style
'bold italic | link | table image | spelling'
This will be easier to migrate to, but is confusing:
to configure
what if a plugin name conflicts with a menu item
May result in confusing code that attempts to figure out which item is which style

### TBIO context menus

The context menu is registered as a list of sections, using the following code:

  engine.contextmenu().register('table', table);
  engine.contextmenu().register('imageEdit', imageEdit);
  engine.contextmenu().register('image', image);
  engine.contextmenu().register('spelling', spelling);
  engine.contextmenu().register('link', link);

This order is fixed inside the code, but it would be quite easy to adjust based on an array of string names in an API. Textbox.io has no cut/copy/paste context menu items; if such items are required a named object for the default set could be created.

The object used for registration is as follows:

```js
type Feature = {
  assign: (marker: Option<Element>) => void
  situation: (e: Element) => Situation
  handle: (item: Element) => void
}
```

### Assign

This method is given an optional "marker", which as implemented now is just Option.some(element). This is effectively pointless, it's the same element passed into situation().
Situation
The evolution of the code means that in all menus except spelling the element parameter is ignored and the variable passed through assign is used. This seems unnecessary, and could be normalised to use the parameter.

Given an element, this method returns the menu to show. Each property value is a thunk, those are removed here for ease of reading (and because we aren't likely to use thunks in a potential TinyMCE 5 API).

```js
type Situation = {
  primary: Array<Primary>
  secondary: Array<Secondary>
  submenus: {}
}
```

If a context menu does not have any items to show for the given element, an empty primary array is returned. If primary is empty secondary and submenus are ignored.

Submenus are an object mapping the value of a primary to the value of a secondary. When one of them matches, the primary is given a "more" indicator glyph and hovering over the item shows the secondary menu.

```js
type Primary = {
  value: string
  text: string
  attrs: Array<{name: string, value: string}>
}

type Secondary = {
  value: string
  textkey: string
  items: Array<Primary>
}
```

### Handle

This method is passed the menu element the user clicked on. In practice, this means that most handle methods begin with the following code:

`var command = Attr.get(item, 'data-ephox-gopher-item-value');`

Which leverages an implementation detail of the gopher menu library to obtain the relevant value string returned from situation(). The only exception to this is the spelling menu which leverages the attrs object to add custom properties to the menu item which are used in handle() to direct logic flow.

### Summary in hindsight

The assign method is confusing. Was it an attempt to assign elements as the cursor moves around and then situation could perhaps be faster as the menu was built? Whatever the reason was, in the code today the context menu calls assign followed immediately by situation. Assign can and should be removed from future APIs.

The overall Textbox.io design centres around the situation() method. While it perhaps had some initial goals of reusability, is unnecessarily convoluted. In reality nothing is reused and thus it would be far easier to return a single object structure describing the entire menu segment rather than parallel arrays and string links using the submenu object.




