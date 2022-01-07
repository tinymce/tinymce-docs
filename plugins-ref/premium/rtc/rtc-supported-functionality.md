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

* [Advanced List (`advlist`)]({{site.baseurl}}/plugins-ref/opensource/advlist/)
* [Autoresize (`autoresize`)]({{site.baseurl}}/plugins-ref/opensource/autoresize/)
* [Character Map (`charmap`)]({{site.baseurl}}/plugins-ref/opensource/charmap/)
* [Emoticons (`emoticons`)]({{site.baseurl}}/plugins-ref/opensource/emoticons/)
* [Help (`help`)]({{site.baseurl}}/plugins-ref/opensource/help/)
* [Image (`image`)]({{site.baseurl}}/plugins-ref/opensource/image/)
  * Captioned images are not yet supported.
  * The [`image_caption`]({{site.baseurl}}/plugins-ref/opensource/image/#image_caption) option is not supported.
* [Insert Date/Time (`insertdatetime`)]({{site.baseurl}}/plugins-ref/opensource/insertdatetime/)
* [Link (`link`)]({{site.baseurl}}/plugins-ref/opensource/link/)
  * The [`link_rel_list`]({{site.baseurl}}/plugins-ref/opensource/link/#link_rel_list) option is not supported.
* [Lists (`lists`)]({{site.baseurl}}/plugins-ref/opensource/lists/)
* [MoxieManager (`moxiemanager`)]({{site.baseurl}}/plugins-ref/premium/moxiemanager/)
* [PowerPaste (`powerpaste`)]({{site.baseurl}}/plugins-ref/premium/powerpaste/)
* [Save (`save`)]({{site.baseurl}}/plugins-ref/opensource/save/)
* [Tiny Drive (`tinydrive`)]({{site.baseurl}}/plugins-ref/premium/tinydrive/)
* [Visual Blocks (`visualblocks`)]({{site.baseurl}}/plugins-ref/opensource/visualblocks/)
* [Word Count (`wordcount`)]({{site.baseurl}}/plugins-ref/opensource/wordcount/)

## Integration considerations

When planning to integrate Real-Time Collaboration into your application or website, consider the following details and how they impact your use-case. If you are in doubt, don't hesitate to [contact us]({{site.contactpage}}/) and discuss your requirements.

* Do not load content into {{site.productname}} that was created using a plugin not yet supported in RTC, such as: Tables, Media embed, Checklist, or Table of contents. Without the plugin enabled to protect the relevant content, you risk making changes to the HTML in a way it's no longer recognized by the plugin.
* If content is created in an RTC session, then updated outside of an _RTC-enabled_ {{site.productname}} editor, a new document ID (`documentId`) is needed for subsequent RTC sessions. The RTC plugin does not currently provide APIs for updating the content programmatically. If your use-case requires you to update the content outside of the RTC clients, your server will need to generate a new document ID and distribute it to all collaborators and block or otherwise prevent editing or collaborating with the old document ID.
* Using the RTC plugin in hybrid mode is not supported and not recommended. Self-hosted versions of {{site.productname}} should not be used with the cloud version of the RTC plugin. The RTC plugin is dependent on the {{site.productname}} version it is released with. When using {{site.productname}} for the {{site.cloudname}}, {{site.productname}} will use the linked version of the RTC plugin.

## Options that are not available when RTC is enabled

* [`allow_unsafe_link_target`]({{site.baseurl}}/content/content-filtering/#allow_unsafe_link_target)
* [`br_in_pre`]({{site.baseurl}}/content/content-filtering/#br_in_pre)
* [`custom_elements`]({{site.baseurl}}/content/content-filtering/#custom_elements)
* [`end_container_on_empty_block`]({{site.baseurl}}/content/content-behavior-options/#end_container_on_empty_block)
* [`extended_valid_elements`]({{site.baseurl}}/content/content-filtering/#extended_valid_elements)
* [`forced_root_block`]({{site.baseurl}}/content/content-filtering/#forced_root_block)
* [`forced_root_block_attrs`]({{site.baseurl}}/content/content-filtering/#forced_root_block_attrs)
* [`format_empty_lines`]({{site.baseurl}}/content/content-formatting/#format_empty_lines)
* [`gecko_spellcheck`]({{site.baseurl}}/content/spelling/#gecko_spellcheck)
* [`image_caption`]({{site.baseurl}}/plugins-ref/opensource/image/#image_caption)
* [`images_dataimg_filter`]({{site.baseurl}}/content/file-image-upload/#images_dataimg_filter)
* [`indent_use_margin`]({{site.baseurl}}/content/user-formatting-options/#indent_use_margin)
* [`inline_boundaries`]({{site.baseurl}}/content/content-behavior-options/#inline_boundaries)
* [`inline_boundaries_selector`]({{site.baseurl}}/content/content-behavior-options/#inline_boundaries_selector)
* [`keep_styles`]({{site.baseurl}}/content/content-behavior-options/#keep_styles)
* [`placeholder`]({{site.baseurl}}/initial-configuration/editor-important-options/#placeholder)
* [`protect`]({{site.baseurl}}/content/content-filtering/#protect)
* [`link_rel_list`]({{site.baseurl}}/plugins-ref/opensource/link/#link_rel_list)
* [`valid_children`]({{site.baseurl}}/content/content-filtering/#valid_children)
* [`valid_elements`]({{site.baseurl}}/content/content-filtering/#valid_elements)
