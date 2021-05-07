---
layout: default
title: .NET
---

TinyMCE Compressor gzips all javascript files in TinyMCE to a single streamable file. This makes the overall download size 75% smaller and reduces the number of requests to the web server. The initialization time for TinyMCE will also be reduced dramatically by using this script.

## Installation

Here is a step by step list on how to install the GZip compressor.

1.  Download TinyMCE Compressor .NET from the [download page](https://www.tiny.cloud/docs/advanced/using-the-gzip-compressors/).
2.  Copy the `tiny_mce_gzip.js` and `tiny_mce_gzip.aspx` to the tiny_mce directory. The same directory that contains the `tiny_mce.js` file.
3.  Remove the current script tag. <script type="text/javascript" src="tinymce/jscripts/tiny_mce/tiny_mce.js"></script>
4.  Add the new new GZip script <script type="text/javascript" src="tinymce/jscripts/tiny_mce/tiny_mce_gzip.js"></script>.
5.  Add the new GZip initialization call that will tell the compressor what to include in the output. This should be the sum of all and themes, plugins contained on page.

## Example of initialization

The example below will pack both themes and all plugins into one file/steam. Remove the things you don't need or add you custom plugins to the settings below. Remember that the tinyMCE_GZ.init call must be placed in it's own script tag.

```html
<script type="text/javascript" src="tinymce/jscripts/tiny_mce/tiny_mce_gzip.js"></script>
<script type="text/javascript">
tinyMCE_GZ.init({
  plugins : 'style,layer,table,save,advhr,advimage,advlink,emotions,iespell,insertdatetime,preview,media,searchreplace,print,contextmenu,paste,directionality,fullscreen,noneditable,visualchars,nonbreaking,xhtmlxtras',
  themes : 'simple,advanced',
  languages : 'en',
  disk_cache : true,
  debug : false
});
</script>
<script type="text/javascript">
tinyMCE.init({
  .. your normal init ..
});
</script>
```

## Troubleshooting

*   The GZip compressor can fail to load if the server has odd settings or is missing the required support for it to function. To see compilation errors or other problems we suggest that you use HTTP debugging tools like [Fiddler](http://www.fiddlertool.com/fiddler/) or [Firebug](http://www.getfirebug.com/) you can also point you browser directly to the GZip file.
*   Consult the changelog of this script and make sure that you use the latest version of TinyMCE. These two parts are pretty much tied together so there is no guarantee that it will work with older versions of TinyMCE.
*   Visit the [TinyMCE Community forum](https://community.tiny.cloud) for help with the TinyMCE Gzip Compressor.
*   To remove a plugin, remember to remove it both from tinyMCE_GZ.init and TinyMCE.init.
*   To add a plugin, remember to add it both to the tinyMCE_GZ.init and the tinyMCE.init calls.

## License notice

This library is under LGPL license but it uses a GPL:ed third party library for the gzip compression. This third party library can be used in commercial applications. Review the"ICSharpCode.SharpZipLib_Readme.rtf" for details.
