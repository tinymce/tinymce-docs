---
layout: default
title: Use the GZIP Compressors
---

The [TinyMCE gzip compressors](http://www.tinymce.com/download/compressors.php) helps you to dynamically combine and compress the different parts of TinyMCE to reduce the loading time. These compressors are very easy to use as of 4.x just drop the script into the tinymce folder change the path to the script from `tinymce.min.js` to `tinymce.gzip.js` and it will compress for you automatically when you call `tinymce.init` to create editor instances.

#### Example using the tinymce.gzip.js

```html
<script src="/js/tinymce/tinymce.gzip.js"></script>
<script>
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
