---
layout: default
title: General
---

## auto_focus

// http://www.tinymce.com/wiki.php/Configuration:auto_focus

> This option enables you to auto focus an editor instance. The value of this option should be an editor instance id. The editor instance id is the id for the original textarea or div element that got replaced.

Example of usage of the auto_focus option:

```js
tinymce.init({
  ...
  auto_focus: "elm1"
});
```

## br_in_pre

// http://www.tinymce.com/wiki.php/Configuration:br_in_pre

This option allows you to disable TinyMCE's default behaviour when pressing enter within a PRE tag. Pressing enter within a PRE tag will produce a BR tag and will only split PRE tags upon pressing shift+enter when this setting is enabled.

An example that disables this setting is as follows:

```js
tinymce.init({
    br_in_pre: false
});
```


## directionality

// http://www.tinymce.com/wiki.php/Configuration:directionality

> This option allows you to set the base direction of directionally neutral text (i.e., text that doesn't have inherent directionality as defined in Unicode) within the editor. This is similar to the use of the "dir" attribute when using content editable elements by themself.

The allowed values for this configuration option are:

* "ltr"
* "rtl"

An example of this setting is as follows:

```js
tinymce.init({
    ...
    directionality : 'ltr',
    ...
});
```

## browser_spellcheck

// http://www.tinymce.com/wiki.php/Configuration:browser_spellcheck

This is a true/false value if the usage of the browsers internal spellchecker should be used.

```js
tinymce.init({
  ...
  browser_spellcheck : true
});
```

Default value is false.


## content_style

// http://www.tinymce.com/wiki.php/Configuration:content_style

> This option allows you to set custom CSS styles as a string that will be injected into the editor's iframe.

> These styles are useful for previewing content as it will appear outside the editor. Since these styles are not saved with the content, it is important that they match the styles in the location that the content will appear.

An example of this setting is as follows:

```js
tinymce.init({
    ...
    content_style: "div {margin: 10px; border: 5px solid red; padding: 3px}",
    ...
});
```


## end_container_on_empty_block

// http://www.tinymce.com/wiki.php/Configuration:end_container_on_empty_block

> This option allows you to to split the current container block element if the enter key is pressed inside an empty inner block element.

An example of this setting is as follows:

```js
tinymce.init({
    end_container_on_empty_block: true
});
```

## gecko_spellcheck

// http://www.tinymce.com/wiki.php/Configuration:gecko_spellcheck

> This option allows you to disable gecko based browsers' internal spellchecker from being used in TinyMCE.

An example of this setting is as follows:

```js
tinymce.init({
    gecko_spellcheck: false
});
```

## language

// http://www.tinymce.com/wiki.php/Configuration:language

This option allows you to specify the language that TinyMCE's user interface will appear in.

By default, TinyMCE will use US English as the language of the interface.

If you wish to use a language other than english, please follow these steps:

1. Download the language pack you wish to use from here.
2. Unpack the language file into your tinymce/langs folder.
3. Set the language option in your TinyMCE configuration to the language code.
4. Confirm that the language has been set successfully by loading TinyMCE.

Please note, the language code you set in your TinyMCE configuration must match the filename of the language file. If the language file is not found, TinyMCE will not load.

An example of this setting is as follows:

```js
tinymce.init({
    ...
    language: "sv_SE"
    ...
});
```

The available language codes for use with this option are as follows:

|Language                      | Code   |
|:-----------------------------|:-------|
|Arabic                        | ar     |
|Arabic (Saudi Arabia)         | ar_SA  |
|Armenian                      | hy     |
|Azerbaijani                   | az     |
|Basque                        | eu     |
|Belarusian                    | be     |
|Bengali (Bangladesh)          | bn_BD  |
|Bosnian                       |bs      |
|Bulgarian (Bulgaria)          |bg_BG   |
|Catalan                       |ca      |
|Chinese (China)               |zh_CN   |
|Chinese (Taiwan)              |zh_TW   |
|Croatian                      |hr      |
|Czech                         |cs      |
|Danish                        |da      |
|Divehi                        |dv      |
|Dutch                         |nl      |
|English (Canada)              |en_CA   |
|English (United Kingdom)      |en_GB   |
|Estonian                      |et      |
|Faroese                       |fo      |
|Finnish                       |fi      |
|French (France)               |fr_FR   |
|Gaelic, Scottish              |gd      |
|Galician                      |gl      |
|Georgian (Georgia)            |ka_GE   |
|German                        |de      |
|German (Austria)              |de_AT   |
|Greek                         |el      |
|Hebrew (Israel)               |he_IL   |
|Hindi (India)                 |hi_IN   |
|Hungarian (Hungary)           |hu_HU   |
|Icelandic (Iceland)           |is_IS   |
|Indonesian                    |id      |
|Italian                       |it      |
|Japanese                      |ja      |
|Kabyle                        |kab     |
|Kazakh                        |kk      |
|Khmer (Cambodia)              |km_KH   |
|Korean (Korea)                |ko_KR   |
|Kurdish                       |ku      |
|Kurdish (Iraq)                |ku_IQ   |
|Latvian                       |lv      |
|Lithuanian                    |lt      |
|Luxembourgish                 |lb      |
|Malayalam                     |ml      |
|Malayalam (India)             |ml_IN   |
|Mongolian (Mongolia)          |mn_MN   |
|Norwegian Bokmål (Norway)     |nb_NO   |
|Persian                       |fa      |
|Persian (Iran)                |fa_IR   |
|Polish                        |pl      |
|Portuguese (Brazil)           |pt_BR   |
|Portuguese (Portugal)         |pt_PT   |
|Romanian                      |ro      |
|Russian                       |ru      |
|Russian Petrine orthography   | ru@petr1708 |
|Serbian                       |sr      |
|Sinhala (Sri Lanka)           |si_LK   |
|Slovak                        |sk      |
|Slovenian (Slovenia)          |sl_SI   |
|Spanish                       |es      |
|Spanish (Mexico)              |es_MX   |
|Swedish (Sweden)              |sv_SE   |
|Tajik                         |tg      |
|Tamil                         |ta      |
|Tamil (India)                 |ta_IN   |
|Tatar                         |tt      |
|Thai (Thailand)               |th_TH   |
|Turkish                       |tr      |
|Turkish (Turkey)              |tr_TR   |
|Uighur                        |ug      |
|Ukrainian                     |uk      |
|Ukrainian (Ukraine)           |uk_UA   |
|Vietnamese                    |vi      |
|Vietnamese (Viet Nam)         |vi_VN   |
|Welsh                         |cy      |

If a language you need is not available, you may wish to translate it yourself. To join in on translating TinyMCE, go to our [Transifex translation](https://www.transifex.com/projects/p/tinymce/) page and sign up, then request to join a team or create a new team if your language are not listed.


##language_url

A simple URL to where the language file to use.

We recommend using a site absolute URL, for example:

```js
language_url : '/languages/fi.js'
```

You can find and download languages [here](http://www.tinymce.com/i18n/).

## nowrap

This option will make the editable are behave like very much like a &lt;pre&gt; tag, and add a scroll instead of wrapping text.

```js
tinymce.init({
...
nowrap : true
});
```

Boolean value, default **false**.

## object_resizing
This options allows you to turn on/off the resizing handles on images, tables or media objects. This option is enabled by default and allows you to resize table and images. You can also specify a CSS3 selector of what you want to enable resizing on.

Disable all resizing of images/tables

```js
tinymce.init({
        ...
        object_resizing : false
});
```

Enable resizing on images only

```js
tinymce.init({
        ...
        object_resizing : "img"
});
```

## plugins

This option allows you to specify which plugins TinyMCE will attempt to load when starting up.

By default, TinyMCE will not load any plugins.

[Check this documentation page for a list of available plugins.](http://www.tinymce.com/wiki.php/Plugins)

This should be a space separated string.

An example of this setting is as follows:

```js
tinymce.init({
    ...
    plugins : 'advlist autolink link image lists charmap print preview'
    ...
});
```

## external_plugins

This option allows you to specify a URL based location of plugins outside of the normal TinyMCE plugins directory.

TinyMCE will attempt to load these as per regular plugins when starting up.  This option is useful when loading TinyMCE from a CDN or when you want to have the TinyMCE directory separate from your custom plugins.

This value should be set as a javascript object that contains a property for each TinyMCE plugin to be loaded. This property should be named after the plugin and should have a value that contains the location that the plugin that will be loaded from.

An example of this setting is as follows:

```js
tinymce.init({
    ...
    external_plugins: {
        "testing": "http://www.testing.com/plugin.min.js",
        "maths": "http://www.maths.com/plugin.min.js"
    },
    ...
});
```

## selector
This option allows you to specify a CSS selector for the areas that TinyMCE should make editable.

When using this option in TinyMCE's regular editing mode, the element will be replaced with an iframe that TinyMCE will perform all operations within.

An example of this setting that will replace all textarea elements on the page is as follows:

```js
tinymce.init({
    ...
    selector: "textarea",
    ...
});
```

An example of this setting that will replace a textarea element with id "editable" on the page is as follows:

```js
tinymce.init({
    ...
    selector: "textarea#editable",
    ...
});
```

When using this option in TinyMCE's inline editing mode, the selector can be used on any block element and will edit the content in place instead of replacing the element with an iframe.

An example of this setting being used in inline editing mode on a div element with id "editable" is as follows:

```js
tinymce.init({
    ...
    selector: "div#editable",
    inline: true,
    ...
});
```

For more information on the differences between regular and inline editing modes please see this page [here](http://www.tinymce.com/wiki.php/Inline).

## skin

This option allows you to specify the skin that TinyMCE should use. The default skin included with TinyMCE is named "lightgray".

The name of the skin should match the name of the folder within the skins directory of TinyMCE. If the specified skin is not found, TinyMCE will not load.

```js
tinymce.init({
    ...
    skin: "lightgray",
    ...
});
```

If you would like to create your own skin, please see the guide [here](http://www.tinymce.com/wiki.php/Tutorials:Creating_a_skin).

## skin_url

This option enables you to specify location of the current skin. Enables you to load TinyMCE from one URL for example a CDN then load a local skin on the current server.

Example of usage

```js
tinymce.init({
        ...
        skin_url: '/css/mytinymceskin'
});
```
## theme
This option allows you to specify the theme that TinyMCE should use. The default theme included with TinyMCE is named "modern".

The name of the theme should match the name of the folder within the themes directory of TinyMCE. If the specified theme is not found, TinyMCE will not load.

```js
tinymce.init({
    ...
    theme: "modern",
    ...
});
```

## theme_url

This option enables you to specify location of the current theme. Enables you to load TinyMCE from one URL for example a CDN then load a local theme on the current server.

Example of usage

```js
tinymce.init({
        ...
        theme_url: '/mytheme/mytheme.js'
});
```

## inline

This option allows you to specify whether TinyMCE should work in inline mode.

TinyMCE has two main integration modes - a "traditional" forms based mode and an inline editing mode. The inline editing mode is useful when creating user experiences where you want the editing view of the page to be merged with the reading view of the page. This creates a seamless editing experience and true WYSIWYG behaviour. From a technical perspective, in inline mode, the editor does not replace the selected element with it's own iframe, but instead edits the element's content in place instead.

This option is set through a boolean value, which by default is false.

An example of this setting is as follows:

```js
tinymce.init({
    ...
    inline: true,
    ...
});
```

For more information on the differences between regular and inline editing modes please see this page [here](http://www.tinymce.com/wiki.php/Inline).

## hidden_input

This option gives you the ability to disable the auto generation of hidden input fields for inline editing elements. By default all inline editors gets an hidden input element that contents gets saved to when you do editor.save() or tinymce.triggerSave(); this can be disabled if you don't need these controls.

Example

```js
tinymce.init({
    selector: ".editable",
    inline: true,
    hidden_input: false
});
```

## cache_suffix

This option lets you add a custom cache buster url part at the end of each request tinymce makes to load CSS, scripts etc. Just add the query string part you want to append to each URL request for example "?v=4.1.6"

Example of usage

```js
tinymce.init({
    ...
    cache_suffix: "?v=4.1.6"
});
```

## automatic_uploads

This option allows you to disable TinyMCE from automatically uploading local images. This option is set true by default.

An example that disables this setting is as follows:

```js
tinymce.init({
        ...
        automatic_uploads: false
});
```
