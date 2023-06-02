# Changelog

Changes to the TinyMCE documentation are documented in this file.

The format is loosely based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

### Unreleased

- DOC-2046: Added TINY-9743 to `staging`.
- DOC-2049: Added multiple `/partial/misc/admon-requires-6.<x>v.adoc` files for use as required by 6.5-and-later specific docs.
- DOC-2047: Added TINY-9848 to `staging`.
- DOC-2048: Added TINY-9812 to `staging`.
- DOC-2044: Added TINY-9849 to `staging`.
- DOC-1953: new file, `/modules/ROOT/partials/configuration/advtemplate_templates.adoc`, added. Documentation of new Advanced Template plugin option, `advtemplate_templates`, added to new file.
- DOC-2030: document new Spell Checker Pro features: `mceSpellcheckUpdate` command; `SpellcheckerUpdated` event; and `getSpellingErrors()` API.
- DOC-2028: Add release-notes template to `staging` for 6.5.

### 2023-05-03

- DOC-1972: Updated `changelog.md` to be in sync with the release-notes 6.4.2.
- DOC-1971: Updates to `staging` prior to `release` 6.4.2.
- DOC-1962: added `The image would not be inserted when the quickimage button was used on Chrome.` to staging.
- DOC-1968: Added `enabled buttons in the quickbar menu is not shown as active` to staging.
- DOC-1967: added `Fixed the mouse pointer style from a text cursor to a default arrow pointer when hovering over the tree dialog component items.` to staging.
- DOC-1965: added `The editor displayed a notification error when it failed to retrieve a blob image uri.` to staging 6.4.2.
- DOC-1964: added `deleteallconversations` menu item was enabled before any comments were added.` to staging.
- DOC-1963: added Setting an invalid unit in the `fontsizeinput` changed it to the default value instead of reverting it to the previous, and valid, value. to staging.
- DOC-1961: added Enabled variant of toggleable `tox-button` and `tox-button—secondary`: it now supports `hover/active/focus/disabled` states. to staging.
- DOC-1959: added `Redial would, in some situations, cause select elements not to have an initial value selected when they should have.` to staging.
- DOC-1960: added `The urlinput dialog component would not open the type-ahead dropdown when the input value was reset to an empty string.` to staging.
- DOC-1957: added `Selection was not correctly scrolled horizontally into view when using the `selection.scrollIntoView` API.` to staging.
- DOC-1958: added `Tab navigation no longer incorrectly stops at menu buttons within toolbar groups.` to staging.
- DOC-1935: added `6.4.2-release-notes.adoc`. Added outline to this file for staging.
- DOC-1955: added the TinyMCE 6.4.2 specific changes to changelog.adoc.

### 2023-04-19
- DOC-1170: updated `language_url.adoc` to document the `language: '<language-file-pack-name>'` requirement and to make other language explicit where it was implicatory.
- DOC-1947: typos, copy-edits and mark-up corrections across multiple files: `builtinformats.adoc`; `contextform.adoc`; `formats.adoc`; `supported-versions.adoc`; and `valid_children.adoc`.

### 2023-04-14
- DOC-1952: Moved the `include` statements to separate lines in the API sections of multiple custom UI component pages to display the admonition correctly.

### 2023-04-13

- DOC-1946: Replaced soft-deprecated `ch` option with supported `trigger` option in `…/live-demos/autocompleter-autocompleteitem/index.js` and `…/live-demos/autocompleter-cardmenuitem/index.js`.
- DOC-1948: Update entries for TINY-8872, TINY-9364, and TINY-9459 in 6.4.1 release notes.

### 2023-04-11

- DOC-1860: added `6.4.1-release-note.adoc`. Added outline to this file.

### 2023-04-06

- DOC-1912: Advanced Template documentation added.
- DOC-1893: new file, `/modules/ROOT/partials/configuration/highlight_on_focus.adoc`, added. Documentation of new option, `highlight_on_focus`, added to new file. `include::` statements pointing to new file added to `content-appearance.adoc` and `accessibility.adoc`.
- DOC-1909: re-wrote the Supported Mobile Platforms section to match the Browser Compatibility section language, tying supported platforms to release recency rather than specific version numbers.
- DOC-1910: `sanitizing-html-input-and-protecting-against-xss-attacks-dom-parser-and-dom-purify.adoc` added as new partial. `includes` to this added to `security.adoc` and `migration-from-5x.adoc`. This new partial outlines how TinyMCE 6.x uses the `DOMParser` and `DOMPurify` APIs, how to turn `DOMPurify` off, and why doing so is dangerous.
- DOC-1914: added documentation of the new `tree` component to `dialog-components.adoc`.
- DOC-1915: Updated supported versions table  in `supported-versions.adoc`. It now include support end dates for TinyMCE versions 6.2 and 6.3 and version 6.4’s release date and the TBD status of 6.4’s support end date. Also re-structured browser compatibility table in `browser-compatibility.adoc` and re-wrote the notes associated with said table.
- DOC-1922: Added a new section, ‘Advanced Typography plugin rules’, to `advanced-typography.adoc`.
- DOC-1927: copy-edits and typo corrections to `6.3.2-release-notes.adoc`, `invalid_styles.adoc`, `schema.adoc`, `spellchecker_dialog.adoc`, and `indentation.adoc`.
- DOC-1929: added `admon-rtc-eol.adoc` to `/modules/partials/misc` and added `include::` statements pointing to this across the RTC documentation chapters.
- DOC-1889: restructured `inline-css.adoc`.
- DOC-1867: added notes regarding setting `autoresize_bottom_margin` in relation to values for `margin-bottom` to `autoresize_bottom_margin.adoc`.
- DOC-1907: updated `advcode.adoc` and documentation related live-demo to cover new functionality.
- DOC-1892: `fontsizeinput` documentation added to `core-toolbar-buttons.adoc`; `font_size_input_default_unit.adoc` added to `/modules/ROOT/partials/configuration/`' and xref to this new file added to `user-formatting-options.adoc`.
- DOC-1900: added documentation of `setText` and `setIcon` functions to `custom-*-toolbar-button.adoc` files.
- DOC-1902: `ui_mode` documentation added to `ui-mode-configuration.adoc`; `ui_mode.adoc` added to `/modules/ROOT/partials/configuration/` and xref to this new file added to `ui-mode-configuration.adoc`.

### 2023-03-29

- DOC-1939: added the TinyMCE 6.4.1-specific changes to `changelog.adoc`.

### 2023-03-15

- DOC-1930: added the TinyMCE 6.4-specific changes to `changelog.adoc`.

### 2023-02-22

- DOC-1913: added `6.3.2-release-note.adoc`. Added outline to this file.
- DOC-1918: added the TinyMCE 6.3.2-specific change to `changelog.adoc`.

### 2023-01-20

- DOC-1898: added changelog file, `changelog.md`, to the TinyMCE Documentation project. Entries for several month’s changes dating back from this initial creation date added to the file.

### 2023-01-19

- DOC-1899: added missing `include` statement to `advcode.adoc`. The [`advcode_inline` option documentation](https://tiny.cloud/docs/tinymce/6/advcode/#advcode_inline) now appears in the *Advanced Code Editor* chapter (it was always present in the *6.3 Release Notes*).

### 2023-01-18

- DOC-1897: minor edits to template files. No reader-visible changes.
- DOC-1859: copy edits to a baker’s dozen files. Mostly `s/mydomain.com/example.com/` in code samples plus plugin description edits on index pages for tense consistency.

### 2023-01-13

- DOC-1894: documentation of the ‘infinite height increase’ bug added to the [Bug fixes section](https://tiny.cloud/docs/tinymce/6/6.3-release-notes/#bug-fixes) of the *6.3 Release Notes*.

### 2023-01-10

- DOC-1887: added material re responsible disclosure and reporter credit to the [Reporting TinyMCE security issues section](https://tiny.cloud/docs/tinymce/6/security/#reporting-tinymce-security-issues) of the *Security guide* chapter.

### 2022-12-23

- DOC-1890: fixed two typos in the underlying AsciiDoc markup for the [*Accessibility Checker plugin*](https://tiny.cloud/docs/tinymce/6/a11ychecker/) chapter.

### 2022-12-22

- DOC-1883: re-titled and re-arranged entries in `nav.adoc`. This file generates the TinyMCE documentation’s Table of Contents navigation sidebar.
- DOC-1877: copy-edits, corrections, and AsciiDoc markup clean-up across multiple files.

### 2022-12-21

- DOC-1823: documentation of [accessibilty rule I3, ‘Image alt text is not greater than 100 characters’](https://tiny.cloud/docs/tinymce/6/a11ychecker/#I3), added to *Accessibility Checker plugin* chapter.

### 2022-12-19

- TINY-9404: updates, corrections and additions to the [API documentation](https://tiny.cloud/docs/tinymce/6/apis/tinymce.root) for TinyMCE 6.3.1 release.
- DOC-1874: corrected the presented sub-section order in the [6.3 section](https://tiny.cloud/docs/tinymce/6/changelog/#6-3-0-2022-11-23) of the *TinyMCE Changelog*.
- DOC-1875: added linked CVE number and attribution to [XSS vulnerability notice](https://tiny.cloud/docs/tinymce/6/6.3-release-notes/#security-fixes) in the *6.3 Release Notes*.

### 2022-12-16

- DOC-1895: updates to workflow files. No reader-visible changes.

### 2022-12-15

- DOC-1886: corrected the default values listed for [the `advlist_bullet_styles` option](https://www.tiny.cloud/docs/tinymce/6/advlist/#advlist_bullet_styles) of the *Advanced List plugin* chapter.

### 2022-12-08

- DOC-1777: added the [*6.3 Release Notes*](https://tiny.cloud/docs/tinymce/6/6.3-release-notes).
- DOC-1868: added entry for the [6.3.1 Community Release](https://tiny.cloud/docs/tinymce/6/changelog/#6-3-1-2022-12-06) noting the discovered and patched XSS vulnerability.
- DOC-1843: documentation of [`advcode_inline` option](https://tiny.cloud/docs/tinymce/6/advcode/#advcode_inline) added to the *Advanced Code Editor* chapter.
- DOC-1825: documentation of the [`color_foreground_default` and `color_background_default` options](https://tiny.cloud/docs/tinymce/6/user-formatting-options/#color_default_background) added to the *User formatting* chapter.
- DOC-1827: added documentation of the [Inline CSS Premium plugin](https://tiny.cloud/docs/tinymce/6/inline-css/).
- DOC-1754: added documentation of the [Advanced Typography Premium plugin](https://www.tiny.cloud/docs/tinymce/6/advanced-typography/).

### 2022-12-02

- TINY-9428: updates to workflow files. No reader-visible changes.

### 2022-11-30

- DOC-1858: suite-wide typesetting change. Words immediately following a colon are now set in all lowercase (with the expected exception of any Proper Nouns).
- DOC-1857: typo corrections and copy-edits.
- DOC-1852: documentation of the [`tinycomments` annotator](https://tiny.cloud/docs/tinymce/6/comments-commands-events-apis/#tinycomments-annotator) added to the *Commands, Events and APIs for the comments plugin* chapter.


### 2022-11-03

- DOC-1849: documentation of the [`issue` object](https://tiny.cloud/docs/tinymce/6/a11ychecker/#issue) added to the *Accessibility Checker plugin* chapter. Example of [using `+a11ychecker_filter_issue+` to filter images with empty alternative text from the Accessibility Checker I1 rule](https://tiny.cloud/docs/tinymce/6/a11ychecker/#example-using-a11ychecker_filter_issue-to-filter-out-all-accessibility-checker-table-rules-and-rules-less-than-error-level) added to the *Accessibility Checker plugin* chapter. Also added further explanatory details regarding the [`a11ychecker_filter_issue`](https://tiny.cloud/docs/tinymce/6/a11ychecker/#a11ychecker_filter_issue) to the the *Accessibility Checker plugin* chapter.

### 2022-10-27

- DOC-1850: markup error, resulting in an incorrect in-document link, corrected.

### 2022-10-21

- DOC-1799: Added documentation of the `toolbar_sticky` option to [*Options for customizing the editor’s toolbars*](https://tiny.cloud/docs/tinymce/6/toolbar-configuration-options/#toolbar_sticky) and [*Options for customizing the editor’s menus*](https://tiny.cloud/docs/tinymce/6/menus-configuration-options/#toolbar_sticky) chapters.
- DOC-1844: in-document links to `onSetup` documentation were presented on the wrong table rows in the [*Creating custom Basic toolbar buttons*](https://tiny.cloud/docs/tinymce/6/custom-basic-toolbar-button) and [*Creating custom Toggle toolbar buttons*](https://tiny.cloud/docs/tinymce/6/custom-toggle-toolbar-button/) chapters. This was corrected.

### 2022-10-17

- DOC-1834: Edits to and restructuring of the [autocompleter](https://tiny.cloud/docs/tinymce/6/6.2-release-notes/#the-autocompleter-now-supports-a-multiple-character-trigger-using-the-new-trigger-configuration) and [`ch` deprecation](https://tiny.cloud/docs/tinymce/6/6.2-release-notes/#the-autocompleter-configuration-property-ch-has-been-deprecated) sections of the *6.2 release notes* to more explicitly note the new trigger property’s utility.

### 2022-10-11

- DOC-1831: two TinyMCE-specific APIs were deprecated and removed from the TinyMCE 6.0 release. The *6.0 Release Notes* include [a table listing these, along with other deprecated and removed items](https://tiny.cloud/docs/tinymce/6/6.0-release-notes-core-changes/#previously-deprecated-items-now-removed). Outbound links to documentation of the browser-native APIs that constitute the alternative to these were added to these tables.

### 2022-10-06

- DOC-1821: inconsistent spelling of *Merge Tags* (the Proper Nown plugin) and *merge tags* (specific examples of the markup said plugin adds to a TinyMCE document, and a plain noun phrase) made consistent across the entire documentation suite.

### 2022-10-05

- DOC-1818: typo correction. `s/tags/Tags/`.

### 2022-10-04

- DOC-1824: updates to template files with no reader-visible changes. Typo correction in `nav.adoc`, the file that generates the TinyMCE documentation’s Table of Contents navigation sidebar. ID markup added to two files to prevent IDEs from complaining about their absence. Again, no reader-visible changes. And the [Accompanying Premium self-hosted server-side component changes](https://tiny.cloud/docs/tinymce/6/6.2-release-notes/#accompanying-premium-self-hosted-server-side-component-changes) and [Security fixes](https://tiny.cloud/docs/tinymce/6/6.2-release-notes/#security-fixes) sections were added back to the *6.2 Release Notes*.
- DOC-1816: markup corrections to prevent asciidoctor warnings. No reader-visible changes.
