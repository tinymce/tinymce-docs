---
layout: default
title: TinyMCE functionality support for Real-Time Collaboration
title_nav: Supported Functionality
description: Information on what TinyMCE functionality is, and is not, supported in Real-Time Collaboration
keywords: rtc support functionality
---

### RTC enabled features

Currently, Real-Time Collaboration (RTC) only supports a subset of the features that {{site.productname}} provides. However, we are working on bringing over more and more of those features.

Here is a list of plugins currently supported:

* [advlist]({{site.baseurl}}/plugins/opensource/advlist/)
* [autoresize]({{site.baseurl}}/plugins/opensource/autoresize/)
* [charmap]({{site.baseurl}}/plugins/opensource/charmap/)
* [emoticons]({{site.baseurl}}/plugins/opensource/emoticons/)
* [help]({{site.baseurl}}/plugins/opensource/help/)
* [hr]({{site.baseurl}}/plugins/opensource/hr/)
* [image]({{site.baseurl}}/plugins/opensource/image/) (captioned images are not yet supported)
* [insertdatetime]({{site.baseurl}}/plugins/opensource/insertdatetime/)
* [link]({{site.baseurl}}/plugins/opensource/link/)
* [lists]({{site.baseurl}}/plugins/opensource/lists/)
* [moxiemanager]({{site.baseurl}}/plugins/premium/moxiemanager/)
* [powerpaste]({{site.baseurl}}/plugins/premium/powerpaste/)
* [print]({{site.baseurl}}/plugins/opensource/print/)
* [save]({{site.baseurl}}/plugins/opensource/save/)
* [tabfocus]({{site.baseurl}}/plugins/opensource/tabfocus/)
* [tinydrive]({{site.baseurl}}/plugins/premium/tinydrive/)
* [visualblocks]({{site.baseurl}}/plugins/opensource/visualblocks/)
* [wordcount]({{site.baseurl}}/plugins/opensource/wordcount/)

### Settings that are not available when RTC is enabled

* [custom_elements]({{site.baseurl}}/configure/content-filtering/#custom_elements)
* [end_container_on_empty_block]({{site.baseurl}}/configure/advanced-editing-behavior/#end_container_on_empty_block)
* [forced_root_block]({{site.baseurl}}/configure/content-filtering/#forced_root_block)
* [forced_root_block_attrs]({{site.baseurl}}/configure/content-filtering/#forced_root_block_attrs)
* [image_caption]({{site.baseurl}}/plugins/opensource/image/#image_caption)
* [indent_use_margin]({{site.baseurl}}/configure/content-formatting/#indent_use_margin)
* [keep_styles]({{site.baseurl}}/configure/content-filtering/#keep_styles)
* [resize_img_proportional]({{site.baseurl}}/configure/advanced-editing-behavior/#resize_img_proportional)
* [valid_children]({{site.baseurl}}/configure/content-filtering/#valid_children)

### Browser support

RTC only supports the latest desktop versions of:

* Google Chrome
* Mozilla Firefox
* Microsoft Edge
* Apple Safari

Older browsers will not be supported.

### Mobile support

Mobile devices are not currently supported. This will be introduced in a later release.
