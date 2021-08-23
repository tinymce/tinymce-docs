---
layout: default
title: Real-Time Collaboration plugin
title_nav: Real-Time Collaboration (RTC)
description: The TinyMCE Real-Time Collaboration plugin
type: folder
---
{% assign navigaton = site.data.nav %}
{% for entry in navigaton %}
  {% if entry.url == "rtc" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
