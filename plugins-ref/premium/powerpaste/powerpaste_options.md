---
layout: default
title: Options for the PowerPaste plugin
title_nav: Options
description: Information on the options provided by the PowerPaste plugin.
keywords: enterprise powerpaste power paste microsoft word excel google docs
---

{% assign pluginname = 'PowerPaste' %}
{% assign plugincode = "powerpaste" %}

## Configuration Options

{% include configuration/paste_as_text.md %}

{% include configuration/paste_merge_formats.md %}

{% include configuration/paste_tab_spaces.md %}

{% include configuration/powerpaste_word_import.md %}

{% include configuration/powerpaste_googledocs_import.md %}

{% include configuration/powerpaste_html_import.md %}

{% include configuration/powerpaste_allow_local_images.md %}

{% include configuration/paste_block_drop.md %}

{% include configuration/powerpaste_clean_filtered_inline_elements.md %}

{% include configuration/powerpaste_keep_unsupported_src.md %}

{% include configuration/smart_paste.md %}

{% include configuration/image_file_types.md %}

## Advanced Config Options

### Pre-filtering and post-filtering callbacks

Developers can add custom filtering before and after **PowerPaste**'s filters are run using the pre-filtering and post-filtering callbacks. These can be added as init options or at runtime using event listeners.

> **Note**: These callbacks are also triggered by the core Paste plugin, but when triggered by PowerPaste they are passed more data.

{% include configuration/paste_preprocess.md %}

{% include configuration/paste_postprocess.md %}
