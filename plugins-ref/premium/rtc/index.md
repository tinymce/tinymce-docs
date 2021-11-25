---
layout: default
title: Real-Time Collaboration plugin
title_nav: Real-Time Collaboration (RTC)
description: The TinyMCE Real-Time Collaboration plugin
type: folder
---
{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "rtc" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
