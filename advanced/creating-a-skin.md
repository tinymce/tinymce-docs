---
layout: default
title: Create a skin for TinyMCE
title_nav: Create a skin
description_short: Introducing skin creation.
description: Introducing skin creation, less and icon modification.
keywords: create creator skin icon
---

This section provides information on how to create a new skin to customize the appearance of TinyMCE.

> Note: The  [TinyMCE Skin Creator](http://skin.tinymce.com/) only supports TinyMCE 4.

## Prerequisites:

This guide assumes:

* Basic understanding of [Node.js](http://nodejs.org) and [Gulp](http://gulpjs.com).
* Basic understanding of [Less](http://lesscss.org), the CSS preprocessor we use to build the skins. More specifically, [read the section about variables](http://lesscss.org/features/#variables-feature)
* Familiarity with the command line and running simple commands.

## Preparation

The CSS that goes with a theme is called a skin. The default skin for TinyMCE 5 is named Oxide and is written in [less](http://lesscss.org), a popular CSS preprocessor. With Oxide we introduced a concept we call the _Style API_. This API consists of around 300 variables which you use to modify the appearance of TinyMCE, _you never touch the underlying CSS_. The benefit of this approach is that you can keep TinyMCE updated as changes in the CSS and HTML will not break your skin. This also means that if things doesn't work as expected, we can provide support and bug fixed, something that was virtually impossible before.

> Important: We do not recommend modifying or overriding CSS rules directly.

1. Download (or `git clone`) the [REPOSITORY NAME](REPOSITORY URL).
2. Open the terminal and navigate to the repository folder
3. Run the following command to install all dependencies:
```js
npm install
```
4. To preview the included skins, run the command:
```js
npm start
```
This command spins up a local web server at the URL `http://localhost:3000` and starts watching the filesystem for changes.

The development environment is set up and ready to work.

![**TinyMCE skin SDK for Silver theme**]({{site.baseurl}}/images/SDKforsilver.png)

If you just need to build the skins without launching a web server, run:
```
npm run build
```

## Making or editing a skin

The preparation steps above must be performed to create or edit a skin.

### Overview

Navigate to `src/less/skins/`. There are two folders in this location:
* `/ui` - which is the skins for the editor.
* `/content` - which is the skins for the content within the editor.

The folder `src/less/theme/` contains the less files. At the top of most files you find the available variables that defines the default colors, margins, fonts etc (the strings that starts with an at-character, for example `@background-color`). *Do not edit* these files, instead use them as a reference when creating your skin. Two common places you likely start with is the global variables: `src/less/theme/globals/global-variables.less` and the toolbar buttons: `src/less/theme/components/toolbar-buttons/toolbar-buttons.less`.

The general workflow is that you look inside the less files within the themes folder and copy the variables you like to change into your skin's `skin.less` file.

> Note: The skin **only** changes the visual presentation of the UI and **not** the placement of elements. Placement of elements is done by the TinyMCE UI framework. This framework makes it possible to do complex UI layouts on all browsers without touching any CSS when plugins are created.

### Creating a skin

1. Begin by duplicating the `default` folder located in `src/less/skins/ui/` and rename it to the name of your skin.
2. Open the file `src/less/skin/ui/<your-skin-name>/skin.less`
3. Open any less file located in the theme folder, for example `src/less/theme/globals/global-variables.less` and copy a variable you like to change, it's easiest to copy the whole line. Let's copy the `@background-color` variable to start with.
4. Paste the variable into the skin.less you opened in step 2. For a striking look, change the variable value to be red, like this: `@background-color: red;`. Then save the file. 
Your skin.less should now look like this:
```less
EXAMPLE
```
And the result should now be a fiery red editor.
{IMAGE}

This is the basic gist of skinning TinyMCE. Copy variables from the theme files and paste them into your skin file. There is variables for most things, like spacing between toolbar buttons to customizing the dialogs. Simple and powerful. And as you can see, since you don'tQ change the files in the /src/less/theme` folder, you can keep TinyMCE updated and expect your custom skin to work.


For more detailed customizations, review the variables in each component, such as `src/less/theme/components/toolbar-button.less` and copy the desired ones to the `skin.less`.

To style interface elements in the content, such as selection color, drag handles, table of contents, bookmarks etc, copy variables to `src/less/skins/ui/<skin-name>/content.less` or `content.inline.less` (if inline mode is being used).

Following is an example of a sample `skin.less` file:

```js
/**
 * Copyright (c) Tiny Technologies, Inc. All rights reserved.
 * Licensed under the LGPL or a commercial license.
 * For LGPL see License.txt in the project root for license information.
 * For commercial licenses see https://www.tiny.cloud/
 */

@import 'src/less/theme/theme';

//

// Root variables
// Begin customization by changing these variables as most other variables are derivatives of these.
@background-color: #1976D2;
@base-value: 24px;
@color-black: #222f3e;
@color-tint: #3498db;
@color-white: #fff;
@color-error: #c00;
@font-stack: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif;

// Colors
@border-color: darken(@background-color, 20);
@text-color: contrast(@background-color, @color-black, @color-white);
@text-color-muted: contrast(@background-color, fade(@color-black, 60%), fade(@color-white, 50%));
```

### Preview the skin

1. To preview the new skin, run the following command from a terminal:
```js
npm run start
```
2. Navigate to the address shown in the terminal, usually `localhost:3000`. The TinyMCE skin SDK for Silver theme development environment page will appear in the browser.
3. In the **Editor examples** section, select the new skin from the **UI skin** drop-down menu.
![**UI skin**]({{site.baseurl}}/images/default-copy.png)

#### Result

TinyMCE editor with all the configured skin changes will appear in the browser screen.

### Creating a content CSS file

To update the appearance of the content within the editor, such as headings, quotes, lists etc you create a content css. These are located in `src/less/skin/content/`

1. Create a folder in `src/less/skins/content/` and create a `content.less` file in it. Alternatively, any of the existing content skins can be duplicated.
2. Add the relevant element selectors for the desired use case such as `h1` to `h6`, `a`, `blockquote`, `code`, `table`, etc.

### Moving the skin into TinyMCE

1. Copy the skin and/or content skin from `build/skins/` to the corresponding folders in the duplicate TinyMCE folder.
2. Update the init function with the [skin](https://www.tiny.cloud/docs-beta/configure/editor-appearance/#skin) option and/or the [content_css](https://www.tiny.cloud/docs-beta/configure/content-appearance/#content_css) option.

#### Example

Following is an example of a sample `init` configuration for moving the configured skin into a TinyMCE instance.

```js
<!DOCTYPE html>
<html>
  <head>
    <script src="js/tinymce/tinymce.min.js"></script>

    <script>

      tinymce.init({
        selector: 'textarea',

        skin_url: '../oxide/build/skins/ui/<name of default(copy)>',
        content_css: '../oxide/build/skins/content/<name of the new-skin>/content.min.css'
      })
    </script>
  </head>
  <body>
    <textarea>Hello, World</textarea>

  </body>
</html>
```

For more information on how to specify the location of the skin file, see [this]({{site.baseurl}}/configure/editor-appearance/#skin_url) section.

## Modifying the icons

Documentation on how to change the icons will be added here shortly.
