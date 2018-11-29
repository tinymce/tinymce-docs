---
layout: default
title: Types of toolbar buttons
title_nav: Types of toolbar buttons
description: This section shows you different types of toolbar buttons.
keywords: toolbar toolbarbuttons buttons toolbarbuttonsapi
---

There are four types of Toolbar Buttons in TinyMCE 5.0:

* Basic Button
* Toggle Button
* Split Button
* Menu Button

### Basic Button

A basic button simply triggers it's `onAction` function when clicked.

#### Config Options

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| text | string | optional | Text to display if no icon is found. |
| icon | string | optional | It displays the icon corresponding to the icon name that has been defined in the icon pack. |
| tooltip | string | optional | Text for button tooltip.  |
| disabled | boolean | optional | default: false - Represents button state. Is toggled by the button's API. |
| onSetup | (api) => (api) => void | optional | default: () => () => {} - Function that's invoked when the button is rendered. |
| onAction | (api) => void | required | Function that's called when the button is clicked. |

> Note:  See below for details on return type for onSetup and onAction.

#### API

| Name | Value | Description |
| ---- | ----- | ----------- |
| isDisabled | () => boolean | Check if the button is disabled. |
| setDisabled | (state: boolean) => void | Set the button's disabled state. |


#### Basic Button Example and Explanation

This example adds two buttons to the toolbar:

{% include codepen.html id="custom-toolbar-button" tab="js" %}

This example adds two buttons to the toolbar. The first just inserts "It's my button!" into the editor when clicked.
​
The second button is an example of how onSetup works. This button inserts a `time` element containing the current date into the editor using a `toTimeHtml()` helper function - a simplified version of TinyMCE's [insertdatetime]({{site.baseurl}}/plugins/insertdatetime/) plugin.

