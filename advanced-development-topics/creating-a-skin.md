---
layout: default
title: Create a Skin for TinyMCE
title_nav: Create a Skin
---

There are two ways of creating skins for TinyMCE one of them using the [TinyMCE Skin Creator](http://skin.tinymce.com/) tool the other one is to manually modify less files and build them using the node js build process. Since the skin creator is pretty self explanatory we will focus on the manual process in this tutorial.

## Preparation

In order to manually build the less files you will have to download the [TinyMCE development package](http://archive.tinymce.com/download/download.php). This package contains the source code for the whole TinyMCE project and the less files needed to skin the editor. You will also need to install node js and the NPM node module dependencies needed for the build process. This [readme.md](https://github.com/tinymce/tinymce/blob/master/readme.md) file explains how to manually build TinyMCE.

## Building skin.min.css from less files

Start of by making a copy of the default skin "lightgray" to for example "myskin" place that copy inside the skins directory next to the "lightgray" skin.

Then go to the root directory of tinymce in a console and invoke "jake less" this command will automatically build css files out of the less files contained in the skins directories.

The build process will produce four css files: skin.min.css, skin.ie7.min.css, content.min.css, content.inline.min.css. The ones prefixed with content are the ones used for the content inside the editor these files contain CSS for normalizing editing behavior and the look for things like video placeholders. The skin.min.css is used for the UI and the skin.ie7.min.css is used for IE7 users. This is a spearate file since this will be removed when we drop IE 7 support in the future.

## Modifying the less files

Most of the things can be modified by altering the Variables.less file it contains variables for font size, font familiy, colors, borders and so on. But you might need to modify other files if you are going to do a radically different skin. The skin only changes the visual presentation of the UI not the placement of elements. Placement of elements is done by the TinyMCE UI framework and this is what makes it possible to do really complex UI layouts on all browsers without touching any CSS when you create plugins.

## Modifying the icons

The icons we ship with default skin is created by [IcoMoon](http://icomoon.io/) project. And are embedded as web fonts, this makes them retina ready and easy to skin. If you need more icons or other icons I suggest checking that service out.

You can import the existing TinyMCE icons by uploading the "icomoon.dev.svg" file and then add more icons or change the ones we use. Adding more icons requires you to alter the Icons.less file and Icons.ie7.less file.

There are a few images that are used for placeholders within the contents of the editor.
