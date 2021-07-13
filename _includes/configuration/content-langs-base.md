This option sets the languages displayed in the `language` toolbar button and the `language` menu item. The option accepts an array of language specs. Each language spec is a JavaScript object defined using the following properties.

| Name | Type | Requirement | Description |
| ---- | ---- | ----------- | ----------- |
| `title` | String | required | The name shown for this language in the UI. |
| `code` | String | required | The language tag, as defined in [Tags for Identifying Languages (BCP47)](https://www.ietf.org/rfc/bcp/bcp47.txt), for this language. This language tag is placed in the `lang` attribute for elements formatted using this language. |
| `customCode` | String | optional | An alternative language tag, that does not need to be compatible with BCP47. This string is placed in the `data-mce-lang` attribute for elements formatted using this language, if it is defined. |

