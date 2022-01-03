---
layout: default
title: Key editor options for adding TinyMCE to an application
title_nav: Integration options
description: Key editor options for integrating TinyMCE to an application
keywords:
---

## Target location for {{site.productname}}

{% include configuration/selector.md %}

{% include configuration/target.md %}

## Adding placeholder content to the editor

{% include configuration/placeholder.md %}

## Focusing on the editor

{% include configuration/auto_focus.md %}


{% include configuration/custom_ui_selector.md %}

## Extend {{site.productname}} with plugins

{% include misc/plugins-or-external_plugins.md %}

{% include configuration/plugins.md %}

{% include configuration/external_plugins.md %}

## Starting the editor in a read-only state

{% include configuration/readonly.md %}

## Executing custom functions while the editor starts (initializes)

{% include configuration/setup.md %}

{% include configuration/init_instance_callback.md %}

## Changing URL used to load the editor

{% include configuration/base_url.md %}

{% include configuration/cache_suffix.md %}

{% include configuration/content_security_policy.md %}

{% include configuration/referrer_policy.md %}

{% include configuration/suffix.md %}

{% comment %}
Not documented, but probably belongs in a new section here somewhere.
{% include configuration/iframe_attrs.md %}
{% endcomment %}