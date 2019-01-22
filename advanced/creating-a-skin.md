---
layout: default
title: Create a skin for TinyMCE
title_nav: Create a skin
description_short: Introducing skin creation.
description: Introducing skin creation, less and icon modification.
keywords: create creator skin icon
---

Create a new skin to alter the appearance of TinyMCE.

This guide assumes you have basic understanding of [Node](http://nodejs.org) and [Gulp](http://gulpjs.com) and know your way around a terminal.

> Note: The  [TinyMCE Skin Creator](http://skin.tinymce.com/) does not support TinyMCE 5 yet.

## Preparation

Skin for TinyMCE 5 are written in [LESS](http://lesscss.org), a popular CSS preprocessor. Making a skin primarily involves modifying variables which you can consider as a kind of API. You are not supposed to modify or override CSS rules, instead you override the less variables in your skin files.

1. Downloading the [**LINK MISSING** Oxide Skin project](#).
2. Install all dependencies with `npm install`.
3. Issue the `gulp` command which also spins up a webserver for previewing the files. (If you just want to build the files, use `gulp build`) .
4. Point your web browser of choice to the address shown in the terminal, usually `localhost:3000`.

You now have the development environment set up and are ready to get to work.

## Making or editing a skin

Make sure you have performed the preparation step above.

Begin by looking in the `src/less/skins/` folder where you find two folders: `ui` which is the skins for the editor and `content` which skins the content within the editor. The skin imports the theme LESS files located in `src/less/theme/`. You are not supposed to edit the CSS in the theme folder, instead we have created variables for relevant css properties such as colors, margins and spacings which you use in your skin file to customize TinyMCE 5. This have multiple benefits. You can do quite advanced changes and still easily update TinyMCE 5 since the only thing you have changed is a variable file, and you benefit from all the browser testing we make.

> Note: The skin **only** changes the visual presentation of the UI and **not** the placement of elements. Placement of elements is done by the TinyMCE UI framework. This framework makes it possible to do complex UI layouts on all browsers without touching any CSS when plugins are created.

### Creating a skin

1. Begin by duplicating the `default` folder located in `src/less/slins/ui/` and rename it.
2. Open the file `src/less/theme/globals/global-variables.less` and **copy** the variables you like to change to your `skin.less` file in the folder you duplicated in the previous step. Change the values. The variables you put in `skin.less` will override the default values.
3. For more detailed customizations, review the variables in each component, such as `src/less/theme/components/toolbar-button.less` and copy the ones you want to change to `skin.less`.
4. To style interface elements in the content, such as selection color, drag handles, table of contents, bookmarks etc, copy variables to `src/less/skins/ui/<skin-name>/content.less` or `content.inline.less` depending on if you are using the inline mode or not.
5. Preview your skin by building it with `gulp`.
6. **TRANSFER YOUR SKIN TO TINYMCE! HOW?** 

### Creating a content skin

To update the appearance of the content within the editor, such as headings, quotes, lists etc you create a content skin. These are located in `src/less/skin/content/`

1. Create a folder in `src/less/skins/content/` and create a `content.less` file in it. Alternatively you can duplicate any of the existing content skins.
2. Add the relevant element selectors for your particular use case such as `h1` to `h6`, `a`, `blockquote`, `code`, `table`... 

## Modifying the icons

TinyMCE 5 uses inline SVG to display icons. The icons is loaded into the editor using a icon pack file.  This guide assumes you have basic understanding of [Node](http://nodejs.org) and [Gulp](http://gulpjs.com).

To modify or create a icon pack, download the [**LINK MISSING** default icon repository](#). Modify the icons in the `src/svg/` folder. It's important that the icons keep their file names. Then perform the commands  `npm install` and `gulp` which build a `/dist` folder in the root of the project. The build process takes care of minification and optimization. You can preview your icons with the `dist/html/Icons.html` file (it works without a web server). The icon pack is found in `dist/js/???`. To use the icon pack in TinyMCE, see [LINK TO USING ICON PACKS](#).

> Note: TinyMCE uses the size of the SVG which means that if you create an SVG with the size of 16px, it will be 16px in TinyMCE too. The default icons is based on a 24x24 pixel grid with some exceptions.

> Tip: The icon pack only need to contain the icons you modify and fall back to the default icons for the ones that's absent from the icon pack. You can delete all the SVG files in `src/svg/` that you don't need to save space.

