---
layout: default
title: Configure server-side components
keywords: enterprise tinymcespellchecker spell check checker pro pricing imagetools server configuration configure
---

## Creating a configuration file

> **Note:** Use a plain text editor (such as gedit, vim, emacs or notepad) when creating or editing the `application.conf` file. Do not use word processors like Microsoft Word or Evernote as these can insert extra characters which make the file unreadable to the server-side components.

The {{site.productname}} server-side components require a configuration file to function correctly. By convention, this file is named `application.conf`.

This configuration file will require you to enter *at least* the following  information:

- `allowed-origins` - the domains allowed to communicate with the server-side editor features. This is required by all server-side components.

The Enhanced Media Embed server-side component require additional configuration, which can be found on the [Enhanced Media Embed page]({{ site.baseurl }}/enterprise/embed-media/mediaembed-server-config/).

### `allowed-origins` (required)

{{site.productname}} editor instances make use of the server-side components by performing a cross-origin HTTP request. These requests are subject to a form of HTTP access control called Cross-Origin Resource Sharing (CORS). CORS is built into web browsers and is not a feature of {{site.productname}}'s server side components. A detailed explanation of CORS can be found on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).

The `allowed-origins` element configures a list of **all** values that can be expected by the server-side components in a HTTP Origin header from your {{site.productname}} instances (see the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) for more information on the HTTP Origin header). In short, you'll need to supply a list of all the URLs that your {{site.productname}} instances will be served from without the path information.

> **Important:** When the services are matching against the `allowed-origins` list, the `scheme` (e.g. http) and the `port` (e.g. 800) are **ignored**. 

This is best illustrated with some examples:

If users load {{site.productname}} from the following URLs:

- `http://server.example.com/editor.php`
- `http://server.example.com/subpage/editor.php`

Add `server.example.com` to the `allowed-origins` list.

If users load {{site.productname}} from the following URLs:

- `https://server.example.com/editor.php`
- `http://server.example.com/subpage/editor.php`

Add `server.example.com` to the `allowed-origins` list because the scheme is ignored.

If users load {{site.productname}} from the following URLs:

- `https://server.example.com/editor.php`
- `https://server.example.com/`

Add `server.example.com` to the `allowed-origins` list.

If users load {{site.productname}} from the following URLs:

- `http://oneserver.example.com/editor.php`
- `http://twoserver.example.com/subpage/editor.php`

Add `oneserver.example.com` and `twoserver.example.com` to the`allowed-origins` list.

If users load {{site.productname}} from the following URLs:

- `http://server.example.com:8080/editor.php`

Add `server.example.com` to the `allowed-origins` list because the port is ignored.

If users load {{site.productname}} from the following URLs:

- `https://server.example.com:9000/editor.php`

Add `server.example.com` to the `allowed-origins` list because the scheme and the port are ignored.


|               |                     |             |
|---------------|---------------------|-------------|
| **element**   |  `allowed-origins`  | Stores CORS setup information |
| **attribute** |  `origins`          | An array of strings containing all possible values of the HTTP Origin header the server-side components can expect. |

Example:

```
ephox {
  allowed-origins {
    origins = [ "myserver", "myserver.example.com", "myotherserver", "mysecureserver" ]
  }
}
```

#### Wildcard support

The `*` wildcard character matches any value. Wildcards are supported in the following parts of entries in the `allowed-origin` list:

1. As a prefix of the domain (e.g. `*.mydomain.com`).
2. As the only character (e.g. `*`). This will allow **any** Origin to access the server-side components.


> **Note:** Option 2 allows a broad set of origins access to the server-side components and is NOT recommended for production deployments.

```
ephox {
  allowed-origins {
    origins = [ "myserver", "*.mydomain.example.com" ]
  }
}
```

#### Regular Expressions support

{{site.requires_jsscwar_230v}}

