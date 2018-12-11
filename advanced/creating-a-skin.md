---
layout: default
title: Create a skin for TinyMCE
title_nav: Create a skin
description_short: Introducing skin creation.
description: Introducing skin creation, less and icon modification.
keywords: create creator skin icomoon
---

Create a new skin to alter the appearance of TinyMCE. The simplest way to create a new skin is to use the [TinyMCE Skin Creator](http://skin.tinymce.com/) tool. The other option is to manually modify `less` files and build them using the `Node.js` build process. The tutorial below focuses on the manual method of skin creation.

## Preparation

Download the [TinyMCE development package](https://www.tinymce.com/download/) to manually build the `less` files. This package contains the source code for the entire TinyMCE project and the `less` files needed to skin the editor or use the [GitHub version](https://github.com/tinymce/tinymce/).

## Building skin.min.css from less files

Make a copy of the default skin "light gray" and place it in the skins directory.

> Note: This is the same directory that contains the "light gray" skin.

Issue the `grunt less` command from your console. This command automatically builds CSS files out of the `less` files contained in the skins directories. Use `grunt watch` to automatically build the skin when changes are made to the `less` files.

The build process will produce these CSS files:
* `skin.min.css`
* `content.min.css`
* `content.inline.min.css`

`content.min.css` and `content.inline.min.css` are used for content inside the editor. These files contain CSS for normalizing editing behavior and the appearance of things like video placeholders.

`skin.min.css` are used to render the UI.

## Modifying the less files

Most CSS elements can be modified by altering the `variables.less` file. This file contains variables such as:
* font size
* font family
* colors
* borders

Modify additional files to create radically different skins. 

> Note: The skin **only** changes the visual presentation of the UI and **not** the placement of elements. Placement of elements is done by the TinyMCE UI framework. This framework makes it possible to do complex UI layouts on all browsers without touching any CSS when plugins are created.

## Modifying the icons

The icons shipped with the default skin are created by the [IcoMoon](http://icomoon.io/) project and are embedded as web fonts. This makes them *retina ready* and easy to skin.

Import the existing TinyMCE icons by uploading the "icomoon.dev.svg" file and then adding and/or changing the icons that are provided. Alter the `icons.less` file to add more icons.

> Note: There are a few images that are used as placeholders within the contents of the editor.
