---
layout: draft
title: Overview
title_nav: Overview
description: Context Toolbar Overview
keywords: contexttoolbar context toolbar contexttoolbarapi
---

### Context Toolbar

A ContextToolbar can only contain either buttons that are defined for a normal toolbar, or buttons specifically registered for launching a ContextForm. The buttons comes as a list of strings, where each string is a registered name of a button.

The button strings for launching a ContextForm will be of the form `form:${name}` where name is the registered name of the context form (e.g. form:link). Note, these will only be present if the 'launch` setting of the ContextForm is specified.



### Registering a Context Toolbar

A ContextToolbar is registered by calling the `addContextToolbar` API in the registry. The specification is as follows:

| Name | Description |
| ---- | ----------- |
| `predicate` | This controls when the context toolbar will appear |
| `position` | This controls where the context toolbar will appear with regards to the current cursor |
| `scope` | This controls whether the predicate is a `node`-based predicate, or an `editor`-based predicate. See Context Toolbar Proirity for more details. |
| `items` | A list of strings which represent either a registered toolbar button, or a registered context form launcher. |


## Context Forms

A ContextForm consists of an input field, and a series of related buttons. ContextForms are a generalisation of the `Insert Link` form that existed in the original `inlite` plugin from TinyMCE 4. Context forms can be shown wherever a context toolbar can be shown. Also, when a context form is registered containing a `launch` configuration, a special context toolbar button with name `form:${name}` is registered which will launch that particular context form.

### Launching ContextForms from a ContextToolbar

If a registered ContextForm has a `launch` setting, then it can be launched from a ContextToolbar. The name of item will be `form:${name}` (e.g. 'form:link'). When the user presses this button, the toolbar will change into the specified ContextForm. If you the user presses Esc in a ContextForm that was launched through a ContextToolbar, they will be returned to the original ContextToolbar.

## Launching a ContextForm or ContextToolbar programmatically

There is an `editor` event called `contexttoolbar-show` that can be fired to show a ContextForm or ContextToolbar at the current selection. The event takes a parameter `toolbarKey` which specifies the name of the registered ContextForm or ContextToolbar to show.

## Context Toolbar or ContextForm Priority

Two of the settings for a ContextToolbar or ContextForm determine its priority: `predicate` and `scope`. The priority system mirrors the old `inlite` plugin. The `predicate` is a function that takes in the current context position and returns a boolean. The `scope` is either `node` or `editor`. The whole priorty process works as follows:

1. The current cursor position is stored to use as the first current context position
2. For this current context position, each predicate with `scope: node` in the registered ContextToolbar and ContextForm is called. Currently, the order they are checked cannot be specified. The first predicate that passes will `win` and that ContextForm or ContextToolbar will be shown.
3. If no predicates (scope: node) match the current context position, then all of the `scope: editor` predicates are tried. The first one that matches the editor context wins.
4. If no `scope: editor` predicates match, then the new context position is calculated by going up the tree one level to the parent node. All `scope: node` predicates are then checked again. As soon as one matches, it *wins* and that ContextForm or ContextToolbar is shown. If nothing matches, it goes up the tree and tries again. Note, only `scope: node` predicates are checked at this stage. The `scope: editor` predicate is only checked once and that check only happens in (2).

Note, because the order that the ContextForms and ContextToolbars are checked is not specified, try not to have their predicates overlap.


## Positioning ContextToolbars and ContextForms

There are two options for how to position a ContextToolbar or ContextForm: `selection` or `line`.

A `selection` position will place the ContextToolbar or ContextForm above or below the current selection, centred if possible.

A `line` position will place the ContextToolbar or ContextForm to the right (or left in Right-to-Left languages) of the current selection.
