
The following new features were added to the TinyMCE 5.0 RC version.

### Context Menu

The context menu is a new configurable component added in TinyMCE 5.0 . It appears when the user right-clicks in the editable area. By default, it does not disable the operating system's native context menu, if there are no items to display at the cursor position the native context menu will be shown.

The context menu supports both individual menu items and dynamic context menu sections. Refer to the [context menu]({{site.baseurl}}/ui-components/contextmenu/) documentation, for more information.

### Context Toolbars

A context toolbar is a pop-up toolbar that appears when a specific type of content is focused. It contains the toolbar buttons relevant to that content. The context toolbar makes a limited number of suitable choices more visible and readily accessible.

Refer to the [Context Toolbar]({{site.baseurl}}/ui-components/contexttoolbar/) documentation, for more information.

### Custom Menu Items

The Custom Menu items configurations options have changed in TinyMCE 5.0. The `addMenuItem` has a new configuration. A new method `addToggleMenuItem` has been added which is an explicit method for creating toggle menu items similar to the new special toolbar button methods.

<!-- ### Custom Sidebars

* `editor.addSidebar`, Docs coming soon. -->

### Dialog

The [Dialog]({{site.baseurl}}/ui-components/dialog/) API allows showing dialogs (sometimes referred to as modals) in the user application. For example, the plugin that is used to view the source code is an example of a simple dialog that displays the HTML code from the content.

This API supports the use of dynamic content for all aspects and is easily configurable and overridable. The dialogs can be used to display complex information by using layouts components like tabs or columns to help present information to the user (e.g., help dialog or special characters dialog are tabbed dialogs).

### Format Painter 1.0

The `Format Painter` premium plugin allows copying and pasting formatting (such as font style and size) from one location to another. The Format Painter is capable of working with a wide variety of formats and styles such as inline & block formats and table styles.

The Format Painter may be used through keyboard shortcuts or a toolbar button.  The Format Painter premium plugin will be available to use with TinyMCE in the early weeks of January 2019.

<!-- Refer to the [Format Painter]({{site.baseurl}}/plugins/formatpainter/) documentation, for more information.-->

<!-- ### Icon Packs

