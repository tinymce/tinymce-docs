---
layout: default
title: Security
title_nav: Security
description_short: Security information for TinyMCE.
description: Information on reporting security issues, what TinyMCE does to protect users, and what you can do to protect your users.
keywords: security xss scripting vulnerability hack hacker csp mitigation protection protect
---

> **Note**: The following is _general_ security advice that may be relevant to website or application using {{site.productname}}.

## Overview

- [Reporting TinyMCE security issues](#reportingtinymcesecurityissues)
- [What we do to maintain TinyMCEs' security](#whatwedotomaintaintinymcessecurity)

  - [Scripts and XSS vulnerabilities](#scriptsandxssvulnerabilities)
  - [Keeping dependencies up-to-date](#keepingdependenciesup-to-date)
  - [Configuring Content Security Policy (CSP) for TinyMCE](#configuringcontentsecuritypolicycspfortinymce)
- [Potential security risks and mitigation measures](#potentialsecurityrisksandmitigationmeasures)

  - [Cross-Site Scripting (XSS)](#cross-sitescriptingxss)
  - [Injection](#injection)
  - [Insecure Transmission and Storage of data](#insecuretransmissionandstorageofdata)
  - [Broken Authentication and Session Management](#brokenauthenticationandsessionmanagement)
  - [Using Components with Known Vulnerabilities](#usingcomponentswithknownvulnerabilities)
  - [Further security information](#furthersecurityinformation)

## Reporting TinyMCE security issues

{{site.companyname}} values the work of security researchers in improving the security of technology products worldwide. We welcome researchers who wish to responsibly disclose vulnerabilities in our products or systems. Note that we do not offer any “bug bounty” program or any form of payment for disclosed vulnerabilities. If you would like to report a vulnerability, please email `infosec@tiny.cloud`.

## What we do to maintain TinyMCEs' security

To protect {{site.productname}}s' users, {{site.companyname}}:

- Patches Cross-Site Scripting (XSS) vulnerabilities,
- Keeps {{site.productname}}s' dependencies up to date, and
- Provides information how to configure a Content Security Policy that works with {{site.productname}}.

### Scripts and XSS vulnerabilities

{{site.productname}} filters out most Cross-Site Scripting (XSS) content such as scripts from the editor content. For additional security, {{site.companyname}} recommends passing the editor content through server-side filters such as [HTMLPurifier](http://htmlpurifier.org/).

### Keeping dependencies up-to-date

To protect our users, {{site.companyname}} ensures that TinyMCEs' dependencies are updated before the next version (major, minor, or patch) is released.

### Configuring Content Security Policy (CSP) for TinyMCE

{{site.productname}} can be used with a [CSP](https://content-security-policy.com/) header. When using a CSP, the following directives are **required** for {{site.productname}} to function:

| Directives                                                   | Requirements                                                                                                                 |
| ------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------- |
| `script-src 'self' _.tinymce.com _.tiny.cloud;`                | Scripts are sometimes loaded as script element with an src attribute.                                                        |
| `connect-src 'self' _.tinymce.com _.tiny.cloud blob:;`         | XMLHttpRequest are required by some services such as spellchecking and PowerPaste.                                           |
| `img-src 'self' _.tinymce.com _.tiny.cloud data: blob:;`       | Images within the editor are sometimes base64 encoded, blob URLs, or proxied through the {{site.cloudname}} service.         |
| `style-src 'self' 'unsafe-inline' _.tinymce.com _.tiny.cloud;` | Styles are used for inline formatting (such as underline, font colors, etc.) and the positioning of user interface elements. |
| `font-src 'self' _.tinymce.com _.tiny.cloud;`                  | Fonts are used for icons in the UI and is loaded from external files.                                                        |

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

The following security risks are not {{site.productname}} specific, but are the main security risks associated with websites or applications which allow user inputs. Protecting your services and users from these risks requires server-side handling. Note that attackers will likely bypass any editor and attack the server directly, rather than use the text editor as a vector.

For information on mitigating these risks, see the provided links in each section.

### Cross-Site Scripting (XSS)

Cross-Site Scripting (XSS) involves using website or application inputs to inject malicious, client-side code. This code can then be used to attack your users.

Although {{site.productname}} removes most XSS content, precautions should be taken to protect your users, such as enabling a Content Security Policy (CSP) as described in [Configuring Content Security Policy (CSP) for TinyMCE](#configuringcontentsecuritypolicycspfortinymce).

For information on Cross-Site Scripting and how to reduce the risk of an attack, see: [OWASP Top Ten 2017 --- Cross-Site Scripting (XSS)](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A7-Cross-Site_Scripting_(XSS)).

### Injection

Injection attacks involve attackers using website or application inputs to run server-side code, such as SQL, NoSQL, or LDAP scripts.

If user inputs are not properly sanitized server-side, host devices and user data can be compromised.

For information on Injection-related security issues and how to reduce the risk of an attack, see: [OWASP Top Ten 2017 --- Injection](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A1-Injection).

### Insecure Transmission and Storage of data

The transmission or storage of data without strong cryptographic protection leaves this content exposed to attackers.

Loading insecure content into the editor, or submitting content from the editor over an insecure connection exposes the user and the host server to attack.

For information on Sensitive Data Exposure issues and how to reduce the risk of an attack, see: [OWASP Top Ten 2017 --- Sensitive Data Exposure](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A3-Sensitive_Data_Exposure).

### Broken Authentication and Session Management

Broken or incorrectly implemented authentication and session management exposes both user data and the server to attackers, allowing them to impersonate users, including administrators.

Broken Authentication or session management may allow attackers to change or submit data through the editor, or any input field, as the compromised user account.

For information on Broken Authentication issues and how to reduce the risk of an attack, see: [OWASP Top Ten 2017 --- Broken Authentication](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A2-Broken_Authentication).

### Using Components with Known Vulnerabilities

Using outdated components on your website or application allows attackers to exploit known vulnerabilities.

{{site.productname}} is patched when vulnerabilities are discovered. Keeping {{site.productname}} and your other dependencies up to date will protect you and your users from known vulnerabilities.

For information on issues related to using components with known issues and how to reduce the risk of an attack, see: [OWASP Top Ten 2017 --- Using Components with Known Vulnerabilities](https://owasp.org/www-project-top-ten/OWASP_Top_Ten_2017/Top_10-2017_A9-Using_Components_with_Known_Vulnerabilities.html).

### Further security information

For general security advice about securing your website or application, visit the [Open Web Application Security Project (OWASP)](https://owasp.org/).
