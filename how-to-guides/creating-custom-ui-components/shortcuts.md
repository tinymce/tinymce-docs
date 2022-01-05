---
layout: default
title_nav: Keyboard shortcuts
title: Adding keyboard shortcuts
description: Add custom keyboard shortcuts to TinyMCE.
keywords: custom keyboard shortcuts
---

> **Important**: Adding a custom shortcut with a keyboard combination that conflicts with an existing {{site.productname}} or browser shortcut will override the existing shortcut.

To add a custom keyboard shortcut to {{site.productname}}, use either:

* [The `tinymce.Editor.addShortcut` API]({{site.baseurl}}/apis/tinymce/tinymce.editor/#addshortcut).
* [The `tinymce.Shortcuts.add` API]({{site.baseurl}}/apis/tinymce/tinymce.shortcuts/).

{% include misc/shortcut-os-mappings.md %}

## Example: Custom keyboard shortcut

{% include live-demo.html id="custom-shortcut" tab="js" %}

## Example: Adding a custom shortcut for a menu item

When adding a shortcut for a custom menu item, add both a custom shortcut and a custom menu item. To display the shortcut on a custom menu item, add the `shortcut` configuration option when creating the menu item.

{% include live-demo.html id="custom-shortcut-2" tab="js" %}
