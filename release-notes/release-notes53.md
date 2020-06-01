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

### New toolbar location default setting

{{site.productname}} 5.3 includes a new default, `auto`, for the `toolbar_location` option. The `auto` option positions the toolbar and menu bar either:

- Above the content area by default.
- Below the content area if there is not enough space to display the toolbar and menu bar above.

This new default setting has been added to improve the user experience for the editor in inline mode.

For information on:

- The `toolbar_location` option, see: [User interface options - toolbar_location]({{site.baseurl}}/configure/editor-appearance/#toolbar_location).
- {{site.productname}} in inline mode, see: [Setup inline editing mode]({{site.baseurl}}/general-configuration-guide/use-tinymce-inline/#enablinginlineeditingmode).

### Moved the 'enabled' checkmark on toggle menu items to the right-hand side

The checkmark on toggle menu items that indicates that an option is enabled, has been moved. The checkmark will now appear to the right of the menu label. This change provides clearer feedback to users and allows icons to be added to toggle menu items.
For example:

| {{site.productname}} 5.2 toggle menu item checkmark behavior | {{site.productname}} 5.3 toggle menu item checkmark behavior |
| :-----------------------------------------------------------------------------------------------: | :------------------------------------------------------------------------------------------: |
| ![Custom toggle menu item with checkmark on the left-hand side of the item label (pre-5.3 behavior)]({{site.baseurl}}/images/old_togglemenuitemchecked.png) | ![Custom toggle menu item with checkmark on the right-hand side of the item label (5.3+ behavior)]({{site.baseurl}}/images/53_togglemenuitemchecked.png) |

For information on toggle menu items, see: [Custom menu items - Toggle menu items]({{site.baseurl}}/ui-components/menuitems/#togglemenuitems).

## Accompanying Premium Plugin changes

The following premium plugins updates were released alongside {{site.productname}} 5.3.

### Comments 2.1.4

The {{site.productname}} 5.3 release includes an accompanying release of the **Comments** premium plugin.

**Comments** 2.1.4 adds icons for the **Add Comment** (`addcomment`) and **Show Comments** (`showcomments`) menu items.

For information on the Comments plugin, see: [Comments plugin]({{site.baseurl}}/plugins/comments/).

For a list of valid menu items, see: [Editor control identifiers - Menu controls]({{site.baseurl}}/advanced/editor-control-identifiers/#menucontrols).

### Enhanced Media Embed

The {{site.productname}} 5.3 release includes accompanying changes affecting the {{site.productname}} **self-hosted** **Enhanced Media Embed** service. {{site.cloudname}} users are unaffected. For details, see: [Accompanying premium self-hosted server-side component changes](#accompanyingpremiumself-hostedserver-sidecomponentchanges).

### Image Tools Proxy

The {{site.productname}} 5.3 release includes accompanying changes affecting the {{site.productname}} **self-hosted** **Image Tools Proxy** service. {{site.cloudname}} users are unaffected. For details, see: [Accompanying premium self-hosted server-side component changes](#accompanyingpremiumself-hostedserver-sidecomponentchanges).

### Link Checker

The {{site.productname}} 5.3 release includes accompanying changes affecting the {{site.productname}} **self-hosted** **Link Checker** service. {{site.cloudname}} users are unaffected. For details, see: [Accompanying premium self-hosted server-side component changes](#accompanyingpremiumself-hostedserver-sidecomponentchanges).

### PowerPaste 5.3.0

The {{site.productname}} 5.3 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.3.0 adds a new `imagedrop` `source` which fires an event when dropping an image file into the editor. This `source` can be used with the PowerPaste `paste_preprocess` and `paste_postprocess` options.

For information on:

- The PowerPaste plugin, see: [PowerPaste plugin]({{site.baseurl}}/plugins/powerpaste/).
- The PowerPaste `paste_preprocess` option, see: [PowerPaste plugin - `paste_preprocess`]({{site.baseurl}}/plugins/powerpaste/#paste_preprocess).
- The PowerPaste `paste_postprocess` option, see: [PowerPaste plugin - `paste_postprocess`]({{site.baseurl}}/plugins/powerpaste/#paste_postprocess).

### Spell Checker Pro 2.0.2

The {{site.productname}} 5.3 release includes an accompanying release of the **Spell Checker Pro** premium plugin.

**Spell Checker Pro** 2.0.2 includes fixes for the following issues:

- Performance issues in large documents with lots of tables.
- Spellchecking not running while scrolling in inline mode.
- Spellchecking performance issues when using the `autoresize` plugin.
- Missing `spell-check` icons on Spell Checker Pro menu items.
- Spellchecking incorrectly moving the editor selection into non-editable elements.

The {{site.productname}} **self-hosted** **Spell Checker Pro** service has also been updated. {{site.cloudname}} users are unaffected. For details, see: [Accompanying premium self-hosted server-side component changes](#accompanyingpremiumself-hostedserver-sidecomponentchanges).

For information on Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/tinymcespellchecker/).

## Accompanying premium self-hosted server-side component changes

The {{site.productname}} 5.3 release includes accompanying changes affecting the {{site.productname}} **self-hosted** services for the following plugins:

- The Enhanced Media Embed plugin (`mediaembed`)
- The Image Tools plugin (`imagetools`)
- The Link Checker plugin (`linkchecker`)
- The Spell Checker Pro plugin (`tinymcespellchecker`)

The Java server-side components (`ephox-spelling.war`, `ephox-hyperlinking.war`, and `ephox-image-proxy.war`) have been updated to **version 2.3.0**.

This version requires Java 8 or higher. For information on the removal of Java 7 support, see: [Removal of Java 7 support](#removalofjava7support).

For information on:

- The Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/tinymcespellchecker/).
- The Link Checker plugin, see: [Link Checker plugin]({{site.baseurl}}/plugins/linkchecker/).
- The Image Tools plugin, see: [Image Tools plugin]({{site.baseurl}}/plugins/imagetools/).
- The Enhanced Media Embed plugin, see: [Enhanced Media Embed plugin]({{site.baseurl}}/plugins/mediaembed/).
- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).

### Removal of Java 7 support

Java 7 support has been removed with this release. The {{site.productname}} Java server-side components now require a minimum of Java 8. From the {{site.productname}} 5.3 release, the `.war` files provided in the self-hosted bundles will not be compatible with Java 7. This change resolves security issues present in the older versions of these services. The following plugins are affected by this change:

- SpellChecker Pro (`tinymcespellchecker`) - `ephox-spelling.war` has been updated to version `2.3.0`.
- Image Tools (`imagetools`) - `ephox-image-proxy.war` has been updated to version `2.3.0`.
- Enhanced Media Embed (`mediaembed`) - `ephox-hyperlinking.war` has been updated to version `2.3.0`.
- Link Checker (`linkchecker`) - `ephox-hyperlinking.war` has been updated to version `2.3.0`.

### Pre-configured Dockerfiles for containerizing the server-side components

From {{site.productname}} 5.3, premium self-hosted bundles include the files required to build and deploy the server-side components as Docker containers. For information on Docker deployments of the server-side components, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

For information on deploying the server-side components using Docker, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

### Regular Expression support for allowed-origins

Version 2.3.0 of the {{site.productname}} server-side components adds support for using regular expressions to specify `allowed-origins`. For information on using regular expressions for specifying allowed origins, see: [Configure server-side components - Regular Expressions support]({{site.baseurl}}/enterprise/server/configure/#regularexpressionssupport).

### New configuration option for simplifying same-origin deployments

The new `same-origin` option allows all cross-origin requests to be blocked by the server while allowing all same-origin requests.

For information on configuring the same-origin option, see: [Configure server-side components - allowed-origins.same-origin (optional)]({{site.baseurl}}/enterprise/server/configure/#allowed-originssame-originoptional).

### New alternative http timeout settings

Three new http timeout settings have been added to the server-side components. These new settings provide greater control over the timeout length of requests that the existing `request-timeout-seconds` configuration setting.

For information on configuring the alternative http timeout settings, see: [Configure server-side components - Alternative http timeout settings]({{site.baseurl}}/enterprise/server/configure/#alternativehttptimeoutsettings).

### New `fallback-to-get` setting for the Link Checker service

The new `fallback-to-get` configuration setting allows the Link checker can correctly identify working URLs that return non-standard `HEAD` replies.

For information on configuring the Link Checker service, see: [Configure server-side components - `link-checking`]({{site.baseurl}}/enterprise/server/configure/#link-checkingoptional)

## Minor changes for TinyMCE 5.3

{{site.productname}} 5.3 introduces the following minor changes:

- 

## General bug fixes

{{site.productname}} 5.3 provides fixes for the following bugs:

- 

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
