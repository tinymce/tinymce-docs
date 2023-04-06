---
layout: default
title: Overview of the Real-time Collaboration configuration options
title_nav: Configuration options overview
description: List of all available RTC configuration options.
keywords: rtc configuration
---

{% assign pluginname = "Real-time Collaboration (RTC)" %}
{% assign plugincode = "rtc" %}
{% include rtc/admon-rtc-eol.md %}


## Configuration style

The Real-time Collaboration (RTC) plugin uses promise-based "provider" functions to support a variety of configuration scenarios including asynchronously fetching data from a server. Function input parameters are provided as an object, allowing unused fields to be omitted.

## Overview of RTC options

### Required configuration options

These options are _required_ when using the Real-time Collaboration (RTC) plugin.

[`rtc_document_id`]({{site.baseurl}}/rtc/configuration/rtc-options-required/#rtc_document_id)
: Provide a unique identifier for current document (editor content).

[`rtc_encryption_provider`]({{site.baseurl}}/rtc/configuration/rtc-options-required/#rtc_encryption_provider)
: Provide the editor with encryption details for encrypting the content before it is shared between collaborators.

[`rtc_token_provider`]({{site.baseurl}}/rtc/configuration/rtc-options-required/#rtc_token_provider)
: Provide the editor with a JSON Web Token (JWT) for verifying that the user has access to edit the current document.

### Recommended configuration options

These options are assist with improving the user experience. They are not required, but are recommended.

[`rtc_server_disconnected`]({{site.baseurl}}/rtc/configuration/rtc-options-optional/#rtc_server_disconnected)
: Assists with communitcating to the end-user that either:
- They have been unsuccessful in connecting to the collaboration session.
- They have lost their connection to the collaboration session.

[`rtc_user_details_provider`]({{site.baseurl}}/rtc/configuration/rtc-options-optional/#rtc_user_details_provider)
: This option:
- Allows the user's name or an alias to be shown on user "carets" in collaborative sessions, and
- Assists with providing data for:
    - The `rtc_client_connected` and `rtc_client_disconnected` options.
    - The `RtcClientConnected` and `RtcClientDisconnected` events.

### Optional configuration options

The following options assist with integrating Real-time Collaboration and improving the user experience.

[`rtc_snapshot`]({{site.baseurl}}/rtc/configuration/rtc-options-optional/#rtc_snapshot)
: Assists with autosaving the editor content during a RTC session.

[`rtc_initial_content_provider`]({{site.baseurl}}/rtc/configuration/rtc-options-optional/#rtc_initial_content_provider)
: Assists with adding _initial_ content for a newly created (initialized) editor.

[`rtc_client_info`]({{site.baseurl}}/rtc/configuration/rtc-options-optional/#rtc_client_info)
: Allows additional user details to be provided for:
- The `rtc_client_connected` and `rtc_client_disconnected` options.
- The `RtcClientConnected` and `RtcClientDisconnected` events.

[`rtc_client_connected`]({{site.baseurl}}/rtc/configuration/rtc-options-optional/#rtc_client_connected)
: Assists with notifying users that collaborators have joined a RTC session and can be used to maintain a list of connected users.

[`rtc_client_disconnected`]({{site.baseurl}}/rtc/configuration/rtc-options-optional/#rtc_client_disconnected)
: Assists with notifying users that collaborators have left a RTC session and can be used to update a list of connected users.

[`rtc_unsupported_content_notification`]({{site.baseurl}}/rtc/configuration/rtc-options-optional/#rtc_unsupported_content_notification)
: Allows integrators (developers) to disable the unsupported content notification.
