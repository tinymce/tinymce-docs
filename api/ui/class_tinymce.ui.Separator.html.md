---
layout: default
title: tinymce.ui.Separator
---

|  |  |
| --- | --- |
| Namespace | tinymce.ui |
| Class | Separator |
| Inheritance | <span>Separator</span> <span class="last">[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)</span> |

This class is used to create vertical separator between other controls.

## Public Methods

| Method | Defined By |
| --- | --- |
| [Separator](#separator)(id:String, s:Object) : Separator constructor. | Separator |
| [destroy](#destroy)():void : Destroys the control will free any memory by removing event listeners etc. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isActive](#isactive)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isDisabled](#isdisabled)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isRendered](#isrendered)():Boolean : Returns true/false if the control has been rendered or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [postRender](#postrender)():void : Post render event. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [remove](#remove)():void : Removes the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [renderHTML](#renderhtml)():String : Renders the separator as a HTML string. | Separator |
| [renderTo](#renderto)(n:Element):void : Renders the control to the specified container element. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setActive](#setactive)(s:Boolean):void : Sets the activated state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setDisabled](#setdisabled)(s:Boolean):void : Sets the disabled state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setState](#setstate)(c:String, s:Boolean):void : Sets the specified class state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |

## Method details

### Separator 

***public function Separator(id:String, s:Object)***  
Separator constructor.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Control id to use for the Separator. |
| s:Object | Optional name/value settings object. |

### renderHTML 

***public function renderHTML():String***  
Renders the separator as a HTML string. This method is much faster than using the DOM and when creating a whole toolbar with buttons it does make a lot of difference.      

**Returns**  
String - HTML for the separator control element.