---
layout: default
title: PowerPaste
title_nav: PowerPaste
description: The PowerPaste plugin
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "plugins-ref" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "premium" %}
        {% for subsubentry in subentry.pages %}
          {% if subsubentry.url == "powerpaste" %}
            {% assign links = subsubentry.pages %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}