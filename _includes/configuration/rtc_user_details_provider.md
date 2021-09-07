### `rtc_user_details_provider`

By default, a user's unique ID (`userId`, the `sub` field from their [JWT]({{site.baseurl}}/rtc/jwt-authentication/#requiredjwtclaimsforreal-timecollaboration)) will be displayed as the username in remote caret tooltips.

To display a descriptive name on the caret, the `userId` needs to be resolved into user details that include the user's display name (`fullName`). This resolution is done on each client to avoid sending any personal information through the RTC server.

Only the `fullName` is required, but the whole object will be stored within the RTC caret information for use with the [`rtc_client_connected`](#rtc_client_connected) and [`rtc_client_disconnected`](#rtc_client_disconnected) callbacks to avoid duplicate lookup queries. The user details are also passed to the `RtcClientConnected` and `RtcClientDisconnected` events.

This provider function is called once for each connecting client. Clients that reconnect may trigger a new call to the provider function rather than using cached data.

{% if plugincode != "rtc" %}
Required plugin
: [Real-Time Collaboration (`rtc`)]({{site.baseurl}}/plugins/premium/rtc/)
{% endif %}

Type
: Function (Promise)

Input parameters
: | Field | Type | Description |
|-------|:----:|-------------|
| `userId` | `string` | User ID to resolve into user details. |

Return data
: | Field | Type | Description |
|-------|:----:|-------------|
| `fullName` | `string` | The full display name of user. For example: `"John Doe"`. |
| any custom field | `any` | Extra user data for use in the [`rtc_client_connected` API](#rtc_client_connected). |

#### Example of providing static user details

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_document_id: 'unique-document-id',
  rtc_encryption_provider: () => Promise.resolve({ key: 'a secret key' }),
  rtc_token_provider: () => Promise.resolve({ token: 'signed-JWT-token' }),

  rtc_user_details_provider: ({userId}) => Promise.resolve({ fullName: "John Doe" })
})
```

#### Example of providing user details from your server

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_document_id: 'unique-document-id',
  rtc_encryption_provider: () => Promise.resolve({ key: 'a secret key' }),
  rtc_token_provider: () => Promise.resolve({ token: 'signed-JWT-token' }),

  rtc_user_details_provider: ({userId}) => {
    return fetch('/getUserDetails', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userId})
      })
      .then(response => response.json())
      .then(({ fullnamefromserver })) => ({ fullName: fullnamefromserver })
      .catch((error) => console.log('Failed to retrieve user details\n' + error)),
    ;
  }
})
```
