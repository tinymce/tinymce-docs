---
layout: default
title: tinymce.util.Dispatcher
---

|  |  |
| --- | --- |
| Namespace | tinymce.util |
| Class | Dispatcher |

This class is used to dispatch event to observers/listeners. All internal events inside TinyMCE uses this class.      

**Example**  

## Public Methods

| Method | Defined By |
| --- | --- |
| [Dispatcher](#dispatcher)(scope:Object) : Constructs a new event dispatcher object. | Dispatcher |
| [add](#add)(callback:function, s:Object):function : Add an observer function to be executed when a dispatch call is done. | Dispatcher |
| [addToTop](#addtotop)(callback:function, scope:Object):function : Add an observer function to be executed to the top of the list of observers. | Dispatcher |
| [dispatch](#dispatch)(..:Object):Object : Dispatches an event to all observers/listeners. | Dispatcher |
| [remove](#remove)(callback:function):function : Removes an observer function. | Dispatcher |

## Method details

### Dispatcher 

***public function Dispatcher(scope:Object)***  
Constructs a new event dispatcher object.      

**Parameters**  

| Param | Detail |
| --- | --- |
| scope:Object | Optional default execution scope for all observer functions. |

### add 

***public function add(callback:function, s:Object):function***  
Add an observer function to be executed when a dispatch call is done.      

**Parameters**  

| Param | Detail |
| --- | --- |
| callback:function | Callback function to execute when a dispatch event occurs. |
| s:Object | Optional execution scope, defaults to the one specified in the class constructor. |

**Returns**  
function - Returns the same function as the one passed on.

### addToTop 

***public function addToTop(callback:function, scope:Object):function***  
Add an observer function to be executed to the top of the list of observers.      

**Parameters**  

| Param | Detail |
| --- | --- |
| callback:function | Callback function to execute when a dispatch event occurs. |
| scope:Object | Optional execution scope, defaults to the one specified in the class constructor. |

**Returns**  
function - Returns the same function as the one passed on.

### dispatch 

***public function dispatch(..:Object):Object***  
Dispatches an event to all observers/listeners.      

**Parameters**  

| Param | Detail |
| --- | --- |
| ..:Object | Any number of arguments to dispatch. |

**Returns**  
Object - Last observer functions return value.

### remove 

***public function remove(callback:function):function***  
Removes an observer function.      

**Parameters**  

| Param | Detail |
| --- | --- |
| callback:function | Observer function to remove. |

**Returns**  
function - The same function that got passed in or null if it wasn't found.