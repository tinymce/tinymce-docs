---
layout: default
title: tinymce.ui.ListBox
---

|  |  |
| --- | --- |
| Namespace | tinymce.ui |
| Class | ListBox |
| Inheritance | <span>ListBox</span> <span class="last">[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)</span> |
| Subclasses | [NativeListBox](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.NativeListBox.html) |

This class is used to create list boxes/select list. This one will generate a non native control. This one has the benefits of having visual items added.      

**Example**  

## Public Properties

| Property | Defined By |
| --- | --- |
| [items](#items) : Array : Array of ListBox items. | ListBox |

## Public Methods

| Method | Defined By |
| --- | --- |
| [ListBox](#listbox)(id:String, s:Object, ed:Editor) : Constructs a new listbox control instance. | ListBox |
| [add](#add)(n:String, v:String, o:Object):void : Adds a option item to the list box. | ListBox |
| [destroy](#destroy)():void : Destroys the ListBox i. | ListBox |
| [getLength](#getlength)(Number:Number):void : Returns the number of items inside the list box. | ListBox |
| [hideMenu](#hidemenu)():void : Hides the drop menu. | ListBox |
| [isActive](#isactive)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isDisabled](#isdisabled)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isRendered](#isrendered)():Boolean : Returns true/false if the control has been rendered or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [postRender](#postrender)():void : Post render event. | ListBox |
| [remove](#remove)():void : Removes the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [renderHTML](#renderhtml)():String : Renders the list box as a HTML string. | ListBox |
| [renderMenu](#rendermenu)():void : Renders the menu to the DOM. | ListBox |
| [renderTo](#renderto)(n:Element):void : Renders the control to the specified container element. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [select](#select)(va:String/function):void : Selects a item/option by value. | ListBox |
| [selectByIndex](#selectbyindex)(idx:String):void : Selects a item/option by index. | ListBox |
| [setActive](#setactive)(s:Boolean):void : Sets the activated state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setDisabled](#setdisabled)(s:Boolean):void : Sets the disabled state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setState](#setstate)(c:String, s:Boolean):void : Sets the specified class state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [showMenu](#showmenu)():void : Displays the drop menu with all items. | ListBox |

## Public Events

| Event | Defined By |
| --- | --- |
| [onAdd](#onadd)() : Fires when a new item is added. | ListBox |
| [onChange](#onchange)() : Fires when the selection has been changed. | ListBox |
| [onPostRender](#onpostrender)() : Fires after the element has been rendered to DOM. | ListBox |
| [onRenderMenu](#onrendermenu)() : Fires when the menu gets rendered. | ListBox |

## Property details

### items 

***public items : Array***  
Array of ListBox items.

## Method details

### ListBox 

***public function ListBox(id:String, s:Object, ed:Editor)***  
Constructs a new listbox control instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Control id for the list box. |
| s:Object | Optional name/value settings object. |
| ed:Editor | Optional the editor instance this button is for. |

### add 

***public function add(n:String, v:String, o:Object):void***  
Adds a option item to the list box.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Title for the new option. |
| v:String | Value for the new option. |
| o:Object | Optional object with settings like for example class. |

### destroy 

***public function destroy():void***  
Destroys the ListBox i.e. clear memory and events.

### getLength 

***public function getLength(Number:Number):void***  
Returns the number of items inside the list box.      

**Parameters**  

| Param | Detail |
| --- | --- |
| Number:Number | of items inside the list box. |

### hideMenu 

***public function hideMenu():void***  
Hides the drop menu.

### postRender 

***public function postRender():void***  
Post render event. This will be executed after the control has been rendered and can be used to set states, add events to the control etc. It's recommended for subclasses of the control to call this method by using this.parent().

### renderHTML 

***public function renderHTML():String***  
Renders the list box as a HTML string. This method is much faster than using the DOM and when creating a whole toolbar with buttons it does make a lot of difference.      

**Returns**  
String - HTML for the list box control element.

### renderMenu 

***public function renderMenu():void***  
Renders the menu to the DOM.

### select 

***public function select(va:String/function):void***  
Selects a item/option by value. This will both add a visual selection to the item and change the title of the control to the title of the option.      

**Parameters**  

| Param | Detail |
| --- | --- |
| va:String/function | Value to look for inside the list box or a function selector. |

### selectByIndex 

***public function selectByIndex(idx:String):void***  
Selects a item/option by index. This will both add a visual selection to the item and change the title of the control to the title of the option.      

**Parameters**  

| Param | Detail |
| --- | --- |
| idx:String | Index to select, pass -1 to select menu/title of select box. |

### showMenu 

***public function showMenu():void***  
Displays the drop menu with all items.

## Event details

### onAdd 

***public event onAdd()***  
Fires when a new item is added.

### onChange 

***public event onChange()***  
Fires when the selection has been changed.

### onPostRender 

***public event onPostRender()***  
Fires after the element has been rendered to DOM.

### onRenderMenu 

***public event onRenderMenu()***  
Fires when the menu gets rendered.