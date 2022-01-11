---
layout: default
title: Link plugin
title_nav: Link
description: Add hyperlinks to content.
keywords: url urls insert edit link_default_target link_assume_external_targets link_class_list link_list link_target_list link_rel_list link_title
controls: toolbar button, menu item
---

{% assign pluginname = "Link" %}
{% assign plugincode = "link" %}

The **link** plugin allows a user to link external resources such as website URLs, to selected text in their document.

It adds two toolbar buttons called `link` and `unlink` and three menu items called `link`, `unlink` and `openlink`. The toolbar button and menu item called `link` are included in {{site.productname}}'s default configuration. The `link` menu item can be found in the `Insert` menu.

The **link** plugin also includes a context menu and context toolbar. The context toolbar can be configured using the [`link_context_toolbar`](#link_context_toolbar) and [`link_quicklink`](#link_quicklink) options documented below.

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link'
});
```

## Options

These settings affect the execution of the `link` plugin. Predefined links, targets, and more can be specified here.

{% include configuration/link_default_target.md %}

{% include configuration/link_assume_external_targets.md %}

{% include configuration/link_class_list.md %}

{% include configuration/link_context_toolbar.md %}

{% include configuration/link_default_protocol.md %}

{% include configuration/link_list.md %}

{% include configuration/link_title.md %}

{% include configuration/link_quicklink.md %}

{% include configuration/link_rel_list.md %}

{% include configuration/link_target_list.md %}

{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% include misc/plugin-menu-item-id-boilerplate.md %}

## Commands

The Link plugin provides the following {{site.productname}} command.

{% include commands/link-cmds.md %}
