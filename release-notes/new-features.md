---
layout: default
title: New Features and Enhancements
title_nav: New Features
description: These are the new and enhanced features introduced in TinyMCE 5.0.
keywords: new features enhancements technology preview
---

## New Features and Enhancements

### Context Menu

The ContextMenu can provide a simple list of clickable commands, or offer an in-menu form. This makes the most straightforward attribute modifications possible. TinyMCE 5.0 offers the ContextMenu Plugin that is designed for web applications in need of menus on a possibly large amount of objects. Now, a single menu is defined that can be used by multiple objects and a ContextMenu doesn't need to bind itself to the triggering objects. This allows injecting and removing triggers without having to re-initialize or update ContextMenu.

### Context Toolbars

The Context Toolbar configures its buttons based on the type of object selected in the Tree Outline. The Context Toolbar makes a limited number of relevant choices more visible and readily accessible.

<!-- ### Custom Menu Items

* `editor.menuitems`, [see configuration]({{site.baseurl}}/components/toolbarbuttons/components/menu/).

### Custom Sidebars

* `editor.addSidebar`, Docs coming soon. -->

### Dialog

The Dialog plugin is created for showing dialogs (sometimes referred to as modals) in your application. The plugin supports the use of dynamic content for all aspects and is easily configurable/overridable. To display simple information (e.g., source code plugin, displays the HTML code from the content in the dialog).

### Format Painter 1.0

The `Format Painter` plugin allows a user to copy and paste formatting from one location to another, such as font style and size. The format painter is capable of working with a wide variety of formats and styles such as inline & block formats and table styles.
The format painter may be used either through keyboard shortcuts or a toolbar button. For more information, please see the [Format Painter]({{site.baseurl}}/plugins/formatpainter/) documentation.

<!-- ### Icon Packs

- New Section [(DOC-161)](https://ephocks.atlassian.net/browse/DOC-161)

### Modernize default content in TinyMCE 5.0

- New Section [(DOC-162)](https://ephocks.atlassian.net/browse/DOC-162) -->

### New Theme

### Silver

In TinyMCE 5.0 the **Silver** theme contains a set of configurable UI components that could be used to replace the current customizations (modern, inline, and inlite theme). Silver is enabled by default. If you do not specify a theme, it will default to `Silver`.

### New UI

It creates CSS and bundles resources like icon fonts and images for the UI.

<!-- ### Permanent Pen 1.0

The Permanent Pen allows you to add comments or responses in emails or other Notes documents, without having to change the test color or style. You can highlight text in two ways - using a permanent pen or using a highlighter pen. You must be in a rich-text field to use permanent pen and highlighters.


The Permanent Pen enables you to add text in a different color, typeface and type style, or font than the default font settings so that it stands out from the rest of the document. This is especially useful for collaborative projects because each user can work ina different colored permanent pen; everyone can see who contributed to the document by the color of the text.


This feature is easier to use when you want to apply the same text formatting to noncontagious text that you have already typed, or when you are inserting new text into existing text such as comments. Permanent Pen only works in a rich text field such as the body of a message.


The Permanent Pen function is available in the toolbar. When you click the Permanent pen icon and begin typing, the input defaults to `Arial` `bold` font; font size `12` and font color `red`. To disable the Permanent Pen function, click the Permanent pen icon again.


You can click anywhere in the text field to use the Permanent Pen function. To change the text style while Permanent Pen is enabled, right-click to open the **Context** menu, then select **Permanent pen** properties to open the **Permanent pen** properties dialog. -->

### Shortcut Key:; Audit & Add to Tooltips

Our developers at Tiny have been working hard to keep TinyMCE up-to-date with the latest accessibility standards. This includes the review of shortcuts and ensuring tooltips when used with keyboard navigation.
The editor can now reflect accurately where and what a user is interacting with. We have also added a new experimental feature that allows users to be able to tab across all our toolbars, sidebars, content and footer bar. This allows more granular control to quickly jump to the appropriate editor control and then navigate down to its specific feature sets.

> TinyMCE is the only editor to have this feature!

### Tables

#### Removed Styles

* Styles text field has been removed from the advanced table of the dialogs.
* The code is now much less confronting/confusing for non developers. This also means we have more control over the table styles and therefore are better able to ensure the styles are correct.
* We have improved how styles are set and retrieved from tables/rows/cells, so should be more reliable.

#### Using CSS for styling

Shifted to using CSS more for styling, and therefore was able to remove a few legacy data attributes that we were configuring on tables/rows/cells which are no longer good practice to use. HTML is now cleaner and shorter.

#### Autofill Values

When opening a properties dialog with a single table/row/cell selected, the dialog will autofill with the relevant existing values. In TinyMCE 4.x., if you select multiple rows or cells and open the relevant properties dialog, all the dialog fields are left blank. In Tiny 5.0, fields which have the same values for all the selected rows or cells will autofill, and the fields which have no existing value or have differing values will be empty.
"Border" input field in the `tableprops` dialog is now called "Border width" for clarity.

### Toolbar buttons

1. SVG icons for a better crisp look.
2. Buttons are now added via methods in `editor.ui.registry` rather than `editor` e.g. `editor.ui.registry.addButton()` instead of `editor.addButton()`.
3. To make the creation of custom toolbar buttons easier, new methods were added for split, toggle, and menu toolbar buttons with configuration options specific to the button type.

### Toolbar Menus

* New buttons are added to the global `editor.settings.menus` which is an enhancement since, it now shows the toggled state.
* Improved mouse and keyboard navigation.

### UI Accessibility

The new TinyMCE 5.0 has a better UI accessibility for a diverse set of users. We at Tiny are committed to adhering to WCAG 2.1 standards to ensure content is accessible to everyone.
Our UI can be mouse or keyboard driven. The new UI delivers a consistent user experience when used with screen readers or browsers in various modes like high contrast on both mobile and desktop platforms.
TinyMCE 5.0 conforms to WCAG 2.1 standards and has a stricter editor UI and workflow to offer a much more accessibility compliant interface and a consistent workflow. While this may impact a developer's customization abilities, you will receive a more overall consistent user experience.

<!-- ### UI Microcopy Audit

- New Section [(DOC-163)](https://ephocks.atlassian.net/browse/DOC-163) -->







