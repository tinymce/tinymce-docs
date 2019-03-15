---
layout: default
title: tinymce
---

|  |  |
| --- | --- |
| Class | tinymce |
| Type | Singleton |

Core namespace with core functionality for the TinyMCE API all sub classes will be added to this namespace/object.      

**Example**  

## Public Properties

| Property | Defined By |
| --- | --- |
| [activeEditor](#activeeditor) : [Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) : Currently active editor instance. | tinymce |
| [baseURI](#baseuri) : [URI](https://www.tiny.cloud/docs-3x/api/util/class_tinymce.util.URI.html) : Absolute baseURI for the installation path of TinyMCE. | tinymce |
| [editors](#editors) : Object : Collection of editor instances. | tinymce |
| [i18n](#i18n) : Object : Collection of language pack data. | tinymce |
| [isAir](#isair) : Boolean : <span class="static">[static]</span> Constant that is true if the runtime is Adobe Air. | tinymce |
| [isGecko](#isgecko) : Boolean : <span class="static">[static]</span> Constant that is true if the browser is Gecko. | tinymce |
| [isIDevice](#isidevice) : Boolean : <span class="static">[static]</span> Constant that tells if the current browser is an iPhone or iPad. | tinymce |
| [isIE](#isie) : Boolean : <span class="static">[static]</span> Constant that is true if the browser is IE. | tinymce |
| [isIE6](#isie6) : Boolean : <span class="static">[static]</span> Constant that is true if the browser is IE 6 or older. | tinymce |
| [isIE7](#isie7) : Boolean : <span class="static">[static]</span> Constant that is true if the browser is IE 7. | tinymce |
| [isIE8](#isie8) : Boolean : <span class="static">[static]</span> Constant that is true if the browser is IE 8. | tinymce |
| [isIE9](#isie9) : Boolean : <span class="static">[static]</span> Constant that is true if the browser is IE 9. | tinymce |
| [isIOS5](#isios5) : Boolean : <span class="static">[static]</span> Constant that is true if the current browser is running on iOS 5 or greater. | tinymce |
| [isMac](#ismac) : Boolean : <span class="static">[static]</span> Constant that is true if the os is Mac OS. | tinymce |
| [isOpera](#isopera) : Boolean : <span class="static">[static]</span> Constant that is true if the browser is Opera. | tinymce |
| [isWebKit](#iswebkit) : Boolean : <span class="static">[static]</span> Constant that is true if the browser is WebKit (Safari/Chrome). | tinymce |
| [majorVersion](#majorversion) : String : <span class="static">[static]</span> Major version of TinyMCE build. | tinymce |
| [minorVersion](#minorversion) : String : <span class="static">[static]</span> Major version of TinyMCE build. | tinymce |
| [releaseDate](#releasedate) : String : <span class="static">[static]</span> Release date of TinyMCE build. | tinymce |

## Public Methods

| Method | Defined By |
| --- | --- |
| [add](#add)(editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html)):[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) : Adds an editor instance to the editor collection. | tinymce |
| [addI18n](#addi18n)(p:String, o:Object):void : Adds a language pack, this gets called by the loaded language files like en. | tinymce |
| [addUnload](#addunload)(f:function, s:Object):function : <span class="static">[static]</span> Adds an unload handler to the document. | tinymce |
| [create](#create)(s:String, p:Object, root:Object):void : <span class="static">[static]</span> Creates a class, subclass or static singleton. | tinymce |
| [createNS](#createns)(n:String, o:Object):Object : <span class="static">[static]</span> Creates a namespace on a specific object. | tinymce |
| [each](#each)(o:Object, cb:function, s:Object):void : <span class="static">[static]</span> Performs an iteration of all items in a collection such as an object or array. | tinymce |
| [execCommand](#execcommand)(c:String, u:Boolean, v:String):Boolean : Executes a specific command on the currently active editor. | tinymce |
| [execInstanceCommand](#execinstancecommand)(id:String, c:String, u:Boolean, v:String):BooleanDeprecated: Use the execCommand method of a editor instance instead. | tinymce |
| [explode](#explode)(s:string, d:string):void : <span class="static">[static]</span> Splits a string but removes the whitespace before and after each value. | tinymce |
| [extend](#extend)(obj:Object, ext..n:Object):Object : <span class="static">[static]</span> Extends an object with the specified other object(s). | tinymce |
| [get](#get)(id:String/Number):[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) : Returns a editor instance by id. | tinymce |
| [getInstanceById](#getinstancebyid)(id:String):[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html)Deprecated: Use get method instead. | tinymce |
| [grep](#grep)(a:Array, f:function):Array : <span class="static">[static]</span> Filters out items from the input array by calling the specified function for each item. | tinymce |
| [inArray](#inarray)(a:Array, v:Object):Number/String : <span class="static">[static]</span> Returns the index of a value in an array, this method will return -1 if the item wasn't found. | tinymce |
| [init](#init)(s:Object):void : Initializes a set of editors. | tinymce |
| [is](#is)(o:Object, t:string):Boolean : <span class="static">[static]</span> Checks if a object is of a specific type for example an array. | tinymce |
| [isArray](#isarray)(obj:Object):boolean : <span class="static">[static]</span> Returns true/false if the object is an array or not. | tinymce |
| [makeMap](#makemap)(items:Array/String, delim:String, map:Object):Object : <span class="static">[static]</span> Makes a name/object map out of an array with names. | tinymce |
| [map](#map)(a:Array, f:function):Array : <span class="static">[static]</span> Creates a new array by the return value of each iteration function call. | tinymce |
| [remove](#remove)(e:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html)):[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) : Removes a editor instance from the collection. | tinymce |
| [removeUnload](#removeunload)(f:function):function : <span class="static">[static]</span> Removes the specified function form the unload handler list. | tinymce |
| [resolve](#resolve)(n:String, o:Object):Object : <span class="static">[static]</span> Resolves a string and returns the object from a specific structure. | tinymce |
| [triggerSave](#triggersave)():void : Calls the save method on all editor instances in the collection. | tinymce |
| [trim](#trim)(s:String):String : <span class="static">[static]</span> Removes whitespace from the beginning and end of a string. | tinymce |
| [walk](#walk)(o:Object, f:function, n:String, s:String):void : <span class="static">[static]</span> Executed the specified function for each item in a object tree. | tinymce |

## Public Events

| Event | Defined By |
| --- | --- |
| [onAddEditor](#onaddeditor)(sender:[tinymce](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html), editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html)) : Fires when a new editor instance is added to the tinymce collection. | tinymce |
| [onRemoveEditor](#onremoveeditor)(sender:[tinymce](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html), editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html)) : Fires when an editor instance is removed from the tinymce collection. | tinymce |

## Property details

### activeEditor 

***public activeEditor : [Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html)***  
Currently active editor instance.      

**Example**  

### baseURI 

***public baseURI : [URI](https://www.tiny.cloud/docs-3x/api/util/class_tinymce.util.URI.html)***  
Absolute baseURI for the installation path of TinyMCE.

### editors 

***public editors : Object***  
Collection of editor instances.      

**Example**  

### i18n 

***public i18n : Object***  
Collection of language pack data.

### isAir 

***public static isAir : Boolean***  
Constant that is true if the runtime is Adobe Air.

### isGecko 

***public static isGecko : Boolean***  
Constant that is true if the browser is Gecko.

### isIDevice 

***public static isIDevice : Boolean***  
Constant that tells if the current browser is an iPhone or iPad.

### isIE 

***public static isIE : Boolean***  
Constant that is true if the browser is IE.

### isIE6 

***public static isIE6 : Boolean***  
Constant that is true if the browser is IE 6 or older.

### isIE7 

***public static isIE7 : Boolean***  
Constant that is true if the browser is IE 7.

### isIE8 

***public static isIE8 : Boolean***  
Constant that is true if the browser is IE 8.

### isIE9 

***public static isIE9 : Boolean***  
Constant that is true if the browser is IE 9.

### isIOS5 

***public static isIOS5 : Boolean***  
Constant that is true if the current browser is running on iOS 5 or greater.

### isMac 

***public static isMac : Boolean***  
Constant that is true if the os is Mac OS.

### isOpera 

***public static isOpera : Boolean***  
Constant that is true if the browser is Opera.

### isWebKit 

***public static isWebKit : Boolean***  
Constant that is true if the browser is WebKit (Safari/Chrome).

### majorVersion 

***public static majorVersion : String***  
Major version of TinyMCE build.

### minorVersion 

***public static minorVersion : String***  
Major version of TinyMCE build.

### releaseDate 

***public static releaseDate : String***  
Release date of TinyMCE build.

## Method details

### add 

***public function add(editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html)):[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html)***  
Adds an editor instance to the editor collection. This will also set it as the active editor.      

**Parameters**  

| Param | Detail |
| --- | --- |
| editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) | Editor instance to add to the collection. |

**Returns**  
[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) - The same instance that got passed in.

### addI18n 

***public function addI18n(p:String, o:Object):void***  
Adds a language pack, this gets called by the loaded language files like en.js.      

**Parameters**  

| Param | Detail |
| --- | --- |
| p:String | Prefix for the language items. For example en.myplugin |
| o:Object | Name/Value collection with items to add to the language group. |

### addUnload 

***public static function addUnload(f:function, s:Object):function***  
Adds an unload handler to the document. This handler will be executed when the document gets unloaded. This method is useful for dealing with browser memory leaks where it might be vital to remove DOM references etc.      

**Parameters**  

| Param | Detail |
| --- | --- |
| f:function | Function to execute before the document gets unloaded. |
| s:Object | Optional scope to execute the function in. |

**Returns**  
function - Returns the specified unload handler function.      

**Example**  

### create 

***public static function create(s:String, p:Object, root:Object):void***  
Creates a class, subclass or static singleton. More details on this method can be found in the Wiki.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:String | Class name, inheritage and prefix. |
| p:Object | Collection of methods to add to the class. |
| root:Object | Optional root object defaults to the global window object. |

**Example**  

### createNS 

***public static function createNS(n:String, o:Object):Object***  
Creates a namespace on a specific object.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Namespace to create for example a.b.c.d. |
| o:Object | Optional object to add namespace to, defaults to window. |

**Returns**  
Object - New namespace object the last item in path.      

**Example**  

### each 

***public static function each(o:Object, cb:function, s:Object):void***  
Performs an iteration of all items in a collection such as an object or array. This method will execure the callback function for each item in the collection, if the callback returns false the iteration will terminate. The callback has the following format: cb(value, key_or_index).      

**Parameters**  

| Param | Detail |
| --- | --- |
| o:Object | Collection to iterate. |
| cb:function | Callback function to execute for each item. |
| s:Object | Optional scope to execute the callback in. |

**Example**  

### execCommand 

***public function execCommand(c:String, u:Boolean, v:String):Boolean***  
Executes a specific command on the currently active editor.      

**Parameters**  

| Param | Detail |
| --- | --- |
| c:String | Command to perform for example Bold. |
| u:Boolean | Optional boolean state if a UI should be presented for the command or not. |
| v:String | Optional value parameter like for example an URL to a link. |

**Returns**  
Boolean - true/false if the command was executed or not.

### execInstanceCommand 

***public function execInstanceCommand(id:String, c:String, u:Boolean, v:String):Boolean***  
Deprecated: Use the execCommand method of a editor instance instead.Executes a command on a specific editor by id. This method was added for compatibility with the 2.x branch.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Editor id to perform the command on. |
| c:String | Command to perform for example Bold. |
| u:Boolean | Optional boolean state if a UI should be presented for the command or not. |
| v:String | Optional value parameter like for example an URL to a link. |

**Returns**  
Boolean - true/false if the command was executed or not.

### explode 

***public static function explode(s:string, d:string):void***  
Splits a string but removes the whitespace before and after each value.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:string | String to split. |
| d:string | Delimiter to split by. |

**Example**  

### extend 

***public static function extend(obj:Object, ext..n:Object):Object***  
Extends an object with the specified other object(s).      

**Parameters**  

| Param | Detail |
| --- | --- |
| obj:Object | Object to extend with new items. |
| ext..n:Object | Object(s) to extend the specified object with. |

**Returns**  
Object - o New extended object, same reference as the input object.      

**Example**  

### get 

***public function get(id:String/Number):[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html)***  
Returns a editor instance by id.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String/Number | Editor instance id or index to return. |

**Returns**  
[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) - Editor instance to return.      

**Example**  

### getInstanceById 

***public function getInstanceById(id:String):[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html)***  
Deprecated: Use get method instead.Returns a editor instance by id. This method was added for compatibility with the 2.x branch.      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Editor instance id to return. |

**Returns**  
[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) - Editor instance to return.      

**See Also**  

*   [get](#get)

### grep 

***public static function grep(a:Array, f:function):Array***  
Filters out items from the input array by calling the specified function for each item. If the function returns false the item will be excluded if it returns true it will be included.      

**Parameters**  

| Param | Detail |
| --- | --- |
| a:Array | Array of items to loop though. |
| f:function | Function to call for each item. Include/exclude depends on it's return value. |

**Returns**  
Array - New array with values imported and filtered based in input.      

**Example**  

### inArray 

***public static function inArray(a:Array, v:Object):Number/String***  
Returns the index of a value in an array, this method will return -1 if the item wasn't found.      

**Parameters**  

| Param | Detail |
| --- | --- |
| a:Array | Array/Object to search for value in. |
| v:Object | Value to check for inside the array. |

**Returns**  
Number/String - Index of item inside the array inside an object. Or -1 if it wasn't found.      

**Example**  

### init 

***public function init(s:Object):void***  
Initializes a set of editors. This method will create a bunch of editors based in the input.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:Object | Settings object to be passed to each editor instance. |

**Example**  

### is 

***public static function is(o:Object, t:string):Boolean***  
Checks if a object is of a specific type for example an array.      

**Parameters**  

| Param | Detail |
| --- | --- |
| o:Object | Object to check type of. |
| t:string | Optional type to check for. |

**Returns**  
Boolean - true/false if the object is of the specified type.

### isArray 

***public static function isArray(obj:Object):boolean***  
Returns true/false if the object is an array or not.      

**Parameters**  

| Param | Detail |
| --- | --- |
| obj:Object | Object to check. |

**Returns**  
boolean - true/false state if the object is an array or not.

### makeMap 

***public static function makeMap(items:Array/String, delim:String, map:Object):Object***  
Makes a name/object map out of an array with names.      

**Parameters**  

| Param | Detail |
| --- | --- |
| items:Array/String | Items to make map out of. |
| delim:String | Optional delimiter to split string by. |
| map:Object | Optional map to add items to. |

**Returns**  
Object - Name/value map of items.

### map 

***public static function map(a:Array, f:function):Array***  
Creates a new array by the return value of each iteration function call. This enables you to convert one array list into another.      

**Parameters**  

| Param | Detail |
| --- | --- |
| a:Array | Array of items to iterate. |
| f:function | Function to call for each item. It's return value will be the new value. |

**Returns**  
Array - Array with new values based on function return values.

### remove 

***public function remove(e:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html)):[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html)***  
Removes a editor instance from the collection.      

**Parameters**  

| Param | Detail |
| --- | --- |
| e:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) | Editor instance to remove. |

**Returns**  
[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) - The editor that got passed in will be return if it was found otherwise null.

### removeUnload 

***public static function removeUnload(f:function):function***  
Removes the specified function form the unload handler list.      

**Parameters**  

| Param | Detail |
| --- | --- |
| f:function | Function to remove from unload handler list. |

**Returns**  
function - Removed function name or null if it wasn't found.

### resolve 

***public static function resolve(n:String, o:Object):Object***  
Resolves a string and returns the object from a specific structure.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Path to resolve for example a.b.c.d. |
| o:Object | Optional object to search though, defaults to window. |

**Returns**  
Object - Last object in path or null if it couldn't be resolved.      

**Example**  

### triggerSave 

***public function triggerSave():void***  
Calls the save method on all editor instances in the collection. This can be useful when a form is to be submitted.      

**Example**  

### trim 

***public static function trim(s:String):String***  
Removes whitespace from the beginning and end of a string.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:String | String to remove whitespace from. |

**Returns**  
String - New string with removed whitespace.

### walk 

***public static function walk(o:Object, f:function, n:String, s:String):void***  
Executed the specified function for each item in a object tree.      

**Parameters**  

| Param | Detail |
| --- | --- |
| o:Object | Object tree to walk though. |
| f:function | Function to call for each item. |
| n:String | Optional name of collection inside the objects to walk for example childNodes. |
| s:String | Optional scope to execute the function in. |

## Event details

### onAddEditor 

***public event onAddEditor(sender:[tinymce](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html), editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html))***  
Fires when a new editor instance is added to the tinymce collection.      

**Parameters**  

| Param | Detail |
| --- | --- |
| sender:[tinymce](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html) | TinyMCE root class/namespace. |
| editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) | Editor instance. |

**Example**  

### onRemoveEditor 

***public event onRemoveEditor(sender:[tinymce](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html), editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html))***  
Fires when an editor instance is removed from the tinymce collection.      

**Parameters**  

| Param | Detail |
| --- | --- |
| sender:[tinymce](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html) | TinyMCE root class/namespace. |
| editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) | Editor instance. |