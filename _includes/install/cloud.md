### Step 1: Include the TinyMCE script

Include this line of code in the `<head>` of your HTML page:

```html
<script src="{{ site.cdnurl }}"></script>
```

### Step 2: Initialize TinyMCE as part of a web form

With the script included, initialize TinyMCE on any element (or elements) in your web page.

Since TinyMCE lets you identify replaceable elements via a CSS selector, all you need do is pass an object that contains a `selector` to `tinymce.init()`.

In this example, let's replace `<textarea id='mytextarea'>` with a TinyMCE editor instance by passing the selector `'#mytextarea'` to `tinymce.init()`.

```html
<!DOCTYPE html>
<html>
<head>
  <script src="{{ site.cdnurl }}"></script>
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

### Additional information about using TinyMCE Cloud

There are a few things you need to consider when using TinyMCE Cloud. If you wish to use any local plugins (like [MoxieManager](http://www.moxiemanager.com) for example) you need to load them using the new [`external_plugins`]({{ site.baseurl }}/configure/integration-and-setup/#external_plugins) option.

Also, if you wish to use a custom language, you need to enter the location of the language file into the new [`language_url`]({{ site.baseurl }}/configure/localization/#language_url) option.

You may also want to select a specific version of the editor from TinyMCE Cloud and you should head on over to [Specify Editor & Plugin Versions]({{site.baseurl}}/cloud-deployment-guide/editor-plugin-version) for details on that.

> If you have decided to use TinyMCE Cloud, please move on to the next step [working with plugins](../work-with-plugins/) where you'll start customizing TinyMCE. If you'd like to learn about other install options please keep reading.
