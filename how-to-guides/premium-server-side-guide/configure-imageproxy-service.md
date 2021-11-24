## Image proxy service settings

### `image-proxy` (optional)

The [image proxy service]({{site.baseurl}}/plugins/opensource/imagetools/) has some optional configuration to set a maximum size for images proxied. Images beyond this size it will not be proxied. Please note that the `http.request-timeout-seconds` above also applies to requests made by the image proxy service.

|     Type      | Setting       | Description                                                                    |
|:-------------:|---------------|--------------------------------------------------------------------------------|
|  **element**  | `image-proxy` | Configures image proxy behavior.                                              |
| **attribute** | `size-limit`  | An integer defining the maximum allowed image size in bytes. Default: `10000000` |

Example:

```
ephox {
    image-proxy {
        size-limit = 10000000 // 10MB in bytes
    }
}
```
