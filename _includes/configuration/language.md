## `language`

This option specifies the language used for the {{site.productname}} user interface, such as menu items, dialogs, and tooltips. By default, {{site.productname}} user interface is set to US English.

Before changing the language option, ensure that the language pack is available to the {{site.productname}} instance. {{site.companyname}} provides two collections of language packs:

- _Enterprise_ language packs - Professionally localized language packs provided on {{site.cloudname}} and bundled with enterprise self-hosted bundles.
- _Community_ language packs - Localizations provided by {{site.productname}} users through Transifex, which need to be downloaded prior to use, from [the {{site. companyname}} Downloads Page - Language Packages]({{site.gettiny}}/language-packages/).

For information on:

- Using the enterprise language packs, see: [Using the enterprise language packs](#usingtheenterpriselanguagepacks).
- Using the community language packs, see: [Using the community language packs](#usingthecommunitylanguagepacks).

**Option:** `language`

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

### Using the enterprise language packs

The following professionally localized language packs are provided to paid {{site.cloudname}} and enterprise self-hosted deployments. To use these language packs, set the `language` option to the corresponding language code. No additional configuration is required.

{% include misc/ui-languages.md %}

{% include misc/using-community-lang-packs.md %}
