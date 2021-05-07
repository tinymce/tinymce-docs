---
layout: default
title: tinymce.html.DomParser
---

|  |  |
| --- | --- |
| Namespace | tinymce.html |
| Class | DomParser |

This class parses HTML code into a DOM like structure of nodes it will remove redundant whitespace and make sure that the node tree is valid according to the specified schema. So for example: <p>a<p>b</p>c</p> will become <p>a</p><p>b</p><p>c</p><span>Version:</span>3.4      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [DomParser](#domparser)(settings:Object, schema:[Schema](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Schema.html)) : Constructs a new DomParser instance. | DomParser |
| [addAttributeFilter](#addattributefilter)(callback:function):void : Adds a attribute filter function to the parser, the parser will collect nodes that has the specified attributes and then... | DomParser |
| [addNodeFilter](#addnodefilter)(callback:function):void : Adds a node filter function to the parser, the parser will collect the specified nodes by name and then execute the call... | DomParser |
| [parse](#parse)(html:String, args:Object):[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) : Parses the specified HTML string into a DOM like node tree and returns the result. | DomParser |

## Method details

### DomParser 

***public function DomParser(settings:Object, schema:[Schema](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Schema.html))***  
Constructs a new DomParser instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| settings:Object | Name/value collection of settings. comment, cdata, text, start and end are callbacks. |
| schema:[Schema](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Schema.html) | HTML Schema class to use when parsing. |

### addAttributeFilter 

***public function addAttributeFilter(callback:function):void***  
Adds a attribute filter function to the parser, the parser will collect nodes that has the specified attributes and then execute the callback ones it has finished parsing the document.      

**Parameters**  

| Param | Detail |
| --- | --- |
| callback:function | Callback function to execute once it has collected nodes. |

**Example**  

### addNodeFilter 

***public function addNodeFilter(callback:function):void***  
Adds a node filter function to the parser, the parser will collect the specified nodes by name and then execute the callback ones it has finished parsing the document.      

**Parameters**  

| Param | Detail |
| --- | --- |
| callback:function | Callback function to execute once it has collected nodes. |

**Example**  

### parse 

***public function parse(html:String, args:Object):[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html)***  
Parses the specified HTML string into a DOM like node tree and returns the result.      

**Parameters**  

| Param | Detail |
| --- | --- |
| html:String | Html string to sax parse. |
| args:Object | Optional args object that gets passed to all filter functions. |

**Returns**  
[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) - Root node containing the tree.      

**Example**