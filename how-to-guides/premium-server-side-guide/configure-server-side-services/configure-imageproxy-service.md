---
layout: default
title: Image Proxy service settings
description: Configuration options for the Image Proxy premium server-side component.
---

The following settings for the Image Proxy premium server-side component are optional. These settings should be added to the `application.conf` file described in [Required configuration for the server-side components]({{site.baseurl}}/how-to-guides/premium-server-side-guide/configure-server-side-services/configure-required-services/).

## `image-proxy` (optional)

The [image proxy service]({{site.baseurl}}/plugins-ref/opensource/imagetools/) has some optional configuration to set a maximum size for images proxied. Images beyond this size it will not be proxied. Please note that the `http.request-timeout-seconds` above also applies to requests made by the image proxy service.

|     Type      | Setting       | Description                                                                    |
|:-------------:|---------------|--------------------------------------------------------------------------------|
|  **element**  | `image-proxy` | Configures image proxy behavior.                                              |
| **attribute** | `size-limit`  | An integer defining the maximum allowed image size in bytes. Default: `10000000` |

Example:

```properties
ephox {
    image-proxy {
        size-limit = 10000000 // 10MB in bytes
    }
}
```