Since it wouldn't make sense to insert a `time` element into another `time` element, we have used `onSetup` to listen to the editor's [`NodeChange` event]({{site.baseurl}}/advanced/events/#nodechange) and disable the button when the user's cursor is inside a `time` element (or "node"). We have also borrowed an icon from the `insertdatetime` plugin, and explicitly set `disabled` to `true` in the button configuration so that it is disabled when the button is created.

`onSetup` is a complex property. It requires a function that takes the button's API and returns a function that takes the button's API and returns nothing. That's because `onSetup` is run whenever its toolbar button is created, and the function it returns must be a callback for when the button is destroyed - essentially an `onTeardown` handler.

When you listen to events in `onSetup` using `editor.on(eventName, callback)`, you're binding a callback function to an event. Therefore, in the teardown handler you need to tell the editor which function to unbind from which event using `editor.off(eventName, callback)`.

> Note:

* The callback function is the same one you passed to `editor.on()`. In this case, because we're binding the `editorEventCallback` function to the `NodeChange` event when the button is created, we simply need to return `(api) => editor.off('NodeChange', editorEventCallback)`.
* If you don't listen to any editor events or only listen to the editor's `init` event, you can just return an empty function from onSetup - `return () => {};`.


### Toggle Button

A toggle button, when clicked, triggers an action like a basic button, but it also has a concept of state, and can be toggled on and off. Toggle buttons have CSS styling to show their state, which gives the user visual feedback.

> Example: Bold button, which gets highlighted if your cursor is in a word with bold formatting.

#### Config Options

| Name | Value | Requirement | Description |
|------| ------| ------------| ----------- |
| text | string | optional | Text to display if no icon is found. |
| icon | string | optional | It displays the icon corresponding to the icon name that has been defined in the icon pack.  |
| tooltip | string | optional | Text for button tooltip.  |
| disabled | boolean | optional| default: false - Represents button state. Is toggled by the button's API. |
| active | boolean | optional | default: false |
| onSetup | (api) => (api) => void | optional | default: () => () => {} - Function that's invoked when the button is rendered. |
| onAction | (api) => void | required | Function that's called when the button is clicked. |

> Note:  See below for details on return type for onSetup and onAction.

#### API

| Name | Value | Description |
|------| ------| ------------|
| isDisabled | ( ) => boolean | check if the button is disabled |
| setDisabled | (state: boolean) => void | set the button's disabled state |
| isActive| ( ) => boolean | check the button's toggle state |
| setActive | (state: boolean) => void | set the button's toggle state |

#### Toggle Button Example and Explanation

{% include codepen.html id="custom-toolbar-toggle-button" %}

In this example we add two custom strikethrough buttons to the editor. Both have the same `onAction` configuration: they use `editor.execCommand(command, ui, args)` to execute `mceToggleFormat` - an internal command that toggles the specified format on and off - and pass it the format name `strikethrough`. Note that the format name must already be registered with the editor, which `strikethrough` is.

This first button works perfectly in terms of applying and removing strikethrough formatting to editor content, but the button itself only toggles its active state on click and doesn't reflect the state of the selected content. For example, if you were to select some text and click the button to apply strikethrough formatting, the button would become highlighted to show that it's active. But if you select other text that doesn't have strikethrough formatting, the button would still remain active. We would prefer the button to only be active when the selected content has strikethrough formatting, and to be inactive when the selected content doesn't have strikethrough formatting.

To do this, the second button uses `onSetup` to register a callback for strikethrough content with `editor.formatter.formatChanged(formatName, callback)`. This is an internal TinyMCE method that will call the specified callback function when the selected content has the given formatting. Note that the format name given to `mceToggleFormat` via `editor.execCommand(command, ui, args)` and to `editor.formatter.formatChanged(formatName, callback)` is the same.

The callback given to `editor.formatter.formatChanged` should be a function that takes a `state` boolean which represents whether the currently selected content has the specified format or not. We can then use this `state` boolean to set the buttons active state to match whether the selected content has the specified formatting, using `api.setActive(state)` from the button's API [link]. This way, the `customToggleStrikethrough` button will only be active when the selected content has strikethrough formatting.

### Split Button

A split button (also called a dropdown) has a preview field and a down arrow, and when clicked opens a list of options.

> Example: Font select dropdown.

#### Config Options

| Name | Value | Requirement | Description |
|------| ------| ------------| ----------- |
| text | string | optional | Text to display if no icon is found. |
| icon | string | optional | It displays the icon corresponding to the icon name that has been defined in the icon pack.  |
| select | (value: string) => boolean  | optional | default: false |
| presets | 'color', 'normal', 'toolbar' | optional | default: 'normal' |
| columns | string | optional | It displays the icon corresponding to the icon name that has been defined in the icon pack. |
| fetch | (success: (menu) => void) => void  | required| default: false - Represents button state. is toggled by the button's api. |
| onAction | string | optional | Text to display if no icon is found. |
| onItemAction | string | optional | Item that's called when the button is clicked. |
| onSetup | (api) => (api) => void | optional | default: () => () => {} - Function that's invoked when the button is rendered. |

> Note:  See below for details on return type for onSetup.

#### API

| Name | Value | Description |
|------| ------| ------------|
| isDisabled | ( ) => boolean | Check if the button is disabled. |
| setDisabled | (state: boolean) => void | Set the button's disabled state. |
| isActive| ( ) => boolean | Check the button's toggle state. |
| setActive | (state: boolean) => void | Set the button's toggle state. |
| setIconFill | (id: string, value: string) => void | It fills the values for the icon corresponding to the icon name that has been defined in the icon pack. |
| setIconStroke | (id: string, value: string) => void | It sets the action on click for the icon corresponding to the icon name that has been defined in the icon pack. |

#### Split Button Example and Explanation

The following example shows how to setup just a basic split button, with a static dropdown menu.

{% include codepen.html id="custom-toolbar-split-button" tab="js" %}

Split toolbar buttons are highly configurable, but most of their configuration options are optional. This example shows how to setup just a basic split button, with a static dropdown menu.

We start with a text label for the button, although we could have used an icon instead.

As with all toolbar buttons, a split button requires an `onAction` callback. However, in this case we only care about when the user clicks on a menu item, and not the toolbar button that triggers the appearance of the menu, so we give `onAction` a function that does nothing.

Next is `onItemAction`, which will be called when a menu item is clicked. The callback function is passed the split button's API [link] and the value of the selected menu item, and should not return anything. In the example, we're simply calling `editor.insertContent(value)` to insert the given value into the editor's content.

Finally, we have `fetch`. This configuration option is a function that is passed a callback which is called whenever the split button's dropdown menu is opened. This allows for asynchronous fetching of the menu items. Within this function, we need to create a list of menu items, and pass them to the callback.The configuration options and API for menu items can be found here.

We also have a demo of the Menu Toolbar button for you [here]({{site.baseurl}}/demo/custom-toolbar-split-button/).

### Menu Button

A toolbar menu button is a toolbar button that opens a menu on click, which can also contain submenu. This is useful if you want to group actions together that would otherwise be several buttons on the toolbar, or if you don't want a toolbar and a menubar since this allows you to pull menus into the toolbar.

> Example: the table plugin's table toolbar button, which opens a menu very similar to table's menubar menu, or its context menu.

#### Config Options

| Name | Value | Requirement | Description |
|------| ------| ------------| ----------- |
| text | string | optional | Text to display if no icon is found. |
| icon | string | optional | It displays the icon corresponding to the icon name that has been defined in the icon pack. |
| tooltip | string | optional | Text for button tooltip.  |
| fetch | (success: (menu) => void) => void  | required| default: false - Represents button state. Is toggled by the button's API. |
| onSetup | (api) => (api) => void | optional | default: () => () => {} - Function that's invoked when the button is rendered. |

> Note:  See below for details on return type for onSetup and onAction.

#### API

| Name | Value | Description |
|------| ------| ------------|
| isDisabled | ( ) => boolean | Check if the button is disabled. |
| setDisabled | (state: boolean) => void | Set the button's disabled state. |

#### Menu Button Example and Explanation

The following is an example of a Simple Toolbar Button:

{% include codepen.html id="custom-toolbar-menu-button" tab="js" %}

The above is a simple example of a toolbar menu button. It adds a button to the toolbar with the text `My Button` which, when clicked, opens the specified menu. In this case, we've added two menu items. The first inserts content when clicked, and the second opens a submenu which has two children.

The most important part of the configuration for a menu button is the `fetch` option. This configuration option is a function that is passed a callback which is called whenever the menu button's menu is opened. This allows for asynchronous fetching of the menu items. Within this function, we need to create a list of menu items, and pass them to the callback.

We also have a demo of the Menu Toolbar button for you [here]({{site.baseurl}}/demo/custom-toolbar-menu-button/).
