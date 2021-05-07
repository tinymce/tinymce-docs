---
layout: default
title: tinymce.dom.DOMUtils
---

|  |  |
| --- | --- |
| Namespace | tinymce.dom |
| Class | DOMUtils |

Utility class for various DOM manipulation and retrival functions.      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [DOMUtils](#domutils)(d:Document, s:settings) : Constructs a new DOMUtils instance. | DOMUtils |
| [add](#add)(Element:String/Element/Array, n:String/Element, a:Object, h:String, c:Boolean):Element/Array : Adds the specified element to another element or elements. | DOMUtils |
| [addClass](#addclass)(Element:String/Element/Array, c:String):String/Array : Adds a class to the specified element or elements. | DOMUtils |
| [addStyle](#addstyle)(cssText:String):void : Adds a style element at the top of the document with the specified cssText content. | DOMUtils |
| [bind](#bind)(o:Element/Document/Window/Array/String, n:String, f:function, s:Object):function : Adds an event handler to the specified object. | DOMUtils |
| [create](#create)(n:String, a:Object, h:String):Element : Creates a new element. | DOMUtils |
| [createHTML](#createhtml)(n:String, a:Object, h:String):String : Create HTML string for element. | DOMUtils |
| [createRng](#createrng)():DOMRange : Created a new DOM Range object. | DOMUtils |
| [decode](#decode)(s:String):String : Entity decode a string, resolves any HTML entities like &aring;. | DOMUtils |
| [destroy](#destroy)():void : Destroys all internal references to the DOM to solve IE leak issues. | DOMUtils |
| [encode](#encode)(text:String):String : Entity encodes a string, encodes the most common entities <>"& into entities. | DOMUtils |
| [findCommonAncestor](#findcommonancestor)(a:Element, b:Element):Element : Find the common ancestor of two elements. | DOMUtils |
| [fire](#fire)(target:Node/Document/Window, name:String, evt:Object):Event : Fires the specified event name with object on target. | DOMUtils |
| [get](#get)(n:String/Element):Element : Returns the specified element by ID or the input element if it isn't a string. | DOMUtils |
| [getAttrib](#getattrib)(e:String/Element, n:String, dv:String):String : Returns the specified attribute by name. | DOMUtils |
| [getAttribs](#getattribs)(n:HTMLElement/string):NodeList : Returns an NodeList with attributes for the element. | DOMUtils |
| [getClasses](#getclasses)():Array : Returns a array of all single CSS classes in the document. | DOMUtils |
| [getNext](#getnext)(node:Node, selector:String/function):Node : Returns the next node that matches selector or function | DOMUtils |
| [getOuterHTML](#getouterhtml)(elm:String/Element):String : Returns the outer HTML of an element. | DOMUtils |
| [getParent](#getparent)(n:Node/String, f:function, r:Node):Node : Returns a node by the specified selector function. | DOMUtils |
| [getParents](#getparents)(n:Node/String, f:function, r:Node):Array : Returns a node list of all parents matching the specified selector function or pattern. | DOMUtils |
| [getPos](#getpos)(n:Element/String, ro:Element):object : Returns the absolute x, y position of a node. | DOMUtils |
| [getPrev](#getprev)(node:Node, selector:String/function):Node : Returns the previous node that matches selector or function | DOMUtils |
| [getRect](#getrect)(e:Element/String):object : Returns the rectangle for a specific element. | DOMUtils |
| [getRoot](#getroot)():Element : Returns the root node of the document this is normally the body but might be a DIV. | DOMUtils |
| [getSize](#getsize)(e:Element/String):object : Returns the size dimensions of the specified element. | DOMUtils |
| [getStyle](#getstyle)(n:String/Element, na:String, c:Boolean):String : Returns the current style or runtime/computed value of a element. | DOMUtils |
| [getViewPort](#getviewport)(w:Window):Object : Returns the viewport of the window. | DOMUtils |
| [hasClass](#hasclass)(n:String/Element, c:String):Boolean : Returns true if the specified element has the specified class. | DOMUtils |
| [hide](#hide)(e:String/Element/Array):void : Hides the specified element(s) by ID by setting the "display" style. | DOMUtils |
| [insertAfter](#insertafter)(node:Element, reference_node:Element/String/Array):Element/Array : Inserts a element after the reference element. | DOMUtils |
| [is](#is)(n:Node/NodeList, selector:String):void : Returns true/false if the specified element matches the specified css pattern. | DOMUtils |
| [isBlock](#isblock)(node:Node/String):Boolean : Returns true/false if the specified element is a block element or not. | DOMUtils |
| [isEmpty](#isempty)(elements:Object):Boolean : Returns true/false if the specified node is to be considered empty or not. | DOMUtils |
| [isHidden](#ishidden)(e:String/Element):Boolean : Returns true/false if the element is hidden or not by checking the "display" style. | DOMUtils |
| [loadCSS](#loadcss)(u:String):void : Imports/loads the specified CSS file into the document bound to the class. | DOMUtils |
| [parseStyle](#parsestyle)(st:String):Object : Parses the specified style value into an object collection. | DOMUtils |
| [remove](#remove)(node:String/Element/Array, keep_children:Boolean):Element/Array : Removes/deletes the specified element(s) from the DOM. | DOMUtils |
| [removeClass](#removeclass)(Element:String/Element/Array, c:String):String/Array : Removes a class from the specified element or elements. | DOMUtils |
| [rename](#rename)(elm:Element, name:String):Object : Renames the specified element to a new name and keep it's attributes and children. | DOMUtils |
| [replace](#replace)(n:Element, o:Element/String/Array, k:Boolean):void : Replaces the specified element or elements with the specified element, the new element will be cloned if multiple inputs... | DOMUtils |
| [run](#run)(Element:String/Element/Array, f:function, s:Object):Object/Array : Executes the specified function on the element by id or dom element node or array of elements/id. | DOMUtils |
| [select](#select)(p:String, s:Object):Array : Selects specific elements by a CSS level 3 pattern. | DOMUtils |
| [serializeStyle](#serializestyle)(o:Object, name:String):String : Serializes the specified style object into a string. | DOMUtils |
| [setAttrib](#setattrib)(e:Element/String/Array, n:String, v:String):void : Sets the specified attributes value of a element or elements. | DOMUtils |
| [setAttribs](#setattribs)(e:Element/String/Array, o:Object):void : Sets the specified attributes of a element or elements. | DOMUtils |
| [setHTML](#sethtml)(e:Element/String/Array, h:String):void : Sets the specified HTML content inside the element or elements. | DOMUtils |
| [setOuterHTML](#setouterhtml)(e:Element/String/Array, h:Object, d:Document):void : Sets the specified outer HTML on a element or elements. | DOMUtils |
| [setStyle](#setstyle)(n:String/Element/Array, na:String, v:String):void : Sets the CSS style value on a HTML element. | DOMUtils |
| [setStyles](#setstyles)(e:Element/String/Array, o:Object):void : Sets multiple styles on the specified element(s). | DOMUtils |
| [show](#show)(e:String/Element/Array):void : Shows the specified element(s) by ID by setting the "display" style. | DOMUtils |
| [split](#split)(pe:Element, e:Element, re:Element):Element : Splits an element into two new elements and places the specified split element or element between the new ones. | DOMUtils |
| [toHex](#tohex)(s:String):String : Parses the specified RGB color value and returns a hex version of that color. | DOMUtils |
| [unbind](#unbind)(o:String/Element/Array, n:String, f:function):bool/Array : Removes the specified event handler by name and function from a element or collection of elements. | DOMUtils |
| [uniqueId](#uniqueid)(p:String):String : Returns a unique id. | DOMUtils |

## Method details

### DOMUtils 

***public function DOMUtils(d:Document, s:settings)***  
Constructs a new DOMUtils instance. Consult the Wiki for more details on settings etc for this class.      

**Parameters**  

| Param | Detail |
| --- | --- |
| d:Document | Document reference to bind the utility class to. |
| s:settings | Optional settings collection. |

### add 

***public function add(Element:String/Element/Array, n:String/Element, a:Object, h:String, c:Boolean):Element/Array***  
Adds the specified element to another element or elements.      

**Parameters**  

| Param | Detail |
| --- | --- |
| Element:String/Element/Array | id string, DOM node element or array of id's or elements to add to. |
| n:String/Element | Name of new element to add or existing element to add. |
| a:Object | Optional object collection with arguments to add to the new element(s). |
| h:String | Optional inner HTML contents to add for each element. |
| c:Boolean | Optional internal state to indicate if it should create or add. |

**Returns**  
Element/Array - Element that got created or array with elements if multiple elements where passed.      

**Example**  

### addClass 

***public function addClass(Element:String/Element/Array, c:String):String/Array***  
Adds a class to the specified element or elements.      

**Parameters**  

| Param | Detail |
| --- | --- |
| Element:String/Element/Array | ID string or DOM element or array with elements or IDs. |
| c:String | Class name to add to each element. |

**Returns**  
String/Array - String with new class value or array with new class values for all elements.      

**Example**  

### addStyle 

***public function addStyle(cssText:String):void***  
Adds a style element at the top of the document with the specified cssText content.      

**Parameters**  

| Param | Detail |
| --- | --- |
| cssText:String | CSS Text style to add to top of head of document. |

### bind 

***public function bind(o:Element/Document/Window/Array/String, n:String, f:function, s:Object):function***  
Adds an event handler to the specified object.      

**Parameters**  

| Param | Detail |
| --- | --- |
| o:Element/Document/Window/Array/String | Object or element id string to add event handler to or an array of elements/ids/documents. |
| n:String | Name of event handler to add for example: click. |
| f:function | Function to execute when the event occurs. |
| s:Object | Optional scope to execute the function in. |

**Returns**  
function - Function callback handler the same as the one passed in.

### create 

***public function create(n:String, a:Object, h:String):Element***  
Creates a new element.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Name of new element. |
| a:Object | Optional object name/value collection with element attributes. |
| h:String | Optional HTML string to set as inner HTML of the element. |

**Returns**  
Element - HTML DOM node element that got created.      

**Example**  

### createHTML 

***public function createHTML(n:String, a:Object, h:String):String***  
Create HTML string for element. The element will be closed unless an empty inner HTML string is passed.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Name of new element. |
| a:Object | Optional object name/value collection with element attributes. |
| h:String | Optional HTML string to set as inner HTML of the element. |

**Returns**  
String - String with new HTML element like for example: <a href="#">test</a>.      

**Example**  

### createRng 

***public function createRng():DOMRange***  
Created a new DOM Range object. This will use the native DOM Range API if it's available if it's not it will fallback to the custom TinyMCE implementation.      

**Returns**  
DOMRange - DOM Range object.      

**Example**  

### decode 

***public function decode(s:String):String***  
Entity decode a string, resolves any HTML entities like å.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:String | String to decode entities on. |

**Returns**  
String - Entity decoded string.

### destroy 

***public function destroy():void***  
Destroys all internal references to the DOM to solve IE leak issues.

### encode 

***public function encode(text:String):String***  
Entity encodes a string, encodes the most common entities <>"& into entities.      

**Parameters**  

| Param | Detail |
| --- | --- |
| text:String | String to encode with entities. |

**Returns**  
String - Entity encoded string.

### findCommonAncestor 

***public function findCommonAncestor(a:Element, b:Element):Element***  
Find the common ancestor of two elements. This is a shorter method than using the DOM Range logic.      

**Parameters**  

| Param | Detail |
| --- | --- |
| a:Element | Element to find common ancestor of. |
| b:Element | Element to find common ancestor of. |

**Returns**  
Element - Common ancestor element of the two input elements.

### fire 

***public function fire(target:Node/Document/Window, name:String, evt:Object):Event***  
Fires the specified event name with object on target.      

**Parameters**  

| Param | Detail |
| --- | --- |
| target:Node/Document/Window | Target element or object to fire event on. |
| name:String | Name of the event to fire. |
| evt:Object | Event object to send. |

**Returns**  
Event - Event object.

### get 

***public function get(n:String/Element):Element***  
Returns the specified element by ID or the input element if it isn't a string.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String/Element | Element id to look for or element to just pass though. |

**Returns**  
Element - Element matching the specified id or null if it wasn't found.

### getAttrib 

***public function getAttrib(e:String/Element, n:String, dv:String):String***  
Returns the specified attribute by name.      

**Parameters**  

| Param | Detail |
| --- | --- |
| e:String/Element | Element string id or DOM element to get attribute from. |
| n:String | Name of attribute to get. |
| dv:String | Optional default value to return if the attribute didn't exist. |

**Returns**  
String - Attribute value string, default value or null if the attribute wasn't found.

### getAttribs 

***public function getAttribs(n:HTMLElement/string):NodeList***  
Returns an NodeList with attributes for the element.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:HTMLElement/string | Element node or string id to get attributes from. |

**Returns**  
NodeList - NodeList with attributes.

### getClasses 

***public function getClasses():Array***  
Returns a array of all single CSS classes in the document. A single CSS class is a simple rule like ".class" complex ones like "div td.class" will not be added to output.      

**Returns**  
Array - Array with class objects each object has a class field might be other fields in the future.

### getNext 

***public function getNext(node:Node, selector:String/function):Node***  
Returns the next node that matches selector or function      

**Parameters**  

| Param | Detail |
| --- | --- |
| node:Node | Node to find siblings from. |
| selector:String/function | Selector CSS expression or function. |

**Returns**  
Node - Next node item matching the selector or null if it wasn't found.

### getOuterHTML 

***public function getOuterHTML(elm:String/Element):String***  
Returns the outer HTML of an element.      

**Parameters**  

| Param | Detail |
| --- | --- |
| elm:String/Element | Element ID or element object to get outer HTML from. |

**Returns**  
String - Outer HTML string.      

**Example**  

### getParent 

***public function getParent(n:Node/String, f:function, r:Node):Node***  
Returns a node by the specified selector function. This function will loop through all parent nodes and call the specified function for each node. If the function then returns true indicating that it has found what it was looking for, the loop execution will then end and the node it found will be returned.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:Node/String | DOM node to search parents on or ID string. |
| f:function | Selection function to execute on each node or CSS pattern. |
| r:Node | Optional root element, never go below this point. |

**Returns**  
Node - DOM Node or null if it wasn't found.

### getParents 

***public function getParents(n:Node/String, f:function, r:Node):Array***  
Returns a node list of all parents matching the specified selector function or pattern. If the function then returns true indicating that it has found what it was looking for and that node will be collected.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:Node/String | DOM node to search parents on or ID string. |
| f:function | Selection function to execute on each node or CSS pattern. |
| r:Node | Optional root element, never go below this point. |

**Returns**  
Array - Array of nodes or null if it wasn't found.

### getPos 

***public function getPos(n:Element/String, ro:Element):object***  
Returns the absolute x, y position of a node. The position will be returned in a object with x, y fields.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:Element/String | HTML element or element id to get x, y position from. |
| ro:Element | Optional root element to stop calculations at. |

**Returns**  
object - Absolute position of the specified element object with x, y fields.

### getPrev 

***public function getPrev(node:Node, selector:String/function):Node***  
Returns the previous node that matches selector or function      

**Parameters**  

| Param | Detail |
| --- | --- |
| node:Node | Node to find siblings from. |
| selector:String/function | Selector CSS expression or function. |

**Returns**  
Node - Previous node item matching the selector or null if it wasn't found.

### getRect 

***public function getRect(e:Element/String):object***  
Returns the rectangle for a specific element.      

**Parameters**  

| Param | Detail |
| --- | --- |
| e:Element/String | Element object or element ID to get rectange from. |

**Returns**  
object - Rectange for specified element object with x, y, w, h fields.

### getRoot 

***public function getRoot():Element***  
Returns the root node of the document this is normally the body but might be a DIV. Parents like getParent will not go above the point of this root node.      

**Returns**  
Element - Root element for the utility class.

### getSize 

***public function getSize(e:Element/String):object***  
Returns the size dimensions of the specified element.      

**Parameters**  

| Param | Detail |
| --- | --- |
| e:Element/String | Element object or element ID to get rectange from. |

**Returns**  
object - Rectange for specified element object with w, h fields.

### getStyle 

***public function getStyle(n:String/Element, na:String, c:Boolean):String***  
Returns the current style or runtime/computed value of a element.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String/Element | HTML element or element id string to get style from. |
| na:String | Style name to return. |
| c:Boolean | Computed style. |

**Returns**  
String - Current style or computed style value of a element.

### getViewPort 

***public function getViewPort(w:Window):Object***  
Returns the viewport of the window.      

**Parameters**  

| Param | Detail |
| --- | --- |
| w:Window | Optional window to get viewport of. |

**Returns**  
Object - Viewport object with fields x, y, w and h.

### hasClass 

***public function hasClass(n:String/Element, c:String):Boolean***  
Returns true if the specified element has the specified class.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String/Element | HTML element or element id string to check CSS class on. |
| c:String | CSS class to check for. |

**Returns**  
Boolean - true/false if the specified element has the specified class.

### hide 

***public function hide(e:String/Element/Array):void***  
Hides the specified element(s) by ID by setting the "display" style.      

**Parameters**  

| Param | Detail |
| --- | --- |
| e:String/Element/Array | ID of DOM element or DOM element or array with elements or IDs to hide. |

**Example**  

### insertAfter 

***public function insertAfter(node:Element, reference_node:Element/String/Array):Element/Array***  
Inserts a element after the reference element.      

**Parameters**  

| Param | Detail |
| --- | --- |
| node:Element | Element to insert after the reference. |
| reference_node:Element/String/Array | Reference element, element id or array of elements to insert after. |

**Returns**  
Element/Array - Element that got added or an array with elements.

### is 

***public function is(n:Node/NodeList, selector:String):void***  
Returns true/false if the specified element matches the specified css pattern.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:Node/NodeList | DOM node to match or an array of nodes to match. |
| selector:String | CSS pattern to match the element agains. |

### isBlock 

***public function isBlock(node:Node/String):Boolean***  
Returns true/false if the specified element is a block element or not.      

**Parameters**  

| Param | Detail |
| --- | --- |
| node:Node/String | Element/Node to check. |

**Returns**  
Boolean - True/False state if the node is a block element or not.

### isEmpty 

***public function isEmpty(elements:Object):Boolean***  
Returns true/false if the specified node is to be considered empty or not.      

**Parameters**  

| Param | Detail |
| --- | --- |
| elements:Object | Optional name/value object with elements that are automatically treated as non empty elements. |

**Returns**  
Boolean - true/false if the node is empty or not.      

**Example**  

### isHidden 

***public function isHidden(e:String/Element):Boolean***  
Returns true/false if the element is hidden or not by checking the "display" style.      

**Parameters**  

| Param | Detail |
| --- | --- |
| e:String/Element | Id or element to check display state on. |

**Returns**  
Boolean - true/false if the element is hidden or not.

### loadCSS 

***public function loadCSS(u:String):void***  
Imports/loads the specified CSS file into the document bound to the class.      

**Parameters**  

| Param | Detail |
| --- | --- |
| u:String | URL to CSS file to load. |

**Example**  

### parseStyle 

***public function parseStyle(st:String):Object***  
Parses the specified style value into an object collection. This parser will also merge and remove any redundant items that browsers might have added. It will also convert non hex colors to hex values. Urls inside the styles will also be converted to absolute/relative based on settings.      

**Parameters**  

| Param | Detail |
| --- | --- |
| st:String | Style value to parse for example: border:1px solid red;. |

**Returns**  
Object - Object representation of that style like {border : '1px solid red'}

### remove 

***public function remove(node:String/Element/Array, keep_children:Boolean):Element/Array***  
Removes/deletes the specified element(s) from the DOM.      

**Parameters**  

| Param | Detail |
| --- | --- |
| node:String/Element/Array | ID of element or DOM element object or array containing multiple elements/ids. |
| keep_children:Boolean | Optional state to keep children or not. If set to true all children will be placed at the location of the removed element. |

**Returns**  
Element/Array - HTML DOM element that got removed or array of elements depending on input.      

**Example**  

### removeClass 

***public function removeClass(Element:String/Element/Array, c:String):String/Array***  
Removes a class from the specified element or elements.      

**Parameters**  

| Param | Detail |
| --- | --- |
| Element:String/Element/Array | ID string or DOM element or array with elements or IDs. |
| c:String | Class name to remove to each element. |

**Returns**  
String/Array - String with new class value or array with new class values for all elements.      

**Example**  

### rename 

***public function rename(elm:Element, name:String):Object***  
Renames the specified element to a new name and keep it's attributes and children.      

**Parameters**  

| Param | Detail |
| --- | --- |
| elm:Element | Element to rename. |
| name:String | Name of the new element. |

**Returns**  
Object - New element or the old element if it needed renaming.

### replace 

***public function replace(n:Element, o:Element/String/Array, k:Boolean):void***  
Replaces the specified element or elements with the specified element, the new element will be cloned if multiple inputs elements are passed.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:Element | New element to replace old ones with. |
| o:Element/String/Array | Element DOM node, element id or array of elements or ids to replace. |
| k:Boolean | Optional keep children state, if set to true child nodes from the old object will be added to new ones. |

### run 

***public function run(Element:String/Element/Array, f:function, s:Object):Object/Array***  
Executes the specified function on the element by id or dom element node or array of elements/id.      

**Parameters**  

| Param | Detail |
| --- | --- |
| Element:String/Element/Array | ID or DOM element object or array with ids or elements. |
| f:function | Function to execute for each item. |
| s:Object | Optional scope to execute the function in. |

**Returns**  
Object/Array - Single object or array with objects depending on multiple input or not.

### select 

***public function select(p:String, s:Object):Array***  
Selects specific elements by a CSS level 3 pattern. For example "div#a1 p.test". This function is optimized for the most common patterns needed in TinyMCE but it also performes good enough on more complex patterns.      

**Parameters**  

| Param | Detail |
| --- | --- |
| p:String | CSS level 1 pattern to select/find elements by. |
| s:Object | Optional root element/scope element to search in. |

**Returns**  
Array - Array with all matched elements.      

**Example**  

### serializeStyle 

***public function serializeStyle(o:Object, name:String):String***  
Serializes the specified style object into a string.      

**Parameters**  

| Param | Detail |
| --- | --- |
| o:Object | Object to serialize as string for example: {border : '1px solid red'} |
| name:String | Optional element name. |

**Returns**  
String - String representation of the style object for example: border: 1px solid red.

### setAttrib 

***public function setAttrib(e:Element/String/Array, n:String, v:String):void***  
Sets the specified attributes value of a element or elements.      

**Parameters**  

| Param | Detail |
| --- | --- |
| e:Element/String/Array | DOM element, element id string or array of elements/ids to set attribute on. |
| n:String | Name of attribute to set. |
| v:String | Value to set on the attribute of this value is falsy like null 0 or '' it will remove the attribute instead. |

**Example**  

### setAttribs 

***public function setAttribs(e:Element/String/Array, o:Object):void***  
Sets the specified attributes of a element or elements.      

**Parameters**  

| Param | Detail |
| --- | --- |
| e:Element/String/Array | DOM element, element id string or array of elements/ids to set attributes on. |
| o:Object | Name/Value collection of attribute items to add to the element(s). |

**Example**  

### setHTML 

***public function setHTML(e:Element/String/Array, h:String):void***  
Sets the specified HTML content inside the element or elements. The HTML will first be processed this means URLs will get converted, hex color values fixed etc. Check processHTML for details.      

**Parameters**  

| Param | Detail |
| --- | --- |
| e:Element/String/Array | DOM element, element id string or array of elements/ids to set HTML inside. |
| h:String | HTML content to set as inner HTML of the element. |

**Example**  

### setOuterHTML 

***public function setOuterHTML(e:Element/String/Array, h:Object, d:Document):void***  
Sets the specified outer HTML on a element or elements.      

**Parameters**  

| Param | Detail |
| --- | --- |
| e:Element/String/Array | DOM element, element id string or array of elements/ids to set outer HTML on. |
| h:Object | HTML code to set as outer value for the element. |
| d:Document | Optional document scope to use in this process defaults to the document of the DOM class. |

**Example**  

### setStyle 

***public function setStyle(n:String/Element/Array, na:String, v:String):void***  
Sets the CSS style value on a HTML element. The name can be a camelcase string or the CSS style name like background-color.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String/Element/Array | HTML element/Element ID or Array of elements/ids to set CSS style value on. |
| na:String | Name of the style value to set. |
| v:String | Value to set on the style. |

**Example**  

### setStyles 

***public function setStyles(e:Element/String/Array, o:Object):void***  
Sets multiple styles on the specified element(s).      

**Parameters**  

| Param | Detail |
| --- | --- |
| e:Element/String/Array | DOM element, element id string or array of elements/ids to set styles on. |
| o:Object | Name/Value collection of style items to add to the element(s). |

**Example**  

### show 

***public function show(e:String/Element/Array):void***  
Shows the specified element(s) by ID by setting the "display" style.      

**Parameters**  

| Param | Detail |
| --- | --- |
| e:String/Element/Array | ID of DOM element or DOM element or array with elements or IDs to show. |

### split 

***public function split(pe:Element, e:Element, re:Element):Element***  
Splits an element into two new elements and places the specified split element or element between the new ones. For example splitting the paragraph at the bold element in this example

abc**abc**123

would produce

abc

**abc**

123

.      

**Parameters**  

| Param | Detail |
| --- | --- |
| pe:Element | Parent element to split. |
| e:Element | Element to split at. |
| re:Element | Optional replacement element to replace the split element by. |

**Returns**  
Element - Returns the split element or the replacement element if that is specified.

### toHex 

***public function toHex(s:String):String***  
Parses the specified RGB color value and returns a hex version of that color.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:String | RGB string value like rgb(1,2,3) |

**Returns**  
String - Hex version of that RGB value like #FF00FF.

### unbind 

***public function unbind(o:String/Element/Array, n:String, f:function):bool/Array***  
Removes the specified event handler by name and function from a element or collection of elements.      

**Parameters**  

| Param | Detail |
| --- | --- |
| o:String/Element/Array | Element ID string or HTML element or an array of elements or ids to remove handler from. |
| n:String | Event handler name like for example: "click" |
| f:function | Function to remove. |

**Returns**  
bool/Array - Bool state if true if the handler was removed or an array with states if multiple elements where passed in.

### uniqueId 

***public function uniqueId(p:String):String***  
Returns a unique id. This can be useful when generating elements on the fly. This method will not check if the element allready exists.      

**Parameters**  

| Param | Detail |
| --- | --- |
| p:String | Optional prefix to add infront of all ids defaults to "mce_". |

**Returns**  
String - Unique id.