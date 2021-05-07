---
layout: default
title: tinymce.UndoManager
---

|  |  |
| --- | --- |
| Namespace | tinymce |
| Class | UndoManager |

This class handles the undo/redo history levels for the editor. Since the build in undo/redo has major drawbacks a custom one was needed.

## Public Methods

| Method | Defined By |
| --- | --- |
| [add](#add)(l:Object):Object : Adds a new undo level/snapshot to the undo list. | UndoManager |
| [beforeChange](#beforechange)():void : Stores away a bookmark to be used when performing an undo action so that the selection is before the change has been mad... | UndoManager |
| [clear](#clear)():void : Removes all undo levels. | UndoManager |
| [hasRedo](#hasredo)():Boolean : Returns true/false if the undo manager has any redo levels. | UndoManager |
| [hasUndo](#hasundo)():Boolean : Returns true/false if the undo manager has any undo levels. | UndoManager |
| [redo](#redo)():Object : Redoes the last action. | UndoManager |
| [undo](#undo)():Object : Undoes the last action. | UndoManager |

## Public Events

| Event | Defined By |
| --- | --- |
| [onAdd](#onadd)(sender:[UndoManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.UndoManager.html), level:Object) : This event will fire each time a new undo level is added to the undo manager. | UndoManager |
| [onBeforeAdd](#onbeforeadd)(sender:[UndoManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.UndoManager.html), level:Object) : This event will fire before a new undo level is added to the undo manager | UndoManager |
| [onRedo](#onredo)(sender:[UndoManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.UndoManager.html), level:Object) : This event will fire when the user make an redo of a change. | UndoManager |
| [onUndo](#onundo)(sender:[UndoManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.UndoManager.html), level:Object) : This event will fire when the user make an undo of a change. | UndoManager |

## Method details

### add 

***public function add(l:Object):Object***  
Adds a new undo level/snapshot to the undo list.      

**Parameters**  

| Param | Detail |
| --- | --- |
| l:Object | Optional undo level object to add. |

**Returns**  
Object - Undo level that got added or null it a level wasn't needed.

### beforeChange 

***public function beforeChange():void***  
Stores away a bookmark to be used when performing an undo action so that the selection is before the change has been made.

### clear 

***public function clear():void***  
Removes all undo levels.

### hasRedo 

***public function hasRedo():Boolean***  
Returns true/false if the undo manager has any redo levels.      

**Returns**  
Boolean - true/false if the undo manager has any redo levels.

### hasUndo 

***public function hasUndo():Boolean***  
Returns true/false if the undo manager has any undo levels.      

**Returns**  
Boolean - true/false if the undo manager has any undo levels.

### redo 

***public function redo():Object***  
Redoes the last action.      

**Returns**  
Object - Redo level or null if no redo was performed.

### undo 

***public function undo():Object***  
Undoes the last action.      

**Returns**  
Object - Undo level or null if no undo was performed.

## Event details

### onAdd 

***public event onAdd(sender:[UndoManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.UndoManager.html), level:Object)***  
This event will fire each time a new undo level is added to the undo manager.      

**Parameters**  

| Param | Detail |
| --- | --- |
| sender:[UndoManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.UndoManager.html) | UndoManager instance that got the new level. |
| level:Object | The new level object containing a bookmark and contents. |

### onBeforeAdd 

***public event onBeforeAdd(sender:[UndoManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.UndoManager.html), level:Object)***  
This event will fire before a new undo level is added to the undo manager      

**Parameters**  

| Param | Detail |
| --- | --- |
| sender:[UndoManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.UndoManager.html) | UndoManager instance that is going to add the new level |
| level:Object | The new level object containing a bookmark and contents |

### onRedo 

***public event onRedo(sender:[UndoManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.UndoManager.html), level:Object)***  
This event will fire when the user make an redo of a change.      

**Parameters**  

| Param | Detail |
| --- | --- |
| sender:[UndoManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.UndoManager.html) | UndoManager instance that got the new level. |
| level:Object | The old level object containing a bookmark and contents. |

### onUndo 

***public event onUndo(sender:[UndoManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.UndoManager.html), level:Object)***  
This event will fire when the user make an undo of a change.      

**Parameters**  

| Param | Detail |
| --- | --- |
| sender:[UndoManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.UndoManager.html) | UndoManager instance that got the new level. |
| level:Object | The old level object containing a bookmark and contents. |