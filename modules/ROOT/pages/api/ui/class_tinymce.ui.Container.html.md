---
layout: default
title: tinymce.ui.Container
---

|  |  |
| --- | --- |
| Namespace | tinymce.ui |
| Class | Container |
| Inheritance | <span>Container</span> <span class="last">[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)</span> |
| Subclasses | [Toolbar](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Toolbar.html), [ToolbarGroup](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.ToolbarGroup.html) |

This class is the base class for all container controls like toolbars. This class should not be instantiated directly other container controls should inherit from this one.

## Public Properties

| Property | Defined By |
| --- | --- |
| [controls](#controls) : Array : Array of controls added to the container. | Container |

## Public Methods

| Method | Defined By |
| --- | --- |
| [Container](#container)(id:String, s:Object) : Base contrustor a new container control instance. | Container |
| [add](#add)(c:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Adds a control to the collection of controls for the container. | Container |
| [destroy](#destroy)():void : Destroys the control will free any memory by removing event listeners etc. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [get](#get)(n:String):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Returns a control by id from the containers collection. | Container |
| [isActive](#isactive)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isDisabled](#isdisabled)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isRendered](#isrendered)():Boolean : Returns true/false if the control has been rendered or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [postRender](#postrender)():void : Post render event. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [remove](#remove)():void : Removes the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [renderHTML](#renderhtml)():String : Renders the control as a HTML string. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [renderTo](#renderto)(n:Element):void : Renders the control to the specified container element. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setActive](#setactive)(s:Boolean):void : Sets the activated state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setDisabled](#setdisabled)(s:Boolean):void : Sets the disabled state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setState](#setstate)(c:String, s:Boolean):void : Sets the specified class state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |

## Property details

### controls 

***public controls : Array***  
Array of controls added to the container.

## Method details

### Container 

***public function Container(id:String, s:Object)***  
Base contrustor a new container control instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Control id to use for the container. |
| s:Object | Optional name/value settings object. |

### add 

***public function add(c:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Adds a control to the collection of controls for the container.      

**Parameters**  

| Param | Detail |
| --- | --- |
| c:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) | Control instance to add to the container. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Same control instance that got passed in.

### get 

***public function get(n:String):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Returns a control by id from the containers collection.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Id for the control to retrive. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Control instance by the specified name or undefined if it wasn't found.