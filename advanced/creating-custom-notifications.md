---
layout: default
title: Create custom notifications
title_nav: Create custom notifications
description_short: Learn how to make custom notifications.
description: Learn how to make custom dialogs with NotificationManager.
keywords: custom notification notifications cdn notificationmanager
---

TinyMCE can display customized notifications.

## Text

The **text** property sets the text that is displayed at the center of the notification. This is the most important setting when opening a notification.

```js
editor.notificationManager.open({
  text: 'A test informational notification.'
});
```

## Type

The following notification types differ in color and purpose:

* success
* info
* warning
* error

Set the `type` property when opening the notification. The default style is used if this property is not set.

```js
editor.notificationManager.open({
  text: 'A test informational notification.',
  type: 'info'
});
```

## Timeout

The notification automatically closes after the value set in the `timeout` property elapses in milliseconds.

```js
editor.notificationManager.open({
  text: 'A test notification that will close automatically after 5 seconds.',
  timeout: 5000
});
```

## Close Button

Disable the close button to the right of the notification by setting the `closeButton` property to **false** in conjunction with a `timeout` property that is **not** zero.

```js
editor.notificationManager.open({
  text: 'A test notification that will close automatically after 5 seconds and has the close button disabled.',
  timeout: 5000,
  closeButton: false
});
```

## Icon

Set the `icon` property to display an icon to the left of the text.

```js
editor.notificationManager.open({
  text: 'A test notification that contains a bold icon.',
  icon: 'bold'
});
```

## Progress Bar

Set the `progressBar` property type to `True` to display a progress bar to the left of the close button and to the right of the text.


```js
var notification = editor.notificationManager.open({
  text: 'A test notification that contains a progress bar.',
  progressBar: true
});
```

Set the `progressBar` property between 0 and 100 to set the progress of the progress bar.

```js
notification.progressBar.value(50);
```

To close the last shown notification, `call` the following method:

```js
// Close the last shown notification.
top.tinymce.activeEditor.notificationManager.close();
```
