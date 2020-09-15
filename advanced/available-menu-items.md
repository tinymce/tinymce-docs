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

{% include menu-item-ids/advtable-menu-items.md %}

{% include menu-item-ids/anchor-menu-items.md %}

{% include menu-item-ids/autosave-menu-items.md %}

{% include menu-item-ids/casechange-menu-items.md %}

{% include menu-item-ids/charmap-menu-items.md %}

{% include menu-item-ids/checklist-menu-items.md %}

{% include menu-item-ids/code-menu-items.md %}

{% include menu-item-ids/codesample-menu-items.md %}

{% include menu-item-ids/comments-menu-items.md %}

{% include menu-item-ids/emoticons-menu-items.md %}

{% include menu-item-ids/fullpage-menu-items.md %}

{% include menu-item-ids/fullscreen-menu-items.md %}

{% include menu-item-ids/help-menu-items.md %}

{% include menu-item-ids/hr-menu-items.md %}

{% include menu-item-ids/image-menu-items.md %}

{% include menu-item-ids/insertdatetime-menu-items.md %}

{% include menu-item-ids/link-menu-items.md %}

{% include menu-item-ids/media-menu-items.md %}

{% include menu-item-ids/nonbreaking-menu-items.md %}

{% include menu-item-ids/pagebreak-menu-items.md %}

{% include menu-item-ids/pageembed-menu-items.md %}

{% include menu-item-ids/paste-menu-items.md %}

{% include menu-item-ids/permanent-pen-menu-items.md %}

{% include menu-item-ids/preview-menu-items.md %}

{% include menu-item-ids/print-menu-items.md %}

{% include menu-item-ids/searchreplace-menu-items.md %}

{% include menu-item-ids/spellchecker-menu-items.md %}

{% include menu-item-ids/table-menu-items.md %}

{% include menu-item-ids/template-menu-items.md %}

{% include menu-item-ids/tinydrive-menu-items.md %}

{% include menu-item-ids/tinymcespellchecker-menu-items.md %}

{% include menu-item-ids/toc-menu-items.md %}

{% include menu-item-ids/visualblock-menu-items.md %}

{% include menu-item-ids/visualchars-menu-items.md %}

{% include menu-item-ids/wordcount-menu-items.md %}