Regular expressions can be used alongside [wildcards](#wildcardsupport) for specifying `allowed-origins.origins`. To use a regular expression, start and end the expression with the forward-slash `'/'` character.

For example:

```
ephox {
  allowed-origins {
    origins = [ "myserver", "/(myserver|myotherserver\.)?example\.com/" ]
  }
}
```

For a list of valid constructs, see: [Java 8: `java.util.regex` - Summary of regular-expression constructs](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html#sum).

#### `allowed-origins.same-origin` (optional)

{{site.requires_jsscwar_230v}}

Enabling `same-origin` removes the need to specify the domain origin accessing the service if the service is deployed from the same server.

The `allowed-origins` `same-origin` option can be used to block all cross-origin requests. This option is set to `false` by default.

Setting the `same-origin` setting to `true` will block all HTTP `OPTIONS` requests and allow all other HTTP methods. When set to `true`, all `origins` specified in `allowed-origins` will be ignored.

For example:

```
ephox {
  allowed-origins {
    same-origin: true
  }
}
```

#### Troubleshooting Origins

If you missed an Origin or specified an Origin incorrectly, {{site.productname}} features that rely on the server-side components will not work from that Origin. If you observe that requests to the server-side components are failing or features are unavailable and you're not sure why, refer to the troubleshooting information about [Using browser tooling to investigate services issues]({{ site.baseurl }}/enterprise/server/troubleshoot/#usingbrowsertoolingtoinvestigateservicesissues).

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

```
ephox {
    proxy {
        http.proxyHost = "someproxy.example.com"
        http.proxyPort = "8080"
        https.proxyHost = "someproxy.example.com"
        https.proxyPort = "8080"
        http.nonProxyHosts = "localhost|*.example.com"
    }
}
```

### `http` (optional)

Some server-side components make outbound HTTP and HTTPS connections. These include Link Checker, Enhanced Media Embed and Image Tools Proxy. In an evaluation or pre-production environment, you might want to test these features against resources with untrusted SSL certificates such as in-house servers with self-signed SSL certificates. In these circumstances, it is possible to bypass all SSL security.

This is not recommended for production environments.

|               |                     |             |
|---------------|---------------------|-------------|
| **element**   |  `http`             | Configures  HTTP client behaviour. |
| **attribute** |  `trust-all-cert`   | A boolean indicating whether to bypass SSL security and indiscriminately trusts all SSL certificates. Default: false |
| **attribute** |  `request-timeout-seconds` | An integer defining the number of seconds to allow HTTP requests to take. Default: 10 |

Example:

```
ephox {
    http {
        trust-all-cert = true
    }
}
```

The request timeout on outbound HTTP and HTTPS connections can be set. Setting this to a larger value will allow larger files through, but they may take a long time. An example might be if you expect to fetch very large files with the image proxy service.

Example:

```
ephox {
    http {
        request-timeout-seconds = 15
    }
}
```

#### Alternative http timeout settings

{{site.requires_jsscwar_230v}}

When greater control over timeout settings is needed, the following three settings can be used instead of the `request-timeout-seconds` setting:

- `connection-request-timeout-seconds`: The amount of time to wait for a connection from the connection pool.
- `connect-timeout-seconds`: The amount of time to wait for a connection to be established.
- `socket-timeout-seconds`: The amount of time to wait in between packets after a connection is established.

If one of these settings are required, remove `request-timeout-seconds` and specify values for all three of these settings.

For example:

```
ephox {
    http {
        connection-request-timeout-seconds = 10
        connect-timeout-seconds = 5
        socket-timeout-seconds = 4
    }
}
```

### `image-proxy` (optional)

The [image proxy service]({{site.baseurl}}/plugins/opensource/imagetools/) has some optional configuration to set a maximum size for images proxied. Images beyond this size it will not be proxied. Please note that the `http.request-timeout-seconds` above also applies to requests made by the image proxy service.

|               |                     |             |
|---------------|---------------------|-------------|
| **element**   |  `image-proxy`             | Configures image proxy behaviour. |
| **attribute** |  `size-limit`   | An integer defining the maximum allowed image size in bytes. Default: 10000000 |

Example:

```
ephox {
    image-proxy {
        size-limit = 10000000 // 10MB in bytes
    }
}
```

### `link-checking` (optional)

The Link checker has three configurable settings:

- `enabled`
- `fallback-to-get`
- `link-checking.cache`

#### `enabled` (optional)

Used to enable (`true`) or disable (`false`) the Link-checking service. This setting is `true` by default.

For example:

```
ephox {
  link-checking {
    enabled = true
  }
}
```

#### `fallback-to-get` (optional)

{{site.requires_jsscwar_230v}}

The Link-checker normally relies on the `HEAD` response. If `fallback-to-get` is `true`, the link-checker may issue a `GET` request after receiving a non-standard `HEAD` response to verify a link. When `true`, the Link checker can correctly identify working URLs that return non-standard `HEAD` replies. Enabling the `fallback-to-get` setting can lead to server performance issues and is set to `false` by default.

For example:

```
ephox {
  link-checking {
    fallback-to-get = true
  }
}
```

#### `cache` (optional)

This element configures the Link Checker service's built-in cache. When a hyperlink is checked and confirmed valid, the result is cached to save unnecessary network traffic in the future.

Default settings are automatically configured, meaning these settings are optional.

- `capacity` - sets the capacity of the cache. The default setting is 500.
- `timeToLiveInSeconds` - sets the time-to-live of elements of the cache, measured in seconds. This is the maximum total amount of time that an element is allowed to remain in the cache. The default setting is 86400 seconds, which is one day.
- `timeToIdleInSeconds` - sets the time-to-idle of elements of the cache, measured in seconds. This is the maximum amount of time that an element will remain in the cache if it is not being accessed. The default setting is 3600 seconds, which is one hour.

Example:

```
ephox {
  link-checking {
    cache {
      capacity = 500
      timeToLiveInSeconds = 86400
      timeToIdleInSeconds = 3600
    }
  }
}
```

### `spelling` (optional)

The Spelling service has two configurable settings:

- `custom-dictionaries-path`
- `dynamic-custom-dictionaries`

#### `custom-dictionaries-path` (optional)

Used to define the location of the custom dictionaries. When the setting is not provided, no custom dictionaries are loaded.

For example:

```
ephox {
  spelling {
    custom-dictionaries-path = "/opt/ephox/dictionaries"
  }
}
```

#### `dynamic-custom-dictionaries` (optional)

{{site.requires_jsspelling_war_2_110_0v}}

The spelling service by default requires restarting to pick up any changes to the custom dictionaries. If `dynamic-custom-dictionaries` is `true`, however, it will periodically poll for changes and update the custom dictionaries to match the changes. This prevents the need for a restart. The default value is `false`.

```
ephox {
  spelling {
    dynamic-custom-dictionaries = true
  }
}
```

## Logging

It may be useful to make the {{site.productname}} server-side components write to their own log file. This can assist in troubleshooting and make it easier to provide logs as part of a support ticket.

To write the logs to a specific file, you’ll need to perform the following steps:

### Step 1. Create a logging configuration XML file

The {{site.productname}} server-side components use the [Logback](http://logback.qos.ch/manual/configuration.html) logging format.

Save the snippet below as `logback.xml` after replacing `{$LOG_LOCATION}` with the full path to the destination log file (e.g. /var/log/tinymce_server_components.log).

```xml
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

  <!-- The name "com.ephox" refers to all {{site.productname}} server-side components. -->
  <logger name="com.ephox" level="INFO"/>

  <root level="INFO">
    <appender-ref ref="FILE" />
    <!-- If you want logging to go to the container as well uncomment
    the following line -->
    <!-- <appender-ref ref="STDOUT" /> -->
  </root>

</configuration>
```

### Step 2. Pass the configuration file to the Java application server

Assuming you've saved your `logback.xml` file in `/etc/opt/tinymce`, follow [step 4]({{ site.baseurl }}/enterprise/server/#step4passtheconfigurationfiletothejavaapplicationserver) and [step 5]({{ site.baseurl }}/enterprise/server/#step5restartthejavaapplicationserver) on the *Install Server-side Components* page to set the following JVM system property on your Java application server:

```
-Dlogback.configurationFile=/etc/opt/tinymce/logback.xml
```
