---
layout: default
title: Configure
description: Configure the Enterprise server-side components.
keywords: enterprise tinymcespellchecker spell check checker pro pricing imagetools server configuration configure
---

## Creating a configuration file

> **Note:** Use a plain text editor (such as gedit, vim, emacs or notepad) when creating or editing the `application.conf` file. Do not use word processors like Microsoft Word or Evernote as these can insert extra characters which make the file unreadable to the server-side components.

The TinyMCE server-side components require a configuration file to function correctly. By convention, this file is named `application.conf`.

This configuration file will require you to enter *at least* the following  information:

- `allowed-origins` - the domains allowed to communicate with the server-side editor features. This is required by all server-side components.

Some server-side components require additional configuration which can be found in their individual documentation:

- [Enhanced Media Embed]({{ site.baseurl }}/enterprise/embed-media/mediaembed-server-config/)
- [Link Checker]({{ site.baseurl }}/enterprise/check-links/#linkcheckersdkquicksetup)

### `allowed-origins` (required)

TinyMCE editor instances make use of the server-side components by performing a cross-origin HTTP request. These requests are subject to a form of HTTP access control called Cross-Origin Resource Sharing (CORS). CORS is built into web browsers and is not a feature of TinyMCE's server side components. A detailed explanation of CORS can be found on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).

The `allowed-origins` element configures a list of **all** values that can be expected by the server-side components in a HTTP Origin header from your TinyMCE instances (see the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) for more information on the HTTP Origin header). In short, you'll need to supply a list of all the URLs that your TinyMCE instances will be served from without the path information.

This is best illustrated with some examples:

If users load TinyMCE from the following URLs:

- `http://server.example.com/editor.php`
- `http://server.example.com/subpage/editor.php`

Add `http://server.example.com` to the `allowed-origins` list.

If users load TinyMCE from the following URLs:

- `https://server.example.com/editor.php`
- `http://server.example.com/subpage/editor.php`

Add `http://server.example.com` and `https://server.example.com` to the `allowed-origins` list.

If users load TinyMCE from the following URLs:

- `https://server.example.com/editor.php`
- `https://server.example.com/`

Add `https://server.example.com` to the `allowed-origins` list.

If users load TinyMCE from the following URLs:

- `http://oneserver.example.com/editor.php`
- `http://twoserver.example.com/subpage/editor.php`

Add `http://oneserver.example.com` and `http://twoserver.example.com` to the`allowed-origins` list.

> **Note:** If some of your URLs include a port then add an entry with and without the port. The value of the `Origin` header may be different across browsers. Add both to be safe.

If users load TinyMCE from the following URLs:

- `http://server.example.com:8080/editor.php`

Add `http://server.example.com:8080` and `http://server.example.com` to the `allowed-origins` list.

If users load TinyMCE from the following URLs:

- `https://server.example.com:9000/editor.php`

Add `https://server.example.com:9000` and `https://server.example.com` to the `allowed-origins` list.


|               |                     |             |
|---------------|---------------------|-------------|
| **element**   |  `allowed-origins`  | Stores CORS setup information |
| **attribute** |  `origins`          | An array of strings containing all possible values of the HTTP Origin header the server-side components can expect. |

Example:

````
ephox {
	allowed-origins {
		origins = [ "http://myserver", "http://myserver.example.com", "http://myserver:8080", "http://myotherserver", "http://myotherserver:9090", "https://mysecureserver" ]
	}
}
````

#### Wildcard support

The `*` wildcard character matches any value. Wildcards are supported in the following parts of entries in the `allowed-origin` list:

1. The scheme (e.g. `*://mydomain.com`). Omitting the scheme entirely is equivalent (e.g. `mydomain.com`).
2. The port (e.g. `http://mydomain.com:*`).
3. As a prefix of the domain (e.g. `http://*.mydomain.com`).
4. Any combination of scheme, port, and domain prefix (e.g. `*://*.mydomain.com:*`).
5. As the only character (e.g. `*`). This will allow **any** Origin to access the server-side components.
6. As the only character after the scheme (e.g. `https://*`). This will allow **any** Origin serving TinyMCE from a HTTPS page to access the server-side components.


> **Note:** Options 5 and 6 allow a broad set of origins access to the server-side components and are NOT recommended for production deployments.

````
ephox {
	allowed-origins {
		origins = [ "http://myserver:*", "*://myotherserver.example.com", "*://*.mydomain.example.com:*"]
	}
}
````

#### Troubleshooting Origins

If you missed an Origin or specified an Origin incorrectly, TinyMCE features that rely on the server-side components will not work from that Origin. If you observe that requests to the server-side components are failing or features are unavailable and you're not sure why, refer to the troubleshooting information about [Using browser tooling to investigate services issues]({{ site.baseurl }}/enterprise/server/troubleshoot/#usingbrowsertoolingtoinvestigateservicesissues).

### `proxy` (optional)

This element configures use of an HTTP proxy for outgoing HTTP/HTTPS requests made by the server-side components.

