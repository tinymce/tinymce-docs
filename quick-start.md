---
layout: default
title: Quick Start
---

# CDN

The easiest way to get started is to use our CDN. Simply include this line of code in the `<head>` of your page:

```html
<script src="//tinymce.cachefly.net/4.2/tinymce.min.js"></script>
```

For next steps see the [Installation Guide].

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

For next steps see the [Installation Guide].



# SDK

If you'd rather download and install the script manually, get the package from [TinyMCE Downloads]. Unzip the package and move the `"tinymce/js/tinymce"` directory into a web accessible location on your web server (for example, `localhost`).

To add the script, simply include this line of code in the `<head>` of your page:

```html
<script type="text/javascript" src="<your installation path>/tinymce/tinymce.min.js"></script>
```

For next steps see the [Installation Guide].



## jQuery

We have a jQuery plugin [available here] if you'd rather install TinyMCE using this method. As with the SDK option, unzip the package and move the `"tinymce/js/tinymce"` directory into a web accessible location on your web server (for example, `localhost`).

To add the script, simply include these lines of code in the `<head>` of your page:

```html
<script type="text/javascript" src="/<your installation path>/tinymce/tinymce.min.js"></script>
<script type="text/javascript" src="/<your installation path>/tinymce/jquery.tinymce.min.js"></script>
```

For next steps see the [Installation Guide].



## Custom Build Download

TinyMCE tries to be as flexible to your project's needs as possible. We have a customized package downloader [available here](http://www.tinymce.com/download/custom_package.php) where you can select the core, plugins, skins, themes and compression options you'd like to include in the download.

If you selected the standalone core option in your custom download follow the [SDK](#SDK) install instructions; if the jQuery core option follow the [jQuery](#jQuery) instructions.

For next steps see the [Installation Guide].



# Next Steps

Read the [Installation Guide] where you'll find additional installation information plus examples of how to add TinyMCE to a web page.
