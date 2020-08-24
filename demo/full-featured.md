---
layout: default
title: Full featured examples
title_nav: Full featured
description_short: Every TinyMCE plugin in action.
description: These examples display all of the plugins available with TinyMCE Cloud premium subscriptions.
keywords: example demo custom wysiwyg full-power full-featured plugins non-premium
---

## Full Featured: Including Premium Plugins

This example includes most of the available {{site.productname}} plugins, including plugins available on {{site.cloudname}} premium subscriptions. Please note, it includes [premium plugins]({{site.plugindirectory}}).

{% include live-demo.html id="full-featured" %}

The following plugins are excluded from this example:

* [MoxieManager (Premium Plugin)]({{site.baseurl}}/plugins/moxiemanager) — [**{{site.cloudfilemanager}}**]({{site.baseurl}}/plugins/drive) included instead.
* [Autoresize]({{site.baseurl}}/plugins/autoresize) — Resizes the editor to fit the content.
* [BBCode]({{site.baseurl}}/plugins/bbcode) — Changes the markup used for the content.
* [Code]({{site.baseurl}}/plugins/code) — [**Advanced Code Editor**]({{site.baseurl}}/plugins/advcode) included instead.
* [Full Page]({{site.baseurl}}/plugins/fullpage) — Used for modifying HTML `<head>` elements.
* [Paste]({{site.baseurl}}/plugins/paste) — [**PowerPaste**]({{site.baseurl}}/plugins/powerpaste) included instead.
* [Spellchecker]({{site.baseurl}}/plugins/spellchecker) — [**Spell Checker Pro**]({{site.baseurl}}/plugins/tinymcespellchecker) included instead.
* [Tab Focus]({{site.baseurl}}/plugins/tabfocus) — Changes the behavior of the TAB-key within the editor.

## Full Featured: Non-Premium Plugins

This example includes only non-premium plugins. These plugins are also used in the [Full Featured: Including Premium Plugins Demo above](#fullfeaturedincludingpremiumplugins).

{% include live-demo.html id="open-source-plugins" %}

The following plugins are excluded from this example:

* [All premium plugins]({{site.plugindirectory}}).
* [Autoresize]({{site.baseurl}}/plugins/autoresize) — Resizes the editor to fit the content.
* [BBCode]({{site.baseurl}}/plugins/bbcode) — Changes the markup used for the content.
* [Full Page]({{site.baseurl}}/plugins/fullpage) — Used for modifying HTML `<head>` elements.
* [Spellchecker]({{site.baseurl}}/plugins/spellchecker) — Requires Server-Side components, see: [Check spelling in {{site.productname}}]({{site.baseurl}}/general-configuration-guide/spell-checking/).
* [Tab Focus]({{site.baseurl}}/plugins/tabfocus) — Changes the behavior of the TAB-key within the editor.