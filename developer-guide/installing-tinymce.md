---
layout: default
title: Install
css: foo.css
---

# Installing TinyMCE

If you've already installed TinyMCE you can skip these installation steps and move on to configuring the editor.

Otherwise, the [Configuration Quick Start](../configuration-quick-start/) is a great place to learn about basic editor configuration. When you're ready to deep dive into advanced configuration options you'll find the [Configuration Reference](../configuration-reference/) and [Plugin & Toolbar/Menu Control](../plugin-toolbar-menu-controls/) resources extremely helpful.



## CDN Installation

<<<<<<< HEAD:developer-guide/install.md
{% include install/cdn.md %}
=======
The easiest way to get started is to use our CDN.


### Step 1: Include the TinyMCE Script

Include this line of code in the `<head>` of your page:

```html
<script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
```

### Step 2: Initialize TinyMCE as Part of a Web Form

With the script included, initialize TinyMCE on any element (or elements) in your web page.

Since TinyMCE lets you identify replaceable elements via a CSS selector all you need do is pass a configuration object that contains a selector to `tinymce.init()`.

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

### Step 3: Saving Content with a `<form>` `post`

When the `form` is submitted the TinyMCE editor mimics the behavior of a normal HTML `<textarea>` during a form `post`. No additional configuration is required.

And that's all there is to it!


#### Additional information about using the CDN

There are a few things you need to consider when using the CDN version. If you wish to use any local plugins (like [MoxieManager](http://www.moxiemanager.com) for example) you need to load them using the new [`external_plugins`](http://www.tinymce.com/wiki.php/Configuration:external_plugins) option.

Also, if you wish to use a custom language, you need to enter the location of the language file into the new [`language_url`](http://www.tinymce.com/wiki.php/Configuration:language_url) option.

For a list of versions supported by the CacheFly CDN, check this text document: [http://tinymce.cachefly.net/index.txt](http://tinymce.cachefly.net/index.txt)

While we're at it a big shout out to [Cachefly](http://www.cachefly.com/) who sponsors the CDN hosting of TinyMCE. If you haven't tried CacheFly now is the perfect time. Use promo code `TINYMCE` to get exclusive pay-as-you-go pricing. They also have a risk-free 2TB 14-day trial with no credit card required. Sign up at [www.cachefly.com](http://www.cachefly.com/).

For next steps see the [Developer Guide](../developer-guide/).


>>>>>>> v4.2.6-dev:developer-guide/installing-tinymce.md

## Package Manager Installation

We have several package manager install options available. Chose your flavor.

### NPM

{% include install/npm.md %}

### Bower

{% include install/bower.md %}

### Composer

{% include install/composer.md %}

### NuGet

{% include install/nuget.md %}

### Use of local plugins/language packs when installing via Package Managers

When using package managers you might have local TinyMCE addons in your project such as plugins or language packs. Load these from your project location rather than from inside the package using these config options:

```js
tinymce.init({
  language: "sv",
  language_url: "/js/sv.js",
  plugins: "myplugin",
  external_plugins: {
    "myplugin": "/js/myplugin/plugin.min.js"
  }
});
```

For next steps see the [Developer Guide](../developer-guide/).



## SDK / Download Installation

{% include install/sdk.md %}

For next steps see the [Developer Guide](../developer-guide/).



## jQuery

{% include install/jquery.md %}

For next steps see the [Developer Guide](../developer-guide/).



## Custom Build Download

{% include install/custom.md %}

For next steps see the [Developer Guide](../developer-guide/).



<<<<<<< HEAD:developer-guide/install.md
=======
## Adding TinyMCE to a Page

Adding TinyMCE to a page is as simple as initializing the script on a `<textarea>` as part of an HTML `<form>`. When the `<form>` is submitted the contents of the editor will be submitted as part of the `<form>` `post`.

Here's how to do it using the CDN option as an example.

### Step 1: Installation

Include this line of code in the `<head>` of your page:

```html
<script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
```

### Step 2: Initialize TinyMCE as Part of a Web Form

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



>>>>>>> v4.2.6-dev:developer-guide/installing-tinymce.md
# Next Steps

At this point, you've seen how to create TinyMCE instances on a page using `tinymce.init()`, and you've seen how to retrieve content from TinyMCE as part of an HTML `<form>` `post`.

There's way more under the hood if you're feeling adventurous: return to the [Developer Guide](../) to explore TinyMCE's advanced configuration settings in the [Configuration Reference](../configuration-reference/) and also learn more about [Plugin & Toolbar/Menu Control](../plugin-toolbar-menu-controls/) options.
