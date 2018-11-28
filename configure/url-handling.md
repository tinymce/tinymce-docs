---
layout: default
title: URL handling options
title_nav: URL handling options
description: These settings affect the way URLs are handled by the editor.
keywords: url urls relative absolute domain document_base_url
---

## Q: How do I convert my URLs to relative, absolute, or absolute with domain?

### Relative URLs

This will convert all URLs within the same domain to relative URLs. The URLs will be relative from the [document_base_url](#document_base_url).

```
relative_urls : true,
document_base_url : "http://www.example.com/path1/"
```

Example: `http://www.example.com/path1/path2/file.htm` >> `path2/file.htm`

### Absolute URLs

This will convert all relative URLs to absolute URLs. The URLs will be absolute based on the [document_base_url].

```
relative_urls : false,
remove_script_host : true,
document_base_url : "http://www.example.com/path1/"
```

Example: path2/file.htm >> /path1/path2/file.htm

### Domain absolute URLs

This will convert all relative URLs to absolute URLs. The URLs will be absolute based on the [document_base_url] with domain.

```
relative_urls : false,
remove_script_host : false,
document_base_url : "http://www.example.com/path1/"
```

Example: path2/file.htm >> http://www.example.com/path1/path2/file.htm


{% include configuration/allow-script-urls.md %}
{% include configuration/convert-urls.md %}
{% include configuration/document-base-url.md %}
{% include configuration/relative-urls.md %}
{% include configuration/remove-script-host.md %}
{% include configuration/urlconverter-callback.md %}
{% include configuration/anchor-bottom.md %}
{% include configuration/anchor-top.md %}