Default proxy settings are picked up from JVM system properties, usually provided on the command line, as defined in [Networking Properties for Java](http://docs.oracle.com/javase/8/docs/api/java/net/doc-files/net-properties.html). The system properties `http.proxyHost`, `http.proxyPort`, `http.nonProxyHosts`, `https.proxyHost`, `https.proxyPort` are recognized as well as `http.proxyUser` and `http.proxyPassword` to support authenticating proxies.

This optional proxy element provides an alternative to providing proxy settings as JVM system properties, or to override system properties.

|               |                       |             |
|---------------|-----------------------|-------------|
| **element**   |  `proxy`              | Stores HTTP outgoing proxy settings for the server-side components. |
| **attribute** |  `http.proxyHost`     | A string defining the host name of the proxy for plain HTTP (not HTTPS) connections. (Mandatory) |
| **attribute** |  `http.proxyPort`     | An integer defining the port number of the proxy for plain HTTP (not HTTPS) connections. (Mandatory) |
| **attribute** |  `http.nonProxyHosts` | A list of strings separated by vertical lines ("&#124;") listing hosts and domains to be excluded from proxying, for **both** plain HTTP and HTTPS connections. The strings can contain asterisks ("*") as wildcards. (Optional, defaults to "localhost&#124;127.\*&#124;[::1]" if not set.) |
| **attribute** |  `https.proxyHost`    | A string defining the host name of the proxy for HTTPS connections. (Optional) |
| **attribute** |  `https.proxyPort`    | An integer defining the port number of the proxy for HTTPS connections. (Optional) |
| **attribute** |  `http.proxyUser`     | Username for authenticating to **both** the HTTP and HTTPS proxy. (Optional) |
| **attribute** |  `http.proxyPassword` | Password for authenticating to **both** the HTTP and HTTPS proxy. (Optional) |


In the following example, both HTTP and HTTPS connections (except to localhost and the example.com domain) are proxied through someproxy.example.com on port 8080 and someproxy.example.com does not require authentication.

````
ephox {
    proxy {
        http.proxyHost = "someproxy.example.com"
        http.proxyPort = "8080"
        https.proxyHost = "someproxy.example.com"
        https.proxyPort = "8080"
        http.nonProxyHosts = "localhost|*.example.com"
    }
}
````

### `http` (optional)

Some server-side components make outbound HTTP and HTTPS connections. These include Link Checker, Enhanced Media Embed and Image Tools Proxy. In an evaluation or pre-production environment, you might want to test these features against resources with untrusted SSL certificates such as in-house servers with self-signed SSL certificates. In these circumstances, it is possible to bypass all SSL security.

This is not recommended for production environments.

|               |                     |             |
|---------------|---------------------|-------------|
| **element**   |  `http`             | Configures  HTTP client behaviour. |
| **attribute** |  `trust-all-cert`   | A boolean indicating whether to bypass SSL security and indiscriminately trusts all SSL certificates. Default: false |
| **attribute** |  `request-timeout-seconds` | An integer defining the number of seconds to allow HTTP requests to take. Default: 10 |

Example:

````
ephox {
    http {
        trust-all-cert = true
    }
}
````

The request timeout on outbound HTTP and HTTPS connections can be set. Setting this to a larger value will allow larger files through, but they may take a long time. An example might be if you expect to fetch very large files with the image proxy service.

Example:

````
ephox {
    http {
        request-timeout-seconds = 15
    }
}
````

### `image-proxy` (optional)

The [image proxy service]({{ site.baseurl }}/plugins/imagetools/) has some optional configuration to set a maximum size for images proxied. Images beyond this size it will not be proxied. Please note that the `http.request-timeout-seconds` above also applies to requests made by the image proxy service.

|               |                     |             |
|---------------|---------------------|-------------|
| **element**   |  `image-proxy`             | Configures image proxy behaviour. |
| **attribute** |  `size-limit`   | An integer defining the maximum allowed image size in bytes. Default: 10000000 |

Example:

````
ephox {
    image-proxy {
        image-size = 10000000 // 10MB in bytes
    }
}
````

## Logging

It may be useful to make the TinyMCE server-side components write to their own log file. This can assist in troubleshooting and make it easier to provide logs as part of a support ticket.

To write the logs to a specific file, you’ll need to perform the following steps:

### Step 1. Create a logging configuration XML file

The TinyMCE server-side components use the [Logback](http://logback.qos.ch/manual/configuration.html) logging format.

Save the snippet below as `logback.xml` after replacing `{$LOG_LOCATION}` with the full path to the destination log file (e.g. /var/log/tinymce_server_components.log).

````
<configuration>

  <appender name="STDOUT" class="ch.qos.logback.core.ConsoleAppender">
	<encoder>
	  <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
	</encoder>
  </appender>

  <appender name="FILE" class="ch.qos.logback.core.FileAppender">
	<file>{$LOG_LOCATION}</file>
	<encoder>
	  <pattern>%d{HH:mm:ss.SSS} [%thread] %-5level %logger{36} - %msg%n</pattern>
	</encoder>
  </appender>

  <!-- The name "com.ephox" refers to all TinyMCE server-side components. -->
  <logger name="com.ephox" level="INFO"/>

  <root level="INFO">
	<appender-ref ref="FILE" />
	<!-- If you want logging to go to the container as well uncomment
	the following line -->
	<!-- <appender-ref ref="STDOUT" /> -->
  </root>

</configuration>
````

### Step 2. Pass the configuration file to the Java application server

Assuming you've saved your `logback.xml` file in `/etc/opt/tinymce`, follow [step 4]({{ site.baseurl }}/enterprise/server/#step4passtheconfigurationfiletothejavaapplicationserver) and [step 5]({{ site.baseurl }}/enterprise/server/#step5restartthejavaapplicationserver) on the *Install Server-side Components* page to set the following JVM system property on your Java application server:

````
-Dlogback.configurationFile=/etc/opt/tinymce/logback.xml
````
