---
layout: default
title: tinymce.html.Node
---

|  |  |
| --- | --- |
| Namespace | tinymce.html |
| Class | Node |

This class is a minimalistic implementation of a DOM like node used by the DomParser class.<span>Version:</span>3.4      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [Node](#node)(name:String, type:Number) : Constructs a new Node instance. | Node |
| [append](#append)(node:[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html)):[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) : Appends a new node as a child of the current node. | Node |
| [attr](#attr)(name:String, value:String):String/[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) : Gets/sets or removes an attribute by name. | Node |
| [clone](#clone)():[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) : Does a shallow clones the node into a new node. | Node |
| [create](#create)(name:String, attrs:Object):void : <span class="static">[static]</span> Creates a node of a specific type. | Node |
| [empty](#empty)():[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) : Removes all children of the current node. | Node |
| [getAll](#getall)(name:String):Array : Get all children by name. | Node |
| [insert](#insert)(node:[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html), ref_node:[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html), before:Boolean):[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) : Inserts a node at a specific position as a child of the current node. | Node |
| [isEmpty](#isempty)(elements:Object):Boolean : Returns true/false if the node is to be considered empty or not. | Node |
| [remove](#remove)():[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) : Removes the node from it's parent. | Node |
| [replace](#replace)(node:[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html)):[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) : Replaces the current node with the specified one. | Node |
| [unwrap](#unwrap)():void : Unwraps the node in other words it removes the node but keeps the children. | Node |
| [walk](#walk)(prev:Boolean):[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) : Walks to the next or previous node and returns that node or null if it wasn't found. | Node |
| [wrap](#wrap)():void : Wraps the node in in another node. | Node |

## Method details

### Node 

***public function Node(name:String, type:Number)***  
Constructs a new Node instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Name of the node type. |
| type:Number | Numeric type representing the node. |

### append 

***public function append(node:[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html)):[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html)***  
Appends a new node as a child of the current node.      

**Parameters**  

| Param | Detail |
| --- | --- |
| node:[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) | Node to append as a child of the current one. |

**Returns**  
[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) - The node that got appended.      

**Example**  

### attr 

***public function attr(name:String, value:String):String/[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html)***  
Gets/sets or removes an attribute by name.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Attribute name to set or get. |
| value:String | Optional value to set. |

**Returns**  
String/[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) - String or undefined on a get operation or the current node on a set operation.      

**Example**  

### clone 

***public function clone():[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html)***  
Does a shallow clones the node into a new node. It will also exclude id attributes since there should only be one id per document.      

**Returns**  
[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) - New copy of the original node.      

**Example**  

### create 

***public static function create(name:String, attrs:Object):void***  
Creates a node of a specific type.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Name of the node type to create for example "b" or "#text". |
| attrs:Object | Name/value collection of attributes that will be applied to elements. |

### empty 

***public function empty():[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html)***  
Removes all children of the current node.      

**Returns**  
[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) - The current node that got cleared.

### getAll 

***public function getAll(name:String):Array***  
Get all children by name.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Name of the child nodes to collect. |

**Returns**  
Array - Array with child nodes matchin the specified name.

### insert 

***public function insert(node:[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html), ref_node:[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html), before:Boolean):[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html)***  
Inserts a node at a specific position as a child of the current node.      

**Parameters**  

| Param | Detail |
| --- | --- |
| node:[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) | Node to insert as a child of the current node. |
| ref_node:[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) | Reference node to set node before/after. |
| before:Boolean | Optional state to insert the node before the reference node. |

**Returns**  
[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) - The node that got inserted.      

**Example**  

### isEmpty 

***public function isEmpty(elements:Object):Boolean***  
Returns true/false if the node is to be considered empty or not.      

**Parameters**  

| Param | Detail |
| --- | --- |
| elements:Object | Name/value object with elements that are automatically treated as non empty elements. |

**Returns**  
Boolean - true/false if the node is empty or not.      

**Example**  

### remove 

***public function remove():[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html)***  
Removes the node from it's parent.      

**Returns**  
[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) - Current node that got removed.      

**Example**  

### replace 

***public function replace(node:[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html)):[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html)***  
Replaces the current node with the specified one.      

**Parameters**  

| Param | Detail |
| --- | --- |
| node:[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) | Node to replace the current node with. |

**Returns**  
[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) - The old node that got replaced.      

**Example**  

### unwrap 

***public function unwrap():void***  
Unwraps the node in other words it removes the node but keeps the children.      

**Example**  

### walk 

***public function walk(prev:Boolean):[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html)***  
Walks to the next or previous node and returns that node or null if it wasn't found.      

**Parameters**  

| Param | Detail |
| --- | --- |
| prev:Boolean | Optional previous node state defaults to false. |

**Returns**  
[Node](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Node.html) - Node that is next to or previous of the current node.

### wrap 

***public function wrap():void***  
Wraps the node in in another node.      

**Example**