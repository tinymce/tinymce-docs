---
layout: default
title: tinymce.Theme
---

|  |  |
| --- | --- |
| Namespace | tinymce |
| Class | Theme |

TinyMCE theme class.

## Public Methods

| Method | Defined By |
| --- | --- |
| [getInfo](#getinfo)():Object : Meta info method, this method gets executed when TinyMCE wants to present information about the theme for example in the... | Theme |
| [init](#init)(editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html), url:String):void : Initializes the theme. | Theme |
| [renderUI](#renderui)(obj:Object):Object : This method is responsible for rendering/generating the overall user interface with toolbars, buttons, iframe containers... | Theme |

## Method details

### getInfo 

***public function getInfo():Object***  
Meta info method, this method gets executed when TinyMCE wants to present information about the theme for example in the about/help dialog.      

**Returns**  
Object - Returns an object with meta information about the theme the current items are longname, author, authorurl, infourl and version.

### init 

***public function init(editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html), url:String):void***  
Initializes the theme.      

**Parameters**  

| Param | Detail |
| --- | --- |
| editor:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) | Editor instance that created the theme instance. |
| url:String | Absolute URL where the theme is located. |

### renderUI 

***public function renderUI(obj:Object):Object***  
This method is responsible for rendering/generating the overall user interface with toolbars, buttons, iframe containers etc.      

**Parameters**  

| Param | Detail |
| --- | --- |
| obj:Object | Object parameter containing the targetNode DOM node that will be replaced visually with an editor instance. |

**Returns**  
Object - an object with items like iframeContainer, editorContainer, sizeContainer, deltaWidth, deltaHeight.