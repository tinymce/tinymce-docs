---
layout: default
title: Use the GZIP Compressors
title_nav: Use the GZIP Compressors
description_short: A primer on spinning up gzip in TinyMCE.
description: A primer on spinning up gzip in TinyMCE.
keywords: gzip compressor js
---

The [TinyMCE gzip compressors](http://archive.tinymce.com/download/compressors.php) helps you to dynamically combine and compress the different parts of TinyMCE to reduce the loading time. These compressors are very easy to use as of 4.x: just drop the script into the `tinymce` folder, change the path to the script from `tinymce.min.js` to `tinymce.gzip.js` and it will automatically compress when you call `tinymce.init` to create editor instances.

#### Example using the tinymce.gzip.js

```html
<script src="/js/tinymce/tinymce.gzip.js"></script>
<script type="text/javascript">
tinymce.init({
    selector: 'textarea',
    plugins: 'image link'
});
</script>
```

#### Example using the jQuery plugin

```html
<script src="//ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
<script src="js/tinymce/jquery.tinymce.min.js"></script>
<script>
 $(function() {
     $('textarea.tinymce').tinymce({
         script_url: 'js/tinymce/tinymce.gzip.php',
         plugins: 'media,code'
     });
 });
</script>
```
