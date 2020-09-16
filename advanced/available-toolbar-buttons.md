---
layout: default
title: Toolbar Buttons Available for TinyMCE
title_nav: Available Toolbar Buttons
description_short: Complete list of toolbar buttons available for the toolbar and quick toolbars.
description: Complete list of toolbar buttons available for the toolbar and quick toolbars.
keywords: toolbar button tool bar
---

The following tables show all available toolbar items, including items provided by plugins. To retrieve a list from the editor, run the following command from the browser console:

```js
tinyMCE.activeEditor.ui.registry.getAll().buttons
```

{% include misc/toolbar-button-settings.md %}

## Overview

* [Core toolbar buttons](#thecoretoolbarbuttons)
* [A11yChecker plugin toolbar buttons](#thea11ycheckerplugintoolbarbuttons)
* [Advanced Code Editor plugin toolbar buttons](#theadvancedcodeeditorplugintoolbarbuttons)
* [Anchor plugin toolbar buttons](#theanchorplugintoolbarbuttons)
* [Autosave plugin toolbar buttons](#theautosaveplugintoolbarbuttons)
* [Case Change plugin toolbar buttons](#thecasechangeplugintoolbarbuttons)
* [Character Map plugin toolbar buttons](#thecharactermapplugintoolbarbuttons)
* [Checklist plugin toolbar buttons](#thechecklistplugintoolbarbuttons)
* [Code plugin toolbar buttons](#thecodeplugintoolbarbuttons)
* [Code Sample plugin toolbar buttons](#thecodesampleplugintoolbarbuttons)
* [Comments plugin toolbar buttons](#thecommentsplugintoolbarbuttons)
* [Directionality plugin toolbar buttons](#thedirectionalityplugintoolbarbuttons)
* [Emoticons plugin toolbar buttons](#theemoticonsplugintoolbarbuttons)
* [Format Painter plugin toolbar buttons](#theformatpainterplugintoolbarbuttons)
* [Full Page plugin toolbar buttons](#thefullpageplugintoolbarbuttons)
* [Full Screen plugin toolbar buttons](#thefullscreenplugintoolbarbuttons)
* [Help plugin toolbar buttons](#thehelpplugintoolbarbuttons)
* [Horizontal Rule plugin toolbar buttons](#thehorizontalruleplugintoolbarbuttons)
* [Image plugin toolbar buttons](#theimageplugintoolbarbuttons)
* [Image Tools plugin toolbar buttons](#theimagetoolsplugintoolbarbuttons)
* [Insert Date/Time plugin toolbar buttons](#theinsertdatetimeplugintoolbarbuttons)
* [Link plugin toolbar buttons](#thelinkplugintoolbarbuttons)
* [Lists plugin toolbar buttons](#thelistsplugintoolbarbuttons)
* [Media plugin toolbar buttons](#themediaplugintoolbarbuttons)
* [Nonbreaking Space plugin toolbar buttons](#thenonbreakingspaceplugintoolbarbuttons)
* [Page Break plugin toolbar buttons](#thepagebreakplugintoolbarbuttons)
* [Page Embed plugin toolbar buttons](#thepageembedplugintoolbarbuttons)
* [Paste plugin toolbar buttons](#thepasteplugintoolbarbuttons)
* [Permanent Pen plugin toolbar buttons](#thepermanentpenplugintoolbarbuttons)
* [PowerPaste plugin toolbar buttons](#thepowerpasteplugintoolbarbuttons)
* [Preview plugin toolbar buttons](#thepreviewplugintoolbarbuttons)
* [Print plugin toolbar buttons](#theprintplugintoolbarbuttons)
* [Quick Toolbars plugin toolbar buttons](#thequicktoolbarsplugintoolbarbuttons)
* [Save plugin toolbar buttons](#thesaveplugintoolbarbuttons)
* [Search and Replace plugin toolbar buttons](#thesearchandreplaceplugintoolbarbuttons)
* [Spell Checker plugin toolbar buttons](#thespellcheckerplugintoolbarbuttons)
* [Spell Checker Pro plugin toolbar buttons](#thespellcheckerproplugintoolbarbuttons)
* [Table plugin toolbar buttons](#thetableplugintoolbarbuttons)
* [Template plugin toolbar buttons](#thetemplateplugintoolbarbuttons)
* [Tiny Drive plugin toolbar buttons](#thetinydriveplugintoolbarbuttons)
* [Table of Contents plugin toolbar buttons](#thetableofcontentsplugintoolbarbuttons)
* [Visual Blocks plugin toolbar buttons](#thevisualblocksplugintoolbarbuttons)
* [Visual Characters plugin toolbar buttons](#thevisualcharactersplugintoolbarbuttons)
* [Word Count plugin toolbar buttons](#thewordcountplugintoolbarbuttons)

## The core toolbar buttons

The following toolbar buttons are available for all {{site.productname}} instances without enabling any plugins:

{% include toolbar-button-ids/core-toolbar-buttons.md %}

{% assign pluginname = "A11yChecker" %}
{% assign plugincode = "a11ychecker" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Advanced Code Editor" %}
{% assign plugincode = "advcode" %}
{% assign altplugincode = "code" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Anchor" %}
{% assign plugincode = "anchor" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Autosave" %}
{% assign plugincode = "autosave" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Case Change" %}
{% assign plugincode = "casechange" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Character Map" %}
{% assign plugincode = "charmap" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Checklist" %}
{% assign plugincode = "checklist" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Code" %}
{% assign plugincode = "code" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Code Sample" %}
{% assign plugincode = "codesample" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Comments" %}
{% assign plugincode = "comments" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Directionality" %}
{% assign plugincode = "directionality" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Emoticons" %}
{% assign plugincode = "emoticons" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Format Painter" %}
{% assign plugincode = "formatpainter" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Full Page" %}
{% assign plugincode = "fullpage" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Full Screen" %}
{% assign plugincode = "fullscreen" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Help" %}
{% assign plugincode = "help" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Horizontal Rule" %}
{% assign plugincode = "hr" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Image" %}
{% assign plugincode = "image" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Image Tools" %}
{% assign plugincode = "imagetools" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Insert Date/Time" %}
{% assign plugincode = "insertdatetime" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Link" %}
{% assign plugincode = "link" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Lists" %}
{% assign plugincode = "lists" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Media" %}
{% assign plugincode = "media" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Nonbreaking Space" %}
{% assign plugincode = "nonbreaking" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Page Break" %}
{% assign plugincode = "pagebreak" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Page Embed" %}
{% assign plugincode = "pageembed" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Paste" %}
{% assign plugincode = "paste" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Permanent Pen" %}
{% assign plugincode = "permanentpen" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "PowerPaste" %}
{% assign plugincode = "powerpaste" %}
{% assign altplugincode = "paste" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Preview" %}
{% assign plugincode = "preview" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Print" %}
{% assign plugincode = "print" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Quick Toolbars" %}
{% assign plugincode = "quickbars" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Save" %}
{% assign plugincode = "save" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Search and Replace" %}
{% assign plugincode = "searchreplace" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Spell Checker" %}
{% assign plugincode = "spellchecker" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Spell Checker Pro" %}
{% assign plugincode = "tinymcespellchecker" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Table" %}
{% assign plugincode = "table" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Template" %}
{% assign plugincode = "template" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Tiny Drive" %}
{% assign plugincode = "tinydrive" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Table of Contents" %}
{% assign plugincode = "toc" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Visual Blocks" %}
{% assign plugincode = "visualblocks" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Visual Characters" %}
{% assign plugincode = "visualchars" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}

{% assign pluginname = "Word Count" %}
{% assign plugincode = "wordcount" %}
{% include misc/plugin-toolbar-button-id-boilerplate.md %}