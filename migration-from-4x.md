---
layout: default
title: Migrating from TinyMCE 4.x to TinyMCE 5.0.
title_nav: Migration from TinyMCE 4
description: Instructions for migrating from TinyMCE 4.x to TinyMCE 5.0.
keywords: migration considerations premigration pre-migration
---

The new TinyMCE 5.0 editor comes with significant changes to the previous versions. Most configuration changes in TinyMCE 5.0 only affect complex use cases like adding custom components. Setting up a basic TinyMCE 5.0 instance should be the same as TinyMCE 4.x.

Tiny has worked on creating a more configurable and modern editor while retaining the familiarity of the user interface from the older versions.

This chapter describes the migration process and workarounds for customers using TinyMCE version 4.x. It includes tasks that must be performed before the migration can begin, and different workaround procedures for deprecated, deleted, and updated features.

## Editor-Core

### Cloud Delivery

To serve TinyMCE 5 from the cloud, include this in your html page. Substitute 'no-api-key' with your api key.
```js
<script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
```

To serve the latest nightlies and testing builds refer to the [cloud deployment guide]({{site.baseurl}}/cloud-deployment-guide/editor-and-features/)

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5-dev/tinymce.min.js" referrerpolicy="origin"></script>
```

### Initialization

The initialization process of TinyMCE 5.0 is the same as TinyMCE 4.x. The bootstrap process and initialization events all remain the same. It still retains a familiar JSON structure. Some `init` configuration in the TinyMCE version 5.0 has been updated to simplify the configuration options, specifically the configuration items for [UI components]({{site.baseurl}}/ui-components/). Please see the [Quick start]({{site.baseurl}}/quick-start) section for more information on setup.

These changes may impact integrations depending upon the level of customization. Refer to the table below for a general guide for understanding the impact on a specific integration scenario:

| Customization Level | Description | Impact |
| ------------------- | ----------- | ------ |
| Minor | Some custom buttons | No UI fixes required. Updating the `addButton` configuration to TinyMCE 5.0 format. |
| Moderate | A [dialog]({{site.baseurl}}/ui-components/dialog/#dialoginstanceapi) created using `editor.windowManager.open` configuration objects | Convert TinyMCE 4.x config to TinyMCE 5.0 config. |
| Major | Completely custom dialogs and extended use of the Modern UI framework | The new TinyMCE 5.0 components may not cover all API use cases. However, Tiny strives to create supported workarounds or if there are sufficient requests, add a new component to resolve the use case. |

> Note: For support related issues such as problems while migrating and a workaround, please contact [support](https://support.tiny.cloud/hc/en-us/requests/new). Alternatively, track developer preview issues on GitHub, [here](https://github.com/tinymce/tinymce/labels/dev%20preview).

### Methods

* All TinyMCE 4.x methods for creating UI components have been removed. New methods have been added for TinyMCE 5.0. For more information, see the [docs]({{site.baseurl}}/ui-components/).
* No core editor methods were removed (tinymce, editor, selection, on(), etc. remain the same).

### Settings

In TinyMCE 5.0, some configurations have been removed because they are no longer necessary or an improved solution has been introduced.

#### Added settings

| **Setting** | **Description** |
| ----------- | --------------- |
| `custom_colors` | **custom_colors** is `true` by default. When it is set to `false`, it will turn off the custom color picker in the color swatch. |

#### Removed settings

* [`file_browser_callback`](https://www.tiny.cloud/docs/configure/file-image-upload/#file_browser_callback) - Previously, the `file_browser_callback` option was used to add a file or image browser to TinyMCE. This feature was deprecated in version 4.1.0 and replaced by [`file_picker_callback`]({{site.baseurl}}/configure/file-image-upload/#file_picker_callback). `file_browser_callback` option has been removed from TinyMCE 5.0 owing to the configuration changes in the dialog component.

* [`insert_button_items`](https://www.tiny.cloud/docs/configure/editor-appearance/#insert_button_items) - Previously, the `insert_button_items` option was used to specify what to display in the `insert` toolbar button's menu in a space-separated list of menu items control identifiers or `|` for a menu separator. This toolbar button has been removed from TinyMCE 5.0 owing to the changes in the menus and removal of the `context` property. For a workaround, configure a custom toolbar button using the following configurations in the `tinymce.init`:

```js
tinymce.init({
  ...
  toolbar: 'insert',
  setup: function (editor) {
    editor.ui.registry.addMenuButton('insert', {
      icon: 'plus',
      tooltip: 'Insert',
      fetch: (callback) => callback('image link | inserttable')
    });
  }
});
```

#### Changed settings

| **Setting** | **TinyMCE 4.x** | **TinyMCE 5.0** |
| ----------- | --------------- | --------------- |
| `height` | Set the height of the editable area of the editor | Sets the overall height of the editor, including the menubar, toolbars, and statusbar |
| | Only supported number values | Supports numbers and strings, and assume a string is a valid CSS value for height |
| `width` | Only supported number values | Supports numbers and strings, and assume a string is a valid CSS value for width |
| `resize` | `true` by default | `true` by default if the `autoresize` plugin isn't enabled. `false` by default if the `autoresize` plugin is enabled. |

#### file_browser_callback → file_picker_callback

When migrating from using `file_browser_callback` to `file_picker_callback`, there is no longer any need to manually find and update the element or fire events. Instead a callback function is now provided that will update the component with the value passed. In addition to that, it's possible to update other fields by passing a second argument that will update other fields in the dialog. For more information about the `file_picker_callback`, see the [docs]({{site.baseurl}}/configure/file-image-upload/#file_picker_callback).

Below is a basic example showcasing how to migrate from using `file_browser_callback` to `file_picker_callback`, assuming that `browseFiles` is a function that opens an external file picker.

##### TinyMCE 4.x

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
##### TinyMCE 5.0

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

## Themes

In TinyMCE 5.0, some themes have been removed and are now combined in a new single responsive theme called **Silver**. In TinyMCE 5.0 `Silver` is enabled by default, if a theme is not specified. The Silver theme contains a set of configurable UI components that could be used to replace the current customizations (modern, inline, and inlite theme).

| **Removed Theme** | **Replaced by** |
| ----------------- | --------------  |
| [Modern](https://www.tiny.cloud/docs-4x/themes/modern/) | Silver |
| [Modern inline](https://www.tiny.cloud/docs-4x/general-configuration-guide/use-tinymce-inline/) | Silver Inline |
| [Inlite(Distraction-free Editor)](https://www.tiny.cloud/docs-4x/themes/inlite/) | Silver (distraction free configuration) |
| [Mobile](https://www.tiny.cloud/docs-4x/themes/mobile/) | Silver (responsive to small screen touch devices)  |

### Removed themes

#### Inlite

The Inlite theme is no longer supported in TinyMCE 5.0. The features that the Inlite theme used to provide are now available as a plugin. The inlite plugin has been renamed `quickbars`. The following is an example of the current quickbars configuration:
```
{
  theme: 'silver',
  inline: true,
  toolbar: false,
  menubar: false,
  plugins: [ 'quickbars' ]
}
 ```
This will provide a similar but improved [distraction-free]({{site.baseurl}}/general-configuration-guide/use-tinymce-distraction-free/) experience in TinyMCE 5.0.

#### Modern

The Modern theme is no longer supported in TinyMCE 5.0.  The modern theme's UI library [`tinymce.ui.*`](https://www.tiny.cloud/docs-4x/api/tinymce.ui/) has also been deleted. This change may impact integrations depending upon the [level of customization]({{site.baseurl}}/migration-from-4x/#initialization).

> Note: For support related issues such as problems while migrating and a workaround, please contact [support](https://support.tiny.cloud/hc/en-us/requests/new). Alternatively, track developer preview issues on GitHub, [here](https://github.com/tinymce/tinymce/labels/5.x).


### Events

#### Removed events

| **Removed event** | **Description**|
| ----------------- | -------------- |
| BeforeRenderUi | Fired before the UI was rendered. |


## Mobile support

In TinyMCE 4.x, mobile support was introduced bundled with a new theme and configuration settings. TinyMCE 5.0 makes this process seamless where mobile support comes out of the box without any additional configurations. The mobile theme will be automatically loaded if a user views the editor on a mobile phone. TinyMCE 5.0 mobile will be an exciting space to watch.


## Components

### Method Namespacing changes

The methods for registering components have moved to a different part of the editor API. They are now in the UI Registry part of the editor API.

#### Changed methods

| **Old method** | **New method** | **Component** |
| -------------- | -------------- | ------------- |
| editor.addButton(identifier, configuration) | editor.ui.registry.addButton(identifier, configuration) | [Toolbar Buttons]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/) |
| editor.addContextToolbar: (name, spec) | editor.ui.registry.addContextToolbar | [Context toolbar]({{site.baseurl}}/ui-components/contexttoolbar/) |
| editor.addMenuItem: (name, spec) | editor.ui.registry.addMenuItem | [Menu item]({{site.baseurl}}/ui-components/menuitems/#basicmenuitems) |
| editor.addSidebar: (name, spec) | editor.ui.registry.addSidebar: (name, spec) | [Sidebar]({{site.baseurl}}/ui-components/customsidebar/)|

#### New methods

The following new methods have been added for creating and using new components:

| **New method** | **Description** |
| -------------- | --------------- |
| editor.ui.registry.addAutocompleter: (name, spec) | [Autocompleter]({{site.baseurl}}/ui-components/autocompleter/) |
| editor.ui.registry.addContextForm: (name, spec) | [Context form]({{site.baseurl}}/ui-components/contextform/) |
| editor.ui.registry.addContextMenu: (name, spec) | [Context menu]({{site.baseurl}}/ui-components/contextmenu/) |
| editor.ui.registry.addMenuButton: (name, spec) | [Menu Button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#menubutton) |
| editor.ui.registry.addNestedMenuItem: (name, spec) | [Nested menu item]({{site.baseurl}}/ui-components/menuitems/#nestedmenuitems) |
| editor.ui.registry.addSplitButton: (name, spec) | [Split Button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#splitbutton) |
| editor.ui.registry.addToggleButton: (name, spec) | [Toggle Button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#togglebutton) |
| editor.ui.registry.addToggleMenuItem: (name, spec) | [Toggle menu item]({{site.baseurl}}/ui-components/menuitems/#togglemenuitems) |
| editor.ui.registry.addIcon: (name, svgData) | Registers an SVG as an icon |
| editor.ui.registry.getAll: () | Returns an array of everything in the UI registry |

### Custom toolbar buttons

The methods for adding [Custom toolbar buttons]({{site.baseurl}}/ui-components/toolbarbuttons/#howtocreatecustomtoolbarbuttons) have changed significantly between TinyMCE 4.x and TinyMCE 5.0. The methods have been moved from `editor.*` to `editor.ui.registry.*` Toolbar button types have changed from -  basic, split, listbox, and menu,  to -  basic, toggle, split, and menu. Explicit methods have been added for creating each type of toolbar button.

#### Changed methods

Some of the methods from TinyMCE 4.x for creating custom toolbar buttons have been moved and re-implemented to use the TinyMCE 5.0 style of configuration. For more information on how these methods have changed, see [docs]({{site.baseurl}}/ui-components/toolbarbuttons/).

| **Old method** | **New method** |
| -------------- | -------------- |
| editor.addButton() | editor.ui.registry.addButton() |
| editor.addMenuItem() | editor.ui.registry.addMenuItem() |


#### New methods

New methods have been added for creating other common types of toolbar buttons. For example, to create a toggle button In TinyMCE 5.0 `editor.ui.registry.addToggleButton()` is used. Each of these methods takes configurations specific to their type, to simplify implementation.

| **New method** | **Description** |
| -------------- | --------------- |
| editor.ui.registry.addToggleButton() | Adds a custom toolbar toggle button. |
| editor.ui.registry.addSplitButton() | Adds a custom toolbar split button. |
| editor.ui.registry.addMenuButton() | Adds a custom toolbar menu button. |

For more information on how these methods have changed, see [docs]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/).

### Removed toolbar button types

[Listbox](https://www.tiny.cloud/docs-4x/demo/custom-toolbar-listbox/) is no longer a supported toolbar button type in TinyMCE 5.0. Though listbox has been removed, any functionality provided by custom listbox toolbar buttons can be retained by switching to a different kind of toolbar button using the new methods. The recommended toolbar button type to switch to is the **Split** button.

### Toolbar configuration differences between TinyMCE 4.x and TinyMCE 5.0:

| **Old method** | **New method** | **Description** |
| -------------- | -------------- | --------------- |
| `onclick` | `onAction` | `onclick` is now `onAction`. `onAction` now has an API to provide some helper functions to the user. |
| `cmd` | `onAction` | `cmd` has been removed as a configuration option. Commands should be executed through `onAction` now. |
| `onpostrender` | `onSetup` | `onpostrender` has been replaced with `onSetup`. |

#### onclick → onAction

`onclick` is now `onAction`. The callback function given to onAction should take a `buttonApi` argument that's passed to the onAction callback is an object that contains some helper functions. Each type of toolbar button has a different set of API functions. See [docs]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/) for more information.

 Example:

##### TinyMCE 4.x:

```js
editor.addButton('mybutton', {
  text: "My Button",
  onclick: () => alert("My Button clicked!")
});
```
###### TinyMCE 5.0:

```js
editor.ui.registry.addButton('myButton', {
  text: 'My Button',
  onAction: (buttonApi) => alert('My Button clicked!')
});
```
#### cmd → onAction

`cmd: string` has been removed as a configuration options, and commands should be executed in `onAction` instead. Example:

##### TinyMCE 4.x:

```js
editor.addButton('mybutton', {
  text: "My Button",
  cmd: 'mceSave'
});
```
##### TinyMCE 5.0:

```js
editor.ui.registry.addButton('myButton', {
  text: 'My Button',
  onAction: (_) => editor.execCommand('mceSave')
});
```
#### onpostrender → onSetup

`onpostrender` has been removed and replaced with `onSetup` for menu and toolbar components. There are 3 major changes:

* While [`onpostrender`](https://www.tiny.cloud/docs/advanced/creating-a-custom-button/#togglebutton) only ran once, when the editor was created, [`onSetup`]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#basicbuttonexampleandexplanation) runs every time a component is rendered, e.g. for a menu item, every time its menu becomes visible.
* `onSetup` now has an API containing some helper functions. Each type of toolbar button has a different API.
* `onSetup` can be configured to return a function, which will be automatically be called on the teardown of the component, e.g., when a menu item's menu is closed.
    * If some functionality only runs when the editor is first initialized, it should be passed to `editor.on('init', callback)` as the callback function.

> Caution: If `onSetup` listens to any events using editor.on(eventName, callback) it should return a editor.off(eventName, callback) callback to unbind the event on tear down. This is particularly important if `onSetup` listens to any events using `editor.on(eventName, callback)`. Unless the event was `'init'`, `onSetup` should return `(buttonApi) => ed.off(eventName, callback)`. The tear down callback function will automatically be called by the editor when necessary.


Example:

#####  TinyMCE 4.x:

```js
editor.addButton('currentdate', {
  icon: 'insertdatetime',
  tooltip: "Insert Current Date",
  onclick: insertDate,
  onpostrender: function monitorNodeChange() {
    var btn = this;
    editor.on('NodeChange', function(e) {
      btn.disabled(e.element.nodeName.toLowerCase() == 'time');
    });
  }
});
```
#####  TinyMCE 5.0:

In this example, the button's API contains `isDisabled: () => boolean` and `setDisabled: (state: boolean) => void`.

```js
editor.ui.registry.addButton('customDateButton', {
  icon: 'insert-time',
  tooltip: 'Insert Current Date',
  disabled: true,
  onAction: (_) => editor.insertContent(toTimeHtml(new Date())),
  onSetup: (buttonApi) => {
    const editorEventCallback = (eventApi) => buttonApi.setDisabled(eventApi.element.nodeName.toLowerCase() === 'time');
    editor.on('NodeChange', editorEventCallback);
    return (buttonApi) => editor.off('NodeChange', editorEventCallback);
  }
});
```
> Note: The callback function given to `onSetup` should take a `buttonApi` argument which is an object that contains some helper functions.

### Custom menu items

The following configurations options have changed in the Custom Menu items in TinyMCE 5.0:
* `addMenuItem` has a new configuration.
* A new method `addNestedMenuItem` has been added to the options. The `addNestedMenuItem` is an explicit method for creating menu items that have a submenu with more menu items.
* A new method `addToggleMenuItem` has been added to the options. The `addToggleMenuItem` is an explicit method for creating toggle menu items similar to the new special [toolbar button methods]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/).
* The concept of `context` has been removed from menu item configurations.

#### New methods:

| **New method** | **Description** |
| -------------- | --------------- |
| editor.ui.registry.addNestedMenuItem() | Adds a menu item that opens a submenu. |
| editor.ui.registry.addToggleMenuItem() | Adds a custom toggle menu item. |

#### Changed methods:

| **Old method** | **New method** | **Description** |
| -------------- | -------------- | --------------- |
| editor.addMenuItem: (name, spec) | editor.ui.registry.addMenuItem() | Adds a custom basic menu item. |


The following are examples of Custom Menu Item configurations in TinyMCE 4.x and TinyMCE 5.0:

#### TinyMCE 4.x

```js
editor.addMenuItem('example', {
 text: 'My menu item',
 context: 'tools',
 onclick: () => editor.insertContent('Hello world!!');
});
```
#### TinyMCE 5.0

```js
editor.ui.registry.addMenuItem('example', {
 text: 'My menu item',
 onAction: () => editor.insertContent('Hello world!!');
});
```

For more information on how these methods have changed, see [docs]({{site.baseurl}}/ui-components/menuitems/).

### Custom dialogs

Dialogs are still opened via the `editor.windowManager.open(config)` api, however a number of configuration options have changed.

##### Removed settings:

| **Removed setting** | **Description** |
| ------------------- | --------------- |
| `height` | The dialog component now uses CSS3 and a predefined `small`, `medium`, and `large` template to specify the dimensions. |
| `width` | The dialog component now uses CSS3 and a predefined `small`, `medium`, and `large` template to specify the dimensions. |
| bodyType | `bodyType` has been merged into the `body` setting. |
| onpostrender | `onpostrender` has been removed for the dialog configuration. The dialog configuration now includes an `initialData` setting for providing the initial state and an API to fetch or update the data. Refer to [this]({{site.baseurl}}/ui-components/dialog/#interactiveexampleusingredialconfigvoid) section for more information on how to configure `initialData`. |
| url | URL dialogs now have their own API. For more information, see [`Custom URL dialogs`](#customurldialogs). |

##### New settings:

| **New setting** | **Description** |
| --------------- | --------------- |
| `initialData` | An object containing the initial value for the dialog components. |
| `onCancel` | A callback that is called when the dialog is cancelled without submitting any changes. |
| `onTabChange` | A callback that is called when switching tabs in a [TabPanel]({{site.baseurl}}/ui-components/dialogcomponents/#tabpanel). |

##### Changed settings:

| **Old setting** | **New setting** | **Description** |
| --------------- | --------------- | --------------- |
| `onchange` | `onChange` | `onchange` now takes a callback function which is passed an API helper function and data. |

> Note: `onchange`, a callback that was previously used to detect changes on each component, has been removed. The changes are now tracked by a single callback function with the change data. Refer to the [Interactive example using redial(config): void]({{site.baseurl}}/ui-components/dialog/#interactiveexampleusingredialconfigvoid) for more information.

#### TinyMCE 4.x

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
#### TinyMCE 5.0

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

For more information about the new dialog configuration, see the [`Dialog`]({{site.baseurl}}/ui-components/dialog/) and [`Dialog components`]({{site.baseurl}}/ui-components/dialogcomponents/) docs.

### Custom URL dialogs

In TinyMCE 4.x, URL dialogs were included as part of the `editor.windowManager.open()` API. However, in TinyMCE 5.0 they've been moved to a new API `editor.windowManager.openUrl()`. This allows for clear separation and configuration between the two different types of dialogs in TinyMCE.

##### Removed settings:

| **Old setting** | **New setting** | **Description** |
| --------------- | --------------- | --------------- |
| `file` | `url` | The `file` setting has been removed in TinyMCE 5.0 and replaced with `url`. |

##### New settings:

| **New setting** | **Description** |
| --------------- | --------------- |
| `onCancel` | A callback that is called when the dialog is cancelled without submitting any changes. |
| `onMessage` | A callback that is called when the dialog receives a message via the browser `window.postMessage` API. |

#### TinyMCE 4.x

```js
editor.windowManager.open({
  title: 'URL Dialog Demo',
  url: 'http://mysite.com/external-page.html'
});
```
#### TinyMCE 5.0

```js
editor.windowManager.openUrl({
  title: 'URL Dialog Demo',
  url: 'http://mysite.com/external-page.html'
});
```

For more information about the new URL dialog configuration, see the [`URL dialog`]({{site.baseurl}}/ui-components/urldialog/) docs.

<!-- ### Custom sidebars

Docs are coming soon! -->

### Custom context toolbars

The Context Toolbar accepts toolbar buttons that were previously added to the editor using the editor's `addButton`, `addToggleButton`, `addSplitButton` or a`ddMenuButton` functions. The method for creating custom context toolbars in TinyMCE 5.0 has also been changed from `editor.addContextToolbar()` to `editor.ui.registry.addContextToolbar()`.

For more information on Context Toolbars, see [docs]({{site.baseurl}}/ui-components/contexttoolbar).

### Custom context menus

The [Context menu](https://www.tiny.cloud/docs/plugins/contextmenu/) is no longer a plugin, it is part of the core and always enabled. Where TinyMCE 4.x only supported adding registered menu items, the new context menu also allows plugins to register "sections" of the context menu. These sections are dynamic and may show or hide depending on the cursor position when the context menu is opened. For example, the default context menu config is now `'link image editimage table spelling'` which are all plugin section references, not menu items. See [docs]({{site.baseurl}}/ui-components/contextmenu/)

##### New methods:

| **New method** | **Description** |
| ----------- | -------------- |
| editor.ui.registry.addContextMenu() | Adds a custom context menu. |

For more information on Context Menus, see the [docs]({{site.baseurl}}/ui-components/contextmenu).

### Custom context forms

ContextForm consists of an input field and a series of related buttons. Context forms can be shown wherever a context toolbar can be displayed. Also, when a context form is registered containing a `launch` configuration, a special context toolbar button with name **\`form:${name}\`** is registered which will launch that particular context form. ContextForms are a generalization of the `Insert Link` form that existed in the original [inlite](https://www.tiny.cloud/docs-4x/themes/inlite/#quicklink) theme from TinyMCE 4.

## Plugins

Each release of TinyMCE adds new features and functionality. Occasionally some features and functionalities are removed because a better option is added.
Here are the details about the features and functionalities that were removed in TinyMCE 5.0.

### Removed features

Plugins with dialogs no longer have `height` or `width` settings for their dialogs. The dialog component now uses CSS3 and a predefined `small`, `medium`, and `large` template to specify the dimensions.

The following plugins from TinyMCE 4.x do not require height or width options to be specified in TinyMCE 5.0:

* [Code]({{site.baseurl}}/plugins/code/)
* [Codesample]({{site.baseurl}}/plugins/codesample/)
* [Preview]({{site.baseurl}}/plugins/preview/)
* [Template]({{site.baseurl}}/plugins/template/)

#### Changed plugin settings

| **TinyMCE 4.x** | **TinyMCE 5.0** |
| `autoresize_min_height` | `min_height` |
| `autoresize_max_height` | `max_height` |
| `textcolor_cols` | `color_cols` |
| `textcolor_map` | `color_map` |


Please read the [docs]({{site.baseurl}}/plugins/) for more information on the Tiny 4.x configuration options.

### Changed features

These features have either changed or have been deleted in TinyMCE 5.0.

| **Plugin name** | **Description** |
| --------------- |  -------------- |
| [ContextMenu](https://www.tiny.cloud/docs/plugins/contextmenu/) | New API. See [docs]({{site.baseurl}}/ui-components/contextmenu/). |
| [ColorPicker](https://www.tiny.cloud/docs/plugins/colorpicker/) | Moved to the core. See [docs]({{site.baseurl}}/configure/content-appearance/#color_picker}}). |
| [Text Color](https://www.tiny.cloud/docs/plugins/textcolor/) | The `textcolor` plugin was removed and this setting is not required in TinyMCE 5.0. |

### Table

Changes between TinyMCE 4.x and TinyMCE 5.0:

* The text field for Styles have been removed from the advanced table of the dialogs. This simplifies the dialogs for users and gives the editor a stricter control over the table styles which ensures that the styles are correct.
* Improved methods for how styles are set and retrieved from tables, rows, and cells to make these operations more reliable.
* Using CSS for styling, and therefore could remove a few legacy data attributes that were set on tables, rows, and cells which are no longer the good practice. This makes the output HTML cleaner and more modern.
* When opening a properties dialog with a single table, row, or cell selected, the dialog will autofill with the relevant existing values. If multiple rows or cells are selected to open the relevant properties dialog, TinyMCE 4.x left all the dialog fields blank. TinyMCE 5.0 automatically fills values for all the selected rows or cells which have the same values. The fields which have no existing value or have different values are left empty.
* `Border` input field in the table properties dialog is now called `Border width` for better clarity.

### Other removed component configuration settings

Some UI configurations in TinyMCE 5.0 have changed due to an updated UI engine. All inline style configurations have been removed in TinyMCE 5.0 in favor of modern CSS.  This affects all TinyMCE 4.x UI component configurations.
The table below shows UI configurations that have been removed. They are generally related to inline CSS settings.

| **Old settings** | **Description** | **Alternative** |
| ---------------- | --------------- | --------------- |
| flex | Sets an inline CSS value for the component | Use CSS stylesheets for custom styling |
| border | Sets an inline CSS border for the component | Use CSS stylesheets for custom styling |
| layout | Defines a layout | Use the new TinyMCE 5.0 UI components to compose a custom layout |
| spacing | Sets spacing for the component | Use CSS stylesheets for custom styling |
| padding | Sets an inline CSS padding value for the component | Use CSS stylesheets for custom styling |
| align | Sets an inline CSS to align property for the component | Use CSS stylesheets for custom styling |
| pack | Emulates flex pack | Use CSS stylesheets for custom styling |
| no-wrap | Emulates CSS no line wrap | Use CSS stylesheet for custom styling |

Please see the [TinyMCE 4.x docs](https://www.tiny.cloud/docs-4x/) for more information on the above settings.

