---
layout: default
title: TinyMCE 5.0.6
title_nav: TinyMCE 5.0.6
keywords: releasenotes newfeatures deleted technologypreview bugfixes knownissues
---

## Overview

{{site.productname}} 5.0.6 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, June 5<sup>th</sup>, 2019. It includes {{site.productname}} 5.0.6 and additional changes to premium plugins. The Release Notes provide high-level coverage of the improvements and additions that have been implemented in TinyMCE 5.0.6 and document known problems in this release, as well as important bug fixes, deprecated functionality, and other details.

TinyMCE 5.0.6 release adds improvements to the TinyMCE editor to improve the overall user experience.

## New features

### Readonly mode

TinyMCE's readonly mode has been extended so that it now works with inline editors. Additionally the editor has been fixed to allow users to select and copy content while in readonly mode.

### Image upload tab

TinyMCE 5.0.6 adds a new configuration option `image_uploadtab` that can be used to disable the `Upload` tab in the insert image dialog.

For more information on `image_uploadtab`, refer to the [documentation]({{site.baseurl}}/plugins/opensource/image/#image_uploadtab).

### Word Count plugin api

TinyMCE 5.0.6 adds a new API for the Word Count plugin. The API exposes the functionality used by the Word Count dialog and allows developers to retrieve details about how many words or characters are used inside the editor content.

For more information on the new API, refer to the [documentation]({{site.baseurl}}/plugins/opensource/wordcount/#api).

## Updates and enhancements

### TinyMCE

The new TinyMCE 5.0.6 editor comes with significant changes to the previous versions. Improved solutions have been introduced for unnecessary and obsolete configuration options. A comprehensive list of the updates and fixed issues is available in the [changelog]({{site.baseurl}}/changelog/#version506may222019).

### PowerPaste

PowerPaste 5.0.0 comes with significant changes to the previous versions. Refer to the changelog below for a full list of the changes in PowerPaste 5.0.0.

##### Changelog

* Removed legacy Flash support, since all supported browsers now allow JavaScript access to the clipboard.
* Added cropped image support. If an image was cropped inside Microsoft Word, then previously when pasting the image, the original image would be shown instead since Word doesn't actually crop the image and instead just adds metadata. However now it'll use the metadata available and correctly crop the image when pasting.
* Improved the `Remove formatting` functionality to also remove inline style elements, such as `strong`, `b`, `em`, `i`, `sup` and `sub`.
* Fixed an issue where pasting content with external images would lose their image src attribute.

For more information on **PowerPaste** refer to the full [documentation]({{site.baseurl}}/plugins/premium/powerpaste/).