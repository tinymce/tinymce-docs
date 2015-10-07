---
layout: default
title: URL
---

These settings affect the way URLs are handled by the editor.

## convert_urls

This option enables you to control whether TinyMCE is to be clever and restore URLs to their original values. URLs are automatically converted (messed up) by default because the built-in browser logic works this way. There is no way to get the real URL unless you store it away. If you set this option to false it will try to keep these URLs intact. This option is set to true by default, which means URLs will be forced to be either absolute or relative depending on the state of [relative_urls](#relative_urls).

Example of usage of the convert_urls option:

```js
tinymce.init({
        ...
        convert_urls: false
});
```

## relative_urls

If this option is set to true, all URLs returned from the MCFileManager will be relative from the specified [document_base_url](#document_base_url). If it's set to false all URLs will be converted to absolute URLs. This option is set to true by default.

Example of usage of the relative_urls option:

```js
tinymce.init({
        ...
        relative_urls: false
});
```

## remove_script_host

If this option is enabled the protocol and host part of the URLs returned from the MCFileManager will be removed. This option is only used if the [relative_urls](#relative_urls) option is set to false. This option is set to true by default.

If disabled, URLs will be returned in this format: `"http://www.example.com/somedir/somefile.htm"` instead of the default format: "/somedir/somefile.htm".

Example of usage of the remove_script_host option:

```js
tinymce.init({
        ...
        remove_script_host: false
});
```

## document_base_url

This option specifies the base URL for all relative URLs in the document. The default value is the directory of the current document. If a value is provided, it must specify a directory (not a document) and must end with a "/". This option also interacts with the [relative_urls](#), [remove_script_host](#), and [convert_urls](#) options to determine whether TinyMCE returns relative or absolute URLs. The FAQ contains a thorough [description](#) and an [example page](#) of working with relative/absolute URLs.

Example of usage of the document_base_url option:

```js
tinymce.init({
        ...
        document_base_url: "http://www.site.com/path1/"
});
```

## allow_script_urls

Enabling this option will allow javascript: urls in links and images. This is disabled by default for security purposes so scripts can't be injected by pasting contents from one site to another. If you still wan't to enable this option just set it to true.

Example

```js
tinymce.init({
    ...
    allow_script_urls: true
});
```
