---
layout: default
title: New Features, Enhancements, and Technology Preview
title_nav: New Features
description: These features have been introduced in Tiny 5.0.
keywords: new features enhancements technology preview
---

## Technology Preview

Tiny 5.0 offers an easy to navigate configurable less cumbersome user interface. The user interface logic has been changed entirely in Tiny 5.0.

Tiny 5.0 has an ARIA [IBM standards](https://www.ibm.com/able/checklists.html) compliant user interface in order to make the user interface controls and dynamic content more accessible. In Tiny 5.0, more complex controls or dialogs need to be written in the new API style while keeping the more straightforward methods of adding buttons and windows the same.

## Specifications

* Streamlined documentation
* Creates a UI using a strict {configuration}
* ARIA [IBM standards](https://www.ibm.com/able/checklists.html) compliant
* Keyboard navigable, via configuration
* Skinnable
* I18n (via config layer)
* Easier for developers to build their own plugins
* Easier to meet requests that come from their internal stakeholders or clients
* Custom plugins can more easily match the look and feel of the editor as opposed to Tiny 4.x
* If the custom plugins have dialogs, it’s now easier to create dialogs
* Can also create chained dialogs
* Easier for developers to contribute to the open source editor

Try out our demo page to explore the new UI.

## Tiny 5.0 Demo

{% include codepen.html id="full-featured" height="750" %}

## Value to a Developer

### Easy to Integrate with Modern Systems

As application design continues to improve and evolve, and developers are asked to integrate the editor into different apps. The flexible UI allows developers to more easily match the look and feel of these new applications which provides the benefit of creating a seamless user experience.

### Easy Upgrade

Devs can upgrade their Tiny 4.x instances to Tiny 5.0 with little/no fuss. For instructions on how to migrate, please see the [Migration Guide]({{site.baseurl}}/migrating-from-4.x).

> Note: An instance of Tiny with heavy customizations could take longer to upgrade. Please contact [Customer Support](https://support.tiny.cloud) if you are encountering issues with the upgrade.

### JavaScript → Modern CSS → Better Exploitation of Modern CSS

Tiny 5.0 offers a modern CSS to provide styled components that leverage the power of a complete programming language — JavaScript — and its scoping capabilities to help structure the code into the components. This helps to avoid the common pitfalls of writing and maintaining CSS for large projects. A developer can describe a component’s style with no risk of side effects.

### Modern Codebase

Tiny 5.0 codebase has been extensively rewritten focus on converting the UI components to a more modern UI framework. As of consequence of this rewrite, all the related features have been updated. The new framework takes advantage of the latest CSS3 features for streamline styling and is ARIA [IBM standards](https://www.ibm.com/able/checklists.html) compliant. The new UI framework has a reasonably locked-down API for creating components, which means our code is more structured and has an in-built validation combined with TypeScript. This strictness makes our code cleaner and more stable. The new Tiny 5.0 code is cleaner and easier to maintain and troubleshoot.

### Support Modern Browser Technologies

Tiny 5 now supports IE 11, Chrome, Firefox, Safari, Edge, Opera.

### Enhanced CSS

A **SKIN** in Tinymce is used to make changes to the appearance of the editor, for example, colors, margins, paddings, fonts, icons, etc. A **Theme** is how the editor is constructed (left/top/bottom/right of the editing area - vertical or horizontal, inline or outside, etc.). A skin usually changes the color scheme of a button, dialog, etc. while the theme applies to the whole editor including its functionality and has child skins to change the appearance.

Tiny 5.0 uses a new theme is **Silver** (see below) and a new skin is **Oxide** which uses more modern CSS such as `flexbox`.

The skin creator is coupled with the `tinymce.ui` framework, so it works with the modern theme, the inlite theme, and in some extent MoxieManager.


## New Features and Enhancements

### New Theme

### Silver

Tiny 5's **Silver** theme contains a set of configurable UI components that could be used to replace the current customizations (modern, inline, and inlite theme). Silver is enabled by default. If you do not specify a theme, it will default to Silver.


### New UI

It creates CSS and bundles resources like icon fonts and images for the UI.

### Dialog

The Dialog plugin is created for showing dialogs (sometimes referred to as modals) in your application. The plugin supports the use of dynamic content for all aspects and is easily configurable/overridable. To display simple information (e.g., source code plugin, displays the HTML code from the content in the dialog).

### Context Menu

The contextMenu can provide a simple list of clickable commands, or offer an in-menu form. This makes the most straightforward attribute modifications possible. Tiny 5.0 offers the ContextMenu Plugin that is designed for web applications in need of menus on a possibly large amount of objects. Now, a single menu is defined that can be used by multiple objects and a ContextMenu doesn't need to bind itself to the triggering objects. This allows injecting and removing triggers without having to re-initialize or update ContextMenu.

### Context Toolbars

The Context Toolbar configures its buttons based on the type of object selected in the Tree Outline. The Context Toolbar makes a limited number of relevant choices more visible and readily accessible.

### Tables

#### Removed Styles

* Styles text field has been removed from the advanced table of the dialogs.
* The code is now much less confronting/confusing for non developers. This also means we have more control over the table styles and therefore are better able to ensure the styles are correct.
* We have improved how styles are set and retrieved from tables/rows/cells, so should be more reliable.

#### Using CSS for styling

Shifted to using CSS more for styling, and therefore was able to remove a few legacy data attributes that we were configuring on tables/rows/cells which are no longer good practice to use. HTML is now cleaner and shorter.

#### Autofill Values

When opening a properties dialog with a single table/row/cell selected, the dialog will autofill with the relevant existing values. If you select multiple rows or cells and open the relevant properties dialog, Tiny 4 will leave all the dialog fields blank. In Tiny 5.0, fields which have the same values for all the selected rows or cells will autofill, and the fields which have no existing value or have differing values will be empty.
"Border" input field in the `tableprops` dialog is now called "Border width" for clarity.

### Toolbar buttons

1. SVG icons for a better crisp look.
2. Buttons are now added via methods in `editor.ui.registry` rather than `editor` e.g. `editor.ui.registry.addButton()` instead of `editor.addButton()`.
3. To make the creation of custom toolbar buttons easier, new methods were added for split, toggle, and menu toolbar buttons with configuration options specific to the button type.

### Custom Menu Items

* `editor.menuitems`, [see configuration]({{site.baseurl}}/components/toolbarbuttons/components/menu/).

### Custom Sidebars

* `editor.addSidebar`, Docs coming soon.

### Toolbar Menus

* New buttons are added to the global `editor.settings.menus` which is an enhancement since, it now shows the toggled state.
* Improved mouse and keyboard navigation.

