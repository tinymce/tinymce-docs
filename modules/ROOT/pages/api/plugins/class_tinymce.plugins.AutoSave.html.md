---
layout: default
title: tinymce.plugins.AutoSave
---

|  |  |
| --- | --- |
| Namespace | tinymce.plugins |
| Class | AutoSave |

This plugin adds auto-save capability to the TinyMCE text editor to rescue content inadvertently lost. By using localStorage.

## Public Methods

| Method | Defined By |
| --- | --- |
| [getExpDate](#getexpdate)():String : Returns an expiration date UTC string. | AutoSave |
| [getInfo](#getinfo)():Object : Returns information about the plugin as a name/value array. | AutoSave |
| [hasDraft](#hasdraft)():boolean : This method will return true/false if there is a local storage draft available. | AutoSave |
| [init](#init)(ed:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html), url:string):void : Initializes the plugin, this will be executed after the plugin has been created. | AutoSave |
| [removeDraft](#removedraft)():void : Removes the currently stored draft. | AutoSave |
| [restoreDraft](#restoredraft)():void : This method will restore the contents from the storage engine back to the editor. | AutoSave |
| [setupStorage](#setupstorage)():void : This method will setup the storage engine. | AutoSave |
| [storeDraft](#storedraft)():void : This method will store the current contents in the the storage engine. | AutoSave |

## Public Events

| Event | Defined By |
| --- | --- |
| [onRemoveDraft](#onremovedraft)(sender:[AutoSave](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.plugins.AutoSave.html), draft:Object) : This event gets fired when a draft removed/expired. | AutoSave |
| [onStoreDraft](#onstoredraft)(sender:[AutoSave](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.plugins.AutoSave.html), draft:Object) : This event gets fired when a draft is stored to local storage. | AutoSave |
| [onStoreDraft](#onstoredraft)(sender:[AutoSave](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.plugins.AutoSave.html), draft:Object) : This event gets fired when a draft is restored from local storage. | AutoSave |

## Method details

### getExpDate 

***public function getExpDate():String***  
Returns an expiration date UTC string.      

**Returns**  
String - Expiration date UTC string.

### getInfo 

***public function getInfo():Object***  
Returns information about the plugin as a name/value array. The current keys are longname, author, authorurl, infourl and version.      

**Returns**  
Object - Name/value array containing information about the plugin.

### hasDraft 

***public function hasDraft():boolean***  
This method will return true/false if there is a local storage draft available.      

**Returns**  
boolean - true/false state if there is a local draft.

### init 

***public function init(ed:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html), url:string):void***  
Initializes the plugin, this will be executed after the plugin has been created. This call is done before the editor instance has finished it's initialization so use the onInit event of the editor instance to intercept that event.      

**Parameters**  

| Param | Detail |
| --- | --- |
| ed:[Editor](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html) | Editor instance that the plugin is initialized in. |
| url:string | Absolute URL to where the plugin is located. |

### removeDraft 

***public function removeDraft():void***  
Removes the currently stored draft.

### restoreDraft 

***public function restoreDraft():void***  
This method will restore the contents from the storage engine back to the editor.

### setupStorage 

***public function setupStorage():void***  
This method will setup the storage engine. If the browser has support for it.

### storeDraft 

***public function storeDraft():void***  
This method will store the current contents in the the storage engine.

## Event details

### onRemoveDraft 

***public event onRemoveDraft(sender:[AutoSave](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.plugins.AutoSave.html), draft:Object)***  
This event gets fired when a draft removed/expired.      

**Parameters**  

| Param | Detail |
| --- | --- |
| sender:[AutoSave](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.plugins.AutoSave.html) | Plugin instance sending the event. |
| draft:Object | Draft object containing the HTML contents of the editor. |

### onStoreDraft 

***public event onStoreDraft(sender:[AutoSave](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.plugins.AutoSave.html), draft:Object)***  
This event gets fired when a draft is stored to local storage.      

**Parameters**  

| Param | Detail |
| --- | --- |
| sender:[AutoSave](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.plugins.AutoSave.html) | Plugin instance sending the event. |
| draft:Object | Draft object containing the HTML contents of the editor. |

### onStoreDraft 

***public event onStoreDraft(sender:[AutoSave](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.plugins.AutoSave.html), draft:Object)***  
This event gets fired when a draft is restored from local storage.      

**Parameters**  

| Param | Detail |
| --- | --- |
| sender:[AutoSave](https://www.tiny.cloud/docs-3x/api/plugins/class_tinymce.plugins.AutoSave.html) | Plugin instance sending the event. |
| draft:Object | Draft object containing the HTML contents of the editor. |