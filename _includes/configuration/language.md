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

### Supported Languages

The available language codes for use with this option are as follows:

{% include misc/ui-languages.md %}

If a language you need is not available, you may wish to translate it yourself. To contribute to translating {{site.productname}}, go to our [Transifex translation](https://www.transifex.com/projects/p/tinymce/) page and sign up, then request to join a team or create a new team if your language are not listed.
