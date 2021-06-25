---
layout: default
title: Introduction to Tiny Comments
title_nav: Introduction
description: Tiny Comments provides the ability to add comments to the content and collaborate with other users for content editing.
keywords: comments commenting tinycomments
---

{% assign pluginname = "Comments" %}
{% assign plugincode = "comments" %}

## Contents

* For help using comments in TinyMCE, see: [Using comments]({{site.baseurl}}/plugins/premium/comments/comments_end-user_docs/).
* For an overview of the TinyMCE Comments plugin, see: [Overview](#overview).
* For information on adding and configuring the comments plugin for TinyMCE, see: [Getting started with the Comments plugin - Selecting a mode](#gettingstartedwiththecommentsplugin-selectingamode).

## Overview

{{site.premiumplugin}}

The Comments plugin provides the ability to start or join a conversation by adding comments to the content within the {{site.productname}} editor.

### Collaborate on your projects within your content

The Comments plugin provides:

* A **user interface** to collaborate on content by creating and replying to comments.
* A way to control the delete and resolve operations on a comment or comment thread.

### Primary Comments functions

The Comments plugin allows the user to perform the following functions:

* Create a comment
* Edit a comment
* Reply to a comment
* Lookup a comment
* Resolve a comment or comment thread
* Delete a comment or comment thread

### Interactive example

The following example shows how to configure the Comments plugin in **embedded** mode. For information on configuring the Comments plugin, see: [Comments plugin Modes](#gettingstartedwiththecommentsplugin-selectingamode).

{% include live-demo.html id="comments-embedded" %}

## Getting started with the Comments plugin - Selecting a mode

The Comments plugin is available in two _modes_: **Embedded mode** and **Callback mode**.

Embedded Mode
: This mode stores the comments within the content. No callbacks need to be configured for this mode.
: For instructions on configuring the Comments plugin in embedded mode, see: [Configuring the Comments plugin Comments in embedded mode]({{site.baseurl}}/plugins/premium/comments/comments_embedded_mode/)

Callback Mode
: This is the default mode for the Comments plugin. This mode is used to store the comments outside the content on a server, such as a database. This mode requires a number of callback functions to handle comment data.
: For instructions on configuring the Comments plugin  in callback mode, see: [Configuring the Comments plugin in callback mode]({{site.baseurl}}/plugins/premium/comments/comments_callback_mode/)
