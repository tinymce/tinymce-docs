---
layout: default
title: tinymce.ControlManager
---

|  |  |
| --- | --- |
| Namespace | tinymce |
| Class | ControlManager |

This class is responsible for managing UI control instances. It's both a factory and a collection for the controls.

## Public Methods

| Method | Defined By |
| --- | --- |
| [ControlManager](#controlmanager)(ed:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html), s:Object) : Constructs a new control manager instance. | ControlManager |
| [add](#add)(Control:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Adds a control to the control collection inside the manager. | ControlManager |
| [createButton](#createbutton)(id:String, s:Object, cc:Object):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Creates a button control instance by id. | ControlManager |
| [createColorSplitButton](#createcolorsplitbutton)(id:String, s:Object, cc:Object):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Creates a color split button control instance by id. | ControlManager |
| [createControl](#createcontrol)(name:String):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Creates a control by name, when a control is created it will automatically add it to the control collection. | ControlManager |
| [createDropMenu](#createdropmenu)(id:String, s:Object, cc:Object):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Creates a drop menu control instance by id. | ControlManager |
| [createListBox](#createlistbox)(id:String, s:Object, cc:Object):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Creates a list box control instance by id. | ControlManager |
| [createMenuButton](#createmenubutton)(id:String, s:Object, cc:Object):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Creates a menu button control instance by id. | ControlManager |
| [createSeparator](#createseparator)(cc:Object):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Creates a separator control instance. | ControlManager |
| [createSplitButton](#createsplitbutton)(id:String, s:Object, cc:Object):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Creates a split button control instance by id. | ControlManager |
| [createToolbar](#createtoolbar)(id:String, s:Object, cc:Object):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Creates a toolbar container control instance by id. | ControlManager |
| [destroy](#destroy)():void : Destroy. | ControlManager |
| [get](#get)(id:String):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Returns a control by id or undefined it it wasn't found. | ControlManager |
| [setActive](#setactive)(id:String, s:Boolean):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Sets the active state of a control by id. | ControlManager |
| [setControlType](#setcontroltype)(n:string, c:function):function : Overrides a specific control type with a custom class. | ControlManager |
| [setDisabled](#setdisabled)(id:String, s:Boolean):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) : Sets the dsiabled state of a control by id. | ControlManager |

## Method details

### ControlManager 

***public function ControlManager(ed:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html), s:Object)***  
Constructs a new control manager instance. Consult the Wiki for more details on this class.      

**Parameters**  

| Param | Detail |
| --- | --- |
| ed:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) | TinyMCE editor instance to add the control to. |
| s:Object | Optional settings object for the control manager. |

### add 

***public function add(Control:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Adds a control to the control collection inside the manager.      

**Parameters**  

| Param | Detail |
| --- | --- |
| Control:[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) | instance to add to collection. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Control instance that got passed in.

### createButton 

***public function createButton(id:String, s:Object, cc:Object):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Creates a button control instance by id.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Unique id for the new button instance. For example "bold". |
| s:Object | Optional settings object for the control. |
| cc:Object | Optional control class to use instead of the default one. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Control instance that got created and added.

### createColorSplitButton 

***public function createColorSplitButton(id:String, s:Object, cc:Object):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Creates a color split button control instance by id.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Unique id for the new color split button instance. For example "forecolor". |
| s:Object | Optional settings object for the control. |
| cc:Object | Optional control class to use instead of the default one. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Control instance that got created and added.

### createControl 

***public function createControl(name:String):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Creates a control by name, when a control is created it will automatically add it to the control collection. It first ask all plugins for the specified control if the plugins didn't return a control then the default behavior will be used.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Control name to create for example "separator". |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Control instance that got created and added.

### createDropMenu 

***public function createDropMenu(id:String, s:Object, cc:Object):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Creates a drop menu control instance by id.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Unique id for the new dropdown instance. For example "some menu". |
| s:Object | Optional settings object for the control. |
| cc:Object | Optional control class to use instead of the default one. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Control instance that got created and added.

### createListBox 

***public function createListBox(id:String, s:Object, cc:Object):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Creates a list box control instance by id. A list box is either a native select element or a DOM/JS based list box control. This depends on the use_native_selects settings state.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Unique id for the new listbox instance. For example "styles". |
| s:Object | Optional settings object for the control. |
| cc:Object | Optional control class to use instead of the default one. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Control instance that got created and added.

### createMenuButton 

***public function createMenuButton(id:String, s:Object, cc:Object):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Creates a menu button control instance by id.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Unique id for the new menu button instance. For example "menu1". |
| s:Object | Optional settings object for the control. |
| cc:Object | Optional control class to use instead of the default one. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Control instance that got created and added.

### createSeparator 

***public function createSeparator(cc:Object):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Creates a separator control instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| cc:Object | Optional control class to use instead of the default one. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Control instance that got created and added.

### createSplitButton 

***public function createSplitButton(id:String, s:Object, cc:Object):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Creates a split button control instance by id.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Unique id for the new split button instance. For example "spellchecker". |
| s:Object | Optional settings object for the control. |
| cc:Object | Optional control class to use instead of the default one. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Control instance that got created and added.

### createToolbar 

***public function createToolbar(id:String, s:Object, cc:Object):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Creates a toolbar container control instance by id.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Unique id for the new toolbar container control instance. For example "toolbar1". |
| s:Object | Optional settings object for the control. |
| cc:Object | Optional control class to use instead of the default one. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Control instance that got created and added.

### destroy 

***public function destroy():void***  
Destroy.

### get 

***public function get(id:String):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Returns a control by id or undefined it it wasn't found.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Control instance name. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Control instance or undefined.

### setActive 

***public function setActive(id:String, s:Boolean):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Sets the active state of a control by id.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Control id to set state on. |
| s:Boolean | Active state true/false. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Control instance that got activated or null if it wasn't found.

### setControlType 

***public function setControlType(n:string, c:function):function***  
Overrides a specific control type with a custom class.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:string | Name of the control to override for example button or dropmenu. |
| c:function | Class reference to use instead of the default one. |

**Returns**  
function - Same as the class reference.

### setDisabled 

***public function setDisabled(id:String, s:Boolean):[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html)***  
Sets the dsiabled state of a control by id.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Control id to set state on. |
| s:Boolean | Active state true/false. |

**Returns**  
[Control](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Control.html) - Control instance that got disabled or null if it wasn't found.