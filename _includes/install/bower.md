
```
bower install tinymce
```

If you'd like to install and build the source manually with Bower use these steps. This approach can be used when debugging or building custom plugins.

```
bower install tinymce-src=git://github.com/tinymce/tinymce
cd bower_components/tinymce-src
npm i
jake
```

# Adding TinyMCE to a Page

Adding TinyMCE to a page is as simple as initializing the script on a `<textarea>` as part of an HTML `<form>`. When the `<form>` is submitted the contents of the editor will be submitted as part of the `<form>` `post`.

Here's how to do it using the CDN option as an example.

## Step 1: Installation

Include this line of code in the `<head>` of your page:

```html
<script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
```

## Step 2: Initialize TinyMCE as Part of a Web Form

With the script included, initialize TinyMCE on any element (or elements) in your webpage.

Since TinyMCE lets you identify replaceable elements via a CSS3 selector all you need do is pass an object that contains a selector to `tinymce.init()`.

In this example, let's replace `<textarea id="mytextarea">` with a TinyMCE editor instance by passing the selector `'#mytextarea'` to `tinymce.init()`.

```html
<!DOCTYPE html>
<html>
<head>
  <script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
  <script type="text/javascript">
    tinymce.init({
      selector: "#mytextarea"
    });
  </script>
</head>

<body>
  <h1>TinyMCE Getting Started Guide</h1>
  <form method="post">
    <textarea id="mytextarea"></textarea>
  </form>
</body>
</html>
```

That's all there is to it!

## Step 3: Saving Content with a `<form>` `post`

When the `form` is submitted the TinyMCE editor mimics the behaviour of a normal HTML `<textarea>` during a form `post`. No additional configuration is required.
