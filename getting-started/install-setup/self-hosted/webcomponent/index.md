---
layout: default
title: Using TinyMCE with the Webcomponent framework
title_nav: Webcomponent
description_short: A guide to using TinyMCE with the Webcomponent framework.
description: A guide to using TinyMCE with the Webcomponent framework.
type: folder
---

{% assign navigation = site.data.nav %}
{% for entry in navigation %}
  {% if entry.url == "getting-started" %}
    {% for subentry in entry.pages %}
      {% if subentry.url == "install-setup" %}
        {% for subsubentry in subentry.pages %}
          {% if subsubentry.url == "self-hosted" %}
            {% for sub3entry in subsubentry.pages %}
              {% if sub3entry.url == "webcomponent" %}
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
