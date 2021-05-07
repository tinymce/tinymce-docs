---
layout: default
title: content_css
---

This option enables you to specify a custom CSS file that extends the theme content CSS. This CSS file is the one used within the editor (the editable area). This option can also be a comma separated list of URLs.

If you specify a relative path, it is resolved in relation to the URL of the (HTML) file that includes TinyMCE, NOT relative to TinyMCE itself.

## Changing the editor default font size and font dropdown:

If you want the editor default font size to match your actual website and the TinyMCE font size drop down menu to match follow these steps:

Add the following to `tinyMCE.init()`

```js
content_css : "css/custom_content.css",
theme_advanced_font_sizes: "10px,12px,13px,14px,16px,18px,20px",
font_size_style_values : "10px,12px,13px,14px,16px,18px,20px",
```

The content_css option points to a modified (change font-size) copy of the default CSS file (`tiny_mce/themes/advanced/skins/default/content.css`). Update the following:

```css
body, td, pre {color:#000; font-family:Verdana, Arial, Helvetica, sans-serif; font-size:14px; margin:8px;}
```

Note: updating the actual content.css will have no effect. You need to create a copy and reference it in tinyMCE.init().

In this case the default font size is 14px. Ensure your actual website style sheet matches.

theme_advanced_font_sizes changes the dropdown menu fonts to visually match the style values. font_size_style_values controls the font size values inserted into the editor and code.

## Example of usage of the content_css option:

Absolute path:

```js
// File: http://domain.mine/mysite/index.html

tinyMCE.init({
  ...
  content_css : "/mycontent.css"    // resolved to http://domain.mine/mycontent.css
});
```

Relative path:

```js
// File: http://domain.mine/mysite/index.html

tinyMCE.init({
  ...
  content_css : "mycontent.css"    // resolved to http://domain.mine/mysite/mycontent.css
});
```

Using multiple stylesheets:

```js
tinyMCE.init({
  ...
  content_css : "mycontent.css,mycontent2.css"    // includes both css files in header
});
```

## Note:

Browser caching might cause tinyMCE to not read the contents of a changed CSS file. You'll see "old" colors & styles.

One solution is to manually clear the browser cache when the file for content_css or editor_css has changed. Another solution is to use an old hack which adds a bogus parameter to the URL containing a present timestamp (number of milliseconds since January 1st, 1970) like "myFile.css?bogus=10023561235". Possible solutions could look like this:

```js
content_css : "path/myfile.css?" + new Date().getTime(),
```

```js
content_css : "path/myscript.php?myParam=myValue&bogus=" + new Date().getTime(),
```

## What is this good for?

The CSS file in this setting should be the very CSS file that controls the looks (or "layout") of all your pages! So, let's say you include a file "myLayout.css" in all your pages in order to control your site's global looks then this file must be set as your content_css option, because then the contents in the editor will also have the looks of your site.

Any CSS classes defined in your CSS file will show up in the styles dropdown lists (unless you explicitly set what shows up in the styles dropdown list with the [theme_advanced_styles](https://www.tiny.cloud/docs-3x/api/configuration/Configuration3x@theme_advanced_styles) option), be they in the main editor window or in a plugin's dialogue window (for example, the [advimage plugin](https://www.tiny.cloud/docs-3x/api/plugins/Plugin3x@advimage) dialogue window) because TinyMCE will generate them dynamically based on your CSS file.

## Default CSS

As of TinyMCE3 there is a default CSS file loaded into your editor's content window. This default stylesheet can be found here:

```
tiny_mce/themes/
    {your theme here (usually "advanced" or "simple")}
        /skins/
            {your skin here (usually "default")}
                /content.css
```

## TinyMCE specific rules

The body element of a TinyMCE instance has it's own class called mceContentBody this can be used to add TinyMCE specific CSS rules to your site's css.

```css
/* Site rules */
body {
   background: #000 url('somebg.gif');
}

/* TinyMCE specific rules */
body.mceContentBody {
   background: #FFF;
}

.mceContentBody a {
   color: red !important; /* FF requires a important here */
}
```
