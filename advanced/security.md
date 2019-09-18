---
layout: default
title: Security
title_nav: Security
description_short: A statement on security.
description: A statement on security.
keywords: security xss scripting vulnerability hack hacker
---

## Q: Is TinyMCE protected against XSS vulnerabilities?

TinyMCE filters out some of the more common XSS content like scripts from the content since it is common that the editor is used in a single page application. For additional security, consider passing it through server-side filters like [HTMLPurifier](http://htmlpurifier.org/).

## Q: How do I setup Content Security Policy (CSP) with TinyMCE?

You can use TinyMCE with a [CSP](https://content-security-policy.com/) header, however, there are a few things that need to be enabled for the editor to function properly:

Here is a list of the directives that are required by TinyMCE and why they are required:

| Directives | Requirements |
|------------|--------------|
| script-src 'self' *.tiny.cloud;          | Scripts are sometimes loaded as script element with an src attribute.
| connect-src 'self' *.tiny.cloud;         | XMLHttpRequest are required by some services such as spellchecking.
| img-src 'self' *.tiny.cloud data: blob:; | Images within the editor are sometimes base64 encoded, blob URLs, or proxied through the cloud service.
| style-src 'self' 'unsafe-inline';        | Styles are used on dialogs and menus to position them relative to other elements.
| font-src 'self' *.tiny.cloud;            | Fonts are used for icons in the UI and is loaded from external files.

You can use this CSP header when served from the cloud:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self' *.tinymce.com *.tiny.cloud; connect-src 'self' *.tinymce.com *.tiny.cloud; img-src 'self' *.tinymce.com *.tiny.cloud data: blob:; style-src 'self' 'unsafe-inline' *.tinymce.com *.tiny.cloud; font-src 'self' *.tinymce.com *.tiny.cloud;" />
```

You can use this CSP header when served from a local domain excludes the *.tinymce.com domain:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; font-src 'self';" />
```
