---
layout: default
title: advlink
---

This is a more advanced link dialog mostly based on code contributed by Michael Keck. This link plugin supports popup windows and targets.

## Installation Instructions

1.  Copy the advlink directory to the plugins directory of TinyMCE (/jscripts/tiny_mce/plugins).
2.  Add plugin to TinyMCE plugin option list example: plugins : "advlink".

## Advlink plugin options

| Name | Summary |
| --- | --- |
| advlink_styles | This option should contain a semicolon separated list of class titles and class names linked by equal signs. The titles are the ones that get presented to the user in the styles drop down list and the class names are the classes that get inserted. |

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "advlink"
});

```
