{% if page.name == "tinymcespellchecker.md" %}
### `content_langs`
{% else %}
## `content_langs`
{% endif %}

{{ site.requires_5_9v }}

This option sets the languages displayed in the `language` dropdown toolbar button and the `language` menu item. The option accepts an array of language objects. Each language object is a JavaScript object defined using the following properties.

| Name | Type | Requirement | Description |
| ---- | ---- | ----------- | ----------- |
| `title` | String | required | The name shown for this language in the UI. |
| `code` | String | required | The language tag, as defined in [Tags for Identifying Languages (BCP47)](https://www.ietf.org/rfc/bcp/bcp47.txt), for this language. This tag is placed in the `lang` attribute for elements formatted using this language. |
| `customCode` | String | optional | An alternative language tag, that does not need to be compatible with BCP47. This code is placed in the `data-mce-lang` attribute for elements formatted using this language, if it is defined. |

**Type:** `Array`

{% if page.name == "tinymcespellchecker.md" %}
**Default:**
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
> **Note:** This default is provided by the Spell Checker Pro plugin, it is not available in the core editor.

> **Note:** The languages specified by the deprecated [`spellchecker_select_language`](#spellchecker_select_language) option are used as a fallback if they are available.

{% else %}
There is no default value for the `content_langs` option. If no value is specified, the `language` toolbar button and menu item are not available. A default value for this option is provided by the Spell Checker Pro plugin, for more information see: [Spell Checker Pro plugin - `content_langs`]({{site.baseurl}}/plugins/premium/tinymcespellchecker/#content_langs).
{% endif %}

For example:

{% if page.name == "tinymcespellchecker.md" %}
#### Example: Using `content_langs` to change spelling dictionaries

Content languages applied by the `language` toolbar button or menu item will determine which dictionary Spell Checker Pro uses to check words within those elements. Ensure that the `code` specified is within the [Supported Languages](#supportedlanguages) section. To use a language code that is not valid according to [Tags for Identifying Languages (BCP47)](https://www.ietf.org/rfc/bcp/bcp47.txt), set `customCode` to the code supported by Spell Checker Pro and set `code` to an equivalent code that is valid as per BCP47.

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
{% else %}
### Example: Using `content_langs`

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
{% endif %}