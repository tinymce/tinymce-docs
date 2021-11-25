---
layout: default
title: Autosave plugin
title_nav: Autosave
description: Automatically save content in your local browser.
controls: toolbar button, menu item
keywords: autosave_ask_before_unload autosave_interval autosave_prefix autosave_prefix autosave_restore_when_empty autosave_retention
---

{% assign pluginname = "Autosave" %}
{% assign plugincode = "autosave" %}

The autosave plugin gives the user a warning if they have unsaved changes in the editor and either:

- Try to close the browser window or tab, or
- Try to navigate away from the current page.

The autosave plugin adds:

- A menu item, "Restore last draft" under the `File` menu, and
- An optional toolbar button.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'autosave',
  toolbar: 'restoredraft'
});
```

## Options

These settings affect the execution of the `autosave` plugin. The settings described here will affect the interval, duration and behavior of locally stored drafts of the current editor instance.

{% include configuration/autosave_ask_before_unload.md %}

{% include configuration/autosave_interval.md %}

{% include configuration/autosave_prefix.md %}

{% include configuration/autosave_restore_when_empty.md %}

{% include configuration/autosave_retention.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}