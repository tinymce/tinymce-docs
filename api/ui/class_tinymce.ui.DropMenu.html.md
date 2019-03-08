---
layout: default
title: tinymce.ui.DropMenu
---

|  |  |
| --- | --- |
| Namespace | tinymce.ui |
| Class | DropMenu |
| Inheritance | <span>DropMenu</span> <span>[Menu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Menu.html)</span> <span>[MenuItem](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.MenuItem.html)</span> <span class="last">[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)</span> |

This class is used to create drop menus, a drop menu can be a context menu, or a menu for a list box or a menu bar.      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [DropMenu](#dropmenu)(id:String, s:Object) : Constructs a new drop menu control instance. | DropMenu |
| [add](#add)(o:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Adds a new menu, menu item or sub classes of them to the drop menu. | DropMenu |
| [addMenu](#addmenu)(o:Object):[Menu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Menu.html) : Adds a sub menu to the menu. | [Menu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Menu.html) |
| [addSeparator](#addseparator)():[MenuItem](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.MenuItem.html) : Adds a menu separator between the menu items. | [Menu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Menu.html) |
| [collapse](#collapse)(d:Boolean):void : Collapses the menu, this will hide the menu and all menu items. | DropMenu |
| [createMenu](#createmenu)(s:Object):[DropMenu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.DropMenu.html) : Created a new sub menu for the drop menu control. | DropMenu |
| [destroy](#destroy)():void : Destroys the menu. | DropMenu |
| [expand](#expand)(d:Boolean):void : Expands the menu, this will show them menu and all menu items. | [Menu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Menu.html) |
| [hasMenus](#hasmenus)():Boolean : Returns true/false if the menu has sub menus or not. | [Menu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Menu.html) |
| [hideMenu](#hidemenu)():void : Hides the displayed menu. | DropMenu |
| [isActive](#isactive)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isCollapsed](#iscollapsed)():Boolean : Returns true/false if the menu has been collapsed or not. | [Menu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Menu.html) |
| [isDisabled](#isdisabled)():Boolean : Returns true/false if the control is disabled or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isRendered](#isrendered)():Boolean : Returns true/false if the control has been rendered or not. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [isSelected](#isselected)():Boolean : Returns true/false if the control is selected or not. | [MenuItem](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.MenuItem.html) |
| [postRender](#postrender)():void : Post render handler. | [MenuItem](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.MenuItem.html) |
| [remove](#remove)(o:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Removes a specific sub menu or menu item from the drop menu. | DropMenu |
| [removeAll](#removeall)():void : Removes all menu items and sub menu items from the menu. | [Menu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Menu.html) |
| [renderHTML](#renderhtml)():String : Renders the control as a HTML string. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [renderNode](#rendernode)():Element : Renders the specified menu node to the dom. | DropMenu |
| [renderTo](#renderto)(n:Element):void : Renders the control to the specified container element. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setActive](#setactive)(s:Boolean):void : Sets the activated state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setDisabled](#setdisabled)(s:Boolean):void : Sets the disabled state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [setSelected](#setselected)(s:Boolean):void : Sets the selected state for the control. | [MenuItem](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.MenuItem.html) |
| [setState](#setstate)(c:String, s:Boolean):void : Sets the specified class state for the control. | [Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) |
| [showMenu](#showmenu)(x:Number, y:Number, px:Numner):void : Displays the menu at the specified cordinate. | DropMenu |
| [update](#update)():void : Repaints the menu after new items have been added dynamically. | DropMenu |

## Method details

### DropMenu 

***public function DropMenu(id:String, s:Object)***  
Constructs a new drop menu control instance.      

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

### collapse 

***public function collapse(d:Boolean):void***  
Collapses the menu, this will hide the menu and all menu items.      

**Parameters**  

| Param | Detail |
| --- | --- |
| d:Boolean | Optional deep state. If this is set to true all children will be collapsed as well. |

### createMenu 

***public function createMenu(s:Object):[DropMenu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.DropMenu.html)***  
Created a new sub menu for the drop menu control.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:Object | Optional name/value settings object. |

**Returns**  
[DropMenu](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.DropMenu.html) - New drop menu instance.

### destroy 

***public function destroy():void***  
Destroys the menu. This will remove the menu from the DOM and any events added to it etc.

### hideMenu 

***public function hideMenu():void***  
Hides the displayed menu.

### remove 

***public function remove(o:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Removes a specific sub menu or menu item from the drop menu.      

**Parameters**  

| Param | Detail |
| --- | --- |
| o:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) | Menu item or menu to remove from drop menu. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Control instance or null if it wasn't found.

### renderNode 

***public function renderNode():Element***  
Renders the specified menu node to the dom.      

**Returns**  
Element - Container element for the drop menu.

### showMenu 

***public function showMenu(x:Number, y:Number, px:Numner):void***  
Displays the menu at the specified cordinate.      

**Parameters**  

| Param | Detail |
| --- | --- |
| x:Number | Horizontal position of the menu. |
| y:Number | Vertical position of the menu. |
| px:Numner | Optional parent X position used when menus are cascading. |

### update 

***public function update():void***  
Repaints the menu after new items have been added dynamically.