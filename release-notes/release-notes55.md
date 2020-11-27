---
layout: default
title: TinyMCE 5.5
title_nav: TinyMCE 5.5
description: Release notes for TinyMCE 5.5
keywords: releasenotes bugfixes
---

These release notes provide an overview of the changes for {{site.productname}} 5.5, including:

- [TinyMCE 5.5 new features and enhancements](#tinymce54newfeaturesandenhancements)
- [Accompanying Premium Plugin changes](#accompanyingpremiumpluginchanges)
- [Minor changes for TinyMCE 5.5](#minorchangesfortinymce54)
- [General bug fixes](#generalbugfixes)
- [Security fixes](#securityfixes)
- [Deprecated features](#deprecatedfeatures)
- [Known issues](#knownissues)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## TinyMCE 5.5 new features and enhancements

The following new features and enhancements were added for the {{site.productname}} 5.5 release.

### TinyMCE core Typescript types are now public

The {{site.productname}} core now has a fully-typed programming interface. This will help developers by allowing the {{site.productname}} APIs to be integrated into developer tools. This change can help developers avoid incorrect usage of the {{site.productname}} APIs, reducing the likelihood of bugs in custom UI components and plugins. This will also allow some IDEs to provide autocompletion for plugin and component development.

For example:

| Example of {{site.productname}} TypeScript autocompletion in<br>Microsoft Visual Studio Code | Example of {{site.productname}} TypeScript configuration option type error in<br>Microsoft Visual Studio Code |
|:---:|:---:|
|![Screenshot of code autocompetion for adding a custom user interface component using {{site.productname}} APIs in Microsoft Visual Studio Code]({{site.baseurl}}/images/550-release_notes-vscode-tinymce-autocomplete.png)|![Screenshot of a type error while adding {{site.productname}} configuration options in Microsoft Visual Studio Code]({{site.baseurl}}/images/550-release_notes-vscode-tinymce-inline-type-error.png)|

For information on:

- Creating custom {{site.productname}} user interface components; such as toolbar buttons, menu items, and dialogs; see: [User interface components]({{site.baseurl}}/ui-components/).
- Creating a plugin for {{site.productname}}, see: [Create a plugin for {{site.productname}}]({{site.baseurl}}/advanced/creating-a-plugin/).
- The {{site.productname}} APIs, see: [The {{site.productname}} API Reference]({{site.baseurl}}/api/).

### New line height support in the editor

{{site.productname}} 5.5 now supports adjustable line heights. There is a new `lineheight` button available for toolbars, and a new `lineheight` menu item (included by default in the format menu). There is also a new `LineHeight` editor command to change line height and a `LineHeight` query command value to get the current line height.

For information on:

- The `lineheight` toolbar button, see: [Available Toolbar Buttons - The core toolbar buttons]({{site.baseurl}}/advanced/available-toolbar-buttons/#thecoretoolbarbuttons).
- The `lineheight` menu item, see: [Available Menu Items - The core menu items]({{site.baseurl}}/advanced/available-menu-items/#the-core-menu-items).
- The `LineHeight` editor command, see: [Commands available for {{site.productname}} - Core Editor commands]({{site.baseurl}}/advanced/editor-command-identifiers/#coreeditorcommands).
- The `LineHeight` query command value, see: [Commands available for {{site.productname}} - Available query command values]({{site.baseurl}}/advanced/editor-command-identifiers/#availablequerycommandvalues).

### New persistent toolbar option for inline mode

A new `toolbar_persist` option has been added for disabling the automatic show and hide behavior of the toolbar and menu bar for inline editors.

For information on the new persistent toolbar option, see: [User interface options - `toolbar_persist`]({{site.baseurl}}/configure/editor-appearance/#toolbar_persist).

### The toolbar drawer can now be controlled using commands

A new editor command (`execCommand('ToggleToolbarDrawer')`) and editor state query (`queryCommandState('ToggleToolbarDrawer')`) have been added. The command allows the Toolbar Drawer (which holds excess toolbar buttons) to be opened and closed using editor commands. The current state of the Toolbar Drawer can also be queried.

For information on:

- The Toolbar Drawer, see: [User interface options - `toolbar_mode`]({{site.baseurl}}/configure/editor-appearance/#toolbar_mode).
- Commands and query commands available in {{site.productname}}, see: [Commands Available for TinyMCE]({{site.baseurl}}/advanced/editor-command-identifiers/).

### Nested menu items for class list, link list, and image list options

{{site.productname}} 5.5 reintroduces the ability to add nested menu items to the following options:

- `image_list`
- `image_class_list`
- `link_class_list`
- `link_list`
- `table_class_list`
- `table_cell_class_list`
- `table_row_class_list`

For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'link',
  menubar: 'insert',
  toolbar: 'link',
  link_list: [
    {title: '{{site.companyname}} Home Page', value: '{{site.url}}'},
    {title: '{{site.companyname}} Blog', value: '{{site.url}}/blog'},
    {title: '{{site.productname}} Support resources',
      menu: [
        {title: '{{site.productname}} Documentation', value: '{{site.url}}/docs/'},
        {title: '{{site.productname}} on Stack Overflow', value: '{{site.communitysupporturl}}'},
        {title: '{{site.productname}} GitHub', value: 'https://github.com/tinymce/'}
      ]
    }
  ]
});
```

For information on using:

- The `image_list` option, see: [Image plugin - `image_list`]({{site.baseurl}}/plugins/opensource/image/#image_list).
- The `image_class_list` option, see: [Image plugin - `image_class_list`]({{site.baseurl}}/plugins/opensource/image/#image_class_list).
- The `link_class_list` option, see: [Link plugin - `link_class_list`]({{site.baseurl}}/plugins/opensource/link/#link_class_list).
- The `link_list` option, see: [Link plugin - `link_list`]({{site.baseurl}}/plugins/opensource/link/#link_list).
- The `table_class_list` option, see: [Table plugin - `table_class_list`]({{site.baseurl}}/plugins/opensource/table/#table_class_list).
- The `table_cell_class_list` option, see: [Table plugin - `table_cell_class_list`]({{site.baseurl}}/plugins/opensource/table/#table_cell_class_list).
- The `table_row_class_list` option, see: [Table plugin - `table_row_class_list`]({{site.baseurl}}/plugins/opensource/table/#table_row_class_list).

### Added the ability to use the browser full screen mode with the `fullscreen` plugin

A new `fullscreen_native` option allows the editor to use the browser's full screen mode instead of only filling the browser viewport. When enabled and the user activates full screen mode, the editor will fill the whole screen, the same as full screen mode for online videos.

For information on the `fullscreen_native` option, see: [Full Screen Plugin - `fullscreen_native`]({{site.baseurl}}/plugins/opensource/fullscreen/#fullscreen_native).

### New `contextmenu_avoid_overlap` option for controlling the placement of context menus

The new `contextmenu_avoid_overlap` option can be used to prevent context menus from covering the selected node if the node matches the specified [CSS selector](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors).

For information on the `contextmenu_avoid_overlap` option, see: [User interface options - `contextmenu_avoid_overlap`]({{site.baseurl}}/configure/editor-appearance/#contextmenu_avoid_overlap).

### Added `colgroup` support for tables

A new `table_use_colgroups` option allows `colgroup` and `col` elements to be added to new tables. The `colgroup` and `col` elements can be used to set column widths. Other attributes are not supported in the TinyMCE 5.5 release.

For information on the `table_use_colgroups` option, see: [Table plugin - `table_use_colgroups`]({{site.baseurl}}/plugins/opensource/table/#table_use_colgroups).

### Added cut, copy, and paste table column menu items

Four new menu items have been added to the Table plugin to assist with moving and duplicating table columns:

- `tablecutcolumn`
- `tablecopycolumn`
- `tablepastecolumnbefore`
- `tablepastecolumnafter`

For information on the Table plugin menu items, see: [Table plugin - Menu items]({{site.baseurl}}/plugins/opensource/table/#menuitems).

### New `table_column_resizing` option for controlling table column resizing

A new `table_column_resizing` option sets whether a table or other columns are resized when a user resizes a table column.

For information on the `table_column_resizing` option, see: [Table plugin - `table_column_resizing`]({{site.baseurl}}/plugins/opensource/table/#table_column_resizing).

### Changes to the default table CSS

The CSS files bundled with {{site.productname}} have been updated to better support the styling options available in the `table` dialog.

- For information on the bundled CSS files, see: [Customizing the editable area with `content_css`]({{site.baseurl}}/general-configuration-guide/customize-ui/#customizingtheeditableareawithcontent_css).
- To view the CSS files, see: [tinymce-dist GitHub Repository - Content CSS files](https://github.com/tinymce/tinymce-dist/tree/master/skins/content).

### New listbox component for custom dialogs

The new listbox component for custom dialogs is a composite component with a label and a dropdown list of options for users to select from. This component displays a menu-like dropdown and allows nested options to be shown to users.

For information on the listbox dialog component, see: [Dialog components - listbox]({{site.baseurl}}/ui-components/dialogcomponents/#listbox).

### New `hasPlugin` for detecting the availability of plugins

The new `hasPlugin` API method can be used to detect if a plugin is present in the editor configuration or if the plugin has been loaded. This API is useful if custom functionality such as a custom plugin, is dependent on the APIs of a plugin.

For information on the `editor.hasPlugin()` API, see: [tinymce.Editor APIs - `hasPlugin`]({{site.baseurl}}/api/tinymce/tinymce.editor/#hasplugin).

### New StyleSheetLoader `unload` and `unloadAll` APIs

Two new APIs have been added for unloading CSS files:

- `unload` - Unloads the specified CSS file if it is not in use.
- `unloadAll` - Accepts a list of URLs and unloads any CSS files not in use.

For information on the `unload` and `unloadAll` APIs, see: [tinymce.dom.StyleSheetLoader]({{site.baseurl}}/api/tinymce.dom/tinymce.dom.stylesheetloader/).

### Leading and trailing whitespace now retained by the `insert` and `setContent` APIs

The following APIs for setting or adding to the editor content have been updated to keep leading and trailing whitespace:

- `editor.insertContent()`
- `editor.selection.setContent()`

For information on:

- The `editor.insertContent()` API, see: [tinymce.Editor APIs - `insertContent`]({{site.baseurl}}/api/tinymce/tinymce.editor/#insertcontent).
- The `editor.selection.setContent()` API, see: [tinymce.dom.Selection APIs - `setContent`]({{site.baseurl}}/api/tinymce.dom/tinymce.dom.selection/#setcontent).

### Changed the Image Tools context toolbar icon

The icon for the Image Tools _image options_ toolbar button has changed from an ellipse icon (![Icon consisting of three dots horizontally aligned across the center of the icon]({{site.baseurl}}/images/icons/image-options.svg)) to match the image icon (![Icon consisting of two hills, a sun above and a border representing a picture frame]({{site.baseurl}}/images/icons/image.svg)).

For information on:

- The Image Tools plugin, see: [Image Tools plugin]({{site.baseurl}}/plugins/opensource/imagetools/).
- The Image Tools context toolbar, see: [Image Tools plugin - `imagetools_toolbar`]({{site.baseurl}}/plugins/opensource/imagetools/#imagetools_toolbar).

For a list of available:

- Image Tools toolbar buttons, see: [Image Tools plugin - Toolbar buttons]({{site.baseurl}}/plugins/opensource/imagetools/#toolbarbuttons).
- {{site.productname}} icons, see: [Icons Available for TinyMCE]({{site.baseurl}}/advanced/editor-icon-identifiers/).

### Improved navigation and deletion for media elements without the `media` plugin

`video` and `audio` HTML elements in the editor content no-longer cause navigation issues and can be deleted without the `media` plugin.

For information on the `media` plugin, see: [Media plugin]({{site.baseurl}}/plugins/opensource/media/).

## Accompanying Premium Plugin changes

The following premium plugin updates were released alongside {{site.productname}} 5.5.

### Accessibility Checker 2.3.0

The {{site.productname}} 5.5 release includes an accompanying release of the **Accessibility Checker** premium plugin.

**Accessibility Checker** 2.3.0 adds the following features:

* A new `a11ychecker_ignored_rules` option for filtering Accessibility Checker rules using the rule identifiers. For information on the `a11ychecker_ignored_rules` option, see: [Accessibility Checker plugin - `a11ychecker_ignored_rules`]({{site.baseurl}}/plugins/premium/a11ychecker/#a11ychecker_ignored_rules).
* A new `a11ychecker_issue_url_callback` option to allow custom URLs to be used for the "more info" links on accessibility checks. For information on the `a11ychecker_issue_url_callback` option, see: [Accessibility Checker plugin - `a11ychecker_issue_url_callback`]({{site.baseurl}}/plugins/premium/a11ychecker/#a11ychecker_issue_url_callback).
* Adds the rule identifier (`id`) to the data returned by the `getReport()` API method. For information on the `getReport()` API method, see: [Accessibility Checker plugin - `getReport()` API method]({{site.baseurl}}/plugins/premium/a11ychecker/#getreport).
* A new `a11ychecker_filter_issues` option for filtering Accessibility Checker report results. For information on the `a11ychecker_filter_issues` option, see: [Accessibility Checker plugin - `a11ychecker_filter_issues`]({{site.baseurl}}/plugins/premium/a11ychecker/#a11ychecker_filter_issue).

**Accessibility Checker** 2.3.0 also provides the following bug fixes:

* Fixed the `toggleAudit` API not accounting for the dialog being closed by dialog buttons or the ESC key.
* Fixed the error message displayed when the filename of an image clashes with the alt text.
* Fixed missing `bg_BG`, `eu` and `id` translations.
* Fixed the editor content scrolling when calling the `getReport` API.
* Fixed incorrect strings used for the next/previous button tooltips.

For information on the Accessibility Checker plugin, see: [Accessibility Checker plugin]({{site.baseurl}}/plugins/premium/a11ychecker/).

### Advanced Code Editor 2.2.0

The {{site.productname}} 5.5 release includes an accompanying release of the **Advanced Code Editor** premium plugin.

**Advanced Code Editor** 2.2.0 adds support for loading the Advanced Code Editor user interface components when the editor is in a ShadowRoot.

For information on the Advanced Code Editor plugin, see: [Advanced Code Editor plugin]({{site.baseurl}}/plugins/premium/advcode/).

### Advanced Tables 1.0.1

The {{site.productname}} 5.5 release includes an accompanying release of the **Advanced Tables** premium plugin.

**Advanced Tables** 1.0.1 has been updated to work with the changes made to the `table` plugin.

**Advanced Tables** 1.0.1 is required for TinyMCE 5.5 or higher.

For information on the Advanced Tables plugin, see: [Advanced Tables plugin]({{site.baseurl}}/plugins/premium/advtable/).

### Comments 2.2.0

The {{site.productname}} 5.5 release includes an accompanying release of the **Comments** premium plugin.

**Comments** 2.2.0 introduces a localized user interface, allowing the Comments interface to render in different languages.

**Comments** 2.2.0 also provides the following bug fixes:

- Fixed the editor's `referrer_policy` setting not working when loading additional resources to improve bundling of the plugin and improving load times.
- Fixed elements incorrectly left in the DOM when the editor was removed.

For a list of supported languages, including professionally translated language packs, see: [Localization options - `language`]({{site.baseurl}}/configure/localization/#language).

For information on the Comments plugin, see: [Comments plugin]({{site.baseurl}}/plugins/premium/comments/).

### Export 0.1.0

{% assign beta_feature = "The Export plugin" %}
{% assign pre-release_type = "Open Beta" %}
{% include misc/beta-note.md %}

A new **Export** plugin is available for beta testing and allows users to export content from the editor as a rasterized PDF.

This plugin will be available to all new and existing customers who have purchased a {{site.tiertwoplan}}, {{site.tierthreeplan}}, or {{site.enterpriseplan}}.

For information on the Export plugin, see: [Export plugin]({{site.baseurl}}/plugins/premium/export/).

### PowerPaste 5.3.3

The {{site.productname}} 5.5 release includes an accompanying release of the **PowerPaste** premium plugin.

**PowerPaste** 5.3.3 fixes missing `bg_BG`, `eu`, and `id` translations.

For information on the PowerPaste plugin, see: [PowerPaste plugin]({{site.baseurl}}/plugins/premium/powerpaste/).

### Spell Checker Pro 2.1.0

The {{site.productname}} 5.5 release includes an accompanying release of the **Spell Checker Pro** premium plugin.

**Spell Checker Pro** 2.1.0 provides:

* An updated the dialog to allow wider buttons for languages with longer strings by removing the _Close_ button (_Cancel_ button in TinyMCE 4).
* Fixed the `spellcheck_dialog` button incorrectly rendering as a split button in TinyMCE 4.

For information on the Spell Checker Pro plugin, see: [Spell Checker Pro plugin]({{site.baseurl}}/plugins/premium/tinymcespellchecker/).

### Tiny Skins and Icon Packs

The {{site.productname}} 5.5 release includes an accompanying release of the **Tiny Skins and Icon Packs**.

The following icon packs have been updated to include new icons for the line height (![Line Height icon: Bidirectional arrow pointing up and down beside four horizontal, stacked lines]({{site.baseurl}}/images/icons/line-height.svg)) and export (![Export icon: A page with an arrow from the center of the page to the right of the page]({{site.baseurl}}/images/icons/export.svg)) toolbar buttons:

- Material
- Small
- Jam
- Thin

For information on using the {{site.productname}} premium icon packs, see: [Tiny Skins and Icon Packs - How to use an icon pack]({{site.baseurl}}/enterprise/premium-skins-and-icon-packs/#howtouseaniconpack).

## Minor changes for TinyMCE 5.5

{{site.productname}} 5.5 introduces the following minor changes:

* Added the ability to remove images on a failed upload using the `images_upload_handler` failure callback.
* Added table related oxide variables to the Style API for more granular control over table cell selection appearance.
* Added new APIs to allow for programmatic control of the inline toolbar visibility.
* Added the `origin` property to the `ObjectResized` and `ObjectResizeStart` events, to specify which handle the resize was performed on.
* Changed the `target` property on fired events to use the native event target. The original target for an open shadow root can be obtained using `event.getComposedPath()`.
* Changed the editor to clean-up loaded CSS stylesheets when all editors using the stylesheet have been removed.
* Changed how CSS manipulates table cells when selecting multiple cells to achieve a semi-transparent selection.
* Deprecated the `Env.experimentalShadowDom` flag.

## General bug fixes

{{site.productname}} 5.5 provides fixes for the following bugs:

* Fixed tables with no borders displaying with the default border styles in the `preview` dialog.
* Fixed loss of whitespace when inserting content after a non-breaking space.
* Fixed the `event.getComposedPath()` function throwing an exception for events fired from the editor.
* Fixed notifications not appearing when the editor is within a ShadowRoot.
* Fixed focus issues with inline dialogs when the editor is within a ShadowRoot.
* Fixed the `template` plugin previews missing some content styles.
* Fixed the `media` plugin not saving the alternative source url in some situations.
* Fixed an issue where column resizing using the resize bars was inconsistent between fixed and relative table widths.
* Fixed an issue where dragging and dropping within a table would select table cells.
* Fixed up and down keyboard navigation not working for inline `contenteditable="false"` elements.
* Fixed dialog not retrieving `close` icon from icon pack.
* Fixed the `unlink` toolbar button not working when selecting multiple links.
* Fixed the `link` dialog not showing the "Text to display" field in some valid cases.
* Fixed the `DOMUtils.split()` API incorrectly removing some content.
* Fixed pressing the escape key not focusing the editor when using multiple toolbars.
* Fixed the `dirty` flag not being correctly set during an `AddUndo` event.
* Fixed `editor.selection.setCursorLocation` incorrectly placing the cursor outside `pre` elements in some circumstances.
* Fixed an exception being thrown when pressing the enter key inside pre elements while `br_in_pre` setting is false.

## Security fixes

Accessibility Checker 2.3.0 provides fixes for the following security issues:

* Fixed a Cross-Site Scripting (XSS) vulnerability in the accessibility issue repair function.

## Deprecated features

The following features have been deprecated with the release of {{site.productname}} 5.5:

- [The premium Spanish (Mexico) language pack has been deprecated](#thepremiumspanishmexicolanguagepackhasbeendeprecated).

### The premium Spanish (Mexico) language pack has been deprecated

With the release of {{site.productname}} 5.5, the premium Spanish (Mexico) language pack (`es_MX`) has been deprecated and will not be updated in the future. The community-translated Spanish (Mexico) language pack is unaffected.

For information on the community maintained language packs, see: [Localization options - `language`]({{site.baseurl}}/configure/localization/#language).

## Known issues

This section describes issues that users of {{site.productname}} 5.5 may encounter, as well as possible workarounds for these issues.

**Outline**

* [Difficult to see table cell selections for table cells with a background color](#difficulttoseetablecellselectionsfortablecellswithabackgroundcolor)

### Difficult to see table cell selections for table cells with a background color

**Issue**: Due to CSS changes related to table cell selections, it can be difficult to see the which cells are selected if the cells have a background color. This issue is both a usability and an accessibility issue.

**Workaround**: To improve the visibility of cell selections until this issue is fixed, use the `content_style` option to change the table-related cell selection style. For example:

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'table',
  content_style: '.mce-content-body td[data-mce-selected]::after, .mce-content-body th[data-mce-selected]::after { background-color: rgb(180, 215, 255, .7); }'
});
```

{{site.companyname}} recommends removing this workaround from the configuration when the issue has been fixed.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
