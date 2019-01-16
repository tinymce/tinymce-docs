---
layout: default
title: Context toolbar
title_nav: Context toolbar
description: Context toolbar overview
keywords: contexttoolbar context toolbar contexttoolbarapi
---

A ContextToolbar can only contain either buttons that are defined for a normal toolbar, or buttons specifically registered for launching a [ContextForm]({{site.baseurl}}/ui-components/contextform/). The buttons comes as a list of strings, where each string is a registered name of a button.

### Registering a Context Toolbar

A ContextToolbar is registered by calling the `addContextToolbar` API in the registry. The specification is as follows:

| Name | Description |
| ---- | ----------- |
| `predicate` | This controls when the context toolbar will appear |
| `position` | This controls where the context toolbar will appear with regards to the current cursor |
| `scope` | This controls whether the predicate is a `node`-based predicate, or an `editor`-based predicate. See Context Toolbar Proirity below, for more details. |
| `items` | A list of strings which represent either a registered toolbar button, or a registered context form launcher. |

### Launching a ContextToolbar Programmatically

There is an `editor` event called `contexttoolbar-show` that can be fired to show a ContextToolbar at the current selection. The event takes a parameter `toolbarKey` which specifies the name of the registered ContextForm or ContextToolbar to show.

### Context Toolbar Priority

{% include context/priority.md %}

### Positioning ContextToolbars

There are three options for positioning are: `selection`, `line`, or `node`.

* A `selection` position will place the ContextToolbars above or below the current selection, centred if possible.

* A `line` position will place the ContextToolbars to the right (or left in Right-to-Left languages) of the current selection.

* A `node` position will place the ContextToolbars relative to the bounds of a node (e.g. a table or image). It applies to a selected node that does not match the selection due to CSS properties (like float).



### Example Configuration

This example shows how the quickbars plugin dynamically adds the standard selection context toolbar and an example of a custom toolbar for image alignment. The context toolbar will show whenever any content is selected.

{% include codepen.html id="context-toolbar" height="600" tab="js" %}

