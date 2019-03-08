---
layout: default
title: tinymce.html.Serializer
---

|  |  |
| --- | --- |
| Namespace | tinymce.html |
| Class | Serializer |

This class is used to serialize down the DOM tree into a string using a Writer instance.<span>Version:</span>3.4      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [Serializer](#serializer)(settings:Object, schema:[Schema](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Schema.html)) : Constructs a new Serializer instance. | Serializer |
| [serialize](#serialize)(node:[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html)):String : Serializes the specified node into a string. | Serializer |

## Method details

### Serializer 

***public function Serializer(settings:Object, schema:[Schema](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Schema.html))***  
Constructs a new Serializer instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| settings:Object | Name/value settings object. |
| schema:[Schema](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Schema.html) | Schema instance to use. |

### serialize 

***public function serialize(node:[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html)):String***  
Serializes the specified node into a string.      

**Parameters**  

| Param | Detail |
| --- | --- |
| node:[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) | Node instance to serialize. |

**Returns**  
String - String with HTML based on DOM tree.      

**Example**