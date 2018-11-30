---
layout: default
title: Toolbar buttons
title_nav: Toolbar buttons
description: Add a custom buttons to the TinyMCE 5.0 toolbar.
keywords: toolbar toolbarbuttons buttons toolbarbuttonsapi
---

## Use Cases

* Create a shortcut for an action or series of actions that the user does repeatedly.
* Create a button for a custom behaviour.

## How to Create Custom Toolbar Buttons

The methods for adding custom toolbar buttons are in the UI Registry part of the editor API `editor.ui.registry`. The API has four methods for adding toolbar buttons, one for each type of toolbar button:

* `editor.ui.registry.addButton`(identifier, configuration)
* `editor.ui.registry.addToggleButton`(identifier, configuration)
* `editor.ui.registry.addSplitButton`(identifier, configuration)
* `editor.ui.registry.addMenuButton`(identifier, configuration)

The two arguments these methods take are:

* `identifier` - a unique name for the button
* `configuration` - an object containing your configuration for that button.

> Note: Each type of button has custom and common configuration options. Review the relevant documentation for each type of button for more information.

Define the custom toolbar button with the `setup` callback of the TinyMCE configuration to add it to the editor. This callback is automatically invoked for every initialised editor instance. Access to the UI Registry API occurs when the callback receives a reference to the editor instance as its argument.

### Example of adding a basic button that triggers an alert when clicked:

```js
tinymce.init({
  selector: '#editor',
  toolbar: 'myCustomToolbarButton',
  setup: (editor) => {
    editor.ui.registry.addButton('myCustomToolbarButton', {
      text: 'My Custom Button',
      onAction: () => alert('Button clicked!')
    });
  }
});
```
> Note: The identifier used to create the basic button is included in the `toolbar` option in the TinyMCE configuration. The button is not added to the toolbar without this identifier.

## Example

The following example creates different types of toolbar buttons.

{% include codepen.html id="toolbar-button" height="900" %}

