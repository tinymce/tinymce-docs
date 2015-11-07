If you'd rather download and install the script manually, get the package from [TinyMCE Downloads](http://www.tinymce.com/download). Unzip the package and move the `"tinymce/js/tinymce"` directory into a web accessible location on your web server (for example, `localhost`).

To add the script, simply include this line of code in the `<head>` of your page:

### Step 1: Include the TinyMCE script

Include this line of code in the `<head>` of your HTML page:

```html
<script type="text/javascript" src="<path/to/tinymce/tinymce.min.js"></script>
```

> Tip: we give you a complete html snippet in Step 2.

### Step 2: Initialize TinyMCE as part of a web form

With the script included, initialize TinyMCE on any element (or elements) in your web page.

Since TinyMCE lets you identify replaceable elements via a CSS selector, all you need do is pass an object that contains a `selector` to `tinymce.init()`.

In this example, let's replace `<textarea id="mytextarea">` with a TinyMCE editor instance by passing the selector `'#mytextarea'` to `tinymce.init()`.

```html
<!DOCTYPE html>
<html>
<head>
  <script src="/path/to/tinymce/tinymce.min.js"></script>
  <script type="text/javascript">
    tinymce.init({
      selector: "#mytextarea"
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

And that's all there is to it!

### Step 3: Saving content with a `<form>` POST

When the `<form>` is submitted the TinyMCE editor mimics the behavior of a normal HTML `<textarea>` during the `post`. In your form handler you can process the content submitted as if it had come from a regular `<textarea>`.

> In the next step you'll learn how to unleash TinyMCE's power by [working with plugins](../working-with-plugins/).
