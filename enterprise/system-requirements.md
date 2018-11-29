---
layout: default
title: System requirements
title_nav: System requirements
description: Consolidated system requirements for TinyMCE premium features.
keywords: support supported browser browsers windows osx linux ie8 chrome firefox safari
---

## Supported Browsers

[Go to this page]({{ site.baseurl }}/general-configuration-guide/system-requirements/) for information on which browsers are supported by TinyMCE.

## Word Copy/Paste

Word copy and paste is supported on all the browsers supported by TinyMCE Enterprise. There is some variances of functionality for different browsers. Please see the information below for more details.

### Feature Matrix and Browser Support


|                      | HTML Cleaning | Improved HTML Cleaning | Image Import |
|----------------------| :-------------: | :----------------------: | :------------: |
| Internet Explorer 8  | X |   |   |
| Internet Explorer 9  | X |   |   |
| Internet Explorer 10+| X | X | X |
| Chrome Current       | X | X | X |
| Firefox Current      | X | X | X |
| Safari 6.1+          | X | X | X |

#### HTML Cleaning

On all browsers PowerPaste provides basic HTML cleaning. For browsers where HTML5 support is not available PowerPaste uses the browser DOM to import and clean HTML. This mechanism is the primary cleaning method on browsers where HTML5 clipboard APIs are not available. While the resulting content is clean HTML the direct conversion to a browser DOM can result in some loss of content structure and/or formatting information.

#### Improved HTML Cleaning

On browsers that support HTML5 APIs PowerPaste is able to use improved HTML cleaning techniques.  Improved HTML cleaning uses HTML5 clipboard APIs to access the clipboard directly. It can perform more complex and intelligent cleaning of the HTML than the basic HTML cleaning approach.  This better preserves the original document structure and formatting (when importing formatting). Where available this approach gives the highest fidelity copy and paste possible from Microsoft Word and HTML.

#### Image Import

On browsers that support HTML5 PowerPaste is able to import images embedded in the content (e.g. from Microsoft Word) into the editor.  These images can then be uploaded via a HTTP post as required.


## Spell Checking

Spell checking is supported on all the browsers supported by TinyMCE Enterprise.  

### Internet Explorer 8 and 9 Limitations

Cross Origin Requests (CORS) are not supported in Internet Explorer 8 and 9. For spell checking to work, the ephox-spelling service must be located on the same domain as the TinyMCE client. The domain is considered to be the combination of the protocol (HTTP vs HTTPS), server name and the port as it appears in the browser's address bar.

Internet Explorer 8 will not highlight misspelt words as you type due to browser limitations. Misspelt words are highlighted after the current HTML node is changed (e.g. when the Enter key is pressed and the cursor enters a new paragraph).

### Supported Application Servers

The TinyMCE spell checking server-side component requires a Java Web Application Server that supports Servlet Implementation API 3.0.

##### Java Development Kit

JDK 7 update 55+

##### Java (J2EE) Application Servers

* Tomcat 7+
* Jetty 8+
* WebSphere Application Server (WAS) 8+

#### Operating Systems

* Windows Server 2008 SP2
* Red Hat Enterprise Linux v6
* Red Hat Enterprise Linux v5

#### Minimum Hardware Requirements

* CPU:  Dual Core Processor ~ 2Ghz. For higher loads, a quad core or higher is recommended.
* RAM: 4 Gigabytes of RAM available for services

### Supported TinyMCE versions

TinyMCE provides support for the following versions:

* TinyMCE 4.5
* TinyMCE 4.7

All commercially supported plugins are supported on these versions.

#### Need more?

Tiny is committed to broadening support for various application servers / platforms. If you have a requirement to support an application server that is not listed here, please contact support@tiny.cloud.
