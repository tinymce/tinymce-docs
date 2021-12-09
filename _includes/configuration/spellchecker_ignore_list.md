### `spellchecker_ignore_list`

This option specifies which words should be ignored by the spell checker. If an array of words is provided, the specified words will be ignored for all languages. If an object containing an array of words per language is provided, the specified words will be ignored for the specified languages.

> **Note:** Languages specified as keys in the `spellchecker_ignore_list` object must match the configured [Spellchecker Languages]({{site.baseurl}}/plugins/premium/tinymcespellchecker/#spellchecker_languages).

Type
: `String[]` or `Object`

#### Example: Using `spellchecker_ignore_list` to ignore words in all languages

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  spellchecker_ignore_list: ['tinymce', 'TinyMCE']
});
```

#### Example: Using `spellchecker_ignore_list` for specific languages

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'tinymcespellchecker',
  spellchecker_ignore_list: {
    en_US: ['tinymce', 'TinyMCE'],
    es: ['tinymce']
  }
});
```

