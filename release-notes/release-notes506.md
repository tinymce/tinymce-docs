---
layout: default
title: TinyMCE 5.0.6
title_nav: TinyMCE 5.0.6
keywords: releasenotes newfeatures deleted technologypreview bugfixes knownissues
---

## Overview

The Release Notes provide high-level coverage of the improvements and additions that have been implemented in TinyMCE 5.0.6 and document known problems in this release, as well as important bug fixes, deprecated functionality, and other details.

TinyMCE 5.0.6 release adds improvements to the TinyMCE editor to improve the overall user experience.

## New features

### Readonly mode

TinyMCE's readonly mode has been extended so that it now works with inline editors. Additionally while the editor is in readonly mode, users can now select and copy content from the editor.

### Image upload tab

TinyMCE 5.0.6 adds a new configuration option `image_uploadtab` that can be used to disable the `Upload` tab in the insert image dialog.

For more information on `image_uploadtab`, refer to the [documentation]({{site.baseurl}}/plugins/image/#image_uploadtab).

### Wordcount plugin api

TinyMCE 5.0.6 adds a new API for the Word Count plugin. The API exposes the functionality used by the Word Count dialog and allows developers to be able to retrieve details about how many words or characters are used inside the editor content.

For more information on the new API, refer to the [documentation]({{site.baseurl}}/plugins/wordcount/#api).

## Updates and enhancements

### TinyMCE

The new TinyMCE 5.0.6 editor comes with significant changes to the previous versions. Improved solutions have been introduced for unnecessary and obsolete configuration options. A comprehensive list of the updates and fixed issues is available in the [changelog]({{site.baseurl}}/changelog/#version506may222019).

### PowerPaste

PowerPaste 5.0.0 comes with significant changes to the previous versions. Refer to the [changelog](#changelog) below for a full list of the changes in PowerPaste 5.0.0.

##### Changelog

* Removed legacy Flash support, since all supported browsers now allow JavaScript access to the clipboard.
* Added cropped image support. If an image was cropped inside Microsoft Word, then previously when pasting the image the original image instead would be shown since Word doesn't actually crop the image and instead just adds metadata. However now it'll use the metadata available and correctly crop the image when pasting.
* Improved PowerPaste's parsing to allow Microsoft Outlook clipboard content to be able to run through the existing Word processing logic. **Note:** PowerPaste doesn't support Microsoft Outlook, we've only improved how it's handled if content is pasted from Outlook.
* Improved the `Remove formatting` functionality to also remove inline style elements, such as `strong`, `b`, `em`, `i`, `sup` and `sub`.
* Fixed an issue where pasting content with external images would lose their image src attribute.

For more information on **PowerPaste** refer to the full [documentation]({{site.baseurl}}/plugins/powerpaste/).