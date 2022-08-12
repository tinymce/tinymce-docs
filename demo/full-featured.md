---
layout: default
title: Full featured examples
title_nav: Full featured
description_short: Every TinyMCE plugin in action.
description: These examples display all of the plugins available with TinyMCE Cloud premium subscriptions.
keywords: example demo custom wysiwyg full-power full-featured plugins non-premium
---

## Full Featured: Including Premium Plugins

> **Important**: This demonstration page is for {{site.productname}} {{site.productmajorversion}}. {{site.productname}} {{site.productmajorversion}} is still a supported version but it is not the current release. The full-featured demonstration page for {{site.productname}} 6 is [available]({{site.baseurl}}/tinymce/6/full-featured-premium-demo/) in the {{site.productname}} 6 [documentation]({{site.baseurl}}/tinymce/6/).

This example includes most of the available {{site.productname}} plugins, including plugins available on {{site.cloudname}} premium subscriptions. Please note, it includes [premium plugins]({{site.plugindirectory}}).

Want to try it for yourself ? [Get started with TinyMCE now on Cloud]({{site.accountsignup}}).

{% include live-demo.html id="full-featured" %}

The following plugins are excluded from this example:

* [MoxieManager (Premium Plugin)]({{site.baseurl}}/plugins/premium/moxiemanager) — [**{{site.cloudfilemanager}}**]({{site.baseurl}}/plugins/premium/tinydrive) included instead.
* [Autoresize]({{site.baseurl}}/plugins/opensource/autoresize) — Resizes the editor to fit the content.
* [BBCode]({{site.baseurl}}/plugins/opensource/bbcode) — Changes the markup used for the content. [Deprecated]({{site.baseurl}}/release-notes/6.0-upcoming-changes.md#plugins) as of {{site.productname}} 5.9.
* [Code]({{site.baseurl}}/plugins/opensource/code) — [**Advanced Code Editor**]({{site.baseurl}}/plugins/premium/advcode) included instead.
* [Full Page]({{site.baseurl}}/plugins/opensource/fullpage) — Used for modifying HTML `<head>` elements. [Deprecated]({{site.baseurl}}/release-notes/6.0-upcoming-changes.md#plugins) as of {{site.productname}} 5.9.
* [Paste]({{site.baseurl}}/plugins/opensource/paste) — [**PowerPaste**]({{site.baseurl}}/plugins/premium/powerpaste) included instead.
* [Spellchecker]({{site.baseurl}}/plugins/opensource/spellchecker) — [**Spell Checker Pro**]({{site.baseurl}}/plugins/premium/tinymcespellchecker) included instead.
* [Tab Focus]({{site.baseurl}}/plugins/opensource/tabfocus) — Changes the behavior of the TAB-key within the editor.

## Full Featured: Non-Premium Plugins

This example includes only non-premium plugins. These plugins are also used in the [Full Featured: Including Premium Plugins Demo above](#fullfeaturedincludingpremiumplugins).

{% include live-demo.html id="open-source-plugins" %}

The following plugins are excluded from this example:

* [All premium plugins]({{site.plugindirectory}}).
* [Autoresize]({{site.baseurl}}/plugins/opensource/autoresize) — Resizes the editor to fit the content.
* [BBCode]({{site.baseurl}}/plugins/opensource/bbcode) — Changes the markup used for the content. [Deprecated]({{site.baseurl}}/release-notes/6.0-upcoming-changes.md#plugins) as of {{site.productname}} 5.9.
* [Full Page]({{site.baseurl}}/plugins/opensource/fullpage) — Used for modifying HTML `<head>` elements. [Deprecated]({{site.baseurl}}/release-notes/6.0-upcoming-changes.md#plugins) as of {{site.productname}} 5.9.
* [Spellchecker]({{site.baseurl}}/plugins/opensource/spellchecker) — Requires Server-Side components, see: [Check spelling in {{site.productname}}]({{site.baseurl}}/general-configuration-guide/spell-checking/). [Deprecated]({{site.baseurl}}/release-notes/release-notes54.md#thefreetinymcespellcheckerplugin) as of {{site.productname}} 5.4.
* [Tab Focus]({{site.baseurl}}/plugins/opensource/tabfocus) — Changes the behavior of the TAB-key within the editor.
