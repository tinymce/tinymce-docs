---
layout: default
title: Supported Premium Versions and Platforms
title_nav: Supported Premium Versions<br/>&nbsp;&nbsp;&nbsp;&nbsp;and Platforms
description: Supported versions and platforms for TinyMCE and TinyMCE premium features.
keywords: support supported browser browsers windows osx linux ie11 chrome firefox safari mobile premium self-hosted selfhosted
---

{% include misc/supported_versions.md %}

{% include misc/browser_compatibility.md %}

{% include misc/mobile_platform_compatibility.md %}

Visit [{{site.productname}} mobile documentation]({{site.baseurl}}/mobile) for information on {{site.productname}} mobile setup and configuration.

## Supported Application Servers: Self-hosted Enterprise

The {{site.productname}} spell checking server-side component requires a Java Web Application Server that supports Servlet Implementation API 3.0.

### Java Development Kit

JDK 8

### Java (J2EE) Application Servers

* Eclipse Jetty 9.4 or later
* WebSphere Application Server (WAS) 8 or later
* Apache Tomcat:
    - 9 or later
    - 8.5.12+
    - 8.0.42+
    - 7.0.76+

### Operating Systems

* Windows Server 2008 SP2
* Red Hat Enterprise Linux v6
* Red Hat Enterprise Linux v5

### Minimum Hardware Requirements

* CPU:  Dual Core Processor ~ 2Ghz. For higher loads, a quad core or higher is recommended.
* RAM: 4 Gigabytes of RAM available for services

## Premium Plugin Support

### PowerPaste (Word Copy and Paste)

{{site.companynameformal}} tests and supports using the PowerPaste plugin for copying content from versions of Microsoft Word and Microsoft Excel:
* Covered by Microsoft Mainstream Support based on the [Microsoft Fixed Lifecycle Policy](https://support.microsoft.com/en-us/help/14085/fixed-lifecycle-policy).
* Provided by Microsoft Office 365.

#### PowerPaste Feature and Browser Support

PowerPaste (Word copy and paste) is supported on all the browsers supported by {{site.productname}} Enterprise. There is some variances of functionality for different browsers.

|                       | HTML Cleaning | Improved HTML Cleaning | Image Import  |
|-----------------------| :-----------: | :--------------------: | :-----------: |
| Internet Explorer 11  | {{site.tick}} | {{site.cross}}         | {{site.cross}}|
| Microsoft Edge Latest | {{site.tick}} | {{site.tick}}          | {{site.tick}} |
| Chrome Latest         | {{site.tick}} | {{site.tick}}          | {{site.tick}} |
| Firefox Latest        | {{site.tick}} | {{site.tick}}          | {{site.tick}} |
| Safari Latest         | {{site.tick}} | {{site.tick}}          | {{site.cross}}|

##### HTML Cleaning

On all browsers, PowerPaste provides basic HTML cleaning. For browsers where HTML5 support is not available, PowerPaste uses the browser DOM to import and clean HTML. This mechanism is the primary cleaning method on browsers where HTML5 clipboard APIs are not available. While the resulting content is clean HTML the direct conversion to a browser DOM can result in some loss of content structure and/or formatting information.

##### Improved HTML Cleaning

On browsers that support HTML5 APIs, PowerPaste is able to use improved HTML cleaning techniques.  Improved HTML cleaning uses the HTML5 clipboard APIs to access the clipboard directly. The original document structure and formatting (when importing formatting) is more likely to be preserved. Where available this approach gives the highest fidelity copy and paste from Microsoft Word to HTML.

##### Image Import

On browsers that support HTML5, PowerPaste is able to import images embedded in the content (e.g. from Microsoft Word) into the editor.  These images can then be uploaded via a HTTP post as required.

{% include misc/plugin_support_table.md %}
