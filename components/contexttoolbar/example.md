---
layout: draft
title: Example
title_nav: Example
description: Context Toolbar Example
keywords: contexttoolbar context toolbar contexttoolbarapi
---

## Example Configuration

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
```

