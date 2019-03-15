---
layout: default
title: tinyMCEPopup
---

|  |  |
| --- | --- |
| Class | tinyMCEPopup |
| Type | Singleton |

TinyMCE popup/dialog helper class. This gives you easy access to the parent editor instance and a bunch of other things. It's higly recommended that you load this script into your dialogs.

## Public Methods

| Method | Defined By |
| --- | --- |
| [alert](#alert)(t:String, cb:function, s:Object):void : <span class="static">[static]</span> Creates a alert dialog. | tinyMCEPopup |
| [close](#close)():void : <span class="static">[static]</span> Closes the current window. | tinyMCEPopup |
| [confirm](#confirm)(t:String, cb:function, s:Object):void : <span class="static">[static]</span> Creates a confirm dialog. | tinyMCEPopup |
| [execCommand](#execcommand)(cmd:String, ui:Boolean, val:Object, a:Object):void : <span class="static">[static]</span> Executed a command on editor that opened the dialog/popup. | tinyMCEPopup |
| [executeOnLoad](#executeonload)(s:String):void : <span class="static">[static]</span> Will executed the specified string when the page has been loaded. | tinyMCEPopup |
| [getLang](#getlang)(n:String, dv:String):String : <span class="static">[static]</span> Returns a language item by key. | tinyMCEPopup |
| [getParam](#getparam)(n:String, dv:String):String : <span class="static">[static]</span> Returns a editor parameter/config option value. | tinyMCEPopup |
| [getWin](#getwin)():Window : <span class="static">[static]</span> Returns the reference to the parent window that opened the dialog. | tinyMCEPopup |
| [getWindowArg](#getwindowarg)(n:String, dv:String):String : <span class="static">[static]</span> Returns a window argument/parameter by name. | tinyMCEPopup |
| [init](#init)():void : <span class="static">[static]</span> Initializes the popup this will be called automatically. | tinyMCEPopup |
| [openBrowser](#openbrowser)(element_id:string, type:string, option:string):void : <span class="static">[static]</span> Opens a filebrowser/imagebrowser this will set the output value from the browser as a value on the specified element. | tinyMCEPopup |
| [pickColor](#pickcolor)(e:DOMEvent, element_id:string):void : <span class="static">[static]</span> Executes a color picker on the specified element id. | tinyMCEPopup |
| [requireLangPack](#requirelangpack)():void : <span class="static">[static]</span> Loads a specific dialog language pack. | tinyMCEPopup |
| [resizeToInnerSize](#resizetoinnersize)():void : <span class="static">[static]</span> Resizes the dialog to the inner size of the window. | tinyMCEPopup |
| [restoreSelection](#restoreselection)():void : <span class="static">[static]</span> Restores any stored selection. | tinyMCEPopup |
| [storeSelection](#storeselection)():void : <span class="static">[static]</span> Stores the current editor selection for later restoration. | tinyMCEPopup |

## Public Events

| Event | Defined By |
| --- | --- |
| [onInit](#oninit)(editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html)) : <span class="static">[static]</span> Fires when the popup is initialized. | tinyMCEPopup |

## Method details

### alert 

***public static function alert(t:String, cb:function, s:Object):void***  
Creates a alert dialog. Please don't use the blocking behavior of this native version use the callback method instead then it can be extended.      

**Parameters**  

| Param | Detail |
| --- | --- |
| t:String | Title for the new alert dialog. |
| cb:function | Callback function to be executed after the user has selected ok. |
| s:Object | Optional scope to execute the callback in. |

### close 

***public static function close():void***  
Closes the current window.

### confirm 

***public static function confirm(t:String, cb:function, s:Object):void***  
Creates a confirm dialog. Please don't use the blocking behavior of this native version use the callback method instead then it can be extended.      

**Parameters**  

| Param | Detail |
| --- | --- |
| t:String | Title for the new confirm dialog. |
| cb:function | Callback function to be executed after the user has selected ok or cancel. |
| s:Object | Optional scope to execute the callback in. |

### execCommand 

***public static function execCommand(cmd:String, ui:Boolean, val:Object, a:Object):void***  
Executed a command on editor that opened the dialog/popup.      

**Parameters**  

| Param | Detail |
| --- | --- |
| cmd:String | Command to execute. |
| ui:Boolean | Optional boolean value if the UI for the command should be presented or not. |
| val:Object | Optional value to pass with the comman like an URL. |
| a:Object | Optional arguments object. |

### executeOnLoad 

***public static function executeOnLoad(s:String):void***  
Will executed the specified string when the page has been loaded. This function was added for compatibility with the 2.x branch.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:String | String to evalutate on init. |

### getLang 

***public static function getLang(n:String, dv:String):String***  
Returns a language item by key.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Language item like mydialog.something. |
| dv:String | Optional default value to return. |

**Returns**  
String - Language value for the item like "my string" or the default value if it wasn't found.

### getParam 

***public static function getParam(n:String, dv:String):String***  
Returns a editor parameter/config option value.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Name of the editor config option to retrive. |
| dv:String | Optional default value to return. |

**Returns**  
String - Parameter value or default value if it wasn't found.

### getWin 

***public static function getWin():Window***  
Returns the reference to the parent window that opened the dialog.      

**Returns**  
Window - Reference to the parent window that opened the dialog.

### getWindowArg 

***public static function getWindowArg(n:String, dv:String):String***  
Returns a window argument/parameter by name.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Name of the window argument to retrive. |
| dv:String | Optional default value to return. |

**Returns**  
String - Argument value or default value if it wasn't found.

### init 

***public static function init():void***  
Initializes the popup this will be called automatically.

### openBrowser 

***public static function openBrowser(element_id:string, type:string, option:string):void***  
Opens a filebrowser/imagebrowser this will set the output value from the browser as a value on the specified element.      

**Parameters**  

| Param | Detail |
| --- | --- |
| element_id:string | Id of the element to set value in. |
| type:string | Type of browser to open image/file/flash. |
| option:string | Option name to get the file_broswer_callback function name from. |

### pickColor 

***public static function pickColor(e:DOMEvent, element_id:string):void***  
Executes a color picker on the specified element id. When the user then selects a color it will be set as the value of the specified element.      

**Parameters**  

| Param | Detail |
| --- | --- |
| e:DOMEvent | DOM event object. |
| element_id:string | Element id to be filled with the color value from the picker. |

### requireLangPack 

***public static function requireLangPack():void***  
Loads a specific dialog language pack. If you pass in plugin_url as a arugment when you open the window it will load the <plugin url="">/langs/***_dlg.js lang pack file.***  
</plugin>

### resizeToInnerSize 

***public static function resizeToInnerSize():void***  
Resizes the dialog to the inner size of the window. This is needed since various browsers have different border sizes on windows.

### restoreSelection 

***public static function restoreSelection():void***  
Restores any stored selection. This can be useful since some browsers looses it's selection if a control element is selected/focused inside the dialogs.

### storeSelection 

***public static function storeSelection():void***  
Stores the current editor selection for later restoration. This can be useful since some browsers looses it's selection if a control element is selected/focused inside the dialogs.

## Event details

### onInit 

***public static event onInit(editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html))***  
Fires when the popup is initialized.      

**Parameters**  

| Param | Detail |
| --- | --- |
| editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) | Editor instance. |

**Example**