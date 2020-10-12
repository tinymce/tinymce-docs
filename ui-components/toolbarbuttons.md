---
layout: default
title: Toolbar buttons
title_nav: Toolbar buttons
description: Add a custom buttons to the TinyMCE 5 toolbar.
keywords: toolbar toolbarbuttons buttons toolbarbuttonsapi
---

## Use cases

* Create a shortcut for an action or a series of actions that the user repeatedly does.
* Create a button for custom behavior.

## How to create custom toolbar buttons

The methods for adding custom toolbar buttons are in the UI Registry part of the editor API `editor.ui.registry`. The API has four methods for adding toolbar buttons, one for each type of toolbar button:

* `editor.ui.registry.addButton`(identifier, configuration)
* `editor.ui.registry.addToggleButton`(identifier, configuration)
* `editor.ui.registry.addSplitButton`(identifier, configuration)
* `editor.ui.registry.addMenuButton`(identifier, configuration)
* `editor.ui.registry.addGroupToolbarButton`(identifier, configuration)

The two arguments these methods take are:

* `identifier` - a unique name for the button
* `configuration` - an object containing your configuration for that button.

> **Note**: Some configuration options are common to all types of toolbar buttons, but some toolbar button types also have custom configuration options. Review the relevant documentation for each type of button for more information.

To create a custom toolbar button, define and register the button within the `setup` callback of the {{site.productname}} configuration. This callback is invoked automatically for every initialized editor instance. UI components must be defined within the `setup` callback because the callback receives a reference to the editor instance as its argument, which is used to access the UI registry API. Once registered, the button can be added to the editor by adding the identifier string it was registered with to the `toolbar` configuration option.

## Example of adding a basic button that triggers an alert when clicked

```js
tinymce.init({
  selector: '#editor',
  toolbar: 'myCustomToolbarButton',
  setup: function (editor) {
    editor.ui.registry.addButton('myCustomToolbarButton', {
      text: 'My Custom Button',
      onAction: function () {
        alert('Button clicked!');
      }
    });
  }
});
```

## Toolbar Buttons Example

The following example creates different types of toolbar buttons.

{% include live-demo.html id="toolbar-button" height="400" %}

{% assign_page next_page = "/ui-components/typesoftoolbarbuttons/index.html" %}
{% include next-step.html next=next_page %}