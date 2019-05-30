---
layout: default
title: Version compatibility reference
description_short: Matrix of compatibility between TinyMCE editor versions and premium plugins.
description: Premium plugins compatibility with TinyMCE editor versions.
keywords: tinymce cloud script textarea apiKey
---

Specific versions of TinyMCE are compatible with premium plugins.

Use the following matrix in conjunction with the optional parameters for specifying editor version and [plugin version]({{ site.baseurl }}/cloud-deployment-guide/editor-plugin-version) to ensure compatibility.

> Note: On June 4, 2019 the URL to access tiny.cloud changed from:
```js
<script src="https://cloud.tinymce.com/5/tinymce.min.js?apiKey=your_API_key"></script>
```
to:
```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
```
> Ensure the application uses latest script tag and substitute 'no-api-key' with your api key.


> Important: Ensure the plugins are supported in your editor version when deploying premium plugins only[^footnote] via [Tiny Cloud]({{ site.baseurl }}/cloud-deployment-guide/features-only).


| **Plugins** | **TinyMCE 4.x** | **TinyMCE 5.x** |
| :-----: | :---------: | :---------: |
| [Accessibility Checker]({{ site.baseurl }}/plugins/a11ychecker/) | Y | Y |
| [Advanced Code Editor]({{ site.baseurl }}/plugins/advcode/) | Y | Y |
| [Enhanced Media Embed]({{ site.baseurl }}/plugins/mediaembed/) | Y | Y |
| [Link Checker]({{ site.baseurl }}/plugins/linkchecker/) | Y | Y |
| [Mentions]({{site.baseurl}}/plugins/mentions) | Y | Y |
| [PowerPaste]({{ site.baseurl }}/plugins/powerpaste/) | Y | Y |
| [Spell Checker Pro]({{ site.baseurl }}/plugins/tinymcespellchecker/) | Y | Y |
| [Tiny Drive]({{site.baseurl}}/plugins/drive) | Y | Y |
| [Tiny Comments]({{site.baseurl}}/plugins/comments) | Y | Y |
| [Page Embed]({{site.baseurl}}/plugins/pageembed) | N | Y |
| [Permanent Pen]({{site.baseurl}}/plugins/permanentpen) | N | Y |
| [Format Painter]({{site.baseurl}}/plugins/formatpainter) | Y | Y |
| [MoxieManager]({{site.baseurl}}/plugins/moxiemanager)<br/>(SDK ONLY) | Y | Y |

[^footnote]: For this combination of TinyMCE and Spellchecking, the [spellchecker_dialog mode]({{ site.baseurl }}/plugins/tinymcespellchecker/#spellchecker_dialog) is unavailable.
