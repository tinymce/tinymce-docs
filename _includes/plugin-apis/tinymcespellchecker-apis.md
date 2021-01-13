{{site.requires_5_7v}}

| Name | Arguments | Description |
|------| ------| ----------- |
| addIgnoredWords | words: `string[]`, lang?: `string` | Add an array of words to the `spellchecker_ignore_list` for a specific language. Add the array of words to all languages by omitting the `lang` parameter. |

**Examples**

```js
// ignore words for all languages
tinymce.activeEditor.plugins.tinymcespellchecker.addIgnoredWords(['tinymce']);

// ignore words for a specific language
tinymce.activeEditor.plugins.tinymcespellchecker.addIgnoredWords(['TinyMCE', 'tinymce'], 'en_us');
```
