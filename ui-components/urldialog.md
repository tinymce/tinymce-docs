---
layout: default
title: URL dialog
title_nav: URL dialog
description: URL dialogs are a TinyMCE UI component used to display an external page.
keywords: dialog urldialog api
---
## Overview

A URL dialog is a special TinyMCE UI component which loads an external web page inside a dialog (sometimes referred to as modals). This differs to regular dialogs which use supported components to render an interactive dialog inside the application. URL dialogs are useful for very complex use cases, where the supported dialog components aren't able to be used, for example in a custom file manager.

The most basic configuration structure is:

```js
const urlDialogConfig = {
   title: 'Just a title',
   url: 'http://www.tiny.cloud/example.html'
}
```

## URL dialog configuration

A URL Dialog configuration has two main parts:

* **Title** This is the title of a dialog.

* **URL** The external pages URL to load inside the dialog.

### Config options

| Name    | Value  | Requirement | Description |
| ------- | ------ | ----------- | ----------- |
| title   | string | required    | The title of the dialog. |
| url     | string | required    | The url to the external page to load. |
| width   | number | optional    | The width of the dialog in pixels. |
| height  | number | optional    | The height of the dialog in pixels. |
| buttons | UrlDialogButton[] | optional | An optional array of button configurations to render in the footer. See [Footer components](#footercomponents) configuration. |
| onAction | (api) => void | optional | Function invoked when a custom button is clicked. |
| onCancel | (api) => void | optional | Function invoked when the dialog is cancelled. |
| onClose | () => void | optional | Function invoked when the dialog has been closed. |
| onMessage | (api, data) => void | optional | Function invoked when a message is received from the external page. |

### Footer components

#### Button

The following configuration is used to create a button inside the dialog footer:

```js
var buttonConfig = {
  type: 'button',
  name: string,
  text: string,
  icon: string,
  disabled: boolean,
  primary: boolean,
  align: 'start' | 'end'
}
```

**Name:** The name property on the button is used as an id attribute to identify the dialog component. For example, when `name: foobutton` is defined and a user clicks on that button, the dialog `onAction()` handler will fire and provide an object containing the name of the dialog component, e.g. `details.name = 'foobutton'`. This will allow developers to create a click handler for **foobutton**.

**Text:** This will be the text displayed on the button. For example, `text: ‘do magic’` will create a button with text **do magic**.

**Icon:** This will be the name of the icon to be displayed on the button, instead of any text. The name must correspond to an icon in the icon pack. Dialog buttons do not support mixing icons and text at the moment.

**Disabled:** (Value: Boolean; Default: False): When set to true, the button will be disabled when the dialog loads.

**Primary:** (Default: False): When set to true, the button will be colored to stand out. The color will depend on the chosen [skin]({{site.baseurl}}/general-configuration-guide/customize-ui/#skins).

**Align:** (Default: 'end'): This will define the position of the button in the footer. When set to `end`, the button will be positioned on the right side of the dialog. When set to `start`, the button will be positioned on the left side of the dialog.

#### Button types

The **Close** button is pre-wired to abort and close the dialog.

The **Cancel** button dismisses an action request.

The **Custom** button can be used to specify a custom operation.

## URL dialog instance API

When a URL dialog is created, a dialog instance API is returned. For example, `const instanceApi = editor.windowManager.openUrl(config);`

The instance API is a javascript object containing methods attached to the dialog instance. When the dialog is closed, the instance API is destroyed.

### Instance API methods

| Methods | Description |
|---------|-------------|
| `block(message: string): void` | Calling `block()` and passing a message string will disable the entire dialog window and show a loading image. This is useful for handling asynchronous data. The message is used for screen reader accessibility. When the data is ready use `unblock()` to unlock the dialog. |
| `unblock(): void` | Calling `unblock()` will unlock the dialog instance restoring functionality. |
| `close(): void` | Calling the `close()` method will close the dialog. When closing the dialog, all DOM elements and dialog data are destroyed.  When `open(config)` is called again, all DOM elements and data are recreated from the config. |
| `sendMessage(data: any): void` | Calling the `sendMessage()` method will attempt to send a message to the external page via `window.postMesssage()`. |

## URL dialog messaging

When using a URL dialog, there needs to be a way to communicate between TinyMCE and the external page, as the two components are no longer running in the same window. To allow this, TinyMCE makes use of the browsers [`window.postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API to allow sending data across different origins. The following is an example of how to send messages back to TinyMCE from within an external page:

```js
window.parent.postMessage({
  mceAction: 'insertContent',
  content: 'Some content'
}, '*');
```

Likewise to send messages from TinyMCE back to the external page, then the `api.sendMessage()` function can be used to send messages and then in the external page an event listener can be added to receive the message:

```js
window.addEventListener('message', function (event) {
  var data = event.data;
  
  // Do something with the data received here
  console.log('message received from TinyMCE', data);
});

```

> Note: If possible when sending a message it's recommended to specify the target origin of where TinyMCE is running, instead of using a wildcard (`'*'`). Likewise when receiving messages also validate that `event.origin` matches the origin of where TinyMCE is running. For example if TinyMCE is running on *http://mysite.com/tinymce.html*, then if `event.origin` doesn't match `http://mysite.com` the message should be ignored.

### Supported message actions

These actions are built into the URL dialog functionality and will perform an action inside the editor, based on the `mceAction` specified. The actions supported are:

##### insertContent

Inserts content into the editor at the current selection. The `content` property specifies what content should be inserted into the editor.

 ```js
{
  mceAction: 'setContent',
  content: 'My custom content'
}
```

##### setContent

Set the editors content. The `content` property specifies what content should be set inside the editor.

```js
{
  mceAction: 'setContent',
  content: 'My custom content'
}
```

##### execCommand

Executes a command inside the editor. The options available for this action are:

**cmd:** The name of the command to be executed inside the editor.

**ui:** An optional boolean to specify if a UI (dialog) should be presented or not.

**value:** An optional value to be used by the command.

```js
{
  mceAction: 'execCommand',
  cmd: 'mceInsertLink',
  value: 'https://www.tiny.cloud'
}
```

##### close

Closes the open URL dialog. This is the same as using the `api.close()` function.

```js
{
  mceAction: 'close'
}
```

##### block

Disables the entire dialog window and shows a loading image. This is the same as using the `api.block(message)` function.

```js
{
  mceAction: 'block',
  message: 'Loading…'
}
```

##### unblock

Unblocks the window/dialog. This is the same as using the `api.unblock()` function.

```js
{
  mceAction: 'unblock'
}
```

### Custom message actions

A custom message, is one that contains a `mceAction` not listed in the above supported actions. For example, the following snippet could be used to send a message back to TinyMCE and then be processed via the `onMessage` callback to perform custom actions inside TinyMCE.

```js
{
  mceAction: 'customAction',
  data: {
    customField: 'custom value'
  }
}
```

> Note: TinyMCE will ignore all messages received that don't contain a `mceAction` property.

## Example configuration

This example shows a very basic toolbar button, that opens an external URL inside a 640x640px dialog without any footer. The dialog can be opened by clicking the `{;}` toolbar button.

{% include codepen.html id="url-dialog" height="300" tab="js" %}