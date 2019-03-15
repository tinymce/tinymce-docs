---
layout: default
title: tinymce.ui.Control
---

|  |  |
| --- | --- |
| Namespace | tinymce.ui |
| Class | Control |
| Subclasses | [Button](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Button.html), [Container](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Container.html), [ListBox](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.ListBox.html), [MenuButton](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.MenuButton.html), [MenuItem](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.MenuItem.html), [Separator](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Separator.html) |

This class is the base class for all controls like buttons, toolbars, containers. This class should not be instantiated directly other controls should inherit from this one.

## Public Methods

| Method | Defined By |
| --- | --- |
| [Control](#control)(id:String, s:Object) : Constructs a new control instance. | Control |
| [destroy](#destroy)():void : Destroys the control will free any memory by removing event listeners etc. | Control |
| [isActive](#isactive)():Boolean : Returns true/false if the control is disabled or not. | Control |
| [isDisabled](#isdisabled)():Boolean : Returns true/false if the control is disabled or not. | Control |
| [isRendered](#isrendered)():Boolean : Returns true/false if the control has been rendered or not. | Control |
| [postRender](#postrender)():void : Post render event. | Control |
| [remove](#remove)():void : Removes the control. | Control |
| [renderHTML](#renderhtml)():String : Renders the control as a HTML string. | Control |
| [renderTo](#renderto)(n:Element):void : Renders the control to the specified container element. | Control |
| [setActive](#setactive)(s:Boolean):void : Sets the activated state for the control. | Control |
| [setDisabled](#setdisabled)(s:Boolean):void : Sets the disabled state for the control. | Control |
| [setState](#setstate)(c:String, s:Boolean):void : Sets the specified class state for the control. | Control |

## Method details

### Control 

***public function Control(id:String, s:Object)***  
Constructs a new control instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Control id. |
| s:Object | Optional name/value settings object. |

### destroy 

***public function destroy():void***  
Destroys the control will free any memory by removing event listeners etc.

### isActive 

***public function isActive():Boolean***  
Returns true/false if the control is disabled or not. This is a method since you can then choose to check some class or some internal bool state in subclasses.      

**Returns**  
Boolean - true/false if the control is disabled or not.

### isDisabled 

***public function isDisabled():Boolean***  
Returns true/false if the control is disabled or not. This is a method since you can then choose to check some class or some internal bool state in subclasses.      

**Returns**  
Boolean - true/false if the control is disabled or not.

### isRendered 

***public function isRendered():Boolean***  
Returns true/false if the control has been rendered or not.      

**Returns**  
Boolean - State if the control has been rendered or not.

### postRender 

***public function postRender():void***  
Post render event. This will be executed after the control has been rendered and can be used to set states, add events to the control etc. It's recommended for subclasses of the control to call this method by using this.parent().

### remove 

***public function remove():void***  
Removes the control. This means it will be removed from the DOM and any events tied to it will also be removed.

### renderHTML 

***public function renderHTML():String***  
Renders the control as a HTML string. This method is much faster than using the DOM and when creating a whole toolbar with buttons it does make a lot of difference.      

**Returns**  
String - HTML for the button control element.

### renderTo 

***public function renderTo(n:Element):void***  
Renders the control to the specified container element.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:Element | HTML DOM element to add control to. |

### setActive 

***public function setActive(s:Boolean):void***  
Sets the activated state for the control. This will add CSS classes to the element that contains the control. So that it can be activated visually.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:Boolean | Boolean state if the control should be activated or not. |

### setDisabled 

***public function setDisabled(s:Boolean):void***  
Sets the disabled state for the control. This will add CSS classes to the element that contains the control. So that it can be disabled visually.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:Boolean | Boolean state if the control should be disabled or not. |

### setState 

***public function setState(c:String, s:Boolean):void***  
Sets the specified class state for the control.      

**Parameters**  

| Param | Detail |
| --- | --- |
| c:String | Class name to add/remove depending on state. |
| s:Boolean | True/false state if the class should be removed or added. |