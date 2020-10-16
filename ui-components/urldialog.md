---
layout: default
title: URL dialog
title_nav: URL dialog
description: URL dialogs are a TinyMCE UI component used to display an external page.
keywords: dialog urldialog api
---

A URL dialog is a special {{site.productname}} UI component which loads an external web page inside a dialog (sometimes referred to as `modals`). URL dialogs are useful for very complex use cases, where the supported components for {{site.productname}}'s standard dialogs cannot be used. For example, a custom file manager that is loaded inside a {{site.productname}} dialog would probably require a URL dialog.

> **Note**: [Standard {{site.productname}} dialogs]({{site.baseurl}}/ui-components/dialog/) should suffice for most use cases, and may be simpler to configure.

## Basic example

The configuration for a basic URL dialog might look like this:

```js
tinymce.activeEditor.windowManager.openUrl({
   title: 'Just a title',
   url: 'http://www.tiny.cloud/example.html'
});
```

## URL dialog configuration

A URL Dialog configuration has three main parts to match the three main parts of the dialog's UI:

* **Title:** The title of the dialog. This will display in the header of the dialog.

* **URL:** The URL of the external page to load inside the dialog.

* **Buttons:** (Optional) An array of [footer buttons](#footerbuttons) that are displayed in the dialog's footer.

## Configuration options

| Name    | Value  | Requirement | Description |
| ------- | ------ | ----------- | ----------- |
| title   | string | required    | The title of the dialog. |
| url     | string | required    | The URL to the external page to load. |
| width   | number | optional    | The width of the dialog in pixels. |
| height  | number | optional    | The height of the dialog in pixels. |
| buttons | FooterButton[] | optional | An array of [buttons](#footerbuttons) to render in the footer of the dialog. |
| onAction | `(dialogApi, details) => void` | optional | Function invoked when a **Custom** type footer button is clicked. |
| onCancel | `(dialogApi) => void` | optional | Function invoked when the dialog is cancelled. The dialog header's close button and a **Cancel** type footer button invoke this function. |
| onClose | `() => void` | optional | Function invoked when the dialog is closed. The dialog header's close button, a **Cancel** type footer button and the dialog instance API's `close()` method invoke this function. |
| onMessage | `(dialogApi, details) => void` | optional | Function invoked when a message is received from the external page. |

For more information on the `dialogApi` object that is passed to some of the configuration options, see the [URL dialog instance API](#urldialoginstanceapi) documentation.

## Footer buttons

A **button** is a clickable component that can contain text or an icon. There are two types of buttons (primary and secondary buttons), though the only difference is that they are styled differently. Primary buttons are intended to stand out. The color will depend on the chosen [skin]({{site.baseurl}}/general-configuration-guide/customize-ui/#skins).

### Configuration

| Name | Type | Requirement | Description |
| ---- | ---- | ----------- | ----------- |
| type | `'cancel'` or `'custom'` | required | Must be `'cancel'` or `'custom'` based on the type of callback function that should be invoked when the button is clicked. |
| text | string | required | Text to display in the button if `icon` is not specified. Also used for the button's `title` attribute. |
| name | string | optional | An identifier for the button. If not specified, the button will be assigned a randomly generated `name`.  |
| icon | string | optional | {{site.predefinedIconsOnly}} **When configured, the button will display the icon instead of text.** |
| primary | boolean | optional | default: `false` - Whether to style the button as a primary or secondary button. |
| disabled | boolean | optional | default: `false` - When `true`, the button will be disabled when the dialog loads. |
| align | `'end'` or `'start'` | optional | default: `'end'` - When set to `'end'` the button will display on the right-hand side of the dialog. When set to `'start'` the button will display on the left-hand side. |

> **Note**: Buttons do not support mixing icons and text at the moment.

### Button types and event callbacks

The different footer button types will invoke different callbacks when clicked:

* A **Cancel** type button will invoke the `onCancel` and `onClose` callback functions provided in the dialog configuration. These callback functions are also fired when a user clicks the `X` button in the top right of the dialog.
* A **Custom** type button will invoke the `onAction` callback function provided in the dialog configuration, and pass it the button's `name` in the `details` object. This allows developers to create a click handler for each **Custom** type footer button in the dialog. See the [Redial example]({{site.baseurl}}/ui-components/dialog/#interactiveexampleusingredialconfigvoid) for an example of how to use this with standard dialogs.

> **Note**: Unlike [standard dialogs]({{site.baseurl}}/ui-components/dialog/), URL dialogs do not have a **Submit** type footer button, and therefore do not have an `onSubmit` callback.

See the [URL dialog configuration options](#configurationoptions) documentation for more information on event callbacks.

## URL dialog instance API

When a URL dialog is created, a dialog instance API is returned. For example, `const instanceApi = editor.windowManager.openUrl(config);`. The URL dialog API instance is also passed to some of the [dialog configuration options](#configurationoptions).

The instance API is a JavaScript object containing methods attached to the dialog instance. When the dialog is closed, the instance API is destroyed.

### Instance API methods

| Methods | Description |
|---------|-------------|
| `block(message: string) => void` | Calling `block()` and passing a message string will disable the entire dialog window and show a loading image. This is useful for handling asynchronous data. The message is used for screen reader accessibility. When the data is ready use `unblock()` to unlock the dialog. |
| `unblock() => void` | Calling `unblock()` will unlock the dialog instance restoring functionality. |
| `close() => void` | Calling the `close()` method will close the dialog. When closing the dialog, all DOM elements and dialog data are destroyed.  When `open(config)` is called again, all DOM elements and data are recreated from the config. |
| `sendMessage(data) => void` | Calling the `sendMessage()` method will attempt to send a message to the external page via `window.postMesssage()`. |

## URL dialog messaging

When using a URL dialog, there needs to be a way to communicate between {{site.productname}} and the external page, as the two components are no longer running in the same window. To allow this, {{site.productname}} makes use of the browsers [`window.postMessage()`](https://developer.mozilla.org/en-US/docs/Web/API/Window/postMessage) API to allow sending data across different origins. The following is an example of how to send messages back to {{site.productname}} from within an external page:

```js
window.parent.postMessage({
  mceAction: 'insertContent',
  content: 'Some content'
}, '*');
```

Similarly, to send messages from {{site.productname}} back to the external page, the `sendMessage()` function from the [URL dialog instance API](#urldialoginstanceapi) can be used to send messages, and then in the external page an event listener can be added to receive the messages:

```js
window.addEventListener('message', function (event) {
  var data = event.data;

  // Do something with the data received here
  console.log('message received from TinyMCE', data);
});

```

> **Note**: When sending a message it is recommended to specify the target origin of where {{site.productname}} is running, instead of using a wildcard (`'*'`). Similarly, when receiving messages, check that `event.origin` matches the origin of where {{site.productname}} is running. For example, if {{site.productname}} is running on *http://mysite.com/tinymce.html*, then if `event.origin` doesn't match `http://mysite.com` the message should be ignored.

### Supported message actions

These actions are built into the URL dialog functionality and will perform an action inside the editor based on the `mceAction` specified. The actions supported are:

#### insertContent

This action inserts content into the editor at the current selection. The `content` property specifies what content should be inserted into the editor.

 ```js
{
  mceAction: 'setContent',
  content: 'My custom content'
}
```

#### setContent

This action is used to set the editors content. The `content` property specifies what content should be set inside the editor.

```js
{
  mceAction: 'setContent',
  content: 'My custom content'
}
```

#### execCommand

This action executes a command inside the editor. The options available for this action are:

* `cmd`: The name of the command to be executed inside the editor.

* `ui`: An optional boolean to specify if a UI (dialog) should be presented or not.

* `value`: An optional value to be used by the command.

```js
{
  mceAction: 'execCommand',
  cmd: 'mceInsertLink',
  value: 'https://www.tiny.cloud'
}
```

#### close

This action closes the open URL dialog. This is the same as using the `api.close()` function.

```js
{
  mceAction: 'close'
}
```

#### block

This action disables the entire dialog window and shows a loading image. This is the same as using the `api.block(message)` function.

```js
{
  mceAction: 'block',
  message: 'Loading…'
}
```

#### unblock

This action unblocks the window/dialog. This is the same as using the `api.unblock()` function.

```js
{
  mceAction: 'unblock'
}
```

### Custom message actions

A custom message is one that contains a `mceAction` not listed in the above-supported actions. For example, the following snippet could be used to send a message back to {{site.productname}} and then be processed via the `onMessage` callback to perform custom actions inside {{site.productname}}.

```js
{
  mceAction: 'customAction',
  data: {
    customField: 'custom value'
  }
}
```

> **Note**: {{site.productname}} will ignore all messages received that don't contain a `mceAction` property.

## Interactive example

This example shows a toolbar button that opens an external URL inside a 640px by 640px dialog without any footer buttons. The dialog can be opened by clicking the `{;}` toolbar button.

{% include live-demo.html id="url-dialog" height="300" tab="js" %}
