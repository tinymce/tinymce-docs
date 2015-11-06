---
layout: default
title: Advanced Installation Options
description: Learn how to install TinyMCE via CDN, package managers, SDK, jQuery and custom builds.
---


So far we've been using the CDN version of TinyMCE and while it's the easiest way to instantiate the editor it may not always be the best way. In this section we will explain some of TinyMCE's advanced installation options, including package managers, downloading the SDK and the custom build option.



## CDN Installation

The easiest way to get started is to use our CDN.

### Step 1: Include the TinyMCE script

Include this line of code in the `<head>` of your HTML page:

```html
<script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
```

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


### Step 3: Saving content with a `<form>` POST

When the `<form>` is submitted the TinyMCE editor mimics the behavior of a normal HTML `<textarea>` during a form `post`. In your form handler you can process the content submitted as if it had come from a regular `<textarea>`.

And that's all there is to it!


### Additional information about using the CDN

There are a few things you need to consider when using the CDN version. If you wish to use any local plugins (like [MoxieManager](http://www.moxiemanager.com) for example) you need to load them using the new [`external_plugins`]({{ site.baseurl }}/editor-configuration-settings/integration-and-setup/#external_plugins) option.

Also, if you wish to use a custom language, you need to enter the location of the language file into the new [`language_url`]({{ site.baseurl }}/editor-configuration-settings/internationalization/#language_url) option.

For a list of versions supported by the CacheFly CDN, check this text document: [http://tinymce.cachefly.net/index.txt](http://tinymce.cachefly.net/index.txt)

While we're at it a big shout out to [Cachefly](http://www.cachefly.com/) who sponsors the CDN hosting of TinyMCE. If you haven't tried CacheFly now is the perfect time. Use promo code `TINYMCE` to get exclusive pay-as-you-go pricing. They also have a risk-free 2TB 14-day trial with no credit card required. Sign up at [www.cachefly.com](http://www.cachefly.com/).

In the next step you'll learn how to unleash TinyMCE's power by [working with plugins](../working-with-plugins/).



## Package Manager Installation

If you've already installed TinyMCE [learn how to add it to a page].


### NPM

```
npm install tinymce
```

In the next step you'll learn how to unleash TinyMCE's power by [working with plugins](../working-with-plugins/).

### Bower

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

In the next step you'll learn how to unleash TinyMCE's power by [working with plugins](../working-with-plugins/).

### Composer

If you're using Composer package manager, add the following to `composer.json`.

```
php composer.phar require "tinymce/tinymce" ">= 4"
```

In the next step you'll learn how to unleash TinyMCE's power by [working with plugins](../working-with-plugins/).

### NuGet

```
Install-Package TinyMCE
```

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

In the next step you'll learn how to unleash TinyMCE's power by [working with plugins](../working-with-plugins/).



## SDK / Download Installation

If you'd rather download and install the script manually, get the package from [TinyMCE Downloads]. Unzip the package and move the `"tinymce/js/tinymce"` directory into a web accessible location on your web server (for example, `localhost`).

To add the script, simply include this line of code in the `<head>` of your page:

```html
<script type="text/javascript" src="<your installation path>/tinymce/tinymce.min.js"></script>
```

In the next step you'll learn how to unleash TinyMCE's power by [working with plugins](../working-with-plugins/).



## jQuery

We have a jQuery plugin [available here] if you'd rather install TinyMCE using this method. As with the SDK option, unzip the package and move the `"tinymce/js/tinymce"` directory into a web accessible location on your web server (for example, `localhost`).

To add the script, simply include these lines of code in the `<head>` of your page:

```html
<script type="text/javascript" src="/<your installation path>/tinymce/tinymce.min.js"></script>
<script type="text/javascript" src="/<your installation path>/tinymce/jquery.tinymce.min.js"></script>
```

In the next step you'll learn how to unleash TinyMCE's power by [working with plugins](../working-with-plugins/).



## Custom Build Download

TinyMCE tries to be as flexible to your project's needs as possible. We have a customized package downloader [available here](http://www.tinymce.com/download/custom_package.php) where you can select the core, plugins, skins, themes and compression options you'd like to include in the download.

If you selected the standalone core option in your custom download follow the SDK install instructions; if the jQuery core option follow the jQuery instructions. Both in this section.

In the next step you'll learn how to unleash TinyMCE's power by [working with plugins](../working-with-plugins/).



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

### Step 3: Saving Content with a `<form>` `post`

When the `form` is submitted the TinyMCE editor mimics the behaviour of a normal HTML `<textarea>` during a form `post`. No additional configuration is required.



## Next Steps

In the next step you'll learn how to unleash TinyMCE's power by [working with plugins](../working-with-plugins/).
