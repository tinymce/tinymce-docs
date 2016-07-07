---
layout: default
title: tinymce.util.Cookie
---

|  |  |
| --- | --- |
| Namespace | tinymce.util |
| Class | Cookie |
| Type | Singleton |

This class contains simple cookie manangement functions.      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [get](#get)(n:String):String : <span class="static">[static]</span> Gets the raw data of a cookie by name. | Cookie |
| [getHash](#gethash)(n:String):Object : <span class="static">[static]</span> Parses the specified query string into an name/value object. | Cookie |
| [remove](#remove)(name:String, path:Strong, domain:Strong):void : <span class="static">[static]</span> Removes/deletes a cookie by name. | Cookie |
| [set](#set)(n:String, v:String, e:Date, p:String, d:String, s:String):void : <span class="static">[static]</span> Sets a raw cookie string. | Cookie |
| [setHash](#sethash)(n:String, v:Object, e:Date, p:String, d:String, s:String):void : <span class="static">[static]</span> Sets a hashtable name/value object to a cookie. | Cookie |

## Method details

### get 

***public static function get(n:String):String***  
Gets the raw data of a cookie by name.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Name of cookie to retrive. |

**Returns**  
String - Cookie data string.

### getHash 

***public static function getHash(n:String):Object***  
Parses the specified query string into an name/value object.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | String to parse into a n Hashtable object. |

**Returns**  
Object - Name/Value object with items parsed from querystring.

### remove 

***public static function remove(name:String, path:Strong, domain:Strong):void***  
Removes/deletes a cookie by name.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Cookie name to remove/delete. |
| path:Strong | Optional path to remove the cookie from. |
| domain:Strong | Optional domain to restrict the cookie to. |

### set 

***public static function set(n:String, v:String, e:Date, p:String, d:String, s:String):void***  
Sets a raw cookie string.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Name of the cookie. |
| v:String | Raw cookie data. |
| e:Date | Optional date object for the expiration of the cookie. |
| p:String | Optional path to restrict the cookie to. |
| d:String | Optional domain to restrict the cookie to. |
| s:String | Is the cookie secure or not. |

### setHash 

***public static function setHash(n:String, v:Object, e:Date, p:String, d:String, s:String):void***  
Sets a hashtable name/value object to a cookie.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Name of the cookie. |
| v:Object | Hashtable object to set as cookie. |
| e:Date | Optional date object for the expiration of the cookie. |
| p:String | Optional path to restrict the cookie to. |
| d:String | Optional domain to restrict the cookie to. |
| s:String | Is the cookie secure or not. |