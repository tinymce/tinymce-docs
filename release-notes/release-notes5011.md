---
layout: default
title: TinyMCE 5.0.11
title_nav: TinyMCE 5.0.11
keywords: releasenotes newfeatures deleted technologypreview bugfixes knownissues
---

## Overview

The Release Notes provide high-level coverage of the improvements and additions that have been implemented in TinyMCE 5.0.11 and document known problems in this release, as well as important bug fixes, deprecated functionality, and other details.

TinyMCE 5.0.11 release adds improvements to the TinyMCE editor to improve the overall user experience.

> **Note:** TinyMCE 5.0.10 community was not released to enterprise due to a bundling issue discovered shortly after the community release. As such TinyMCE 5.0.11 enterprise contains changes from both TinyMCE 5.0.10 and 5.0.11 community releases.

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

### Tiny Comments

**Tiny Comments** 2.1.0 adds a new optional `tinycomments_author_name` setting for embedded mode and a new optional `authorName` property for callback mode. This setting allows the author id and author name to be separated, which solves potential permission issues when two users have the same name.

> **Note:** If the setting or property is not provided, then comments will fallback to the previous behaviour of using the `tinycomments_author` or `author` for the display name.

For more information on **Tiny Comments** refer to the full [documentation]({{site.baseurl}}/plugins/comments/).

## Updates and enhancements

### TinyMCE

The updated TinyMCE 5.0.11 editor comes with numerous changes to the previous versions. A comprehensive list of the updates and fixed issues is available in the [changelog]({{site.baseurl}}/changelog/#version5011july42019).

#### Backspace key handling

TinyMCE 5.0.11 has improved the backspace key handling, so that pressing backspace at the start of an indented paragraph will now outdent the paragraph by one level instead of merging into the previous paragraph.

#### Default background and foreground colors

TinyMCE 5.0.11 has updated the default colors defined in the [`color_map`]({{site.baseurl}}/configure/content-appearance/#color_map) setting to include colors that are useful for both highlights and regular text.

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

#### Search and replace plugin

TinyMCE 5.0.11 has improved the search and replace plugin so that it will now cycle through results instead of stopping when it reaches the top or bottom of the document. 

### PowerPaste

PowerPaste 5.0.1 comes with numerous bug fixes to the previous versions. Refer to the changelog below for a full list of the changes in PowerPaste 5.0.1.

##### Changelog

* Added console logged error codes to assist with support requests.
* Cleaned up left over unused Flash files that were getting bundled.
* Fixed powerpaste not respecting the editor `automatic_uploads` setting.
* Fixed images incorrectly being pasted when `paste_as_text` was enabled.
* Fixed an issue where pre elements were not allowed to contain images.
* Fixed an issue where the wrong error notification was displayed when images failed to import.
* Fixed leading, trailing and sequential spaces being lost when pasting plain text.

For more information on **PowerPaste** refer to the full [documentation]({{site.baseurl}}/plugins/powerpaste/).