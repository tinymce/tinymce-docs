---
layout: default
title: Types of toolbar buttons
title_nav: Types of toolbar buttons
description: This section demonstrates different types of toolbar buttons.
keywords: toolbar toolbarbuttons buttons toolbarbuttonsapi
---

There are four types of Toolbar Buttons in TinyMCE 5.0:

* Basic Button
* Toggle Button
* Split Button
* Menu Button

### Basic Button

A basic button triggers its `onAction` function when clicked.

#### Config Options

| Name | Value | Requirement | Description |
| ---- | ----- | ----------- | ----------- |
| text | string | optional | Text to display if no icon is found. |
| icon | string | optional | Displays the icon corresponding to the icon name defined in the icon pack. |
| tooltip | string | optional | Text for button tooltip.  |
| disabled | boolean | optional | default: false - Represents button state. Toggled by the button's API. |
| onSetup | (api) => (api) => void | optional | default: () => () => {} - Function invoked when the button is rendered. |
| onAction | (api) => void | required | Function called when the button is clicked. |

> Note: See below for details on the return type for `onSetup` and `onAction`.

#### API

| Name | Value | Description |
| ---- | ----- | ----------- |
| isDisabled | () => boolean | Checks if the button is disabled. |
| setDisabled | (state: boolean) => void | Sets the button's disabled state. |


#### Basic Button Example and Explanation

The following example adds two buttons to the toolbar:

{% include codepen.html id="custom-toolbar-button" tab="js" %}

The first button inserts "It's my button!" into the editor when clicked. The second button is an example of how `onSetup` works. This button inserts a `time` element containing the current date into the editor using a `toTimeHtml()` helper function - a simplified version of TinyMCE's [insertdatetime]({{site.baseurl}}/plugins/insertdatetime/) plugin.

`onSetup` is used to listen to the editor's [`NodeChange` event]({{site.baseurl}}/advanced/events/#nodechange) to disable the button when the cursor is inside a `time` element (or "node"). This method is used as it is illogical to insert a `time` element into *another* `time` element. The icon from the `insertdatetime` plugin is set `disabled` to `true` in the button configuration. This disables the button when it is created.

`onSetup` is a complex property as it requires a function that takes the button's API and returns an empty function. This occurs because `onSetup` runs whenever its toolbar button is created and the returned function must be a callback for when the button is destroyed. This is essentially an `onTeardown` handler.

A callback function is bound to an event when using `editor.on(eventName, callback)` to listen to events in `onSetup`. The editor needs to be told which function to unbind from which event in the teardown handler using the `editor.off(eventName, callback)`.

> Note:

* The callback function is the same function passed to `editor.on()`. In this case, because `editorEventCallback` function is bound to the `NodeChange` event when the button is created, the `(api) => editor.off('NodeChange', editorEventCallback)` needs to be returned.
* Return an empty function from `onSetup` - `return () => {};` if editor events are not listened for or if only the editor's `init` event is listened for.


### Toggle Button

A toggle button triggers an action when clicked. A toggle button holds the concept of state. This means it can be toggled `on` and `off`. A toggle button gives the user visual feedback for its state through CSS styling. An example of this behaviour is the **Bold** button that becomes highlighted when the cursor is in a word with bold formatting.

#### Config Options

| Name | Value | Requirement | Description |
|------| ------| ------------| ----------- |
| text | string | optional | Text to display if no icon is found. |
| icon | string | optional | Displays the icon corresponding to the icon name is defined in the icon pack.  |
| tooltip | string | optional | Text for button tooltip.  |
| disabled | boolean | optional| default: false - Represents button state. Toggled by the button's API. |
| active | boolean | optional | default: false |
| onSetup | (api) => (api) => void | optional | default: () => () => {} - Function invoked when the button is rendered. |
| onAction | (api) => void | required | Function called when the button is clicked. |

> Note: More details are below for the return type for `onSetup` and `onAction`.

#### API

| Name | Value | Description |
|------| ------| ------------|
| isDisabled | ( ) => boolean | checks if button is disabled |
| setDisabled | (state: boolean) => void | sets the button's disabled state |
| isActive| ( ) => boolean | checks the button's toggle state |
| setActive | (state: boolean) => void | sets the button's toggle state |

#### Toggle Button Example and Explanation

{% include codepen.html id="custom-toolbar-toggle-button" %}

The example above adds two custom **strikethrough** buttons with the same `onAction` configuration. The configuration uses `editor.execCommand(command, ui, args)` to execute `mceToggleFormat`. This internal command toggles the specified format on and off while passing it the format name `strikethrough`. Note that the format name `strikethrough` must already be registered with the editor.

The first button functions as expected: it applies and removes strikethrough formatting to the editor's content. Note that the button itself only toggles its active state on click and *doesn't* reflect the actual state of the selected content. 

The accepted useability standard occurs when the button becomes **active** to show that strikethrough formatting has been applied if the selected text *does* have strikethrough formatting applied and the button remains **inactive** if the selected text *doesn't* have strikethrough formatting applied.

