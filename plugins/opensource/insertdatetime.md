---
layout: default
title: Insert Date/Time plugin
title_nav: Insert Date/Time
description: Insert the current date and/or time into TinyMCE.
keywords: insertdatetime insertdatetime_dateformat insertdatetime_formats insertdatetime_timeformat insertdatetime_element dateformats
controls: toolbar button, menu item
---

{% assign pluginname = "Insert Date/Time" %}
{% assign plugincode = "insertdatetime" %}

The `insertdatetime` plugin provides a toolbar control and menu item `Insert date/time` (under the `Insert` menu) that lets a user easily insert the current date and/or time into the editable area at the cursor insertion point.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'insertdatetime',
  menubar: 'insert',
  toolbar: 'insertdatetime'
});
```

## Options

These settings affect the execution of the `insertdatetime` plugin. Formats for both dates and times can be set in these configuration options.

{% include configuration/insertdatetime_dateformat.md %}

{% include configuration/insertdatetime_formats.md %}

{% include configuration/insertdatetime_timeformat.md %}

{% include configuration/insertdatetime_element.md %}

{% include configuration/ref-time-date-formats.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Insert Date/Time plugin provides the following JavaScript commands.

{% include commands/insertdatetime-cmds.md %}
