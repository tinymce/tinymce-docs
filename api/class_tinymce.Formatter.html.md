---
layout: default
title: tinymce.Formatter
---

|  |  |
| --- | --- |
| Namespace | tinymce |
| Class | Formatter |

Text formatter engine class. This class is used to apply formats like bold, italic, font size etc to the current selection or specific nodes. This engine was build to replace the browsers default formatting logic for execCommand due to it's inconsistant and buggy behavior.      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [apply](#apply)(name:String, vars:Object, node:Node):void : Applies the specified format to the current selection or specified node. | Formatter |
| [canApply](#canapply)(name:String):boolean : Returns true/false if the specified format can be applied to the current selection or not. | Formatter |
| [formatChanged](#formatchanged)(formats:String, callback:function, similar:Boolean):void : Executes the specified callback when the current selection matches the formats or not. | Formatter |
| [get](#get)(name:String):Array/Object : Returns the format by name or all formats if no name is specified. | Formatter |
| [match](#match)(name:String, vars:Object, node:Node):boolean : Matches the current selection or specified node against the specified format name. | Formatter |
| [matchAll](#matchall)(names:Array, vars:Object):Array : Matches the current selection against the array of formats and returns a new array with matching formats. | Formatter |
| [matchNode](#matchnode)(node:Node, name:String, vars:Object, similar:Boolean):Object : Return true/false if the specified node has the specified format. | Formatter |
| [register](#register)(name:Object/String, format:Object/Array):void : Registers a specific format by name. | Formatter |
| [remove](#remove)(name:String, vars:Object, node:Node/Range):void : Removes the specified format from the current selection or specified node. | Formatter |
| [toggle](#toggle)(name:String, vars:Object, node:Node):void : Toggles the specified format on/off. | Formatter |

## Method details

### apply 

***public function apply(name:String, vars:Object, node:Node):void***  
Applies the specified format to the current selection or specified node.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Name of format to apply. |
| vars:Object | Optional list of variables to replace within format before applying it. |
| node:Node | Optional node to apply the format to defaults to current selection. |

### canApply 

***public function canApply(name:String):boolean***  
Returns true/false if the specified format can be applied to the current selection or not. It will currently only check the state for selector formats, it returns true on all other format types.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Name of format to check. |

**Returns**  
boolean - true/false if the specified format can be applied to the current selection/node.

### formatChanged 

***public function formatChanged(formats:String, callback:function, similar:Boolean):void***  
Executes the specified callback when the current selection matches the formats or not.      

**Parameters**  

| Param | Detail |
| --- | --- |
| formats:String | Comma separated list of formats to check for. |
| callback:function | Callback with state and args when the format is changed/toggled on/off. |
| similar:Boolean | True/false state if the match should handle similar or exact formats. |

### get 

***public function get(name:String):Array/Object***  
Returns the format by name or all formats if no name is specified.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Optional name to retrive by. |

**Returns**  
Array/Object - Array/Object with all registred formats or a specific format.

### match 

***public function match(name:String, vars:Object, node:Node):boolean***  
Matches the current selection or specified node against the specified format name.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Name of format to match. |
| vars:Object | Optional list of variables to replace before checking it. |
| node:Node | Optional node to check. |

**Returns**  
boolean - true/false if the specified selection/node matches the format.

### matchAll 

***public function matchAll(names:Array, vars:Object):Array***  
Matches the current selection against the array of formats and returns a new array with matching formats.      

**Parameters**  

| Param | Detail |
| --- | --- |
| names:Array | Name of format to match. |
| vars:Object | Optional list of variables to replace before checking it. |

**Returns**  
Array - Array with matched formats.

### matchNode 

***public function matchNode(node:Node, name:String, vars:Object, similar:Boolean):Object***  
Return true/false if the specified node has the specified format.      

**Parameters**  

| Param | Detail |
| --- | --- |
| node:Node | Node to check the format on. |
| name:String | Format name to check. |
| vars:Object | Optional list of variables to replace before checking it. |
| similar:Boolean | Match format that has similar properties. |

**Returns**  
Object - Returns the format object it matches or undefined if it doesn't match.

### register 

***public function register(name:Object/String, format:Object/Array):void***  
Registers a specific format by name.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:Object/String | Name of the format for example "bold". |
| format:Object/Array | Optional format object or array of format variants can only be omitted if the first arg is an object. |

### remove 

***public function remove(name:String, vars:Object, node:Node/Range):void***  
Removes the specified format from the current selection or specified node.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Name of format to remove. |
| vars:Object | Optional list of variables to replace within format before removing it. |
| node:Node/Range | Optional node or DOM range to remove the format from defaults to current selection. |

### toggle 

***public function toggle(name:String, vars:Object, node:Node):void***  
Toggles the specified format on/off.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Name of format to apply/remove. |
| vars:Object | Optional list of variables to replace within format before applying/removing it. |
| node:Node | Optional node to apply the format to or remove from. Defaults to current selection. |