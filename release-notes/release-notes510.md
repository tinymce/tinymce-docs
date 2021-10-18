---
layout: default
title: TinyMCE 5.10
title_nav: TinyMCE 5.10
description: Release notes for TinyMCE 5.10
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.10 was released for {{site.enterpriseversion}} and {{site.cloudname}} on <<`WEEKDAY`, `MMM` `D`<sup>`st|nd|th`</sup>, `YYYY`>>. It includes {{site.productname}} 5.10 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.10, including:

- [New features](#newfeatures)
- [Enhancements](#enhancements)
- [Functionality changes](#functionalitychanges)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Accompanying Premium self-hosted server-side component changes](#accompanyingpremiumself-hostedserver-sidecomponentchanges)
- [General bug fixes](#generalbugfixes)
- [Security fixes](#securityfixes)
- [Deprecated features](#deprecatedfeatures)
- [Known issues](#knownissues)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## New features

{{site.productname}} 5.10 introduces the following minor new features:

- Added a new `URI.isDomSafe(uri)` API to check if a URI is considered safe to be inserted into the DOM.
- Added the `ESC` key code constant to the `VK` API.
- Added a new `deprecation_warnings` setting for turning off deprecation console warning messages.

## Enhancements

{{site.productname}} 5.10 introduces the following minor enhancements:

- The `element` argument of the `editor.selection.scrollIntoView()` API is now optional, and if it is not provided the current selection will be scrolled into view.

## Functionality changes

The following functionality changes were made for the {{site.productname}} 5.10 release:

- The deprecated `scope` attribute is no longer added to `td` cells when converting a row to a header row.
- The number of `col` elements is normalized to match the number of columns in a table after a table action.

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.10.

### Premium Plugin Name X.Y.Z

The {{site.productname}} 5.10 release includes an accompanying release of the **<<Premium Plugin Name>>** premium plugin.

**<<Premium Plugin Name>>** X.Y.Z adds the following new features:

- <Description>

**<<Premium Plugin Name>>** X.Y.Z introduces the following enhancements:

- <Description>

**<<Premium Plugin Name>>** X.Y.Z provides the following bug fixes:

- <Description>

For information on the <<Premium Plugin Name>> plugin, see: [<<Premium Plugin Name>> plugin]({{site.baseurl}}/plugins/<<Premium Plugin Name>>/).

### Advanced Tables 1.2.0

The {{site.productname}} 5.10 release includes an accompanying release of the **Advanced Tables** premium plugin.

**Advanced Tables** 1.2.0 introduces the following enhancements:

- Added `getRowType` property to the series generator `info` argument. For details, see [`GeneratorInfo`]({{site.baseurl}}/plugins/premium/advtable/#generatorinfo).

**Advanced Tables** 1.2.0 provides the following bug fixes:

- The selection could be placed in an invalid location when a row numbering column was updated.

For information on the Advanced Tables plugin, see: [Advanced Tables plugin]({{site.baseurl}}/plugins/premium/advtable/).

### Real-Time Collaboration 1.1.1

The {{site.productname}} 5.10 release includes an accompanying release of the **RTC** premium plugin.

**RTC** 1.1.1 adds the following new features:

- Added support for the [`indent_use_margin`]({{site.baseurl}}/configure/content-formatting/#indent_use_margin) option.
- Added validation of document and role JWT claims. For details, see: [`Optional JWT claims`]({{site.baseurl}}/rtc/configuration/rtc-options-required/#optionaljwtclaims).
- Added support for the [`allow_unsafe_link_target`]({{site.baseurl}}/configure/content-filtering/#allow_unsafe_link_target) and [`rel_list`]({{site.baseurl}}/plugins/opensource/link/#rel_list) options.
- RTC will now automatically recover from temporary network connection issues. If the network issues are persistent it will show a disconnected notification after 30 seconds.

**RTC** 1.1.1 introduces the following enhancements:

- Improved compatibility with future server changes.
- Undo now splits local undo levels more intelligently based on remote changes.
- Crash logs now include more details about the websocket connection.
- Reduced bundle size by 21kb with Slate version 0.65.3.
- Added better error handling while establishing a session.

**RTC** 1.1.1 provides the following bug fixes:

- Images inserted by the emoticons plugin were resizable in the editor view.
- Clear Formatting did not work on collapsed selections.
- Disconnect was not clean if the page unloaded without removing the editor.

For information on the RTC plugin, see: [RTC plugin]({{site.baseurl}}/rtc/).

### Spell Checker Pro 2.5.0

The {{site.productname}} 5.10 release includes an accompanying release of the **Spell Checker Pro** premium plugin.

**Spell Checker Pro** 2.5.0 introduces the following enhancements:

- The `SpellcheckerIgnoreAll` event now includes a `language` property. For details, see [Spell Checker Pro - SpellcheckerIgnoreAll Event]({{site.baseurl}}/plugins/premium/tinymcespellchecker/#spellcheckerignoreallevent).

**Spell Checker Pro** 2.5.0 provides the following bug fixes:

- The "Ignore all" action would incorrectly affect words that were in a different language to the selected word, if they were spelled the same.

## Accompanying Premium self-hosted server-side component changes

The {{site.productname}} 5.10 release includes accompanying changes affecting the {{site.productname}} **self-hosted** services for the following plugins:

- The Enhanced Media Embed plugin (`mediaembed`)
- The Export plugin (`export`)
- The Image Tools plugin (`imagetools`)
- The Link Checker plugin (`linkchecker`)
- The Spell Checker Pro plugin (`tinymcespellchecker`)

The Java server-side components (`ephox-spelling.war`, `ephox-hyperlinking.war`, and `ephox-image-proxy.war`) have been updated to **version X.Y.Z**.

This version requires Java 8 or higher. For information on the removal of Java 7 support, see: [Removal of Java 7 support for TinyMCE 5.3 and later]({{site.baseurl}}/release-notes/release-notes53/#removalofjava7support).

For information on:

- The Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/premium/tinymcespellchecker/).
- The Link Checker plugin, see: [Link Checker plugin]({{site.baseurl}}/plugins/premium/linkchecker/).
- The Image Tools plugin, see: [Image Tools plugin]({{site.baseurl}}/plugins/opensource/imagetools/).
- The Enhanced Media Embed plugin, see: [Enhanced Media Embed plugin]({{site.baseurl}}/plugins/premium/mediaembed/).
- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).

### Updating the self-hosted server-side components

Version X.Y.Z provides updates for the Java-based server-side components. To deploy the updated version of the server-side components:

1. Update your Java Application Server to the minimum required version:

    - Eclipse Jetty 9.4 or later
    - Apache Tomcat:
        - 9 or later
        - 8.5.12+
        - 8.0.42+
        - 7.0.76+

2. Replace the existing server-side `.war` files with the `.war` files bundled with {{site.productname}} 5.10 or later.

For information on:

- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).
- Deploying the server-side components using Docker, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

## General bug fixes

{{site.productname}} 5.10 provides fixes for the following bugs:

- Fixed a regression that caused block wrapper formats to apply and remove incorrectly when using a collapsed selection with multiple words.
- Resizing table columns in some scenarios would resize the column to an incorrect position.
- Inserting a table where the parent element had padding would cause the table width to be incorrect.
- The resize backdrop element did not have the `data-mce-bogus="all"` attribute set to prevent it being included in output.
- Resize handles appeared on top of dialogs and menus when using an inline editor.
- Fixed the `autoresize` plugin incorrectly scrolling to the top of the editor content in some cases when changing content.
- Fixed the `editor.selection.scrollIntoView()` type signature, as it incorrectly required an `Element` instead of `HTMLElement`.
- Table cells that were both row and column headers did not retain the correct state when converting back to a regular row or column.
- Clicking beside a non-editable element could cause the editor to incorrectly scroll to the top of the content.
- Clicking in a table cell, with a non-editable element in an adjacent cell, incorrectly caused the non-editable element to be selected.
- Split toolbar buttons incorrectly had nested `tabindex="-1"` attributes.
- Fixed notifications rendering in the wrong place initially and when the page was scrolled.
- Fixed an exception getting thrown when the number of `col` elements didn't match the number of columns in a table.
- The table selection state could become incorrect after selecting a noneditable table cell.
- As of Mozilla Firefox 91, toggling fullscreen mode with `toolbar_sticky` enabled would cause the toolbar to disappear.
- Fixed URLs not cleaned correctly in some cases in the `link` and `image` plugins.
- Fixed the `image` and `media` toolbar buttons incorrectly appearing to be in an inactive state in some cases.
- Fixed the `editor.selection.selectorChanged` API not firing if the selector matched the current selection when registered in some cases.
- Inserting content into a `contenteditable="true"` element that was contained within a `contenteditable="false"` element would move the selection to an incorrect location.
- Dragging and dropping `contenteditable="false"` elements could result in the element being placed in an unexpected location.
- Pressing the Escape key would not cancel a drag action that started on a `contenteditable="false"` element within the editor.
- `video` and `audio` elements were unable to be played when the `media` plugin live embeds were enabled in some cases.
- Pasting images would throw an exception if the clipboard `items` were not files (for example, screenshots taken from gnome-software). Patch contributed by cedric-anne.

## Security fixes

{{site.productname}} 5.10 provides fixes for the following security issues:

- changelog

## Deprecated features

For a full list of the features deprecated since the release of {{site.productname}} 5.0, see: [List of upcoming changes for {{site.productname}} 6]({{site.baseurl}}/release-notes/6.0-upcoming-changes/).

The following features have been deprecated with the release of {{site.productname}} 5.10:

- [Plugins](#plugins)
- [Options](#options)
- [APIs](#apis)

### Plugins

Image Tools (`imagetools`)
: {{site.productname}} {{site.productminorversion}} includes the final release of the Image Tools plugin (`imagetools`) as an open source plugin. The Image Tools plugin will be removed from the open source bundle and be available as a premium plugin from {{site.productname}} 6.0.

Table of Contents (`toc`)
: {{site.productname}} {{site.productminorversion}} includes the final release of the Table of Contents (`toc`) as an open source plugin. The Table of Contents plugin will be removed from the open source bundle and be available as a premium plugin from {{site.productname}} 6.0.

### Options

The following settings are not being deprecated, but a supported value or behavior will be removed in {{site.productname}} 6.0.

toolbar_mode
: The [`toolbar_mode`]({{site.baseurl}}/configure/editor-appearance/#toolbar_mode) option will no-longer accept the `false` value in {{site.productname}} 6.0, which was retained for backwards compatibility with the `toolbar_drawer` option. Use `'wrap'` instead to keep the same functionality as `false`.

forced_root_block
: The [`forced_root_block`]({{site.baseurl}}/configure/content-filtering/#forced_root_block) option will no-longer accept the `false` value or an empty string value in {{site.productname}} 6.0. Setting `forced_root_block` to `false` is not compatible with Real-Time Collaboration. It also blocks various editor functions from working correctly and causes non-semantic HTML to be generated.

The following options have been deprecated in {{site.productname}} 5.10.

autoresize_on_init
: The [`autoresize_on_init`]({{site.baseurl}}/plugins/opensource/autoresize/#autoresize_on_init) option does not affect the autoresize behavior in {{site.productname}} 5, as the editor will always resize regardless of this option. This option would only forcibly resize at short intervals after the editor has initialized, which is no longer required and as such will be removed.

convert_fonts_to_spans
: The [`convert_fonts_to_spans`]({{site.baseurl}}/configure/content-filtering/#convert_fonts_to_spans) option would convert `font` elements to `span` styles to assist with the migration to newer HTML standards. Font elements were included in HTML 3 or earlier standards and have since been deprecated or removed.

media_scripts
: The [`media_scripts`]({{site.baseurl}}/plugins/opensource/media/#media_scripts) option is no longer useful in the modern web and did not work in most cases. As such it has been deprecated in {{site.productname}} 5.10.

paste_convert_word_fake_lists
: The Microsoft Word specific paste handling functionality will be removed from the `paste` plugin. As a result, the [`paste_convert_word_fake_lists`]({{site.baseurl}}/plugins/opensource/paste/#paste_convert_word_fake_lists) option will be removed in {{site.productname}} 6.0.

paste_retain_style_properties
: The Microsoft Word specific paste handling functionality will be removed from the `paste` plugin. As a result, the [`paste_retain_style_properties`]({{site.baseurl}}/plugins/opensource/paste/#paste_retain_style_properties) option will be removed in {{site.productname}} 6.0.

paste_word_valid_elements
: The Microsoft Word specific paste handling functionality will be removed from the `paste` plugin. As a result, the [`paste_word_valid_elements`]({{site.baseurl}}/plugins/opensource/paste/#paste_word_valid_elements) option will be removed in {{site.productname}} 6.0.

### APIs

The following API classes, methods, or properties have been deprecated in {{site.productname}} 5.10.

tinymce.Env API properties
: The following legacy properties were deprecated in {{site.productname}} 5.10

    * `tinymce.Env.fileApi`

The tinymce.dom.DomQuery API class
: The `tinymce.dom.DomQuery` class has been deprecated in {{site.productname}} 5.10. For information on the deprecated class, see: [tinymce.dom.DomQuery]({{site.baseurl}}/api/tinymce.dom/tinymce.dom.domquery/).

The tinymce.dom.Sizzle API class
: The `tinymce.dom.Sizzle` class has been deprecated in {{site.productname}} 5.10. This API class is undocumented and can be found in the {{site.productname}} source code: [GitHub - `tinymce/tinymce` - Sizzle.ts](https://github.com/tinymce/tinymce/blob/5.9.2/modules/tinymce/src/core/main/ts/api/dom/Sizzle.ts).

tinymce.html.Schema API methods
: The `getSpecialElements` method has been deprecated in {{site.productname}} 5.10. For information on the `getSpecialElements` method, see: [tinymce.html.Schema - getSpecialElements]({{site.baseurl}}/api/tinymce.html/tinymce.html.schema/#getspecialelements).

tinymce.html.Styles API methods
: The `toHex` method has been deprecated in {{site.productname}} 5.10. For information on the `toHex` method, see: [tinymce.html.Styles - tohex]({{site.baseurl}}/api/tinymce.html/tinymce.html.styles/#tohex).

tinymce API properties
: The `editors` and `settings` (undocumented) properties have been deprecated in {{site.productname}} 5.10. For information on the deprecated properties, see: [tinymce - properties]({{site.baseurl}}/api/tinymce/root_tinymce/#properties).

tinymce.AddOnManager API methods
: The `addComponents` and `dependencies` (undocumented) methods have been deprecated in {{site.productname}} 5.10. For information on the deprecated methods, see: [tinymce.AddOnManager]({{site.baseurl}}/api/tinymce/tinymce.addonmanager/).

tinymce.Editor API methods
: The `execCallback` and `setMode` methods and `validate` (undocumented) property have been deprecated in {{site.productname}} 5.10. For information on the deprecated methods, see: [tinymce.Editor - methods]({{site.baseurl}}/api/tinymce/tinymce.editor/#methods).

The tinymce.util.Color API class
: The undocumented `tinymce.util.Color` API class has been deprecated in {{site.productname}} 5.10. Details of this class can be found in the [tinymce.util.Color source code](https://github.com/tinymce/tinymce/blob/5.9.2/modules/tinymce/src/core/main/ts/api/util/Color.ts).

tinymce.util.Delay API methods
: The following API methods were deprecated in {{site.productname}} 5.10:

  * `clearInterval`
  * `clearTimeout`
  * `debounce`
  * `requestAnimationFrame`
  * `setInterval`
  * `setTimeout`
  * `throttle`

  For all methods except `debounce` and `throttle`, use the native APIs instead. For information on these methods, see: [tinymce.util.Delay - methods]({{site.baseurl}}/api/tinymce.util/tinymce.util.delay/#methods).

The tinymce.util.JSON API class
: The `tinymce.util.JSON` class has been deprecated in {{site.productname}} 5.10. Use the native [`JSON` API](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON) instead. For information on the deprecated class, see: [tinymce.util.JSON]({{site.baseurl}}/api/tinymce.util/tinymce.util.json/).

The tinymce.util.JSONRequest API class
: The `tinymce.util.JSONRequest` class has been deprecated in {{site.productname}} 5.10. For information on the deprecated class, see: [tinymce.util.JSONRequest]({{site.baseurl}}/api/tinymce.util/tinymce.util.jsonrequest/).

tinymce.util.Tools API methods
: The `create` and `createNS` methods have been deprecated in {{site.productname}} 5.10. For information on the deprecated methods, see: [tinymce.util.Tools method]({{site.baseurl}}/api/tinymce.util/tinymce.util.tools/)

The tinymce.util.XHR API class
: The `tinymce.util.XHR` class has been deprecated in {{site.productname}} 5.10. Use the native [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) instead. For information on the deprecated class, see: [tinymce.util.XHR]({{site.baseurl}}/api/tinymce.util/tinymce.util.xhr/).

## Known issues

This section describes issues that users of {{site.productname}} 5.10 may encounter and possible workarounds for these issues.

- [](#)

###

Issue
: This issue affects ....

Workaround
: There was no known workaround at the time of the release.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
