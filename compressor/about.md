---
layout: default
title: About Compressors
title_nav: About Compressors
description_short: An introduction to TinyMCE 3.x compressors
description:
---

## TinyMCE Compressor

The TinyMCE compressor is a backend for reducing the overall download and initialization time for TinyMCE it consists of a JavaScript loader that requests a php/aspx/jsp/cfm page that compresses the specified resources using GZip. This method makes the overall download 75% smaller and the number of requests will also be reduced. The overall initialization time for TinyMCE will be reduced dramatically if you use this script for loading TinyMCE.

## What is GZip?

gzipis short for GNU zip, a GNU free software file compression program. It was created by Jean-loup Gailly and Mark Adler. Version 0.1 was first publicly released on October 31, 1992\. Version 1.0 followed in February 1993\. The HTTP/1.1 protocol allows for clients to optionally request the compression of content from the server.

## Server technologies

There are currently 4 different compressors written by MoxieCode based on various server technologies:

*   [PHP](https://www.tiny.cloud/docs-3x/compressor/Compressors3x@PHP/)
*   [ASPX / Microsoft .NET](https://www.tiny.cloud/docs-3x/compressor/Compressors3x@.NET/)
*   [JSP / Tomcat or compatible application servers](https://www.tiny.cloud/docs-3x/compressor/Compressors3x@JSP/)
*   [CFM / Coldfusion](https://www.tiny.cloud/docs-3x/compressor/Compressors3x@Coldfusion/)

They can be downloaded from our [Download page](https://www.tiny.cloud/get-tiny/).

## Third-party Compressors

There are also other compressors maintained by third-party developers:

*   [Django](http://code.google.com/p/django-tinymce/)
*   [Perl](http://hacks.traveljury.com/perl_compressor/)
*   [Ruby On Rails](http://tinymcehammer.lanalot.com/)
*   [Ruby](http://garbageburrito.com/home/tinymce_gzip_compressor_ruby_on_rails_plugin)
*   [Python (CGI)](http://code.google.com/p/tinymce-python-compressor/)

## Compressing into a static file

It's also possible to simply concatenate the necessary components and some boilerplate code into a single .js file. However you will always have to recreate this file if you want to use other TinyMCE plugins, or you upgrade TinyMCE. You will also probably want to configure your webserver to compress javascript files.
