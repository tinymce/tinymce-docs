## `rtc_encryption_provider`

The RTC plugin requires an encryption key for end-to-end encryption. This key is not sent to the RTC server; the {{site.productname}} RTC service cannot read the editor content. The encryption key is used by the [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) browser API to encrypt and decrypt the editor content in the user's browser.

A key is required when the client needs to:
1. Encrypt new data in the collaboration session.
2. Read previously written data from the collaboration session.

For information on encryption for RTC, including suggestions on how to generate a secure encryption key and use key rotation, see: [Real-time Collaboration (RTC) Encryption Setup]({{site.baseurl}}/rtc/encryption/).

{% if plugincode != "rtc" %}
Required plugin
: [Real-time Collaboration (`rtc`)]({{site.baseurl}}/plugins/premium/rtc/)
{% endif %}

Type
: Function (Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise))

Input data
: | Field | Type | Description |
|-------|:----:|-------------|
| `documentId` | `string` | The document ID from the [`rtc_document_id`](#rtc_document_id) option. |
| `keyHint` | `string` or `null` | Key hint returned by the editor when connecting to an existing session. The `keyHint` is retrieved from the RTC server using the `documentId` for existing documents. |

Return data
: | Field | Type | Required? | Description |
|-------|:----:|:----:|-------------|
| `key` | `string` | required | The encryption key that is used to locally encrypt and decrypt content for the current session. This key needs to be the same for all users connecting to a document (`documentId`). |
| `keyHint` | `string` | optional | The key hint to provide to future users to assist with retreiving the correct key for a document. It is only recorded when the input `keyHint` is `null`.<br/><br/>The `keyHint` must be a unicode string with a max length of 256 characters. |

> **Warning**: Do not include secret or sensitive information in the key hint. The key hint is stored by the server in plain text.

### Example: Using `rtc_encryption_provider`

This example shows the minimum required configuration for the Real-time Collaboration plugin, including the `rtc_encryption_provider` option.

```js
tinymce.init({
  selector: 'textarea#rtc-example',
  plugins: 'rtc',
  rtc_document_id: 'unique-document-id',
  rtc_encryption_provider: ({ documentId, keyHint }) =>
    fetch('/getKey', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ documentId, keyId: keyHint })
    })
    .then((response) => response.json())
    .then(({ keyId, secret }) => ({ key: secret, keyHint: keyId }))
    .catch((error) => console.log('Failed to return encryption key\n' + error)),
  rtc_token_provider: () => Promise.resolve({ token: 'signed-JWT-token' })
});
```
