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

### `autosave_ask_before_unload`

This option allows you to set whether the editor should prompt the user to advise them that they have unsaved changes when attempting to close the current window. By default this option is enabled and an example of disabling this setting is included below.

**Type**: `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Using `autosave_ask_before_unload`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'autosave',
  autosave_ask_before_unload: false
});
```

### `autosave_interval`

This option enables you to specify the time the editor should wait between taking snapshots of the current content and saving them to local storage. The syntax is to append the letter `s` to the end of a number value. For example, "30s" for 30 seconds.

**Type**: `String`

**Default Value:** `'30s'`

#### Example: Using `autosave_interval`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  autosave_interval: '20s'
});
```

### `autosave_prefix`

This option allows you to set the prefix that is used for local storage keys.

**Type**: `String`

**Default Value**: `'tinymce-autosave-{path}{query}-{id}-'`

#### Example: Using `autosave_prefix`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'autosave',
  autosave_prefix: 'tinymce-autosave-{path}{query}-{id}-'
});
```

### `autosave_restore_when_empty`

This option enables you to specify if {{site.productname}} should automatically restore the content stored in local storage when the editor is empty on initialization. This can be useful for users who don't know that they can restore lost work if the browser crashed by selecting `Restore last draft` from the `File` menu.

**Type**: `Boolean`

**Default Value**: `false`

**Possible Values**: `true`, `false`

#### Example: Using `autosave_restore_when_empty`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'autosave',
  autosave_restore_when_empty: true
});
```

### `autosave_retention`

This option lets you to specify the duration editor content should remain in local storage. Content older than the set time will be ignored. The syntax is to append the letter `m` to the end of a number value. For example, "20m" for 20 minutes.

**Type**: `String`

**Default Value**: '20m'

#### Example: Using `autosave_retention`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'autosave',
  autosave_retention: '30m'
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}