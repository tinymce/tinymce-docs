---
layout: default
title: Introduction to Real-time Collaboration (RTC)
title_nav: Introduction
description: What is RTC and what can it do
keywords: rtc introduction overview
---

{% include rtc/admon-rtc-eol.md %}

{{site.requires_5_9v}}

{% include rtc/rtc-description.md %}

## Interactive example

The following example shows two editors that are collaborating using the {{site.productname}} Real-time Collaboration plugin. All network requests made by these editors, real or simulated, are being logged to the browser console. To view the network requests, open the browser console using the **F12** keyboard key and navigate to the _Console_ tab.

{% include live-demo.html id="rtc" %}

## Features of TinyMCE Real-time Collaboration

### End-to-end encryption

The Real-time Collaboration (RTC) plugin encrypts all content sent between clients. Clients are assigned a random presence ID when they connect, which is used to transmit their cursor position, along with their _JWT user ID_. This means the {{site.productname}} cloud services can not read any data transferred or know who is editing. Content and user data is only available to the page running {{ site.productname }}.

### JSON Web Token based authentication

Some cloud services for {{site.productname}} require setting up JSON Web Token (JWT) authentication. JWTs are a common solution for communicating user authorization with web services. JWTs are used to communicate to {{site.productname}} that the user has been authorized to access {{site.cloudname}} services.

For general information on JWTs, visit: [https://jwt.io/](https://jwt.io/).

For information on using JWT authentication with the Real-time Collaboration (RTC) plugin, see: [JWT authentication]({{site.baseurl}}/rtc/jwt-authentication/).

### User Presence API

The Real-time Collaboration (RTC) plugin exports a presence API to enable tracking when users enter and leave the collaboration session. The only user information shared through the RTC server is the user id stored in the JWT `sub` claim. Other details such as the user's full name are resolved locally so the {{site.cloudname}} will never see who is actually connecting. User resolution is performed through the [`rtc_user_details_provider` option]({{site.baseurl}}/rtc/configuration/rtc-options-optional/#rtc_user_details_provider). Presence events can be received through either [configuration callbacks]({{site.baseurl}}/rtc/configuration/rtc-options-optional/#rtc_client_connected) or [editor events]({{site.baseurl}}/rtc/events#rtcclientconnected).

## Overview of how TinyMCE Real-time Collaboration works

![Conceptual diagram showing how {{site.productname}} RTC works, description below image]({{site.baseurl}}/images/RTC_conceptual_diagram.svg)

### When a new document is created

1. The initial content is set using the HTML within the element replaced by the editor, or using the [initial content option]({{site.baseurl}}/rtc/configuration/rtc-options-optional/#rtc_initial_content_provider).
1. The editor requests and receives the following on behalf of the user:

    - A JSON Web Token (JWT) from your server.
    - The encryption details from your server.

The JWT and encryption details are stored in the browser until required.

### When the editor content is changed by a user

1. The editor encrypts the content using the encryption details.
1. The encrypted content and the JWT (but not the encryption details) are sent to the RTC server.
1. The RTC server verifies that the JWT was signed by the same private key as _the public key stored on the RTC server_.
1. Once verified, the content is sent to collaborating editors where the editor will decrypt the content using the encryption details provided when the user opened the editor.
1. Once decrypted, the plugin will merge the local content and the content from the server.
1. When the content is submitted, it will be sent to your server. If snapshotting option is configured, no submission is needed as snapshots of the content will be sent to your server from the editors automatically.

## Getting started with Real-time Collaboration

For instructions for getting started with {{site.productname}} Real-time Collaboration, see: [Getting started with Real-time Collaboration (RTC)]({{site.baseurl}}/rtc/getting-started/).
