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

* Eclipse Jetty:
    - 9.4+
* WebSphere Application Server (WAS) 8 or later
* Apache Tomcat:
    - 10 (See note below)
    - 9+
    - 8.5.12+
    - 8.0.42+
    - 7.0.76+

> **Important:** Tomcat 10 will require WAR files to be placed in the *webapp-javaee* directory rather than the *webapps* directory due to the change to Jakarta servlets. Jetty 11 is not currently supported due to this change.

### Operating Systems

* Windows Server 2008 SP2
* Red Hat Enterprise Linux v6
* Red Hat Enterprise Linux v5

### Minimum Hardware Requirements

* CPU:  Dual Core Processor ~ 2Ghz. For higher loads, a quad core or higher is recommended.
* RAM: 4 Gigabytes of RAM available for services

<a class="anchor" id="premiumpluginsupport"></a>
{% include misc/support-powerpaste.md %}

{% include misc/plugin_support_table.md %}
