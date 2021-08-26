### `rtc_token_provider`

The RTC plugin and the RTC service uses [JSON Web Tokens (JWT)]({{site.baseurl}}/rtc/jwt-authentication/) to authenticate the user. The user's token should include:

* A unique user ID,
* A relative expiration time.

The `rtc_token_provider` function will be called one or more times to refresh the token before it expires. For production usage, {{site.companyname}} recommends a token provider with a dynamic request that produces a new JWT token with an updated `exp` claim.

**Type:** `Function`

**Required:** yes

#### Required JWT claims

| Field | Type | Description |
|-------|:----:|-------------|
| `sub` | `string` | The unique user ID (If `sub` is the same for two clients, the server will trust them as if they are the same user). |
| `exp` | `integer` | The timestamp when the token expires. |

#### Return fields for `rtc_token_provider`

| Field | Type | Description |
|-------|:----:|-------------|
| `token` | `string` | A generated JWT token. This token should be signed with a private key as described in [JWT authentication]({{site.baseurl}}/rtc/jwt-authentication/#privatepublickeypairsfortinycloudservices). |

### Examples of the minimum required configuration for the RTC plugin

#### Static configuration

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_document_id: "your-document-id",
  rtc_encryption_provider: () => Promise.resolve({ key: "your shared encryption 🔑", keyHint: "not used" }),
  rtc_token_provider: () => Promise.resolve({ token: "your-jwt-token" })
})
```

#### Dynamic configuration that fetches encryption keys and tokens from a server

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_document_id: "your-document-id",
  rtc_encryption_provider: ({documentId, newKey, keyHint}) =>
    fetch('/getKey', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ documentId, newKey, keyId: keyHint })
    })
    .then(response => response.json())
    .then(({keyId, secret}) => ({ key: secret, keyHint: keyId })),
  rtc_token_provider: () =>
    fetch('/getJwtToken', {
      method: 'POST',
      credentials: 'include'
    })
    .then(response => response.json()),
})
```