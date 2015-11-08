The easiest way to get started is to use our CDN.

### Step 1: Include the TinyMCE script

Include this line of code in the `<head>` of your HTML page:

```html
<script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
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
  <script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
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

> Note: if you're testing this locally, you will need to prepend `https://` to urls in the `script` tag. For example, `<script src="https://tinymce.cachefly.net/4.2/tinymce.min.js"></script>`.

### Step 3: Saving content with a form POST

When the `<form>` is submitted the TinyMCE editor mimics the behavior of a normal HTML `<textarea>` during the `post`. In your form handler you can process the content submitted as if it had come from a regular `<textarea>`.

### Additional information about using the CDN

There are a few things you need to consider when using the CDN version. If you wish to use any local plugins (like [MoxieManager](http://www.moxiemanager.com) for example) you need to load them using the new [`external_plugins`]({{ site.baseurl }}/editor-configuration-settings/integration-and-setup/#external_plugins) option.

Also, if you wish to use a custom language, you need to enter the location of the language file into the new [`language_url`]({{ site.baseurl }}/editor-configuration-settings/internationalization/#language_url) option.

For a list of versions supported by the CacheFly CDN, check this text document: [http://tinymce.cachefly.net/index.txt](http://tinymce.cachefly.net/index.txt)

While we're at it a big shout out to [Cachefly](http://www.cachefly.com/) who sponsors the CDN hosting of TinyMCE. If you haven't tried CacheFly now is the perfect time. Use promo code `TINYMCE` to get exclusive pay-as-you-go pricing. They also have a risk-free 2TB 14-day trial with no credit card required. Sign up at [www.cachefly.com](http://www.cachefly.com/).

> In the next step you'll learn how to unleash TinyMCE's power by [working with plugins](../working-with-plugins/).
