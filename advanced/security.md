---
layout: default
title: Security
title_nav: Security
description_short: A statement on security.
description: A statement on security.
keywords: security xss scripting vulnerability hack hacker
---

## Q: Is TinyMCE protected against XSS vulnerabilities?

TinyMCE filters out some of the more common XSS content like scripts etc. from the contents since it's relatively common that the editor is used in a single page application. However, if you want extra security, then we suggest passing it through server-side filters like [HTMLPurifier](http://htmlpurifier.org/).

## Q: How do I setup Content Security Policy (CSP) with tinymce?

You can use TinyMCE with a [CSP](https://content-security-policy.com/) header, but there are a few things that need to be enabled for the editor to function properly:

Here is a list of the directives that are required by TinyMCE and why they are required:

| Directives | Requirements |
|------------|--------------|
| script-src 'self' *.tinymce.com; | Scripts are sometimes loaded as script element with an src attribute.
| connect-src 'self' *.tinymce.com; | XMLHttpRequest are required by some services such as spellchecking.
| img-src 'self' *.tinymce.com data: blob:; | Images within the editor are sometimes base64 encoded or blob URLs or proxied through the cloud service.
| style-src 'self' 'unsafe-inline'; | Styles are used on dialogs/menus to position them relative to other elements.
| font-src 'self' *.tinymce.com; | Fonts are used for icons in the UI and is loaded from external files.

You can use this CSP header when served from the cloud:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self' *.tinymce.com; connect-src 'self' *.tinymce.com; img-src 'self' *.tinymce.com data: blob:; style-src 'self' 'unsafe-inline' *.tinymce.com; font-src 'self' *.tinymce.com;" />
```

You can use this CSP header when served from a local domain excludes the *.tinymce.com domain:

```html
<meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'self'; connect-src 'self'; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; font-src 'self';" />
```
