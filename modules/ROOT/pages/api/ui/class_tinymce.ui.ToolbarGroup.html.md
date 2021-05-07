---
layout: default
title: tinymce.ui.ToolbarGroup
---

|  |  |
| --- | --- |
| Namespace | tinymce.ui |
| Class | ToolbarGroup |
| Inheritance | <span>ToolbarGroup</span> <span>[Container](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Container.html)</span> <span class="last">[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)</span> |

This class is used to group a set of toolbars together and control the keyboard navigation and focus.

## Public Properties

| Property | Defined By |
| --- | --- |
| [controls](#controls) : Array : Array of controls added to the container. | [Container](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Container.html) |

## Public Methods

| Method | Defined By |
| --- | --- |
| [add](#add)(c:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Adds a control to the collection of controls for the container. | [Container](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Container.html) |
| [destroy](#destroy)():void : Destroys the control will free any memory by removing event listeners etc. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [get](#get)(n:String):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Returns a control by id from the containers collection. | [Container](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Container.html) |
| [isActive](#isactive)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isDisabled](#isdisabled)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isRendered](#isrendered)():Boolean : Returns true/false if the control has been rendered or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [postRender](#postrender)():void : Post render event. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [remove](#remove)():void : Removes the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [renderHTML](#renderhtml)():String : Renders the toolbar group as a HTML string. | ToolbarGroup |
| [renderTo](#renderto)(n:Element):void : Renders the control to the specified container element. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setActive](#setactive)(s:Boolean):void : Sets the activated state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setDisabled](#setdisabled)(s:Boolean):void : Sets the disabled state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setState](#setstate)(c:String, s:Boolean):void : Sets the specified class state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |

## Method details

### renderHTML 

***public function renderHTML():String***  
Renders the toolbar group as a HTML string.      

**Returns**  
String - HTML for the toolbar control.