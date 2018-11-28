---
layout: default
title: New and enhanced features in TinyMCE 5.0 Beta
title_nav: New features
keywords: new features enhancements technology preview
---

The following new features were added to the TinyMCE 5.0 Beta version.

## Context Menu

The context menu is a new configurable component added in TinyMCE 5.0 . It appears when the user right clicks in the editable area. By default it does not disable the operating system's native context menu, if there are no items to display at the cursor position the native context menu will be shown. See the [context menu]({{site.baseurl}}/ui-components/contextmenu/) documentation for more information.

The context menu supports both individual menu items and dynamic context menu sections. See the

## Context Toolbars

A context toolbar is a pop-up toolbar that appears when you focus specific types of content, and which contains toolbar buttons relevant to that content. The context toolbar makes a limited number of relevant choices more visible and readily accessible. For more information, please see the [Context Toolbar]({{site.baseurl}}/ui-components/contexttoolbar/) documentation.

## Custom Menu Items

The Custom Menu items configurations options has changed in TinyMCE 5.0. The `addMenuItem` has a new configuration. A new method `addToggleMenuItem` has been added which is an explicit method for creating toggle menu items similar to the new special toolbar button methods. For more details on `editor.menuitems`, see the [configuration]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#menunbspbutton) docs.

<!-- ### Custom Sidebars

* `editor.addSidebar`, Docs coming soon. -->

## Dialog

The [Dialog]({{site.baseurl}}/ui-components/dialog/) component is created for showing dialogs (sometimes referred to as modals) in your application. The plugin supports the use of dynamic content for all aspects and is easily configurable and overridable. To display simple information e.g., source code plugin, displays the HTML code from the content in the dialog.

## Format Painter 1.0

The `Format Painter` plugin allows a user to copy and paste formatting from one location to another, such as font style and size. The format painter is capable of working with a wide variety of formats and styles such as inline & block formats and table styles.
The format painter may be used either through keyboard shortcuts or a toolbar button. For more information, please see the [Format Painter]({{site.baseurl}}/plugins/formatpainter/) documentation.

<!-- ## Icon Packs

