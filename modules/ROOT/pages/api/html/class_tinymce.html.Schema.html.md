---
layout: default
title: tinymce.html.Schema
---

|  |  |
| --- | --- |
| Namespace | tinymce.html |
| Class | Schema |

Schema validator class.<span>Version:</span>3.4      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [Schema](#schema)(settings:Object) : Constructs a new Schema instance. | Schema |
| [addCustomElements](#addcustomelements)(custom_elements:String):void : Adds custom non HTML elements to the schema. | Schema |
| [addValidChildren](#addvalidchildren)(valid_children:String):void : Parses a valid children string and adds them to the schema structure. | Schema |
| [addValidElements](#addvalidelements)(valid_elements:String):void : Parses a valid elements string and adds it to the schema. | Schema |
| [getBlockElements](#getblockelements)():Object : Returns a map with block elements. | Schema |
| [getBoolAttrs](#getboolattrs)():Object : Returns a map with boolean attributes. | Schema |
| [getCustomElements](#getcustomelements)():Object : Returns an map object of all custom elements. | Schema |
| [getElementRule](#getelementrule)(name:String):Object : Returns true/false if the specified element is valid or not according to the schema. | Schema |
| [getNonEmptyElements](#getnonemptyelements)():Object : Returns a map with elements that should be treated as contents regardless if it has text content in them or not such as ... | Schema |
| [getSelfClosingElements](#getselfclosingelements)():Object : Returns a map with self closing tags such as . | Schema |
| [getShortEndedElements](#getshortendedelements)():Object : Returns a map with short ended elements such as BR or IMG. | Schema |
| [getTextBlockElements](#gettextblockelements)():Object : Returns a map with text block elements. | Schema |
| [getWhiteSpaceElements](#getwhitespaceelements)():Object : Returns a map with elements where white space is to be preserved like PRE or SCRIPT. | Schema |
| [isValid](#isvalid)(name:String, attr:String):Boolean : Returns true/false if the specified element name and optional attribute is valid according to the schema. | Schema |
| [isValidChild](#isvalidchild)(name:String, child:String):Boolean : Returns true/false if the specified element and it's child is valid or not according to the schema. | Schema |
| [setValidElements](#setvalidelements)(valid_elements:String):void : Parses a valid elements string and sets it to the schema. | Schema |

## Method details

### Schema 

***public function Schema(settings:Object)***  
Constructs a new Schema instance.      

**Parameters**  

| Param | Detail |
| --- | --- |
| settings:Object | Name/value settings object. |

### addCustomElements 

***public function addCustomElements(custom_elements:String):void***  
Adds custom non HTML elements to the schema.      

**Parameters**  

| Param | Detail |
| --- | --- |
| custom_elements:String | Comma separated list of custom elements to add. |

### addValidChildren 

***public function addValidChildren(valid_children:String):void***  
Parses a valid children string and adds them to the schema structure. The valid children format is for example: "element[child1|child2]".      

**Parameters**  

| Param | Detail |
| --- | --- |
| valid_children:String | Valid children elements string to parse |

### addValidElements 

***public function addValidElements(valid_elements:String):void***  
Parses a valid elements string and adds it to the schema. The valid elements format is for example "element[attr=default|otherattr]". Existing rules will be replaced with the ones specified, so this extends the schema.      

**Parameters**  

| Param | Detail |
| --- | --- |
| valid_elements:String | String in the valid elements format to be parsed. |

### getBlockElements 

***public function getBlockElements():Object***  
Returns a map with block elements.      

**Returns**  
Object - Name/value lookup map for block elements.

### getBoolAttrs 

***public function getBoolAttrs():Object***  
Returns a map with boolean attributes.      

**Returns**  
Object - Name/value lookup map for boolean attributes.

### getCustomElements 

***public function getCustomElements():Object***  
Returns an map object of all custom elements.      

**Returns**  
Object - Name/value map object of all custom elements.

### getElementRule 

***public function getElementRule(name:String):Object***  
Returns true/false if the specified element is valid or not according to the schema.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Element name to check for. |

**Returns**  
Object - Element object or undefined if the element isn't valid.

### getNonEmptyElements 

***public function getNonEmptyElements():Object***  
Returns a map with elements that should be treated as contents regardless if it has text content in them or not such as TD, VIDEO or IMG.      

**Returns**  
Object - Name/value lookup map for non empty elements.

### getSelfClosingElements 

***public function getSelfClosingElements():Object***  
Returns a map with self closing tags such as*   .      

**Returns**  
Object - Name/value lookup map for self closing tags elements.

### getShortEndedElements 

***public function getShortEndedElements():Object***  
Returns a map with short ended elements such as BR or IMG.      

**Returns**  
Object - Name/value lookup map for short ended elements.

### getTextBlockElements 

***public function getTextBlockElements():Object***  
Returns a map with text block elements. Such as: p,h1-h6,div,address      

**Returns**  
Object - Name/value lookup map for block elements.

### getWhiteSpaceElements 

***public function getWhiteSpaceElements():Object***  
Returns a map with elements where white space is to be preserved like PRE or SCRIPT.      

**Returns**  
Object - Name/value lookup map for white space elements.

### isValid 

***public function isValid(name:String, attr:String):Boolean***  
Returns true/false if the specified element name and optional attribute is valid according to the schema.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Name of element to check. |
| attr:String | Optional attribute name to check for. |

**Returns**  
Boolean - True/false if the element and attribute is valid.

### isValidChild 

***public function isValidChild(name:String, child:String):Boolean***  
Returns true/false if the specified element and it's child is valid or not according to the schema.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Element name to check for. |
| child:String | Element child to verify. |

**Returns**  
Boolean - True/false if the element is a valid child of the specified parent.

### setValidElements 

***public function setValidElements(valid_elements:String):void***  
Parses a valid elements string and sets it to the schema. The valid elements format is for example "element[attr=default|otherattr]". Existing rules will be replaced with the ones specified, so this extends the schema.      

**Parameters**  

| Param | Detail |
| --- | --- |
| valid_elements:String | String in the valid elements format to be parsed. |