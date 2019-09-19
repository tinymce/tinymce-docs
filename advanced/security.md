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

TinyMCE can be used with a [CSP](https://content-security-policy.com/) header. The following directives are **required** for TinyMCE to function:

| Directives | Requirements |
|------------|--------------|
| script-src 'self' *.tinymce.com *.tiny.cloud;          | Scripts are sometimes loaded as script element with an src attribute.
| connect-src 'self' *.tinymce.com *.tiny.cloud blob:;         | XMLHttpRequest are required by some services such as spellchecking and PowerPaste.
| img-src 'self' *.tinymce.com *.tiny.cloud data: blob:; | Images within the editor are sometimes base64 encoded, blob URLs, or proxied through the cloud service.
| style-src 'self' 'unsafe-inline' *.tinymce.com *.tiny.cloud;        | Styles are used on dialogs and menus to position them relative to other elements.
| font-src 'self' *.tinymce.com *.tiny.cloud;            | Fonts are used for icons in the UI and is loaded from external files.

Use this CSP header when using the Tiny Cloud:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self' *.tinymce.com *.tiny.cloud; connect-src 'self' *.tinymce.com *.tiny.cloud blob:; img-src 'self' *.tinymce.com *.tiny.cloud data: blob:; style-src 'self' 'unsafe-inline' *.tinymce.com *.tiny.cloud; font-src 'self' *.tinymce.com *.tiny.cloud;" />
```

Use this CSP header when self-hosting TinyMCE from a local domain (excludes the *.tiny.cloud domain):

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self'; connect-src 'self' blob:; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; font-src 'self';" />
```
