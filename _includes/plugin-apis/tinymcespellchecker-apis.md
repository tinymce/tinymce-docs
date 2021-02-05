{{site.requires_5_7v}}

| Name | Arguments | Description |
|------| ------| ----------- |
| addIgnoredWords | words: `string[]`, lang?: `string` | Add an array of words to the `spellchecker_ignore_list` for a specific language. Add the array of words to all languages by omitting the `lang` parameter. |
| getLanguage | N/A | Get the current language enabled for spellchecking.
| setLanguage | language: `string` | Set the current language for spellchecking. This must be a supported language code (case-sensitive). For a list of supported languages, see: [Spell Checker Pro - `Supported languages`]({{ site.baseurl }}/plugins/premium/tinymcespellchecker/#supportedlanguages)

**Examples**

```js
// ignore words for all languages
tinymce.activeEditor.plugins.tinymcespellchecker.addIgnoredWords(['tinymce']);

// ignore words for a specific language
tinymce.activeEditor.plugins.tinymcespellchecker.addIgnoredWords(['TinyMCE', 'tinymce'], 'en_us');

// get the current language used for spellchecking
tinymce.activeEditor.plugins.tinymcespellchecker.getLanguage()

// set the current language to a specific language
tinymce.activeEditor.plugins.tinymcespellchecker.setLanguage('sv')  // e.g. Swedish
```
