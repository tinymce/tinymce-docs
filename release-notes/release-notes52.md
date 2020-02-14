---
layout: default
title: TinyMCE 5.2
title_nav: TinyMCE 5.2
description: Release notes for TinyMCE 5.2
keywords: releasenotes bugfixes
---

These release notes provide an overview of the changes for {{site.productname}} 5.2, including:

- [New features and enhancements](#newfeaturesandenhancements)
- [Premium Plugin changes](#premiumpluginchanges)
- [General bug fixes](#generalbugfixes)
- [Deprecated features](#deprecatedfeatures)
- [Known issues](#knownissues)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

> This is the {{site.cloudname}} and {{site.enterpriseversion}} release notes. For information on the latest community version of {{site.productname}}, see: [{{site.productname}} Changelog]({{site.baseurl}}/changelog/).

## New features and enhancements

The following new features and enhancements were added for the {{site.productname}} 5.2 release.

### Alternative toolbar and menu bar placement with the `toolbar_location` setting

The `toolbar_location` option is used to position the toolbar and menu bar. Setting this option to `bottom` positions the toolbar and menu bar below the content area.

For information on using the `toolbar_location` setting, see: [User interface options - `toolbar_location`]({{ site.baseurl }}/configure/editor-appearance/#toolbar_location).

### A new placeholder setting

The new `placeholder` option adds placeholder content that will be shown when the editor is empty.

For information on using the `placeholder` setting, see: [User interface options - `placeholder`]({{ site.baseurl }}/configure/editor-appearance/#placeholder).

### Modify the Quick Image toolbar using the `quickbars_image_toolbar` setting

The **quickbars_image_toolbar** option configures the Quick Image toolbar provided by the [quickbars plugin]({{ site.baseurl }}/plugins/quickbars). To change the buttons on the Quick Image toolbar, provide a space-separated string of [toolbar button names]({{ site.baseurl }}/advanced/editor-control-identifiers/#toolbarcontrols). To disable the Quick Image toolbar, set `quickbars_image_toolbar` to `false`.

For information on using the `quickbars_image_toolbar` setting, see: [Quick Toolbars plugin - `quickbars_image_toolbar`]({{ site.baseurl }}/plugins/quickbars/#quickbars_image_toolbar).

### Use custom Prism versions and languages when highlighting code samples

The `codesample` plugin now has the ability to use a custom Prism.js version and a custom languages list when highlighting code samples in the editor. This can be enabled by including the custom Prism.js script and language add-ons on the page and setting the new `codesample_global_prismjs` option to `true`.

For information on using the `codesample_global_prismjs` setting, see: [Code sample plugin - `codesample_global_prismjs`]({{ site.baseurl }}/plugins/codesample/#codesample_global_prismjs).

### New `tinymce.dom.TextSeeker` API

The TextSeeker class is used for walking across text nodes to match a predicate.

For information on using the `TextSeeker` API, see: [{{site.productname}} APIs - tinymce.dom.TextSeeker]({{ site.baseurl }}/api/tinymce.dom/tinymce.dom.textseeker/).

### renamed toolbar_drawer to toolbar_mode and changed the default to wrap instead of false (both are the same, just wrap is more self explanatory)

### New group toolbar button

The new `toolbar_groups` setting and `addGroupToolbarButton` registry API can be used to create a toolbar button that displays a collection of other toolbar buttons in a pop-up.

![**Group toolbar button example**]({{site.baseurl}}/images/toolbar-group-example.png)

For information on using the `toolbar_groups` setting, see: [User interface options - `toolbar_groups`]({{ site.baseurl }}/configure/editor-appearance/#toolbar_groups).
For information on using the `addGroupToolbarButton` API, see: [Types of toolbar buttons - Group button]({{ site.baseurl }}/ui-components/typesoftoolbarbuttons/#grouptoolbarbutton).

### Updated the default TinyMCE table icons

The {{site.productname}} icons for table-related toolbar buttons have been updated to better match the icons used elsewhere in the product.

This change applies to the default {{site.productname}} theme, `silver`.

For an updated list of {{site.productname}} icons, see: [Editor icon identifiers]({{ site.baseurl }}/advanced/editor-icon-identifiers/).

### Updated the colorinput component visual appearance --- updated color swatches in input fields

## Premium Plugin changes

The following premium plugins have been updated for {{site.productname}} 5.2.

### Page Embed

The {{site.productname}} 5.2 release includes **Page Embed** 1.1.0.

**Page Embed** 1.1.0 includes:

* A new `tiny_pageembed_inline_styles` setting which inlines all styles, while also keeping CSS classes, when rendering the embed content. This is useful when the additional CSS classes can't be added to your site.

For information on inlining page embed styles, see: [Page Embed plugin - Inline styles for page embeds]({{site.baseurl}}/plugins/pageembed/#inlinestylesforpageembeds).

### Permanent Pen

The {{site.productname}} 5.2 release includes **Permanent Pen** 1.1.0.

**Permanent Pen** 1.1.0 adds support for working with [input method editors (IMEs)](https://www.w3.org/TR/ime-api/#IME), which are used for inserting non-ascii characters.

### Premium Skins and Icon Packs

The {{site.productname}} 5.2 release includes **Premium Skins and Icon Packs** 1.2.

**Premium Skins and Icon Packs** 1.2 includes:

- 3 new skins: ['naked']({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/naked-demo/), ['outside']({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/outside-demo/), and ['snow']({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/snow-demo/).
- 1 new icon pack: 'thin'.

For information on using premium skins and icon packs, see: [Premium Skins and Icon Packs]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/).

### Spellchecker Pro

The {{site.productname}} 5.2 release includes **Spellchecker Pro** 2.0.

**Spellchecker Pro** 2.0 includes:

- New functionality allowspell check the document in multiple languages
- there's a number of new menu items/buttons

## General bug fixes

{{site.productname}} 5.2 provides fixes for the following bugs:

-

## Deprecated features

## Known issues

This section describes issues that users of {{site.productname}} 5.2 may encounter, as well as possible workarounds for these issues.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
