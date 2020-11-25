---
layout: default
title: RTC events
title_nav: Events
description: List of all available RTC specific events.
keywords: rtc events
---

## RTC Events

## `RtcUserConnected`

This event is fired when a user enters the session.

### Event fields

- userId:string - Unique user ID of the connecting user
- caretNumber:int - Caret number assigned to the user
- custom:Object - Custom data object provided by the `rtc_custom_user_details` setting on the connecting side.

### Example of using the RtcUserConnected event

```js
tinymce.init({
  setup: (editor) => {
    editor.on('RtcUserConnected', ({userId, caretNumber, custom}) => {
      console.log(`User connected userId:${userId}`);
    });
  }
})
```

## `RtcUserDisconnected`

This event is fired when a user leaves the session.

### Event fields

- userId:string - Unique user ID of the disconnecting user
- caretNumber:int - Caret number assigned to the user
- custom:Object - Custom data object provided by the `rtc_custom_user_details` setting on the disconnecting side.

### Example of using the RtcUserDisconnected event

```js
tinymce.init({
  setup: (editor) => {
    editor.on('RtcUserDisconnected', ({userId, caretNumber, custom}) => {
      console.log(`User disconnected userId:${userId}`);
    });
  }
})
```