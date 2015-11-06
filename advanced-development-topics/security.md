---
layout: default
title: Security
---

coming soon.

## Q: Is TinyMCE protected against XSS vulnerabilities?

Protection against XSS attacks needs to be done on the server since if you can submit contents in a form using TinyMCE one could as easily disable all javascript and there for bypass TinyMCE filtering and still submit HTML code with insecure content. You need to properly filter the HTML input on the server using things like [HTMLPurifier](http://htmlpurifier.org/) etc.