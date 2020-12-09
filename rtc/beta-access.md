---
layout: default
title: Beta access
title_nav: Beta access
description: Beta specific access and setup
keywords: rtc
---

{% assign beta_feature = "The RTC plugin" %}
{% assign pre-release_type = "Closed Beta" %}

## Step by step, beta access
If you’re interested in taking part in the beta for Real Time Collaboration (RTC), we invite you to join the Tiny Insights Program. Our Product team will be in touch as we routinely expand access to our newest beta plugin.

[Join Tiny Insights Program]({{site.baseurl}}/insights-program/)

> Within a day or two we will get in touch regarding availability into the beta program, keep an eye on your inbox.

## Cloud account required
The RTC functionality is only available in our cloud deployments for now, this means you need to have a Tiny Cloud account and API key in order to proceed, you do not need to have a paid subscription, just any cloud account will do.

[Get a cloud account here]({{site.baseurl}}/auth/signup/)

## Use the 5-dev channel
After you get beta access turned on your account, the way to run the beta right now, is to fully use cloud and load TinyMCE via the 5-dev channel.

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5-dev/tinymce.min.js" referrerpolicy="origin"></script>
```
> Be sure to input your cloud API key into that URL as well.

If you are using any of the React/Angular/Vue [integrations]({{site.baseurl}}/integration/), refer to their documentation on how to change the channel.

## Configure TinyMCE for RTC
You have gone through the beta specific process now, and can continue to follow a long with the documentation.

We highly suggest you start by looking into the [introduction]({{site.baseurl}}/rtc/introduction/) documentation to get an overview, then continue to the [getting started]({{site.baseurl}}/rtc/getting-started/) page.

> Since this is a closed beta, you will be able to communicate to our devs directly with any issues you might have. We would appreciate ANY feedback you can give us.

## Need help?

{{site.companyname}} is striving to make RTC as useful and simple as possible. For support related issues, such as problems with JWT authentication and implementing RTC, contact [{{site.supportname}}]({{site.supporturl}}).
