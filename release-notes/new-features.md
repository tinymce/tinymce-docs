---
layout: draft
title: New Features, Enhancements, and Technology Preview
title_nav: New Features
description: These features have been introduced in TinyMCE 5.0.
keywords: new features enhancements technology preview
---

## Technology Preview

TinyMCE 5.0 offers an easy to navigate configurable less cumbersome user interface. The user interface logic has been changed entirely in 5.0. TinyMCE 5.0 has an [ARIA](https://www.ibm.com/able/checklists.html) complaint user interface in order to make user interface controls and dynamic content more accessible. In version 5.0, more complex controls or dialogs needs to be written in the new API style while keeping the more straightforward methods of adding buttons and windows the same.

## Specifications

* Streamlined documentation
* Creates a Ui using a strict {configuration}
* [ARIA](https://www.ibm.com/able/checklists.html)(IBM standards) compliant
* Keyboard navigable, via configuration
* Skinnable:
* I18n (via config layer)
* Easier for developers to build their own plugins
* Easier to meet requests that come from their internal stakeholders or clients
* Custom plugins can more easily match look and feel of the editor as opposed to Tiny 4.x
* If the custom plugins have dialogs, it’s now easier to create dialogs
* Can also create chained dialogs
* Easier for developers to contribute to the open source editor

Try out our demo page to explore the new UI.

## Tiny 5.0 Demo // TODO

## Value to a Developer

### Modern, cleaner, stricter UI API

### Easy to integrate with modern systems

As application design continues to improve and evolve, and developers are asked to integrate the editor into different apps. The flexible UI allows developers to more easily match the look and feel of these new applications which provides the benefit of creating a seamless user experience.

### Easy Upgrade

* Devs can upgrade their Tiny 4.x instances to 5 with little/no fuss.
* For instructions on how to migrate, please see the [Migration Guide]({{site.baseurl}}/migrating-from-4.x).

> Note: An instance of Tiny with massive customizations could take longer to upgrade. Please contact Customer Support<link> if you are encountering issues with upgrade.

### JavaScript → modern CSS →Better exploitation of modern CSS

TinyMCE 5.0 offers a modern CSS to provide styled components that leverage the power of a complete programming language — JavaScript — and its scoping capabilities to help structure the code into components. This helps to avoid the common pitfalls of writing and maintaining CSS for large projects. A developer can describe a component’s style with no risk of side effects.

### Modern codebase

Tiny 5.0 codebase has been extensively rewritten to be focused on converting the UI components to a more modern UI framework. As of consequence of this rewrite all the related features were updated. The new framework takes advantage of the latest CSS3 features for streamline styling, and is ARIA (IBM specified) complaint. The new UI framework has a fairly locked-down API for creating components, which means our code is more structured and has an in-built validation combined with TypeScript. This strictness makes our code cleaner and more stable. The new Tiny 5.0 code is cleaner and easier to maintain and troubleshoot.

### Support modern browser technologies
Tiny 5 now supports IE 11, Chrome, Firefox, Safari, Edge, Opera.

### Enhanced CSS

A SKIN in tinymce is purely colors, margins, paddings, fonts, icons etc. A theme is where you can control where the toolbar appears, left/top/bottom/right of the editing area - vertical or horizontal, inline or outside etc. Then we have the component level, that defines a button, menuitem, panel, dropdowns, splitbuttons etc regardless of its position.
Yes we do, legacy uses onclick, alloy uses action. So far this is the only discrepancy i've seen, a simple obj mapper will align these. The on<event> handlers in the current ui is rich since they expose the whole instance of a ui element so that you can alter state like toggled etc. We would have to define a more strict api here since the current api allows access to the entire tree structure of the ui.
The skin creator is coupled with the tinymce.ui framework so it works with the modern theme and the inlite theme and in some extent moxiemanager since it's using the same ui framwork.


## New Features and Enhancements

### New Theme

## Silver

Tiny 5's **Silver** theme contains a set of configurarable ui components, that could be used to replace the current customizations (modern, inline, and inlite theme). Silver is enabled by default. If you do not specify a theme, it will default to Silver.


### New UI

It creates CSS and bundles resources like icon fonts and images for the UI.

### Emoticons

### Dialog

The Dialog plugin is created for showing dialogs (sometimes referred to as modals) in your application. The plugin supports the use of dynamic content for all aspects and is easily configurable/overridable. To display simple information (e.g., source code plugin, displays the HTML code from the content in the dialog).

### Context Menu

The contextMenu can provide a simple list of clickable commands, or offer an in-menu form. This makes very simple attribute modification possible. Tiny 5.0 offers the contextMenu Plugin that is designed for web applications in need of menus on a possibly large amount of objects. Now, a single menu is defined that can be used by multiple objects and a contextMenu doesn't need to bind itself to triggering objects. This allows injecting and removing triggers without having to re-initialize or update contextMenu.

### Context Toolbars

The Context Toolbar configures its buttons based on the type of object selected in the Tree Outline. The Context Toolbar makes a limited number of relevant choices more visible and readily accessible.

### Tables

#### Removed Styles

Styles text field has been removed from the advanced table of the dialogs. The code is now much less confronting/confusing for non-dev users, and means we have more control over the table styles and therefore are better able to ensure the styles are correct.
We have improved how styles are set and retrieved from tables/rows/cells, so should be more reliable.

#### Using CSS for styling

Shifted to using CSS more for styling, and therefore was able to remove a few legacy data attributes that we were setting on tables/rows/cells which are no longer good practice to use. Html is now cleaner and shorter.

#### Autofill Values

When opening a properties dialog with a single table/row/cell selected, the dialog will autofill with the relevant existing values. If you select multiple rows or cells and open the relevant properties dialog, Tiny 4 will leave all the dialog fields blank. In Apollo, any fields which have the same values for all the selected rows or cells will autofill, and the fields which have no existing value or have differing values will be empty.
"Border" input field in the tableprops dialog is now called "Border width", for clarity.

### Toolbar buttons

* Svg icons for better crisp look
* New buttons are added to the global

| **New Buttons** | **Description** |
| --------------- | --------------- |
| editor.buttons |  |
| editor.menuItems |  |
| editor.sidebar |  |
| editor.contextToolbars |  |


### Toolbar Menus

New buttons are added to the global

editor.settings.menus

* Improvement -> now shows toggled state
* Improved mouse and keyboard nav

