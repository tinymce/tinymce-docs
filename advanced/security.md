---
layout: default
title: Security
title_nav: Security
description_short: A statement on security.
description: A statement on security.
keywords: security xss scripting vulnerability hack hacker
---

## Q: Is TinyMCE protected against XSS vulnerabilities?

Protection against XSS attacks needs to be done on the server since if you can submit contents in a form using TinyMCE one could as easily disable all JavaScript and there for bypass TinyMCE filtering and still submit HTML code with insecure content. You need to properly filter the HTML input on the server using things like [HTMLPurifier](http://htmlpurifier.org/) etc.

> This article is a work in progress. Please improve it by contributing.
