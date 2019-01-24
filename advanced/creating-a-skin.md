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

> Note: The  [TinyMCE Skin Creator](http://skin.tinymce.com/) only supports TinyMCE 4.

## Preparation

Skin for TinyMCE 5 are written in [less](http://lesscss.org), a popular CSS preprocessor. Making a skin primarily involves modifying variables which you can consider a kind of API. You are not supposed to modify or override CSS rules, instead you override the less variables in your skin files. This makes updating TinyMCE much easier.

1. Download the [**LINK MISSING** TinyMCE skin tools](#).
2. Install all dependencies with `npm install`.
3. Issue the `gulp` command which also spins up a webserver for previewing the files (If you just want to build the files, use `gulp build`) .
4. Point your web browser of choice to the address shown in the terminal, usually `localhost:3000`.

You now have the development environment set up and are ready to get to work.

## Making or editing a skin

Make sure you have performed the preparation step above.

### Orientation

Begin by looking in the `src/less/skins/` folder where you find two folders: `ui` which is the skins for the editor and `content` which skins the content within the editor. The skin imports the theme `less` files located in `src/less/theme/`. You are not supposed to edit the CSS in the theme folder, instead we have created variables for relevant css properties such as colors, margins and spacings which you use in your skin file to customize TinyMCE. This have multiple benefits: you can do quite advanced changes and still easily update TinyMCE since the only thing you have changed is a variable file, and you benefit from all the browser testing we make.

> Note: The skin **only** changes the visual presentation of the UI and **not** the placement of elements. Placement of elements is done by the TinyMCE UI framework. This framework makes it possible to do complex UI layouts on all browsers without touching any CSS when plugins are created.

### Creating a skin

1. Begin by duplicating the `default` folder located in `src/less/skins/ui/` and rename it to the name of your skin.
2. Open the file `src/less/theme/globals/global-variables.less` and **copy** the variables you like to change to your `skin.less` file in the folder you duplicated in the previous step. Change the values. The variables you put in `skin.less` will override the default values.
3. For more detailed customizations, review the variables in each component, such as `src/less/theme/components/toolbar-button.less` and copy the ones you want to change to `skin.less`.
4. To style interface elements in the content, such as selection color, drag handles, table of contents, bookmarks etc, copy variables to `src/less/skins/ui/<skin-name>/content.less` or `content.inline.less` depending on if you are using the inline mode or not.
5. Preview your skin by building it using the `gulp` command in your terminal.

### Creating a content skin

To update the appearance of the content within the editor, such as headings, quotes, lists etc you create a content skin. These are located in `src/less/skin/content/`

1. Create a folder in `src/less/skins/content/` and create a `content.less` file in it. Alternatively you can duplicate any of the existing content skins.
2. Add the relevant element selectors for your particular use case such as `h1` to `h6`, `a`, `blockquote`, `code`, `table`... 

### Moving your skin into TinyMCE

1. Simply copy your skin and/or content skin from `build/skins/ to the corresponding folders in your TinyMCE folder.
2. Update your init function with the [skin](https://www.tiny.cloud/docs-beta/configure/editor-appearance/#skin) option and/or the [content_css](https://www.tiny.cloud/docs-beta/configure/content-appearance/#content_css) option.

## Modifying the icons

TinyMCE uses inline SVG to display icons. The icons is loaded into the editor using a icon pack file.  This guide assumes you have basic understanding of [Node](http://nodejs.org) and [Gulp](http://gulpjs.com).

1. To modify or create a new icon pack, download the [**LINK MISSING** TinyMCE default icons](#). Perform the installation instructions outlined in the `README.md` in the root of the project
2. Modify the icons in the `src/svg/` folder either by designing new ones in a design tool, or copying icons from a another icon pack. **It's important that the icons keep their file names.**
3. Remove all the svg files you *didn't* change to save some space. This step is optional.
4. Build the icon pack using `gulp` which build a `/dist` folder in the root of the project. The build process takes care of minification and optimization. You can preview your icons with the `dist/html/Icons.html` file (it works without a web server).
5. To use the icon pack in TinyMCE, copy the `build/icons` folder to the same folder as your `tinymce.min.js` file. Then update your init function with the [icons](http://www.tiny.cloud/docs-beta/configure/editor-appearance/#icons) option.

> Note: The icon's size is independent of the toolbar button size. To change the toolbar button size you create a new skin as outlined above and update the toolbar button size variables.

> Tip: The icon pack only need to contain the icons you modify and fall back to the default icons for the ones that's absent from the icon pack. You can delete all the SVG files in `src/svg/` that you don't need to save space.

