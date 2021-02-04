The following events are provided by the [Spell Checker Pro plugin]({{site.baseurl}}/plugins/premium/tinymcespellchecker/).

| Name                        | Data                                         | Description                                                                                     |
| --------------------------- | -------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| SpellcheckerIgnore          | `{ word: string }`                           | Fired when a single instance of a word has been marked as ignored.                              |
| SpellcheckerIgnoreAll       | `{ word: string }`                           | Fired when all instances of a word has been marked as ignored.                                  |
| SpellcheckError             | `{ message: string }`                        | Fired when a spellchecker error occurs, such as the Spell Checker Pro service can't be reached. |
| SpellcheckStart             | N/A                                          | Fired when spellchecking is enabled.                                                            |
| SpellcheckEnd               | N/A                                          | Fired when spellchecking is disabled.                                                           |
| SpellcheckerLanguageChanged | `{ language: string, prevLanguage: string }` | Fired when the spellchecking language is changed.                                               |
