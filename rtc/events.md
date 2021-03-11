---
layout: default
title: RTC events
title_nav: Events
description: List of all available RTC specific events.
keywords: rtc events
---

{% include misc/beta-note-rtc.md %}

> **Note**: These events are subject to change based on customer feedback.

## `RtcUserConnected`

This event is fired when a user enters the session.

### Event fields: `RtcUserConnected`

See the [`rtc_client_connected`]({{site.baseurl}}/rtc/configuration#rtc_client_connected) documentation for a full description of the event fields.

### Example of using the RtcUserConnected event

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'rtc',
  setup: (editor) => {
    editor.on('RtcUserConnected', ({userId, userDetails, clientId, caretNumber, clientInfo}) => {
      console.log(`User connected userId:${userId}`);
    });
  }
})
```

## `RtcUserDisconnected`

This event is fired when a user leaves the session.

### Event fields: `RtcUserDisconnected`

The same as [`RtcUserConnected`](#RtcUserConnected)

### Example of using the RtcUserDisconnected event

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'rtc',
  setup: (editor) => {
    editor.on('RtcUserDisconnected', ({userId, userDetails, clientId, caretNumber, clientInfo}) => {
      console.log(`User disconnected userId:${userId}`);
    });
  }
})
```