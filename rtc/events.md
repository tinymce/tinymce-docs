---
layout: default
title: RTC events
title_nav: Events
description: List of all available RTC specific events.
keywords: rtc events
---

{% assign beta_feature = "The RTC plugin" %}
{% assign pre-release_type = "Closed Beta" %}
{% include misc/beta-note.md %}
> **Note**: These events are subject to change based on customer feedback.

## `RtcUserConnected`

This event is fired when a user enters the session.

### Event fields: `RtcUserConnected`

| Field | Type | Description |
|-------|:----:|-------------|
| `userId` | `string` | Unique user ID of the connecting user. |
| `caretNumber` | `integer` | Caret number assigned to the user. |
| `custom` | `object` | Custom data object provided by the `rtc_custom_user_details` option, sent from the connecting user client. |

### Example of using the RtcUserConnected event

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'rtc',
  setup: (editor) => {
    editor.on('RtcUserConnected', ({userId, caretNumber, custom}) => {
      console.log(`User connected userId:${userId}`);
    });
  }
})
```

## `RtcUserDisconnected`

This event is fired when a user leaves the session.

### Event fields: `RtcUserDisconnected`

| Field | Type | Description |
|-------|:----:|-------------|
| `userId` | `string` | Unique user ID of the disconnecting user. |
| `caretNumber` | `integer` | Caret number assigned to the user. |
| `custom` | `object` | Custom data object provided by the `rtc_custom_user_details` option, sent from the disconnecting user client. |

### Example of using the RtcUserDisconnected event

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'rtc',
  setup: (editor) => {
    editor.on('RtcUserDisconnected', ({userId, caretNumber, custom}) => {
      console.log(`User disconnected userId:${userId}`);
    });
  }
})
```