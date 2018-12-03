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

|   | [PowerPaste]({{ site.baseurl }}/plugins/powerpaste/) | [Spell Checker]({{ site.baseurl }}/plugins/tinymcespellchecker/) | [Accessibility Checker]({{ site.baseurl }}/plugins/a11ychecker/) | Mentions | [Advanced Code Editor]({{ site.baseurl }}/plugins/advcode/) | MoxieManager<br/>(SDK ONLY) | [Enhanced Media Embed]({{ site.baseurl }}/plugins/mediaembed/) | [Link Checker]({{ site.baseurl }}/plugins/linkchecker/) |
|  ------ | :------: | :------: | :------: | ------ | :------: | :------: | :------: | :------: |
|  5 | Y | Y | Y | Y | Y | Y | Y | Y |
|  4 | Y | Y | Y | Y | Y | Y | N | N |
|   |  |  |  |  |  |  |  |  |

*N1* - For this combination of TinyMCE and Spellchecking, the [spellchecker_dialog mode]({{ site.baseurl }}/plugins/tinymcespellchecker/#spellchecker_dialog) is unavailable.
