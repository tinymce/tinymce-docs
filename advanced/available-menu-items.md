---
layout: default
title: Menu Items Available for TinyMCE
title_nav: Available Menu Items
description_short: Complete list of menu items available for the menu bar and context menus.
description: Complete list of menu items available for the menu bar and context menus.
keywords: menuitems menu menubar
---

For use with the [`menu`]({{ site.baseurl }}/configure/editor-appearance/#menu) and the [`contextmenu`]({{ site.baseurl }}/configure/editor-appearance/#contextmenu) configuration options.

The following tables show all available menu items, including items provided by plugins. To retrieve a list from the editor, run the following command from the browser console:

```js
tinyMCE.activeEditor.ui.registry.getAll().menuItems
```

{% include menu-item-ids/core-menu-items.md %}

{% assign pluginname="A11yChecker" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/a11ychecker-menu-items.md %}

{% assign pluginname="Advanced Code Editor" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/code-menu-items.md %}

{% assign pluginname="Advanced Tables" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/advtable-menu-items.md %}

{% assign pluginname="Anchor" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/anchor-menu-items.md %}

{% assign pluginname="Autosave" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/autosave-menu-items.md %}

{% assign pluginname="Case Change" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/casechange-menu-items.md %}

{% assign pluginname="Character Map" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/charmap-menu-items.md %}

{% assign pluginname="Checklist" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/checklist-menu-items.md %}

{% assign pluginname="Code" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/code-menu-items.md %}

{% assign pluginname="Code Sample" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/codesample-menu-items.md %}

{% assign pluginname="Comments" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/comments-menu-items.md %}

{% assign pluginname="Emoticons" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/emoticons-menu-items.md %}

{% assign pluginname="Full Page" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/fullpage-menu-items.md %}

{% assign pluginname="Full Screen" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/fullscreen-menu-items.md %}

{% assign pluginname="Help" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/help-menu-items.md %}

{% assign pluginname="Horizontal Rule" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/hr-menu-items.md %}

{% assign pluginname="Image" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/image-menu-items.md %}

{% assign pluginname="Insert Date/Time" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/insertdatetime-menu-items.md %}

{% assign pluginname="Link" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/link-menu-items.md %}

{% assign pluginname="Media" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/media-menu-items.md %}

{% assign pluginname="Nonbreaking Space" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/nonbreaking-menu-items.md %}

{% assign pluginname="Paste Break" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/pagebreak-menu-items.md %}

{% assign pluginname="Page Embed" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/pageembed-menu-items.md %}

{% assign pluginname="Paste" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/paste-menu-items.md %}

{% assign pluginname="Permanent Pen" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/permanent-pen-menu-items.md %}

{% assign pluginname="PowerPaste" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/paste-menu-items.md %}

{% assign pluginname="Preview" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/preview-menu-items.md %}

{% assign pluginname="Print" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/print-menu-items.md %}

{% assign pluginname="Search and Replace" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/searchreplace-menu-items.md %}

{% assign pluginname="Spell Checker" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/spellchecker-menu-items.md %}

{% assign pluginname="Spell Checker Pro" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/tinymcespellchecker-menu-items.md %}

{% assign pluginname="Table" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/table-menu-items.md %}

{% assign pluginname="Template" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/template-menu-items.md %}

{% assign pluginname="Tiny Drive" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/tinydrive-menu-items.md %}

{% assign pluginname="Table of Contents" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/toc-menu-items.md %}

{% assign pluginname="Visual Blocks" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/visualblock-menu-items.md %}

{% assign pluginname="Visual Characters" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/visualchars-menu-items.md %}

{% assign pluginname="Word Count" %}
{% include misc/plugin-menu-item-id-boilerplate.md %}
{% include menu-item-ids/wordcount-menu-items.md %}