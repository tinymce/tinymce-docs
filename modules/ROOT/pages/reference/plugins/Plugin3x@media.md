---
layout: default
title: media
---

This plugin handles embedded media such as QuickTime, Flash, ShockWave, RealPlayer and Windows Media Player. It has two output methods. One is normal embed/object tags and the other is using Javascript; the latter was added to work around the IE embedded media issue, read more about that below.

## Installation Instructions

1.  Add plugin to TinyMCE plugin option list example: plugins : "media".
2.  Add the button control name to a toolbar row in the theme.
3.  Verify init option [cleanup](/reference/configuration/Configuration3x@cleanup/) is omitted or set to true.

## Initialization Example

```js
tinyMCE.init({
  theme : "advanced",
  mode : "textareas",
  plugins : "media",
  theme_advanced_buttons1_add : "media"
});
```

## Using the JavaScript output method

Object/embed tags are output to the HTML code by default when using this plugin but there is an alternative JS output method. This enables you to workaround the issue with IE not being able to "seamlessly embed" media objects in a HTML page due to a lawsuit.

You will have to add a specific media embed script to your page in order to use this output method. This script includes the functions needed to output the various media types using a document.write method. This script is located at this path `"tiny_mce/plugins/media/jscripts/embed.js"`. Add this script to your page header.

We recommend that you copy the script from the TinyMCE directory to your sites/systems script directory since deep linking into TinyMCE from page level isn't recommended since files such as this might be moved in the future.

## Example on how to add the script to your page header:

```html
<html>
<head>
  <script type="text/javascript" src="embed.js"></script>
</head>
<body>
  Some page with a TinyMCE instance.
</body>
</html>
```

## Plugin options

| Name | Summary |
| --- | --- |
| media_use_script | True/false option that gives you the ability to have a JavaScript embed method instead of using object/embed tags. Defaults to: false |
| media_wmp6_compatible | True/false option that enables you to force Windows media player 6 compatiblity by returning that clsid, but some features and options for WMP may not work if you use this option. You can find a reference on these options at w3schools. Defaults to: false |
| media_skip_plugin_css | Skips the loading of the default plugin CSS file, this can be useful if your content CSS already defined the media specific CSS information, Defaults to: false. |
| media_external_list_url | URL to a JS file containing files to be listed in the media dropdown list similar to the one found in the advimg dialog. The name of the array variable in the JS file should be 'tinyMCEMediaList'. |
| media_types | Name/Value list of format mappings to file extensions. Defaults to: flash=swf;shockwave=dcr;qt=mov,qt,mpg,mp3,mp4,mpeg;shockwave=dcr;wmp=avi,wmv,wm,asf,asx,wmx,wvx;rmp=rm,ra,ram. |
| media_strict | This option enables you to switch strict output on/off. |
