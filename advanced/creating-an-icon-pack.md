---
layout: default
title: Create an icon pack for TinyMCE
title_nav: Create an icon pack
description_short: Introducing icon pack creation.
description: How to make your own icon pack.
keywords: create creator skin icon
---

With TinyMCE 5 we introduced a new way to customize the editor icons using icon packs.

## Prerequisites

This guide assumes:

* Familiarity with the command line and running simple commands.
* [NodeJS](https://nodejs.org/en/), [NPM](https://www.npmjs.com) and [Gulp](https://gulpjs.com/) are already installed.

## How icons work in TinyMCE

An icon pack is a `.js` file containing strings of SVG's. An icon pack can only contain SVG's.

Icons will not be resized by TinyMCE. They will keep their size as defined in the SVG. This means icons can be of different size if you so like.

Toolbar button sizes is set independently of the icon sizes for maximum flexibility and control. To change the button size to accomodate larger icons, you need to [create a skin](https://www.tiny.cloud/docs/advanced/creating-a-skin/).

An icon pack may contain a subset of all available icons; if you only need a couple of icons, the icon pack only need to contain those icons. The default icons will be used as a fallback for icons missing from a custom icon pack. This is useful if you only need to tweak a couple of icons.

## How to create an Icon Pack

Perform the following steps to create a custom icon pack.

### 1. Getting started

We have put together a icon template project to get you started:

1. Download or `git clone` [Oxide Icon Pack Template from Github](LINK)
2. Open a terminal window and navigate to the folder you just downloaded
3. Run the command `npm install` to install all dependencies.
4. You will be prompted to enter a name for your icon pack during install. You will use this name with the [icons](https://www.tiny.cloud/docs/configure/editor-appearance/#icons) option later to get the icons into TinyMCE.

### 2. Create the icon pack

An icon pack is built from individual SVG files placed in `/src/svg`. The file name is used by TinyMCE to identify the icon so make sure to name the icons correctly. For example, the bold icon must be named `bold.svg`. For a complete list of all the icon names, [see the default icon pack](https://github.com/tinymce/tinymce/tree/master/modules/oxide-icons-default/src/svg)

At this time, TinyMCE expects the SVGs to be shapes, not strokes. SVG files containing strokes won't look right in TinyMCE. If that is the case, use a graphics program to outline the strokes into shapes.

### 3. Build the icon pack

The icon pack for TinyMCE is built using NPM. Perform these steps to build an icon pack that can be consumed by TinyMCE:

1. Open a terminal window and navigate to the icon pack's root folder
2. Build the icon pack using the command `gulp`
3. You will now have a `/dist` folder containing the icon pack. You can preview the icons by opening the `/dist/html/icons.html` (no webserver required)
4. For how to use the icon pack in TinyMCE, see [Icons](https://www.tiny.cloud/docs/configure/editor-appearance/#icons)

The SVG files are optimized during the build process with SVGO. In rare circumstances this can result in distorted graphics due to rounding errors. To fix that you can provide new SVGO options to the icon pack build tool. Open `gulpfile.js` and add the `svgo` option to the `iconPackager` function:
```
iconPackager({
  name: 'my-icon-pack',
  svgo: { floatPrecision: 3 } //Increase the rounding precision
})
```
All user defined options, including SVGO options, will merge with the default options. Read more about different [SVGO options](https://github.com/svg/svgo)

> Don't forget to explore our ready-to-use Premium Icon Packs such as Material icons and a smaller version of our default icons found in [Tiny Skins and Icon Packs](https://apps.tiny.cloud/products/skins-and-icon-packs/)
