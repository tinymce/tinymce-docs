---
layout: default
title: TinyMCE 5.10.6
title_nav: TinyMCE 5.10.6
description: Release notes for TinyMCE 5.10.6
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.10.6 was released for {{site.enterpriseversion}} and {{site.cloudname}} on October 26 26<sup>th</sup>, 2022. It includes {{site.productname}} 5.10.6. These release notes provide an overview of the changes for {{site.productname}} 5.10.6, including:

- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Bug fixes](#bugfixes)
- [Changes](#changes)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.10.6.

### PowerPaste 5.6.2

The {{site.productname}} 5.10.6 release includes an accompanying release of the **PowerPaste** premium plugin.

#### If URL paths contained either a colon or an exclamation point (or both) PowerPaste’s link detection logic failed

If a colon or an exclamation point — `:` or `!` — was present in the path portion of a URL, PowerPaste’s link detection logic treated the characters as, in effect, end-of-path boundaries. As a consequence, while the string was pasted into {{site.productname}}, the expected link was incomplete and incorrect.

For example, pasting the string

`https://example.com/!exclamation-point`

resulted in the following, incomplete, link and trailing text

```html
<a href="https://example.com/">https://example.com/</a>!exclamation-point
```
Equivalent results occurred when URL paths contained the colon character (for example, `https://example.com/:colon`).

With this update, the link detection logic has been improved to capture and present such URLs correctly.

Now, pasting the string 

`https://example.com/!exclamation-point`

results in the following, complete, link and no trailing text

```html
<a href="https://example.com/!exclamation-point">https://example.com/!exclamation-point</a>
```

> **NOTE**: Exclamation points and colons are still boundary characters for URL detection and delimiting. If the string `https://example.com/colon:` is pasted or typed into a {{site.productname}} document, automatic link detection will produce a link that does not include the trailing colon character.

For information on the PowerPaste plugin, [PowerPaste plugin]({{site.baseurl}}plugins/premium/powerpaste/)..


## Bug fixes

{{site.productname}} 5.10.6 provides fixes for the following bugs:

### The name and id attributes of some elements were incorrectly removed during serialization

Previously, when {{site.productname}} serialized an object, a bug in the SaxParser incorrectly removed `name` and `id` attributes from some elements (for example, `img` and `iframe` elements, among others).

This occurred in several circumstances but could be demonstrated by adding, for example, an image with `id` and `name` attributes to a {{site.productname}} instance and then choosing **Tools > Source code** from the menu bar.

The displayed source code did not include the `id` and `name` attributes.

With this update, {{site.productname}} includes a change in the filtering that prevents the attribute stripping. Consequently, serialization no longer strips attributes from elements.

> **NOTE**: The {{site.productname}} 5.10.6 SaxParser method now works the same way as it does in {{site.productname}} 6.

### Notifications did not properly reposition when toggling fullscreen mode

A {{site.productname}} toolbar option, *Fullscreen*, toggles the {{site.productname}} editor between the size it takes by default and, as the toolbar’s name suggests, fullscreen. Fullscreen is the largest size available to the editor (ie, taking up all the space available to {{site.productname}} in the browser).

If a {{site.productname}} instance had a custom notification, `+editor.notificationManager.open()+`, set to display when the *Fullscreen* button was used, toggling from Fullscreen back to default resulted in the notification displaying outside the {{site.productname}} editor.

{{site.productname}} 5.10.6 corrects this. When toggling between the two *Fullscreen* states, custom notifications now display immediately below the toolbar in either state, as expected.


## Changes

{{site.productname}} 5.10.6 also includes the following change:

### Toggling fullscreen mode with the `fullscreen` plugin now also fires the `ResizeEditor` event

A bug in fullscreen mode toggling, in which notifications did not properly reposition, was addressed for this {{site.productname}} release.

As part of that fix, a change was made to the `fullscreen` plugin.

As of {{site.productname}} 5.10.6, toggling fullscreen mode with the `fullscreen` plugin also fires the `ResizeEditor` event.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
