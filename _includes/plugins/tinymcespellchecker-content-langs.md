### `content_langs`
 The `content_langs` option replaces the `spellchecker_select_languages` option. The value of the `spellchecker_select_languages` option, or its default, are used as a fallback for `content_langs`.

{% include configuration/content_langs_base.md %}

**Type:** `Array`

#### Example: Using `content_langs` to change spelling dictionaries

The Spell Checker Pro plugin will use the `code` property to determine which dictionary to use on the content, unless the `customCode` property is available. The language tag specified by `customCode` overrides the spelling dictionary, to allow for non-standard languages such as the medical dictionaries provided with Spell Checker Pro. For all languages, ensure that:

- The `code` property is valid language tag, according to [Tags for Identifying Languages (BCP47)](https://www.ietf.org/rfc/bcp/bcp47.txt)
- Either the `code` property is one of the [Supported Languages](#supportedlanguages) or the `customCode` override property is defined.
- The `customCode` property is one of the [Supported Languages](#supportedlanguages) if it is defined.

For example:

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
