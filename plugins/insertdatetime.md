---
layout: default
title: Insert Date/Time plugin
title_nav: Insert Date/Time
description: Insert the current date and/or time into TinyMCE.
keywords: insertdatetime insertdatetime_dateformat insertdatetime_formats insertdatetime_timeformat insertdatetime_element dateformats
controls: toolbar button, menu item
---

The `insertdatetime` plugin provides a toolbar control and menu item `Insert date/time` (under the `Insert` menu) that lets a user easily insert the current date and/or time into the editable area at the cursor insertion point.

**Type:** `String`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "insertdatetime",
  menubar: "insert",
  toolbar: "insertdatetime"
});
```

### Options

These settings affect the execution of the `insertdatetime` plugin. Formats for both dates and times can be set in these configuration options.

### `insertdatetime_dateformat`

This option allows you to override the default formatting rule for date formats inserted by the `mceInsertDate` command. This defaults to `%Y-%m-%d` and where the different `%` variables get replaced with various [date format options](#dateformats).

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "insertdatetime",
  menubar: "insert",
  toolbar: "insertdatetime"
  insertdatetime_dateformat: "%Y-%m-%d"
});
```

### `insertdatetime_formats`

Allows you to specify a list of date/time formats to be used in the date menu or date select box. A complete list of formats is available under [date formats](#dateformats) below.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "insertdatetime",
  menubar: "insert",
  toolbar: "insertdatetime"
  insertdatetime_formats: ["%H:%M:%S", "%Y-%m-%d", "%I:%M:%S %p", "%D"]
});
```

### `insertdatetime_timeformat`

This option allows you to override the default formatting rule for times inserted by the `mceInsertTime` command. This defaults to `%H:%M:%S` and where the different `%` variables get replaced with various [date format options](#dateformats).

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "insertdatetime",
  menubar: "insert",
  toolbar: "insertdatetime"
  insertdatetime_timeformat: "%H:%M:%S"
});
```

### `insertdatetime_element`

When this option is enabled HTML5 time elements gets generated when you insert dates/times.

**Type:** `Boolean`

**Possible Values:** `true`, `false`

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "insertdatetime",
  menubar: "insert",
  toolbar: "insertdatetime"
  insertdatetime_element: true
});
```

### `dateformats`

**Replacement variables**

| Name | Summary         |
|------|-----------------|
| %D   | mm/dd/yy (same as %m/%d/%y) |
| %r   | 12-hour clock time hh:mm:ss with AM or PM (same as %I:%M:%S %p) |
| %y   | year as a decimal number without a century (range 00 to 99) |
| %Y   | year as a decimal number including the century |
| %m   | month as a decimal number (range 01 to 12) |
| %B   | full localized month name (e.g. "January") |
| %b   | abbreviated localized month name (e.g. "Jan") |
| %d   | day of the month as a decimal number (range 01 to 31) |
| %A   | full localized weekday name (e.g. "Monday") |
| %a   | abbreviated localized weekday name (e.g. "Mon") |
| %H   | hour as a decimal number using a 24-hour clock (range 00 to 23) |
| %I   | hour as a decimal number using a 12-hour clock (range 01 to 12) |
| %M   | minute as a decimal number (range 00-59) |
| %S   | second as a decimal number (range 00-59) |
| %p   | either "am" or "pm" according to the given time value |
| %%   | a literal "%" character |
