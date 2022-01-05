---
layout: default
title: Context toolbar
title_nav: Context toolbar
description: Creating custom context toolbars for TinyMCE 6
keywords: contexttoolbar context toolbar contexttoolbarapi
---

A context toolbar can only contain either buttons that are defined for a normal toolbar, or buttons specifically registered for launching a [ContextForm]({{site.baseurl}}/ui-components/contextform/). The buttons comes as a list of strings, where each string is a registered name of a button.

## Registering a context toolbar

A context toolbar is registered by calling the `addContextToolbar` API in the registry. The specification is as follows:

| Name | Description |
| ---- | ----------- |
| `predicate` | This controls when the context toolbar will appear |
| `position` | This controls where the context toolbar will appear with regards to the current cursor |
| `scope` | This controls whether the predicate is a `node`-based predicate, or an `editor`-based predicate. See context toolbar proirity section below, for more details. |
| `items` | A list of strings which represent either a registered toolbar button, or a registered context form launcher. |

{% include context/positioning.md %}

## Example configuration

This example shows how the quickbars plugin adds the standard selection context toolbar and an example of a custom toolbar for image alignment. The context toolbar will show whenever any content is selected.

{% include live-demo.html id="context-toolbar" height="600" tab="js" %}

## Launching a context toolbar programmatically

There is an `editor` event called `contexttoolbar-show` that can be fired to show a context toolbar at the current selection. The event takes a parameter `toolbarKey` which specifies the name of the registered context form or context toolbar to show.

{% include context/priority.md %}
