---
layout: default
title: Security
---

TinyMCE in itself can not be insecure, it would be completely impossible for any exploit to exist in TinyMCE that would allow anyone to hack your blog/cms or similar by injecting XSS contents since it by it self can't modify the contents of the site. The server side scripts like PHP/.NET etc is whats updating your site.

It is important to understand that TinyMCE is PURE Javascript, and is only run in the context of the browser of the user who is using the page. Any exploit in the regards of XSS has to be plugged in the server side logic since that exploit would still be there if you disable javascript.

This also means you should not assume that TinyMCE is secure, if you implement TinyMCE on a public page where anyone has access and can public the content, you are bound to run into security issues. Most systems have TinyMCE behind some form of login but people within that system might still for example paste in code that has securty issues.

We would recommend that you use server side filtering of some sort, here is a few examples.

*   [htmLawed](http://www.bioinformatics.org/phplabware/internal_utilities/htmLawed/)
*   [HTMLPurifier](http://htmlpurifier.org/)
*   [Zend_Filter_Input](http://framework.zend.com/manual/en/zend.filter.input.html)

Using filtering you can achieve good security even for public content, such as a forum or wiki.
