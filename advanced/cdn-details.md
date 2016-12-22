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

TinyMCE uses [semantic versioning](http://semver.org/), and by default the CDN uses the latest major version **and** all minor and patch versions. If you're not comfortable with this, you can decide which version you want to lock your CDN to by changing the CDN URL.

The script tag below will serve the latest minor and patch versions of the major version 4.

```html
<script src="//cdn.tinymce.com/4/tinymce.min.js"></script>
```

This is good because you will automatically get all minor **and** patch updates directly after they're released. But, this could be a problem if you are not prepared to fix small breaking changes on the (very) rare occasion they are included in minor versions.

For stability you can use the URL as shown in the script tag below. In this example, the CDN will be locked at the minor 4.5 version and will only serve patch releases, which will not contain breaking changes.

```html
<script src="//cdn.tinymce.com/4.5/tinymce.min.js"></script>
```
