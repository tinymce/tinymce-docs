---
layout: default
title: Recommended and optional Real-Time Collaboration configuration options
title_nav: Recommended and optional configuration options
description: List of all recommended and optional RTC configuration options.
keywords: rtc configuration
---

{% assign pluginname = "Real-Time Collaboration (RTC)" %}
{% assign plugincode = "rtc" %}

This section covers the recommended and optional configuration options for the RTC plugin. None of these options are required but assist with creating a consistent user experience between your application and {{site.productname}} {{pluginname}}.

## Recommended configuration options

For the best user experience, {{site.companyname}} recommends including these configuration options:

* [`rtc_server_disconnected`](#rtc_server_disconnected)
* [`rtc_user_details_provider`](#rtc_user_details_provider)

{% include configuration/rtc_server_disconnected.md %}

{% include configuration/rtc_user_details_provider.md %}

## Optional configuration options

The following configuration options have been provide to assist with integrating {{pluginname}} into webpages and applications:

* [`rtc_snapshot`](#rtc_snapshot)
* [`rtc_initial_content_provider`](#rtc_initial_content_provider)
* [`rtc_client_info`](#rtc_client_info)
* [`rtc_client_connected`](#rtc_client_connected)
* [`rtc_client_disconnected`](#rtc_client_disconnected)
* [`rtc_unsupported_content_notification`](#rtc_unsupported_content_notification)

{% include configuration/rtc_snapshot.md %}

{% include configuration/rtc_initial_content_provider.md %}

{% include configuration/rtc_client_info.md %}

{% include configuration/rtc_client_connected.md %}

{% include configuration/rtc_client_disconnected.md %}

{% include configuration/rtc_unsupported_content_notification.md %}
