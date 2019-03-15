```
Install-Package TinyMCE
```

### Step 1: Include the TinyMCE script

Include this line of code in the `<head>` of your HTML page:

```html
<script src="/path/to/tinymce.min.js"></script>
```

### Step 2: Initialize TinyMCE as part of a web form

With the script included, initialize TinyMCE on any element (or elements) in your web page.

Since TinyMCE lets you identify replaceable elements via a CSS selector, all you need do is pass an object that contains a `selector` to `tinymce.init()`.

In this example, let's replace `<textarea id='mytextarea'>` with a TinyMCE editor instance by passing the selector `'#mytextarea'` to `tinymce.init()`.

```html
<!DOCTYPE html>
<html>
<head>
  <script src="/path/to/tinymce.min.js"></script>
  <script type="text/javascript">
  tinymce.init({
    selector: '#mytextarea'
  });
  </script>
</head>

<body>
<h1>TinyMCE Quick Start Guide</h1>
  <form method="post">
    <textarea id="mytextarea">Hello, World!</textarea>
  </form>
</body>
</html>
```

### Step 3: Saving content with a form POST

When the `<form>` is submitted the TinyMCE editor mimics the behavior of a normal HTML `<textarea>` during the `post`. In your form handler you can process the content submitted as if it had come from a regular `<textarea>`.

#### Use of local plugins & language packs when installing via package managers

When using package managers you might have local TinyMCE add-ons in your project such as plugins or language packs. Load these from your project location rather than from inside the package using these configuration options:

```js
tinymce.init({
  selector: 'textarea',
  language: 'sv',
  language_url: '/js/sv.js',
  plugins: 'myplugin',
  external_plugins: {
    'myplugin': '/js/myplugin/plugin.min.js'
  }
});
```

> If you have decided to use this package manager, move on to the next step [working with plugins](https://www.tiny.cloud/docs-3x/api/work-with-plugins/), where you'll start customizing TinyMCE. If you'd like to learn about other install options please keep reading.
