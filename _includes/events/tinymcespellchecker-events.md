The following events are provided by the [Spell Checker Pro plugin]({{site.baseurl}}/plugins/premium/tinymcespellchecker/).

| Name                        | Data                                         | Description                                                                                     |
| --------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| SpellcheckerIgnore          | `{ word: string }`                           | Fired when a single instance of a word has been marked as ignored.                              |
| SpellcheckerIgnoreAll       | `{ word: string, language: string }`         | Fired when all instances of a word (in a certain language) have been marked as ignored.{% if site.productmajorversion < 6 %} **Note:** The `language` property is available for {{ site.productname }} 5.10 and later.{% endif %}                                  |
| SpellcheckError             | `{ message: string }`                        | Fired when a spellchecker error occurs, such as when the Spell Checker Pro service can't be reached. |
| SpellcheckStart             | N/A                                          | Fired when spellchecking is enabled.                                                            |
| SpellcheckEnd               | N/A                                          | Fired when spellchecking is disabled.                                                           |
| SpellcheckerLanguageChanged | `{ language: string, prevLanguage: string }` | Fired when the spellchecking language is changed.<br>{{ site.requires_5_7v }}                      |
