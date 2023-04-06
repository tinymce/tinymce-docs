---
layout: default
title: Real-time Collaboration (RTC) events
title_nav: RTC Events
description: List of all available RTC specific events.
keywords: rtc events
---

{% include rtc/admon-rtc-eol.md %}

## `RtcClientConnected`

When a user joins a real-time collaboration session, the `RtcClientConnected` event is fired on existing {{site.productname}} instances in the session and provides the user information of the newly joined user to other editors in the session.

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

This event is fired when a user leaves the session, and can be used to trigger user interface changes to let other users know that the user has disconnected.

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
