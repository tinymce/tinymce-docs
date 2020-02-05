---
layout: default
title: Security
title_nav: Security
description_short: Security information for TinyMCE.
description: Information on reporting security issues, what TinyMCE does to protect users, and what you can do to protect users.
keywords: security xss scripting vulnerability hack hacker csp mitigation protection protect
---

## Overview

## Reporting TinyMCE security issues

{{site.companyname}} values the work of security researchers in improving the security of technology products worldwide. We welcome researchers who wish to responsibly disclose vulnerabilities in our products or systems. Note that we do not offer any “bug bounty” program or any form of payment for disclosed vulnerabilities. If you would like to report a vulnerability, please email `infosec@tiny.cloud`.

## What we do to make TinyMCE safeish

### Keeping dependencies up-to-date

we ensure that TinyMCEs dependancies that contain security issues are updated before the next version (major, minor, or patch) is shipped.

### Scripts and XSS vulnerabilities

{{site.productname}} filters out most XSS content like scripts from the content since it is common that the editor is used in a single page application. For additional security, consider passing it through server-side filters like [HTMLPurifier](http://htmlpurifier.org/).

### Configuring Content Security Policy (CSP) for TinyMCE

{{site.productname}} can be used with a [CSP](https://content-security-policy.com/) header. When using a CSP, the following directives are **required** for {{site.productname}} to function:

| Directives                                                   | Requirements                                                                                                                 |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| script-src 'self' _.tinymce.com _.tiny.cloud;                | Scripts are sometimes loaded as script element with an src attribute.                                                        |
| connect-src 'self' _.tinymce.com _.tiny.cloud blob:;         | XMLHttpRequest are required by some services such as spellchecking and PowerPaste.                                           |
| img-src 'self' _.tinymce.com _.tiny.cloud data: blob:;       | Images within the editor are sometimes base64 encoded, blob URLs, or proxied through the {{site.cloudname}} service.         |
| style-src 'self' 'unsafe-inline' _.tinymce.com _.tiny.cloud; | Styles are used for inline formatting (such as underline, font colors, etc.) and the positioning of user interface elements. |
| font-src 'self' _.tinymce.com _.tiny.cloud;                  | Fonts are used for icons in the UI and is loaded from external files.                                                        |

> **Important**: These directives will prevent all content loading from external sources.
> To allow content from specific sources, add the source domains to the relevant directives. For example, to allow YouTube videos:
>
> ```html
> media-src 'self' *.youtube.com;
> ```
>
> To allow content from any source, use the (\*) wildcard. Allowing all sources (using \*) negates the security policy for the source type. For example:
>
> ```html
> media-src *;
> ```
>
> For information on Content Security Policies, see: [MDN Web Docs - Content Security Policy (CSP)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP).

When using the {{site.cloudname}}, use this CSP header :

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'none'; script-src 'self' *.tinymce.com *.tiny.cloud; connect-src 'self' *.tinymce.com *.tiny.cloud blob:; img-src 'self' *.tinymce.com *.tiny.cloud data: blob:; style-src 'self' 'unsafe-inline' *.tinymce.com *.tiny.cloud; font-src 'self' *.tinymce.com *.tiny.cloud;"
/>
```

When self-hosting {{site.productname}} from a local domain, use this CSP header (excludes the \*.tiny.cloud domain):

```html
<meta
  http-equiv="Content-Security-Policy"
  content="default-src 'none'; script-src 'self'; connect-src 'self' blob:; img-src 'self' data: blob:; style-src 'self' 'unsafe-inline'; font-src 'self';"
/>
```

## Potential security risks and mitigation measures

Server-side handling

### Using Components with Known Vulnerabilities

[what is the security risk][how does it work]

[Go to OWASP page for more information, including mitigation measures]

For information on issues related to components with known issues, see: [OWASP Top Ten 2017 --- Using Components with Known Vulnerabilities](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities.html).

### Cross Site Scripting (XSS)

For information on Cross-Site Scripting, see: [OWASP Top Ten 2017 --- Cross-Site Scripting (XSS)](<https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A7-Cross-Site_Scripting_(XSS)>).

### Injection

For information on Injection-related security issues, see: [OWASP Top Ten 2017 --- Injection](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A1-Injection).

### Broken Authentication and Session Management

For information on Broken Authentication issues, see: [OWASP Top Ten 2017 --- Broken Authentication](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A2-Broken_Authentication).

### Failure to Restrict URL Access

For information on Broken Access Control issues, see: [OWASP Top Ten 2017 --- Broken Access Control](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A5-Broken_Access_Control).

### Security Misconfiguration

For information on Security Misconfiguration issues, see: [OWASP Top Ten 2017 --- Security Misconfiguration](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A6-Security_Misconfiguration).

### Insecure Cryptographic Storage

For information on Sensitive Data Exposure issues, see: [OWASP Top Ten 2017 --- Sensitive Data Exposure](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A3-Sensitive_Data_Exposure).
