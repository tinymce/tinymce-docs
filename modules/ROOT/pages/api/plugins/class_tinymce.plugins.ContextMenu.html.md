---
layout: default
title: tinymce.plugins.ContextMenu
---

|  |  |
| --- | --- |
| Namespace | tinymce.plugins |
| Class | ContextMenu |

This plugin a context menu to TinyMCE editor instances.

## Public Methods

| Method | Defined By |
| --- | --- |
| [getInfo](#getinfo)():Object : Returns information about the plugin as a name/value array. | ContextMenu |
| [init](#init)(ed:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html), url:string):void : Initializes the plugin, this will be executed after the plugin has been created. | ContextMenu |

## Public Events

| Event | Defined By |
| --- | --- |
| [onContextMenu](#oncontextmenu)(sender:[ContextMenu](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.plugins.ContextMenu.html), menu:[DropMenu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.DropMenu.html)) : This event gets fired when the context menu is shown. | ContextMenu |

## Method details

### getInfo 

***public function getInfo():Object***  
Returns information about the plugin as a name/value array. The current keys are longname, author, authorurl, infourl and version.      

**Returns**  
Object - Name/value array containing information about the plugin.

### init 

***public function init(ed:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html), url:string):void***  
Initializes the plugin, this will be executed after the plugin has been created. This call is done before the editor instance has finished it's initialization so use the onInit event of the editor instance to intercept that event.      

**Parameters**  

| Param | Detail |
| --- | --- |
| ed:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) | Editor instance that the plugin is initialized in. |
| url:string | Absolute URL to where the plugin is located. |

## Event details

### onContextMenu 

***public event onContextMenu(sender:[ContextMenu](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.plugins.ContextMenu.html), menu:[DropMenu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.DropMenu.html))***  
This event gets fired when the context menu is shown.      

**Parameters**  

| Param | Detail |
| --- | --- |
| sender:[ContextMenu](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.plugins.ContextMenu.html) | Plugin instance sending the event. |
| menu:[DropMenu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.DropMenu.html) | Drop down menu to fill with more items if needed. |