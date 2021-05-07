---
layout: default
title: document_base_url
---

This option specifies the base URL for all relative URLs in the document. The default value is the directory of the current document. If a value is provided, it must specify a directory (not a document) and must end with a "/". This option also interacts with the [relative_urls](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@relative_urls/), [remove_script_host](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@remove_script_host/), and [convert_urls](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@convert_urls/) options to determine whether TinyMCE returns relative or absolute URLs. The FAQ contains a thorough [description](/extras/TinyMCE3x@TinyMCE_FAQ/) and an [example page](https://www.tiny.cloud/docs/demo/full-featured/) of working with relative/absolute URLs.

Changed in 3.0: This may affect how other paths are interpreted, such as calls to tinyMCE.windowManager.open, so you may want to use absolute paths. The following configuration settings also appear to be affected by the document_base_url setting:

*   [content_css](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@content_css/)
*   [external_link_list_url](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@external_link_list_url/)
*   [external_image_list_url](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@external_image_list_url/)

## Example of usage of the document_base_url option:

```js
tinyMCE.init({
  document_base_url : "http://www.site.com/path1/"
});
```