- New Section [(DOC-161)](https://ephocks.atlassian.net/browse/DOC-161)

## Modernize default content in TinyMCE 5.0

- New Section [(DOC-162)](https://ephocks.atlassian.net/browse/DOC-162) -->

## Keyboard Navigation and Tooltips Improvements

Our developers at Tiny have been working hard to keep TinyMCE up-to-date with the latest accessibility standards. This includes the review of shortcuts and ensuring tooltips when used with keyboard navigation.
The editor can now reflect accurately where and what a user is interacting with. We have also added a new experimental feature that allows users to be able to tab across all our toolbars, sidebars, content and footer bar. This allows more granular control to quickly jump to the appropriate editor control and then navigate down to its specific feature sets.

> TinyMCE is the only editor to have this feature!

## Modern Codebase

TinyMCE 5.0 codebase has been extensively rewritten focus on converting the UI components to a more modern UI framework. As of consequence of this rewrite, all the related features have been updated. The new framework takes advantage of the latest CSS3 features for consistent styling and is ARIA [IBM standards](https://www.ibm.com/able/checklists.html) compliant. The new UI framework has a stricter API for creating components, which means that the code is more structured and has an in-built validation combined with TypeScript. This strictness makes our code cleaner and more stable. The new TinyMCE 5.0 code is cleaner and easier to maintain and troubleshoot.

## New Theme - Silver

TinyMCE  5.0 uses a new theme **Silver** and a new skin **Oxide** which uses more modern CSS such as `flexbox`.

A **SKIN** in Tinymce is used to make changes to the appearance of the editor, for example, colors, margins, paddings, fonts, icons, etc. A **Theme** creates the editor construction (left, top, bottom, or right of the editing area - vertical or horizontal, inline or outside, etc.). A skin usually changes the color scheme of a button, dialog, etc. while the theme applies to the whole editor including its functionality and has child skins to change the appearance.

In TinyMCE 5.0 the **Silver** theme contains a set of configurable UI components that could be used to replace the current customizations (modern, inline, and inlite theme). Silver is enabled by default. If you do not specify a theme, it will default to `Silver`.

The skin creator is coupled with the `tinymce.ui` framework, so it works with the modern theme, the inlite theme, and to some extent MoxieManager.

<!-- ## Permanent Pen 1.0

The Permanent Pen allows you to add comments or responses in emails or other Notes documents, without having to change the test color or style. You can highlight text in two ways - using a permanent pen or using a highlighter pen. You must be in a rich-text field to use permanent pen and highlighters.

The Permanent Pen enables you to add text in a different color, typeface and type style, or font than the default font settings so that it stands out from the rest of the document. This is especially useful for collaborative projects because each user can work ina different colored permanent pen; everyone can see who contributed to the document by the color of the text.

This feature is easier to use when you want to apply the same text formatting to noncontagious text that you have already typed, or when you are inserting new text into existing text such as comments. Permanent Pen only works in a rich text field such as the body of a message.

The Permanent Pen function is available in the toolbar. When you click the Permanent pen icon and begin typing, the input defaults to `Arial` `bold` font; font size `12` and font color `red`. To disable the Permanent Pen function, click the Permanent pen icon again.

You can click anywhere in the text field to use the Permanent Pen function. To change the text style while Permanent Pen is enabled, right-click to open the **Context** menu, then select **Permanent pen** properties to open the **Permanent pen** properties dialog. -->

## Tables

Tables are better in TinyMCE 5.0 editor. Creating and configuring tables in TinyMCE 5.0 is less cumbersome. We have enhanced this feature by modifying the code to ensure the styles are correct and consistent. Styles text field has been removed from the advanced table of the dialogs. The code is now much less confronting and confusing for non-developers. This also means we have more control over the table styles and therefore are better able to ensure the styles are correct. We have improved how styles are set and retrieved from tables, rows, or cells, so should be more reliable."Border" input field in the table properties dialog is now called "Border width" for clarity. For more information, see the [Tables]({{site.baseurl}}/plugins/table/) documentation.

### 1. Using CSS for styling

In TinyMCE 5.0, we have shifted to using CSS more for styling. We were thus able to remove a few legacy and outdated data attributes that we were configuring on tables, rows, and cells which no longer adhere to the industry best practices. HTML is now cleaner and shorter.

### 2. Autofill Values

In TinyMCE 5.0, the **Autofill** feature is used while opening a properties dialog with a single table, row, or cell selected. The dialog will fill automatically with the relevant existing values. In TinyMCE 4.x., if you selected multiple rows or cells and open the relevant properties dialog, all the dialog fields were left blank. In TinyMCE 5.0, fields which have the same values for all the selected rows or cells will be filled automatically, and the fields which have no existing value or have differing values will be empty.

## Toolbar buttons

TinyMCE 5.0 uses SVG icons for a better crisp look. Buttons are now added via methods in `editor.ui.registry` rather than `editor` e.g. `editor.ui.registry.addButton()` instead of `editor.addButton()`. To make the creation of custom toolbar buttons easier, new methods were added for split, toggle, and menu toolbar buttons with configuration options specific to the button type.
For more information, see the [Toolbar Buttons]({{site.baseurl}}/ui-components/toolbarbuttons/) documentation.

## UI Accessibility

The new TinyMCE 5.0 has a better UI accessibility for a diverse set of users. We at Tiny are committed to adhering to WCAG 2.1 standards to ensure content is accessible to everyone.
Our UI can be mouse or keyboard driven. The new UI delivers a consistent user experience when used with screen readers or browsers in various modes like high contrast on both mobile and desktop platforms.
TinyMCE 5.0 conforms to WCAG 2.1 standards and has a stricter editor UI and workflow to offer a much more accessibility-compliant interface and a consistent workflow. While this may impact a developer's customization abilities, you will receive a more overall consistent user experience.

<!-- ## UI Microcopy Audit

- New Section [(DOC-163)](https://ephocks.atlassian.net/browse/DOC-163) -->







