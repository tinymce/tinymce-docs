---
layout: default
title: TinyMCE 5.0.13
title_nav: TinyMCE 5.0.13
keywords: releasenotes newfeatures deleted technologypreview bugfixes knownissues
---

## Overview

{{site.productname}} 5.0.13 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Thursday, August 15<sup>th</sup>, 2019. It includes {{site.productname}} 5.0.13 and additional changes to premium plugins. These Release Notes provide high-level coverage of: improvements and additions, known issues, important bug fixes & deprecated functionality associated with the release of TinyMCE 5.0.13.

> **Note:** TinyMCE 5.0.10, 5.0.11, and 5.0.12 were not released to enterprise due to issues found during QA.
> TinyMCE 5.0.13 enterprise contains all changes in the TinyMCE 5.0.10 through 5.0.13 community releases.

## New features

### TinyMCE

#### Color map support

TinyMCE now supports all valid HTML color formats for the `color_map` setting. For example, the following formats are now accepted:
* `#FF33F9`
* `rgb(255, 87, 51)`
* `rgba(51, 79, 255, 0.8)`
* `hsl(121, 80%, 60%)`
* `blue`

> **Note:** The previous hex code color format without the "#" is still accepted as valid values.

For more information on the `color_map` setting, refer to the [documentation]({{site.baseurl}}/configure/content-appearance/#color_map).

## Updates and enhancements

### TinyMCE

The updated TinyMCE 5.0.13 editor comes with numerous changes to the previous versions. A comprehensive list of the updates
and fixed issues is available in the [changelog]({{site.baseurl}}/changelog/#version5013august62019).

#### Accessibility improvements

This release provides accessibility and keyboard navigation fixes for inline dialogs. Users will now be able to tab through the input and button elements in the dialog without the cursor getting stuck or losing focus.

Disabled toolbar buttons can be navigated with a keyboard and will apply a style when the toolbar button is re-enabled.

#### Backspace key handling

Pressing backspace at the start of an indented paragraph will now outdent the paragraph by one level instead of merging into the previous paragraph.

When using the **List** plugin, pressing backspace when the cursor is at the start of a list item will outdent
the list item, instead of merging it with the previous list item.

#### Context toolbar positioning

Contextual toolbar improvements prevent the toolbar from collapsing and overlapping the toolbar or content when there is no empty space above or below the selected content. It will escape outside the bounds of the editor content area when running in inline mode.

**Example:**

![Improved context toolbar position]({{site.baseurl}}/images/improved-context-toolbar.png)

#### Default background and foreground colors

TinyMCE 5.0.13 updates the default colors defined in the [`color_map`]({{site.baseurl}}/configure/content-appearance/#color_map) setting to include colors that are useful for both highlights and regular text.

![Color map]({{site.baseurl}}/images/color-map-updated.png)

To use the old default colors instead of the new colors, add the following to your TinyMCE configuration:

```js
tinymce.init({
  selector: 'textarea',
  color_map: [
    { type: choiceItem, text: 'Turquoise', value: '#18BC9B' },
    { type: choiceItem, text: 'Green', value: '#2FCC71' },
    { type: choiceItem, text: 'Blue', value: '#3598DB' },
    { type: choiceItem, text: 'Purple', value: '#9B59B6' },
    { type: choiceItem, text: 'Navy Blue', value: '#34495E' },

    { type: choiceItem, text: 'Dark Turquoise', value: '#18A085' },
    { type: choiceItem, text: 'Dark Green', value: '#27AE60' },
    { type: choiceItem, text: 'Medium Blue', value: '#2880B9' },
    { type: choiceItem, text: 'Medium Purple', value: '#8E44AD' },
    { type: choiceItem, text: 'Midnight Blue', value: '#2B3E50' },

    { type: choiceItem, text: 'Yellow', value: '#F1C40F' },
    { type: choiceItem, text: 'Orange', value: '#E67E23' },
    { type: choiceItem, text: 'Red', value: '#E74C3C' },
    { type: choiceItem, text: 'Light Gray', value: '#ECF0F1' },
    { type: choiceItem, text: 'Gray', value: '#95A5A6' },

    { type: choiceItem, text: 'Dark Yellow', value: '#F29D12' },
    { type: choiceItem, text: 'Dark Orange', value: '#D35400' },
    { type: choiceItem, text: 'Dark Red', value: '#C0392B' },
    { type: choiceItem, text: 'Medium Gray', value: '#BDC3C7' },
    { type: choiceItem, text: 'Dark Gray', value: '#7E8C8D' },

    { type: choiceItem, text: 'Black', value: '#000000' },
    { type: choiceItem, text: 'White', value: '#ffffff' }
  ]
})
```

#### Dialog improvements

TinyMCE 5.0.13 has updated modal dialogs to be non-draggable by default. To re-enable draggable modals, add the [`draggable_modal`]({{site.baseurl}}/configure/editor-appearance/#draggable_modal) setting to the TinyMCE init configuration.

Draggable dialogs are now constrained to the window viewport to prevent the dialog from being dragged off-screen.

#### Help plugin

TinyMCE 5.0.13 adds a new tab to the help plugin called "Keyboard navigation" which provides
content on how to use the editor when navigating via a keyboard.

#### Nonbreaking space plugin

TinyMCE 5.0.13 improves the nonbreaking space plugin by wrapping any nonbreaking space characters inserted by the plugin in a span to prevent the character being converted to a regular space while typing. To disable this behavior, add the new [`nonbreaking_wrap: false`]({{site.baseurl}}/plugins/opensource/nonbreaking/#nonbreaking_wrap) setting to the TinyMCE init configuration.

#### Search and replace plugin

The search and replace dialog will now appear inline, instead of as a modal dialog, preventing it from overlapping the content found.

The dialog also comes with a new design that's better suited to an inline dialog.

![New search and replace dialog]({{site.baseurl}}/images/inline-search-replace-dialog.png)

When finding content, the plugin will now cycle through results instead of stopping when it reaches the top or
bottom of the document.

### Tiny Comments

**Tiny Comments** 2.1.1 addresses an issue where users could add, edit, and remove comments when the editor mode is set to [read-only]({{site.baseurl}}/api/tinymce/tinymce.editormode/#isreadonly). Comments now correctly listens to the editor mode change and disables comments when the editor is in read-only mode and re-enable when in design mode.

For information on **Tiny Comments** refer to the full [documentation]({{site.baseurl}}/plugins/premium/comments/).

## Known issues

### TinyMCE

#### Search and replace plugin

When using an editor larger than the size of the screen, the find and replace dialog may disappear off the top
of the screen and users will need to scroll back up to find the next match in the content. A fix will be provided in an upcoming
release of TinyMCE.
