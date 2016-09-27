---
layout: default
title: xhtmlxtras
---

This plugin adds support for some XHTML elements these include `cite`, `ins`, `del`, `abbr`, and `acronym`.

## xhtmlxtras controls/buttons

| Name | Summary |
| --- | --- |
| cite | Cite element control. |
| ins | Ins element control. |
| del | Del element control. |
| abbr | Abbr element control. |
| acronym | Acronym element control. |
| attribs | Common element attributes such as class, id, lang etc. |

## Installation Instructions

1.  Add plugin to TinyMCE plugin option list example: plugins : "xhtmlxtras".
2.  Add the cite,ins,del,abbr,acronym button names to button list, example: theme_advanced_buttons3_add : "cite,ins,del,abbr,acronym".

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "xhtmlxtras",
  theme_advanced_buttons3_add : "cite,ins,del,abbr,acronym"
});
```
