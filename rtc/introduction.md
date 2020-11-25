---
layout: default
title: RTC Introduction
title_nav: Introduction
description: Introduction of what RTC is and its capabilities
keywords: rtc introduction overview
---

RTC is a premium {{site.productname}} plugin for having multiple users collaborating on the same document using our cloud services.

## JWT

Some cloud services for {{site.productname}} require setting up JWT authentication. This allows verifying that the end users are allowed to access a particular feature. JWT is a common authorization solution for web services and is documented in more detail at the [https://jwt.io/](https://jwt.io/) website. For more information, see the [JWT authentication]({{site.baseurl}}/rtc/jwt-authentication/) section.

## Presence API

The RTC plugin comes with a presence api that enables you to track when users enter/leave the session. The only user information shared over the wire is the user id stored in the JWT `sub` claim local other user details like full name to be presented for a user is resolved locally so the cloud services will never see who is actually connecting. There are currently 8 distinct caret colors assigned to each connecting user. More than 8 users can still connect but then the colors will be reused.

## End-to-end encryption

The RTC plugin encrypts all content specific traffic that means the {{site.productname}} cloud services will not be able to read your data or be able to know who is editing all that is local to the current page running the plugin.

### RTC enabled features

Currently RTC only supports a subset of the features that {{site.productname}} has however we are working on bringing over more and more of those features.

Here is a list of plugins we currently support:

* [advlist]({{site.baseurl}}/plugins/opensource/advlist)
* [autoresize]({{site.baseurl}}/plugins/opensource/autoresize)
* [charmap]({{site.baseurl}}/plugins/opensource/charmap)
* [emoticons]({{site.baseurl}}/plugins/opensource/emoticons)
* [help]({{site.baseurl}}/plugins/opensource/help)
* [hr]({{site.baseurl}}/plugins/opensource/hr)
* [image]({{site.baseurl}}/plugins/opensource/image) (captioned images are not yet supported)
* [insertdatetime]({{site.baseurl}}/plugins/opensource/insertdatetime)
* [link]({{site.baseurl}}/plugins/opensource/link)
* [lists]({{site.baseurl}}/plugins/opensource/lists)
* [moxiemanager]({{site.baseurl}}/plugins/premium/moxiemanager)
* [powerpaste]({{site.baseurl}}/plugins/premium/powerpaste)
* [save]({{site.baseurl}}/plugins/opensource/save)
* [tinydrive]({{site.baseurl}}/plugins/premium/tinydrive)
* [visualblocks]({{site.baseurl}}/plugins/opensource/visualblocks)
* [wordcount]({{site.baseurl}}/plugins/opensource/wordcount)

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

We only support modern desktop browsers Chrome, Firefox, Microsoft Edge and Safari.

### Mobile support

Mobile support will be introduced later.
