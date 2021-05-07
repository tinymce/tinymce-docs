---
layout: default
title: tinymce.ui.MenuItem
---

|  |  |
| --- | --- |
| Namespace | tinymce.ui |
| Class | MenuItem |
| Inheritance | <span>MenuItem</span> <span class="last">[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)</span> |
| Subclasses | [Menu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Menu.html) |

This class is base class for all menu item types like DropMenus items etc. This class should not be instantiated directly other menu items should inherit from this one.

## Public Methods

| Method | Defined By |
| --- | --- |
| [MenuItem](#menuitem)(id:String, s:Object) : Constructs a new button control instance. | MenuItem |
| [destroy](#destroy)():void : Destroys the control will free any memory by removing event listeners etc. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isActive](#isactive)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isDisabled](#isdisabled)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isRendered](#isrendered)():Boolean : Returns true/false if the control has been rendered or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isSelected](#isselected)():Boolean : Returns true/false if the control is selected or not. | MenuItem |
| [postRender](#postrender)():void : Post render handler. | MenuItem |
| [remove](#remove)():void : Removes the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [renderHTML](#renderhtml)():String : Renders the control as a HTML string. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [renderTo](#renderto)(n:Element):void : Renders the control to the specified container element. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setActive](#setactive)(s:Boolean):void : Sets the activated state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setDisabled](#setdisabled)(s:Boolean):void : Sets the disabled state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setSelected](#setselected)(s:Boolean):void : Sets the selected state for the control. | MenuItem |
| [setState](#setstate)(c:String, s:Boolean):void : Sets the specified class state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |

## Method details

### MenuItem 

***public function MenuItem(id:String, s:Object)***  
Constructs a new button control instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Button control id for the button. |
| s:Object | Optional name/value settings object. |

### isSelected 

***public function isSelected():Boolean***  
Returns true/false if the control is selected or not.      

**Returns**  
Boolean - true/false if the control is selected or not.

### postRender 

***public function postRender():void***  
Post render handler. This function will be called after the UI has been rendered so that events can be added.

### setSelected 

***public function setSelected(s:Boolean):void***  
Sets the selected state for the control. This will add CSS classes to the element that contains the control. So that it can be selected visually.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:Boolean | Boolean state if the control should be selected or not. |