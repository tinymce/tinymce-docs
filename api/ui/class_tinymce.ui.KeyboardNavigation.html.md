---
layout: default
title: tinymce.ui.KeyboardNavigation
---

|  |  |
| --- | --- |
| Namespace | tinymce.ui |
| Class | KeyboardNavigation |

This class provides basic keyboard navigation using the arrow keys to children of a component. For example, this class handles moving between the buttons on the toolbars.

## Public Methods

| Method | Defined By |
| --- | --- |
| [KeyboardNavigation](#keyboardnavigation)(settings:Object, dom:DOMUtils) : Create a new KeyboardNavigation instance to handle the focus for a specific element. | KeyboardNavigation |
| [destroy](#destroy)():void : Destroys the KeyboardNavigation and unbinds any focus/blur event handles it might have added. | KeyboardNavigation |

## Method details

### KeyboardNavigation 

***public function KeyboardNavigation(settings:Object, dom:DOMUtils)***  
Create a new KeyboardNavigation instance to handle the focus for a specific element.      

**Parameters**  

| Param | Detail |
| --- | --- |
| settings:Object | the settings object to define how keyboard navigation works. |
| dom:DOMUtils | the DOMUtils instance to use. |

### destroy 

***public function destroy():void***  
Destroys the KeyboardNavigation and unbinds any focus/blur event handles it might have added.