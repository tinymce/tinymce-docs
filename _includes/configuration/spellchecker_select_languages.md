### `spellchecker_select_languages`

> **Note:** The `spellchecker_select_languages` option was deprecated with the release of {{site.productname}} 5.9. The `content_langs` option should be used instead. This change was made to allow more control over the way languages are specified, and to reflect that the option can be used outside of spell checking.

This option specifies the languages that can be set for content when working with multi-language content. The specified languages will be available from the [`language` toolbar drop-down menu button](#toolbarbuttons).  For a list of available languages, see: [Supported languages](#supportedlanguages).

**Type:** comma-separated `String`

**Default Value:** `'en,es,fr,de,pt,zh'`

#### Example: Using `spellchecker_select_languages`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  toolbar: 'language',
  spellchecker_select_languages: 'en,es,fi,fr,da,de,nl,it,nb,pt,sv,zh'
});
```

