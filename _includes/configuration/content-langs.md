## `content_langs`

{{ site.requires_5_9v }}

This option sets the languages displayed in the `language` dropdown toolbar button and the `language` menu item. The `content_langs` option has no default, and if it is not set then the `language` toolbar button and menu item will not be available. The option accepts an array of language objects.

Each language object is a JavaScript object defined using the following properties.

| Name | Type | Requirement | Description |
| ---- | ---- | ----------- | ----------- |
| title | String | required | The name shown for this language in the UI. |
| code | String | required | The language tag, as defined in [Tags for Identifying Languages (BCP47)](https://www.ietf.org/rfc/bcp/bcp47.txt), for this language. This tag is placed in the `lang` attribute for elements formatted using this language. |
| customCode | String | optional | An alternative language tag, that does not need to be compatible with BCP47. This code is placed in the `data-mce-lang` attribute for elements formatted using this language, if it is defined. |

**Type:** `Array`

### Example: using `content_langs`

```js
tinymce.init({
    selector: 'textarea', // change this according to your HTML
    toolbar: 'language',
    content_langs: [
        { title: 'English', code: 'en' },
        { title: 'Spanish', code: 'es' },
        { title: 'French', code: 'fr' },
        { title: 'German', code: 'de' },
        { title: 'Portuguese', code: 'pt' },
        { title: 'Chinese', code: 'zh' }
    ]
});
```

### Using `content_langs` with Spell Checker Pro

The Spell Checker Pro plugin also defines a `language` toolbar button, with similar functionality. In {{site.productname}} 5.9 and later, the `language` toolbar button and menu item replace this. The `content_langs` option has precedence over [`spellchecker_select_languages`]({{site.baseurl}}/plugins/premium/tinymcespellchecker/#spellchecker_select_languages) for determining which languages are available, where both are defined. Where the `content_langs` option is not specified, the `spellchecker_select_languages` option or its default will set the available languages.

Content languages applied by the `language` toolbar button or menu item will determine which dictionary Spell Checker Pro uses to check words within those elements. Ensure that the `code` specified is within the [Supported Languages]({{site.baseurl}}/plugins/premium/tinymcespellchecker/#supportedlanguages) section. To use a language code that is not valid according to [Tags for Identifying Languages (BCP47)](https://www.ietf.org/rfc/bcp/bcp47.txt), set `customCode` to the code supported by Spell Checker Pro and set `code` to an equivalent code that is valid as per BCP47.

```js
tinymce.init({
    selector: 'textarea', // change this according to your HTML
    toolbar: 'language',
    plugins: 'tinymcespellchecker',
    content_langs: [
        { title: 'English (US)', code: 'en_US' },
        { title: 'English (US Medical)', code: 'en_US', customCode: 'en_US-medical' },
        { title: 'English (UK)', code: 'en_UK' },
        { title: 'English (UK Medical)', code: 'en_UK', customCode: 'en_UK-medical' },
        { title: 'Spanish', code: 'es' },
        { title: 'French', code: 'fr' },
        { title: 'German', code: 'de' },
        { title: 'Portuguese', code: 'pt' },
        { title: 'Chinese', code: 'zh' }
    ]
});
```