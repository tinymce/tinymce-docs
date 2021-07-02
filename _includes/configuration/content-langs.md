## `content_langs`

{{ site.requires_5_9v }}

This option allows you to override the languages displayed in the `language` dropdown toolbar button and the `language` menu item. This option accepts an array of language objects.

Each language object is a JavaScript object defined using the following properties.

| Name | Type | Requirement | Description |
| ---- | ---- | ----------- | ----------- |
| title | String | required | The name shown for this language in the UI. |
| code | String | required | The language tag, as defined in [Tags for Identifying Languages (BCP47)](https://www.ietf.org/rfc/bcp/bcp47.txt), for this language. This tag is placed in the `lang` attribute for elements formatted using this language. |
| customCode | String | optional | An alternative language tag, that does not need to be compatible with BCP47. This code is placed in the `data-mce-lang` attribute for elements formatted using this language, if it is defined. |

**Type:** `Array<ContentLang>`

**Default Value:**
```js
[
  { title: 'English', code: 'en' },
  { title: 'Spanish', code: 'es' },
  { title: 'French', code: 'fr' },
  { title: 'German', code: 'de' },
  { title: 'Portuguese', code: 'pt' },
  { title: 'Chinese', code: 'zh' }
]
```

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

### Using `content_langs` with Spellchecker Pro

The Spellchecker Pro plugin also defines a `language` toolbar button, with similar functionality. In TinyMCE 5.9 and later, the `content_langs` option has precedence over [`spellchecker_select_languages`]({{site.baseurl}}//plugins/premium/tinymcespellchecker/#spellchecker_select_languages) and the `language` toolbar button will be controlled by the `content_langs` option if both are specified.

Content languages applied by the `language` toolbar button or menu item will determine which dictionary Spellchecker Pro uses to check words within those elements. Ensure that the `code` you specify is within the [Supported Languages]({{site.baseurl}}//plugins/premium/tinymcespellchecker/#supportedlanguages) section. If the language code you with to use is not valid according to [Tags for Identifying Languages (BCP47)](https://www.ietf.org/rfc/bcp/bcp47.txt), set `customCode` to the code supported by Spellchecker Pro and set `code` to an equivalent code that is valid as per BCP47.

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
