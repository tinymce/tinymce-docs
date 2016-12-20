---
layout: default
title: CDN Details
title_nav: CDN Details
description_short: Details on CDN usage and versioning.
description: Details on CDN usage and versioning.
keywords: CDN versioning
---

The quickest way to get started using TinyMCE on your website is by using the free CDN provided on the Download page linked above in the menu. Just copy the snippet and you are ready to go!

There is however one thing you might want to know if you plan on using the CDN, namely how the **versioning** works.

### Versioning

TinyMCE uses [semantic versioning](http://semver.org/), with the exception that we are a little bit more reckless and might sometimes do small breaking changes in minor versions. You can decide what version number you want to lock your CDN to by changing the CDN URL.

Using the script tag below will serve you the latest minor and patch versions of the major version 4.

```html
<script src="//cdn.tinymce.com/4/tinymce.min.js"></script>
```

This is good because you will automatically get all minor **and** patch releases directly after they have been released, but might also be a problem if you are not prepared to go in and fix small breaking changes on the rare occasion that they are included in minor versions.

For stability you can use the URL like in the script tag below which will instead lock the CDN at the minor 4.5 version and only serve patch releases, which will not contain any breaking changes.

```html
<script src="//cdn.tinymce.com/4.5/tinymce.min.js"></script>
```