---
layout: default
title: insertdatetime
---

## Installation Instructions

1.  Copy the insertdatetime directory to the plugins directory of TinyMCE (/jscripts/tiny_mce/plugins).
2.  Add plugin to TinyMCE plugin option list example: plugins : "insertdatetime".
3.  Add the insertdate or inserttime button name to button list, example: theme_advanced_buttons3_add : "insertdate,inserttime".

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "insertdatetime",
  theme_advanced_buttons3_add : "insertdate,inserttime",
  plugin_insertdate_dateFormat : "%Y-%m-%d",
  plugin_insertdate_timeFormat : "%H:%M:%S"
});
```

## Plugin options

| Name | Summary |
| --- | --- |
| plugin_insertdate_dateFormat | Format that the date is output as. Defaults to: "%Y-%m-%d". |
| plugin_insertdate_timeFormat | Format that the time is output as. Defaults to: "%H:%M:%S". |

## Replacement variables

| Name | Summary |
| --- | --- |
| %D | mm/dd/yy (same as %m/%d/%y) |
| %r | 12-hour clock time hh:mm:ss with AM or PM (same as %I:%M:%S %p) |
| %y | year as a decimal number without a century (range 00 to 99) |
| %Y | year as a decimal number including the century |
| %m | month as a decimal number (range 01 to 12) |
| %B | full localised month name (e.g. "January") |
| %b | abbreviated localised month name (e.g. "Jan") |
| %d | day of the month as a decimal number (range 01 to 31) |
| %A | full localised weekday name (e.g. "Monday") |
| %a | abbreviated localised weekday name (e.g. "Mon") |
| %H | hour as a decimal number using a 24-hour clock (range 00 to 23) |
| %I | hour as a decimal number using a 12-hour clock (range 01 to 12) |
| %M | minute as a decimal number (range 00-59) |
| %S | second as a decimal number (range 00-59) |
| %p | either "am" or "pm" according to the given time value |
| %% | a literal "%" character |
