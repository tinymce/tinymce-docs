---
layout: default
title: Release notes for TinyMCE 5.0.1
title_nav: Release notes for TinyMCE 5.0.1
keywords: releasenotes newfeatures deleted technologypreview bugfixes knownissues
---

## Overview

The Release Notes provide high-level coverage of the improvements and additions that have been implemented in TinyMCE 5.0.1 and document known problems in this release, as well as notable bug fixes, deprecated functionality, and other details.

TinyMCE 5.0.1 release adds improvements to the TinyMCE editor to improve the overall user experience.

## Enhancements

The following enhancements were made to the existing features:

* Added H1-H6 toggle button registration to the silver theme #TINY-3070
* Added code sample toolbar button will now toggle on when the cursor is in a code section #TINY-3040
* Added new settings to the emoticons plugin to allow additional emoticons to be added #TINY-3088


## Removed & deprecated features

Removed paste as text notification banner and paste_plaintext_inform setting #POW-102

## Fixed issues

* Fixed an issue where adding links to images would replace the image with text #TINY-3356
* Fixed an issue where the inline editor could use fractional pixels for positioning #TINY-3202
* Fixed an issue where uploading non-image files in the Image Plugin upload tab threw an error. #TINY-3244
* Fixed an issue in the media plugin that was causing the source url and height/width to be lost in certain circumstances #TINY-2858
* Fixed an issue with the Context Toolbar not being removed when clicking outside of the editor #TINY-2804
* Fixed an issue where clicking 'Remove link' wouldn't remove the link in certain circumstances #TINY-3199
* Fixed an issue where the media plugin would fail when parsing dialog data #TINY-3218
* Fixed an issue where retrieving the selected content as text didn't create newlines #TINY-3197
* Fixed incorrect keyboard shortcuts in the Help dialog for Windows #TINY-3292
* Fixed an issue where JSON serialization could produce invalid JSON #TINY-3281
* Fixed production CSS including references to source maps #TINY-3920
* Fixed development CSS was not included in the development zip #TINY-3920
* Fixed the autocompleter matches predicate not matching on the start of words by default #TINY-3306
* Fixed an issue where the page could be scrolled with modal dialogs open #TINY-2252
* Fixed an issue where autocomplete menus would show an icon margin when no items had icons #TINY-3329
* Fixed an issue in the quickbars plugin where images incorrectly showed the text selection toolbar #TINY-3338
* Fixed an issue that caused the inline editor to fail to render when the target element already had focus #TINY-3353