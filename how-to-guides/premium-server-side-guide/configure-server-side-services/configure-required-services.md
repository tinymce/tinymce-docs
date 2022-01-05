---
layout: default
title: Required configuration for the server-side components
title_nav: Required configuration
description: Configuration options for premium server-side components.
---

## Creating a configuration file

> **Note:** Use a plain text editor (such as gedit, vim, emacs, or notepad) when creating or editing the `application.conf` file. Do not use word processors like Microsoft Word or Evernote as these can insert extra characters which make the file unreadable to the server-side components.

The {{site.productname}} server-side components require a configuration file to function correctly. By convention, this file is named `application.conf`.

This configuration file will require you to enter *at least* the following  information:

- `allowed-origins` - the domains allowed to communicate with the server-side editor features. This is required by all server-side components.

The Enhanced Media Embed server-side component require additional configuration, which can be found on the [Enhanced Media Embed page]({{ site.baseurl }}/plugins-ref/premium/mediaembed/mediaembed-server-config/).

## `allowed-origins` (required)

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

```properties
ephox {
  allowed-origins {
    origins = [ "myserver", "myserver.example.com", "myotherserver", "mysecureserver" ]
  }
}
```

### Wildcard support

The `*` wildcard character matches any value. Wildcards are supported in the following parts of entries in the `allowed-origin` list:

1. As a prefix of the domain (e.g. `*.mydomain.com`).
2. As the only character (e.g. `*`). This will allow **any** Origin to access the server-side components.

> **Note:** Option 2 allows a broad set of origins access to the server-side components and is NOT recommended for production deployments.

```properties
ephox {
  allowed-origins {
    origins = [ "myserver", "*.mydomain.example.com" ]
  }
}
```

### Regular Expressions support

Regular expressions can be used alongside [wildcards](#wildcardsupport) for specifying `allowed-origins.origins`. To use a regular expression, start and end the expression with the forward-slash `'/'` character.

For example:

```properties
ephox {
  allowed-origins {
    origins = [ "myserver", "/(myserver|myotherserver\.)?example\.com/" ]
  }
}
```

For a list of valid constructs, see: [Java 8: `java.util.regex` - Summary of regular-expression constructs](https://docs.oracle.com/javase/8/docs/api/java/util/regex/Pattern.html#sum).

### `allowed-origins.same-origin` (optional)

Enabling `same-origin` removes the need to specify the domain origin accessing the service if the service is deployed from the same server.

The `allowed-origins` `same-origin` option can be used to block all cross-origin requests. This option is set to `false` by default.

Setting the `same-origin` setting to `true` will block all HTTP `OPTIONS` requests and allow all other HTTP methods. When set to `true`, all `origins` specified in `allowed-origins` will be ignored.

For example:

```properties
ephox {
  allowed-origins {
    same-origin: true
  }
}
```

### `allowed-origins.ignore-port` (optional)

To enforce a port check for the service's `allowed-origins`, set `ignore-port` to `false`. When `ignore-port` is set to false, all `allowed-origins` **must** include the port of the origin.

This option is set to `true` by default, so ports specified in `allowed-origins` are ignored.

For example:

```properties
ephox {
  allowed-origins {
    origins = ["myserver:8000", "myserver:8001"]
    ignore-port = false
  }
}
```

## Troubleshooting Origins

If you missed an Origin or specified an Origin incorrectly, {{site.productname}} features that rely on the server-side components will not work from that Origin. If you observe that requests to the server-side components are failing or features are unavailable and you're not sure why, refer to the troubleshooting information about [Using browser tooling to investigate services issues]({{ site.baseurl }}/how-to-guides/premium-server-side-guide/troubleshoot/#usingbrowsertoolingtoinvestigateservicesissues).
