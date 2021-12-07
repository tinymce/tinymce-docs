### `emoticons_database_url`

This option provides the default location to load the emoji database from. The database should be an external JavaScript file, that registers a `tinymce.plugins.emoticons` resource.

Type
: `String`

Default
: `'${pluginUrl}/js/emojis.js'`

```js
tinymce.Resource.add('tinymce.plugins.emoticons', {
  robot: {
    keywords: ['computer', 'machine', 'bot'],
    char: '🤖',
    category: 'people'
  }
});
```

#### Example: Using `emoticons_database_url`

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'emoticons',
  toolbar: 'emoticons',
  emoticons_database_url: '/emojis.js'
});
```
