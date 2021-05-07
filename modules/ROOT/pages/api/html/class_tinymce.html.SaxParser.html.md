---
layout: default
title: tinymce.html.SaxParser
---

|  |  |
| --- | --- |
| Namespace | tinymce.html |
| Class | SaxParser |
| Type | Singleton |

Entity encoder class.<span>Version:</span>3.4      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [SaxParser](#saxparser)(settings:Object, schema:[Schema](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Schema.html)) : Constructs a new SaxParser instance. | SaxParser |
| [encodeAllRaw](#encodeallraw)(text:String):String : <span class="static">[static]</span> Encoded the specified text with both the attributes and text entities. | SaxParser |
| [encodeNamed](#encodenamed)(text:String, attr:Boolean, entities:Object):String : <span class="static">[static]</span> Encodes the specified string using named entities. | SaxParser |
| [encodeNumeric](#encodenumeric)(text:String, attr:Boolean):String : <span class="static">[static]</span> Encodes the specified string using numeric entities. | SaxParser |
| [encodeRaw](#encoderaw)(text:String, attr:Boolean):String : <span class="static">[static]</span> Encodes the specified string using raw entities. | SaxParser |
| [getEncodeFunc](#getencodefunc)(name:String, entities:String):function : <span class="static">[static]</span> Returns an encode function based on the name(s) and it's optional entities. | SaxParser |
| [parse](#parse)(html:String):void : Parses the specified HTML string and executes the callbacks for each item it finds. | SaxParser |

## Method details

### SaxParser 

***public function SaxParser(settings:Object, schema:[Schema](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Schema.html))***  
Constructs a new SaxParser instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| settings:Object | Name/value collection of settings. comment, cdata, text, start and end are callbacks. |
| schema:[Schema](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Schema.html) | HTML Schema class to use when parsing. |

### encodeAllRaw 

***public static function encodeAllRaw(text:String):String***  
Encoded the specified text with both the attributes and text entities. This function will produce larger text contents since it doesn't know if the context is within a attribute or text node. This was added for compatibility and is exposed as the DOMUtils.encode function.      

**Parameters**  

| Param | Detail |
| --- | --- |
| text:String | Text to encode. |

**Returns**  
String - Entity encoded text.

### encodeNamed 

***public static function encodeNamed(text:String, attr:Boolean, entities:Object):String***  
Encodes the specified string using named entities. The core entities will be encoded as named ones but all non lower ascii characters will be encoded into named entities.      

**Parameters**  

| Param | Detail |
| --- | --- |
| text:String | Text to encode. |
| attr:Boolean | Optional flag to specify if the text is attribute contents. |
| entities:Object | Optional parameter with entities to use. |

**Returns**  
String - Entity encoded text.

### encodeNumeric 

***public static function encodeNumeric(text:String, attr:Boolean):String***  
Encodes the specified string using numeric entities. The core entities will be encoded as named ones but all non lower ascii characters will be encoded into numeric entities.      

**Parameters**  

| Param | Detail |
| --- | --- |
| text:String | Text to encode. |
| attr:Boolean | Optional flag to specify if the text is attribute contents. |

**Returns**  
String - Entity encoded text.

### encodeRaw 

***public static function encodeRaw(text:String, attr:Boolean):String***  
Encodes the specified string using raw entities. This means only the required XML base entities will be endoded.      

**Parameters**  

| Param | Detail |
| --- | --- |
| text:String | Text to encode. |
| attr:Boolean | Optional flag to specify if the text is attribute contents. |

**Returns**  
String - Entity encoded text.

### getEncodeFunc 

***public static function getEncodeFunc(name:String, entities:String):function***  
Returns an encode function based on the name(s) and it's optional entities.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Comma separated list of encoders for example named,numeric. |
| entities:String | Optional parameter with entities to use instead of the built in set. |

**Returns**  
function - Encode function to be used.

### parse 

***public function parse(html:String):void***  
Parses the specified HTML string and executes the callbacks for each item it finds.      

**Parameters**  

| Param | Detail |
| --- | --- |
| html:String | Html string to sax parse. |

**Example**