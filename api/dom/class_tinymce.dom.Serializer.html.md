---
layout: default
title: tinymce.dom.Serializer
---

|  |  |
| --- | --- |
| Namespace | tinymce.dom |
| Class | Serializer |

This class is used to serialize DOM trees into a string. Consult the TinyMCE Wiki API for more details and examples on how to use this class.

## Public Methods

| Method | Defined By |
| --- | --- |
| [Serializer](#serializer)(settings:Object, dom:[DOMUtils](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.DOMUtils.html), schema:[Schema](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Schema.html)) : Constucts a new DOM serializer class. | Serializer |
| [addAttributeFilter](#addattributefilter)(callback:function):void : Adds a attribute filter function to the parser used by the serializer, the parser will collect nodes that has the specif... | Serializer |
| [addNodeFilter](#addnodefilter)(callback:function):void : Adds a node filter function to the parser used by the serializer, the parser will collect the specified nodes by name an... | Serializer |
| [addRules](#addrules)(rules:String):void : Adds valid elements rules to the serializers schema instance this enables you to specify things like what elements shoul... | Serializer |
| [serialize](#serialize)(node:DOMNode, args:Object):void : Serializes the specified browser DOM node into a HTML string. | Serializer |
| [setRules](#setrules)(rules:String):void : Sets the valid elements rules to the serializers schema instance this enables you to specify things like what elements s... | Serializer |

## Public Events

| Event | Defined By |
| --- | --- |
| [onPostProcess](#onpostprocess)(sender:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html), obj:Object) : Fires when the Serializer does a postProcess on the contents. | Serializer |
| [onPreProcess](#onpreprocess)(sender:[Serializer](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Serializer.html), args:Object) : This event gets executed before a HTML fragment gets serialized into a HTML string. | Serializer |
| [onPreProcess](#onpreprocess)(sender:[Serializer](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Serializer.html), args:Object) : This event gets executed after a HTML fragment has been serialized into a HTML string. | Serializer |
| [onPreProcess](#onpreprocess)(sender:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html), obj:Object) : Fires when the Serializer does a preProcess on the contents. | Serializer |

## Method details

### Serializer 

***public function Serializer(settings:Object, dom:[DOMUtils](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.DOMUtils.html), schema:[Schema](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Schema.html))***  
Constucts a new DOM serializer class.      

**Parameters**  

| Param | Detail |
| --- | --- |
| settings:Object | Serializer settings object. |
| dom:[DOMUtils](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.DOMUtils.html) | DOMUtils instance reference. |
| schema:[Schema](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Schema.html) | Optional schema reference. |

### addAttributeFilter 

***public function addAttributeFilter(callback:function):void***  
Adds a attribute filter function to the parser used by the serializer, the parser will collect nodes that has the specified attributes and then execute the callback ones it has finished parsing the document.      

**Parameters**  

| Param | Detail |
| --- | --- |
| callback:function | Callback function to execute once it has collected nodes. |

**Example**  

### addNodeFilter 

***public function addNodeFilter(callback:function):void***  
Adds a node filter function to the parser used by the serializer, the parser will collect the specified nodes by name and then execute the callback ones it has finished parsing the document.      

**Parameters**  

| Param | Detail |
| --- | --- |
| callback:function | Callback function to execute once it has collected nodes. |

**Example**  

### addRules 

***public function addRules(rules:String):void***  
Adds valid elements rules to the serializers schema instance this enables you to specify things like what elements should be outputted and what attributes specific elements might have. Consult the Wiki for more details on this format.      

**Parameters**  

| Param | Detail |
| --- | --- |
| rules:String | Valid elements rules string to add to schema. |

### serialize 

***public function serialize(node:DOMNode, args:Object):void***  
Serializes the specified browser DOM node into a HTML string.      

**Parameters**  

| Param | Detail |
| --- | --- |
| node:DOMNode | DOM node to serialize. |
| args:Object | Arguments option that gets passed to event handlers. |

### setRules 

***public function setRules(rules:String):void***  
Sets the valid elements rules to the serializers schema instance this enables you to specify things like what elements should be outputted and what attributes specific elements might have. Consult the Wiki for more details on this format.      

**Parameters**  

| Param | Detail |
| --- | --- |
| rules:String | Valid elements rules string. |

## Event details

### onPostProcess 

***public event onPostProcess(sender:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html), obj:Object)***  
Fires when the Serializer does a postProcess on the contents.      

**Parameters**  

| Param | Detail |
| --- | --- |
| sender:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) | Editor instance. |
| obj:Object | PreProcess object. |

### onPreProcess 

***public event onPreProcess(sender:[Serializer](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Serializer.html), args:Object)***  
This event gets executed before a HTML fragment gets serialized into a HTML string. This event enables you to do modifications to the DOM before the serialization occurs. It's important to know that the element that is getting serialized is cloned so it's not inside a document.      

**Parameters**  

| Param | Detail |
| --- | --- |
| sender:[Serializer](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Serializer.html) | object/Serializer instance that is serializing an element. |
| args:Object | Object containing things like the current node. |

**Example**  

### onPreProcess 

***public event onPreProcess(sender:[Serializer](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Serializer.html), args:Object)***  
This event gets executed after a HTML fragment has been serialized into a HTML string. This event enables you to do modifications to the HTML string like regexp replaces etc.      

**Parameters**  

| Param | Detail |
| --- | --- |
| sender:[Serializer](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Serializer.html) | object/Serializer instance that is serializing an element. |
| args:Object | Object containing things like the current contents. |

**Example**  

### onPreProcess 

***public event onPreProcess(sender:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html), obj:Object)***  
Fires when the Serializer does a preProcess on the contents.      

**Parameters**  

| Param | Detail |
| --- | --- |
| sender:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) | Editor instance. |
| obj:Object | PreProcess object. |