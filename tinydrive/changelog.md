---
layout: default
title: Tiny Drive Changelog
title_nav: Changelog
description: The history of Tiny Drive releases.
keywords: changelog
class: changelog
---

## 1.4.0 - 2021-05-19

### Added
- Added new pdf preview functionality.
- Added new base url option to the asset manager.
- Added new `skin` setting to plugin- and standalone-mode.
- Added new dark UI skin.

### Fixed
- Fixed an issue where images with exif orientation would get incorrectly oriented.
- Fixed an issue where specifying 'audio' for the `filetype` setting would not list the files in grid view.
- Fixed issue with tab key throwing a max call stack exceeded error.

## 1.3.0 - 2019-06-03

### Added
- Added new standalone api functions pick, browse, start and upload.
- Added new plugin api with functions pick, browse and upload.
- Added new target setting to allow rendering inside a specific target element.
- Added new video preview functionality.
- Added fallback icons for video, zip and audio formats.
- Added client side validation of min characters for search field.

### Fixed
- Fixed bug where IE 11 would render the toolbar icons at incorrect positions.

## 1.2.1 - 2019-04-24

### Added
- Added new dropbox/google drive icons.

### Fixed
- Fixed an issue where file selection wouldn't be cleared when navigating to a new directory.
- Fixed various focus issues where focus would be lost or moved incorrectly.
- Fixed various async issues with the ui not being updated correctly.
- Fixed an issue where it would scroll the file list to top if new files where added while scrolling.

## 1.2.0 - 2019-03-28

### Added
- Added new google drive and dropbox file pickers.

### Improved
- Improved file type listing support when picking files in tinymce.
- Improved alert messages when deleting folders.
- Improved handling of invalid file types in local file pickers and drag drop.

### Fixed
- Fixed an issue where concurrent async list operations could result in duplicate files.
- Fixed an issue where it wasn't possible to upload some file extension mp4, m4v, keynote, csv.

## 1.1.0 - 2018-11-26

### Added
- Added setting to allow user specific root through JWT payload.

### Fixed
- Fixed issue where backdrop wasm't displayed for preview menu.

## 1.0.0 - 2018-09-18

### Added
- Initial release.
