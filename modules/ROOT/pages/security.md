# Security guide
:title_nav: Security guide
:description_short: Security information for TinyMCE.
:description: Information on reporting security issues, what TinyMCE does to protect users, and what you can do to protect your users.
:keywords: security xss scripting vulnerability hack hacker csp mitigation protection protect

> **Note**: The following is _general_ security advice that may be relevant to a website or application using {{site.productname}}.

## Overview

- [Reporting TinyMCE security issues](#reportingtinymcesecurityissues)
- [What we do to maintain security for TinyMCE](#whatwedotomaintainsecurityfortinymce)

  - [Scripts and XSS vulnerabilities](#scriptsandxssvulnerabilities)
  - [Keeping dependencies up-to-date](#keepingdependenciesup-to-date)
- [Configuring Content Security Policy (CSP) for TinyMCE](#configuringcontentsecuritypolicycspfortinymce)
- [General security risks for user input elements](#generalsecurityrisksforuserinputelements)

  - [Cross-Site Scripting (XSS)](#cross-sitescriptingxss)
  - [Injection](#injection)
  - [Insecure Transmission and Storage of data](#insecuretransmissionandstorageofdata)
  - [Broken Authentication and Session Management](#brokenauthenticationandsessionmanagement)
  - [Using Components with Known Vulnerabilities](#usingcomponentswithknownvulnerabilities)
  - [Further security information](#furthersecurityinformation)

## Reporting TinyMCE security issues

{{site.companyname}} values the work of security researchers in improving the security of technology products worldwide. We welcome researchers who wish to responsibly disclose vulnerabilities in our products or systems. Note that we do not offer any “bug bounty” program or any form of payment for disclosed vulnerabilities. If you would like to report a vulnerability, please email `infosec@tiny.cloud`.

## What we do to maintain security for TinyMCE

To protect {{site.productname}} users, {{site.companyname}}:

- Patches Cross-Site Scripting (XSS) vulnerabilities,
- Keeps {{site.productname}} dependencies up to date, and
- Provides information about how to configure a Content Security Policy that works with {{site.productname}}.

### Scripts and XSS vulnerabilities

{{site.productname}} filters content such as scripts from the editor content, however, client-side applications can be by-passed by attackers. {{site.companyname}} recommends processing received editor content through server-side filters.

SVGs (Scalable Vector Graphics) are not supported in {{site.productname}} to protect our users and their end-users. SVGs can be used to perform both client-side and server-side attacks.

From the 1st of January 2020, Security Advisories for patched XSS vulnerabilities will be published on the [{{site.productname}} GitHub repository Security page](https://github.com/tinymce/tinymce/security/advisories?state=published).

### Keeping dependencies up-to-date

To protect our users, {{site.companyname}} ensures that the TinyMCE dependencies are updated before the next version (major or minor) is released.

{% include misc/general-csp.md %}

## General security risks for user input elements

The following security risks are not {{site.productname}} specific, but are the main security risks associated with websites or applications which allow user inputs. Protecting your services and users from these risks requires server-side handling. Note that attackers will likely bypass any editor and attack the server directly, rather than use the text editor as a vector.

For information on mitigating these risks, see the provided links in each section.

### Cross-Site Scripting (XSS)

Cross-Site Scripting (XSS) involves using website or application inputs to inject malicious, client-side code. This code can then be used to attack your users.

Although {{site.productname}} filters content such as scripts from the editor content, precautions should be taken to protect your users, such as enabling a Content Security Policy (CSP) and server-side filtering.

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
