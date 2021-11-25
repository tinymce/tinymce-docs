---
layout: default
title: Tiny Drive third-party storage integrations
title_nav: Integrations
description: Third-party integrations to make your Tiny Drive experience smooth with the technologies you use.
type: folder
keywords: tinydrive storage googledrive dropbox
---
{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "plugins-ref" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "premium" %}
        {% for subsubentry in subentry.pages %}
          {% if subsubentry.url == "tinydrive" %}
            {% for sub3entry in subsubentry.pages %}
              {% if sub3entry.url == "integrations" %}
                {% assign links = sub3entry.pages %}
              {% endif %}
            {% endfor %}
          {% endif %}
        {% endfor %}
      {% endif %}
    {% endfor %}
  {% endif %}
{% endfor %}

{% include index.html links=links %}
