---
layout: default
title: Install Server-side Components
description: Power your premium plugins like spelling as-you-type.
keywords: enterprise tinymcespellchecker spell check checker pro pricing imagetools server
---

## Server-side component installation


Some TinyMCE Enterprise features require a server-side component. If you're using the TinyMCE cloud solution, we've done all the hard work for you and you can skip this page. Alternatively, if you've purchased our Self-hosted solution then please read on.

Server-side components must be deployed onto a Java Servlet 3.0 compatible application server.  We currently support Jetty, Apache Tomcat, and WebSphere Application Server. To discuss support for additional Java application servers, please contact us at <mailto:sales@tiny.cloud>

The following server-side components are included in the TinyMCE Self-hosted package:

|Component                      | File							| Description |
|:-----------------------------	|:-------						|:----------- |
| [Spellchecking]({{ site.baseurl }}/enterprise/check-spelling/) 				| ephox-spelling.war		|Spell checking service for TinyMCE Enterprise.|
| [Image Tools Proxy]({{ site.baseurl }}/plugins/imagetools/)				| ephox-image-proxy.war		|Image proxy service for the Image Tools plugin.|
| [Enhanced Media Embed]({{ site.baseurl }}/enterprise/embed-media/), [Link Checker]({{ site.baseurl }}/enterprise/check-links/)				| ephox-hyperlinking.war		|Link Checker and Enhanced Media Embed service for TinyMCE Enterprise.|

> **Note:** The "Allowed Origins" service (ephox-allowed-origins.war) has been deprecated. Trusted domains should now be specified directly in the configuration file.

This guide will help you get these server-side components up and running.


### Step 1. Install a Java application server

If you've already got a Java application server like Jetty or Tomcat installed, skip to Step 2.

If you don't, pick either [Tomcat](http://tomcat.apache.org/) or [Jetty](http://www.eclipse.org/jetty/) and install one of these with their default settings using the instructions on their website.

