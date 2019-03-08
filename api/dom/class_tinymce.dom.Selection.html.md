---
layout: default
title: tinymce.dom.Selection
---

|  |  |
| --- | --- |
| Namespace | tinymce.dom |
| Class | Selection |

This class handles text and control selection it's an crossbrowser utility class. Consult the TinyMCE Wiki API for more details and examples on how to use this class.      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [Selection](#selection)(dom:[DOMUtils](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.DOMUtils.html), win:Window, serializer:[Serializer](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Serializer.html)) : Constructs a new selection instance. | Selection |
| [collapse](#collapse)(to_start:Boolean):void : Collapse the selection to start or end of range. | Selection |
| [getBookmark](#getbookmark)(type:Number, normalized:Boolean):Object : Returns a bookmark location for the current selection. | Selection |
| [getContent](#getcontent)(s:Object):String : Returns the selected contents using the DOM serializer passed in to this class. | Selection |
| [getEnd](#getend)():Element : Returns the end element of a selection range. | Selection |
| [getNode](#getnode)():Element : Returns the currently selected element or the common ancestor element for both start and end of the selection. | Selection |
| [getRng](#getrng)(w3c:Boolean):Range : Returns the browsers internal range object. | Selection |
| [getSel](#getsel)():Selection : Returns the browsers internal selection object. | Selection |
| [getStart](#getstart)():Element : Returns the start element of a selection range. | Selection |
| [isCollapsed](#iscollapsed)():Boolean : Returns true/false if the selection range is collapsed or not. | Selection |
| [moveToBookmark](#movetobookmark)(bookmark:Object):Boolean : Restores the selection to the specified bookmark. | Selection |
| [select](#select)(node:Element, content:Boolean):Element : Selects the specified element. | Selection |
| [selectorChanged](#selectorchanged)(selector:String, callback:function):void : Executes callback of the current selection matches the specified selector or not and passes the state and args to the ca... | Selection |
| [setContent](#setcontent)(content:String, args:Object):void : Sets the current selection to the specified content. | Selection |
| [setNode](#setnode)(n:Element):Element : Sets the current selection to the specified DOM element. | Selection |
| [setRng](#setrng)(r:Range):void : Changes the selection to the specified DOM range. | Selection |

## Public Events

| Event | Defined By |
| --- | --- |
| [onBeforeGetContent](#onbeforegetcontent)(selection:[Selection](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Selection.html), args:Object) : This event gets executed before contents is inserted into selection. | Selection |
| [onBeforeSetContent](#onbeforesetcontent)(selection:[Selection](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Selection.html), args:Object) : This event gets executed before contents is extracted from the selection. | Selection |
| [onGetContent](#ongetcontent)(selection:[Selection](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Selection.html), args:Object) : This event gets executed when contents is extracted from the selection. | Selection |
| [onSetContent](#onsetcontent)(selection:[Selection](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Selection.html), args:Object) : This event gets executed when contents is inserted into selection. | Selection |

## Method details

### Selection 

***public function Selection(dom:[DOMUtils](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.DOMUtils.html), win:Window, serializer:[Serializer](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Serializer.html))***  
Constructs a new selection instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| dom:[DOMUtils](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.DOMUtils.html) | DOMUtils object reference. |
| win:Window | Window to bind the selection object to. |
| serializer:[Serializer](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Serializer.html) | DOM serialization class to use for getContent. |

### collapse 

***public function collapse(to_start:Boolean):void***  
Collapse the selection to start or end of range.      

**Parameters**  

| Param | Detail |
| --- | --- |
| to_start:Boolean | Optional boolean state if to collapse to end or not. Defaults to start. |

### getBookmark 

***public function getBookmark(type:Number, normalized:Boolean):Object***  
Returns a bookmark location for the current selection. This bookmark object can then be used to restore the selection after some content modification to the document.      

**Parameters**  

| Param | Detail |
| --- | --- |
| type:Number | Optional state if the bookmark should be simple or not. Default is complex. |
| normalized:Boolean | Optional state that enables you to get a position that it would be after normalization. |

**Returns**  
Object - Bookmark object, use moveToBookmark with this object to restore the selection.      

**Example**  

### getContent 

***public function getContent(s:Object):String***  
Returns the selected contents using the DOM serializer passed in to this class.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:Object | Optional settings class with for example output format text or html. |

**Returns**  
String - Selected contents in for example HTML format.      

**Example**  

### getEnd 

***public function getEnd():Element***  
Returns the end element of a selection range. If the end is in a text node the parent element will be returned.      

**Returns**  
Element - End element of selection range.

### getNode 

***public function getNode():Element***  
Returns the currently selected element or the common ancestor element for both start and end of the selection.      

**Returns**  
Element - Currently selected element or common ancestor element.      

**Example**  

### getRng 

***public function getRng(w3c:Boolean):Range***  
Returns the browsers internal range object.      

**Parameters**  

| Param | Detail |
| --- | --- |
| w3c:Boolean | Forces a compatible W3C range on IE. |

**Returns**  
Range - Internal browser range object.      

**See Also**  

*   [](https://www.tiny.cloud/docs-3x/api/class_http://www.quirksmode.org/dom/range_intro.html.html)
*   [](https://www.tiny.cloud/docs-3x/api/class_http://www.dotvoid.com/2001/03/using-the-range-object-in-mozilla.html)

### getSel 

***public function getSel():Selection***  
Returns the browsers internal selection object.      

**Returns**  
Selection - Internal browser selection object.

### getStart 

***public function getStart():Element***  
Returns the start element of a selection range. If the start is in a text node the parent element will be returned.      

**Returns**  
Element - Start element of selection range.

### isCollapsed 

***public function isCollapsed():Boolean***  
Returns true/false if the selection range is collapsed or not. Collapsed means if it's a caret or a larger selection.      

**Returns**  
Boolean - true/false state if the selection range is collapsed or not. Collapsed means if it's a caret or a larger selection.

### moveToBookmark 

***public function moveToBookmark(bookmark:Object):Boolean***  
Restores the selection to the specified bookmark.      

**Parameters**  

| Param | Detail |
| --- | --- |
| bookmark:Object | Bookmark to restore selection from. |

**Returns**  
Boolean - true/false if it was successful or not.      

**Example**  

### select 

***public function select(node:Element, content:Boolean):Element***  
Selects the specified element. This will place the start and end of the selection range around the element.      

**Parameters**  

| Param | Detail |
| --- | --- |
| node:Element | HMTL DOM element to select. |
| content:Boolean | Optional bool state if the contents should be selected or not on non IE browser. |

**Returns**  
Element - Selected element the same element as the one that got passed in.      

**Example**  

### selectorChanged 

***public function selectorChanged(selector:String, callback:function):void***  
Executes callback of the current selection matches the specified selector or not and passes the state and args to the callback.      

**Parameters**  

| Param | Detail |
| --- | --- |
| selector:String | CSS selector to check for. |
| callback:function | Callback with state and args when the selector is matches or not. |

### setContent 

***public function setContent(content:String, args:Object):void***  
Sets the current selection to the specified content. If any contents is selected it will be replaced with the contents passed in to this function. If there is no selection the contents will be inserted where the caret is placed in the editor/page.      

**Parameters**  

| Param | Detail |
| --- | --- |
| content:String | HTML contents to set could also be other formats depending on settings. |
| args:Object | Optional settings object with for example data format. |

**Example**  

### setNode 

***public function setNode(n:Element):Element***  
Sets the current selection to the specified DOM element.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:Element | Element to set as the contents of the selection. |

**Returns**  
Element - Returns the element that got passed in.      

**Example**  

### setRng 

***public function setRng(r:Range):void***  
Changes the selection to the specified DOM range.      

**Parameters**  

| Param | Detail |
| --- | --- |
| r:Range | Range to select. |

## Event details

### onBeforeGetContent 

***public event onBeforeGetContent(selection:[Selection](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Selection.html), args:Object)***  
This event gets executed before contents is inserted into selection.      

**Parameters**  

| Param | Detail |
| --- | --- |
| selection:[Selection](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Selection.html) | Selection object that fired the event. |
| args:Object | Contains things like the contents that will be inserted. |

### onBeforeSetContent 

***public event onBeforeSetContent(selection:[Selection](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Selection.html), args:Object)***  
This event gets executed before contents is extracted from the selection.      

**Parameters**  

| Param | Detail |
| --- | --- |
| selection:[Selection](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Selection.html) | Selection object that fired the event. |
| args:Object | Contains things like the contents that will be returned. |

### onGetContent 

***public event onGetContent(selection:[Selection](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Selection.html), args:Object)***  
This event gets executed when contents is extracted from the selection.      

**Parameters**  

| Param | Detail |
| --- | --- |
| selection:[Selection](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Selection.html) | Selection object that fired the event. |
| args:Object | Contains things like the contents that will be returned. |

### onSetContent 

***public event onSetContent(selection:[Selection](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Selection.html), args:Object)***  
This event gets executed when contents is inserted into selection.      

**Parameters**  

| Param | Detail |
| --- | --- |
| selection:[Selection](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Selection.html) | Selection object that fired the event. |
| args:Object | Contains things like the contents that will be inserted. |