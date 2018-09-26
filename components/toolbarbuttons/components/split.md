---
layout: draft
title: Split
title_nav: Split
description: Toolbar Button - Split
keywords: Splitmenu Split menu toolbarmenu
---


##MENU BUTTON

### Config Options

| Name | Value | Requirement | Description |
|------| ------| ------------| ----------- |
| text | string | optional | text to display if no icon is found |
| icon | string | optional | It displays the icon corresponding to the icon name that has been defined in the icon pack  |
| select | (value: string) => boolean  | optional | default: false - TODO |
| presets | 'color', 'normal', 'toolbar' | optional | default: 'normal' - TODO |
| columns | string | optional | CHECK HOW THIS WILL WORK REGARDING ICON PACKS |
| fetch | (success: (menu) => void) => void  | required| default: false - represents button state. is toggled by the button's api |
| onAction | string | optional | text to display if no icon is found |
| onItemAction | string | optional | CHECK HOW THIS WILL WORK REGARDING ICON PACKS |
| onSetup | (api) => (api) => void | optional | default: () => () => {} - function that's invoked when the button is rendered. |

> Note:  See below for details on return type for onSetup.


### API

| Name | Value | Description |
|------| ------| ------------|
| isDisabled | ( ) => boolean | check if the button is disabled |
| setDisabled | (state: boolean) => void | set the button's disabled state |
| isActive| ( ) => boolean | check the button's toggle state |
| setActive | (state: boolean) => void | set the button's toggle state |
| setIconFill | (id: string, value: string) => void | TBD |
| setIconStroke | (id: string, value: string) => void | TBD |


## Explanation and Example


```js
tinymce.init({
  selector: '#editor',
  toolbar: 'myButton',
  setup: (editor) => {
    editor.ui.registry.addSplitButton('myButton', {
      text: 'My Button',
      onAction: () => {},
      onItemAction: (api, value) => {
        editor.insertContent(value);
      },
      fetch: (callback) => {
        const items = [
          {
            type: 'choiceitem',
            text: 'Menu item 1',
            value: '&nbsp;<em>You clicked menu item 1!</em>'
          },
          {
            type: 'choiceitem',
            text: 'Menu item 2',
            value: '&nbsp;<em>You clicked menu item 2!</em>'
          },
        ];
        callback(items);
      }
    });
  }
});

```

Split toolbar buttons are highly configurable, but most of their configuration options are optional. This example shows how to setup just a basic split button, with a static dropdown menu.

We start with a text label for the button, although we could have used an icon instead.

As with all toolbar buttons, a split button requires an `onAction` callback. However, in this case we only care about when the user clicks on a menu item, and not the toolbar button that triggers the appearance of the menu, so we give `onAction` a function that does nothing.

Next is `onItemAction`, which will be called when a menu item is clicked. The callback function is passed the split button's API [link] and the value of the selected menu item, and should not return anything. In the example, we're simply calling `editor.insertContent(value)` to insert the given value into the editor's content.

Finally, we have `fetch`. This configuration option is a function that is passed a callback which is called whenever the split button's dropdown menu is opened. This allows for asynchronous fetching of the menu items. Within this function, we need to create a list of menu items, and pass them to the callback.The configuration options and API for menu items can be found here [link to custom menu items explanation once we've created it?].

We also have a demo of the Menu Toolbar button for you [here]({{site.baseurl}}/demo/custom-toolbar-split-button/).