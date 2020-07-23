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

## Options

These settings affect the execution of the `insertdatetime` plugin. Formats for both dates and times can be set in these configuration options.

### `insertdatetime_dateformat`

This option allows you to override the default formatting rule for date formats inserted by the `mceInsertDate` command. This defaults to `%Y-%m-%d` and where the different `%` variables get replaced with various [date format options](#referencedatetimeformats).

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "insertdatetime",
  menubar: "insert",
  toolbar: "insertdatetime",
  insertdatetime_dateformat: "%Y-%m-%d"
});
```

### `insertdatetime_formats`

Allows you to specify a list of date/time formats to be used in the date menu or date select box. A complete list of formats is available under [date formats](#referencedatetimeformats) below.

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "insertdatetime",
  menubar: "insert",
  toolbar: "insertdatetime",
  insertdatetime_formats: ["%H:%M:%S", "%Y-%m-%d", "%I:%M:%S %p", "%D"]
});
```

### `insertdatetime_timeformat`

This option allows you to override the default formatting rule for times inserted by the `mceInsertTime` command. This defaults to `%H:%M:%S` and where the different `%` variables get replaced with various [date format options](#referencedatetimeformats).

##### Example

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "insertdatetime",
  menubar: "insert",
  toolbar: "insertdatetime",
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
  toolbar: "insertdatetime",
  insertdatetime_element: true
});
```

{% include configuration/ref-time-date-formats.md %}

## Commands

The Insert Date/Time plugin provides the following JavaScript commands.

{% include commands/insertdatetime-cmds.md %}
