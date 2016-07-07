---
layout: default
title: tinymce.util.JSON
---

|  |  |
| --- | --- |
| Namespace | tinymce.util |
| Class | JSON |
| Type | Singleton |

JSON parser and serializer class.      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [parse](#parse)(s:string):Object : <span class="static">[static]</span> Unserializes/parses the specified JSON string into a object. | JSON |
| [serialize](#serialize)(obj:Object, quote:String):string : <span class="static">[static]</span> Serializes the specified object as a JSON string. | JSON |

## Method details

### parse 

***public static function parse(s:string):Object***  
Unserializes/parses the specified JSON string into a object.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:string | JSON String to parse into a JavaScript object. |

**Returns**  
Object - Object from input JSON string or undefined if it failed.

### serialize 

***public static function serialize(obj:Object, quote:String):string***  
Serializes the specified object as a JSON string.      

**Parameters**  

| Param | Detail |
| --- | --- |
| obj:Object | Object to serialize as a JSON string. |
| quote:String | Optional quote string defaults to ". |

**Returns**  
string - JSON string serialized from input.