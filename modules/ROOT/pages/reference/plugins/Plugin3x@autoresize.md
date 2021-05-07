---
layout: default
title: autoresize
---

This is a plugin which automatically resizes the editor to the content inside it.

To activate this plugin, just add "autoresize" to TinyMCE plugin option list.

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "autoresize"
});
```

### Options

| Name | Summary |
| --- | --- |
| autoresize_min_height | Min height value of the editor when it auto resizes. |
| autoresize_max_height | Max height value of the editor when it auto resizes. |
