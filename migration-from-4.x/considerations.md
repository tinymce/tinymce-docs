---
layout: draft
title: Considerations
title_nav: Considerations
description: Instructions for migrating from TinyMCE 4.x to TinyMCE 5.0.
keywords: migration considerations premigration pre-migration
---


## Migrating from Previous Versions

The new TinyMCE 5.0 editor comes with significant changes to the previous versions. The new editor offers an easier to navigate user interface.

Our team at Tiny has worked on creating a configurable, less cumbersome editor while retaining the familiarity of the user interface from the older versions.

This chapter describes the migration process and workarounds if you are using an older version of TinyMCE. It includes tasks that you must perform before the migration can begin, and different workaround procedures for deprecated, deleted, and updated features.


## Important Considerations

### API changes

What does the current API allow us to do?

* Add a button to the toolbar editor.addButton()
* Create a button and attach it anywhere tinymce.ui.Factory.create


What can’t it do now that we would like it to do later

* Share the Ui with TBIO
* editor.addButton will need to create an Alloy config, we will need various adaptors to make it work both ways. This adds complexity and maybe awkward code.

What can it do now that we don’t want it to do later

* When we set { cmd: ‘foobar” } it will overwrite any onclick functions declared (Editor.ts addButton)
* Some args can be String or String[]
* Some args can take either fn() or String
* on<event> exposes too much

### Tables

Changes between Tiny 4 and 5:

 - Styles text field has been removed from the advanced table of the dialogs. This simplifies the dialogs for users, and gives the editor stricter control over the table styles which means we are better able to ensure the styles are correct.
 - Improved how styles are set and retrieved from tables, rows and cells, so this should be more reliable now.
 - Shifted to using CSS more for styling, and therefore was able to remove a few legacy data attributes that we were setting on tables/rows/cells which are no longer good practice to use. This makes the output HTML cleaner and more modern.
 - When opening a properties dialog with a single table/row/cell selected, the dialog will autofill with the relevant existing values. If you select multiple rows or cells and open the relevant properties dialog, Tiny 4 will leave all the dialog fields blank. In Tiny 5, any fields which have the same values for all the selected rows or cells will autofill, and the fields which have no existing value or have differing values will be empty.
 - "Border" input field in the tableprops dialog is now called "Border width", for better clarity.

### Toolbar buttons 4 vs 5:

#### Summary:
* The methods for adding toolbar buttons have been moved to a different part of the editor API.
* `onclick` is now onAction, which is given `api` as an argument to give the user some helper functions.
* `cmd` has been removed as a configuration option. Commands should be executed in `onAction` now.
* `onpostrender` is now `onSetup`, and can return a function that is called on teardown since onSetup potentially runs multiple times, whereas onpostrender only ever ran once. If onSetup listens to any events using `editor.on(eventName, callback)` it should probably return a `editor.off(eventName, callback)` callback. `onSetup` also has some helper functions passed in through the `buttonApi` argument.
* Toolbar button types have changed from basic, split, listbox and menu to basic, toggle, split and menu.

### Method Namespacing

The methods for registering toolbar buttons have been moved to a different part of the editor API. They are now in the UI Registry part of the editor API - so `editor.addButton(identifier, configuration)` is now `editor.ui.registry.addButton(identifier, configuration)`.

#### onclick

`onclick` is now `onAction`. The callback function given to onAction should take an `buttonApi` argument that's passed to the onAction callback is an object that contains some helper functions. Each type of toolbar button has a different set of API functions. [link to custom toolbar buttons pages?] Example:

#### TinyMCE 4:

```js
editor.addButton('mybutton', {
  text: "My Button",
  onclick: () => alert("My Button clicked!")
});
```
#### TinyMCE 5:

```js
editor.ui.registry.addButton('myButton', {
  text: 'My Button',
  onAction: (buttonApi) => alert('My Button clicked!')
});
```
#### cmd

`cmd: string` has been removed as a configuration options, and commands should be executed in `onAction` instead. Example:

#### TinyMCE 4:

```js
editor.addButton('mybutton', {
  text: "My Button",
  cmd: 'mceSave'
});
```
#### TinyMCE 5:

```js
editor.ui.registry.addButton('myButton', {
  text: 'My Button',
  onAction: (_) => editor.execCommand('mceSave')
});
```
#### onpostrender
`onPostRender` has been removed, and instead you should use `onSetup`. Example:

#### TinyMCE 4:

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
#### TinyMCE 5:

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
> Note that the callback function given to `onSetup` should take a `buttonApi` argument which is an object that contains some helper functions. Each type of toolbar button has a different API. In this example, the button's API contains `isDisabled: () => boolean` and `setDisabled: (state: boolean) => void`.
Also, `onpostrender` was only ever called once, when the editor was initialised. `onSetup` is called whenever the component is rendered, which may be multiple times. This means we may need essentially an `onTearDown` handler. Rather than have to define this as a separate configuration option, `onSetup` can return a function to be used on tear down.
This is particularly important if `onSetup` listens to any events using `editor.on(eventName, callback)`. Unless the event was `'init'`, `onSetup` should return `(buttonApi) => ed.off(eventName, callback)`. The tear down function will automatically be called by the editor when necessary.
If some functionality should only run once, when the editor is initialised, it should be passed to `editor.on('init', callback)` as the callback function so it's only run when the editor is initialised.

#### Button Types
Toolbar button types have changed from basic, split, listbox and menu to basic, toggle, split and menu. The new toolbar toggle button type makes it easier to add toggle buttons, without needing to manually configure their toggling behaviour. Listbox has been removed, and any custom listbox toolbar buttons should be converted to one of the new toolbar button types. The recommended type to switch to is split button.
Each button type also has an API of helper methods that can be used within its `onAction` and `onSetup` callbacks. This also removes the need for using the `this` keyword in the `onSetup` and `onAction` callbacks. Example:

#### TinyMCE 4:

```js
editor.addButton('mybutton', {
  text: "My Button",
  onclick: () => {
    var btn = this;
    btn.active(false)
  }
});
```
#### TinyMCE 5:

```js
editor.ui.registry.addButton('myButton', {
  text: 'My Button',
  onAction: (buttonApi) => api.setActive(false)
});
```
### Context

#### Context Menu

#### Context Toolbar

#### Context Form

### Features

