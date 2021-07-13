## `content_langs`
{% include configuration/content-langs-base.md %}

There is no default value for the `content_langs` option. If no value is specified, the `language` toolbar button and menu item are not available. A default value for this option is provided by the Spell Checker Pro plugin. For information on using the `content_langs` option with the Spell Checker Pro plugin, see: [Spell Checker Pro plugin - `content_langs`]({{site.baseurl}}/plugins/premium/tinymcespellchecker/#content_langs).

**Type:** `Array`

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
