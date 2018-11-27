---
layout: default
title: Toolbar Buttons
title_nav: Toolbar Buttons
description: This section shows you how to add a custom button to the Tiny 5.0 toolbar.
keywords: toolbar toolbarbuttons buttons toolbarbuttonsapi
---

## Use Cases

* Create a shortcut for some action/series of actions that the user does often/repeatedly.
* Create a button for some custom behaviour.

## How to Create Custom Toolbar Buttons

The methods for adding custom toolbar buttons are in the UI Registry part of the editor API `editor.ui.registry`. The API has four methods for adding toolbar buttons, one for each type of toolbar button:

* `editor.ui.registry.addButton`(identifier, configuration)
* `editor.ui.registry.addToggleButton`(identifier, configuration)
* `editor.ui.registry.addSplitButton`(identifier, configuration)
* `editor.ui.registry.addMenuButton`(identifier, configuration)

The two arguments these methods take are:

* `identifier` - a unique name for the button
* `configuration` - an object containing your configuration for that button.

> Note: Although there are some common configuration options, each type of button has custom options. We recommend reading the relevant page for the type of button you're creating.

To actually add a custom toolbar button to the editor, you need to define it within the `setup` callback of your TinyMCE configuration. This callback is automatically invoked for every initialised editor instance. It receives a reference to the editor instance as its argument, which we use to access the UI Registry API.

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
> Note: The identifier used to create the basic button is included in the `toolbar` option of our TinyMCE configuration. Without this, our button won't be added to the toolbar.

## Example

The following is an example for creating different types of ToolBar Buttons.

{% include codepen.html id="toolbar-button" height="900" %}

