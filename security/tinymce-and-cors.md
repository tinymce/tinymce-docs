---
layout: default
title: The TinyMCE Cross-Origin Resource Sharing guide
title_nav: Cross-Origin Resource Sharing (CORS)
description: Information and options related to using TinyMCE with Cross-Origin Resource Sharing (CORS)
keywords: security cors
---

## Cross-Origin Resource Sharing related options

{% include configuration/referrer_policy.md %}

{% include configuration/content_css_cors.md %}

{% assign plugincode = "export" %}
{% include configuration/image_cors_hosts.md %}

{% assign plugincode = "imagetools" %}
{% include configuration/image_cors_hosts.md %}
