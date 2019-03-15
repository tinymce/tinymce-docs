---
layout: default
title: tinymce.ui.Button
---

|  |  |
| --- | --- |
| Namespace | tinymce.ui |
| Class | Button |
| Inheritance | <span>Button</span> <span class="last">[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)</span> |
| Subclasses | [SplitButton](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.SplitButton.html) |

This class is used to create a UI button. A button is basically a link that is styled to look like a button or icon.

## Public Methods

| Method | Defined By |
| --- | --- |
| [Button](#button)(id:String, s:Object, ed:Editor) : Constructs a new button control instance. | Button |
| [destroy](#destroy)():void : Destroys the control will free any memory by removing event listeners etc. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isActive](#isactive)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isDisabled](#isdisabled)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isRendered](#isrendered)():Boolean : Returns true/false if the control has been rendered or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [postRender](#postrender)():void : Post render handler. | Button |
| [remove](#remove)():void : Removes the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [renderHTML](#renderhtml)():String : Renders the button as a HTML string. | Button |
| [renderTo](#renderto)(n:Element):void : Renders the control to the specified container element. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setActive](#setactive)(s:Boolean):void : Sets the activated state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setDisabled](#setdisabled)(s:Boolean):void : Sets the disabled state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setState](#setstate)(c:String, s:Boolean):void : Sets the specified class state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |

## Method details

### Button 

***public function Button(id:String, s:Object, ed:Editor)***  
Constructs a new button control instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Control id for the button. |
| s:Object | Optional name/value settings object. |
| ed:Editor | Optional the editor instance this button is for. |

### postRender 

***public function postRender():void***  
Post render handler. This function will be called after the UI has been rendered so that events can be added.

### renderHTML 

***public function renderHTML():String***  
Renders the button as a HTML string. This method is much faster than using the DOM and when creating a whole toolbar with buttons it does make a lot of difference.      

**Returns**  
String - HTML for the button control element.