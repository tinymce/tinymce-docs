---
layout: default
title: Create a Skin for TinyMCE
title_nav: Create a Skin
description_short: Introducing skin creation.
description: Introducing skin creation, less and icon modification.
keywords: create creator skin icomoon
---

Creating a new skin will allow you to alter the appearance of TinyMCE. If you would like to create your skin, there are two ways of doing so. The simplest way is to use the [TinyMCE Skin Creator](http://skin.tinymce.com/) tool. The other option is to manually modify `less` files and build them using the node js build process. Since the skin creator is pretty self-explanatory, we will focus on the manual method in this tutorial.

## Preparation

To manually build the `less` files you will have to download the [TinyMCE development package](https://www.tinymce.com/download/). This package contains the source code for the entire TinyMCE project and the `less` files needed to skin the editor or use the [GitHub version](https://github.com/tinymce/tinymce/). You will also need to install [Node.js](https://nodejs.org) and the NPM node module dependencies needed for the build process. This [readme.md](https://github.com/tinymce/tinymce/blob/master/readme.md) file explains how to build TinyMCE manually.

## Building skin.min.css from less files

Start by making a copy of the default skin "light gray" and place it in the skins directory (i.e., the same directory that contains the "light gray" skin). The next step is to issue the `grunt less` command from your console. This command will automatically build CSS files out of the `less` files contained in the skins directories. You can also use `grunt watch`, and it will automatically build the skin when changes are made to the less files.

The build process will produce these CSS files: skin.min.css, content.min.css, and content.inline.min.css. The ones prefixed with content are the ones used for the content inside the editor. These files contain CSS for normalizing editing behavior and the appearance of things like video placeholders. The ones prefixed with skin are the files used to render the UI.

## Modifying the less files

Most things can be modified by altering the Variables.less file as it contains variables for font size, font family, colors, borders and so on. However, you may need to modify other files if you are going to create a radically different skin. The skin only changes the visual presentation of the UI, not the placement of elements. Placement of elements is done by the TinyMCE UI framework, and this is what makes it possible to do complex UI layouts on all browsers without touching any CSS when you create plugins.

## Modifying the icons

The icons shipped with the default skin are created by the [IcoMoon](http://icomoon.io/) project and are embedded as web fonts, making them retina ready and easy to skin. If you need different icons, you can further explore what they offer.

You can import the existing TinyMCE icons by uploading the "icomoon.dev.svg" file and then adding and/or changing the icons that are provided. Adding more icons requires you to alter the Icons.less file.

There are a few images that are used for placeholders within the contents of the editor.
