---
layout: default
title: Version Compatibility Reference
description_short: Matrix of compatibility between TinyMCE editor versions and premium plugins.
description: Premium plugins compatibility with TinyMCE editor versions.
keywords: tinymce cloud script textarea apiKey
---

Some of our premium plugins are only compatible with certain versions versions of TinyMCE.

If you’re deploying [both the TinyMCE editor and premium plugins via the Cloud]({{ site.baseurl }}/get-started-cloud/editor-and-features), use the following matrix in conjunction with the optional parameters for specifying editor version and plugin version ({{ site.baseurl }}/get-started-cloud/editor-plugin-version) to ensure your editor and plugins are compatible.

If you’re deploying [premium plugins *only* via the Cloud]({{ site.baseurl }}/get-started-cloud/features-only), you’ll need to ensure you’re either only loading plugins supported for your editor version, or that your editor is upgraded to the required release.

|   | PowerPaste | Spell Checker Pro | Accessibility Checker | Mentions | Advanced Code Editor | MoxieManager<br/>(SDK ONLY) | Link Checker | Enhanced Media Embed |
|  ------ | :------: | :------: | :------: | ------ | :------: | :------: | :------: | :------: |
|  4.5.2 | Y | Y | Y | Y | Y | Y | Y | Y |
|  4.4.3 | Y | Y | Y | Y | Y | Y | N | N |
|  4.3.13 | Y | Y | Y | Y | Y | Y | N | N |
|  4.2.8 | Y | N1 | N | N | N | Y | N | N |
|  4.1.10 | Y | N | N | N | N | Y | N | N |
|  4.0.28 | Y | N | N | N | N | Y | N | N |
|  3.5.8 | N | N | N | N | N | Y | N | N |
|   |  |  |  |  |  |  |  |  |

*N1* - For this combination of TinyMCE and Spellchecking, the [spellchecker_dialog mode]({{ site.baseurl }}/plugins/tinymcespellchecker/#spellchecker_dialog) is unavailable.
