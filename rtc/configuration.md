---
layout: default
title: Real-Time Collaboration configuration options
title_nav: Configuration options
description: List of all available RTC configuration options.
keywords: rtc configuration
---

{% assign pluginname = "Real-Time Collaboration (RTC)" %}
{% assign plugincode = "rtc" %}

## Configuration style

The Real-Time Collaboration (RTC) plugin uses promise-based "provider" functions to support a variety of configuration scenarios including asynchronously fetching data from a server. Function input parameters are provided as an object, allowing unused fields to be omitted.

## Required configuration

The following options are required to use the Real-Time Collaboration (RTC) plugin:

* [`rtc_document_id`](#rtc_document_id)
* [`rtc_encryption_provider`](#rtc_encryption_provider)
* [`rtc_token_provider`](#rtc_token_provider)

For an example minimum configuration, see: [Examples of the minimum required configuration for the RTC plugin](#examplesoftheminimumrequiredconfigurationforthertcplugin).

{% include configuration/rtc_document_id.md %}

{% include configuration/rtc_encryption_provider.md %}

{% include configuration/rtc_token_provider.md %}

## Recommended configuration

For the best user experience, {{site.companyname}} recommends including these configuration options:

* [`rtc_server_disconnected`](#rtc_server_disconnected)
* [`rtc_user_details_provider`](#rtc_user_details_provider)

{% include configuration/rtc_server_disconnected.md %}

{% include configuration/rtc_user_details_provider.md %}

## Optional configuration

{% include configuration/rtc_snapshot.md %}

{% include configuration/rtc_initial_content_provider.md %}

{% include configuration/rtc_client_info.md %}

{% include configuration/rtc_client_connected.md %}

{% include configuration/rtc_client_disconnected.md %}

{% include configuration/rtc_unsupported_content_notification.md %}
