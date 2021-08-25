---
layout: default
title: Migrating from TinyMCE 4 to TinyMCE 5.
title_nav: Migrating from TinyMCE 4
description: Guidance for migrating from TinyMCE 4 to TinyMCE 5.
keywords: migration considerations premigration pre-migration
---

Most configuration changes in TinyMCE 5 only affect complex use cases, such as customized user interface components. The process for setting up a basic TinyMCE 5 instance is the same as TinyMCE 4.

This chapter describes the migration process and workarounds for customers using TinyMCE 4. It describes the settings that require updating prior to migration; and workaround procedures for deprecated, deleted, and updated features.

> **Note**: For support related to migration, please contact [Tiny support](https://support.tiny.cloud/hc/en-us/requests/new). Open Source users: Please report issues on the [TinyMCE GitHub Repository](https://github.com/tinymce/tinymce/).

## Contents

* [Editor-Core](#editor-core)
* [Themes](#themes)
* [User Interface components](#userinterfacecomponents)
* [Plugins](#plugins)

## Editor-Core

To migrate the core TinyMCE editor to TinyMCE 5, review the following sections:

* [Cloud Delivery](#clouddelivery).
* [Editor: Changes to Methods](#editorchangestomethods).
* [Editor: Changes to Settings](#editorchangestosettings).
* [Browser support: backward compatibility or quirks mode](#browsersupportbackwardcompatibilityorquirksmode).

### Cloud Delivery

To use TinyMCE 5 from the {{site.cloudname}}, include this script in your HTML page. Replace 'no-api-key' with [your API key]({{site.accountsignup}}).

```html
<script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
```

For information on using the latest development and testing builds, see: [Cloud deployment guide - Specify editor & plugin versions]({{site.baseurl}}/cloud-deployment-guide/editor-plugin-version/).

### Editor: Changes to API Methods

All TinyMCE 4 API methods for creating UI components have been removed. New methods have been added for TinyMCE 5. For information on creating and customizing UI components, see: [User interface components]({{site.baseurl}}/ui-components/).

### Editor: Changes to Settings

TinyMCE 5 includes the following changes to editor-core settings:

* [New Editor settings](#neweditorsettings)
* [Changed Editor settings](#changededitorsettings)
* [Removed Editor settings](#removededitorsettings)
* [Deprecated Editor settings](#deprecatededitorsettings)

#### New Editor settings

| **Setting** | **Description** |
| ----------- | --------------- |
| [`custom_colors`]({{site.baseurl}}/configure/content-appearance/#custom_colors) | **custom_colors** is `true` by default. Setting `custom_colors: false` removes the custom color picker in the color swatch. |

#### Changed Editor settings

| **Setting**                                                      | **TinyMCE 4**                                                                                 | **TinyMCE 5**                                                                                                                                                              |
| ---------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [`height`]({{site.baseurl}}/configure/editor-appearance/#height) | Set the height of the editable area of the editor.<br/>Supported number values. | Sets the overall height of the editor, including the menubar, toolbars, and statusbar.<br/>Supports numbers and strings. Assumes strings are a valid CSS value for height. |
| [`width`]({{site.baseurl}}/configure/editor-appearance/#width)   | Supported number values.                                                        | Supports numbers and strings. Assumes strings are a valid CSS value for width.                                                                                             |
| [`resize`]({{site.baseurl}}/configure/editor-appearance/#resize) | `true` by default.                                                                            | `true` by default if the `autoresize` plugin is not enabled.<br/>`false` by default if the `autoresize` plugin is enabled.                                                 |

#### Removed Editor settings

* The `file_browser_callback` option has been removed for TinyMCE 5. The [`file_browser_callback`]({{site.url}}/docs-4x/configure/file-image-upload/#file_browser_callback) option was used to add a file or image browser to TinyMCE. This option was deprecated in version 4.1.0 and replaced by [`file_picker_callback`]({{site.baseurl}}/configure/file-image-upload/#file_picker_callback).

* [`insert_button_items`]({{site.url}}/docs-4x/configure/editor-appearance/#insert_button_items) - the `insert_button_items` option was used to specify the toolbar items to display in the `insert` toolbar button menu. This toolbar button has been removed from TinyMCE 5. For a workaround, configure a custom toolbar button using the following configurations in the `tinymce.init`:

```js
tinymce.init({
  ...
  toolbar: 'insert',
  setup: function (editor) {
    editor.ui.registry.addMenuButton('insert', {
      icon: 'plus',
      tooltip: 'Insert',
      fetch: function (callback) {
        callback('image link | inserttable');
      }
    });
  }
});
```

##### Migrating from `file_browser_callback` to `file_picker_callback`

[`file_picker_callback`]({{site.baseurl}}/configure/file-image-upload/#file_picker_callback) provides a callback function, removing the requirement for an additional function to manually find and update the element or fire events. `file_picker_callback` can also update other fields by passing a second argument to update other fields in the dialog. For information on using `file_picker_callback`, see: [Image & file upload options - `file_picker_callback`]({{site.baseurl}}/configure/file-image-upload/#file_picker_callback).

The following example shows the difference between the removed `file_browser_callback` setting and `file_picker_callback`, assuming that `browseFiles` is a function that opens an external file picker.

###### TinyMCE 4 - `file_browser_callback`

```js
tinymce.init({
  ...
  file_browser_callback_types: 'file image media',
  file_browser_callback: function (fieldId, value, type, win) {
    browseFiles(value, type, function (fileUrl) {
      win.document.getElementById(fieldId).value = fileUrl;
    });
  }
});
```

###### TinyMCE 5 - `file_picker_callback`

```js
tinymce.init({
  ...
  file_picker_types: 'file image media',
  file_picker_callback: function (callback, value, meta) {
    browseFiles(value, meta.filetype, function (fileUrl) {
      callback(fileUrl);
    });
  }
});
```

### Browser support: backward compatibility or quirks mode

TinyMCE 5 does not support browsers running in Quirks or backward compatibility modes.

#### Deprecated Editor settings

New platform detection functions were to the [`Env` API]({{site.baseurl}}/api/tinymce/tinymce.env/) for {{site.productname}} 5.1, allowing for some older detection properties to be deprecated.

| Deprecated Property | Alternative Property / Reason for Deprecation                                                                                                                                                                                                                        | Type    | Original Description                                                                                   |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------------------------------ |
| `opera`             | Use [`browser.isOpera()`]({{site.baseurl}}/api/tinymce/tinymce.env/#browserisopera) instead.                                                                                                                                                                         | Boolean | Constant that is `true` if the browser is Opera.                                                       |
| `webKit`            | Use [`browser.isSafari()`]({{site.baseurl}}/api/tinymce/tinymce.env/#browserissafari) or [`browser.isChrome()`]({{site.baseurl}}/api/tinymce/tinymce.env/#browserischrome) instead.                                                                                  | Boolean | Constant that is `true` if the browser is WebKit (Safari/Chrome).                                      |
| `ie`                | Use [`browser.version.major`]({{site.baseurl}}/api/tinymce/tinymce.env/#browserversionmajor) and [`browser.isIE()`]({{site.baseurl}}/api/tinymce/tinymce.env/#browserisie) or [`browser.isEdge()`]({{site.baseurl}}/api/tinymce/tinymce.env/#browserisedge) instead. | Number  | Constant that is greater than zero if the browser is IE.                                               |
| `gecko`             | Use [`browser.isFirefox()`]({{site.baseurl}}/api/tinymce/tinymce.env/#browserisfirefox) instead.                                                                                                                                                                     | Boolean | Constant that is `true` if the browser is Gecko.                                                       |
| `mac`               | Use [`os.isOSX()`]({{site.baseurl}}/api/tinymce/tinymce.env/#osisosx) or [`os.isiOS()`]({{site.baseurl}}/api/tinymce/tinymce.env/#osisios) instead.                                                                                                                  | Boolean | Constant that is `true` if the operating system is Mac OS.                                             |
| `iOS`               | Use [`os.isiOS()`]({{site.baseurl}}/api/tinymce/tinymce.env/#osisios) instead.                                                                                                                                                                                       | Boolean | Constant that is `true` if the operating system is iOS.                                                |
| `android`           | Use [`os.isAndroid()`]({{site.baseurl}}/api/tinymce/tinymce.env/#osisandroid) instead.                                                                                                                                                                               | Boolean | Constant that is `true` if the operating system is android.                                            |
| `desktop`           | Use [`deviceType.isDesktop()`]({{site.baseurl}}/api/tinymce/tinymce.env/#devicetypeisdesktop) instead.                                                                                                                                                               | Boolean | Constant that is `true` if the browser is running on a desktop device                                  |
| `contentEditable`   | All supported browsers now support content editable elements.                                                                                                                                                                                                        | Boolean | Constant that is `true` if the browser supports editing.                                               |
| `caretAfter`        | All supported browsers now support placing carets after inline blocks.                                                                                                                                                                                               | Boolean | Returns `true`/`false` if the browser can or can't place the caret after a inline block like an image. |
| `range`             | All supported browsers now support native DOM ranges.                                                                                                                                                                                                                | Boolean | Constant that is `true` if the browser supports native DOM Ranges. IE 9+.                              |
| `ceFalse`           | All supported browsers now support `contentEditable=false` regions.                                                                                                                                                                                                  | Boolean | Constant that is `true` if the browser supports `contentEditable=false` regions.                       |

## Themes

Most themes provided with TinyMCE 4 have been removed from TinyMCE 5 and are now combined in a new responsive theme called **Silver**. The `Silver` theme is enabled by default and contains a set of configurable UI components that can be used to replace the functionality of the TinyMCE 4 themes: Modern, Inline, and Inlite.

| **Removed Theme**                                                                     | **Replaced by**                                   |
| ------------------------------------------------------------------------------------- | ------------------------------------------------- |
| [Modern]({{site.url}}/docs-4x/themes/modern/)                                         | Silver                                            |
| [Modern inline]({{site.url}}/docs-4x/general-configuration-guide/use-tinymce-inline/) | Silver [Inline]({{site.baseurl}}/general-configuration-guide/use-tinymce-inline/)                                     |
| [Inlite(Distraction-free Editor)]({{site.url}}/docs-4x/themes/inlite/)                | Silver ([distraction-free]({{site.baseurl}}/general-configuration-guide/use-tinymce-distraction-free/) configuration)           |
| [Mobile]({{site.url}}/docs-4x/themes/mobile/)                                         | Silver ([responsive to small screen touch devices]({{site.baseurl}}/mobile/)) |

### Inlite theme removed

The [Inlite]({{site.url}}/docs-4x/themes/inlite/) theme has been removed from TinyMCE 5.

The Inlite theme features are provided by the [Quick Toolbar (`quickbars`)]({{site.baseurl}}/plugins/opensource/quickbars/) plugin for TinyMCE 5. The Inlite [`quicklink`]({{site.url}}/docs-4x/themes/inlite/#quicklink) functionality is now provided by [Context Forms]({{site.baseurl}}/ui-components/contextform/).

The following is an example of a TinyMCE 5 quickbars configuration:
```js
{
  theme: 'silver',
  inline: true,
  toolbar: false,
  menubar: false,
  plugins: [ 'quickbars' ]
}
 ```
This will provide a similar but improved [distraction-free]({{site.baseurl}}/general-configuration-guide/use-tinymce-distraction-free/) experience in TinyMCE 5.

### Modern theme removed

The [Modern]({{site.url}}/docs-4x/themes/modern/) theme has been removed from TinyMCE 5.  The Modern theme's UI library [`tinymce.ui.*`]({{site.url}}/docs-4x/api/tinymce.ui/) has also been removed. This change may impact integrations depending upon the level of customization.

### Themes: Removed events

| **Removed event** | **Description**|
| ----------------- | -------------- |
| BeforeRenderUi | Fired before the UI was rendered. |


### Mobile theme

The {{site.productname}} 4 [Mobile theme]({{site.baseurl}}/mobile/#thelegacymobiletheme) was deprecated in {{site.productname}} 5.1. The mobile-optimized editor is loaded on mobile devices. For information on the new mobile experience, see: [{{site.productname}} mobile]({{site.baseurl}}/mobile/).

## User Interface components

This section covers migrating UI components to TinyMCE 5

* [Removed UI configuration settings](#removeduiconfigurationsettings)
* [Changed UI API method namespace](#changeduiapimethodnamespace)
* [Custom toolbar buttons](#customtoolbarbuttons)
* [Custom context toolbars](#customcontexttoolbars)
* [Custom menu items](#custommenuitems)
* [Custom dialogs](#customdialogs)
* [Custom URL dialogs](#customurldialogs)

### Removed UI configuration settings

All inline style configurations have been removed in TinyMCE 5 in favor of modern CSS. This affects all TinyMCE 4 UI component configurations.
[Skins]({{site.baseurl}}/advanced/creating-a-skin/) should be used for custom styling in TinyMCE 5.

Removed style settings:
* `flex`
* `border`
* `layout` - Use the TinyMCE 5 UI component settings to compose a custom layout.
* `spacing`
* `padding`
* `align`
* `pack`
* `no-wrap`

### Changed UI API method namespace

The API methods for registering UI components have moved. They are now part of [`tinymce.editor.ui.registry`]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/).

#### Changed methods

The following methods have changed for TinyMCE 5:

| **Old method** | **New method** | **Component** |
| -------------- | -------------- | ------------- |
| [`editor.addButton(identifier, configuration)`]({{site.url}}/docs-4x/api/tinymce/tinymce.editor/#addbutton) | [`editor.ui.registry.addButton(identifier, configuration)`]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/#addbutton) | [Toolbar Buttons]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/) |
| [`editor.addContextToolbar: (name, spec)`]({{site.url}}/docs-4x/api/tinymce/tinymce.editor/#addcontexttoolbar) | [`editor.ui.registry.addContextToolbar`]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/#addcontexttoolbar) | [Context toolbar]({{site.baseurl}}/ui-components/contexttoolbar/) |
| [`editor.addMenuItem: (name, spec)`]({{site.url}}/docs-4x/api/tinymce/tinymce.editor/#addmenuitem) | [`editor.ui.registry.addMenuItem`]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/#addmenuitem) | [Menu item]({{site.baseurl}}/ui-components/menuitems/#basicmenuitems) |
| [`editor.addSidebar: (name, spec)`]({{site.url}}/docs-4x/api/tinymce/tinymce.editor/#addsidebar) | [`editor.ui.registry.addSidebar: (name, spec)`]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/#addsidebar) | [Sidebar]({{site.baseurl}}/ui-components/customsidebar/)|

#### New methods

The following new methods have been added for creating and using new components:

| **New method** | **Description** |
| -------------- | --------------- |
| `editor.ui.registry.addAutocompleter: (name, spec)` | [Autocompleter]({{site.baseurl}}/ui-components/autocompleter/) |
| `editor.ui.registry.addContextForm: (name, spec)` | [Context form]({{site.baseurl}}/ui-components/contextform/) |
| `editor.ui.registry.addContextMenu: (name, spec)` | [Context menu]({{site.baseurl}}/ui-components/contextmenu/) |
| `editor.ui.registry.addMenuButton: (name, spec)` | [Menu Button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#menubutton) |
| `editor.ui.registry.addNestedMenuItem: (name, spec)` | [Nested menu item]({{site.baseurl}}/ui-components/menuitems/#nestedmenuitems) |
| `editor.ui.registry.addSplitButton: (name, spec)` | [Split Button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#splitbutton) |
| `editor.ui.registry.addToggleButton: (name, spec)` | [Toggle Button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#togglebutton) |
| `editor.ui.registry.addToggleMenuItem: (name, spec)` | [Toggle menu item]({{site.baseurl}}/ui-components/menuitems/#togglemenuitems) |
| `editor.ui.registry.addIcon: (name, svgData)` | [Registers an SVG as an icon]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/#addicon) |
| `editor.ui.registry.getAll: ()` | Returns an array of everything in the UI registry |

### Custom toolbar buttons

The API methods for adding [Custom toolbar buttons]({{site.baseurl}}/ui-components/toolbarbuttons/#howtocreatecustomtoolbarbuttons) have changed for TinyMCE 5. The methods have been moved from [`editor.*`]({{site.url}}/docs-4x/api/tinymce/tinymce.editor/) to [`editor.ui.registry.*`]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/). The toolbar button type `listbox` has been removed and a toggle button type has been added. The button types available in TinyMCE 5 are:

* [Basic button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#basicbutton)
* [Toggle button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#togglebutton)
* [Split button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#splitbutton)
* [Menu button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#menubutton)

[Listbox]({{site.url}}/docs-4x/demo/custom-toolbar-listbox/) toolbar buttons are not supported in TinyMCE 5. The recommended replacement toolbar button type is the [**Split** button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#splitbutton).

#### Changed toolbar button API methods

The following methods for creating custom toolbar buttons have been moved for TinyMCE 5. For information on how to use the new methods, see: [Toolbar buttons]({{site.baseurl}}/ui-components/toolbarbuttons/).

| **Old method** | **New method** |
| -------------- | -------------- |
| [`editor.addButton()`]({{site.url}}/docs-4x/api/tinymce/tinymce.editor/#addbutton) | [`editor.ui.registry.addButton()`]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/#addbutton) |
| [`editor.addMenuItem()`]({{site.url}}/docs-4x/api/tinymce/tinymce.editor/#addmenuitem) | [`editor.ui.registry.addMenuItem()`]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/#addmenuitem) |


#### New toolbar button API methods

New methods have been added for creating common types of toolbar buttons.

| **New method** | **Description** |
| -------------- | --------------- |
| `editor.ui.registry.addToggleButton()` | [Adds a custom toolbar toggle button]({{site.baseurl}}/ui-components/menuitems/#togglemenuitems). |
| `editor.ui.registry.addSplitButton()` | [Adds a custom toolbar split button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#splitbutton). |
| `editor.ui.registry.addMenuButton()` | [Adds a custom toolbar menu button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#menubutton). |

For information on how to use these methods, see: [Types of toolbar buttons]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/).

#### Changed Toolbar API methods

| **Old method** | **New method** | **Description** |
| -------------- | -------------- | --------------- |
| [`onclick`]({{site.url}}/docs-4x/advanced/creating-a-custom-button/#basicbutton) | [`onAction`]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#basicbutton) | `onclick` is now `onAction`. `onAction` now has an API to provide helper functions to the user. For an example migration, see: [Migrating onclick to onAction](#migratingonclicktoonaction). |
| [`cmd`]({{site.url}}/docs-4x/advanced/creating-a-custom-button/#buttonoptions) | [`onAction`]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#basicbutton) | `cmd` has been removed as a configuration option. Commands should be executed through `onAction` now. For an example migration, see: [Migrating cmd to onAction](#migratingcmdtoonaction). |
| [`onpostrender`]({{site.url}}/docs-4x/advanced/creating-a-custom-button/#togglebutton) | [`onSetup`]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#onsetupexplanation) | `onpostrender` has been replaced with `onSetup`. For an example migration, see: [Migrating onpostrender to onSetup](#migratingonpostrendertoonsetup).|

##### Migrating onclick to onAction

[`onclick`]({{site.url}}/docs-4x/advanced/creating-a-custom-button/#basicbutton) is now [`onAction`]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#basicbutton). The callback function given to `onAction` takes a `buttonApi` argument which is an object that contains helper functions.

For example:

###### TinyMCE 4 - `onclick`

```js
editor.addButton('mybutton', {
  text: 'My Button',
  onclick: function () {
    alert('My Button clicked!');
  }
});
```

###### TinyMCE 5 - `onAction`

```js
editor.ui.registry.addButton('myButton', {
  text: 'My Button',
  onAction: function (buttonApi) {
    alert('My Button clicked!');
  }
});
```

Each type of toolbar button has a different set of API functions. For information using toolbar buttons, see: [Types of toolbar buttons]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/).

##### Migrating cmd to onAction

`cmd: string` has been removed. Commands should be executed using `onAction` instead.

For example:

###### TinyMCE 4 - `cmd`

```js
editor.addButton('mybutton', {
  text: 'My Button',
  cmd: 'mceSave'
});
```

###### TinyMCE 5 - `onAction`

```js
editor.ui.registry.addButton('myButton', {
  text: 'My Button',
  onAction: function () {
    editor.execCommand('mceSave');
  }
});
```

##### Migrating onpostrender to onSetup

`onpostrender` has been replaced with `onSetup` for menu and toolbar components.

There are 3 major changes:

* [`onpostrender`]({{site.url}}/docs-4x/advanced/creating-a-custom-button/#togglebutton) was only processed when the editor was created, [`onSetup`]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#basicbuttonexampleandexplanation) runs every time a component is rendered. For example: `onSetup` for a menu item is processed every time the menu rendered.
* `onSetup` has an API containing helper functions. Each [type of toolbar button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/) has a different API.
* `onSetup` can be configured to return a function, which will be automatically be called on the teardown of the component, such as when a menu item's menu is closed.
    * If a function should only be executed when the editor is first initialized, use the `editor.on('init', callback)` callback function.

> **Caution**: If `onSetup` listens to any events using [`editor.on(eventName, callback)`]({{site.baseurl}}/api/tinymce/tinymce.editor/#on), it should return a [`editor.off(eventName, callback)`]({{site.baseurl}}/api/tinymce/tinymce.editor/#off) callback to unbind the event on tear down. Unless the event was `'init'`, `onSetup` returns `function (buttonApi) { ed.off(eventName, callback) }`.

For example:

######  TinyMCE 4 - `onpostrender`

```js
editor.addButton('currentdate', {
  icon: 'insertdatetime',
  tooltip: 'Insert Current Date',
  onclick: insertDate,
  onpostrender: function monitorNodeChange() {
    var btn = this;
    editor.on('NodeChange', function(e) {
      btn.disabled(e.element.nodeName.toLowerCase() == 'time');
    });
  }
});
```

###### TinyMCE 5 - onSetup

In this example, the button's API contains `isDisabled: () => boolean` and `setDisabled: (state: boolean) => void`.

```js
editor.ui.registry.addButton('customDateButton', {
  icon: 'insert-time',
  tooltip: 'Insert Current Date',
  disabled: true,
  onAction: function () {
    editor.insertContent(toTimeHtml(new Date()));
  },
  onSetup: function (buttonApi) {
    const editorEventCallback = function (eventApi) {
      buttonApi.setDisabled(eventApi.element.nodeName.toLowerCase() === 'time');
    };
    editor.on('NodeChange', editorEventCallback);
    return function (buttonApi) {
      editor.off('NodeChange', editorEventCallback);
    }
  }
});
```

> **Note**: The callback function given to `onSetup` takes a `buttonApi` argument which is an object that contains helper functions.

### Custom context toolbars

The Context Toolbar accepts toolbar buttons to the editor using the [`addButton`]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#basicbutton), [`addToggleButton`]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#togglebutton), [`addSplitButton`]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#splitbutton), or [`addMenuButton`]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#menubutton) functions.

The API method for creating custom context toolbars in TinyMCE 5 has changed from [`editor.addContextToolbar()`]({{site.url}}/docs-4x/api/tinymce/tinymce.editor/#addcontexttoolbar) to [`editor.ui.registry.addContextToolbar()`]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/#addcontexttoolbar).

For information on Context Toolbars, see: [Context toolbar]({{site.baseurl}}/ui-components/contexttoolbar).

### Custom menu items

The following configuration options have changed in the custom menu items for TinyMCE 5:
* [`addMenuItem`]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/#addmenuitem) has a new configuration.
* A new method, [`addNestedMenuItem`]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/#addnestedmenuitem) has been added to the options. The `addNestedMenuItem` is a method for creating menu items that have a sub-menu with one or more menu items.
* A new method, [`addToggleMenuItem`]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/#addtogglemenuitem) has been added to the options. The `addToggleMenuItem` is a method for creating toggle menu items similar to the [toggle toolbar button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#togglebutton).
* The concept of `context` has been removed from menu item configurations. The [`menu` setting]({{site.baseurl}}/configure/editor-appearance/#menu) provides this functionality for TinyMCE 5.

To add a custom item to a menu, use the `menu` setting. All items in a menu need to be declared in order to appear.

For example:

```js
tinymce.init({
  selector: '#editor',
  plugins: 'help',
  menu: {
    help: { title: 'Help', items: 'help | myCustomMenuItem' }
  },
  menubar: 'file edit help',
  setup: function (editor) {
    editor.ui.registry.addMenuItem('myCustomMenuItem', {
      text: 'My Custom Menu Item',
      onAction: function () {
        alert('Menu item clicked');
      }
    });
  }
});
```

**More information**
* For information on using the `menu` setting, see: [User interface options - menu]({{site.baseurl}}/configure/editor-appearance/#menu).
* For an example of the default menu items, see: [User interface options - Example: The TinyMCE Default Menu Items]({{site.baseurl}}/configure/editor-appearance/#examplethetinymcedefaultmenuitems).
* For a list of the available menu controls provided by {{site.productname}}, see: [Menu Items Available for {{site.productname}}]({{site.baseurl}}/advanced/available-menu-items/).

#### New menu item methods

| **New method** | **Description** |
| -------------- | --------------- |
| [`editor.ui.registry.addNestedMenuItem()`]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/#addnestedmenuitem) | Adds a menu item that opens a sub-menu. |
| [`editor.ui.registry.addToggleMenuItem()`]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/#addtogglemenuitem) | Adds a custom toggle menu item. |

#### Changed menu item methods

| **Old method** | **New method** | **Description** |
| -------------- | -------------- | --------------- |
| [`editor.addMenuItem: (name, spec)`]({{site.url}}/docs-4x/api/tinymce/tinymce.editor/#addmenuitem) | [`editor.ui.registry.addMenuItem()`]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/#addmenuitem) | Adds a custom basic menu item. |

The following examples show custom menu item configurations in TinyMCE 4 and TinyMCE 5:

#### TinyMCE 4 - example custom menu item

```js
editor.addMenuItem('example', {
  text: 'My menu item',
  context: 'tools',
  onclick: function () {
    editor.insertContent('Hello world!!');
  }
});
```

#### TinyMCE 5 - example custom menu item

```js
editor.ui.registry.addMenuItem('example', {
  text: 'My menu item',
  onAction: function () {
    editor.insertContent('Hello world!!');
  }
});
```

For information on how to use these methods, see: [Custom menu items]({{site.baseurl}}/ui-components/menuitems/).

### Custom dialogs

Dialogs are still opened using the `editor.windowManager.open(config)` api, however a number of configuration options have changed.

#### Removed dialog settings

| **Removed setting** | **Description** |
| ------------------- | --------------- |
| [`height`]({{site.url}}/docs-4x/advanced/creating-custom-dialogs/) | The dialog component now uses CSS3 and a predefined `small`, `medium`, and `large` template to specify the dimensions. |
| [`width`]({{site.url}}/docs-4x/advanced/creating-custom-dialogs/) | The dialog component now uses CSS3 and a predefined `small`, `medium`, and `large` template to specify the dimensions. |
| `bodyType` | `bodyType` has been merged into the `body` setting. |
| `onpostrender` | `onpostrender` has been removed for the dialog configuration. The dialog configuration now includes an `initialData` setting for providing the initial state and an API to fetch or update the data. Refer to [this]({{site.baseurl}}/ui-components/dialog/#interactiveexampleusingredialconfigvoid) section for more information on how to configure `initialData`. |
| [`url`]({{site.url}}/docs-4x/advanced/creating-custom-dialogs/) | URL dialogs now have their own API. For more information, see [`Custom URL dialogs`](#customurldialogs). |

#### New dialog settings

| **New setting** | **Description** |
| --------------- | --------------- |
| [`initialData`]({{site.baseurl}}/ui-components/dialog/#configurationoptions) | An object containing the initial value for the dialog components. |
| [`onCancel`]({{site.baseurl}}/ui-components/dialog/#configurationoptions) | A callback that is called when the dialog is cancelled without submitting any changes. |
| [`onTabChange`]({{site.baseurl}}/ui-components/dialog/#configurationoptions) | A callback that is called when switching tabs in a [TabPanel]({{site.baseurl}}/ui-components/dialogcomponents/#tabpanel). |

#### Changed dialog settings

| **Old setting** | **New setting** | **Description** |
| --------------- | --------------- | --------------- |
| `onchange` | [`onChange`]({{site.baseurl}}/ui-components/dialog/#configurationoptions) | `onChange` now takes a callback function which is passed an API helper function and data. |

> **Note**: The `onchange` callback function provided within individual components has been removed. A single `onChange` callback function provides the same functionality for all components in TinyMCE 5.

##### TinyMCE 4 - `onchange`

```js
const config = {
  title: 'Insert Link',
  body: [
    {
      name: 'text',
      type: 'textbox',
      size: 40,
      label: 'Text to display',
      onchange () {
        data.text = this.value();
      }
    }
  ]
};
```

##### TinyMCE 5 - `onChange`

```js
const config = {
  title: 'Insert Link',
  body: {
    type: 'panel',
    items: [
      {
        name: 'text',
        type: 'input',
        label: 'Text to display'
      }
    ]
  },
  onChange (api, changeData) {
    if (changeData.name === 'text') {
      // Do something with the text to display changes
    }
  }
};
```

For information about the new dialog configuration, see the [Dialog]({{site.baseurl}}/ui-components/dialog/) and [Dialog components]({{site.baseurl}}/ui-components/dialogcomponents/) documentation.

#### Changes to the Custom dialog API

A redesign of the dialog API resulted in the following changes:

##### Removed Custom dialog APIs

| API                                                                                                        | Type     | Description                                                                                                                          |
| ---------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| [`tinymce.WindowManager.getParams()`]({{site.url}}/docs-4x/api/tinymce/tinymce.windowmanager/#getparams)   | Method   | Returned the params of the last window open call. This was used in iframe based dialog to get params passed from the tinymce plugin. |
| [`tinymce.WindowManager.getWindows()`]({{site.url}}/docs-4x/api/tinymce/tinymce.windowmanager/#getwindows) | Method   | Returned the currently opened window objects.                                                                                        |
| [`tinymce.WindowManager.setParams()`]({{site.url}}/docs-4x/api/tinymce/tinymce.windowmanager/#setparams)   | Method   | Set the params of the last opened window.                                                                                            |
| `tinymce.WindowManager.windows`                                                                            | Property | Returned an array of opened dialogs.                                                                                                 |

##### Changed Custom dialog API Methods

| Method                                                                                           | Description                 | Change                                     |
| ------------------------------------------------------------------------------------------------ | --------------------------- | ------------------------------------------ |
| [`tinymce.WindowManager.alert()`]({{site.baseurl}}/api/tinymce/tinymce.windowmanager/#alert)     | Creates an alert dialog.     | A window object is no-longer returned.     |
| [`tinymce.WindowManager.confirm()`]({{site.baseurl}}/api/tinymce/tinymce.windowmanager/#confirm) | Creates a "confirm" dialog.   | A window object is no-longer returned.     |
| [`tinymce.WindowManager.close()`]({{site.baseurl}}/api/tinymce/tinymce.windowmanager/#close)     | Closes the top most window. | Only closes dialogs created with `open()`. |

For information on the new Dialog API, see: [UI components - Dialog instance API]({{site.baseurl}}/ui-components/dialog/#dialoginstanceapi).

### Custom URL dialogs

The URL dialogs have moved from the `editor.windowManager.open()` API to the [`editor.windowManager.openUrl()`]({{site.baseurl}}/api/tinymce/tinymce.windowmanager/#openurl) API. This provides clear separation of the two different types of dialogs in TinyMCE.

#### Removed URL dialog settings

| **Old setting** | **New setting** | **Description** |
| --------------- | --------------- | --------------- |
| `file` | [`url`]({{site.baseurl}}/ui-components/urldialog/#configurationoptions) | The `file` setting has been removed in TinyMCE 5 and replaced with `url`. |

#### New URL dialog settings

| **New setting** | **Description** |
| --------------- | --------------- |
| [`onCancel`]({{site.baseurl}}/ui-components/urldialog/#configurationoptions) | A callback that is called when the dialog is cancelled without submitting any changes. |
| [`onMessage`]({{site.baseurl}}/ui-components/urldialog/#configurationoptions) | A callback that is called when the dialog receives a message via the browser `window.postMessage` API. |

##### TinyMCE 4 - `windowManager.open()`

```js
editor.windowManager.open({
  title: 'URL Dialog Demo',
  url: 'http://mysite.com/external-page.html'
});
```

##### TinyMCE 5 - `windowManager.openUrl()`

```js
editor.windowManager.openUrl({
  title: 'URL Dialog Demo',
  url: 'http://mysite.com/external-page.html'
});
```

For information about the new URL dialog configuration, see: [URL dialog]({{site.baseurl}}/ui-components/urldialog/).

## Plugins

The following section covers the changed and removed plugin features for TinyMCE 5.

* [Removed plugin settings](#removedpluginsettings)
* [Changed plugin settings](#changedpluginsettings)
* [Changed plugins](#changedplugins)
* [Spellchecker plugin](#spellcheckerplugin)
* [Table plugin](#tableplugin)

### Removed plugin settings

The `height` and `width` settings have been removed from plugin dialogs. The dialog component now uses CSS3 and a predefined `small`, `medium`, and `large` template to specify the dimensions.

The following plugins from TinyMCE 4 do not require height or width options in TinyMCE 5:

* [Code]({{site.baseurl}}/plugins/opensource/code/)
* [Codesample]({{site.baseurl}}/plugins/opensource/codesample/)
* [Preview]({{site.baseurl}}/plugins/opensource/preview/)
* [Template]({{site.baseurl}}/plugins/opensource/template/)

### Changed plugin settings

| **TinyMCE 4**                                                                           | **TinyMCE 5**                                                           |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| [`autoresize_min_height`]({{site.url}}/docs-4x/plugins/autoresize/#autoresize_min_height) | [`min_height`]({{site.baseurl}}/configure/editor-appearance/#min_height)  |
| [`autoresize_max_height`]({{site.url}}/docs-4x/plugins/autoresize/#autoresize_max_height) | [`max_height`]({{site.baseurl}}/configure/editor-appearance/#max_height)  |
| [`textcolor_cols`]({{site.url}}/docs-4x/plugins/textcolor/#textcolor_cols)                | [`color_cols`]({{site.baseurl}}/configure/content-appearance/#color_cols) |
| [`textcolor_map`]({{site.url}}/docs-4x/plugins/textcolor/#textcolor_map)                  | [`color_map`]({{site.baseurl}}/configure/content-appearance/#color_map)   |

### Changed plugins

These features have either changed or have been deleted in TinyMCE 5.

| **Plugin name** | **Description** |
| --------------- |  -------------- |
| [ContextMenu]({{site.url}}/docs-4x/plugins/contextmenu/) | Context menus are now part of the {{site.productname}} core. For information on adding custom context menus, see: [UI components - Context menu]({{site.baseurl}}/ui-components/contextmenu/). |
| [TextColor]({{site.url}}/docs-4x/plugins/textcolor/) | The text color functionality is now part of the {{site.productname}} core. For information on using and customizing the text color settings, see: [Content appearance options - `text_color`]({{site.baseurl}}/configure/content-appearance/#text_color). |
| [ColorPicker]({{site.url}}/docs-4x/plugins/colorpicker/) | The color picker is now part of the {{site.productname}} core and is enabled by default. For information on disabling the custom color picker, see: [Content appearance options - `custom_colors`]({{site.baseurl}}/configure/content-appearance/#custom_colors). |

#### Custom context menus

The [Context menus]({{site.url}}/docs-4x/plugins/contextmenu/) are part of the core and enabled by default in TinyMCE 5. TinyMCE 5 supports adding registered menu items and allows plugins to register "sections" of the context menu. These sections show or hide depending on the cursor position when the context menu is opened.

For information on using context menus and the default context menu configuration, see: [UI components - Context menu]({{site.baseurl}}/ui-components/contextmenu/).

##### New context menu methods

| **New method** | **Description** |
| ----------- | -------------- |
| [`editor.ui.registry.addContextMenu()`]({{site.baseurl}}/api/tinymce.editor.ui/tinymce.editor.ui.registry/#addcontextmenu) | Adds a custom context menu. |

For information on Context Menus, see [UI components - Context menu]({{site.baseurl}}/ui-components/contextmenu).

### Spellchecker plugin

{{site.deprecate_spellchecker}}

[`spellchecker_callback`]({{site.baseurl}}/plugins/opensource/spellchecker/#spellchecker_callback) has been updated to remove a legacy format for the `success` callback, which accepted a mapping object of misspelled words to suggestions. For example:

```js
spellchecker_callback: function(method, text, success, failure) {
  var words = text.match(this.getWordCharPattern());
  if (method == "spellcheck") {
    var suggestions = {};
    for (var i = 0; i < words.length; i++) {
      suggestions[words[i]] = ["First", "Second"];
    }
    success(suggestions);
  }
}
```

The `success` callback now requires the mapping object to be wrapped in an object with the `words` key, such as:

```js
spellchecker_callback: function(method, text, success, failure) {
  var words = text.match(this.getWordCharPattern());
  if (method == "spellcheck") {
    var suggestions = {};
    for (var i = 0; i < words.length; i++) {
      suggestions[words[i]] = ["First", "Second"];
    }
    success({ words: suggestions });
  }
}
```

For information on the `spellchecker_callback` setting, see: [Spell Checker plugin - spellchecker_callback]({{site.baseurl}}/plugins/opensource/spellchecker/#spellchecker_callback)

### Table plugin

Changes between TinyMCE 4 and TinyMCE 5:

* The text field for Styles have been removed from the advanced tab of the dialogs. This simplifies the dialogs for users and gives the editor a stricter control over the table styles, which ensures that the styles are valid.
* When opening a properties dialog with a single table, row, or cell selected, the dialog will autofill with the relevant existing values. When multiple rows or cells are selected:

  * If the selected rows or cells have the same values, TinyMCE 5 automatically fills the dialog values.
  * If the fields have no existing value or have different values, the dialog fields are left empty.
* The `Border` input field in the table properties dialog is now called `Border width`.

