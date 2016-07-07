---
layout: default
title: tinymce.util.JSONRequest
---

|  |  |
| --- | --- |
| Namespace | tinymce.util |
| Class | JSONRequest |

This class enables you to use JSON-RPC to call backend methods.      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [JSONRequest](#jsonrequest)(s:Object) : Constructs a new JSONRequest instance. | JSONRequest |
| [send](#send)(o:Object):void : Sends a JSON-RPC call. | JSONRequest |
| [sendRPC](#sendrpc)(o:Object):void : <span class="static">[static]</span> Simple helper function to send a JSON-RPC request without the need to initialize an object. | JSONRequest |

## Method details

### JSONRequest 

***public function JSONRequest(s:Object)***  
Constructs a new JSONRequest instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:Object | Optional settings object. |

### send 

***public function send(o:Object):void***  
Sends a JSON-RPC call. Consult the Wiki API documentation for more details on what you can pass to this function.      

**Parameters**  

| Param | Detail |
| --- | --- |
| o:Object | Call object where there are three field id, method and params this object should also contain callbacks etc. |

### sendRPC 

***public static function sendRPC(o:Object):void***  
Simple helper function to send a JSON-RPC request without the need to initialize an object. Consult the Wiki API documentation for more details on what you can pass to this function.      

**Parameters**  

| Param | Detail |
| --- | --- |
| o:Object | Call object where there are three field id, method and params this object should also contain callbacks etc. |