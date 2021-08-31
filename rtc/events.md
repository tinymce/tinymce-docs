---
layout: default
title: Real-Time Collaboration (RTC) events
title_nav: RTC Events
description: List of all available RTC specific events.
keywords: rtc events
---

## `RtcClientConnected`

This event is fired when a user enters the session.

### Event fields: `RtcClientConnected`

{% include rtc/rtc-client-connect-inputs.md %}

### Example of using the RtcClientConnected event

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'rtc',
  setup: (editor) => {
    editor.on('RtcClientConnected', ({
      userId,
      userDetails,
      clientId,
      caretNumber,
      clientInfo
      }) => {
      console.log(`User connected userId:${userId}`);
    });
  }
})
```

## `RtcClientDisconnected`

This event is fired when a user leaves the session.

### Event fields: `RtcClientDisconnected`

{% include rtc/rtc-client-connect-inputs.md %}

### Example of using the RtcClientDisconnected event

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'rtc',
  setup: (editor) => {
    editor.on('RtcClientDisconnected', ({
      userId,
      userDetails,
      clientId,
      caretNumber,
      clientInfo
      }) => {
      console.log(`User disconnected userId:${userId}`);
    });
  }
})
```
