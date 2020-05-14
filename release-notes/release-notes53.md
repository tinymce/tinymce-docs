---
layout: default
title: TinyMCE 5.3
title_nav: TinyMCE 5.3
description: Release notes for TinyMCE 5.3
keywords: releasenotes bugfixes
---

These release notes provide an overview of the changes for {{site.productname}} 5.3, including:

- [TinyMCE 5.3 new features and enhancements](#tinymce52newfeaturesandenhancements)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Minor changes for TinyMCE 5.3](#minorchangesfortinymce52)
- [General bug fixes](#generalbugfixes)
- [Deprecated features](#deprecatedfeatures)
- [Known issues](#knownissues)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

> This is the {{site.cloudname}} and {{site.enterpriseversion}} release notes. For information on the latest community version of {{site.productname}}, see: [{{site.productname}} Changelog]({{site.baseurl}}/changelog/).

## TinyMCE 5.3 new features and enhancements

The following new features and enhancements were added for the {{site.productname}} 5.3 release.

### Moved the 'enabled' checkmark on toggle menu items to the right-hand side

The checkmark on toggle menu items that indicates that an option is enabled, has been moved. The checkmark will now appear to the right of the menu label. This change provides clearer feedback to users and allows icons to be added to toggle menu items.
For example:

| {{site.productname}} 5.2 toggle menu item checkmark behavior | {{site.productname}} 5.3 toggle menu item checkmark behavior |
| :-----------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: |
| ![Custom toggle menu item with checkmark on the left-hand side of the item label (pre-5.3 behavior)]({{site.baseurl}}/images/old_togglemenuitemchecked.png) | ![Custom toggle menu item with checkmark on the right-hand side of the item label (5.3+ behavior)]({{site.baseurl}}/images/53_togglemenuitemchecked.png) |

For information on toggle menu items, see: [Custom menu items - Toggle menu items]({{site.baseurl}}/ui-components/menuitems/#togglemenuitems).

### 


## Accompanying Premium Plugin changes

The following premium plugins updates were released alongside {{site.productname}} 5.3.

### Comments 2.1.4

The {{site.productname}} 5.3 release includes an accompanying release of the **Comments** premium plugin.

**Comments** 2.1.4 adds icons for the **Add Comment** (`addcomment`) and **Show Comments** (`showcomments`) menu items.

For information on the Comments plugin, see: [Comments plugin]({{site.baseurl}}/plugins/comments/).

For a list of valid menu items, see: [Editor control identifiers - Menu controls]({{site.baseurl}}/advanced/editor-control-identifiers/#menucontrols).

### PowerPaste 5.3.0

The {{site.productname}} 5.3 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.3.0 adds a new `imagedrop` `source` which fires an event when dropping an image file into the editor. This `source` can be used with the PowerPaste `paste_preprocess` and `paste_postprocess` options.

For information on:

- The PowerPaste plugin, see: [PowerPaste plugin]({{site.baseurl}}/plugins/powerpaste/).
- The PowerPaste `paste_preprocess` option, see: [PowerPaste plugin - `paste_preprocess`]({{site.baseurl}}/plugins/powerpaste/#paste_preprocess).
- The PowerPaste `paste_postprocess` option, see: [PowerPaste plugin - `paste_postprocess`]({{site.baseurl}}/plugins/powerpaste/#paste_postprocess).

### Spellchecker Pro 2.0.2

The {{site.productname}} 5.3 release includes an accompanying release of the **Spellchecker Pro** premium plugin.

**Spellchecker Pro** 2.0.2

For information on the Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/tinymcespellchecker/).

## Minor changes for TinyMCE 5.3

{{site.productname}} 5.3 introduces the following minor changes:

- 

## General bug fixes

{{site.productname}} 5.3 provides fixes for the following bugs:

- 

## Deprecated features


## Known issues

This section describes issues that users of {{site.productname}} 5.3 may encounter, as well as possible workarounds for these issues.

**Outline**

* [](#)


### 

#### Issue


#### Workaround

No known workaround at the time of release.


{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
