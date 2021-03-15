---
layout: default
title: RTC configuration
title_nav: Configuration options
description: List of all available RTC configuration options.
keywords: rtc configuration
---

{% include misc/beta-note-rtc.md %}

> **Note**: These configuration options are subject to change based on customer feedback. API compatibility is not guaranteed during beta.

## Configuration style

The RTC plugin primarily uses promise-based "provider" functions to support a variety of configuration scenarios including asynchronously fetching data from a server.

Function input parameters are provided as an object; this allows use of object destructuring syntax where unused fields can be omitted.

## Required configuration

The following options are the minimum required to use the RTC plugin:

* [`rtc_document_id`](#rtc_document_id)
* [`rtc_encryption_provider`](#rtc_encryption_provider)
* [`rtc_token_provider`](#rtc_token_provider)

An [example minimum configuration](#minimumconfigurationexample) follows a description of each option.

### `rtc_document_id`

The RTC plugin needs an identifier for the content before collaboration can begin. We call this the document ID. The identifier contents are completely up to the integrator, but each item of content must have a unique document ID; this ID is used by the server as a permanent reference for the content. If your server stores a unique ID for each item of content that would be ideal to use as the document ID.

> **Caution**: It is essential that items of content never share a document ID.

When a client connects, if the RTC server already knows about the document ID the most recent content data is sent to the client. If it is an unknown document ID the client uploads new initial content as the first version of that document ID.

> **Note**: Due to this behaviour, if changes are made to content outside of an RTC session a new document ID must be generated otherwise those changes will be overwritten by the RTC server content during the next collaboration session. A future release may allow re-upload of initial content for an existing document ID.

**Type:** `Object`

**Required:** yes

### `rtc_encryption_provider`

The RTC plugin requires an encryption key for end-to-end encryption. This key is not sent to the {{site.cloudname}} server; the {{site.productname}} RTC service cannot read the editor content. The encryption key is used by the browser's [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) API to encrypt and decrypt editor content on the client.

A key is required when the client needs to:
1. encrypt new data in the collaboration session
2. read previously written data from the collaboration session

Suggestions on how to generate a secure encryption key and participate in key rotation are available in [Generating a secure encryption key]({{site.baseurl}}/rtc/jwt-authentication/#generatingasecureencryptionkey). To help with this process a customisable "key hint" is available.

#### Key Hint

If keys are never rotated this can be ignored. For advice on how to use the key hint to rotate encryption keys, see [Generating a secure encryption key]({{site.baseurl}}/rtc/jwt-authentication/#generatingasecureencryptionkey).

**Type:** `Function`

**Required:** yes

#### Input fields for `rtc_encryption_provider`

| Field | Type | Description |
|-------|:----:|-------------|
| `documentId` | `string` | The document ID configured via `rtc_document_id`
| `keyHint` | `string` or `null` | Key hint returned by the client which opened the session, if connecting to an existing session. |

#### Return fields for `rtc_encryption_provider`

| Field | Type | Description |
|-------|:----:|-------------|
| `key` | `string` | Encryption key that is used to locally encrypt operations. This key needs to be the same for all connecting clients on the same session. |
| `keyHint` | `string` | Key hint to provide to future clients to aid in key selection. If keys are never rotated, it can be a fixed arbitrary value. It is only recorded when the input `keyHint` is `null`. (unicode, max 256 characters) |

### `rtc_token_provider`

The RTC plugin and service uses [JWT]({{site.baseurl}}/rtc/jwt-authentication/) to authenticate the user. The user's token should include a unique user ID and a relative expiration time. This provider function will be called multiple times to refresh the token if it's about to expire. For production usage, we recommend the token provider be a dynamic request that produces a new JWT token with an updated `exp` claim.

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
| `token` | `string` | A generated JWT token. This token should be signed with a private key as described in [JWT authentication]({{site.baseurl}}/rtc/jwt-authentication/). |

### Minimum configuration example

#### Static configuration

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_document_id: "your-document-id",
  rtc_encryption_provider: () => Promise.resolve({ key: "your shared encryption key", keyHint: "not used" }),
  rtc_token_provider: () => Promise.resolve({ token: "your-jwt-token" })
})
```

#### Dynamic configuration that fetches encryption keys and tokens from a server

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_document_id: "your-document-id",
  rtc_encryption_provider: ({documentId, newKey, keyHint}) =>
    fetch('/getKey', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ documentId, newKey, keyId: keyHint })
    })
    .then(response => response.json())
    .then(({keyId, secret}) => ({ key: secret, keyHint: keyId }),
  rtc_token_provider: () =>
    fetch('/getJwtToken', {
      method: 'POST',
      credentials: 'include'
    })
    .then(response => response.json()),
})
```

## Optional configuration

### `rtc_snapshot`

Real-time collaboration sessions don't typically have a save button and the session is constantly stored. Responsibility for content storage is left up to the integrator; a version number is provided to aid with storage decisions.

> **Note**: For any given document ID, the server guarantees the version number will only ever increase. It can be safely used for conflict resolution. For each document ID and version combination the snapshot content is guaranteed to be identical.

The snapshot callback will be executed at regular intervals with access to the serialized editor content. The content is retrieved through a `getContent` function to reduce CPU load if the callback decides to not use the editor content.


**Type:** `Function`

**Required:** no

#### Input fields for `rtc_snapshot`

| Field | Type | Description |
|-------|:----:|-------------|
| `documentId` | `string` | The document ID configured via `rtc_document_id`
| `version` | `integer` | An increasing version number, specific to the current document ID, between 0 and 2147483648 (2<sup>31</sup>). |
| `getContent()` | `string` | Function to execute to get the content for that particular version. |

#### Example of getting content snapshots

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_snapshot: ({version, getContent}) => {
    console.log('Current version', version);
    console.log('HTML', getContent());
  }
}
```

### `rtc_initial_content_provider`

By default, the initial editor content is retrieved from the target element using normal TinyMCE content loading.

As an alternative to this, the RTC plugin includes a `rtc_initial_content_provider` option to allow the initial content be retrieved for a new RTC session. This also works better with the various {{site.productname}} [integrations]({{site.baseurl}}/integrations/) that don't provide access to the target element directly.

**Type:** `Function`

**Required:** no

### Input fields for `rtc_initial_content_provider`

| Field | Type | Description |
|-------|:----:|-------------|
| `documentId` | `string` | The document ID configured via `rtc_document_id`

### Fields to return from `rtc_initial_content_provider`

| Field | Type | Description |
|-------|:----:|-------------|
| `content` | `string` | String containing the HTML to be imported into the editor when there is no active session. |

#### Example of providing static content

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_initial_content_provider: () => Promise.resolve({ content: "<p>Hello world!</p>" })
})
```

#### Example of providing dynamic content from the server

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_initial_content_provider: ({documentId}) => {
    return fetch(`/getContent/${documentId}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
  }
})
```

### `rtc_user_details_provider`

By default, a user's unique ID (the `sub` field from their [JWT](#rtc_token_provider)) will be displayed as their name in remote caret tooltips.

To display a descriptive name on the caret the user ID needs to be resolved into user details that include the full user name. This resolution is done on each client to avoid sending any personal information through the RTC server.

Only the full name is required, but the complete object will be cloned and stored within the RTC caret information. It will then be included with both [`rtc_client_connected`](#rtc_client_connected) and [`rtc_client_disconnected`](#rtc_client_disconnected) callbacks so that the lookup does not need to be repeated.

This provider function will be called once for each connecting client. Clients that reconnect may trigger a new call to the provider function rather than using cached data.

**Type:** `Function`

**Required:** no

#### Input fields for `rtc_user_details_provider`

| Field | Type | Description |
|-------|:----:|-------------|
| `userId` | `string` | User ID to resolve into user details. |

#### Fields to return from `rtc_user_details_provider`

| Field | Type | Description |
|-------|:----:|-------------|
| `fullName` | `string` | Full name of user. For example: `"John Doe"`. |
| any custom field | `any` | Extra user data for use in the [`rtc_client_connected`](#rtc_client_connected) api |

#### Example of providing static user details

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_user_details_provider: ({userId}) => Promise.resolve({ fullName: "John Doe" })
})
```

#### Example of providing user details from your server

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_user_details_provider: ({userId}) => {
    return fetch('/getUserDetails', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({userId})
    }).then(response => response.json());
  }
})
```

### `rtc_client_info`

The `rtc_client_info` option allows status flags from the local editor environment to be provided to other connecting clients via the [`rtc_client_connected`](#rtc_client_connected) API, for example "is the user on a mobile device". This configuration should not be used to communicate sensitive information; the authenticity of the data cannot be guaranteed.

This option accepts an object that must be serializable (`JSON.stringify` will be used to transmit it between clients).

**Type:** `Object`

**Required:** no

#### Example of client status information

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_client_details: { onMobile: true, region: 'us' }
})
```

### `rtc_client_connected`

This option allows applications to show when a user enters the RTC session. In combination with [`rtc_client_disconnected`](#rtc_client_disconnected) a user interface of connected users can be kept up to date.

Only one `rtc_client_connected` event will be fired per client connection. Connecting to a session with multiple existing clients will fire separate `rtc_client_connected` events for each existing client.

To help with generating a user interface for connected users, four pieces of data are provided:

#### User ID

This is the user's unique ID (the `sub` field from their [JWT](({{site.baseurl}}/rtc/jwt-authentication/)), which is also used for [`rtc_user_details_provider`](#rtc_user_details_provider)). Multiple connection events will be received with the same user ID if a user opens multiple sessions (for example on desktop and mobile).

#### User Details

This is a copy of the object returned by [`rtc_user_details_provider`](#rtc_user_details_provider). RTC only uses the `fullName` field, but the entire object will be cloned and passed to `rtc_client_connected`.

#### Client ID

This is a unique identifier, generated by the RTC protocol, that can be used to differentiate between the same user connecting multiple times.

#### Caret Number

This number corresponds to one of [the 8 colours defined in TinyMCE CSS](https://github.com/tinymce/tinymce/blob/master/modules/oxide/src/less/theme/content/rtc/rtc.less#L1-L8). TinyMCE supports 8 distinct caret colors. If more than 8 clients connect to a session, the numbers will be reused.


A custom skin is required to change these colours, and no more than 8 are supported in this release. For more information on creating a custom skin, see the [Customizing the Editor UI]({{site.baseurl}}/general-configuration-guide/customize-ui/) article.

#### Client information

This is a copy of the [`rtc_client_info`](#rtc_client_info) data from the remote user's editor configuration.

> **Caution**: client information data has no authenticity guarantee as it comes from a remote object. {{site.companyname}} recommends only using the client information data for status flags, to obtain authentic information leverage the [`rtc_user_details_provider`](#rtc_user_details_provider) API via the user details field.

**Type:** `Function`

**Required:** no

#### Input fields for `rtc_client_connected`

| Field | Type | Description |
|-------|:----:|-------------|
| `userId` | `string` | The user's unique ID |
| `userDetails` | `object` | User details object. If none is configured, this will be an empty object. |
| `clientId` | `string` | The unique ID for this client connection |
| `caretNumber` | `integer` | The user's caret number (1-8) |
| `clientInfo` | `object` | Additional client information. If none was configured, this will be an empty object. |

### `rtc_client_disconnected`

In combination with [`rtc_client_connected`](#rtc_client_connected) this allows a list of connected users to be kept up to date.

**Type:** `Function`

**Required:** no

#### Input fields for `rtc_client_disconnected`

The same as [`rtc_client_connected`](#rtc_client_connected)

### Example leveraging client connect and disconnect events with custom user details

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_user_details_provider: ({userId}) => Promise.resolve({ fullName: "John Doe", jobTitle: "Engineer" }),
  rtc_client_connected: ({userDetails: {fullName, jobTitle}, caretNumber}) =>
    console.log(`${jobTitle} ${fullName} connected with caret number ${caretNumber}`)
  rtc_client_disconnected: ({userId, clientId, caretNumber, clientInfo}) =>
    console.log('Disconnected', userId, clientId, caretNumber, clientInfo)
})
```