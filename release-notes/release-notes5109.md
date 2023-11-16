---
layout: default
title: TinyMCE 5.10.9
title_nav: TinyMCE 5.10.9
description: Release notes for TinyMCE 5.10.9
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.10.9 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, November 15<sup>th</sup>, 2023. It includes {{site.productname}} 5.10.9. These release notes provide an overview of the changes for {{site.productname}} 5.10.9, including:

- [Security fixes](#securityfixes)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}


## Security fixes

{{site.productname}} 5.10.9 provides fixes for the following security issue:

### Special characters in unescaped text nodes can trigger mXSS when using TinyMCE undo/redo, getContentAPI, resetContentAPI, and Autosave plugin
<!-- #TINY-10305 -->

A [mutation cross-site scripting](https://researchgate.net/publication/266654651_mXSS_attacks_Attacking_well-secured_web-applications_by_using_innerHTML_mutations) (mXSS) vulnerability was discovered in {{site.productname}}’s core undo/redo functionality and other APIs and plugins. Text nodes within specific parents are not escaped upon serialization according to the [HTML standard](https://html.spec.whatwg.org/multipage/parsing.html#serialising-html-fragments). If such text nodes contain a special character reserved as an internal marker, they can be combined with other HTML patterns to form malicious snippets. These snippets pass the initial sanitization layer when the content is parsed into the editor body, but can trigger XSS when the special internal marker is removed from the content and re-parsed. Such mutations occur when serialized HTML content is processed before being stored in the undo stack, or when the following APIs and plugins are used:

This vulnerability also impacts these related TinyMCE APIs and plugins:

* [`tinymce.Editor.getContent({ format: 'raw' })`]({{site.baseurl}}/api/tinymce/tinymce.editor/#getcontent).
* [`tinymce.Editor.resetContent()`]({{site.baseurl}}/api/tinymce/tinymce.editor/#resetcontent).
* [Autosave]({{site.baseurl}}/plugins/autosave/) open source plugin.

This vulnerability has been patched in {{site.productname}} 5.10.9 by:

* ensuring that any unescaped text nodes which contain the special internal marker are emptied before removing the marker from the rest of the HTML, and;
* removing the special internal marker from content strings passed to `Editor.setContent`, `Editor.insertContent`, and `Editor.resetContent` APIs to prevent them from being loaded into the editor as user-provided content.

CVE: [CVE-2023-48219](https://www.cve.org/CVERecord?id=CVE-2023-48219).

GHSA: [GitHub Advisories](https://github.com/tinymce/tinymce/security/advisories/GHSA-v626-r774-j7f8).
> **NOTE**: Tiny Technologies would like to thank Masato Kinugawa of [Cure53](https://cure53.de/) for discovering this vulnerability.


{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
