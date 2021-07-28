### `templates`

This option lets you specify a predefined list of templates to be inserted by the user into the editable area. It is structured as an array with each item having a `title`, `description` and `content`/`url`.

If this option is a string then it will be requested as a URL that should produce a JSON output in the same format the option accepts.

Each item in the list can either be inline using a `content` property or a whole file using the `url` property.

#### Example using templates object

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'template',
  menubar: 'insert',
  toolbar: 'template',
  templates: [
    {title: 'Some title 1', description: 'Some desc 1', content: 'My content'},
    {title: 'Some title 2', description: 'Some desc 2', url: 'development.html'}
  ]
});
```

#### Example using templates URL

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'template',
  menubar: 'insert',
  toolbar: 'template',
  templates: '/dir/templates.php'
});
```

#### Example JSON output of templates.php

```json
[
  {"title": "Some title 1", "description": "Some desc 1", "content": "My content"},
  {"title": "Some title 2", "description": "Some desc 2", "url": "development.html"}
]
```

