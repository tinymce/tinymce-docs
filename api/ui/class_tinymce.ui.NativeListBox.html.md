---
layout: default
title: tinymce.ui.NativeListBox
---

|  |  |
| --- | --- |
| Namespace | tinymce.ui |
| Class | NativeListBox |
| Inheritance | <span>NativeListBox</span> <span>[ListBox](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.ListBox.html)</span> <span class="last">[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)</span> |

This class is used to create list boxes/select list. This one will generate a native control the way that the browser produces them by default.

## Public Properties

| Property | Defined By |
| --- | --- |
| [items](#items) : Array : Array of ListBox items. | [ListBox](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.ListBox.html) |

## Public Methods

| Method | Defined By |
| --- | --- |
| [NativeListBox](#nativelistbox)(id:String, s:Object) : Constructs a new button control instance. | NativeListBox |
| [add](#add)(n:String, v:String, o:Object):void : Adds a option item to the list box. | NativeListBox |
| [destroy](#destroy)():void : Destroys the ListBox i. | [ListBox](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.ListBox.html) |
| [getLength](#getlength)():void : Executes the specified callback function for the menu item. | NativeListBox |
| [hideMenu](#hidemenu)():void : Hides the drop menu. | [ListBox](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.ListBox.html) |
| [isActive](#isactive)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isDisabled](#isdisabled)():Boolean : Returns true/false if the control is disabled or not. | NativeListBox |
| [isRendered](#isrendered)():Boolean : Returns true/false if the control has been rendered or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [postRender](#postrender)():void : Post render handler. | NativeListBox |
| [remove](#remove)():void : Removes the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [renderHTML](#renderhtml)():String : Renders the list box as a HTML string. | NativeListBox |
| [renderMenu](#rendermenu)():void : Renders the menu to the DOM. | [ListBox](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.ListBox.html) |
| [renderTo](#renderto)(n:Element):void : Renders the control to the specified container element. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [select](#select)(va:String/function):void : Selects a item/option by value. | NativeListBox |
| [selectByIndex](#selectbyindex)(idx:String):void : Selects a item/option by index. | NativeListBox |
| [setActive](#setactive)(s:Boolean):void : Sets the activated state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setDisabled](#setdisabled)(s:Boolean):void : Sets the disabled state for the control. | NativeListBox |
| [setState](#setstate)(c:String, s:Boolean):void : Sets the specified class state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [showMenu](#showmenu)():void : Displays the drop menu with all items. | [ListBox](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.ListBox.html) |

## Public Events

| Event | Defined By |
| --- | --- |
| [onAdd](#onadd)() : Fires when a new item is added. | [ListBox](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.ListBox.html) |
| [onChange](#onchange)() : Fires when the selection has been changed. | [ListBox](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.ListBox.html) |
| [onPostRender](#onpostrender)() : Fires after the element has been rendered to DOM. | [ListBox](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.ListBox.html) |
| [onRenderMenu](#onrendermenu)() : Fires when the menu gets rendered. | [ListBox](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.ListBox.html) |

## Method details

### NativeListBox 

***public function NativeListBox(id:String, s:Object)***  
Constructs a new button control instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Button control id for the button. |
| s:Object | Optional name/value settings object. |

### add 

***public function add(n:String, v:String, o:Object):void***  
Adds a option item to the list box.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Title for the new option. |
| v:String | Value for the new option. |
| o:Object | Optional object with settings like for example class. |

### getLength 

***public function getLength():void***  
Executes the specified callback function for the menu item. In this case when the user clicks the menu item.

### isDisabled 

***public function isDisabled():Boolean***  
Returns true/false if the control is disabled or not. This is a method since you can then choose to check some class or some internal bool state in subclasses.      

**Returns**  
Boolean - true/false if the control is disabled or not.

### postRender 

***public function postRender():void***  
Post render handler. This function will be called after the UI has been rendered so that events can be added.

### renderHTML 

***public function renderHTML():String***  
Renders the list box as a HTML string. This method is much faster than using the DOM and when creating a whole toolbar with buttons it does make a lot of difference.      

**Returns**  
String - HTML for the list box control element.

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

### setDisabled 

***public function setDisabled(s:Boolean):void***  
Sets the disabled state for the control. This will add CSS classes to the element that contains the control. So that it can be disabled visually.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:Boolean | Boolean state if the control should be disabled or not. |