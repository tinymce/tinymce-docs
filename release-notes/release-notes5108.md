---
layout: default
title: TinyMCE 5.10.8
title_nav: TinyMCE 5.10.8
description: Release notes for TinyMCE 5.10.8
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.10.8 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Thursday, October 19<sup>th</sup>, 2023. It includes {{site.productname}} 5.10.8. These release notes provide an overview of the changes for {{site.productname}} 5.10.8, including:

- [Security fixes](#securityfixes)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}


## Security fixes

{{site.productname}} 5.10.8 provides fixes for the following security issue:

### Specific HTML content caused mXSS when using undo/redo, the `getContent` API with the `format: 'raw'` option, the `resetContent` API, and the Autosave plugin
<!-- #TINY-10215 -->

A [mutation cross-site scripting](https://researchgate.net/publication/266654651_mXSS_attacks_Attacking_well-secured_web-applications_by_using_innerHTML_mutations) (mXSS) vulnerability was discovered in {{site.productname}}’s core undo and redo functionality.

When a carefully-crafted HTML snippet passes the XSS sanitization layer, it is manipulated as a string by internal trimming functions before being stored in the undo stack.

If the HTML snippet is restored from the undo stack, the combination of the string manipulation and reparative parsing by the [SaxParser API]({{site.baseurl}}/api/tinymce.html/tinymce.html.saxparser/) mutates the HTML maliciously, allowing an XSS payload to be executed.

This vulnerability also impacts these related TinyMCE APIs and plugins:

* [`tinymce.Editor.getContent({ format: 'raw' })`]({{site.baseurl}}/api/tinymce/tinymce.editor/#getcontent).
* [`tinymce.Editor.resetContent()`]({{site.baseurl}}/api/tinymce.editor/#resetcontent).
* [Autosave]({{site.baseurl}}/plugins/autosave/) open source plugin.

This vulnerability has been patched in TinyMCE 5.10.8 by ensuring HTML is trimmed using node-level manipulation instead of string manipulation.

[CVE-2023-45818](https://www.cve.org/CVERecord?id=CVE-2023-45818)

GHSA: [GitHub Advisories](https://github.com/tinymce/tinymce/security/advisories/GHSA-v65r-p3vv-jjfv).

> **NOTE**: Tiny Technologies would like to thank Masato Kinugawa of [Cure53](https://cure53.de/) for discovering this vulnerability.


### Notification messages containing HTML were not properly XSS sanitized before being displayed.
<!-- #TINY-10286 -->

A [cross-site scripting](https://owasp.org/www-community/attacks/xss/) (XSS) vulnerability was discovered in {{site.productname}}’s Notification Manager API. The vulnerability exploits {{site.productname}}’s unfiltered notification system, which is used in error handling. The conditions for this exploit requires carefully crafted malicious content to have been inserted into the editor and a notification to have been triggered.

When a notification was opened, the HTML within the text argument was displayed unfiltered in the notification. The vulnerability allowed arbitrary JavaScript execution when an notification presented in the {{site.productname}} UI for the current user. This issue could also be exploited by any integration which uses a {{site.productname}} notification to display unfiltered HTML content.

This vulnerability has been patched in {{site.productname}} 5.10.8 by ensuring that the HTML displayed in the notification is sanitized, preventing the exploit.

[CVE-2023-45819](https://www.cve.org/CVERecord?id=CVE-2023-45819)

GHSA: [GitHub Advisories](https://github.com/tinymce/tinymce/security/advisories/GHSA-hgqx-r2hp-jr38).

> **NOTE**: Tiny Technologies would like to thank [Phillp Sinnott](https://github.com/philipsinnott/) and [Mikko Rantalainen](https://github.com/mikkorantalainen) for discovering this vulnerability.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
