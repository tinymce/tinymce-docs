---
layout: default
title: Beta access
title_nav: Beta access
description: Beta specific access and setup
keywords: rtc
---

> **Important**: The Real-Time Collaboration beta is invite only.

## Joining the beta

To register your interest in the beta program for {{site.productname}} Real-Time Collaboration (RTC), join the {{site.betaprogram}}. {{site.companyname}} will contact you with further details.

To join the {{site.betaprogram}}, visit the [{{site.betaprogram}}]({{site.betaprogramurl}}).


## Accessing the RTC beta plugin

Once you have been invited into the RTC beta program, to try the RTC beta plugin:

* Set up a {{site.accountpage}}.
* Configure {{site.productname}} to use the {{site.cloudname}} development channel.
* Add the RTC plugin and configuration options to {{site.productname}}.

### Set up a {{site.accountpage}}

The RTC beta plugin is only available for {{site.cloudname}} deployments and requires a new or existing {{site.accountpage}} API Key.

To create a {{site.accountpage}}, visit the [{{site.accountpage}} sign-up page]({{site.accountsignup}}).

### Configure {{site.productname}} to use the {{site.cloudname}} development channel

To access the {{site.cloudname}} development channel (`5-dev`), source {{site.productname}} using the following script:

```js
<script src="{{site.cdnurl_dev}}" referrerpolicy="origin"></script>
```

Replace `no-api-key` in the source script (`<script src=...`) with a {{site.accountpage}} API key, which is created when signing up to [{{site.accountpage}}]({{site.accountsignup}}).

> **Note**: The official React, Angular, and Vue {{site.productname}} integrations use either the `cloudChannel` or `cloud-channel` attribute for specifying the {{site.cloudname}} channel. For information on using the React, Angular, or Vue integrations, see: [TinyMCE Integrations]({{site.baseurl}}/integrations/).

### Add the RTC plugin and configuration options to {{site.productname}}

For information on:

* The current state of the RTC beta plugin, including supported features, see: [RTC Beta plugin - Introduction]({{site.baseurl}}/rtc/introduction/).
* Adding the required RTC configuration options, see: [RTC Beta plugin - Getting started with RTC]({{site.baseurl}}/rtc/getting-started/).

## Need help?

During the closed beta for the RTC plugin, {{site.companyname}} software developers will work with participants to address support issues. {{site.companyname}} appreciates any feedback provided by users, and we encourage any feedback on improvements for the product and the support provided.

{{site.companyname}} is striving to make RTC as useful and simple as possible. For support related issues, such as problems with JWT authentication and implementing RTC, contact [{{site.supportname}}]({{site.supporturl}}).
