---
layout: default
title: tinymce.Plugin
---

|  |  |
| --- | --- |
| Namespace | tinymce |
| Class | Plugin |

Plugin base class, this is a pseudo class that describes how a plugin is to be created for TinyMCE. The methods below are all optional.      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [createControl](#createcontrol)(name:String, controlman:[ControlManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.ControlManager.html)):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Gets called when a new control instance is created. | Plugin |
| [getInfo](#getinfo)():Object : Meta info method, this method gets executed when TinyMCE wants to present information about the plugin for example in th... | Plugin |
| [init](#init)(editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html), url:String):void : Initialization function for the plugin. | Plugin |

## Method details

### createControl 

***public function createControl(name:String, controlman:[ControlManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.ControlManager.html)):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Gets called when a new control instance is created.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Control name to create for example "mylistbox" |
| controlman:[ControlManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.ControlManager.html) | Control manager/factory to use to create the control. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Returns a new control instance or null.      

**Example**  

### getInfo 

***public function getInfo():Object***  
Meta info method, this method gets executed when TinyMCE wants to present information about the plugin for example in the about/help dialog.      

**Returns**  
Object - Returns an object with meta information about the plugin the current items are longname, author, authorurl, infourl and version.      

**Example**  

### init 

***public function init(editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html), url:String):void***  
Initialization function for the plugin. This will be called when the plugin is created.      

**Parameters**  

| Param | Detail |
| --- | --- |
| editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) | Editor instance that created the plugin instance. |
| url:String | Absolute URL where the plugin is located. |

**Example**