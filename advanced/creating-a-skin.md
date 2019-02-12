---
layout: default
title: Create a skin for TinyMCE
title_nav: Create a skin
description_short: Introducing skin creation.
description: Introducing skin creation, less and icon modification.
keywords: create creator skin icon
---

This section provides information on how to create a new skin to alter the appearance of TinyMCE.

## Prerequisites:

This guide assumes:

* Basic understanding of [Node.js](http://nodejs.org) and [Gulp](http://gulpjs.com).
* Familiarity with the command line and running simple commands.

> Note: The  [TinyMCE Skin Creator](http://skin.tinymce.com/) only supports TinyMCE 4.

## Preparation

Skin for TinyMCE 5 is written in [less](http://lesscss.org), a popular CSS preprocessor. Making a skin primarily involves modifying variables similar to using an API. The CSS rules are not modified or overridden, instead the `less` variables in the `skin` files is modified. This makes updating TinyMCE easier.

> Important: TinyMCE does not recommend modifying or overriding CSS rules directly.

1. Download (or `git clone`) the [TinyMCE skin tools](https://github.com/tinymce/oxide).
1. Open a terminal and `cd` into the `/oxide` directory.
1. Run the following command to install all dependencies:
```js
npm install
```
4. To start `gulp` and spin up a web server for previewing the files, run the following command:
```js
npm run start
```
> This command starts the preview server at the URL `http://localhost:3000` and starts watching the filesystem for changes.

> Note: Run the following command to just build the files:
```
npm run build
```


### Result:

You now have the development environment set up and are ready to get to work.

![**TinyMCE skin SDK for Silver theme**]({{site.baseurl}}/images/SDKforsilver.png)

## Making or editing a skin

The preparation steps above must be performed to create or edit a skin.

### Overview

In the `/oxide` directory, navigate to `src/less/skins/`. There are two folders in this location:
* `/ui` - which is the skins for the editor.
* `/content` - which is the skins for the content within the editor.

The skin imports the theme `less` files located in the `src/less/theme/` directory. The CSS in the `/theme` folder is not required to be edited. Instead, TinyMCE provides variables for the relevant CSS properties, such as colors, margins, and spacings, that are used in the skin file to customize TinyMCE. There are has multiple benefits of this approach. The TinyMCE instance can be easily updated despite making advanced changes to the skin, since the only thing that is changed is a variable file.
The users also benefit from accessing the browser testing we make.

> Note: The skin **only** changes the visual presentation of the UI and **not** the placement of elements. Placement of elements is done by the TinyMCE UI framework. This framework makes it possible to do complex UI layouts on all browsers without touching any CSS when plugins are created.

### Creating a skin

1. Begin by duplicating the `default` folder located in `src/less/skins/ui/` and rename it to the name of your skin.
2. Open the file `src/less/theme/globals/global-variables.less` and **copy** the variables you like to change to your `skin.less` file in the folder you duplicated in the previous step. Change the values. The variables you put in `skin.less` will override the default values.
3. For more detailed customizations, review the variables in each component, such as `src/less/theme/components/toolbar-button.less` and copy the ones you want to change to `skin.less`.
4. To style interface elements in the content, such as selection color, drag handles, table of contents, bookmarks etc, copy variables to `src/less/skins/ui/<skin-name>/content.less` or `content.inline.less` depending on if you are using the inline mode or not.
5. Preview your skin by building it using the `npm run start` command in your terminal and visit the address shown in the terminal, usually `localhost:3000`.

### Creating a content css

To update the appearance of the content within the editor, such as headings, quotes, lists etc you create a content css. These are located in `src/less/skin/content/`

1. Create a folder in `src/less/skins/content/` and create a `content.less` file in it. Alternatively you can duplicate any of the existing content skins.
2. Add the relevant element selectors for your particular use case such as `h1` to `h6`, `a`, `blockquote`, `code`, `table`... 

### Moving your skin into TinyMCE

1. Simply copy your skin and/or content skin from `build/skins/` to the corresponding folders in your TinyMCE folder.
2. Update your init function with the [skin](https://www.tiny.cloud/docs-beta/configure/editor-appearance/#skin) option and/or the [content_css](https://www.tiny.cloud/docs-beta/configure/content-appearance/#content_css) option.

## Modifying the icons

Documentation on how to change the icons will be added here shortly.
