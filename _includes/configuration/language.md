## `language`

This option allows you to specify the language that {{site.productname}}'s user interface will appear in. That is, the toolbar buttons and menu items. By default, {{site.productname}} will use US English as the language of the interface.

If you wish to use a language other than English, please follow these steps:

1. Download the language pack you wish to use [from here]({{site.gettiny}}/language-packages/).
2. Unpack the language file into your `tinymce/langs` folder.
3. Set the [`language`]({{ site.baseurl }}/configure/localization/#language) option in your {{site.productname}} configuration to the language code in the list below (which you'll also find on the language pack [download page]({{site.gettiny}}/language-packages/).
4. Confirm that the language has been set successfully by loading {{site.productname}}.

Please note, the language code you set in your {{site.productname}} configuration must match the filename of the language file. If the language file is not found, {{site.productname}} will not load.

**Type:** `String`

**Default Value:** `en_US`

### Example: Using `language`

In this example we will set the editor language to Swedish.

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  language: 'sv_SE'
});
```

The available language codes for use with this option are as follows:

| Language                      |  Code   | {{ site.cloudname }} /{{ site.newline }}{{ site.enterpriseversion }} |
| :-----------------------------| :-----: | :------------------------------------------------------------------: |
| Arabic                        | ar      | {{ site.tick }}                                                      |
| Arabic (Saudi Arabia)         | ar_SA   |                                                                      |
| Armenian                      | hy      |                                                                      |
| Azerbaijani                   | az      |                                                                      |
| Basque                        | eu      | {{ site.tick }}                                                      |
| Belarusian                    | be      |                                                                      |
| Bengali (Bangladesh)          | bn_BD   |                                                                      |
| Bosnian                       | bs      |                                                                      |
| Bulgarian (Bulgaria)          | bg_BG   | {{ site.tick }}                                                      |
| Catalan                       | ca      | {{ site.tick }}                                                      |
| Chinese (China)               | zh_CN   | {{ site.tick }}                                                      |
| Chinese (Taiwan)              | zh_TW   | {{ site.tick }}                                                      |
| Croatian                      | hr      | {{ site.tick }}                                                      |
| Czech                         | cs      | {{ site.tick }}                                                      |
| Danish                        | da      | {{ site.tick }}                                                      |
| Divehi                        | dv      |                                                                      |
| Dutch                         | nl      | {{ site.tick }}                                                      |
| English (Canada)              | en_CA   |                                                                      |
| English (United Kingdom)      | en_GB   |                                                                      |
| Estonian                      | et      |                                                                      |
| Faroese                       | fo      |                                                                      |
| Finnish                       | fi      | {{ site.tick }}                                                      |
| French (France)               | fr_FR   | {{ site.tick }}                                                      |
| Gaelic, Scottish              | gd      |                                                                      |
| Galician                      | gl      |                                                                      |
| Georgian (Georgia)            | ka_GE   |                                                                      |
| German                        | de      | {{ site.tick }}                                                      |
| German (Austria)              | de_AT   |                                                                      |
| Greek                         | el      | {{ site.tick }} (Support added in {{site.productname}} 5.3)          |
| Hebrew (Israel)               | he_IL   | {{ site.tick }}                                                      |
| Hindi (India)                 | hi_IN   |                                                                      |
| Hungarian (Hungary)           | hu_HU   | {{ site.tick }}                                                      |
| Icelandic (Iceland)           | is_IS   |                                                                      |
| Indonesian                    | id      | {{ site.tick }}                                                      |
| Italian                       | it      | {{ site.tick }}                                                      |
| Japanese                      | ja      | {{ site.tick }}                                                      |
| Kabyle                        | kab     |                                                                      |
| Kazakh                        | kk      | {{ site.tick }}                                                      |
| Khmer (Cambodia)              | km_KH   |                                                                      |
| Korean (Korea)                | ko_KR   | {{ site.tick }}                                                      |
| Kurdish                       | ku      |                                                                      |
| Kurdish (Iraq)                | ku_IQ   |                                                                      |
| Latvian                       | lv      |                                                                      |
| Lithuanian                    | lt      |                                                                      |
| Luxembourgish                 | lb      |                                                                      |
| Malayalam                     | ml      |                                                                      |
| Malayalam (India)             | ml_IN   |                                                                      |
| Mongolian (Mongolia)          | mn_MN   |                                                                      |
| Norwegian Bokmål (Norway)     | nb_NO   | {{ site.tick }}                                                      |
| Persian                       | fa      | {{ site.tick }}                                                      |
| Persian (Iran)                | fa_IR   |                                                                      |
| Polish                        | pl      | {{ site.tick }}                                                      |
| Portuguese (Brazil)           | pt_BR   | {{ site.tick }}                                                      |
| Portuguese (Portugal)         | pt_PT   | {{ site.tick }}                                                      |
| Romanian                      | ro      | {{ site.tick }}                                                      |
| Russian                       | ru      | {{ site.tick }}                                                      |
| Serbian                       | sr      |                                                                      |
| Sinhala (Sri Lanka)           | si_LK   |                                                                      |
| Slovak                        | sk      | {{ site.tick }}                                                      |
| Slovenian (Slovenia)          | sl_SI   | {{ site.tick }}                                                      |
| Spanish                       | es      | {{ site.tick }}                                                      |
| Spanish (Mexico)              | es_MX   | {{ site.tick }} (Premium language pack deprecated in <br>{{site.productname}} 5.5 and newer) |
| Swedish (Sweden)              | sv_SE   | {{ site.tick }}                                                      |
| Tajik                         | tg      |                                                                      |
| Tamil                         | ta      |                                                                      |
| Tamil (India)                 | ta_IN   |                                                                      |
| Tatar                         | tt      |                                                                      |
| Thai (Thailand)               | th_TH   | {{ site.tick }}                                                      |
| Turkish                       | tr      | {{ site.tick }}                                                      |
| Turkish (Turkey)              | tr_TR   |                                                                      |
| Uighur                        | ug      |                                                                      |
| Ukrainian                     | uk      | {{ site.tick }}                                                      |
| Ukrainian (Ukraine)           | uk_UA   |                                                                      |
| Vietnamese                    | vi      |                                                                      |
| Vietnamese (Viet Nam)         | vi_VN   |                                                                      |
| Welsh                         | cy      |                                                                      |

If a language you need is not available, you may wish to translate it yourself. To contribute to translating {{site.productname}}, go to our [Transifex translation](https://www.transifex.com/projects/p/tinymce/) page and sign up, then request to join a team or create a new team if your language are not listed.
