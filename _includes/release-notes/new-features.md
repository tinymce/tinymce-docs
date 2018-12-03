
The following new features were added to the TinyMCE 5.0 Beta version.

### Context Menu

The context menu is a new configurable component added in TinyMCE 5.0 . It appears when the user right-clicks in the editable area. By default, it does not disable the operating system's native context menu, if there are no items to display at the cursor position the native context menu will be shown. The context menu supports both individual menu items and dynamic context menu sections. Refer to the [context menu]({{site.baseurl}}/ui-components/contextmenu/) documentation, for more information.

### Context Toolbars

A context toolbar is a pop-up toolbar that appears when a specific type of content is focused. It contains the toolbar buttons relevant to that content. The context toolbar makes a limited number of relevant choices more visible and readily accessible. Refer to the [Context Toolbar]({{site.baseurl}}/ui-components/contexttoolbar/) documentation, for more information.

### Custom Menu Items

The Custom Menu items configurations options has changed in TinyMCE 5.0. The `addMenuItem` has a new configuration. A new method `addToggleMenuItem` has been added which is an explicit method for creating toggle menu items similar to the new special toolbar button methods. Refer to the [configuration]({{site.baseurl}}/ui-components/typesoftoolbarbuttons/#menunbspbutton) documentation, for more information on `editor.menuitems`.

<!-- ### Custom Sidebars

* `editor.addSidebar`, Docs coming soon. -->

### Dialog

The [Dialog]({{site.baseurl}}/ui-components/dialog/) component is created for showing dialogs (sometimes referred to as modals) in the user application. The plugin supports the use of dynamic content for all aspects and is easily configurable and overridable. To display simple information, e.g., a source code plugin displays the HTML code from the content in the dialog.

### Format Painter 1.0

The `Format Painter` plugin allows the copying and pasting formatting from one location to another, such as font style and size. The format painter is capable of working with a wide variety of formats and styles such as inline & block formats and table styles.
The format painter may be used either through keyboard shortcuts or a toolbar button.

<!--Refer to the [Format Painter]({{site.baseurl}}/plugins/formatpainter/) documentation, for more information.-->

<!-- ### Icon Packs

- New Section [(DOC-161)](https://ephocks.atlassian.net/browse/DOC-161)

### Modernize default content in TinyMCE 5.0

- New Section [(DOC-162)](https://ephocks.atlassian.net/browse/DOC-162) -->

### Keyboard navigation and tooltips improvements

TinyMCE is up-to-date with the latest accessibility standards. This includes the review of shortcuts and ensuring tooltips when used with keyboard navigation.
The editor can now reflect accurately where and what a user is interacting with. A new experimental feature has been added that allows using the tab across all TinyMCE toolbars, sidebars, content, and footer bar. This allows more granular control to quickly jump to the appropriate editor control and then navigate down to its specific feature sets.

> TinyMCE is the only editor to have this feature!

### Modern codebase

TinyMCE 5.0 codebase has been extensively rewritten with the focus on converting the UI components to a more modern UI framework. As a consequence of this rewrite, all the related features have been updated. The new framework takes advantage of the latest CSS3 features for consistent styling and is ARIA [IBM standards](https://www.ibm.com/able/checklists.html) compliant. The new UI framework has a stricter API for creating components, which means that the code is more structured and has an in-built validation combined with TypeScript. This strictness makes the code cleaner, more stable, and easier to maintain and troubleshoot.

### New theme - Silver

TinyMCE  5.0 uses a new theme **Silver** and a new skin **Oxide** which uses more modern CSS such as `flexbox`.

A **Skin** in Tinymce is used to make changes to the appearance of the editor, for example, colors, margins, paddings, fonts, icons, etc. A **Theme** creates the editor construction (left, top, bottom, or right of the editing area - vertical or horizontal, inline or outside, etc.). A skin usually changes the color scheme of a button, dialog, etc. while the theme applies to the whole editor including its functionality and has child skins to change the appearance.

In TinyMCE 5.0 the **Silver** theme contains a set of configurable UI components that could be used to replace the current customizations (modern, inline, and inlite theme). Silver is enabled by default if a theme is not specified.

The skin creator is coupled with the `tinymce.ui` framework, so it works with the modern theme, the inlite theme, and to some extent MoxieManager.

<!-- ### Permanent Pen 1.0

The Permanent Pen allows adding comments or responses in emails or other Notes documents, without having to change the test color or style. Text can be highlighted in two ways - using a permanent pen or using a highlighter pen. Permanent pen and highlighters can only be used in a rich-text field.

The Permanent Pen enables adding text in a different color, typeface and type style, or font than the default font settings so that it stands out from the rest of the document. This is especially useful for collaborative projects because each user can work in a different colored permanent pen; everyone can see who contributed to the document by the color of the text.

This feature is easier to use when the same text formatting is applied to an already entered noncontagious text, or when new text is inserted into an existing document such as comments. Permanent Pen only works in a rich text field such as the body of a message.

The Permanent Pen function is available in the toolbar. When the Permanent pen icon is clicked to begin typing, the input defaults to `Arial` `bold` font; font size `12` and font color `red`. To disable the Permanent Pen function, click the Permanent pen icon again.

Click anywhere in the text field to use the Permanent Pen function. To change the text style while Permanent Pen is enabled, right-click to open the **Context** menu, then select **Permanent pen** properties to open the **Permanent pen** properties dialog. -->

### Tables

Tables are better in TinyMCE 5.0 editor. Creating and configuring tables in TinyMCE 5.0 is less cumbersome. We have enhanced this feature by modifying the code to ensure the styles are correct and consistent. The **Styles** text field has been removed from the advanced table of the dialogs. The code is now much less confronting and confusing for non-developers. This also means more control can be exercised over the table styles to ensure better the styles are correct. The process of how styles are set and retrieved from tables, rows, or cells, have been improved to d be more reliable. "Border" input field in the table properties dialog is now called "Border width" for clarity. Refer the [Tables]({{site.baseurl}}/plugins/table/) documentation, for more information.

* **Using CSS for styling** - TinyMCE 5.0 uses CSS more for styling. Thus few legacy and outdated data attributes that were being configured on tables, rows, and cells and no longer adhered to the industry best practices, were removed. HTML is now cleaner and shorter.

* **Autofill Values** - In TinyMCE 5.0, the **Autofill** feature is used while opening a properties dialog with a single table, row, or cell selected. The dialog will fill automatically with the relevant existing values. In TinyMCE 4.x., if multiple rows or cells are selected to open the relevant properties dialog, all the dialog fields are left blank. In TinyMCE 5.0, fields which have the same values for all the selected rows or cells are filled automatically, and the fields which have no existing value or have different values are left empty.

### Toolbar buttons

TinyMCE 5.0 uses SVG icons for a better crisp look. Buttons are now added via methods in `editor.ui.registry` rather than `editor` e.g. `editor.ui.registry.addButton()` instead of `editor.addButton()`. To make the creation of custom toolbar buttons easier, new methods were added for split, toggle, and menu toolbar buttons with configuration options specific to the button type.
Refer the [Toolbar Buttons]({{site.baseurl}}/ui-components/toolbarbuttons/) documentation, for more information.

### UI accessibility

The new TinyMCE 5.0 has a better UI accessibility for a diverse set of users. Tiny is committed to adhering to WCAG 2.1 standards to ensure content is accessible to everyone.
TinyMCE UI can be mouse or keyboard driven. The new UI delivers a consistent user experience when used with screen readers or browsers in various modes like high contrast on both mobile and desktop platforms.
TinyMCE 5.0 conforms to WCAG 2.1 standards and has a stricter editor UI and workflow to offer a much more accessibility-compliant interface and a consistent workflow. While this may impact a developer's customization abilities, they receive a more overall consistent user experience.

<!-- ### UI microcopy audit

- New Section [(DOC-163)](https://ephocks.atlassian.net/browse/DOC-163) -->







