---
layout: default
title: Migrating from TinyMCE 4.x to TinyMCE 5.0.
title_nav: Migrating from 4.x
description: Instructions for migrating from TinyMCE 4.x to TinyMCE 5.0.
keywords: migration considerations premigration pre-migration
---

## Migrating from 4.x

The new TinyMCE 5.0 editor comes with significant changes to the previous versions, though most configuration changes affect complex use cases like adding custom components. Setting up a basic TinyMCE 5.0 instance should be no harder than with TinyMCE 4.x.

Our team at Tiny has worked on creating a more configurable, more modern and less cumbersome editor while retaining the familiarity of the user interface from the older versions.

This chapter describes the migration process and workarounds if you are using an older version of TinyMCE. It includes tasks that you must perform before the migration can begin, and different workaround procedures for deprecated, deleted, and updated features.

## Editor-Core

### Initialization

The initialization process of TinyMCE 5.0 is the same as TinyMCE 4.x. The bootstrap process and initialization events all remain the same.  The main differences are in the `init` configuration, specifically the configuration items for UI components. It still retains a familiar JSON structure. However, many of the configuration options have been simplified.

### Settings

In TinyMCE 5.0, some configurations have been removed because they are no longer necessary or an improved solution has been introduced.

#### Changed Settings

| **Old Settings** |  **Description**|
| ---------------- | --------------- |
| Settings for inline styles | Uses CSS stylesheets for custom |

TODO

#### New Settings

TODO

#### Removed Settings

* **fixed_toolbar_container**: Owing to the enhancements to the new inline toolbar behaviour, `fixed_toolbar_container` is not required in TinyMCE 5.0.

TODO

### Methods

* All TinyMCE 4.x methods for creating creating UI components have been removed. New methods have been added for TinyMCE 5.0. For more information, see the [docs]({{site.baseurl}}/components/).
* No core editor methods were removed (tinymce, editor, selection, on(), etc remain the same).

## Themes

In TinyMCE 5.0, some themes have been removed and are now combined in a new single responsive theme called **Silver**.

