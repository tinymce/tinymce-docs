---
layout: default
title: Version Compatibility Reference
description_short: Matrix of compatibility between TinyMCE editor versions and premium plugins.
description: Premium plugins compatibility with TinyMCE editor versions.
keywords: tinymce cloud script textarea apiKey
---

Specific versions of TinyMCE are compatible with premium plugins.

Use the following matrix in conjunction with the optional parameters for specifying editor version and [plugin version]({{ site.baseurl }}/cloud-deployment-guide/editor-plugin-version) to ensure compatibility.

> Important: Ensure the plugins are supported in your editor version when deploying [premium plugins *only* via Tiny Cloud]({{ site.baseurl }}/cloud-deployment-guide/features-only)

| Plugins | TinyMCE 4.x | TinyMCE 5.x |
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
| MoxieManager<br/>(SDK ONLY) | Y | Y |

*N1* - For this combination of TinyMCE and Spellchecking, the [spellchecker_dialog mode]({{ site.baseurl }}/plugins/tinymcespellchecker/#spellchecker_dialog) is unavailable.
