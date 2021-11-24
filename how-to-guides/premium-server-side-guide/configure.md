---
layout: default
title: Configure server-side components
description: Configuration options for premium server-side components.
keywords: enterprise tinymcespellchecker spell check checker pro pricing imagetools server configuration configure
---

## Overview

* [Creating a configuration file](#creatingaconfigurationfile)
* [General service settings](#generalservicesettings)
  * [allowed-origins (required)](#allowed-originsrequired)
    * [Wildcard support](#wildcardsupport)
    * [Regular Expressions support](#regularexpressionssupport)
    * [allowed-origins.same-origin (optional)](#allowed-originssame-originoptional)
    * [allowed-origins.ignore-port (optional)](#allowed-originsignore-portoptional)
    * [Troubleshooting Origins](#troubleshootingorigins)
  * [proxy (optional)](#proxyoptional)
  * [http (optional)](#httpoptional)
    * [Alternative http timeout settings](#alternativehttptimeoutsettings)
* [Image proxy service settings](#imageproxyservicesettings)
  * [image-proxy (optional)](#image-proxyoptional)
* [Hyperlinking service settings](#hyperlinkingservicesettings)
  * [link-checking (optional)](#link-checkingoptional)
    * [enabled (optional)](#enabledoptional)
    * [fallback-to-get (optional)](#fallback-to-getoptional)
    * [cache (optional)](#cacheoptional)
* [Spelling service settings](#spellingservicesettings)
  * [spelling (optional)](#spellingoptional)
    * [hunspell-dictionaries-path (optional)](#hunspell-dictionaries-pathoptional)
    * [custom-dictionaries-path (optional)](#custom-dictionaries-pathoptional)
    * [dynamic-custom-dictionaries (optional)](#dynamic-custom-dictionariesoptional)
* [Logging service activity](#loggingserviceactivity)

## Creating a configuration file

> **Note:** Use a plain text editor (such as gedit, vim, emacs or notepad) when creating or editing the `application.conf` file. Do not use word processors like Microsoft Word or Evernote as these can insert extra characters which make the file unreadable to the server-side components.

The {{site.productname}} server-side components require a configuration file to function correctly. By convention, this file is named `application.conf`.

This configuration file will require you to enter *at least* the following  information:

- `allowed-origins` - the domains allowed to communicate with the server-side editor features. This is required by all server-side components.

The Enhanced Media Embed server-side component require additional configuration, which can be found on the [Enhanced Media Embed page]({{ site.baseurl }}/plugins/premium/mediaembed/mediaembed-server-config/).

## General service settings

### `allowed-origins` (required)

{{site.productname}} editor instances make use of the server-side components by performing a cross-origin HTTP request. These requests are subject to a form of HTTP access control called Cross-Origin Resource Sharing (CORS). CORS is built into web browsers and is not a feature of {{site.productname}}'s server side components. A detailed explanation of CORS can be found on the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS).

The `allowed-origins` element configures a list of **all** values that can be expected by the server-side components in a HTTP Origin header from your {{site.productname}} instances (see the [Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Origin) for more information on the HTTP Origin header). In short, you'll need to supply a list of all the URLs that your {{site.productname}} instances will be served from without the path information.

> **Important:** When the services are matching against the `allowed-origins` list, the `scheme` (e.g. http) and the `port` (e.g. 800) are **ignored** by default. Customize this using [`ephox.allowed-origins.ignore-port`](#allowed-originsignore-portoptional) option.

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


|     Type      | Setting           | Description                                                                                                         |
|:-------------:|-------------------|---------------------------------------------------------------------------------------------------------------------|
|  **element**  | `allowed-origins` | Stores CORS setup information                                                                                       |
| **attribute** | `origins`         | An array of strings containing all possible values of the HTTP Origin header the server-side components can expect. |

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

#### `allowed-origins.ignore-port` (optional)

To enforce a port check for the service's `allowed-origins`, set `ignore-port` to `false`. When `ignore-port` is set to false, all `allowed-origins` **must** include the port of the origin.

This option is set to `true` by default, so ports specified in `allowed-origins` are ignored.

For example:

```
ephox {
  allowed-origins {
    origins = ["myserver:8000", "myserver:8001"]
    ignore-port = false
  }
}
```

#### Troubleshooting Origins

If you missed an Origin or specified an Origin incorrectly, {{site.productname}} features that rely on the server-side components will not work from that Origin. If you observe that requests to the server-side components are failing or features are unavailable and you're not sure why, refer to the troubleshooting information about [Using browser tooling to investigate services issues]({{ site.baseurl }}/how-to-guides/premium-server-side-guide/troubleshoot/#usingbrowsertoolingtoinvestigateservicesissues).

### `proxy` (optional)

This element configures use of an HTTP proxy for outgoing HTTP/HTTPS requests made by the server-side components.

Default proxy settings are picked up from JVM system properties, usually provided on the command line, as defined in [Networking Properties for Java](http://docs.oracle.com/javase/8/docs/api/java/net/doc-files/net-properties.html). The system properties `http.proxyHost`, `http.proxyPort`, `http.nonProxyHosts`, `https.proxyHost`, `https.proxyPort` are recognized as well as `http.proxyUser` and `http.proxyPassword` to support authenticating proxies.

This optional proxy element provides an alternative to providing proxy settings as JVM system properties, or to override system properties.

|     Type      | Setting              | Description                                                                                                                                                                                                                                                                                  |
|:-------------:|----------------------|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
|  **element**  | `proxy`              | Stores HTTP outgoing proxy settings for the server-side components.                                                                                                                                                                                                                          |
| **attribute** | `http.proxyHost`     | A string defining the host name of the proxy for plain HTTP (not HTTPS) connections. (Mandatory)                                                                                                                                                                                             |
| **attribute** | `http.proxyPort`     | An integer defining the port number of the proxy for plain HTTP (not HTTPS) connections. (Mandatory)                                                                                                                                                                                         |
| **attribute** | `http.nonProxyHosts` | A list of strings separated by vertical lines ("&#124;") listing hosts and domains to be excluded from proxying, for **both** plain HTTP and HTTPS connections. The strings can contain asterisks ("*") as wildcards. (Optional, defaults to "localhost&#124;127.\*&#124;[::1]" if not set.) |
| **attribute** | `https.proxyHost`    | A string defining the host name of the proxy for HTTPS connections. (Optional)                                                                                                                                                                                                               |
| **attribute** | `https.proxyPort`    | An integer defining the port number of the proxy for HTTPS connections. (Optional)                                                                                                                                                                                                           |
| **attribute** | `http.proxyUser`     | Username for authenticating to **both** the HTTP and HTTPS proxy. (Optional)                                                                                                                                                                                                                 |
| **attribute** | `http.proxyPassword` | Password for authenticating to **both** the HTTP and HTTPS proxy. (Optional)                                                                                                                                                                                                                 |


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

|     Type      | Setting                   | Description                                                                                                          |
|:-------------:|---------------------------|----------------------------------------------------------------------------------------------------------------------|
|  **element**  | `http`                    | Configures HTTP client behavior.                                                                                   |
| **attribute** | `trust-all-cert`          | A boolean indicating whether to bypass SSL security and indiscriminately trusts all SSL certificates. Default: false |
| **attribute** | `request-timeout-seconds` | An integer defining the number of seconds to allow HTTP requests to take. Default: 10                                |

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
