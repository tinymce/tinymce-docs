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