Achieving this useability standard requires additional configuration. The second button uses `onSetup` to register a callback for strikethrough content using `editor.formatter.formatChanged(formatName, callback)`. This internal TinyMCE method calls the specified callback function when the selected content has the applied formatting. 

> Note: The format name given to `mceToggleFormat` via `editor.execCommand(command, ui, args)` and to `editor.formatter.formatChanged(formatName, callback)` is the same.

The callback given to `editor.formatter.formatChanged` is a function that takes a `state` boolean representing whether the currently selected content contains the applied format. This `state` boolean is used to set the button's active state to match if the selected content has the applied formatting by using the `api.setActive(state)` from the button's API [link]. The `customToggleStrikethrough` button is only active when the selected content contains the strikethrough formatting.

### Split Button

A split button, or dropdown button, opens a list of options when clicked. It also contains a preview field and a down arrow.

> Example: Font select dropdown.

#### Config Options

| Name | Value | Requirement | Description |
|------| ------| ------------| ----------- |
| text | string | optional | Text displayed if no icon is found. |
| icon | string | optional | Displays the icon corresponding to the icon name defined in the icon pack.  |
| select | (value: string) => boolean  | optional | default: false |
| presets | 'color', 'normal', 'toolbar' | optional | default: 'normal' |
| columns | string | optional | Displays the icon corresponding to the icon name defined in the icon pack. |
| fetch | (success: (menu) => void) => void  | required| default: false - Represents button state. Toggled by the button's api. |
| onAction | string | optional | Text displayed if no icon is found. |
| onItemAction | string | optional | Item called when the button is clicked. |
| onSetup | (api) => (api) => void | optional | default: () => () => {} - Function invoked when the button is rendered. |

> Note:  See below for details on return type for `onSetup`.

#### API

| Name | Value | Description |
|------| ------| ------------|
| isDisabled | ( ) => boolean | Checks if button is disabled. |
| setDisabled | (state: boolean) => void | Sets the button's disabled state. |
| isActive| ( ) => boolean | Checks the button's toggle state. |
| setActive | (state: boolean) => void | Sets the button's toggle state. |
| setIconFill | (id: string, value: string) => void | Fills the values for the icon corresponding to the icon name defined in the icon pack. |
| setIconStroke | (id: string, value: string) => void | Sets the action on click for the icon corresponding to the icon name defined in the icon pack. |

#### Split Button Example and Explanation

The following example sets up a split button with a static dropdown menu.

{% include codepen.html id="custom-toolbar-split-button" tab="js" %}

Most of the configuration options for split toolbar buttons are optional. 

This example starts with a text label instead of an icon. A split button is similar to toolbar buttons as they both require an `onAction` callback. `onAction` is given an empty function so that the menu appears when the user clicks on the menu item and not the toolbar button. 

`onItemAction` is called when a menu item is clicked. The callback function is passed the split button's API [link] and the *value* of the selected menu item. Nothing else is returned. The example calls `editor.insertContent(value)` to insert the *value* into the editor's content.

`fetch` is a configuration option that is a function that passes a callback. This is called whenever the split button's dropdown menu is open. This allows for asynchronous fetching of the menu items. Within this function, a list of menu items is created and passed into the callback. 

Use the following demo [here]({{site.baseurl}}/demo/custom-toolbar-split-button/) for help using the Menu Toolbar button.

### Menu Button

A toolbar menu button is a toolbar button that opens a menu when clicked. This menu can also contain a submenu. This is used when grouping actions together conveniently that would otherwise be several buttons on the toolbar. This is also used to reduce visual clutter by pulling menus into the toolbar instead of having a toolbar and a menubar.

> Example: The table plugin's table toolbar button opens a menu similar to a table's menubar menu or its context menu.

#### Config Options

| Name | Value | Requirement | Description |
|------| ------| ------------| ----------- |
| text | string | optional | Text to display if no icon is found. |
| icon | string | optional | It displays the icon corresponding to the icon name that has been defined in the icon pack. |
| tooltip | string | optional | Text for button tooltip.  |
| fetch | (success: (menu) => void) => void  | required| default: false - Represents button state. Is toggled by the button's API. |
| onSetup | (api) => (api) => void | optional | default: () => () => {} - Function that's invoked when the button is rendered. |

> Note:  See below for details on the return type for `onSetup` and `onAction`.

#### API

| Name | Value | Description |
|------| ------| ------------|
| isDisabled | ( ) => boolean | Checks if the button is disabled. |
| setDisabled | (state: boolean) => void | Sets the button's disabled state. |

#### Menu Button Example and Explanation

The following is a Simple Toolbar Button example:

{% include codepen.html id="custom-toolbar-menu-button" tab="js" %}

The above is a simple example of a toolbar menu button. It adds a button to the toolbar with the text `My Button` that opens the specified menu when clicked. Two menu items are added. The first menu item inserts content when clicked and the second menu item opens a submenu containing two menu items.

The `fetch` option is the most important part of the configuration. This option is a function that passes a callback that is called when the menu button's menu is opened. This allows for asynchronous fetching of the menu items. Within this function, a list of menu items is created and passed into the callback. 

Use the following demo [here]({{site.baseurl}}/demo/custom-toolbar-menu-button/) for help using the Menu Toolbar button.
