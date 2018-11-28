---
layout: default
title: Migrating from TinyMCE 4.x to TinyMCE 5.0.
title_nav: Migration from V4
description: Instructions for migrating from TinyMCE 4.x to TinyMCE 5.0.
keywords: migration considerations premigration pre-migration
---

The new TinyMCE 5.0 editor comes with significant changes to the previous versions. Most configuration changes in TinyMCE 5.0 only affect complex use cases like adding custom components. Setting up a basic TinyMCE 5.0 instance should be the same as TinyMCE 4.x.

Our team at Tiny has worked on creating a more configurable and modern editor while retaining the familiarity of the user interface from the older versions.

This chapter describes the migration process and workarounds if you are using TinyMCE version 4.x. It includes tasks that you must perform before the migration can begin, and different workaround procedures for deprecated, deleted, and updated features.

## Editor-Core

### Initialization

The initialization process of TinyMCE 5.0 is the same as TinyMCE 4.x. The bootstrap process and initialization events all remain the same. It still retains a familiar JSON structure. Some `init` configuration in the TinyMCE version 5.0 has been updated to simplify the configuration options, specifically the configuration items for [UI components]({{site.baseurl}}/ui-components/). Please see the [Quick Start]({{site.baseurl}}/quick-start) section for more information on setup.

These changes may impact integrations depending upon the level of customization. Refer the table below for a general guide for understanding the impact on your specific integration:

