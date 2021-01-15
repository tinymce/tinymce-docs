---
layout: default
title: Nonbreaking Space plugin
title_nav: Nonbreaking Space
description: Insert a nonbreaking space.
keywords: nonbreaking nonbreaking_force_tab insert
controls: toolbar button, menu item
---

{% assign pluginname = "Nonbreaking Space" %}
{% assign plugincode = "nonbreaking" %}

This plugin adds a button for inserting nonbreaking space entities `&nbsp;` at the current caret location (cursor insert point). It also adds a menu item `Nonbreaking space` under the `Insert` menu dropdown and a toolbar button.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'nonbreaking',
  menubar: 'insert',
  toolbar: 'nonbreaking'
});
```

## Options

### `nonbreaking_force_tab`

This option allows you to force {{site.productname}} to insert three `&nbsp;` entities when the user presses the keyboard `tab` key.

It's important to note that this does not change the behavior of the menu and toolbar controls, which will continue to insert a single `&nbsp` entity when `nonbreaking_force_tab` value is `true`.

However, the `true` condition does capture the tab key and contain it within the editable area, whereas when set to its default state of `false` a tab keypress will move the cursor to the next editable area (e.g. a browser url bar or form field on the current page).

> **Note**: Review [Usage with `table` or `lists` plugin](#usagewithtableorlistsplugin) before using this setting.

**Type:** `Boolean`

**Default Value:** `false`

**Possible Values:** `true`, `false`

#### Example: Using `nonbreaking_force_tab`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'nonbreaking',
  menubar: 'insert',
  toolbar: 'nonbreaking',
  nonbreaking_force_tab: true
});
```

#### Usage with `table` or `lists` plugin

The `nonbreaking_force_tab` setting can break the following functionality:

- The `table` plugin uses the Tab key for navigating between table cells.
- The `lists` plugin uses the Tab key for item indentation.

To retain the Tab key functionality of the `lists` or `table` plugins, add the `table` or `lists` plugins before the `nonbreaking` plugin in the init configuration, such as:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'table lists nonbreaking',
  nonbreaking_force_tab: true
});
```

To insert a non-breaking space with the Tab key instead of `table` and `lists` Tab functionality, add the `nonbreaking` plugin before the `table` and `lists` plugins in the init configuration, such as:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'nonbreaking table lists',
  nonbreaking_force_tab: true
});
```

### `nonbreaking_wrap`

This option allows you to force {{site.productname}} to wrap non-breaking space characters inserted by the plugin in a `<span class="mce-nbsp-wrap"></span>` element. This will prevent the non-breaking space being replaced by the editor or browser when typing additional spaces.

**Type:** `Boolean`

**Default Value:** `true`

**Possible Values:** `true`, `false`

#### Example: Using `nonbreaking_wrap`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'nonbreaking',
  menubar: 'insert',
  toolbar: 'nonbreaking',
  nonbreaking_wrap: false
});
```

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Nonbreaking Space plugin provides the following JavaScript command.

{% include commands/nbsp-cmds.md %}
