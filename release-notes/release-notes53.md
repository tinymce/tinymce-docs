---
layout: default
title: TinyMCE 5.3
title_nav: TinyMCE 5.3
description: Release notes for TinyMCE 5.3
keywords: releasenotes bugfixes
---

These release notes provide an overview of the changes for {{site.productname}} 5.3, including:

- [TinyMCE 5.3 new features and enhancements](#tinymce53newfeaturesandenhancements)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Minor changes for TinyMCE 5.3](#minorchangesfortinymce53)
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

### New find and replace in selection functionality

A new "Find in selection" option has been added to the Find and Replace dialog provided by the Search and Replace plugin.

For example:

![Find and Replace dialog with new "Find in selection" option highlighted]({{site.baseurl}}/images/find-replace-in-selection.png)

For information on enabling the Find and Replace dialog, see: [the Search and Replace plugin]({{site.baseurl}}/plugins/searchreplace/).

### Multiple context toolbars can now be concatenated

In situations where more than one context toolbar could be shown, they will be concatenated instead of prioritizing one of the context toolbars. This includes context toolbars provided by the Quick Toolbars plugin.

For information on:

- The Quick Toolbars plugin, see: [The Quick Toolbars plugin]({{site.baseurl}}/plugins/quickbars/).
- Creating custom context toolbars, see: [Context toolbars]({{site.baseurl}}/ui-components/contexttoolbar/).

### New Greek premium language pack

A Greek (`el`) language pack is now provided for the {{site.productname}} user interface. This language pack is available for {{site.cloudname}} and premium self-hosted deployments.

For information on using the language setting and a list of supported languages for {{site.cloudname}} and premium self-hosted deployments, see: [Localization options - language]({{site.baseurl}}/configure/localization/#language).

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.3.

### Accessibility Checker 2.2.1

The {{site.productname}} 5.3 release includes an accompanying release of the **Accessibility Checker** premium plugin.

**Accessibility Checker** 2.2.1 adds translations for features added in **Accessibility Checker** 2.2.0.

For information on the Accessibility Checker plugin, see: [Accessibility Checker plugin]({{site.baseurl}}/plugins/a11ychecker/).

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

* Added `uploadUri` and `blobInfo` to the data returned by `editor.uploadImages()`.
* Added a new function to the `BlobCache` API to lookup a blob based on the base64 data and mime type.
* Added `icon` as an optional config option to the toggle menu item API.
* Changed the `link`, `image`, and `paste` plugins to use Promises to reduce the bundle size.
* Changed the default icons to be lazy loaded during initialization.
* Changed the parsing of content so base64 encoded urls are converted to blob urls.
* Changed context toolbars so they concatenate when more than one is suitable for the current selection.
* Changed inline style element formats (strong, b, em, i, u, strike) to convert to a span on format removal if a `style` or `class` attribute is present.

## General bug fixes

{{site.productname}} 5.3 provides fixes for the following bugs:

* Fixed the image upload error alert also incorrectly closing the image dialog.
* Fixed the `selection.setContent()` API not running parser filters.
* Fixed formats incorrectly applied or removed when table cells were selected.
* Fixed the `quickimage` button not restricting the file types to images.
* Fixed search and replace ignoring text in nested contenteditable elements.
* Fixed resize handlers displaying in the wrong location sometimes for remote images.
* Fixed table picker breaking in Firefox on low zoom levels.
* Fixed issue with loading or pasting contents with large base64 encoded images on Safari.
* Fixed supplementary special characters being truncated when inserted into the editor. Patch contributed by mlitwin.
* Fixed toolbar buttons not set to disabled when the editor is in readonly mode.
* Fixed the editor selection incorrectly changing when removing caret format containers.
* Fixed bug where title, width, and height would be set to empty string values when updating an image and removing those attributes using the image dialog.
* Fixed `ObjectResized` event firing when an object wasn't resized.
* Fixed `ObjectResized` and `ObjectResizeStart` events incorrectly fired when adding or removing table rows and columns.
* Fixed the placeholder not hiding when pasting content into the editor.
* Fixed an issue where the editor would fail to load if local storage was disabled.
* Fixed an issue where an uploaded image would reuse a cached image with a different mime type.
* Fixed bug where toolbars and dialogs would not show if the body element was replaced (e.g. with Turbolinks). Patch contributed by spohlenz.
* Fixed an issue where multiple formats would be removed when removing a single format at the end of lines or on empty lines.
* Fixed zero-width spaces incorrectly included in the `wordcount` plugin character count.
* Fixed a regression introduced in 5.2.0 whereby the desktop `toolbar_mode` setting would incorrectly override the mobile default setting.
* Fixed an issue where deleting all content in a single cell table would delete the entire table.

## Deprecated features

The `images_dataimg_filter` option has been deprecated with the release of {{site.productname}} 5.3 and may be removed in a future release of {{site.productname}}. This option can be used for an unintended use-case that will likely be incompatible with the future introduction of real-time collaboration support.

For information on:

- The `images_dataimg_filter` option, see: [Image & file upload options - images_dataimg_filter]({{site.baseurl}}/configure/file-image-upload/#images_dataimg_filter).
- The future introduction of real-time collaboration, see: [Tiny Blueprint - Collaboration needs a clean Slate]({{site.url}}/blog/real-time-collaborative-editing-slate-js/).


## Known issues

This section describes issues that users of {{site.productname}} 5.3 may encounter, as well as possible workarounds for these issues.

**Outline**

* [Find and replace in selection feature missing content selection for inline editors and IE 11](#findandreplaceinselectionfeaturenotworkingasexpectedforinlineeditorsandie11)
* [Spanish (Mexico) UI text translations missing for features added in 5.2 and 5.3](#spanishmexicouitexttranslationsmissingforfeaturesaddedin52and53)

### Spanish (Mexico) UI text translations missing for features added in 5.2 and 5.3

#### Issue

The Spanish (Mexico) language pack (`es_MX`) provided for {{site.cloudname}} and {{site.productname}} premium self-hosted customers is missing translations for new and changed user interface features added in {{site.productname}} 5.2 and {{site.productname}} 5.3.

#### Workaround

No known workaround at the time of release.

### Find and replace in selection feature missing content selection for inline editors and IE 11

#### Issue

The new find (and replace) in selection feature does not show the content selection when the dialog is open. The find and replace in selection functions will still work, but the selection is not shown.

This issue affects:

- Inline editors (`inline: true`).
- Any {{site.productname}} 5.3 editor when used on Microsoft Internet Explorer 11.

#### Workaround

No known workaround at the time of release.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
