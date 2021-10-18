---
layout: default
title: Advanced List plugin
title_nav: Advanced List
description: Create styled number and bulleted lists.
keywords: advlist advlist_bullet_styles advlist_number_styles
---

The `advlist` plugin extends the core `bullist` and `numlist` toolbar controls by adding CSS `list-style-type` styled number formats and bullet types to the controls.

> **Important**: The [Lists]({{site.baseurl}}/plugins/opensource/lists/) (`lists`) plugin must be activated for the `advlist` plugin to work.

## Basic setup

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'lists advlist'
});
```

## Options

These settings affect the execution of the `advlist` plugin by providing more granular control of list styles.

{% include configuration/advlist_bullet_styles.md %}

{% include configuration/advlist_number_styles.md %}

## Commands

The Advanced Lists plugin provides the following JavaScript commands.

{% include commands/advlist-cmds.md %}