| Customization Level | Description | Impact |
| ------------------- | ----------- | ------ |
| Minor | Some custom buttons | No UI fixes required. Updating the `addButton` configuration to TinyMCE 5.0 format. |
| Moderate | A [dialog]({{site.baseurl}}/ui-components/dialog/#dialoginstanceapi) created using `editor.windowManager.open` configuration objects | Convert TinyMCE 4.x config to TinyMCE 5.0 config. |
| Major | Completely custom dialogs and extended use of the Modern UI framework | The new TinyMCE 5.0 components may not cover all API use cases. However, we will strive to create supported workarounds or if there are sufficient requests, add a new component to resolve the use case. |

> Note: If you encounter problems while migrating and wish to be supported or need a workaround, please contact [support](https://support.tiny.cloud/hc/en-us/requests/new). You can also track developer preview issues on GitHub, [here](https://github.com/tinymce/tinymce/labels/dev%20preview).

### Settings

In TinyMCE 5.0, some configurations have been removed because they are no longer necessary or an improved solution has been introduced.

#### Added Settings

| **Setting** | **Description** |
| ----------- | --------------- |
| `custom_colors` | **custom_colors** is `true` by default. When it is set to `false`, it will turn off the custom color picker in the color swatch. |

#### Removed Settings

| **Setting** | **Description** |
| ----------- | --------------- |
| `fixed_toolbar_container` | **fixed_toolbar_container**: Owing to the enhancements to the new inline toolbar behaviour, `fixed_toolbar_container` is not required in TinyMCE 5.0. |

#### Changed Settings

| **Setting** | **TinyMCE 4.x** | **TinyMCE 5.0** |
| ----------- | --------------- | --------------- |
| `height` | Set the height of the editable area of the editor | Sets the overall height of the editor, including the menubar, toolbars, and statusbar |
| | Only supported number values | Supports numbers and strings, and assume a string is a valid CSS value for height |
| `width` | Only supported number values | Supports numbers and strings, and assume a string is a valid CSS value for width |
| `resize` | `true` by default | `true` by default if the `autoresize` plugin isn't enabled. `false` by default if the `autoresize` plugin is enabled. |

### Methods

* All TinyMCE 4.x methods for creating UI components have been removed. New methods have been added for TinyMCE 5.0. For more information, see the [docs]({{site.baseurl}}/ui-components/).
* No core editor methods were removed (tinymce, editor, selection, on(), etc. remain the same).

## Themes

In TinyMCE 5.0, some themes have been removed and are now combined in a new single responsive theme called **Silver**. In TinyMCE 5.0 `Silver` is enabled by default. If you do not specify a theme, it will default to Silver. The Silver theme contains a set of configurable UI components that could be used to replace the current customizations (modern, inline, and inlite theme).

| **Removed Theme** | **Replaced by** |
| ----------------- | --------------  |
| [Modern](https://www.tiny.cloud/docs/themes/modern/) | Silver |
| [Modern inline](https://www.tiny.cloud/docs/general-configuration-guide/use-tinymce-inline/) | Silver Inline |
| [Inlite(Distraction-free Editor)](https://www.tiny.cloud/docs/themes/inlite/) | Silver (distraction free configuration) |
| [Mobile](https://www.tiny.cloud/docs/themes/mobile/) | Silver (responsive to small screen touch devices)  |

### Removed Themes

#### Inlite

The Inlite theme is no longer supported in TinyMCE 5.0. The features that the Inlite theme used to provide are now available as a plugin. The following is an example of the current Inlite configuration:
```
{
  theme: 'silver',
  inline: true,
  toolbar: false,
  menubar: false,
  plugins: [ 'inlite' ]
}
 ```
This will provide a similar but improved [distraction-free]({{site.baseurl}}/general-configuration-guide/use-tinymce-distraction-free/) experience in TinyMCE 5.0.

#### Modern

The Modern theme is no longer supported in TinyMCE 5.0.  The modern theme's UI library [`tinymce.ui.*`](https://www.tiny.cloud/docs/api/tinymce.ui/) has also been deleted. This change may impact integrations depending upon the [level of customization]({{site.baseurl}}/migration-from-4x/#initialization).

> Note: If you encounter problems while migrating and wish to be supported or need a workaround, please contact [support](https://support.tiny.cloud/hc/en-us/requests/new). You can also track developer preview issues on GitHub, [here](https://github.com/tinymce/tinymce/labels/dev%20preview).

### Events

#### Removed Events

| **Removed Event** | **Description**|
| ----------------- | -------------- |
| BeforeRenderUi | Fired before the UI was rendered. |


## Mobile Support
In TinyMCE 4.x, we introduced mobile support bundled with a new theme and configuration settings. TinyMCE 5.0 makes this process seamless where mobile support comes out of the box without any additional configurations.  The new theme is now responsive on tablets, where the classic desktop theme will be displayed, and on smaller devices like phones. It now shows a UI responsive to touchscreens. TinyMCE 5.0 mobile will be an exciting space to watch.


## Components

### Method Namespacing Changes

The methods for registering components have moved to a different part of the editor API. They are now in the UI Registry part of the editor API.

#### Changed Methods

| **Old Method** | **New Method** | **Component** |
| -------------- | -------------- | ------------- |
| editor.addButton(identifier, configuration) | editor.ui.registry.addButton(identifier, configuration) | [Toolbar Buttons]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/) |
| editor.addContextToolbar: (name, spec) | editor.ui.registry.addContextToolbar | [Context toolbar]({{site.baseurl}}/ui-components/contexttoolbar/) |
| editor.addMenuItem: (name, spec) | editor.ui.registry.addMenuItem | [Menu Item]({{site.baseurl}}/migration-from-4x/#custommenuitems) |

#### New Methods

The following new methods have been added for creating and using new components:

| **New Method** | **Description** |
| -------------- | --------------- |
| editor.ui.registry.addAutocompleter: (name, spec) | Autocompleter |
| editor.ui.registry.addContextForm: (name, spec) | [Context form]({{site.baseurl}}/ui-components/contextform/) |
| editor.ui.registry.addContextMenu: (name, spec) | [Context menu]({{site.baseurl}}/ui-components/contextmenu/) |
| editor.ui.registry.addMenuButton: (name, spec) | [Menu Button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#menubutton) |
| editor.ui.registry.addSplitButton: (name, spec) | [Split Button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#splitbutton) |
| editor.ui.registry.addToggleButton: (name, spec) | [Toggle Button]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#togglebutton) |
| editor.ui.registry.addToggleMenuItem: (name, spec) | [Toggle menu item]({{site.baseurl}}/migration-from-4x/#custommenuitems) |
| editor.ui.registry.addIcon: (name, svgData) | Registers an SVG as an icon |
| editor.ui.registry.getAll: () | Returns an array of everything in the UI registry |

### Custom Toolbar Buttons

The methods for adding [Custom Toolbar]({{site.baseurl}}/ui-components/toolbarbuttons/#howtocreatecustomtoolbarbuttons) buttons have changed significantly between TinyMCE 4.x and TinyMCE 5.0. The methods have been moved from `editor.*` to `editor.ui.registry.*` Toolbar button types have changed from -  basic, split, listbox, and menu,  to -  basic, toggle, split, and menu. Explicit methods have been added for creating each type of toolbar button.

#### Changed Methods

Some of the methods from TinyMCE 4.x for creating custom toolbar buttons have been moved and re-implemented to use the TinyMCE 5.0 style of configuration. For more information on how these methods have changed, see [docs]({{site.baseurl}}/ui-components/toolbarbuttons/).

| **Old Method** | **New Method** |
| -------------- | -------------- |
| editor.addButton() | editor.ui.registry.addButton() |
| editor.addMenuItem() | editor.ui.registry.addMenuItem() |


#### New Methods

New methods have been added for creating other common types of toolbar buttons. For example, to create a toggle button In TinyMCE 5.0 we would use `editor.ui.registry.addToggleButton()`. Each of these methods takes configurations specific to their type, to simplify implementation.

| **New Method** | **Description** |
| -------------- | --------------- |
| editor.ui.registry.addToggleButton() | Adds a custom toolbar toggle button. |
| editor.ui.registry.addSplitButton() | Adds a custom toolbar split button. |
| editor.ui.registry.addMenuButton() | Adds a custom toolbar menu button. |

For more information on how these methods have changed, see [docs]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/).

### Removed Toolbar Button Types

[Listbox](https://www.tiny.cloud/docs/demo/custom-toolbar-listbox/) is no longer a supported toolbar button type in TinyMCE 5.0. Though listbox has been removed, any functionality provided by custom listbox toolbar buttons can be retained by switching to a different kind of toolbar button using the new methods. The recommended toolbar button type to switch to is the **Split** button.

### Configuration Differences between TinyMCE 4.x and TinyMCE 5.0:

| Old Method | New Method | Description |
| -----------| ---------- | ----------- |
| `onclick` | `onAction` | `onclick` is now `onAction`. `onAction` now has an API to provide some helper functions to the user. |
| `cmd` | `onAction` | `cmd` has been removed as a configuration option. Commands should be executed through `onAction` now. |
| `onpostrender` | `onSetup` | `onPostRender` has been removed, and instead you should use `onSetup`.  |

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

`onPostRender` has been removed and replaced with `onSetup`. There are 3 major changes:

* While [`onpostrender`](https://www.tiny.cloud/docs/advanced/creating-a-custom-button/#togglebutton) only ran once, when the editor was created, [`onSetup`]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#basicbuttonexampleandexplanation) runs every time a component is rendered, e.g. for a menu item, every time its menu becomes visible.
* `onSetup` now has an API containing some helper functions. Each type of toolbar button has a different API.
* You can configure `onSetup` to return a function, which will be automatically be called on tear down of the component, e.g., when a menu item's menu is closed.
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

### Custom Menu Items

The following configurations options have changed in the Custom Menu items in TinyMCE 5.0:
* `addMenuItem` has a new configuration.
* A new method `addToggleMenuItem` has been added to the options. The `addToggleMenuItem` is an explicit method for creating toggle menu items similar to the new special [toolbar button methods]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/).
* The concept of `context` has been removed from menu item configurations.

#### New Methods:

| **New Method** | **Description** |
| ----------- | -------------- |
| editor.ui.registry.addToggleMenuItem() | Adds a custom toggle menu item. |

#### Changed Methods:

| **Old Method** | **New Method** | **Description** |
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
<!-- Docs are coming soon! -->

### Custom Dialogs

Dialogs no longer have `height` or `width` settings. The dialog component now uses CSS3 and a predefined `small`, `medium`, and `large` template to specify the dimensions. See [docs]({{site.baseurl}}/ui-components/dialog/) for more information.

<!-- ### Custom Sidebars

Docs are coming soon! -->

### Custom Context Toolbars

The Context Toolbar accepts toolbar buttons that were previously added to the editor using the editor's `addButton`, `addToggleButton`, `addSplitButton` or a`ddMenuButton` functions. The method for creating custom context toolbars in TinyMCE 5.0 has also been changed from `editor.addContextToolbar()`` to `editor.ui.registry.addContextToolbar()`.

For more information on Context Toolbars, see [docs]({{site.baseurl}}/ui-components/contexttoolbar).

### Custom Context Menus

The [Context Menu](https://www.tiny.cloud/docs/plugins/contextmenu/) is no longer a plugin, it is part of the core and always enabled. Where TinyMCE 4.x only supported adding registered menu items, the new context menu also allows plugins to register "sections" of the context menu. These sections are dynamic and may show or hide depending on the cursor position when the context menu is opened. For example, the default context menu config is now `'link image editimage table spelling'` which are all plugin section references, not menu items. See [docs]({{site.baseurl}}/ui-components/contextmenu/)

##### New methods:

| **New Method** | **Description** |
| ----------- | -------------- |
| editor.ui.registry.addContextMenu() | Adds a custom context menu. |

For more information on Context Menus, see the [docs]({{site.baseurl}}/ui-components/contextmenu).

### Custom Context Forms

ContextForm consists of an input field and a series of related buttons. Context forms can be shown wherever a context toolbar can be displayed. Also, when a context form is registered containing a `launch` configuration, a special context toolbar button with name **\`form:${name}\`** is registered which will launch that particular context form. ContextForms are a generalization of the `Insert Link` form that existed in the original [inlite](https://www.tiny.cloud/docs/themes/inlite/#quicklink) theme from TinyMCE 4.

## Plugins

Each release of TinyMCE adds new features and functionality. We also occasionally remove features and functionality, usually because we've added a better option.
Here are the details about the features and functionalities that we removed in TinyMCE 5.0.

### Removed Features

Plugins with dialogs no longer have `height` or `width` settings for their dialogs. The dialog component now uses CSS3 and a predefined `small`, `medium`, and `large` template to specify the dimensions.

The following plugins from TinyMCE 4.x do not require height or width options to be specified in TinyMCE 5.0:

* [Code]({{site.baseurl}}/plugins/code/)
* [Codesample]({{site.baseurl}}plugins/codesample/)
* [Preview]({{site.baseurl}}plugins/preview/)
* [Template]({{site.baseurl}}plugins/template/)

#### Changed Plugin Settings

| **TinyMCE 4.x** | **TinyMCE 5.0** |
| `autoresize_min_height` | `min_height` |
| `autoresize_max_height` | `max_height` |
| `textcolor_cols` | `color_cols` |
| `textcolor_map` | `color_map` |


Please read the [docs]({{site.baseurl}}/plugins/) if you need more information on the Tiny 4.x configuration options.

### Changed Features

These features have either changed or have been deleted in TinyMCE 5.0.

| **Plugin Name** | **Description** |
| --------------- |  -------------- |
| [ContextMenu](https://www.tiny.cloud/docs/plugins/contextmenu/) | New API. See [docs]({{site.baseurl}}/ui-components/contextmenu/). |
| [ColorPicker](https://www.tiny.cloud/docs/plugins/colorpicker/) | Moved to the core. See [docs]({{site.baseurl}}/configure/content-appearance/#color_picker}}). |
| [Text Color](https://www.tiny.cloud/docs/plugins/textcolor/#textcolor_rows) | The `textcolor` plugin was removed and this setting is not required in TinyMCE 5.0. |

### Table

Changes between TinyMCE 4.x and TinyMCE 5.0:

* The text field for Styles have been removed from the advanced table of the dialogs. This simplifies the dialogs for users and gives the editor a stricter control over the table styles which ensures that the styles are correct.
* We improved the methods for how styles are set and retrieved from tables, rows, and cells to make these operations more reliable.
* We now use CSS for styling, and therefore we have removed a few legacy data attributes that were set on tables, rows, and cells which are no longer the good practice. This makes the output HTML cleaner and more modern.
* When opening a properties dialog with a single table, row, or cell selected, the dialog will autofill with the relevant existing values. If you selected multiple rows or cells to open the relevant properties dialog, TinyMCE 4.x left all the dialog fields blank. TinyMCE 5.0 autofills for all the selected rows or cells which have the same values. The fields which have no existing value or have different values, are left empty.
* `Border` input field in the table properties dialog is now called `Border width` for better clarity.

### Other Removed Component Configuration Settings

Some UI configurations in TinyMCE 5.0 have changed due to an updated UI engine. All inline style configurations have been removed in TinyMCE 5.0 in favor of modern CSS.  This affects all TinyMCE 4.x UI component configurations.
The table below shows UI configurations that have been removed. They are generally related to inline CSS settings.

| **Old Settings** | **Description** | **Alternative** |
| ---------------- | --------------- | --------------- |
| flex | Sets an inline CSS value for the component | Use CSS stylesheets for custom styling |
| border | Sets an inline CSS border for the component | Use CSS stylesheets for custom styling |
| layout | Defines a layout | Use the new TinyMCE 5.0 UI components to compose your custom layout |
| spacing | Sets spacing for the component | Use CSS stylesheets for custom styling |
| padding | Sets an inline CSS padding value for the component | Use CSS stylesheets for custom styling |
| align | Sets an inline CSS align property for the component | Use CSS stylesheets for custom styling |
| pack | Emulates flex pack | Use CSS stylesheets for custom styling |
| no-wrap | Emulates CSS no line wrap | Use CSS styelsheets for custom styling |

Please see the [TinyMCE 4.x docs](https://www.tiny.cloud/docs/) for more information on the above settings.

