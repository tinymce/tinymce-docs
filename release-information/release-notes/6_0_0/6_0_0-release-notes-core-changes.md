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

In iframe mode, TinyMCE now copies the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute from the target element to the editor's iframe. This accessibility improvement allows integrators to rely on the browser behaviour for specifying tab order, instead of specially configuring TinyMCE. It also replaces the [Tabfocus plugin](#tabfocusplugin).

### Enhancement name

### Additional enhancements

{{site.productname}} 6.0 introduces the following minor enhancements:

- changelog

## Functionality changes

The following functionality changes were made for the {{site.productname}} 6.0 release:

- changelog

## Removed functionality

### Tabfocus plugin

The tabfocus plugin has been removed in TinyMCE 6.0. Tab order of the elements in a page, including TinyMCE, should now be specified using the [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex) attribute. For information about configuring tab order, see: [Tab order]({{site.baseurl}}/configure/accessibility#taborder).
