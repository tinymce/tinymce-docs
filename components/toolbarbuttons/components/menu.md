---
layout: draft
title: Menu
title_nav: Menu
description: Toolbar Button - Menu
keywords: menu menu toolbarmenu
---

##MENU BUTTON

### Config Options

| Name | Value | Requirement | Description |
|------| ------| ------------| ----------- |
| text | string | optional | text to display if no icon is found |
| icon | string | optional | It displays the icon corresponding to the icon name that has been defined in the icon pack. |
| tooltip | string | optional | text for button tooltip  |
| fetch | (success: (menu) => void) => void  | required| default: false - represents button state. is toggled by the button's api |
| onSetup | (api) => (api) => void | optional | default: () => () => {} - function that's invoked when the button is rendered. |

> Note:  See below for details on return type for onSetup and onAction.


### API

| Name | Value | Description |
|------| ------| ------------|
| isDisabled | ( ) => boolean | check if the button is disabled |
| setDisabled | (state: boolean) => void | set the button's disabled state |

or.ui.registry.<function>` (these may have already been possible but I'm not sure how, and it should be easier now anyway)

## Explanation and Example


```js
tinymce.init({
  selector: '#editor',
  toolbar: 'myButton',
  setup: (editor) => {
    editor.ui.registry.addMenuButton('myButton', {
      text: 'My Button',
      fetch: (callback) => {
        const items = [
          {
            type: 'menuitem',
            text: 'Menu item 1',
            onAction: () => ed.insertContent('&nbsp;<em>You clicked menu item 1!</em>')
          },
          {
            type: 'menuitem',
            text: 'Menu item 2',
            getSubmenuItems: () => {
              return [
                {
                  type: 'menuitem',
                  text: 'Sub menu item 1'
                },
                {
                  type: 'menuitem',
                  text: 'Sub menu item 2'
                }
              ]
            }
          },
        ];
        callback(items);
      }
    });
  }
});

```

The above is a simple example of a toolbar menu button. It adds a button to the toolbar with the text 'My Button' which, when clicked, opens the specified menu. In this case, we've added two menu items. The first inserts content when clicked, and the second opens a submenu which has two children.

The most important part of the configuration for a menu button is the `fetch` option. This configuration option is a function that is passed a callback which is called whenever the menu button's menu is opened. This allows for asynchronous fetching of the menu items. Within this function, we need to create a list of menu items, and pass them to the callback. The configuration options and API for menu items can be found here [link to custom menu items explanation once we've created it?].

We also have a demo of the Menu Toolbar button for you [here]({{site.baseurl}}/demo/custom-toolbar-menu-button/).