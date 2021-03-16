---
layout: default
title: RTC events
title_nav: Events
description: List of all available RTC specific events.
keywords: rtc events
---

{% include misc/beta-note-rtc.md %}

> **Note**: These events are subject to change based on customer feedback.

## `RtcClientConnected`

This event is fired when a user enters the session.

### Event fields: `RtcClientConnected`

See the [`rtc_client_connected`]({{site.baseurl}}/rtc/configuration#rtc_client_connected) documentation for a full description of the event fields.

### Example of using the RtcClientConnected event

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'rtc',
  setup: (editor) => {
    editor.on('RtcClientConnected', ({userId, userDetails, clientId, caretNumber, clientInfo}) => {
      console.log(`User connected userId:${userId}`);
    });
  }
})
```

## `RtcClientDisconnected`

This event is fired when a user leaves the session.

### Event fields: `RtcClientDisconnected`

This event provides the same event fields as the `RtcClientConnected` event. See the [`rtc_client_connected`]({{site.baseurl}}/rtc/configuration#rtc_client_connected) documentation for a full description of the event fields.

### Example of using the RtcClientDisconnected event

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'rtc',
  setup: (editor) => {
    editor.on('RtcClientDisconnected', ({userId, userDetails, clientId, caretNumber, clientInfo}) => {
      console.log(`User disconnected userId:${userId}`);
    });
  }
})
```
