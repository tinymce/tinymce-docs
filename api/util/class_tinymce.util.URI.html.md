---
layout: default
title: tinymce.util.URI
---

|  |  |
| --- | --- |
| Namespace | tinymce.util |
| Class | URI |

This class handles parsing, modification and serialization of URI/URL strings.

## Public Methods

| Method | Defined By |
| --- | --- |
| [URI](#uri)(u:String, s:Object) : Constucts a new URI instance. | URI |
| [getURI](#geturi)(nh:Boolean):void : Returns the full URI of the internal structure. | URI |
| [setPath](#setpath)(p:string):void : Sets the internal path part of the URI. | URI |
| [toAbsolute](#toabsolute)(u:String, nh:Boolean):String : Converts the specified URI into a absolute URI based on the current URI instance location. | URI |
| [toAbsPath](#toabspath)(base:String, path:String):void : Converts a relative path into a absolute path. | URI |
| [toRelative](#torelative)(u:String):String : Converts the specified URI into a relative URI based on the current URI instance location. | URI |
| [toRelPath](#torelpath)(base:String, path:String):void : Converts a absolute path into a relative path. | URI |

## Method details

### URI 

***public function URI(u:String, s:Object)***  
Constucts a new URI instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| u:String | URI string to parse. |
| s:Object | Optional settings object. |

### getURI 

***public function getURI(nh:Boolean):void***  
Returns the full URI of the internal structure.      

**Parameters**  

| Param | Detail |
| --- | --- |
| nh:Boolean | Optional no host and protocol part. Defaults to false. |

### setPath 

***public function setPath(p:string):void***  
Sets the internal path part of the URI.      

**Parameters**  

| Param | Detail |
| --- | --- |
| p:string | Path string to set. |

### toAbsolute 

***public function toAbsolute(u:String, nh:Boolean):String***  
Converts the specified URI into a absolute URI based on the current URI instance location.      

**Parameters**  

| Param | Detail |
| --- | --- |
| u:String | URI to convert into a relative path/URI. |
| nh:Boolean | No host and protocol prefix. |

**Returns**  
String - Absolute URI from the point specified in the current URI instance.      

**Example**  

### toAbsPath 

***public function toAbsPath(base:String, path:String):void***  
Converts a relative path into a absolute path.      

**Parameters**  

| Param | Detail |
| --- | --- |
| base:String | Base point to convert the path from. |
| path:String | Relative path to convert into an absolute path. |

### toRelative 

***public function toRelative(u:String):String***  
Converts the specified URI into a relative URI based on the current URI instance location.      

**Parameters**  

| Param | Detail |
| --- | --- |
| u:String | URI to convert into a relative path/URI. |

**Returns**  
String - Relative URI from the point specified in the current URI instance.      

**Example**  

### toRelPath 

***public function toRelPath(base:String, path:String):void***  
Converts a absolute path into a relative path.      

**Parameters**  

| Param | Detail |
| --- | --- |
| base:String | Base point to convert the path from. |
| path:String | Absolute path to convert into a relative path. |