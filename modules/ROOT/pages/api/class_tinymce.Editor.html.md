---
layout: default
title: tinymce.Editor
---

|  |  |
| --- | --- |
| Namespace | tinymce |
| Class | Editor |

This class contains the core logic for a TinyMCE editor.      

**Example**  

## Public Properties

| Property | Defined By |
| --- | --- |
| [baseURI](#baseuri) : [URI](https://www.tiny.cloud/docs-3x/api/util/class_tinymce.util.URI.html) : URI object to current document that holds the TinyMCE editor instance. | Editor |
| [contentCSS](#contentcss) : Array : Array with CSS files to load into the iframe. | Editor |
| [contentStyles](#contentstyles) : Array : Array of CSS styles to add to head of document when the editor loads. | Editor |
| [controlManager](#controlmanager) : [ControlManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.ControlManager.html/) : Control manager instance for the editor. | Editor |
| [documentBaseURI](#documentbaseuri) : [URI](https://www.tiny.cloud/docs-3x/api/util/class_tinymce.util.URI.html) : URI object to document configured for the TinyMCE instance. | Editor |
| [dom](#dom) : [DOMUtils](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.DOMUtils.html) : DOM instance for the editor. | Editor |
| [formatter](#formatter) : [Formatter](https://www.tiny.cloud/docs-3x/api/class_tinymce.Formatter.html) : Formatter instance. | Editor |
| [id](#id) : String : Editor instance id, normally the same as the div/textarea that was replaced. | Editor |
| [initialized](#initialized) : Boolean : Is set to true after the editor instance has been initialized | Editor |
| [isNotDirty](#isnotdirty) : Boolean : State to force the editor to return false on a isDirty call. | Editor |
| [parser](#parser) : [DomParser](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.DomParser.html) : HTML parser will be used when contents is inserted into the editor. | Editor |
| [plugins](#plugins) : Object : Name/Value object containting plugin instances. | Editor |
| [schema](#schema) : [Schema](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Schema.html) : Schema instance, enables you to validate elements and it's children. | Editor |
| [selection](#selection) : [Selection](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Selection.html) : Selection instance for the editor. | Editor |
| [serializer](#serializer) : [Serializer](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Serializer.html) : DOM serializer for the editor. | Editor |
| [settings](#settings) : Object : Name/value collection with editor settings. | Editor |
| [theme](#theme) : [Theme](https://www.tiny.cloud/docs-3x/api/class_tinymce.Theme.html) : Reference to the theme instance that was used to generate the UI. | Editor |
| [undoManager](#undomanager) : [UndoManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.UndoManager.html) : Undo manager instance, responsible for handling undo levels. | Editor |
| [windowManager](#windowmanager) : [WindowManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.WindowManager.html) : Window manager reference, use this to open new windows and dialogs. | Editor |

## Public Methods

| Method | Defined By |
| --- | --- |
| [Editor](#editor)(id:String, settings:Object) : Constructs a editor instance by id. | Editor |
| [addButton](#addbutton)(name:String, settings:Object):void : Adds a button that later gets created by the ControlManager. | Editor |
| [addCommand](#addcommand)(name:String, callback:tinymce.Editor.addCommandCallback, scope:Object):void : Adds a custom command to the editor, you can also override existing commands with this method. | Editor |
| [addQueryStateHandler](#addquerystatehandler)(name:String, callback:tinymce.Editor.addQueryStateHandlerCallback, scope:Object):void : Adds a custom query state command to the editor, you can also override existing commands with this method. | Editor |
| [addQueryValueHandler](#addqueryvaluehandler)(name:String, callback:tinymce.Editor.addQueryValueHandlerCallback, scope:Object):void : Adds a custom query value command to the editor, you can also override existing commands with this method. | Editor |
| [addShortcut](#addshortcut)(pa:String, desc:String, cmd_func:String/Function, sc:Object):Boolean : Adds a keyboard shortcut for some command or function. | Editor |
| [addVisual](#addvisual)(elm:Element):void : Adds visual aid for tables, anchors etc so they can be more easily edited inside the editor. | Editor |
| [convertURL](#converturl)(url:string, name:string, elm:string/HTMLElement):string : URL converter function this gets executed each time a user adds an img, a or any other element that has a URL in it. | Editor |
| [destroy](#destroy)(s:Boolean):void : Destroys the editor instance by removing all events, element references or other resources that could leak memory. | Editor |
| [execCallback](#execcallback)(n:String):Object : Executes a legacy callback. | Editor |
| [execCommand](#execcommand)(cmd:String, ui:Boolean, val:mixed, a:Object):Boolean : Executes a command on the current instance. | Editor |
| [focus](#focus)(skip_focus:Boolean):void : Focuses/activates the editor. | Editor |
| [getBody](#getbody)():Element : Returns the iframes body element. | Editor |
| [getContainer](#getcontainer)():Element : Returns the editors container element. | Editor |
| [getContent](#getcontent)(args:Object):String : Gets the content from the editor instance, this will cleanup the content before it gets returned using the different cle... | Editor |
| [getContentAreaContainer](#getcontentareacontainer)():Element : Returns the editors content area container element. | Editor |
| [getDoc](#getdoc)():Document : Returns the iframes document object. | Editor |
| [getElement](#getelement)():Element : Returns the target element/textarea that got replaced with a TinyMCE editor instance. | Editor |
| [getLang](#getlang)(n:String, dv:String):void : Returns a language pack item by name/key. | Editor |
| [getParam](#getparam)(n:String, dv:String, ty:String):String : Returns a configuration parameter by name. | Editor |
| [getWin](#getwin)():Window : Returns the iframes window object. | Editor |
| [hide](#hide)():void : Hides the editor and shows any textarea/div that the editor is supposed to replace. | Editor |
| [init](#init)():void : Initializes the editor this will be called automatically when all plugins/themes and language packs are loaded by the re... | Editor |
| [initContentBody](#initcontentbody)():void : This method get called by the init method ones the iframe is loaded. | Editor |
| [isDirty](#isdirty)():Boolean : Returns true/false if the editor is dirty or not. | Editor |
| [isHidden](#ishidden)():Boolean : Returns true/false if the editor is hidden or not. | Editor |
| [load](#load)(o:Object):String : Loads contents from the textarea or div element that got converted into an editor instance. | Editor |
| [nodeChanged](#nodechanged)(o:Object):void : Distpaches out a onNodeChange event to all observers. | Editor |
| [queryCommandState](#querycommandstate)(cmd:string):Boolean : Returns a command specific state, for example if bold is enabled or not. | Editor |
| [queryCommandValue](#querycommandvalue)(c:string):Object : Returns a command specific value, for example the current font size. | Editor |
| [remove](#remove)():void : Removes the editor from the dom and tinymce collection. | Editor |
| [render](#render)():void : Renderes the editor/adds it to the page. | Editor |
| [save](#save)(o:Object):String : Saves the contents from a editor out to the textarea or div element that got converted into an editor instance. | Editor |
| [setContent](#setcontent)(content:String, args:Object):String : Sets the specified content to the editor instance, this will cleanup the content before it gets set using the different ... | Editor |
| [setProgressState](#setprogressstate)(b:Boolean, ti:Number, o:Object):Boolean : Sets the progress state, this will display a throbber/progess for the editor. | Editor |
| [show](#show)():void : Shows the editor and hides any textarea/div that the editor is supposed to replace. | Editor |
| [translate](#translate)(s:String):String : Translates the specified string by replacing variables with language pack items it will also check if there is a key mat... | Editor |

## Property details

### baseURI 

***public baseURI : [URI](https://www.tiny.cloud/docs-3x/api/util/class_tinymce.util.URI.html)***  
URI object to current document that holds the TinyMCE editor instance.      

**Example**  

### contentCSS 

***public contentCSS : Array***  
Array with CSS files to load into the iframe.

### contentStyles 

***public contentStyles : Array***  
Array of CSS styles to add to head of document when the editor loads.

### controlManager 

***public controlManager : [ControlManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.ControlManager.html)***  
Control manager instance for the editor. Will enables you to create new UI elements and change their states etc.      

**Example**  

### documentBaseURI 

***public documentBaseURI : [URI](https://www.tiny.cloud/docs-3x/api/util/class_tinymce.util.URI.html)***  
URI object to document configured for the TinyMCE instance.      

**Example**  

### dom 

***public dom : [DOMUtils](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.DOMUtils.html)***  
DOM instance for the editor.      

**Example**  

### formatter 

***public formatter : [Formatter](https://www.tiny.cloud/docs-3x/api/class_tinymce.Formatter.html)***  
Formatter instance.

### id 

***public id : String***  
Editor instance id, normally the same as the div/textarea that was replaced.

### initialized 

***public initialized : Boolean***  
Is set to true after the editor instance has been initialized      

**Example**  

### isNotDirty 

***public isNotDirty : Boolean***  
State to force the editor to return false on a isDirty call.      

**Example**  

### parser 

***public parser : [DomParser](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.DomParser.html)***  
HTML parser will be used when contents is inserted into the editor.

### plugins 

***public plugins : Object***  
Name/Value object containting plugin instances.      

**Example**  

### schema 

***public schema : [Schema](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html.Schema.html)***  
Schema instance, enables you to validate elements and it's children.

### selection 

***public selection : [Selection](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Selection.html)***  
Selection instance for the editor.      

**Example**  

### serializer 

***public serializer : [Serializer](https://www.tiny.cloud/docs-3x/api/dom/class_tinymce.dom.Serializer.html)***  
DOM serializer for the editor. Will be used when contents is extracted from the editor.      

**Example**  

### settings 

***public settings : Object***  
Name/value collection with editor settings.      

**Example**  

### theme 

***public theme : [Theme](https://www.tiny.cloud/docs-3x/api/class_tinymce.Theme.html)***  
Reference to the theme instance that was used to generate the UI.      

**Example**  

### undoManager 

***public undoManager : [UndoManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.UndoManager.html)***  
Undo manager instance, responsible for handling undo levels.      

**Example**  

### windowManager 

***public windowManager : [WindowManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.WindowManager.html)***  
Window manager reference, use this to open new windows and dialogs.      

**Example**  

## Method details

### Editor 

***public function Editor(id:String, settings:Object)***  
Constructs a editor instance by id.<span>Author(s):</span>Moxiecode      

**Parameters**  

| Param | Detail |
| --- | --- |
| id:String | Unique id for the editor. |
| settings:Object | Optional settings string for the editor. |

### addButton 

***public function addButton(name:String, settings:Object):void***  
Adds a button that later gets created by the ControlManager. This is a shorter and easier method of adding buttons without the need to deal with the ControlManager directly. But it's also less powerfull if you need more control use the ControlManagers factory methods instead.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Button name to add. |
| settings:Object | Settings object with title, cmd etc. |

**Example**  

### addCommand 

***public function addCommand(name:String, callback:tinymce.Editor.addCommandCallback, scope:Object):void***  
Adds a custom command to the editor, you can also override existing commands with this method. The command that you add can be executed with execCommand.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Command name to add/override. |
| callback:tinymce.Editor.addCommandCallback | Function to execute when the command occurs. |
| scope:Object | Optional scope to execute the function in. |

**Example**  

### addQueryStateHandler 

***public function addQueryStateHandler(name:String, callback:tinymce.Editor.addQueryStateHandlerCallback, scope:Object):void***  
Adds a custom query state command to the editor, you can also override existing commands with this method. The command that you add can be executed with queryCommandState function.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Command name to add/override. |
| callback:tinymce.Editor.addQueryStateHandlerCallback | Function to execute when the command state retrival occurs. |
| scope:Object | Optional scope to execute the function in. |

### addQueryValueHandler 

***public function addQueryValueHandler(name:String, callback:tinymce.Editor.addQueryValueHandlerCallback, scope:Object):void***  
Adds a custom query value command to the editor, you can also override existing commands with this method. The command that you add can be executed with queryCommandValue function.      

**Parameters**  

| Param | Detail |
| --- | --- |
| name:String | Command name to add/override. |
| callback:tinymce.Editor.addQueryValueHandlerCallback | Function to execute when the command value retrival occurs. |
| scope:Object | Optional scope to execute the function in. |

### addShortcut 

***public function addShortcut(pa:String, desc:String, cmd_func:String/Function, sc:Object):Boolean***  
Adds a keyboard shortcut for some command or function.      

**Parameters**  

| Param | Detail |
| --- | --- |
| pa:String | Shortcut pattern. Like for example: ctrl+alt+o. |
| desc:String | Text description for the command. |
| cmd_func:String/Function | Command name string or function to execute when the key is pressed. |
| sc:Object | Optional scope to execute the function in. |

**Returns**  
Boolean - true/false state if the shortcut was added or not.

### addVisual 

***public function addVisual(elm:Element):void***  
Adds visual aid for tables, anchors etc so they can be more easily edited inside the editor.      

**Parameters**  

| Param | Detail |
| --- | --- |
| elm:Element | Optional root element to loop though to find tables etc that needs the visual aid. |

### convertURL 

***public function convertURL(url:string, name:string, elm:string/HTMLElement):string***  
URL converter function this gets executed each time a user adds an img, a or any other element that has a URL in it. This will be called both by the DOM and HTML manipulation functions.      

**Parameters**  

| Param | Detail |
| --- | --- |
| url:string | URL to convert. |
| name:string | Attribute name src, href etc. |
| elm:string/HTMLElement | Tag name or HTML DOM element depending on HTML or DOM insert. |

**Returns**  
string - Converted URL string.

### destroy 

***public function destroy(s:Boolean):void***  
Destroys the editor instance by removing all events, element references or other resources that could leak memory. This method will be called automatically when the page is unloaded but you can also call it directly if you know what you are doing.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:Boolean | Optional state if the destroy is an automatic destroy or user called one. |

### execCallback 

***public function execCallback(n:String):Object***  
Executes a legacy callback. This method is useful to call old 2.x option callbacks. There new event model is a better way to add callback so this method might be removed in the future.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Name of the callback to execute. |

**Returns**  
Object - Return value passed from callback function.

### execCommand 

***public function execCommand(cmd:String, ui:Boolean, val:mixed, a:Object):Boolean***  
Executes a command on the current instance. These commands can be TinyMCE internal commands prefixed with "mce" or they can be build in browser commands such as "Bold". A compleate list of browser commands is available on MSDN or Mozilla.org. This function will dispatch the execCommand function on each plugin, theme or the execcommand_callback option if none of these return true it will handle the command as a internal browser command.      

**Parameters**  

| Param | Detail |
| --- | --- |
| cmd:String | Command name to execute, for example mceLink or Bold. |
| ui:Boolean | True/false state if a UI (dialog) should be presented or not. |
| val:mixed | Optional command value, this can be anything. |
| a:Object | Optional arguments object. |

**Returns**  
Boolean - True/false if the command was executed or not.

### focus 

***public function focus(skip_focus:Boolean):void***  
Focuses/activates the editor. This will set this editor as the activeEditor in the tinymce collection it will also place DOM focus inside the editor.      

**Parameters**  

| Param | Detail |
| --- | --- |
| skip_focus:Boolean | Skip DOM focus. Just set is as the active editor. |

### getBody 

***public function getBody():Element***  
Returns the iframes body element.      

**Returns**  
Element - Iframe body element.

### getContainer 

***public function getContainer():Element***  
Returns the editors container element. The container element wrappes in all the elements added to the page for the editor. Such as UI, iframe etc.      

**Returns**  
Element - HTML DOM element for the editor container.

### getContent 

***public function getContent(args:Object):String***  
Gets the content from the editor instance, this will cleanup the content before it gets returned using the different cleanup rules options.      

**Parameters**  

| Param | Detail |
| --- | --- |
| args:Object | Optional content object, this gets passed around through the whole get process. |

**Returns**  
String - Cleaned content string, normally HTML contents.      

**Example**  

### getContentAreaContainer 

***public function getContentAreaContainer():Element***  
Returns the editors content area container element. The this element is the one who holds the iframe or the editable element.      

**Returns**  
Element - HTML DOM element for the editor area container.

### getDoc 

***public function getDoc():Document***  
Returns the iframes document object.      

**Returns**  
Document - Iframe DOM document object.

### getElement 

***public function getElement():Element***  
Returns the target element/textarea that got replaced with a TinyMCE editor instance.      

**Returns**  
Element - HTML DOM element for the replaced element.

### getLang 

***public function getLang(n:String, dv:String):void***  
Returns a language pack item by name/key.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Name/key to get from the language pack. |
| dv:String | Optional default value to retrive. |

### getParam 

***public function getParam(n:String, dv:String, ty:String):String***  
Returns a configuration parameter by name.      

**Parameters**  

| Param | Detail |
| --- | --- |
| n:String | Configruation parameter to retrive. |
| dv:String | Optional default value to return. |
| ty:String | Optional type parameter. |

**Returns**  
String - Configuration parameter value or default value.      

**Example**  

### getWin 

***public function getWin():Window***  
Returns the iframes window object.      

**Returns**  
Window - Iframe DOM window object.

### hide 

***public function hide():void***  
Hides the editor and shows any textarea/div that the editor is supposed to replace.

### init 

***public function init():void***  
Initializes the editor this will be called automatically when all plugins/themes and language packs are loaded by the rendered method. This method will setup the iframe and create the theme and plugin instances.

### initContentBody 

***public function initContentBody():void***  
This method get called by the init method ones the iframe is loaded. It will fill the iframe with contents, setups DOM and selection objects for the iframe. This method should not be called directly.

### isDirty 

***public function isDirty():Boolean***  
Returns true/false if the editor is dirty or not. It will get dirty if the user has made modifications to the contents.      

**Returns**  
Boolean - True/false if the editor is dirty or not. It will get dirty if the user has made modifications to the contents.      

**Example**  

### isHidden 

***public function isHidden():Boolean***  
Returns true/false if the editor is hidden or not.      

**Returns**  
Boolean - True/false if the editor is hidden or not.

### load 

***public function load(o:Object):String***  
Loads contents from the textarea or div element that got converted into an editor instance. This method will move the contents from that textarea or div into the editor by using setContent so all events etc that method has will get dispatched as well.      

**Parameters**  

| Param | Detail |
| --- | --- |
| o:Object | Optional content object, this gets passed around through the whole load process. |

**Returns**  
String - HTML string that got set into the editor.

### nodeChanged 

***public function nodeChanged(o:Object):void***  
Distpaches out a onNodeChange event to all observers. This method should be called when you need to update the UI states or element path etc.      

**Parameters**  

| Param | Detail |
| --- | --- |
| o:Object | Optional object to pass along for the node changed event. |

### queryCommandState 

***public function queryCommandState(cmd:string):Boolean***  
Returns a command specific state, for example if bold is enabled or not.      

**Parameters**  

| Param | Detail |
| --- | --- |
| cmd:string | Command to query state from. |

**Returns**  
Boolean - Command specific state, for example if bold is enabled or not.

### queryCommandValue 

***public function queryCommandValue(c:string):Object***  
Returns a command specific value, for example the current font size.      

**Parameters**  

| Param | Detail |
| --- | --- |
| c:string | Command to query value from. |

**Returns**  
Object - Command specific value, for example the current font size.

### remove 

***public function remove():void***  
Removes the editor from the dom and tinymce collection.

### render 

***public function render():void***  
Renderes the editor/adds it to the page.

### save 

***public function save(o:Object):String***  
Saves the contents from a editor out to the textarea or div element that got converted into an editor instance. This method will move the HTML contents from the editor into that textarea or div by getContent so all events etc that method has will get dispatched as well.      

**Parameters**  

| Param | Detail |
| --- | --- |
| o:Object | Optional content object, this gets passed around through the whole save process. |

**Returns**  
String - HTML string that got set into the textarea/div.

### setContent 

***public function setContent(content:String, args:Object):String***  
Sets the specified content to the editor instance, this will cleanup the content before it gets set using the different cleanup rules options.      

**Parameters**  

| Param | Detail |
| --- | --- |
| content:String | Content to set to editor, normally HTML contents but can be other formats as well. |
| args:Object | Optional content object, this gets passed around through the whole set process. |

**Returns**  
String - HTML string that got set into the editor.      

**Example**  

### setProgressState 

***public function setProgressState(b:Boolean, ti:Number, o:Object):Boolean***  
Sets the progress state, this will display a throbber/progess for the editor. This is ideal for asycronous operations like an AJAX save call.      

**Parameters**  

| Param | Detail |
| --- | --- |
| b:Boolean | Boolean state if the progress should be shown or hidden. |
| ti:Number | Optional time to wait before the progress gets shown. |
| o:Object | Optional object to pass to the progress observers. |

**Returns**  
Boolean - Same as the input state.      

**Example**  

### show 

***public function show():void***  
Shows the editor and hides any textarea/div that the editor is supposed to replace.

### translate 

***public function translate(s:String):String***  
Translates the specified string by replacing variables with language pack items it will also check if there is a key mathcin the input.      

**Parameters**  

| Param | Detail |
| --- | --- |
| s:String | String to translate by the language pack data. |

**Returns**  
String - Translated string.