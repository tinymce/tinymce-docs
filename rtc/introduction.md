---
layout: default
title: RTC Introduction
title_nav: Introduction
description: Introduction of what RTC is and its capabilities
keywords: rtc introduction overview
---

{% assign beta_feature = "The RTC plugin" %}
{% assign pre-release_type = "Closed Beta" %}
{% include misc/beta-note.md %}
{{site.requires_5_6v}}<br>
{{site.premiumplugin}}<br>

## Introduction

{% include misc/rtc-description.md %}

## JSON Web Token based authentication

Some cloud services for {{site.productname}} require setting up JSON Web Token (JWT) authentication. JWTs are a common solution for communicating user authorization for web services. JWTs are used to communicate to {{site.productname}} that the user has been authorized to access a particular editor document.

For general information on JSON Web Tokens, visit: [https://jwt.io/](https://jwt.io/).

For information on using JWT authentication with the RTC plugin, see: [JWT authentication]({{site.baseurl}}/rtc/jwt-authentication/).

## Presence API

The RTC plugin comes with a presence API that enables you to track when users enter/leave the session. The only user information shared over the wire is the user id stored in the JWT `sub` claim local other user details like full name to be presented for a user is resolved locally so the cloud services will never see who is actually connecting. There are currently 8 distinct caret colors assigned to each connecting user. More than 8 users can still connect but then the colors will be reused.

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
* [print]({{site.baseurl}}/plugins/opensource/print)
* [save]({{site.baseurl}}/plugins/opensource/save)
* [tabfocus]({{site.baseurl}}/plugins/opensource/tabfocus)
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
