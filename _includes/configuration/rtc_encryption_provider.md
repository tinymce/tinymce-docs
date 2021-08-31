### `rtc_encryption_provider`

The RTC plugin requires an encryption key for end-to-end encryption. This key is not sent to the {{site.cloudname}} server; the {{site.productname}} RTC service cannot read the editor content. The encryption key is used by the browser's [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) API to encrypt and decrypt editor content on the client.

A key is required when the client needs to:
1. Encrypt new data in the collaboration session.
2. Read previously written data from the collaboration session.

Suggestions on how to generate a secure encryption key and participate in key rotation are available in [Generating a secure encryption key]({{site.baseurl}}/rtc/encryption/#generatingasecureencryptionkey). To help with this process a customizable "key hint" is available.

#### Key Hint

If keys are never rotated this can be ignored. For advice on how to use the key hint to rotate encryption keys, see [Encryption key rotation and key hints]({{site.baseurl}}/rtc/encryption/#encryptionkeyrotationandkeyhints).

> **Warning**: Do not include secret or sensitive information in the key hint. The key hint is stored by the server in plain text.

{% if plugincode != "rtc" %}
Required plugin
: [Real-Time Collaboration (`rtc`)]({{site.baseurl}}/plugins/premium/rtc/)
{% endif %}

Type
: Function (Promise)

Input data
: | Field | Type | Description |
|-------|:----:|-------------|
| `documentId` | `string` | The document ID from the [`rtc_document_id`](#rtc_document_id) option |
| `keyHint` | `string` or `null` | Key hint returned by the client which opened the session, if connecting to an existing session. |

Return data
: | Field | Type | Required? | Description |
|-------|:----:|:----:|-------------|
| `key` | `string` | required | Encryption key that is used to locally encrypt operations. This key needs to be the same for all connecting clients on the same session. |
| `keyHint` | `string` | optional | Key hint to provide to future clients to aid in key selection. It is only recorded when the input `keyHint` is `null`. (unicode, max 256 characters) |

### Example: Using `rtc_encryption_provider`

This example shows the minimum required configuration for the Real-Time Collaboration plugin, including the `rtc_encryption_provider` option.

```js
tinymce.init({
  selector: 'textarea#rtc-example',
  plugins: 'rtc',
  rtc_document_id: 'unique-document-id',
  rtc_encryption_provider: ({documentId, keyHint}) =>
    fetch('/getKey', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ documentId, keyId: keyHint })
    })
    .then(response => response.json())
    .then(({keyId, secret}) => ({ key: secret, keyHint: keyId }))
    .catch((error) => console.log('Failed to return encryption key\n' + error)),
  rtc_token_provider: () => Promise.resolve({ token: 'signed-JWT-token' })
});
```
