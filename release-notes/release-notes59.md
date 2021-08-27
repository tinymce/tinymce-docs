---
layout: default
title: TinyMCE 5.9
title_nav: TinyMCE 5.9
description: Release notes for TinyMCE 5.9
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.9 was released for {{site.enterpriseversion}} and {{site.cloudname}} on <<`WEEKDAY`, `MMM` `D`<sup>`st|nd|th`</sup>, `YYYY`>>. It includes {{site.productname}} 5.9 and additional changes to premium plugins. These release notes provide an overview of the changes for {{site.productname}} 5.9, including:

- [New features](#newfeatures)
- [Enhancements](#enhancements)
- [Functionality changes](#functionalitychanges)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Accompanying Premium Skins and Icon Packs changes](#accompanyingpremiumskinsandiconpackschanges)
- [Accompanying Premium self-hosted server-side component changes](#accompanyingpremiumself-hostedserver-sidecomponentchanges)
- [General bug fixes](#generalbugfixes)
- [Security fixes](#securityfixes)
- [Deprecated features](#deprecatedfeatures)
- [Known issues](#knownissues)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## New features

The following new features were added for the {{site.productname}} 5.9 release.

### New `language` toolbar button and menu item in core

{{site.productname}} 5.9 now supports multilingual content, using the `lang` attribute. There is a new `language` toolbar button, and a new `language` menu item, both configured using the `content_langs` option. There is also a new `Lang` editor command for changing the language of the selection.

For information on:

- The `language` toolbar button, see: [Available Toolbar Buttons - The core toolbar buttons]({{site.baseurl}}/advanced/available-toolbar-buttons/#thecoretoolbarbuttons).
- The `language` menu item, see: [Available Menu Items - The core menu items]({{site.baseurl}}/advanced/available-menu-items/#thecoremenuitems).
- The `content_langs` option, see: [Content appearance options - `content_langs`]({{site.baseurl}}/configure/localization/#content_langs).
- The `Lang` editor command, see: [Commands available for {{site.productname}} - Core Editor commands]({{site.baseurl}}/advanced/editor-command-identifiers/#coreeditorcommands).

### New Table plugin features

#### New table commands

The following commands have been added to the table plugin to improve the usability:

`mceTableCellToggleClass`
: Allows the user to add or remove a class on selected cells.

`mceTableToggleClass`
: Allows the user to add or remove a class from the selected table.

`mceTableToggleCaption`
: Allows the user to add or remove a caption from the selected table.

For information on these commands, see: [Table - Commands]({{site.baseurl}}/plugins/opensource/table/#commands)

#### New table toolbar buttons and menu items

{{site.productname}} 5.9 adds new buttons and menu items for the Table plugin to improve the user experience when working with tables. The toolbar buttons and menu item use the same name (identifier). These toolbar buttons and menu items can be added to contextual menus (right-click menus) and contextual toolbars such as the table toolbar. The following toolbar buttons and menu items have been added:

`tableclass`
: Allows the user to add or remove a class from the selected table. Available classes are defined by the [`table_class_list` option]({{site.baseurl}}/plugins/opensource/table/#table_class_list).

`tablecellclass`
: Allows the user to add or remove a class from selected cells. Available classes are defined by the [`table_cell_class_list` option]({{site.baseurl}}/plugins/opensource/table/#table_cell_class_list).

`tablecellvalign`
: Allows the user to set the vertical alignment for the content of selected cells.

`tablecellborderwidth`
: Allows the user to set the border width on selected table cells. The available widths are set with the [`table_border_widths` option]({{site.baseurl}}/plugins/opensource/table/#table_border_widths).

`tablecellborderstyle`
: Allows the user to set the border style on selected table cells. The available styles are set with the [`table_border_styles` option]({{site.baseurl}}/plugins/opensource/table/#table_border_styles).

`tablecaption`
: Toggles the caption on the selected table.

`tablecellbackgroundcolor`
: Allows the user to change the background color of selected cells. The available colors are set by the [`table_background_color_map` option]({{site.baseurl}}/plugins/opensource/table/#table_background_color_map) or [`color_map` option]({{site.baseurl}}/configure/content-appearance/#color_map).

`tablecellbordercolor`
: Allows the user to change the border color of selected cells. The available colors are set by the [`table_border_color_map` option]({{site.baseurl}}/plugins/opensource/table/#table_border_color_map) or [`color_map` option]({{site.baseurl}}/configure/content-appearance/#color_map).

`tablerowheader`
: Allows the user to toggle selected rows into headers.

`tablecolheader`
: Allows the user to toggle selected columns into headers.

For information on these buttons, see: [Available toolbar buttons]({{site.baseurl}}/advanced/available-toolbar-buttons/#tableplugin)
For information on these menu items, see: [Available menu items]({{site.baseurl}}/advanced/available-menu-items/#tableplugin)

#### New table options

{{site.productname}} 5.9 adds new options for the Table plugin to improve the user experience when working with tables. These new options are optional, and allows further customization of user experience.

`table_background_color_map`
: Allows setting a specific set of background colors to be used by the `tablecellbackgroundcolor` toolbar button and menu item, overriding the defaults and the colors provided by the [`color_map` option]({{site.baseurl}}/configure/content-appearance/#color_map). For information on this option, see: [Table options - table_background_color_map]({{site.baseurl}}/plugins/opensource/table/#table_background_color_map)

`table_border_color_map`
: Allows setting a specific set of border colors to be used by the `tablecellbordercolor` toolbar button and menu item, overriding the defaults and the colors provided by the [`color_map` option]({{site.baseurl}}/configure/content-appearance/#color_map). For information on this option, see: [Table options - table_border_color_map]({{site.baseurl}}/plugins/opensource/table/#table_border_color_map)

`table_border_widths`
: Allows setting a specific set of widths to be used by the `tablecellborderwidth` toolbar button and menu item. For information on this option, see: [Table options - table_border_widths]({{site.baseurl}}/plugins/opensource/table/#table_border_widths)

`table_border_styles`
: Allows setting a specific set of HTML border styles to be used by the `tablecellborderstyle` toolbar button and menu item. For information on this option, see: [Table options - table_border_styles]({{site.baseurl}}/plugins/opensource/table/#table_border_styles).

For information on the Table plugin, see: [Table plugin]({{site.baseurl}}/plugins/opensource/table/).

### Additional new features

{{site.productname}} 5.9 introduces the following minor new features:

- Added new plugin commands:
  - `mceEmoticons` opens the Emoticons dialog.
  - `mceWordCount` displays the Word Count summary dialog.
  - `mceTemplate` shows the Template dialog.
- A new `iframe_aria_text` option for customizing the `title` attribute on the editor iframe. For details, see: [Accessibility options - `iframe_aria_text`]({{site.baseurl}}/configure/accessibility/#iframe_aria_text).

## Enhancements

The following enhancements were made for the {{site.productname}} 5.9 release.

### Improved context toolbar user experience

{{site.productname}} 5.9 improves context toolbar positioning by ensuring the toolbar remains in the same position when the user scrolls. Additionally, the context toolbar repositions if the toolbar will overlap the selected content or the cursor. For example: Prior to this improvement, if a user was editing a table, the context toolbar may have covered cells in the first row while it was being edited. Now, when clicking into any cell within that row, the toolbar will move to the bottom of the viewport instead.

To further enhance the user experience, the context toolbar will now use a short animation when the toolbar transitions between different locations.

![Enchanced context toolbar behavior]({{site.baseurl}}/images/context-toolbar-improvements.gif)

For information on context toolbars, see: [UI components - Context toolbar]({{site.baseurl}}/ui-components/contexttoolbar/).

### New `toolbar_sticky_offset` option for customizing sticky toolbars

The new `toolbar_sticky_offset` option allows the main toolbar to "dock" at a specified offset from the top or bottom of the view, depending on the toolbar location (set using the [`toolbar_location` option]({{site.baseurl}}/configure/editor-appearance/#toolbar_location)).

For information on the `toolbar_sticky_offset` option, see: [User interface options - toolbar_sticky_offset]({{site.baseurl}}/configure/editor-appearance/#toolbar_sticky_offset).

### Additional enhancements

{{site.productname}} 5.9 introduces the following minor enhancements:

- changelog

## Functionality changes

The following functionality changes were made for the {{site.productname}} 5.9 release:

- changelog

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.9.

### Premium Plugin Name X.Y.Z

The {{site.productname}} 5.9 release includes an accompanying release of the **<<Premium Plugin Name>>** premium plugin.

**<<Premium Plugin Name>>** X.Y.Z adds the following new features:

- <Description>

**<<Premium Plugin Name>>** X.Y.Z introduces the following enhancements:

- <Description>

**<<Premium Plugin Name>>** X.Y.Z provides the following bug fixes:

- <Description>

For information on the <<Premium Plugin Name>> plugin, see: [<<Premium Plugin Name>> plugin]({{site.baseurl}}/plugins/<<Premium Plugin Name>>/).

### Mentions 2.3.0

The {{site.productname}} 5.9 release includes an accompanying release of the **Mentions** premium plugin.

**Mentions** 2.3.0 adds the "profile" card feature to the `mentions_menu_hover` callback.

**Mentions** 2.3.0 also fixes the "profile" cards not displaying the `fullName` property when available.

For information on the Mentions plugin, see: [Mentions plugin]({{site.baseurl}}/plugins/premium/mentions/).

### PowerPaste 5.6.0

The {{site.productname}} 5.9 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.6.0 introduces the following enhancements:

- The `powerpaste_word_import`, `powerpaste_googledocs_import`, and `powerpaste_html_import` options now also accept asynchronous functions. This allows the paste mode to be dynamically set each time a user pastes relevant content. It is designed to be used, for example, to replicate the `prompt` dialog with a custom dialog.
- More URLs can now be detected with the `smart_paste` option. Specifically, custom URL scheme detection is more accurate.

**PowerPaste** 5.6.0 provides the following bug fixes:

- Word content was incorrectly parsed when copied from a German user interface.
- Paste incorrectly inserted content when the editor was in readonly mode.

For information on the PowerPaste plugin, see: [PowerPaste plugin]({{site.baseurl}}/plugins/premium/powerpaste/).

## Accompanying Premium Skins and Icon Packs changes

The {{site.productname}} 5.9 release includes an accompanying release of the **Premium Skins and Icon Packs**.

### Premium Skins and Icon Packs - New features

{% comment %}
Add description here.
{% endcomment %}

For information on using premium skins and icon packs, see: [Premium Skins and Icon Packs]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/).

### Premium Skins and Icon Packs - Bug fixes

The **Premium Skins and Icon Packs** release includes the following bug fixes:

{% comment %}
Add description here.
{% endcomment %}

For information on using premium skins and icon packs, see: [Premium Skins and Icon Packs]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/).

## Accompanying Premium self-hosted server-side component changes

The {{site.productname}} 5.9 release includes accompanying changes affecting the {{site.productname}} **self-hosted** services for the following plugins:

- The Enhanced Media Embed plugin (`mediaembed`)
- The Image Tools plugin (`imagetools`)
- The Link Checker plugin (`linkchecker`)
- The Spell Checker Pro plugin (`tinymcespellchecker`)

The Java server-side components have been updated to the following versions:

* `ephox-spelling.war`: 2.117.1
* `ephox-hyperlinking.war`: 2.105.0
* `ephox-image-proxy.war`: 2.105.0

These versions require Java 8 or higher. For information on the removal of Java 7 support, see: [Removal of Java 7 support for TinyMCE 5.3 and later]({{site.baseurl}}/release-notes/release-notes53/#removalofjava7support).

### New Server-side component features

The Spelling service now supports a broader range of dictionaries by introducing support for [Hunspell dictionaries](https://hunspell.github.io/).

* For details on enabling Hunspell support, see: [Add Hunspell dictionaries to Spell Checker Pro]({{site.baseurl}}/enterprise/server/self-hosting-hunspell/).
* For a list of supported Spell Checker Pro languages, see: [Spell Checker Pro plugin - Supported languages]({{site.baseurl}}/plugins/premium/tinymcespellchecker/#supportedlanguages).

The Spelling service now includes a new configuration option, allowing custom dictionaries to periodically deploy changes. For details, see: [Configure server-side components: `dynamic-custom-dictionaries`]({{site.baseurl}}/enterprise/server/configure/#dynamic-custom-dictionariesoptional).

All the services now include an `ignore-port` port option to allow ports specified in `allowed-origins` to be enforced. For details, see: [Configure server-side components: `allowed-origins.ignore-port` (optional)]({{site.baseurl}}/enterprise/server/configure/#allowed-originsignore-portoptional).

For information on:

- The Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/premium/tinymcespellchecker/).
- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).

### Stability update for the pre-configured server-side component Dockerfiles

The pre-configured Dockerfiles for containerizing the server-side components, also known as the Docker starter kits, have been updated to improve stability. Note that the resulting docker image will be larger as a result of these changes.

For information on deploying the server-side components using Docker, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

### Updating the self-hosted server-side components

The new versions of the server-side services provide updates for the Java-based server-side components. To deploy the updated version of the server-side components:

1. Update your Java Application Server to the minimum required version:

    - Eclipse Jetty 9.4 or later
    - Apache Tomcat:
        - 9 or later
        - 8.5.12+
        - 8.0.42+
        - 7.0.76+

2. Replace the existing server-side `.war` file with the version 2.110.0 `.war` file bundled with {{site.productname}} 5.9 or later.

For information on:

- Deploying the server-side components, see: [Server-side component installation]({{site.baseurl}}/enterprise/server/).
- Deploying the server-side components using Docker, see: [Containerized service deployments]({{site.baseurl}}/enterprise/server/dockerservices/).

## General bug fixes

{{site.productname}} 5.9 provides fixes for the following bugs:

- changelog

## Security fixes

{{site.productname}} 5.9 provides fixes for the following security issues:

- changelog

## Deprecated features

The following features have been deprecated with the release of {{site.productname}} 5.9:

- [The `spellchecker_select_languages` option](#thespellchecker_select_languagesoption).
- [The BBCode (`bbcode`) plugin](#thebbcodebbcodeplugin)
- [The Full Page (`fullpage`) plugin](#thefullpagefullpageplugin)
- [The Legacy Output (`legacyoutput`) plugin](#thelegacyoutputlegacyoutputplugin)
- [Reminder: The free TinyMCE Spell Checker plugin](#reminderthefreetinymcespellcheckerplugin)

### The `spellchecker_select_languages` option

With the release of {{site.productname}} 5.9, the `spellchecker_select_languages` option has been deprecated and has been replaced by the `content_langs` option.

For information on the `content_langs` option, see: [Spell Checker Pro - `content_langs`]({{ site.baseurl }}/plugins/premium/tinymcespellchecker/#content_langs).

### The BBCode (`bbcode`) plugin

The BBCode plugin (`bbcode`) has been deprecated and will be removed in the 6.0 release of {{site.productname}}.

To develop and maintain a new BBCode plugin based on the {{site.productname}} BBCode plugin, you can create a fork using the [BBCode plugin source code in the TinyMCE distribution monorepo](https://github.com/tinymce/tinymce-dist/tree/5.8.2/plugins/bbcode).

### The Full Page (`fullpage`) plugin

The Full Page plugin (`fullpage`) has been deprecated and will be removed in the 6.0 release of {{site.productname}}.

To develop and maintain a new Full Page plugin based on the {{site.productname}} Full Page plugin, you can create a fork using the [Full Page plugin source code in the TinyMCE distribution monorepo](https://github.com/tinymce/tinymce-dist/tree/5.8.2/plugins/fullpage).

### The Legacy Output (`legacyoutput`) plugin

The Legacy Output plugin (`legacyoutput`) has been deprecated and will be removed in the 6.0 release of {{site.productname}}.

To develop and maintain a new Legacy Output plugin based on the {{site.productname}} Legacy Output plugin, you can create a fork using the [Legacy Output plugin source code in the TinyMCE distribution monorepo](https://github.com/tinymce/tinymce-dist/tree/5.8.2/plugins/legacyoutput).

### Reminder: The free TinyMCE Spell Checker plugin

The free TinyMCE Spell Checker plugin (`spellchecker`) was deprecated with the release of TinyMCE 5.4 and will be removed in the 6.0 release of {{site.productname}}.

For information on the deprecation of the free TinyMCE Spell Checker plugin, see: [TinyMCE 5.4 Release notes - Deprecated features]({{site.baseurl}}/release-notes/release-notes54/#thefreetinymcespellcheckerplugin).

## Known issues

This section describes issues that users of {{site.productname}} 5.9 may encounter and possible workarounds for these issues.

**Outline**

- [](#)

###

**Issue**: This issue affects ....

**Workaround**: There was no known workaround at the time of the release.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
