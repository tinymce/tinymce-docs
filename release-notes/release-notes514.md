---
layout: default
title: TinyMCE 5.1.4
title_nav: TinyMCE 5.1.4
description: Release notes for TinyMCE 5.1.4
keywords: releasenotes bugfixes
---

## Overview

{{site.productname}} 5.1.4 was released for {{site.enterpriseversion}} and {{site.cloudname}} on Wednesday, December 18<sup>th</sup>, 2019. These release notes provide an overview of the changes for {{site.productname}} 5.1.4, including:

- [General bug fixes](#generalbugfixes)
- [Security fixes](#securityfixes)

{{site.releasenotes_for_stable}}

## General bug fixes

{{site.productname}} 5.1.4 provides fixes for the following bugs:

- The dialog contents disappearing when clicking a checkbox for right-to-left languages.
- The `legacyoutput` plugin registering legacy formats after editor initialization, causing legacy content to be stripped on the initial load.
- The search and replace plugin not cycling through results when searching using special characters.

## Security fixes

{{site.productname}} 5.1.4 provides fixes for the following security issues:

- The `visualchars` plugin converting HTML-like text to DOM elements in certain cases.
- The Paste plugin not sanitizing content in some cases.
- HTML comments incorrectly being parsed in certain cases.

{% assign enterprise = true %}

{% include install/upgrading-info.md %}

{% assign enterprise = false %}