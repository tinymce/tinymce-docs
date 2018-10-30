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

{% include context/priority.md %}

### Positioning ContextToolbars

{% include context/positioning.md %}


<!--- ### Example Configuration

In this example, a custom toolbar object with two custom toolbar buttons is created and added to a configuration object via the ui toolbar property. This config is then used to create an  editor by replace.

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


