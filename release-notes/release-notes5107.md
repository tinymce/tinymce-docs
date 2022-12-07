---
layout: default
title: TinyMCE 5.10.7
title_nav: TinyMCE v5.10.7
description: Release notes for TinyMCE 5.10.7
keywords: releasenotes bugfixes security advisory
---

## Overview

{{site.productname}} 5.10.7 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, December 7<sup>th</sup>, 2022. It includes {{site.productname}} 5.10.7. These release notes provide an overview of the changes for {{site.productname}} 5.10.7, including:

- [Security fixes](#securityfixes)
- [Upgrading to the latest version of TinyMCE 5](#upgradingtothelatestversionoftinymce5)

{{site.releasenotes_for_stable}}

## Security fixes

{{site.productname}} 5.10.7 provides a fix for the following security issue:

### A cross-site scripting (XSS) vulnerability was found in TinyMCE alerts

It was discovered that HTML being inserted into the DOM for presentation in TinyMCE alert and confirm dialogs was not being sanitized.

As a consequence, plugins that used the alert or confirm dialogs could be used to insert aribtrary JavaScript that would execute when an alert presented in the TinyMCE UI for the current user.

As of TinyMCE 5.10.7, HTML being provided to the DOM for presentation in TinyMCE alert and confirm dialogs is now sanitized before being added.

This sanitizing closes the XSS vulnerability.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}
