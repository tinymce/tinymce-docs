---
layout: default
title: New features, enhancements, and changes for TinyMCE 6.0 core and core plugins
title_nav: Core improvements
description: New features, enhancements, and functionality changes for TinyMCE 6.0
keywords: releasenotes bugfixes
---

- [New features](#newfeatures)
- [Enhancements](#enhancements)
- [Functionality changes](#functionalitychanges)
- [Removed functionality](#removedfunctionality)

## New features

The following new features were added for the {{site.productname}} 6.0 release.

### Feature name


### Additional new features

{{site.productname}} 6.0 introduces the following minor new features:

- changelog

## Enhancements

The following enhancements were made for the {{site.productname}} 6.0 release.

### `tabindex` improvement

In iframe (classic editor) mode, {{site.productname}} now copies the [`tabindex` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) from the target element to the editor's iframe. This accessibility improvement allows integrators to rely on the browser behavior for specifying tab order, instead of specially configuring {{site.productname}}. It also replaces the [Tabfocus plugin](#tabfocusplugin).

### Enhancement name

### Additional enhancements

{{site.productname}} 6.0 introduces the following minor enhancements:

- changelog

## Functionality changes

The following changes were made for the {{site.productname}} 6.0 release.

### Horizontal rule plugin moved to TinyMCE Core

The Horizontal rule (`hr`) plugin has been moved to Core in {{site.productname}} 6.0.

The `hr` toolbar button and menu item will now work by default, without needing to specify `hr` as a plugin.

Integrators can remove `hr` from the `plugins` section of their {{site.productname}} configuration.

For information about horizontal rule-related functionality, see:
- [Core toolbar buttons]({{site.baseurl}}/interface/toolbars/available-toolbar-buttons/#thecoretoolbarbuttons)
- [Core menu items]({{site.baseurl}}/interface/menus/available-menu-items/#thecoremenuitems)
- [Core commands]({{site.baseurl}}/how-to-guides/creating-custom-ui-components/editor-command-identifiers/#coreeditorcommands)

### Noneditable plugin moved to TinyMCE Core

The Noneditable (`noneditable`) plugin has been moved to Core in {{site.productname}} 6.0.

Integrators can remove `noneditable` from the `plugins` section of their {{site.productname}} configuration.

For information about noneditable-related functionality, see:
- [Content filtering options - editable_class]({{site.baseurl}}/configure/content-filtering/#editable_class)
- [Content filtering options - noneditable_class]({{site.baseurl}}/configure/content-filtering/#noneditable_class)
- [Content filtering options - noneditable_regexp]({{site.baseurl}}/configure/content-filtering/#noneditable_regexp)

### Print plugin moved to TinyMCE Core

The Print plugin has been moved to Core in {{site.productname}} 6.0.

The toolbar button, menu item, shortcut, and command for printing content are now available by default, without needing to specify `print` as a plugin.

Integrators can remove `print` from the `plugins` section of their {{site.productname}} configuration.

For information about print-related functionality, see:
- [Core toolbar buttons]({{site.baseurl}}/advanced/available-toolbar-buttons/#thecoretoolbarbuttons)
- [Core menu items]({{site.baseurl}}/advanced/available-menu-items/#thecoremenuitems)
- [Core commands]({{site.baseurl}}/advanced/editor-command-identifiers/#coreeditorcommands)
- [Shortcuts]({{site.baseurl}}/advanced/keyboard-shortcuts/#editorkeyboardshortcuts)

### Renamed Options

The following options have been renamed in {{site.productname}} 6.0:
- The `default_link_target` option has been renamed to `link_default_target` for both `link` and `autolink` plugins.
- The `rel_list` option has been renamed to `link_rel_list` for the `link` plugin.
- The `target_list` option has been renamed to `link_target_list` for the `link` plugin.
- The `noneditable_editable_class` option has been renamed to `editable_class`.
- The `noneditable_noneditable_class` option has been renamed to `noneditable_class`.

## Removed functionality

### Tabfocus plugin

The `tabfocus` plugin has been removed in {{site.productname}} 6.0. The tab order of the elements in a page, including {{site.productname}}, should now be specified using the [`tabindex` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex). For information about configuring tab order, see: [Tab order]({{site.baseurl}}/configure/accessibility#taborder).
