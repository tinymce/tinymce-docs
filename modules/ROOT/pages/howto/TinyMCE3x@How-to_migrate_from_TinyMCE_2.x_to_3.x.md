---
layout: default
title: Migrate from TinyMCE 2.x to 3.x
---

## Overall changes from the old and new API

The new API of TinyMCE 3.x has changed quite a bit from the old 2.x API. The biggest change is that all methods are now contained in individual classes instead of being added to the root class. The old API had its DOM methods inside the tinyMCE class, for example, tinyMCE.addClass; but the new API has an extra level for the same call: tinymce.DOM.addClass . this makes the API clearer and easier to work with since each type of functionality has its own namespace in the API.

Another change is that the [new API](https://www.tiny.cloud/docs-3x/api/) uses the observer pattern internally: this enables you to more easily trap events and add custom logic before/after a specific action. You can now add an click event by using patterns like tinyMCE.activeEditor.onClick.add.

## Config changes

The default config/settings for TinyMCE have been changed. Some values are now enabled by default to produce more valid output. Non-string values are as of 3.x forced to be the right datatype. Strings like "false" will not be converted into a boolean false automatically, this is a performance enhancement.

[forced_root_block](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@forced_root_block/) This option is now enabled by default to normalize the behavior for different browsers. To learn more why we changed this read the [FAQ](https://www.tiny.cloud/docs-3x/extras/TinyMCE3x@TinyMCE_FAQ/). [apply_source_formatting](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@apply_source_formatting/) This option is now enabled by default to produce better output. It might produce problems for users that have an nl2br call in their PHP code. [convert_fonts_to_spans](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@convert_fonts_to_spans/) This is now enabled by default since font elements are deprecated and should not be used.

## Common functions

This is a list of common function calls, how they were made in the old API, and how they are made in the new API:

| 2.x API | 3.x API |
| tinyMCE.getParam | tinyMCE.activeEditor.getParam |
| tinyMCE.selectedInstance | tinyMCE.activeEditor |
| tinyMCE.getContent | tinyMCE.activeEditor.getContent |
| tinyMCE.setContent | tinyMCE.activeEditor.setContent |
| tinyMCE.getInstanceById | tinyMCE.get |
| tinyMCE.selectedInstance.selection.getSelectedHTML | tinyMCE.activeEditor.selection.getContent |
| tinyMCE.selectedInstance.selection.getSelectedText | tinyMCE.activeEditor.selection.getContent({format:'text'}) |
| tinyMCE.selectedInstance.selection.selectNode | tinyMCE.activeEditor.selection.select |
| tinyMCE.selectedInstance.oldTargetElement | tinyMCE.activeEditor.getElement |
| tinyMCE.selectedInstance.getFocusElement | tinyMCE.activeEditor.selection.getNode |
| tinyMCE.updateContent | tinyMCE.activeEditor.load |
| tinyMCE.addEvent | tinymce.dom.Event.add |
| tinyMCE.removeMCEControl(editorId) | tinyMCE.execCommand('mceRemoveControl', false, editorId) |
| tinyMCE.applyTemplate(html) | tinyMCE.activeEditor.translate(html) |

[See the API for details!](https://www.tiny.cloud/docs-3x/api/)

## Language files

Language file format:

*   Old: tinyMCE.addToLang('pluginName',{ stringName: 'string_value', ... stringName_n: 'stringValue_n'});
*   New: [tinyMCE.addI18n](https://www.tiny.cloud/docs-3x/api/html/class_tinymce.html/#addi18n)('en.pluginName',{ stringName: 'string_value', ... stringName_n: 'stringValue_n'});

To refer to a language string:

*   Old: {$lang_pluginName_stringName}
*   New: {#pluginName.stringName}

To create language packs for tinyMCE plugins use the new [language packs](https://www.tiny.cloud/docs-3x/customization/TinyMCE3x@Creating_a_language_pack/).

## editor_plugin.js

When migrating your plugin generally start by taking the example plugin from tinyMCE installation directory so that you can use the new structure and continue with pasting your old code into it.

Plugin initialization

*   Old: initInstance : function(inst) {
*   New: init : function(ed, url) {

*   Old: getInfo()
*   New: getInfo() function remains the same, but is moved into init().

## Adding a button

Remove the getControlHTML() function, buttons are now added in init() function using [addButton()](https://www.tiny.cloud/docs-3x/api/class_tinymce.Editor.html/#addbutton) function.

*   Old: `return tinyMCE.getButtonHTML('button_name', 'lang_pluginName_stringName', '{$themeurl}/images/plugin.gif', 'mceplugin_command', true);`
*   New: `ed.[addButton](/api/class_tinymce.Editor.html/#addbutton)('button_name', {title : 'pluginName.stringName', cmd : 'mceplugin_command', 'class' : 'class_name'});`

Parameters:

button_name is used to refer to the button when changing its state (selected, disabled, normal) title is name of the language dependent string (note that # symbol is omitted). To refer to theme lang string use 'themeName.stringName' cmd is command name (leave it as it was) class refers to CSS style class. By default button images are now taken from image map (themes/advanced/img/icons.gif). Although it is possible to enter icon filename (see: [Button constructor](https://www.tiny.cloud/docs-3x/api/ui/class_tinymce.ui.Button.html/) it is better to add your icon to the image map and use CSS class_name to refer to it. CSS class `'class_name'` should be defined in `/themes/advanced/skins/default/ui.css` (eg. `.defaultSkin span.mce_print {background-position:-440px -20px}`) (replace `defaultskin` with whatever skin you are using)

## Adding a keyboard shortcut

*   Old: `inst.addShortcut('ctrl', 'k', 'lang_pluginName_stringName', 'mceplugin_command');`
*   New: `ed.[addShortcut](/api/class_tinymce.Editor.html/#addshortcut)('ctrl+k', 'pluginName.stringName', 'mceplugin_command');`

*   Old: `tinyMCE.importPluginLanguagePack('plugin_name');`
*   New: `tinymce.PluginManager.[requireLangPack](/api/class_tinymce.AddOnManager.html/)('plugin_name');`

## Handling node change

*   Old: `handleNodeChange : function(editor_id, node, undo_index, undo_levels, visual_aid, any_selection) {`
*   New: nodechange handler can now be added into the `init()` function: `ed.[onNodeChange](/api/class_tinymce.Editor.html/#nodechanged).add(function(ed, cm, n, co) { ... });`

## To change the button appearance

*   Old: `tinyMCE.switchClass(editor_id + '_button_name', 'mceButtonSelected');`
*   New: `cm.setActive('button_name', true);`

*   Old: `tinyMCE.switchClass(editor_id + '_button_name', 'mceButtonNormal');`
*   New: `cm.setActive('button_name', false);`

or/and

*   New: `cm.setDisabled('button_name', false);`

*   Old: `tinyMCE.switchClass(editor_id + '_button_name', 'mceButtonDisabled');`
*   New: `cm.setDisabled('button_name', true);`

Note: Before setting button to active, make sure that you set disabled to false (if there the button can get into disabled state) otherwise the button will look weird.

## To check parent element

*   Old: `if (elm = tinyMCE.getParentElement(node, "p"))`
*   New: `if (elm = ed.dom.getParent(n, 'p'))`

## To check if something is selected

*   Old `if (anySelection || (focusElm != null))`
*   New `if (!ed.selection.isCollapsed())`

## To get selected element

*   Old `elm = tinyMCE.selectedElement;`
*   New `elm = ed.selection.getNode();`

## Execute command

Either register a command handler in the init function: ed.addCommand('mcePluginName', function() { ... handle command ... }); or use the the `execcommand` function as in 2.x plugin

*   Old: `execCommand : function(editor_id, element, command, user_interface, value)`
*   New: `execCommand : function(cmd, ui, val)`

## To get the editor instance

*   Old: `ed = tinyMCE.getInstanceById(editor_id);`
*   New: `ed = tinyMCE.activeEditor;`

## To open window

* Old:

```js
var params = new Array();
params['file']   = '../../plugins/plugin_name/file.html?param=' + tinyMCE.getParam("pluginName_param_name");
params['width']  = 640;
params['height'] = 511;
tinyMCE.openWindow(params, {editor_id : editor_id, inline : "yes"});
```

* New:

```js
ed.windowManager.open({
  url : this.url + 'file.html?param=' + ed.getParam("pluginName_param_name"),
  width : 640 + parseInt(ed.getLang('amadeo_draft.delta_width', 0)),
  height : 511 + parseInt(ed.getLang('amadeo_draft.delta_height', 0)),
  movable : true,
  inline : true
});
```

Note: To get access to the plugin url either register command handler in init function, or store the 'url' variable value in this.url

## Alert user with language dependent string

*   Old: `alert(tinyMCE.entityDecode(tinyMCE.getLang('lang_pluginName_stringName')));`
*   New: `alert(ed.getLang('pluginName.stringName'));`

## Get editor instance in plugin

*   Old: var ed = tinyMCE.getInstanceById(tinyMCE.getWindowArg('editor_id'));
*   New: var ed = tinyMCEPopup.editor;

## Themes

When upgrading a theme, it's best to take the latest advanced theme and then start moving your old theme code into it bit by bit (as opposed to updating your old 2.x theme code). The 2.x `_buttons` array is now controlled by the skin your theme uses. `_buttons` becomes controls and is a lookup object which you don't have to update in order to change button images. The images for the buttons are now based on an image map and can be set in the skins's ui.css file. You can still use individual images per icon by changing the `ui.css` style sheet under the section `/* Theme */`. The style sheet itself is generally well sectioned and easily configurable.

`getControlHTML` is now `createControl` and you no longer need to return HTML code for custom controls. Instead use the tinymce control objects. `Native select` becomes `ListBox` which can be created via the [ControlManager](https://www.tiny.cloud/docs-3x/api/class_tinymce.ControlManager.html/) object: this.editor.controlManager.createListBox().

In 2.x themes commands were implemented as a switch in the `execCommand` method. In 3.x, any custom command executed via the theme's `execCommand` method will attempt to call a method on the theme object with a prefixed underscore. So for example if a button calls `execCommand("myAction")`, the method `_myAction` will be called on the theme object.
