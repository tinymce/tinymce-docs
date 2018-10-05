---
layout: default
title: Split
title_nav: Split
description: Toolbar Button - Split
keywords: Splitmenu Split menu toolbarmenu
---


## Config Options

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


### API

| Name | Value | Description |
|------| ------| ------------|
| isDisabled | ( ) => boolean | Check if the button is disabled. |
| setDisabled | (state: boolean) => void | Set the button's disabled state. |
| isActive| ( ) => boolean | Check the button's toggle state. |
| setActive | (state: boolean) => void | Set the button's toggle state. |
| setIconFill | (id: string, value: string) => void | It fills the values for the icon corresponding to the icon name that has been defined in the icon pack. |
| setIconStroke | (id: string, value: string) => void | It sets the action on click for the icon corresponding to the icon name that has been defined in the icon pack. |


## Example and Explanation

The following example shows how to setup just a basic split button, with a static dropdown menu.

{% include codepen.html id="custom-toolbar-split-button" tab="js" %}

Split toolbar buttons are highly configurable, but most of their configuration options are optional. This example shows how to setup just a basic split button, with a static dropdown menu.

We start with a text label for the button, although we could have used an icon instead.

As with all toolbar buttons, a split button requires an `onAction` callback. However, in this case we only care about when the user clicks on a menu item, and not the toolbar button that triggers the appearance of the menu, so we give `onAction` a function that does nothing.

Next is `onItemAction`, which will be called when a menu item is clicked. The callback function is passed the split button's API [link] and the value of the selected menu item, and should not return anything. In the example, we're simply calling `editor.insertContent(value)` to insert the given value into the editor's content.

Finally, we have `fetch`. This configuration option is a function that is passed a callback which is called whenever the split button's dropdown menu is opened. This allows for asynchronous fetching of the menu items. Within this function, we need to create a list of menu items, and pass them to the callback.The configuration options and API for menu items can be found here.

We also have a demo of the Menu Toolbar button for you [here]({{site.baseurl}}/demo/custom-toolbar-split-button/).