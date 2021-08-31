### `rtc_token_provider`

The RTC plugin and the RTC service uses [JSON Web Tokens (JWT)]({{site.baseurl}}/rtc/jwt-authentication/) to authenticate the user. The user's token should include:

* A unique user ID,
* A relative expiration time.

The `rtc_token_provider` function will be called one or more times to refresh the token before it expires. For production usage, {{site.companyname}} recommends a token provider with a dynamic request that produces a new JWT token with an updated `exp` claim.

{% if plugincode != "rtc" %}
Required plugin
: [Real-Time Collaboration (`rtc`)]({{site.baseurl}}/plugins/premium/rtc/)
{% endif %}

Type
: Function (Promise)

Input parameters
: | Field | Type | Description |
|-------|:----:|-------------|
| `documentId` | `string` | The document ID from the [`rtc_document_id`](#rtc_document_id) option. |

Return data
: | Field | Type | Description |
|-------|:----:|-------------|
| `token` | `string` | A generated JWT token. This token should be signed with a private key as described in [JWT authentication]({{site.baseurl}}/rtc/jwt-authentication/#privatepublickeypairsfortinycloudservices). |

#### Required JWT claims

| Field | Type | Description |
|-------|:----:|-------------|
| `sub` | `string` | The unique user ID (If `sub` is the same for two clients, the server will trust them as if they are the same user). |
| `exp` | `integer` | The timestamp when the token expires. |

### Example: Using `rtc_token_provider`

This example shows the minimum required configuration for the Real-Time Collaboration plugin, including the `rtc_token_provider` option.

```js
tinymce.init({
  selector: 'textarea#rtc-example',
  plugins: 'rtc',
  rtc_document_id: 'unique-document-id',
  rtc_encryption_provider: () => Promise.resolve({ key: 'a secret key' }),
  rtc_token_provider: ({ documentId }) =>
    fetch('/getJwtToken', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ documentId }),
    })
    .then((response) => response.json())
    .then(({jwt})) => ({ token: jwt })
    .catch((error) => console.log('Failed to return a JWT\n' + error))
});
```
