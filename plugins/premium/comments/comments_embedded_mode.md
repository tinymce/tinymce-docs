---
layout: default
title: Configuring the Comments plugin in embedded mode
title_nav: Embedded mode
description: Information on configuring the Comments plugin in embedded mode
keywords: comments commenting tinycomments embedded mode
---

{% assign pluginname = "Comments" %}
{% assign plugincode = "comments" %}

## Add the Comments plugin in embeddded mode

To add the Comments plugin in embedded mode to the {{site.productname}}, configure the following options:

```js
tinymce.init({
  selector: '#textarea',
  plugins: 'tinycomments',
  tinycomments_author: 'author',
  tinycomments_author_name: 'Name of the commenter',
  tinycomments_mode: 'embedded'
})
```

This is the minimum recommended setup for the Comments plugin in embedded mode. If the `tinycomments_author` and `tinycomments_author_name` options are not configured, all users will be assigned the name "_ANON_".

## Interactive example

{% include live-demo.html id="comments-embedded" %}

## Configuration options

{% include configuration/tinycomments_author.md %}

{% include configuration/tinycomments_author_name.md %}

{% include configuration/tinycomments_can_delete.md %}

{% include configuration/tinycomments_can_resolve.md %}

{% include configuration/tinycomments_can_delete_comment.md %}

{% include configuration/tinycomments_can_edit_comment.md %}

{% include plugins/comments_open_sidebar.md %}

{% include plugins/comments_embed_fullpage_issues.md %}

{% include plugins/comments_highlighting_css.md %}
