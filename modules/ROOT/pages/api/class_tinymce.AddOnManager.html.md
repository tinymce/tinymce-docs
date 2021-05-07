---
layout: default
title: tinymce.AddOnManager
---

|  |  |
| --- | --- |
| Namespace | tinymce |
| Class | AddOnManager |

This class handles the loading of themes/plugins or other add-ons and their language packs.

## Public Methods

| Method | Defined By |
| --- | --- |
| [add](#add)(id:String, o:[Theme](https://www.tiny.cloud/docs-3x/api/class_tinymce.Theme.html)/[Plugin](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.Plugin.html)):[Theme](https://www.tiny.cloud/docs-3x/api/class_tinymce.Theme.html)/[Plugin](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.Plugin.html) : Adds a instance of the add-on by it's short name. | AddOnManager |
| [get](#get)(n:String):[Theme](https://www.tiny.cloud/docs-3x/api/class_tinymce.Theme.html)/[Plugin](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.Plugin.html) : Returns the specified add on by the short name. | AddOnManager |
| [load](#load)(n:String, u:String, cb:function, s:Object):void : Loads an add-on from a specific url. | AddOnManager |
| [requireLangPack](#requirelangpack)(n:String):void : Loads a language pack for the specified add-on. | AddOnManager |

## Public Events

| Event | Defined By |
| --- | --- |
| [onAdd](#onadd)() : Fires when a item is added. | AddOnManager |

## Method details

### add 

***public function add(id:String, o:[Theme](https://www.tiny.cloud/docs-3x/api/class_tinymce.Theme.html)/[Plugin](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.Plugin.html)):[Theme](https://www.tiny.cloud/docs-3x/api/class_tinymce.Theme.html)/[Plugin](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.Plugin.html)***  
Adds a instance of the add-on by it's short name.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Short name/id for the add-on. |
| o:[Theme](https://www.tiny.cloud/docs-3x/api/class_tinymce.Theme.html)/[Plugin](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.Plugin.html) | Theme or plugin to add. |

**Returns**  
[Theme](https://www.tiny.cloud/docs-3x/api/class_tinymce.Theme.html)/[Plugin](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.Plugin.html) - The same theme or plugin instance that got passed in.      

**Example**  

### get 

***public function get(n:String):[Theme](https://www.tiny.cloud/docs-3x/api/class_tinymce.Theme.html)/[Plugin](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.Plugin.html)***  
Returns the specified add on by the short name.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Add-on to look for. |

**Returns**  
[Theme](https://www.tiny.cloud/docs-3x/api/class_tinymce.Theme.html)/[Plugin](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.Plugin.html) - Theme or plugin add-on instance or undefined.

### load 

***public function load(n:String, u:String, cb:function, s:Object):void***  
Loads an add-on from a specific url.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Short name of the add-on that gets loaded. |
| u:String | URL to the add-on that will get loaded. |
| cb:function | Optional callback to execute ones the add-on is loaded. |
| s:Object | Optional scope to execute the callback in. |

**Example**  

### requireLangPack 

***public function requireLangPack(n:String):void***  
Loads a language pack for the specified add-on.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Short name of the add-on. |

## Event details

### onAdd 

***public event onAdd()***  
Fires when a item is added.