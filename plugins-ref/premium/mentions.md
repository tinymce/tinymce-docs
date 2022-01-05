---
layout: default
title: Mentions plugin
title_nav: Mentions
description: Enables @mention functionality.
keywords: mentions atmentions
---

{% assign pluginname = 'Mentions' %}
{% assign plugincode = 'mentions' %}

{% include /misc/admon_premium_plugin.md %}

The mentions plugin will present a list of users when a user types the "@" symbol followed by the beginnings of a username after it. It will then query your server using the `mentions_fetch` callback.

## Interactive example

{% include live-demo.html id="mentions" height="400" %}

{% assign pluginminimumplan = 'enterprise' %}
{% include misc/purchase-premium-plugins.md %}

## Options

These configuration options affect the execution of the `mentions` plugin. The main option that needs to be implemented is the `mentions_fetch` callback.

{% include configuration/mentions_fetch.md %}

{% include configuration/mentions_item_type.md %}

{% include configuration/mentions_min_chars.md %}

{% include configuration/mentions_menu_complete.md %}

{% include configuration/mentions_menu_hover.md %}

{% include configuration/mentions_selector.md %}

{% include configuration/mentions_select.md %}

## API

### `getUsers`

You can retrieve the inserted users by calling `getUsers` on the plugin instance object of an editor. This will return an array of users that the author `@mentioned` in the content, but only the ones currently present in the content and will exclude any existing before the content was created. It will also exclude duplicate inserts by using the `userInfo` objects id property.

#### Example: Using the `getUsers` API

```js
var users = tinymce.activeEditor.plugins.mentions.getUsers();
console.log(users);
```
