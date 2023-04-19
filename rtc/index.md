---
layout: default
title: Real-time Collaboration plugin
title_nav: Real-time Collaboration (RTC)
description: The TinyMCE Real-time Collaboration plugin
type: folder
---
{% include rtc/admon-rtc-eol.md %}

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "rtc" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