| **Removed Theme** | **Replaced by** |
| ----------------- | --------------  |
| [Modern](https://www.tiny.cloud/docs/themes/modern/) | Silver |
| [Modern inline](https://www.tiny.cloud/docs/general-configuration-guide/use-tinymce-inline/) | Silver Inline |
| [Inlite(Distraction-free Editor)](https://www.tiny.cloud/docs/themes/inlite/) | Silver (distraction free configuration) |
| [Mobile](https://www.tiny.cloud/docs/themes/mobile/) | Silver (responsive to screen size)  |

### Removed Themes

#### Inlite

The Inlite theme is no longer supported in TinyMCE 5.0. The features that the Inlite theme used to provide are now available as a plugin. For a workaround, use the following configuration:
```
{
  theme: 'silver',
  inline: true,
  toolbar: false,
  plugins: [ 'inlite' ]
}
 ```
This will provide a similar but improved distraction free experience in TinyMCE 5.0.

#### Modern

The Modern theme is no longer supported in TinyMCE 5.0.  The modern themes Ui library `tinymce.ui.*` has also been deleted. This change may impact integrations depending upon the level of customization.

For changes required, refer to the following table of examples:

| Customization Level | Description | Impact |
| ------------------- | ----------- | ------ |
| Minor | Some custom buttons | no Ui fixes required, update `addButton` configuration to TinyMCE 5.0 format |
| Moderate | A dialog created using `editor.windowManager.open` configuration objects | Convert TinyMCE 4.x config to TinyMCE 5.0 config |
| Major | Completely custom dialogs and extended use of the Modern UI framework | Not all API use cases are covered by our new TinyMCE 5.0 components. However, we will strive to create supported workarounds or if there are sufficient requests, add a new component to resolve the use case. |

> Note: Please provide feedback on your use case and your Tinymce 4.x configuration containing only the UI component that you wish to be supported or need a workaround.

> Note: The Silver theme in TinyMCE 5.0 contains a set of configurable UI components that could be used to replace the current customizations (modern, inline, and inlite theme). Silver is enabled by default. If you do not specify a theme, it will default to Silver.

### Events

#### Removed Events

| **Removed Event** | **Description**|
| ----------------- | -------------- |
| BeforeRenderUi | Fired before the UI was rendered. |


## Components

### Method Namespacing Changes

The methods for registering components have moved to a different part of the editor API. They are now in the UI Registry part of the editor API. For example, `editor.addButton(identifier, configuration)` is now `editor.ui.registry.addButton(identifier, configuration)`. See the relevant sections below for more information.

### Custom Toolbar Buttons

The methods for adding custom toolbar buttons have changed significantly between TinyMCE 4.x and TinyMCE 5.0.

* Toolbar button types have changed from basic, split, listbox, and menu to basic, toggle, split, and menu.
* Methods for creating toolbar buttons have been moved from `editor.*` to `editor.ui.registry.*`.
* Explicit methods have been added for creating each type of toolbar button.

#### Changed Methods

Some of the methods from TinyMCE 4.x for creating custom toolbar buttons have been moved and re-implemented to use the TinyMCE 5.0 style of configuration. For more information on how these methods have changed, see [docs]({{site.baseurl}}/components/toolbarbuttons/).

| **Old Method** | **New Method** |
| -------------- | -------------- |
| editor.addButton() | editor.ui.registry.addButton() |
| editor.addMenuItem() | editor.ui.registry.addMenuItem() |


#### New Methods

New methods have been added for creating other common types of toolbar buttons. For example, to create a toggle button In TinyMCE 5.0 we would use `editor.ui.registry.addToggleButton()`. Each of these methods take configurations specific to their type, to simplify implementation.

| **New Method** | **Description** |
| -------------- | --------------- |
| editor.ui.registry.addToggleButton() | Adds a custom toolbar toggle button. |
| editor.ui.registry.addSplitButton() | Adds a custom toolbar split button. |
| editor.ui.registry.addMenuButton() | Adds a custom toolbar menu button. |

For more information, see [docs]({{site.baseurl}}/components/toolbarbuttons/).

### Removed Toolbar Button Types

**Listbox** is no longer a supported toolbar button type in TinyMCE 5.0. Though listbox has been removed, any functionality provided by custom listbox toolbar buttons can be retained by switching to a different type of toolbar button.

Any custom listbox toolbar buttons can be converted to a different type of toolbar button using the new methods. The recommended toolbar button type to switch to is **Split** button.

### Configuration Differences between TinyMCE 4.x and TinyMCE 5.0:

* `onclick` is now onAction, which is given `api` as an argument to give the user some helper functions.
* `cmd` has been removed as a configuration option. Commands should be executed in `onAction` now.
* `onpostrender` is now `onSetup`, and can return a function that is called on teardown since onSetup potentially runs multiple times, whereas `onpostrender` only ever ran once. If `onSetup` listens to any events using `editor.on(eventName, callback)` it should probably return a `editor.off(eventName, callback)` callback. `onSetup` also has some helper functions passed in through the `buttonApi` argument.

#### onclick

`onclick` is now `onAction`. The callback function given to onAction should take a `buttonApi` argument that's passed to the onAction callback is an object that contains some helper functions. Each type of toolbar button has a different set of API functions. [link to custom toolbar buttons pages?] Example:

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
#### cmd

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
#### onpostrender
`onPostRender` has been removed, and instead you should use `onSetup`. Example:

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

Each type of toolbar button has a different API. In this example, the button's API contains `isDisabled: () => boolean` and `setDisabled: (state: boolean) => void`.

Also, `onpostrender` was only ever called once, when the editor is initialized. `onSetup` is called whenever the component is rendered, which may be multiple times. This means we may need a `onTearDown` handler. Rather than have to define this as a separate configuration option, `onSetup` can return a function to be used on tear down.

This is particularly important if `onSetup` listens to any events using `editor.on(eventName, callback)`. Unless the event was `'init'`, `onSetup` should return `(buttonApi) => ed.off(eventName, callback)`. The **teardown** function will automatically be called by the editor when necessary.

If some functionality should only run once, when the editor is initialized, it should be passed to `editor.on('init', callback)` as the callback function so it's only run when the editor is initialized.

### Custom Menu Items

##### New methods:

| **New Method** | **Description** |
| ----------- | -------------- |
| editor.ui.registry.addMenuItem() | Adds a custom basic menu item. |
| editor.ui.registry.addToggleMenuItem() | Adds a custom toggle menu item. |

Docs coming soon!

### Custom Dialogs

Dialogs no longer have `height` or `width` settings. The dialog component now uses CSS3 and a predefined `small`, `medium`, and `large` template to specify the dimensions.

### Custom Sidebars

Docs coming soon!

### Custom Context Toolbars

The Context Toolbar takes its buttons the registry of toolbar buttons added using `addButton`, `addToggleButton`, `addSplitButton` or `addMenuButton`. The method for creating custom context toolbars has also been moved from `editor.addContextToolbar()` to `editor.ui.registry.addContextToolbar()`.

For more information on Context Toolbars, see [docs]({{site.baseurl}}/components/contexttoolbar).

#### Changes between TinyMCE 4.x and TinyMCE 5.0:

* Buttons go before and after the input in TinyMCE 4.x.
* The `Ctrl+K` shortcut does nothing until the context toolbar is visible in TinyMCE 4.x.
* In TinyMCE 5.0, the pop animates to its new width.
* In TinyMCE 4.x., it is a URL input, so you get a popup and a browse button.

### Custom Context Menus

The default context menu is no longer a plugin, it is part of the core and always enabled. Where TinyMCE 4.x only supported adding registered menu items, the new context menu also allows plugins to register "sections" of the context menu. These sections are dynamic and may show or hide depending on the cursor position when the context menu is opened. For example, the default context menu config is now `'link image editimage table spelling'` which are all plugin section references, not menu items.

##### New methods:

| **New Method** | **Description** |
| ----------- | -------------- |
| editor.ui.registry.addContextMenu() | Adds a custom context menu. |

For more information on Context Menus, see the [docs]({{site.baseurl}}/components/contextmenu).

### Custom Context Forms

ContextForms are a generalisation of the `Insert Link` form that existed in the original `inlite` plugin from [TinyMCE 4.x]((https://www.tiny.cloud/docs/themes/inlite/#quicklink)).

### Toolbar Menus

* New buttons are added to the global `editor.settings.menus` which is an enhancement since, it now shows the toggled state.
* Improved mouse and keyboard navigation.

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

Please read the [docs]({{site.baseurl}}/plugins/) if you need more information on the Tiny 4.x configuration options.

### Changed Features

These features have either changed or have been deleted in TinyMCE 5.0.
Each release of TinyMCE adds new features and functionality. We also occasionally remove features and functionality, usually because we’ve added a better option. Here are the details about the features and functionalities that we removed in TinyMCE 5.0.

#### Moved Plugins

| **Plugin Name** | **Description** |
| --------------- |  -------------- |
| [ContextMenu](https://www.tiny.cloud/docs/plugins/contextmenu/) | New API. See [docs]({{site.baseurl}}/components/contextmenu/). |

### Table

Changes between TinyMCE 4.x and TinyMCE 5.0:

* Styles text field has been removed from the advanced table of the dialogs. This simplifies the dialogs for users and gives the editor stricter control over the table styles which means we are better able to ensure the styles are correct.
* Improved how styles are set and retrieved from tables, rows, and cells, so this should be more reliable now.
* Shifted to using CSS more for styling, and therefore removed a few legacy data attributes that were set on tables/rows/cells which are no longer the good practice to use. This makes the output HTML cleaner and more modern.
* When opening a properties dialog with a single table/row/cell selected, the dialog will autofill with the relevant existing values. If you select multiple rows or cells and open the relevant properties dialog, TinyMCE 4.x will leave all the dialog fields blank. In TinyMCE 5.0, any fields which have the same values for all the selected rows or cells will autofill, and the fields which have no existing value or have differing values will be empty.
* `Border` input field in the `tableprops` dialog is now called `Border width`, for better clarity.


## Mobile Support
* TinyMCE 4.x introduced mobile support, bundled with a new theme and configuration settings.
* TinyMCE 5.0 makes this process seamless, where mobile support comes out of the box without additional configurations.  TinyMCE 5.0 mobile will be an exciting space to watch.

