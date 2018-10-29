---
layout: default
title: Context Toolbar
title_nav: Context Toolbar
description: Context Toolbar Overview
keywords: contexttoolbar context toolbar contexttoolbarapi
---

## Context Toolbar

A ContextToolbar can only contain either buttons that are defined for a normal toolbar, or buttons specifically registered for launching a [ContextForm]({{site.baseurl}}../contextform/). The buttons comes as a list of strings, where each string is a registered name of a button.

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

Two of the settings for a ContextToolbar determine its priority: `predicate` and `scope`. The priority system mirrors the old `inlite` plugin. The `predicate` is a function that takes in the current context position and returns a boolean. The `scope` is either `node` or `editor`. The whole priority process works as follows:

1. The current cursor position is stored to use as the first current context position
2. For this current context position, each predicate with `scope: node` in the registered ContextToolbar is called. Currently, the order they are checked cannot be specified. The first predicate that passes will `win` and that ContextToolbar will be shown.
3. If no predicates (scope: node) match the current context position, then all of the `scope: editor` predicates are tried. The first one that matches the editor context wins.
4. If no `scope: editor` predicates match, then the new context position is calculated by going up the tree one level to the parent node. All `scope: node` predicates are then checked again. As soon as one matches, it *wins* and that ContextToolbar is shown. If nothing matches, it goes up the tree and tries again.

> Note: Only `scope: node` predicates are checked at this stage. The `scope: editor` predicate is only checked once and that check only happens in (2).

> Caution: Since the order in which the ContextForms and ContextToolbars are checked is not specified, try not to have their predicates overlap.

### Positioning ContextToolbars

There are two options for how to position a ContextToolbar: `selection` or `line`.

* A `selection` position will place the ContextToolbar above or below the current selection, centred if possible.

* A `line` position will place the ContextToolbar to the right (or left in Right-to-Left languages) of the current selection.

### Example Configuration

<!--- In this example, a custom toolbar object with two custom toolbar buttons is created and added to a configuration object via the ui toolbar property. This config is then used to create an  editor by replace.

```js
var customToolbar = {
    items : [
        {
            label: 'Undo and Redo group',
            items: [ 'undo', 'redo' ]
        },
        {
            label: 'Insert group',
            items: [
                {
                    id    : 'insert',
                    label  : 'Insert Menu',
                    items : [ 'link', 'fileupload', 'table' ]
                }
            ]
        },
        {
            label: 'Custom Toolbar Group',
            items: [
                {
                    id     : 'custom1',
                    text   : 'Custom Button 1',
                    icon   : '/path/to/icon1.png',
                    action : function () { alert('Custom Button 1 Clicked'); }
                },
                {
                    id     : 'custom2',
                    text   : 'Custom Button 2',
                    icon   : '/path/to/icon2.png',
                    action : function () { alert('Custom Button 2 Clicked'); }
                }
            ]
        }
    ]
};

var config = {
    ui : { toolbar : customToolbar }
};

var editor = textboxio.replace('#targetId', config);
``` --->


