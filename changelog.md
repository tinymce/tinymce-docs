# Changelog

Changes to the TinyMCE documentation are documented in this file.

The format is loosely based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/).

### Unreleased

- DOC-1912: Advanced Template documentation added.

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

