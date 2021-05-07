---
layout: default
title: tinymce.ui.Menu
---

|  |  |
| --- | --- |
| Namespace | tinymce.ui |
| Class | Menu |
| Inheritance | <span>Menu</span> <span>[MenuItem](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.MenuItem.html)</span> <span class="last">[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)</span> |
| Subclasses | [DropMenu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.DropMenu.html) |

This class is base class for all menu types like DropMenus etc. This class should not be instantiated directly other menu controls should inherit from this one.

## Public Methods

| Method | Defined By |
| --- | --- |
| [Menu](#menu)(id:String, s:Object) : Constructs a new button control instance. | Menu |
| [add](#add)(o:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Adds a new menu, menu item or sub classes of them to the drop menu. | Menu |
| [addMenu](#addmenu)(o:Object):[Menu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Menu.html) : Adds a sub menu to the menu. | Menu |
| [addSeparator](#addseparator)():[MenuItem](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.MenuItem.html) : Adds a menu separator between the menu items. | Menu |
| [collapse](#collapse)(d:Boolean):void : Collapses the menu, this will hide the menu and all menu items. | Menu |
| [createMenu](#createmenu)(s:Object):[Menu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Menu.html) : Created a new sub menu for the menu control. | Menu |
| [destroy](#destroy)():void : Destroys the control will free any memory by removing event listeners etc. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [expand](#expand)(d:Boolean):void : Expands the menu, this will show them menu and all menu items. | Menu |
| [hasMenus](#hasmenus)():Boolean : Returns true/false if the menu has sub menus or not. | Menu |
| [isActive](#isactive)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isCollapsed](#iscollapsed)():Boolean : Returns true/false if the menu has been collapsed or not. | Menu |
| [isDisabled](#isdisabled)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isRendered](#isrendered)():Boolean : Returns true/false if the control has been rendered or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isSelected](#isselected)():Boolean : Returns true/false if the control is selected or not. | [MenuItem](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.MenuItem.html) |
| [postRender](#postrender)():void : Post render handler. | [MenuItem](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.MenuItem.html) |
| [remove](#remove)(o:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Removes a specific sub menu or menu item from the menu. | Menu |
| [removeAll](#removeall)():void : Removes all menu items and sub menu items from the menu. | Menu |
| [renderHTML](#renderhtml)():String : Renders the control as a HTML string. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [renderTo](#renderto)(n:Element):void : Renders the control to the specified container element. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setActive](#setactive)(s:Boolean):void : Sets the activated state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setDisabled](#setdisabled)(s:Boolean):void : Sets the disabled state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setSelected](#setselected)(s:Boolean):void : Sets the selected state for the control. | [MenuItem](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.MenuItem.html) |
| [setState](#setstate)(c:String, s:Boolean):void : Sets the specified class state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |

## Method details

### Menu 

***public function Menu(id:String, s:Object)***  
Constructs a new button control instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Button control id for the button. |
| s:Object | Optional name/value settings object. |

### add 

***public function add(o:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Adds a new menu, menu item or sub classes of them to the drop menu.      

**Parameters**  

| Param | Detail |
| --- | --- |
| o:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) | Menu or menu item to add to the drop menu. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Same as the input control, the menu or menu item.

### addMenu 

***public function addMenu(o:Object):[Menu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Menu.html)***  
Adds a sub menu to the menu.      

**Parameters**  

| Param | Detail |
| --- | --- |
| o:Object | Menu control or a object with settings to be created into an control. |

**Returns**  
[Menu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Menu.html) - Menu control instance passed in or created.

### addSeparator 

***public function addSeparator():[MenuItem](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.MenuItem.html)***  
Adds a menu separator between the menu items.      

**Returns**  
[MenuItem](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.MenuItem.html) - Menu item instance for the separator.

### collapse 

***public function collapse(d:Boolean):void***  
Collapses the menu, this will hide the menu and all menu items.      

**Parameters**  

| Param | Detail |
| --- | --- |
| d:Boolean | Optional deep state. If this is set to true all children will be collapsed as well. |

### createMenu 

***public function createMenu(s:Object):[Menu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Menu.html)***  
Created a new sub menu for the menu control.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:Object | Optional name/value settings object. |

**Returns**  
[Menu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Menu.html) - New drop menu instance.

### expand 

***public function expand(d:Boolean):void***  
Expands the menu, this will show them menu and all menu items.      

**Parameters**  

| Param | Detail |
| --- | --- |
| d:Boolean | Optional deep state. If this is set to true all children will be expanded as well. |

### hasMenus 

***public function hasMenus():Boolean***  
Returns true/false if the menu has sub menus or not.      

**Returns**  
Boolean - True/false state if the menu has sub menues or not.

### isCollapsed 

***public function isCollapsed():Boolean***  
Returns true/false if the menu has been collapsed or not.      

**Returns**  
Boolean - True/false state if the menu has been collapsed or not.

### remove 

***public function remove(o:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Removes a specific sub menu or menu item from the menu.      

**Parameters**  

| Param | Detail |
| --- | --- |
| o:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) | Menu item or menu to remove from menu. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Control instance or null if it wasn't found.

### removeAll 

***public function removeAll():void***  
Removes all menu items and sub menu items from the menu.