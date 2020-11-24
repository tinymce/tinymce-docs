---
layout: default
title: RTC
title_nav: RTC
description: Real Time Collaboration
type: folder
---
{% assign navigaton = site.data.nav %}
{% for entry in navigaton %}
  {% if entry.url == "rtc" %}
    {% assign links = entry.pages %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
