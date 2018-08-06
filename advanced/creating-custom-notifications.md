---
layout: default
title: Create Custom Notifications
title_nav: Create Custom Notifications
description_short: Learn how to make custom notifications.
description: Learn how to make custom dialogs with NotificationManager.
keywords: custom notification notifications cdn notificationmanager
---

In version 4.3 of TinyMCE, a new feature was added to allow you to display notifications. These notifications can be customized in several ways.

## Text

**Text** is the most critical setting when opening a notification. The "text" property sets the text that is displayed at the center of the notification.

```js
editor.notificationManager.open({
  text: 'A test informational notification.'
});
```

## Type

There are several types of notifications that differ in color and purpose. These are:

* success
* info
* warning
* error

To set a notification type, set the "type" property when opening the notification. Leaving this property blank will use the default style.

```js
editor.notificationManager.open({
  text: 'A test informational notification.',
  type: 'info'
});
```

## Timeout

By setting the "timeout" property, the notification will automatically close after the provided value's time has elapsed in milliseconds.

```js
editor.notificationManager.open({
  text: 'A test notification that will close automatically after 5 seconds.',
  timeout: 5000
});
```

## Close Button

By setting the "closeButton" property to false in conjunction with a non-zero timeout, you may disable the close button to the right of the notification.

```js
editor.notificationManager.open({
  text: 'A test notification that will close automatically after 5 seconds and has the close button disabled.',
  timeout: 5000,
  closeButton: false
});
```

## Icon

By setting the "icon" property, the notification will display an icon to the left of the text.

```js
editor.notificationManager.open({
  text: 'A test notification that contains a bold icon.',
  icon: 'bold'
});
```

## Progress Bar

By setting the "progressBar" property to `True`, the notification will display a progress bar to the left of the close button and to the right of the text.

```js
var notification = editor.notificationManager.open({
  text: 'A test notification that contains a progress bar.',
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
