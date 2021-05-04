---
layout: default
title: Introduction to Real-Time Collaboration (RTC)
title_nav: Introduction
description: Introduction of what RTC is and its capabilities
keywords: rtc introduction overview
---

## Introduction

{% include misc/rtc-description.md %}

{% assign beta_feature = "The Real-Time Collaboration (RTC) plugin" %}
{% assign pre-release_type = "Open Beta" %}
{% include misc/beta-note.md %}

## JSON Web Token based authentication

Some cloud services for {{site.productname}} require setting up JSON Web Token (JWT) authentication. JWTs are a common solution for communicating user authorization with web services. JWTs are used to communicate to {{site.productname}} that the user has been authorized to access {{site.cloudname}} services.

For general information on JWTs, visit: [https://jwt.io/](https://jwt.io/).

For information on using JWT authentication with the Real-Time Collaboration (RTC) plugin, see: [JWT authentication]({{site.baseurl}}/rtc/jwt-authentication/).

## Presence API

The Real-Time Collaboration (RTC) plugin exports a presence API to enable tracking when users enter and leave the collaboration session. The only user information shared through the RTC server is the user id stored in the JWT `sub` claim. Other details such as the user's full name are resolved locally so the {{site.cloudname}} will never see who is actually connecting. User resolution is performed through the [`rtc_user_details_provider` option]({{site.baseurl}}/rtc/configuration#rtc_user_details_provider). Presence events can be received through either [configuration callbacks]({{site.baseurl}}/rtc/configuration#rtc_client_connected) or [editor events]({{site.baseurl}}/rtc/events#rtcclientconnected).

## End-to-end encryption

The Real-Time Collaboration (RTC) plugin encrypts all content-specific traffic. Clients are assigned a random presence ID when they connect, which is used to transmit cursor position along with their JWT user ID. This means the {{site.productname}} cloud services can not read any data transferred or know who is editing. Content and user data is only available to the page running {{ site.productname }}.

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
