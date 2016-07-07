---
layout: default
title: tinymce.dom.ScriptLoader
---

|  |  |
| --- | --- |
| Namespace | tinymce.dom |
| Class | ScriptLoader |

This class handles asynchronous/synchronous loading of JavaScript files it will execute callbacks when various items gets loaded. This class is useful to load external JavaScript files.      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [add](#add)(url:String, callback:function, scope:Object):void : Adds a specific script to the load queue of the script loader. | ScriptLoader |
| [isDone](#isdone)(url:String):Object : Returns true/false if a script has been loaded or not. | ScriptLoader |
| [load](#load)(url:String, callback:function, scope:Object):void : Loads a specific script directly without adding it to the load queue. | ScriptLoader |
| [loadQueue](#loadqueue)(callback:function, scope:Object):void : Starts the loading of the queue. | ScriptLoader |
| [loadScripts](#loadscripts)(scripts:Array, callback:function, scope:Object):void : Loads the specified queue of files and executes the callback ones they are loaded. | ScriptLoader |
| [markDone](#markdone)(u:string):void : Marks a specific script to be loaded. | ScriptLoader |

## Method details

### add 

***public function add(url:String, callback:function, scope:Object):void***  
Adds a specific script to the load queue of the script loader.      

**Parameters**  

| Param | Detail |
| --- | --- |
| url:String | Absolute URL to script to add. |
| callback:function | Optional callback function to execute ones this script gets loaded. |
| scope:Object | Optional scope to execute callback in. |

### isDone 

***public function isDone(url:String):Object***  
Returns true/false if a script has been loaded or not.      

**Parameters**  

| Param | Detail |
| --- | --- |
| url:String | URL to check for. |

**Returns**  
Object - [Boolean} true/false if the URL is loaded.

### load 

***public function load(url:String, callback:function, scope:Object):void***  
Loads a specific script directly without adding it to the load queue.      

**Parameters**  

| Param | Detail |
| --- | --- |
| url:String | Absolute URL to script to add. |
| callback:function | Optional callback function to execute ones this script gets loaded. |
| scope:Object | Optional scope to execute callback in. |

### loadQueue 

***public function loadQueue(callback:function, scope:Object):void***  
Starts the loading of the queue.      

**Parameters**  

| Param | Detail |
| --- | --- |
| callback:function | Optional callback to execute when all queued items are loaded. |
| scope:Object | Optional scope to execute the callback in. |

### loadScripts 

***public function loadScripts(scripts:Array, callback:function, scope:Object):void***  
Loads the specified queue of files and executes the callback ones they are loaded. This method is generally not used outside this class but it might be useful in some scenarios.      

**Parameters**  

| Param | Detail |
| --- | --- |
| scripts:Array | Array of queue items to load. |
| callback:function | Optional callback to execute ones all items are loaded. |
| scope:Object | Optional scope to execute callback in. |

### markDone 

***public function markDone(u:string):void***  
Marks a specific script to be loaded. This can be useful if a script got loaded outside the script loader or to skip it from loading some script.      

**Parameters**  

| Param | Detail |
| --- | --- |
| u:string | Absolute URL to the script to mark as loaded. |