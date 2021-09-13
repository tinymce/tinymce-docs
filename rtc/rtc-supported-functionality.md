---
layout: default
title: Supported TinyMCE functionality for Real-Time Collaboration
title_nav: Supported Functionality
description: Information on what TinyMCE functionality is, and is not, supported in Real-Time Collaboration
keywords: rtc support functionality
---

## Browser support

The Real-Time Collaboration (RTC) plugin supports the latest desktop versions of:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Apple Safari

## Mobile support

Real-Time Collaboration is currently not supported on mobile devices.

## TinyMCE features (plugins) support when using RTC

The Real-Time Collaboration (RTC) plugin supports a subset of the features that {{site.productname}} provides.

> **Warning**: Enabling plugins not shown here is not supported and may lead to unexpected behavior.

The following plugins are currently supported:

* [Advanced List (`advlist`)]({{site.baseurl}}/plugins/opensource/advlist/)
* [Autoresize (`autoresize`)]({{site.baseurl}}/plugins/opensource/autoresize/)
* [Character Map (`charmap`)]({{site.baseurl}}/plugins/opensource/charmap/)
* [Emoticons (`emoticons`)]({{site.baseurl}}/plugins/opensource/emoticons/)
* [Help (`help`)]({{site.baseurl}}/plugins/opensource/help/)
* [Horizontal Rule (`hr`)]({{site.baseurl}}/plugins/opensource/hr/)
* [Image (`image`)]({{site.baseurl}}/plugins/opensource/image/)
  * Captioned images are not yet supported.
  * The [`image_caption`]({{site.baseurl}}/plugins/opensource/image/#image_caption) option is not supported.
* [Insert Date/Time (`insertdatetime`)]({{site.baseurl}}/plugins/opensource/insertdatetime/)
* [Link (`link`)]({{site.baseurl}}/plugins/opensource/link/)
  * The [`rel_list`]({{site.baseurl}}/plugins/opensource/link/#rel_list) option is not supported.
* [Lists (`lists`)]({{site.baseurl}}/plugins/opensource/lists/)
* [MoxieManager (`moxiemanager`)]({{site.baseurl}}/plugins/premium/moxiemanager/)
* [PowerPaste (`powerpaste`)]({{site.baseurl}}/plugins/premium/powerpaste/)
* [Print (`print`)]({{site.baseurl}}/plugins/opensource/print/)
* [Save (`save`)]({{site.baseurl}}/plugins/opensource/save/)
* [Tab Focus (`tabfocus`)]({{site.baseurl}}/plugins/opensource/tabfocus/)
* [Tiny Drive (`tinydrive`)]({{site.baseurl}}/plugins/premium/tinydrive/)
* [Visual Blocks (`visualblocks`)]({{site.baseurl}}/plugins/opensource/visualblocks/)
* [Word Count (`wordcount`)]({{site.baseurl}}/plugins/opensource/wordcount/)

## Options that are not available when RTC is enabled

* [`allow_unsafe_link_target`]({{site.baseurl}}/configure/content-filtering/#allow_unsafe_link_target)
* [`br_in_pre`]({{site.baseurl}}/configure/advanced-editing-behavior/#br_in_pre)
* [`custom_elements`]({{site.baseurl}}/configure/content-filtering/#custom_elements)
* [`end_container_on_empty_block`]({{site.baseurl}}/configure/advanced-editing-behavior/#end_container_on_empty_block)
* [`extended_valid_elements`]({{site.baseurl}}/configure/content-filtering/#extended_valid_elements)
* [`forced_root_block`]({{site.baseurl}}/configure/content-filtering/#forced_root_block)
* [`forced_root_block_attrs`]({{site.baseurl}}/configure/content-filtering/#forced_root_block_attrs)
* [`format_empty_lines`]({{site.baseurl}}/configure/content-formatting/#format_empty_lines)
* [`gecko_spellcheck`]({{site.baseurl}}/configure/spelling/#gecko_spellcheck)
* [`image_caption`]({{site.baseurl}}/plugins/opensource/image/#image_caption)
* [`images_dataimg_filter`]({{site.baseurl}}/configure/file-image-upload/#images_dataimg_filter)
* [`indent_use_margin`]({{site.baseurl}}/configure/content-formatting/#indent_use_margin)
* [`inline_boundaries`]({{site.baseurl}}/configure/content-appearance/#inline_boundaries)
* [`inline_boundaries_selector`]({{site.baseurl}}/configure/content-appearance/#inline_boundaries_selector)
* [`keep_styles`]({{site.baseurl}}/configure/content-filtering/#keep_styles)
* [`placeholder`]({{site.baseurl}}/configure/editor-appearance/#placeholder)
* [`protect`]({{site.baseurl}}/configure/content-filtering/#protect)
* [`rel_list`]({{site.baseurl}}/plugins/opensource/link/#rel_list)
* [`valid_children`]({{site.baseurl}}/configure/content-filtering/#valid_children)
* [`valid_elements`]({{site.baseurl}}/configure/content-filtering/#valid_elements)