> **Memory requirement:** Please ensure that you configure your Java Server (Tomcat/Jetty etc) with a minimum of 4GB. Please refer to [Out of memory errors]({{ site.baseurl }}/enterprise/server/troubleshoot/#outofmemoryerrors) section of the Troubleshoot page if you require instructions on how to explicitly define how much RAM will be allocated to your Java server.


### Step 2. Deploy server-side components

Deploy all the WAR files that came packaged with the TinyMCE Enterprise Self-hosted package to your newly installed Java application server:

- ephox-spelling.war
- ephox-image-proxy.war
- ephox-hyperlinking.war

The easiest way to deploy these files is to copy them into the *webapps* directory of your Tomcat/Jetty installation and then restart the application server.

More information can be found in the documentation of your chosen application server:

- [Deploying applications with Tomcat 9.0](https://tomcat.apache.org/tomcat-9.0-doc/deployer-howto.html)
- [Deploying applications with Jetty](http://www.eclipse.org/jetty/documentation/current/configuring-deployment.html)

### Step 3. Create a configuration file

Refer to the [Configure]({{ site.baseurl }}/enterprise/server/configure/) page for the details and come back here when you're done.

### Step 4. Pass the configuration file to the Java application server

> **HTTP proxy:** If you are relying on an HTTP proxy for outgoing HTTP/HTTPS connections to the Internet, consider configuring use of the proxy by the application server by setting JVM system properties at this point. These can be set in the same manner as `ephox.config.file` using the instructions below (using the `-D` option to the `java` command). Please refer to [Networking Properties for Java](http://docs.oracle.com/javase/8/docs/api/java/net/doc-files/net-properties.html) for details on the relevant proxy system properties. The system properties `http.proxyHost`, `http.proxyPort`, `http.nonProxyHosts`, `https.proxyHost`, `https.proxyPort` are recognized as well as `http.proxyUser` and `http.proxyPassword` to support authenticating proxies. Alternatively, use of a proxy for server-side components can be set directly in their configuration file as discussed on the [Configure]({{ site.baseurl }}/enterprise/server/configure/#proxyoptional) page.

Tell the services about the configuration file by setting the `ephox.config.file` JVM system property to the absolute path of the configuration file. The exact method for doing this varies depending on your operating system, application server and whether the application server is being run as a system service. The authoritative reference for configuring any application server is the vendor documentation, but we'll do our best to get you started below.

#### Windows

All Windows examples will assume the name of your configuration file is `application.conf` and it is located in the directory `C:\config\file\location\`. You'll need to set the JVM system property `-Dephox.config.file=C:\config\file\location\application.conf`.

##### Tomcat

###### From the command line

The following assumes you've downloaded the Tomcat 9.0 zip archive from the Tomcat website, unpacked it and you're working from the unpacked Tomcat directory.

Create or edit the script `.\bin\setenv.bat` to contain the following line:

    set "CATALINA_OPTS= -Dephox.config.file=C:\config\file\location\application.conf"

There should only be a single line in this file defining the `CATALINA_OPTS` environment variable.

You may also need to add another line with the path to your Java Runtime Environment installation (replace with the actual path on your system) such as:

    set "JRE_HOME=C:\Program Files\Java\jre1.8.0_131"

After editing `setenv.bat`, run the following command to start Tomcat:

    .\bin\startup.bat

For further information see the documentation on [running Tomcat 9.0](https://tomcat.apache.org/tomcat-9.0-doc/RUNNING.txt).

###### As a Windows service

If you download the Windows installer, Tomcat 9.0 will always be installed as a Windows system service. See the notes on [Windows setup](https://tomcat.apache.org/tomcat-9.0-doc/setup.html#Windows) for Tomcat 9.0 and the instructions for setting JVM system properties in the [Tomcat 9.0 Windows Service HOW-TO](https://tomcat.apache.org/tomcat-9.0-doc/windows-service-howto.html).

As a minimal example, if the installer installed Tomcat to `C:\Program Files\Apache Software Foundation\Tomcat 9.0\` (default option):

- Run `C:\Program Files\Apache Software Foundation\Tomcat 9.0\bin\Tomcat9w` which opens the **Apache Tomcat 9.0 Tomcat9 Properties** dialog box
- Select the `Java` tab
- Add the following line to `Java Options`:

    ```
    -Dephox.config.file=C:\config\file\location\application.conf
    ```


For other versions of Tomcat on Windows, check the Tomcat documentation for that version.


##### Jetty

###### From the command line

If you're following the instructions for [Starting Jetty](http://www.eclipse.org/jetty/documentation/current/startup.html) for Jetty 9.4.5, the path to the configuration file can simply be supplied as a command option:

    java -D"ephox.config.file=C:\config\file\location\application.conf" -jar C:\jetty\install\directory\start.jar


For other versions of Jetty on Windows, check the Jetty documentation for that version.

###### As a Windows service

Follow the instructions in [Startup via Windows Service](http://www.eclipse.org/jetty/documentation/current/startup-windows-service.html) for Jetty 9.4.5. Remember to append the following snippet to the line beginning with `set PR_JVMOPTIONS` in your `install-jetty-service.bat` script:

    ;-Dephox.config.file="C:\config\file\location\application.conf"

> **Note:** Check the `install-jetty-service.bat` has the correct paths to your Java installation. The service will fail to start with some rather unhelpful errors if the paths are incorrect.

For other versions of Jetty on Windows, check the Jetty documentation for that version.

#### Linux

All Linux examples will assume the name of your configuration file is `application.conf` and it is located in the directory `/config/file/location/`. You'll need to set the JVM system property `-Dephox.config.file=/config/file/location/application.conf`.

> **Note**: If the path to your `application.conf` file has spaces in it, you must ensure you prefix each white space with an escape character (\\). Example: ` -Dephox.config.file=/config/file/location/with/white\ space/application.conf`

Tomcat and/or Jetty can be obtained via the package manager for many Linux distributions. The commands for starting the service and the location of the configuration files will vary across distributions. If you installed an application server via the package manager, follow your distribution's documentation for configuring it.

##### Tomcat

The following assumes you've downloaded Tomcat 9.0 from the Tomcat website and unpacked the archive to `/opt/tomcat`.

For other versions of Tomcat on Linux, check the Tomcat documentation for that version.

If you've obtained Tomcat from your distribution's package manager, refer to your distribution's documentation for Tomcat.

###### From the command line

Create or edit the script `/opt/tomcat/bin/setenv.sh` to contain the following line:

    CATALINA_OPTS=" -Dephox.config.file=/config/file/location/application.conf"

There should only be a single line in this file defining the `CATALINA_OPTS` environment variable.

After editing `setenv.sh`, run the following command to start Tomcat:

    /opt/tomcat/bin/startup.sh

For further information see the documentation on [running Tomcat 9.0](https://tomcat.apache.org/tomcat-9.0-doc/RUNNING.txt).

##### Jetty

The following assumes you've downloaded Jetty 9.4.5 from the Jetty website and unpacked the archive to `/opt/jetty`.

For other versions of Jetty on Linux, check the Jetty documentation for that version.

If you've obtained Jetty from your distribution's package manager, refer to your distribution's documentation for Jetty.

###### From the command line

The path to the configuration file can simply be supplied as a command option:

    java -Dephox.config.file="/config/file/location/application.conf" -jar /opt/jetty/start.jar

###### As a Linux service

Assuming you've followed the instructions to [Startup a Unix Service using jetty.sh](http://www.eclipse.org/jetty/documentation/current/startup-unix-service.html) for Jetty 9.4.5, edit `/etc/default/jetty` and add the line:

    JETTY_ARGS=" -Dephox.config.file=/config/file/location/application.conf"

There should only be a single line in this file defining the `JETTY_ARGS` variable.

### Step 5: Restart the Java application server

After you've completed the steps on this page to [Deploy server-side components]({{ site.baseurl }}/enterprise/server/#step2deployserver-sidecomponents), [Create a configuration file]({{ site.baseurl }}/enterprise/server/#step3createaconfigurationfile) and [Pass the configuration file to the Java application server]({{ site.baseurl }}/enterprise/server/#step4passtheconfigurationfiletothejavaapplicationserver), the application server may need to be restarted to pick up all your changes. Turn it off and on again now, just to be safe.

### Step 6: Set up editor client instances to use the server-side functionality

Now that the server-side components deployed and running, you'll need to tell your TinyMCE instances where to find them:

- Set the TinyMCE `spellchecker_rpc_url` configuration property to the URL of the deployed server-side spelling component.
- Set the TinyMCE `imagetools_proxy` configuration property to the URL of the deployed server-side image proxy component.
- Set the TinyMCE `mediaembed_service_url` and `linkchecker_service_url` configuration properties to the URL of the deployed server-side linkchecker and media embed component.

This example assume your Java application server is running on port 80 (http) on `yourserver.example.com` and that all the server-side components are deployed to the same Java application server. Replace `yourserver.example.com` with the actual domain name or IP address of your server.

Example of TinyMCE client configuration:

````
tinymce.init({
	selector: 'textarea', // change this value according to your HTML
	toolbar: 'image',
	plugins: 'tinymcespellchecker image imagetools media mediaembed',
	spellchecker_rpc_url: 'http://yourserver.example.com/ephox-spelling/',
	imagetools_proxy: 'http://yourserver.example.com/ephox-image-proxy/1/image',
	mediaembed_service_url: 'http://yourserver.example.com/ephox-hyperlinking/',
	linkchecker_service_url: 'http://yourserver.example.com/ephox-hyperlinking/'
});
````
