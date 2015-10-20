---
layout: default
title: Quick Start
---

This Quick Start will help you download TinyMCE.

If you're familiar with this step move on to the [Developer Guide](../developer-guide/), which will help you [install](../developer-guide/install/), [configure](../developer-guide/configure/) and [customize](../developer-guide/customize/) your editor. You'll also find information on [Plugin & Toolbar/Menu Control](../developer-guide/customize/plugins/) options.

# CDN

The easiest way to get started is to use our CDN. Simply include this line of code in the `<head>` of your page:

```html
<script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
```

For next steps see the [Developer Guide](../developer-guide/).

A big shout out to [Cachefly](http://www.cachefly.com/) who sponsors the CDN hosting of TinyMCE. Thank you!



# Package Managers

We have several package manager install options available.

## NPM

```
npm install tinymce
```

## Bower

```
bower install tinymce
```

## Composer

If you're using Composer package manager, add the following to `composer.json`.

```
php composer.phar require "tinymce/tinymce" ">= 4"
```

## NuGet

```
Install-Package TinyMCE
```

For next steps see the [Developer Guide](../developer-guide/).



# SDK

If you'd rather download and install the script manually, get the package from [TinyMCE Downloads](http://tinymce.com/download). Unzip the package and move the `"tinymce/js/tinymce"` directory into a web accessible location on your web server (for example, `localhost`).

To add the script, simply include this line of code in the `<head>` of your page:

```html
<script type="text/javascript" src="<your installation path>/tinymce/tinymce.min.js"></script>
```

For next steps see the [Developer Guide](../developer-guide/).



## jQuery

We have a jQuery plugin available from our [downloads page](http://tinymce.com/download) if you'd rather install TinyMCE using this method. As with the SDK option, unzip the package and move the `"tinymce/js/tinymce"` directory into a web accessible location on your web server (for example, `localhost`).

To add the script, simply include these lines of code in the `<head>` of your page:

```html
<script type="text/javascript" src="/<your installation path>/tinymce/tinymce.min.js"></script>
<script type="text/javascript" src="/<your installation path>/tinymce/jquery.tinymce.min.js"></script>
```

For next steps see the [Developer Guide](../developer-guide/).



## Custom Build Download

TinyMCE tries to be as flexible to your project's needs as possible. We have a customized package downloader [available here](http://www.tinymce.com/download/custom_package.php) where you can select the core, plugins, skins, themes and compression options you'd like to include in the download.

If you selected the standalone core option in your custom download follow the [SDK](#SDK) install instructions; if the jQuery core option follow the [jQuery](#jQuery) instructions.

For next steps see the [Developer Guide](../developer-guide/).



# Next Steps

* It's now time to move on to the [Developer Guide](../developer-guide) where you'll find detailed [installation](../developer-guide/install/), [configuration](../developer-guide/configure/) and [customization](../developer-guide/customize/) guides.
