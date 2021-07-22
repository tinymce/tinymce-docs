### Using the community language packs

{% if forModuleLoaders == false %}
> **Note**: {{site.companyname}} recommends using the `language_url` for the community language packs, to avoid copying the language pack into the `tinymce/langs` folder every time you upgrade {{site.productname}}.
{% endif %}

To use change the user interface language using a community language pack:

1. Download the language pack from [the {{site. companyname}} Community Language Packages download page]({{site.gettiny}}/language-packages/).
{% if forModuleLoaders == true %}
1. Unzip and import/require the language file.
{% else %}
1. Unpack the language file into the `tinymce/langs` folder.
{% endif %}
1. Set the [`language`]({{ site.baseurl }}/configure/localization/#language) option in your {{site.productname}} configuration to the language code, matching the filename on the language pack. For example: If the language pack has the filename `sv_SE.js`, then set `language: 'sv_SE',`
1. Confirm that the language has been set successfully by loading {{site.productname}}.

> **Note**: The language code set in the {{site.productname}} configuration must match the filename of the language file. If the language file is not found, {{site.productname}} will not load.

If a language you need is not available, you may wish to translate it yourself. To contribute to translating {{site.productname}}, go to our [Transifex translation](https://www.transifex.com/projects/p/tinymce/) page and sign up, then request to join a team or create a new team if your language are not listed.