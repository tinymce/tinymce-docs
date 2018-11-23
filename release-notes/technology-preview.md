---
layout: default
title: Technology Preview
title_nav: Technology Preview release notes
description: This section previews the new technology introduced in Tiny 5.0.
keywords: new features enhancements technology preview
---

## Technology Preview

TinyMCE 5.0 offers an easy to navigate configurable less cumbersome user interface. The user interface logic has been changed entirely in TinyMCE 5.0.

TinyMCE 5.0 has an ARIA [WCAG 2.1 standards](https://www.w3.org/WAI/standards-guidelines/wcag/) compliant user interface to make the user interface controls and dynamic content more accessible. In TinyMCE 5.0, more complex controls or dialogs can be written in the new API style while keeping the more straightforward methods of adding buttons and windows the same.

## Specifications

* Streamlined documentation
* Creates a UI using a strict {configuration}
* ARIA [WCAG 2.1 standards](https://www.w3.org/WAI/standards-guidelines/wcag/) compliant
* Keyboard navigable, via configuration
* Skinnable
* I18n (via config layer)
* Easier for developers to build their plugins
* Easier to meet requests that come from their internal stakeholders or clients
* Custom plugins can more easily match the look and feel of the editor as opposed to Tiny 4.x.
* If the custom plugins have dialogs, it’s now easier to create dialogs
* Can also create chained dialogs
* Easier for developers to contribute to the open source editor

Try out our demo page to explore the new UI.

## TinyMCE 5.0 Demo

{% include codepen.html id="full-featured" height="750" %}

## Value to a Developer

<!-- ### ARIA - WCAG 2.1 Standards

- New Section -->

### Easy to Integrate with Modern Systems

As application design continues to improve and evolve, and developers are asked to integrate the editor into different apps. The flexible UI allows developers to more easily match the look and feel of these new applications which provides the benefit of creating a seamless user experience.

### Easy Upgrade

Developers can upgrade their TinyMCE 4.x instances to TinyMCE 5.0 with little/no fuss. For instructions on how to migrate, please see the [Migration Guide]({{site.baseurl}}/migrating-from-4.x).

> Note:  An instance of Tiny with heavy customizations could take longer to upgrade. Please contact [Customer Support](https://support.tiny.cloud) if you are encountering issues with the upgrade.

### Enhanced CSS

A **SKIN** in Tinymce is used to make changes to the appearance of the editor, for example, colors, margins, paddings, fonts, icons, etc. A **Theme** creates the editor construction (left/top/bottom/right of the editing area - vertical or horizontal, inline or outside, etc.). A skin usually changes the color scheme of a button, dialog, etc. while the theme applies to the whole editor including its functionality and has child skins to change the appearance.

TinyMCE  5.0 uses a new theme **Silver** and a new skin **Oxide** which uses more modern CSS such as `flexbox`.

The skin creator is coupled with the `tinymce.ui` framework, so it works with the modern theme, the inlite theme, and to some extent MoxieManager.

### JavaScript → Modern CSS → Better Exploitation of Modern CSS

TinyMCE 5.0 offers a modern CSS to provide styled components that leverage the power of a complete programming language — JavaScript — and its scoping capabilities to help structure the code into the components. This helps to avoid the common pitfalls of writing and maintaining CSS for large projects. A developer can describe a component’s style with no risk of side effects.

### Modern Codebase

TinyMCE 5.0 codebase has been extensively rewritten focus on converting the UI components to a more modern UI framework. As of consequence of this rewrite, all the related features have been updated. The new framework takes advantage of the latest CSS3 features for streamline styling and is ARIA [IBM standards](https://www.ibm.com/able/checklists.html) compliant. The new UI framework has a reasonably locked-down API for creating components, which means our code is more structured and has an in-built validation combined with TypeScript. This strictness makes our code cleaner and more stable. The new TinyMCE 5.0 code is cleaner and easier to maintain and troubleshoot.

### Support Modern Browser Technologies

TinyMCE 5.0 now supports IE 11, Chrome, Firefox, Safari, Edge, Opera.
