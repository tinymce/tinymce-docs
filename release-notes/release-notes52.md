---
layout: default
title: TinyMCE 5.2
title_nav: TinyMCE 5.2
description: Release notes for TinyMCE 5.2
keywords: releasenotes bugfixes
---

These release notes provide an overview of the changes for {{site.productname}} 5.2, including:

- [New features and enhancements](#newfeaturesandenhancements)
- [Minor changes for TinyMCE 5.2](#minorchangesfortinymce52)
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

### Changed toolbar_drawer to toolbar_mode

The `toolbar_drawer` option has been deprecated and replaced with the `toolbar_mode` option. `toolbar_mode` provides the same functionality as `toolbar_drawer`. The name change was made to reflect the range of settings available for this option.

The `toolbar_drawer: false` setting has been deprecated; the behavior is now provided by the `toolbar_mode: 'wrap'` setting.

For information on the `toolbar_mode` option, see: [User interface options - `toolbar_mode`]({{site.baseurl}}/configure/editor-appearance/#toolbar_mode).

### New group toolbar button

The new `toolbar_groups` setting and `addGroupToolbarButton` registry API can be used to create a toolbar button that displays a collection of other toolbar buttons in a pop-up.

![**Group toolbar button example**]({{site.baseurl}}/images/toolbar-group-example.png)

For information on using the `toolbar_groups` setting, see: [User interface options - `toolbar_groups`]({{ site.baseurl }}/configure/editor-appearance/#toolbar_groups).
For information on using the `addGroupToolbarButton` API, see: [Types of toolbar buttons - Group button]({{ site.baseurl }}/ui-components/typesoftoolbarbuttons/#grouptoolbarbutton).

### Updated the default TinyMCE table icons

The {{site.productname}} icons for table-related toolbar buttons have been updated to better match the icons used elsewhere in the product.

This change applies to the default {{site.productname}} icon pack.

For an updated list of {{site.productname}} icons, see: [Editor icon identifiers]({{ site.baseurl }}/advanced/editor-icon-identifiers/).

### New option for setting the default protocol for the Link and Autolink plugins

A new `link_default_protocol` option has been added to the Autolink and Link plugins. This option allows the default protocol to be set for links where a protocol has not been supplied by the user.

- For information on using this setting with the Autolink plugin, see: [Autolink plugin - `link_default_protocol`]({{site.baseurl}}/plugins/autolink/#link_default_protocol).
- For information on using this setting with the Link plugin, see: [Link plugin - `link_default_protocol`]({{site.baseurl}}/plugins/link/#link_default_protocol).

## Minor changes for TinyMCE 5.2

{{site.productname}} 5.2 introduces the following minor changes:

- Adds the ability to apply formats to spaces.
- Adds a drop shadow below the toolbar while in sticky mode and introduced Oxide variables to customize it when creating a custom skin.
- Adds a `quickbars_image_toolbar` setting to allow for the image quickbar to be configured or disabled.
- Adds the `loading` attribute to the default schema for `iframe` and `img` . Patch contributed by [ataylor32](https://github.com/ataylor32).
- Adds new `getNodeFilters` and `getAttributeFilters` functions to the `editor.serializer` API.
- Adds error message events that fire when a resource loading error occurs.
- Improved security by changing the default schema to disallow `onchange` for select elements.
- Changes iframe mode to set selection on content init if selection doesn't exist.
- Changes table related icons to align them with the visual style of the other icons.
- Improved the visual appearance of the color input field.
- Changed the fake caret container to use `forced_root_block` when possible.
- Changes the `requireLangPack` API to wait until the plugin has been loaded before loading the language pack.
- Changes the formatter so `style_formats` are registered before the initial content is loaded into the editor.
- Changes media plugin to use `https` protocol for media urls by default.
- Improved security by changing the editor parser to treat CDATA nodes as bogus HTML comments to match the HTML parsing specification. A new `preserve_cdata` setting has been added to preserve CDATA nodes if required.

## Premium Plugin changes

The following premium plugins have been updated for {{site.productname}} 5.2.

### Page Embed

The {{site.productname}} 5.2 release includes **Page Embed** 1.1.0.

**Page Embed** 1.1.0 adds a new `tiny_pageembed_inline_styles` setting which inlines all styles, while also keeping CSS classes, when rendering the embed content. This is useful when the additional CSS classes can't be added to your site.

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

- Fixed the incorrect parsing of malformed/bogus HTML comments.
- Fixed the `quickbars` selection toolbar appearing on non-editable elements.
- Fixed a bug with alignment toolbar buttons sometimes not changing state correctly.
- Fixed the `codesample` toolbar button not toggling when selecting code samples other than HTML.
- Fixed content incorrectly scrolling to the top or bottom when pressing enter if the content was already in view.
- Fixed the `scrollIntoView` API potentially hiding elements behind the toolbar.
- Fixed the editor not respecting the `resize_img_proportional` setting due to legacy code.
- Fixed the floating toolbar drawer flickering in inline mode.
- Fixed an issue where the `template` plugin dialog would be indefinitely blocked on a failed template load.
- Fixed the `mscontrolselect` event not being unbound on the Microsoft Internet Explorer and Microsoft Edge browsers.
- Fixed the Confirm dialog footer buttons to only highlight the "Yes" button.
- Fixed the `file_picker_callback` functionality for the Image, Link and Media plugins.
- Fixed an issue where the floating toolbar drawer would sometimes break if the editor is resized while the drawer is open.
- Fixed an incorrect `external_plugins` loading error message.
- Fixed the resize handler not being hidden for ARIA purposes. Patch contributed by [Parent5446](https://github.com/Parent5446).
- Fixed an issue where content could be lost if a misspelled word was selected and spellchecking was disabled.
- Fixed validation errors in the CSS where certain properties had the wrong default value.
- Fixed an issue where forced root block attributes were not applied when removing a list.
- Fixed an issue where the element path was not cleared when there are no parents.
- Fixed an issue where width and height in svg icons containing `rect` elements were overridden by the CSS reset.
- Fixed an issue where uploading images with a query parameter and the `images_reuse_filename` setting enabled would generate an invalid URL.
- Fixed the `closeButton` property not working when opening notifications.
- Fixed keyboard flicker when opening a context menu on mobile.
- Fixed issue where plus icon svg contained strokes.

## Deprecated features

The `toolbar_drawer` option has been deprecated with the release of {{site.productname}} 5.2. The `toolbar_drawer` option was renamed to `toolbar_mode`. This change was made to reflect the range of new settings available for this option.

For information on the `toolbar_mode` option, see: [User interface options - `toolbar_mode`]({{site.baseurl}}/configure/editor-appearance/#toolbar_mode).

## Known issues

This section describes issues that users of {{site.productname}} 5.2 may encounter, as well as possible workarounds for these issues.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