- New Section [(DOC-161)](https://ephocks.atlassian.net/browse/DOC-161)

### Modernize default content in TinyMCE 5.0

- New Section [(DOC-162)](https://ephocks.atlassian.net/browse/DOC-162) -->

### Keyboard navigation and tooltips improvements

TinyMCE is up-to-date with the latest accessibility standards. This includes the review of shortcuts and ensuring tooltips when used with keyboard navigation. The editor can now reflect accurately where and what a user is interacting with.

A new experimental feature has been added that allows using the tab across all TinyMCE toolbars, sidebars, content, and footer bar. This allows more granular control to quickly jump to the appropriate editor control and then navigate down to its specific feature sets.

> TinyMCE is the only editor to have this feature!

### Modern codebase

TinyMCE 5.0 codebase has been extensively rewritten with the focus on converting the UI components to a more modern UI framework. As a consequence of this rewrite, all the related features have been updated.

The new framework takes advantage of the latest CSS3 features for consistent styling and is ARIA [WCAG 2.1 standards](https://www.w3.org/WAI/standards-guidelines/wcag/) compliant.

The new UI framework has a stricter API for creating components, which means that the code is more structured and has an in-built validation combined with TypeScript. This strictness makes the code cleaner, more stable, and easier to maintain and troubleshoot.

### New theme - Silver

TinyMCE  5.0 uses a new theme **Silver** and a new skin **Oxide** which uses more modern CSS such as `flexbox`.

A **Skin** in Tinymce is used to make changes to the appearance of the editor, for example, colors, margins, paddings, fonts, icons, etc.

A **Theme** creates the editor construction (left, top, bottom, or right of the editing area - vertical or horizontal, inline or outside, etc.).

A skin usually changes the color scheme of a button, dialog, etc. while the theme applies to the whole editor including its functionality and has dependant skins to change the appearance.

In TinyMCE 5.0 the **Silver** theme contains a set of configurable UI components that could be used to replace the current customizations (modern, inline, and inlite theme). Silver is enabled by default if a theme is not specified.

### Page Embed

The **Page Embed** premium plugin allows inserting content from another source, such as an advertisement, on a Web page.

This plugin is used to embed another document within the current HTML document and display this content, including scrollbars and borders.

Using the Page Embed feature can enable including content like Google maps or a video from YouTube in the website content.

The embedded content is an independent HTML document, referenced in the `src` attribute of each element. Hence it is a fully independent resource, referenced from the current document.

The Page Embed premium plugin will be available to use with TinyMCE in the early weeks of February 2019.

<!-- Refer to the [Page Embed]({{site.baseurl}}/plugins/pageembed/) documentation, for more information.-->

### Permanent Pen 1.0

The Permanent Pen is a premium plugin that allows adding comments or responses in emails or other documents, without having to change the text color or style.

For collaborative projects, the Permanent Pen enables adding text in a different color, typeface and type style, or font than the default font settings. This allows each user to work in a different colored permanent pen making it easy for everyone to see who contributed to the document by the color of the text.

Permanent Pen only works in a rich text field such as the body of a message.

For premium users, the Permanent Pen function is available in the toolbar. Click anywhere in the text field to use the Permanent Pen function.

The Permanent Pen premium plugin will be available to use with TinyMCE in the early weeks of February 2019.

<!-- Refer to the [Permanent Pen]({{site.baseurl}}/plugins/permanentpen/) documentation, for more information.-->

### Tables

Tables are better in TinyMCE 5.0 editor. Creating and configuring tables in TinyMCE 5.0 is simpler.

This feature has been enhanced by modifying the code to ensure the styles are correct and consistent. The **Styles** text field has been removed from the advanced table properties dialogs. The dialog configuration is now much less confronting and confusing for non-developers.

"Border" input field in the table properties dialog is now called "Border width" for clarity. Refer to the [Tables]({{site.baseurl}}/plugins/table/) documentation, for more information. Tables are enriched with the following new additions:

* **Using CSS for styling** - TinyMCE 5.0 uses CSS more for styling. Thus few legacy and outdated data attributes that were being configured on tables, rows, and cells and no longer adhered to the industry best practices, were removed. HTML is now cleaner and shorter.

* **Autofill Values** - In TinyMCE 5.0, the **Autofill** feature is used while opening a properties dialog with a single table, row, or cell selected. The dialog will fill automatically with the relevant existing values. In TinyMCE 4.x., if multiple rows or cells are selected to open the relevant properties dialog, all the dialog fields are left blank. In TinyMCE 5.0, fields which have the same values for all the selected rows or cells are filled automatically, and the fields which have no existing value or have different values are left empty.

### Toolbar buttons

TinyMCE 5.0 uses SVG icons for a better crisp look. Buttons are now added via methods in `editor.ui.registry` rather than `editor` e.g. `editor.ui.registry.addButton()` instead of `editor.addButton()`. The list of all registered toolbar buttons is also now in `editor.ui.registry` e.g. `editor.ui.registry.getAll().buttons` rather than `editor.buttons`.

To make the creation of custom toolbar buttons easier, new methods were added for split, toggle, and menu toolbar buttons with configuration options specific to the button type.

Refer to the [Toolbar Buttons]({{site.baseurl}}/ui-components/toolbarbuttons/) documentation, for more information.

### Menu items

Menu items are now added via methods in `editor.ui.registry` rather than `editor` e.g. `editor.ui.registry.addMenuItem()` instead of `editor.addMenuItem()`. The list of all registered menu items is also now in `editor.ui.registry` e.g. `editor.ui.registry.getAll().menuItems` rather than `editor.menuItems`.

### UI accessibility

The new TinyMCE 5.0 editor has improved UI accessibility for a diverse set of users. Tiny is committed to adhering to WCAG 2.1 standards to ensure content is accessible to everyone.

TinyMCE 5.0 conforms to WCAG 2.1 standards and has a stricter editor UI and workflow to offer a much more accessibility-compliant interface and a consistent workflow. TinyMCE UI can be mouse or keyboard driven.

The new UI delivers a consistent user experience when used with screen readers or browsers in various modes like high contrast on both mobile and desktop platforms. While this may impact a developer's customization abilities, they receive a more overall consistent user experience.

<!-- ### UI microcopy audit

- New Section [(DOC-163)](https://ephocks.atlassian.net/browse/DOC-163) -->







