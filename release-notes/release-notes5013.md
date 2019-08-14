---
layout: default
title: TinyMCE 5.0.13
title_nav: TinyMCE 5.0.13
keywords: releasenotes newfeatures deleted technologypreview bugfixes knownissues
---

## Overview

The Release Notes provide high-level coverage of the improvements and additions that have been implemented in TinyMCE 5.0.13
and document known problems in this release, as well as important bug fixes, deprecated functionality, and other details.

TinyMCE 5.0.13 release adds improvements to the TinyMCE editor to improve the overall user experience.

> **Note:** TinyMCE 5.0.10 community was not released to enterprise due to a bundling issue discovered shortly after the
> community release. Additionally 5.0.11 and 5.0.12 were not released to enterprise due to issues found during QA. As such
> TinyMCE 5.0.13 enterprise contains all changes in TinyMCE 5.0.10 through to 5.0.13 community releases.

## New features

### TinyMCE

#### Color map support

TinyMCE now supports all valid HTML color formats for the `color_map` setting. As an example, the following formats can now be used:
* `#FF33F9`
* `rgb(255, 87, 51)`
* `rgba(51, 79, 255, 0.8)`
* `hsl(121, 80%, 60%)`
* `blue`

> **Note:** The previous hex code color format without the "#" are still accepted as valid values.

For more information on the `color_map` setting refer to the [documentation]({{site.baseurl}}/configure/content-appearance/#color_map).

## Updates and enhancements

### TinyMCE

The updated TinyMCE 5.0.13 editor comes with numerous changes to the previous versions. A comprehensive list of the updates
and fixed issues is available in the [changelog]({{site.baseurl}}/changelog/#version5011july42019).

#### Accessibility improvements
     
A number of accessibility and keyboard navigation fixes have been made in TinyMCE 5.0.13 for inline dialogs, which impacted
the new search and replace dialog design. Users will now be able to correctly tab through the input and button elements in
the dialog and focus won't be lost when closing the preferences menu. Additionally disabled toolbar buttons can now be
navigated with a keyboard and will apply a style when the disabled toolbar button is active.

#### Backspace key handling

TinyMCE 5.0.13 has improved the backspace key handling, so that pressing backspace at the start of an indented paragraph
will now outdent the paragraph by one level instead of merging into the previous paragraph.

Additionally when using the **List** plugin, pressing backspace when the cursor is at the start of a list item will outdent
the list item, instead of merging it with the previous list item.

#### Context toolbar positioning
     
TinyMCE 5.0.13 has made a number of improvements to the positioning of the context toolbar. The toolbar will no longer
collapse and overlap with the toolbar or content when there's no empty space above or below the selected content. It will
also escape outside the bounds of the editor content area when running in inline mode.

**Example:**
![Improved context toolbar position]({{site.baseurl}}/images/improved-context-toolbar.png)

#### Default background and foreground colors

TinyMCE 5.0.13 has updated the default colors defined in the [`color_map`]({{site.baseurl}}/configure/content-appearance/#color_map) setting to include colors that are useful for both highlights and regular text.

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

TinyMCE 5.0.13 has updated modal dialogs so that they are no longer draggable by default. If the old functionality is still
desired then the [`draggable_modal`]({{site.baseurl}}/configure/editor-appearance/#draggable_modal) setting can be added to
TinyMCE init configuration to re-enable draggable modals.

Additionally an issue has been addressed whereby dialogs could be dragged off-screen. Now when dragging a dialog, it is now
correctly constrained to the window viewport to prevent the dialog from being dragged off-screen.

#### Help plugin
     
TinyMCE 5.0.13 has improved the help plugin so that it now contains a new tab called "Keyboard navigation" which provides
content on how to use the editor when navigating via a keyboard.

#### Nonbreaking space plugin

TinyMCE 5.0.13 has improved the nonbreaking space plugin so that any nonbreaking space characters inserted by the plugi
will be wrapped in a span to prevent the character being converted to a regular space while typing. This behaviour can be
disabled by adding the new `nonbreaking_wrap: false` setting to the TinyMCE init configuration.

#### Search and replace plugin

TinyMCE 5.0.13 has improved the search and replace plugin so that it will now appear inline, instead of as a modal dialog
which prevented seeing the content found. The dialog also comes with a new design that's better suited to an inline dialog:

![New search and replace dialog]({{site.baseurl}}/images/inline-search-replace-dialog.png)
 
Additional when finding content, the plugin will now cycle through results instead of stopping when it reaches the top or
bottom of the document. 

### Tiny Comments

**Tiny Comments** 2.1.1 addresses an issue where setting the editor mode to readonly would still allow users to add, edit
or remove comments. Comments will now correctly listen to the editor mode change and disable comments when the editor is in readonly mode and then enable them again when in design mode.

For more information on **Tiny Comments** refer to the full [documentation]({{site.baseurl}}/plugins/comments/).

## Known issues

### TinyMCE

#### Search and replace plugin

