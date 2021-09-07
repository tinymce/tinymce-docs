---
layout: default
title: Required Real-Time Collaboration configuration options
title_nav: Required configuration options
description: List of all required RTC configuration options.
keywords: rtc configuration
---

{% assign pluginname = "Real-Time Collaboration (RTC)" %}
{% assign plugincode = "rtc" %}

The following options are required to use the Real-Time Collaboration (RTC) plugin:

* [`rtc_document_id`](#rtc_document_id)
* [`rtc_encryption_provider`](#rtc_encryption_provider)
* [`rtc_token_provider`](#rtc_token_provider)

For an example minimum configuration, see: [Examples of the minimum required configuration for the RTC plugin](#examplesoftheminimumrequiredconfigurationforthertcplugin).

{% include configuration/rtc_document_id.md %}

{% include configuration/rtc_encryption_provider.md %}

{% include configuration/rtc_token_provider.md %}
