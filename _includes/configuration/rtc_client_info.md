### `rtc_client_info`

The `rtc_client_info` option allows status flags from the local editor environment to be provided to other connecting clients. For example: "This user is on a mobile device". This option should not be used to communicate sensitive information; the authenticity of the data cannot be guaranteed.

This option accepts an object that must be serializable (`JSON.stringify` will be used to transmit it between clients). Other clients receive a copy of this object in their [`rtc_client_connected`](#rtc_client_connected) events.

{% if plugincode != "rtc" %}
Required plugin
: [Real-Time Collaboration (`rtc`)]({{site.baseurl}}/plugins/premium/rtc/)
{% endif %}

Type
: Object

#### Example of client status information

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_document_id: 'unique-document-id',
  rtc_encryption_provider: () => Promise.resolve({ key: 'a secret key' }),
  rtc_token_provider: () => Promise.resolve({ token: 'signed-JWT-token' }),

  rtc_client_info: { onMobile: true, region: 'us' }
})
```