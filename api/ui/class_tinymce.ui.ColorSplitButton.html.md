---
layout: default
title: tinymce.ui.ColorSplitButton
---

|  |  |
| --- | --- |
| Namespace | tinymce.ui |
| Class | ColorSplitButton |
| Inheritance | <span>ColorSplitButton</span> <span>[SplitButton](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.SplitButton.html)</span> <span>[Button](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Button.html)</span> <span class="last">[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)</span> |

This class is used to create UI color split button. A color split button will present show a small color picker when you press the open menu.

## Public Properties

| Property | Defined By |
| --- | --- |
| [settings](#settings) : Object : Settings object. | ColorSplitButton |
| [value](#value) : String : Current color value. | ColorSplitButton |

## Public Methods

| Method | Defined By |
| --- | --- |
| [ColorSplitButton](#colorsplitbutton)(id:String, s:Object, ed:Editor) : Constructs a new color split button control instance. | ColorSplitButton |
| [destroy](#destroy)():void : Destroys the control. | ColorSplitButton |
| [displayColor](#displaycolor)(c:String):void : Change the currently selected color for the control. | ColorSplitButton |
| [hideMenu](#hidemenu)(e:Event):void : Hides the color menu. | ColorSplitButton |
| [isActive](#isactive)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isDisabled](#isdisabled)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isRendered](#isrendered)():Boolean : Returns true/false if the control has been rendered or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [postRender](#postrender)():void : Post render event. | ColorSplitButton |
| [remove](#remove)():void : Removes the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [renderHTML](#renderhtml)():String : Renders the split button as a HTML string. | [SplitButton](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.SplitButton.html) |
| [renderMenu](#rendermenu)():void : Renders the menu to the DOM. | ColorSplitButton |
| [renderTo](#renderto)(n:Element):void : Renders the control to the specified container element. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setActive](#setactive)(s:Boolean):void : Sets the activated state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setColor](#setcolor)(c:String):void : Sets the current color for the control and hides the menu if it should be visible. | ColorSplitButton |
| [setDisabled](#setdisabled)(s:Boolean):void : Sets the disabled state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setState](#setstate)(c:String, s:Boolean):void : Sets the specified class state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [showMenu](#showmenu)():void : Shows the color menu. | ColorSplitButton |

## Public Events

| Event | Defined By |
| --- | --- |
| [onHideMenu](#onhidemenu)() : Fires when the menu is hidden. | ColorSplitButton |
| [onShowMenu](#onshowmenu)() : Fires when the menu is shown. | ColorSplitButton |

## Property details

### settings 

***public settings : Object***  
Settings object.

### value 

***public value : String***  
Current color value.

## Method details

### ColorSplitButton 

***public function ColorSplitButton(id:String, s:Object, ed:Editor)***  
Constructs a new color split button control instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Control id for the color split button. |
| s:Object | Optional name/value settings object. |
| ed:Editor | The editor instance this button is for. |

### destroy 

***public function destroy():void***  
Destroys the control. This means it will be removed from the DOM and any events tied to it will also be removed.

### displayColor 

***public function displayColor(c:String):void***  
Change the currently selected color for the control.      

**Parameters**  

| Param | Detail |
| --- | --- |
| c:String | Color code value in hex for example: #FF00FF |

### hideMenu 

***public function hideMenu(e:Event):void***  
Hides the color menu. The optional event parameter is used to check where the event occured so it doesn't close them menu if it was a event inside the menu.      

**Parameters**  

| Param | Detail |
| --- | --- |
| e:Event | Optional event object. |

### postRender 

***public function postRender():void***  
Post render event. This will be executed after the control has been rendered and can be used to set states, add events to the control etc. It's recommended for subclasses of the control to call this method by using this.parent().

### renderMenu 

***public function renderMenu():void***  
Renders the menu to the DOM.

### setColor 

***public function setColor(c:String):void***  
Sets the current color for the control and hides the menu if it should be visible.      

**Parameters**  

| Param | Detail |
| --- | --- |
| c:String | Color code value in hex for example: #FF00FF |

### showMenu 

***public function showMenu():void***  
Shows the color menu. The color menu is a layer places under the button and displays a table of colors for the user to pick from.

## Event details

### onHideMenu 

***public event onHideMenu()***  
Fires when the menu is hidden.

### onShowMenu 

***public event onShowMenu()***  
Fires when the menu is shown.