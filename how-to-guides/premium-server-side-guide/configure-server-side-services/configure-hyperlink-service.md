---
layout: default
title: Hyperlinking service settings
description: Configuration options for the hyperlinking premium server-side component.
---

The following settings for the Hyperlinking premium server-side component are optional. These settings should be added to the `application.conf` file described in [Required configuration for the server-side components]({{site.baseurl}}/how-to-guides/premium-server-side-guide/configure-server-side-services/configure-required-services/).

## `link-checking` (optional)

The Link checker has three configurable settings:

- `enabled`
- `fallback-to-get`
- `link-checking.cache`

### `enabled` (optional)

Used to enable (`true`) or disable (`false`) the Link-checking service. This setting is `true` by default.

For example:

```properties
ephox {
  link-checking {
    enabled = true
  }
}
```

### `fallback-to-get` (optional)

The Link-checker normally relies on the `HEAD` response. If `fallback-to-get` is `true`, the link-checker may issue a `GET` request after receiving a non-standard `HEAD` response to verify a link. When `true`, the Link checker can correctly identify working URLs that return non-standard `HEAD` replies. Enabling the `fallback-to-get` setting can lead to server performance issues and is set to `false` by default.

For example:

```properties
ephox {
  link-checking {
    fallback-to-get = true
  }
}
```

### `cache` (optional)

This element configures the Link Checker service's built-in cache. When a hyperlink is checked and confirmed valid, the result is cached to save unnecessary network traffic in the future.

Default settings are automatically configured, meaning these settings are optional.

- `capacity` - sets the capacity of the cache. The default setting is `500`.
- `timeToLiveInSeconds` - sets the time-to-live of elements of the cache, measured in seconds. This is the maximum total amount of time that an element is allowed to remain in the cache. The default setting is `86400` seconds, which is one day.
- `timeToIdleInSeconds` - sets the time-to-idle of elements of the cache, measured in seconds. This is the maximum amount of time that an element will remain in the cache if it is not being accessed. The default setting is `3600` seconds, which is one hour.

Example:

```properties
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
