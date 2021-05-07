---
layout: default
title: tinymce.ui.SplitButton
---

|  |  |
| --- | --- |
| Namespace | tinymce.ui |
| Class | SplitButton |
| Inheritance | <span>SplitButton</span> <span>[Button](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Button.html)</span> <span class="last">[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)</span> |
| Subclasses | [ColorSplitButton](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.ColorSplitButton.html) |

This class is used to create a split button. A button with a menu attached to it.      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [SplitButton](#splitbutton)(id:String, s:Object, ed:Editor) : Constructs a new split button control instance. | SplitButton |
| [destroy](#destroy)():void : Destroys the control will free any memory by removing event listeners etc. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isActive](#isactive)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isDisabled](#isdisabled)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isRendered](#isrendered)():Boolean : Returns true/false if the control has been rendered or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [postRender](#postrender)():void : Post render handler. | SplitButton |
| [remove](#remove)():void : Removes the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [renderHTML](#renderhtml)():String : Renders the split button as a HTML string. | SplitButton |
| [renderTo](#renderto)(n:Element):void : Renders the control to the specified container element. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setActive](#setactive)(s:Boolean):void : Sets the activated state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setDisabled](#setdisabled)(s:Boolean):void : Sets the disabled state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setState](#setstate)(c:String, s:Boolean):void : Sets the specified class state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |

## Method details

### SplitButton 

***public function SplitButton(id:String, s:Object, ed:Editor)***  
Constructs a new split button control instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Control id for the split button. |
| s:Object | Optional name/value settings object. |
| ed:Editor | Optional the editor instance this button is for. |

### postRender 

***public function postRender():void***  
Post render handler. This function will be called after the UI has been rendered so that events can be added.

### renderHTML 

***public function renderHTML():String***  
Renders the split button as a HTML string. This method is much faster than using the DOM and when creating a whole toolbar with buttons it does make a lot of difference.      

**Returns**  
String - HTML for the split button control element.