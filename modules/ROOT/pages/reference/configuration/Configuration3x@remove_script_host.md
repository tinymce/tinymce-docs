---
layout: default
title: remove_script_host
---

If this option is enabled the protocol and host part of the URLs returned from the MCFileManager will be removed. This option is only used if the [relative_urls](https://www.tiny.cloud/docs-3x/reference/configuration/Configuration3x@relative_urls/) option is set to false. This option is set to true by default.

If disabled, URLs will be returned in this format: `http://www.example.com/somedir/somefile.htm` instead of the default format: `/somedir/somefile.htm`.

## Example of usage of the remove_script_host option:

```js
tinyMCE.init({
  ...
  remove_script_host : false
});
```
