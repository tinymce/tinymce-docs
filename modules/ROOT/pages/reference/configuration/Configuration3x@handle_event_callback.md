---
layout: default
title: handle_event_callback
---

This option should contain a function name to be executed each time TinyMCE intercepts and handles an event such as keydown, mousedown and so forth. The format of this function is: handleEvent(event). If the handle event function returns false it will terminate the internal event handling.

## Example of usage of the handle_event_callback option:

```js
// Remember to enable the ability to switch status messages in the browser before trying the example below

function myHandleEvent(e) {
  window.status = "event:" + e.type;

  return true; // Continue handling
}

tinyMCE.init({
  ...
  handle_event_callback : "myHandleEvent"
});

```
