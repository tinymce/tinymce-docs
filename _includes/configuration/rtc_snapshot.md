### `rtc_snapshot`

Real-time collaboration integrations regularly store the content, eliminating the need for a save button. The {{site.productname}} RTC plugin provides a version number to assist with storing the HTML content snapshots. These snapshots are not stored on the RTC server and must be handled by the integrator.

For any given document ID, the server guarantees the version number will only increase. It can be safely used for conflict resolution. For each document ID and version combination, the snapshot content is guaranteed to be identical.

The snapshot callback will be executed in response to local changes, with access to the serialized editor content. The content is retrieved through a `getContent` function to reduce CPU load if the callback decides to not use the editor content.

{% if plugincode != "rtc" %}
Required plugin
: [Real-Time Collaboration (`rtc`)]({{site.baseurl}}/plugins-ref/premium/rtc/)
{% endif %}

Type
: Function

Input parameters
: | Field | Type | Description |
|-------|:----:|-------------|
| `documentId` | `string` | The document ID from the [`rtc_document_id`]({{site.baseurl}}/plugins-ref/premium/rtc/configuration/rtc-options-required/#rtc_document_id) option. |
| `version` | `integer` | An increasing version number, specific to the current document ID, between 0 and 2147483648 (2<sup>31</sup>). |
| `getContent` | `Function` | Render the content for this specific version to HTML. |

#### Example of getting content snapshots

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_document_id: 'unique-document-id',
  rtc_encryption_provider: () => Promise.resolve({ key: 'a secret key' }),
  rtc_token_provider: () => Promise.resolve({ token: 'signed-JWT-token' }),
  rtc_snapshot: ({ version, getContent }) => {
    console.log('Current version', version);
    console.log('HTML', getContent());
  }
});
```