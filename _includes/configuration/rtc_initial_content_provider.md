### `rtc_initial_content_provider`

By default, the initial editor content is retrieved from the element targeted using the {{site.productname}} [`selector` option]({{site.baseurl}}/configure/integration-and-setup/#selector).

The `rtc_initial_content_provider` option allows alternative initial content be retrieved for a new RTC session. This option works with frameworks and integrations (such as the {{site.productname}} [integrations]({{site.baseurl}}/integrations/)) that don't provide access to the target element directly. If the target element contains content and a `rtc_initial_content_provider` has been provided, the content from the `rtc_initial_content_provider` will be used as the initial editor content.

The `rtc_initial_content_provider` is used for new documents (`documentId`) and is not for opening or reopening existing documents. If the document already exists, the content on the RTC Server with the provided `documentId` will be loaded into the editor when it is intitalized.

{% if plugincode != "rtc" %}
Required plugin
: [Real-Time Collaboration (`rtc`)]({{site.baseurl}}/plugins/premium/rtc/)
{% endif %}

Type
: Function (Returns a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise))

Input parameters
: | Field | Type | Description |
|-------|:----:|-------------|
| `documentId` | `string` | The document ID configured using the `rtc_document_id` option.

Return data
: | Field | Type | Description |
|-------|:----:|-------------|
| `content` | `string` | String containing the HTML to be imported into the editor when there is no existing session. |

#### Example of providing static content

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_document_id: 'unique-document-id',
  rtc_encryption_provider: () => Promise.resolve({ key: 'a secret key' }),
  rtc_token_provider: () => Promise.resolve({ token: 'signed-JWT-token' }),
  rtc_initial_content_provider: () => Promise.resolve({ content: "<p>Hello world!</p>" })
})
```

#### Example of providing dynamic content from the server

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_document_id: 'unique-document-id',
  rtc_encryption_provider: () => Promise.resolve({ key: 'a secret key' }),
  rtc_token_provider: () => Promise.resolve({ token: 'signed-JWT-token' }),
  rtc_initial_content_provider: ({ documentId }) => {
    return fetch(`/getContent/${documentId}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then((response) => response.json());
  }
});
```