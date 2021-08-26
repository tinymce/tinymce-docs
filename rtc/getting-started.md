---
layout: default
title: Getting started with Real-Time Collaboration (RTC)
title_nav: Getting started with RTC
description: Getting started with RTC
keywords: rtc
---

This procedure will assist with setting up {{site.productname}} with real-time collaboration.

## Prerequisites

* A {{site.cloudname}} API key from [{{site.accountpage}}]({{site.accountsignup}}).
* A JSON Web Token (JWT) key generated at [{{site.accountpageurl}}]({{site.accountpageurl}}). Temporarily store the generated keys for use in the following procedure.
* {% include misc/secure-context.md %}
* endpoints

get an API key
Generate keypair with site or locally
setup endpoints
configure the editor









## Basic Real-Time Collaboration (RTC) setup

The following example assumes you are familiar with integrating TinyMCE; if you are new TinyMCE user please follow the [basic setup guide]({{site.baseurl}}/general-configuration-guide/basic-setup/) first.

This example shows how to get the Real-Time Collaboration (RTC) plugin up and running using hardcoded values. For a production setup, the document ID and secret would be retrieved from your server. This example also assumes that a JWT provider endpoint exists at '/jwt'. For information on setting up a JWT endpoint, see: [JWT authentication]({{site.baseurl}}/rtc/jwt-authentication/).

This example shows the minimum required configuration for the Real-Time Collaboration plugin.

{% include rtc/rtc-min-configuration-example.md %}

### Additional resources

The following resources provide additional information on setting up the RTC plugin for {{site.productname}}.

* For information on JSON Web Tokens (JWT) and setting up JWT authentication for the RTC plugin, see: [JWT authentication]({{site.baseurl}}/rtc/jwt-authentication/).
* For details on the available configuration options, see: [Configuration Options]({{site.baseurl}}/rtc/configuration/).

## Need help?

{{site.companyname}} is striving to make RTC as useful and simple as possible. For support related issues, such as problems with JWT authentication and implementing RTC, contact [{{site.supportname}}]({{site.supporturl}}).
