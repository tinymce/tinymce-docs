---
layout: draft
title: Toggle
title_nav: Toggle
description: Toolbar Button - Toggle
keywords: Togglemenu Toggle menu toolbarmenu
---

##MENU BUTTON

### Config Options

| Name | Value | Requirement | Description |
|------| ------| ------------| ----------- |
| text | string | optional | text to display if no icon is found |
| icon | string | optional | CHECK HOW THIS WILL WORK REGARDING ICON PACKS |
| tooltip | string | optional | text for button tooltip  |
| disabled | boolean | optional| default: false - represents button state. is toggled by the button's api |
| active | boolean | optional | default: false |
| onSetup | (api) => (api) => void | optional | default: () => () => {} - function that's invoked when the button is rendered. |
| onAction | (api) => void | required | function that's called when the button is clicked |
> Note:  See below for details on return type for onSetup and onAction.

### API

| Name | Value | Description |
|------| ------| ------------|
| isDisabled | ( ) => boolean | check if the button is disabled |
| setDisabled | (state: boolean) => void | set the button's disabled state |
| isActive| ( ) => boolean | check the button's toggle state |
| setActive | (state: boolean) => void | set the button's toggle state |

### Explanation and Example


```js
tinymce.init({
  selector: '#editor',
  toolbar: 'customStrikethrough customToggleStrikethrough',
  setup: (editor) => {
    editor.ui.registry.addToggleButton('customStrikethrough', {
      text: 'Strikethrough',
      onAction: (_) => editor.execCommand('mceToggleFormat', false, 'strikethrough')
    });

    editor.ui.registry.addToggleButton('customToggleStrikethrough', {
      icon: 'strikethrough',
      onAction: (_) => editor.execCommand('mceToggleFormat', false, 'strikethrough'),
      onSetup: (api) => {
        editor.formatter.formatChanged('strikethrough', (state) => {
          api.setActive(state);
        });
      }
    });
  }
});
```

In this example we add two custom strikethrough buttons to the editor. Both have the same `onAction` configuration: they use `editor.execCommand(command, ui, args)` to execute `mceToggleFormat` - an internal command that toggles the specified format on and off - and pass it the format name `strikethrough`. Note that the format name must already be registered with the editor, which `strikethrough` is.

This first button works perfectly in terms of applying and removing strikethrough formatting to editor content, but the button itself only toggles its active state on click and doesn't reflect the state of the selected content. For example, if you were to select some text and click the button to apply strikethrough formatting, the button would become highlighted to show that it's active. But if you select other text that doesn't have strikethrough formatting, the button would still remain active. We would prefer the button to only be active when the selected content has strikethrough formatting, and to be inactive when the selected content doesn't have strikethrough formatting.

To do this, the second button uses `onSetup` to register a callback for strikethrough content with `editor.formatter.formatChanged(formatName, callback)`. This is an internal TinyMCE method that will call the specified callback function when the selected content has the given formatting. Note that the format name given to `mceToggleFormat` via `editor.execCommand(command, ui, args)` and to `editor.formatter.formatChanged(formatName, callback)` is the same.

The callback given to `editor.formatter.formatChanged` should be a function that takes a `state` boolean which represents whether the currently selected content has the specified format or not. We can then use this `state` boolean to set the buttons active state to match whether the selected content has the specified formatting, using `api.setActive(state)` from the button's API [link]. This way, the `customToggleStrikethrough` button will only be active when the selected content has strikethrough formatting.