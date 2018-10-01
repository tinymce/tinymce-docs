---
layout: default
title: Basic
title_nav: Basic
description: Basic Toolbar Button
keywords: basicmenu basic menu toolbarmenu
---

##BASIC BUTTON


### Config Options

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| text | string | optional | Text to display if no icon is found. |
| icon | string | optional | It displays the icon corresponding to the icon name that has been defined in the icon pack. |
| tooltip | string | optional | Text for button tooltip.  |
| disabled | boolean | optional | default: false - Represents button state. Is toggled by the button's API. |
| onSetup | (api) => (api) => void | optional | default: () => () => {} - Function that's invoked when the button is rendered. |
| onAction | (api) => void | required | Function that's called when the button is clicked. |

> Note:  See below for details on return type for onSetup and onAction.

### API

| Name | Value | Description |
| ---- | ----- | ----------- |
| isDisabled | () => boolean | Check if the button is disabled. |
| setDisabled | (state: boolean) => void | Set the button's disabled state. |


### Example

This example adds two buttons to the toolbar:

{% include codepen.html id="custom-toolbar-button" tab="js" %}

### Explanation

This example adds two buttons to the toolbar. The first just inserts "It's my button!" into the editor when clicked.
​
The second button is an example of how onSetup works. This button inserts a `time` element containing the current date into the editor using a `toTimeHtml()` helper function - a simplified version of TinyMCE's [insertdatetime]({{site.baseurl}}/plugins/insertdatetime/) plugin.

Since it wouldn't make sense to insert a `time` element into another `time` element, we have used `onSetup` to listen to the editor's [`NodeChange` event]({{site.baseurl}}/advanced/events/#nodechange) and disable the button when the user's cursor is inside a `time` element (or "node"). We have also borrowed an icon from the `insertdatetime` plugin, and explicitly set `disabled` to `true` in the button configuration so that it is disabled when the button is created.

`onSetup` is a complex property. It requires a function that takes the button's API and returns a function that takes the button's API and returns nothing. That's because `onSetup` is run whenever its toolbar button is created, and the function it returns must be a callback for when the button is destroyed - essentially an `onTeardown` handler.

When you listen to events in `onSetup` using `editor.on(eventName, callback)`, you're binding a callback function to an event. Therefore, in the teardown handler you need to tell the editor which function to unbind from which event using `editor.off(eventName, callback)`.

> Note:

* The callback function is the same one you passed to `editor.on()`. In this case, because we're binding the `editorEventCallback` function to the `NodeChange` event when the button is created, we simply need to return `(api) => editor.off('NodeChange', editorEventCallback)`.
* If you don't listen to any editor events or only listen to the editor's `init` event, you can just return an empty function from onSetup - `return () => {};`.
