---
layout: default
title: Create Custom Notifications
title_nav: Create Custom Notifications
description_short: Learn how to make custom notifications.
description: Learn how to make custom dialogs with NotificationManager.
keywords: custom notification notifications cdn notificationmanager
---

In version 4.3 of TinyMCE, a new feature was added to allow you to display notifications.  These notifications can be customized in several ways.

## Text

By far the most important setting when opening a notification, the "text" property will set the text that is displayed at the center of the notification.

```js
// Opens a HTML page inside a TinyMCE dialog
editor.notificationManager.open({
  text: "A test informational notification."
});
```

## Type

There are several notification types that differ in colour and purpose.  These are:

* success
* info
* warning
* error

To set a notification type, set the "type" property when opening the notification.  Leaving this property blank will use the default style.

```js
// Opens a HTML page inside a TinyMCE dialog
editor.notificationManager.open({
  text: "A test informational notification.",
  type: "info"
});
```

## Timeout

By setting the "timeout" property, the notification will automatically close after the provided value's time has elapsed in milliseconds.

```js
// Opens a HTML page inside a TinyMCE dialog
editor.notificationManager.open({
  text: "A test notification that will close automatically after 5 seconds.",
  timeout: 5000
});
```

## Close Button

By setting the "closeButton" property to false in conjunction with a non-zero timeout, you may disable the the close button to the right of the notification.

```js
// Opens a HTML page inside a TinyMCE dialog
editor.notificationManager.open({
  text: "A test notification that will close automatically after 5 seconds and has the close button disabled.",
  timeout: 5000,
  closeButton: false
});
```

## Progress Bar

By setting the "progressBar" property to true, the notification will display a progress bar to the left of the close button and to the right of the text.

```js
// Opens a HTML page inside a TinyMCE dialog
var notification = editor.notificationManager.open({
  text: "A test notification that contains a progress bar.",
  progressBar: true
});
```

To set the current progress of this progress bar, set the value of the progress bar's value property to between 0 and 100.

```js
notification.progressBar.value(50);
```

You can also close the last shown notification by calling:

```js
// Close the last shown notification.
top.tinymce.activeEditor.notificationManager.close();
```
