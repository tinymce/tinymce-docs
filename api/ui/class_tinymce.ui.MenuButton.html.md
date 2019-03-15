---
layout: default
title: tinymce.ui.MenuButton
---

|  |  |
| --- | --- |
| Namespace | tinymce.ui |
| Class | MenuButton |
| Inheritance | <span>MenuButton</span> <span class="last">[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)</span> |

This class is used to create a UI button. A button is basically a link that is styled to look like a button or icon.      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [MenuButton](#menubutton)(id:String, s:Object, ed:Editor) : Constructs a new split button control instance. | MenuButton |
| [destroy](#destroy)():void : Destroys the control will free any memory by removing event listeners etc. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [hideMenu](#hidemenu)(e:Event):void : Hides the menu. | MenuButton |
| [isActive](#isactive)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isDisabled](#isdisabled)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isRendered](#isrendered)():Boolean : Returns true/false if the control has been rendered or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [postRender](#postrender)():void : Post render handler. | MenuButton |
| [remove](#remove)():void : Removes the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [renderHTML](#renderhtml)():String : Renders the control as a HTML string. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [renderMenu](#rendermenu)():void : Renders the menu to the DOM. | MenuButton |
| [renderTo](#renderto)(n:Element):void : Renders the control to the specified container element. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setActive](#setactive)(s:Boolean):void : Sets the activated state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setDisabled](#setdisabled)(s:Boolean):void : Sets the disabled state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setState](#setstate)(c:String, s:Boolean):void : Sets the specified class state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [showMenu](#showmenu)():void : Shows the menu. | MenuButton |

## Public Events

| Event | Defined By |
| --- | --- |
| [onRenderMenu](#onrendermenu)() : Fires when the menu is rendered. | MenuButton |

## Method details

### MenuButton 

***public function MenuButton(id:String, s:Object, ed:Editor)***  
Constructs a new split button control instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Control id for the split button. |
| s:Object | Optional name/value settings object. |
| ed:Editor | Optional the editor instance this button is for. |

### hideMenu 

***public function hideMenu(e:Event):void***  
Hides the menu. The optional event parameter is used to check where the event occured so it doesn't close them menu if it was a event inside the menu.      

**Parameters**  

| Param | Detail |
| --- | --- |
| e:Event | Optional event object. |

### postRender 

***public function postRender():void***  
Post render handler. This function will be called after the UI has been rendered so that events can be added.

### renderMenu 

***public function renderMenu():void***  
Renders the menu to the DOM.

### showMenu 

***public function showMenu():void***  
Shows the menu.

## Event details

### onRenderMenu 

***public event onRenderMenu()***  
Fires when the menu is rendered.