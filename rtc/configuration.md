---
layout: default
title: RTC configuration
title_nav: Configuration options
description: List of all available RTC configuration options.
keywords: rtc configuration
---

{% include misc/beta-note-rtc.md %}

> **Note**: These configuration options are subject to change based on customer feedback. API compatibility is not guaranteed during beta.

## Required options

The following options are required for the RTC plugin:

* [`rtc_document_details_provider`](#rtc_document_details_provider)
* [`rtc_encryption_provider`](#rtc_encryption_provider)
* [`rtc_token_provider`](#rtc_token_provider)

## `rtc_document_details_provider`

The RTC plugin needs to know the identifier for the content before collaboration can begin. We call this the document ID.

### Document ID

Each document must have a unique ID. This ID is used to determine whether a client connecting to the server should retrieve the existing content or send new initial content. As such it is essential that items of content never share a Document ID.

If your server stores a unique ID for each item of content that would be ideal to use as the document ID.

**Type:** `Function`

**Required:** yes

### Return fields for `rtc_document_details_provider`

| Field | Type | Description |
|-------|:----:|-------------|
| `documentId` | `string` | Unique identifier for the document. In a content management system, this could be the resource identifier for the document. |

### Example Using the document details provider to return static document details

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_document_details_provider: () => {
    return Promise.resolve({ documentId: "your-document-id" })
  }
})
```

### Example Using the document details provider to return document details from your server

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_document_details_provider: () => {
    return fetch('http://yourserver/getDocumentId', {
      method: 'POST'
    })
    .then(response => response.json())
    .then(documentId => ({ documentId });
  }
})
```

## `rtc_encryption_provider`

The RTC plugin requires an encryption key for end-to-end encryption. This key is not sent to the {{site.cloudname}} server; the {{site.productname}} RTC service cannot read the editor content. The encryption key is used by the browser's [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) API to encrypt and decrypt editor content on the client.

To help generate a secure encryption key, three pieces of data are provided:

### Document ID
For more information about Document IDs, see [`rtc_document_details_provider`](#rtc_document_details_provider) above.

### New Key
Document collaboration may be performed in multiple sessions, for example when a new version of TinyMCE is deployed it may be incompatible with existing sessions.

In order to support key rotation a new key is requested when creating a new collaboration session with the server. This will always be `false` when connecting to an existing session.

If keys are never rotated this can be ignored.

### Key Hint
In order to support key rotation, a key hint can be provided along with new encryption keys. Future connections to the collaboration session will then be provided with a copy of the key hint to ensure they are able to generate a matching key.

> **Caution**: the key hint is transmitted in plain text; do not store secret information in the key hint.

The key hint can be a key thumbprint, ID or other non-sensitive identifier that will help select the key e.g. a timestamp. It is only recorded when opening a new session.

**Type:** `Function`

**Required:** yes

### Input fields for `rtc_encryption_provider`

| Field | Type | Description |
|-------|:----:|-------------|
| `documentId` | `string` | The active document unique ID returned by [`rtc_document_details_provider`](#rtc_document_details_provider). |
| `newKey` | `boolean` | Indicates whether this is a new key request or a connection to an existing session. |
| `keyHint` | `string` or `undefined` | Key hint (e.g. salt data) provided by the client which opened the session, if connecting to an existing session. |

### Return fields for `rtc_encryption_provider`

| Field | Type | Required? | Description |
|-------|:----:|:----:|-------------|
| `key` | `string` | required | Encryption key that is used to locally encrypt operations. This key needs to be the same for all connecting clients on the same session. |
| `keyHint` | `string` | optional | Optional key hint to provide to future clients to aid in key selection. It is only recorded when opening a new session. (unicode, max 256 characters) |

### Suggested ways to generate a secure encryption key

> **Caution**: this is not guaranteed security advice, if data secrecy is important to you please consult a security professional.

Encryption security is a trade off between the complexity of generating a key and the risk of compromise should the key be disclosed to an unknown third party. Here are some suggested ways to generate keys, in increasing order of safety:

* Generate and store a fixed random key for each document in your database. Ignore `newKey` and `keyHint`.
* Use a fixed random key for each document, and salt this key with random data to provide a unique key for each session. Return the salt data via `keyHint`.
* Store a global list of keys for your application, and use the document ID along with random data to salt the current key _on your server_ to produce a key unique to the document session. Do not return the salt data via `keyHint`; return an identifier that can be used to look up the unique key on the server.

### Example of providing static encryption details

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_encryption_provider: ({documentId, sessionId}) => {
    return Promise.resolve({
      key: "your shared encryption key"
    });
  }
})
```

### Example of providing encryption details from your server

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_encryption_provider: ({documentId, sessionId, keyHint}) => {
    return fetch('http://yourserver/getKey', {
      method: 'POST',
      body: JSON.stringify({ documentId, sessionId, keyId: keyHint })
    })
    .then(response => response.json())
    .then(({keyId, secret}) => ({ key: secret, keyHint: keyId });
  }
})
```

## `rtc_token_provider`

The RTC plugin and service uses [JWT]({{site.baseurl}}/rtc/jwt-authentication/) to authenticate the user. The user's token should include a unique user ID and a relative expiration time. This provider function will be called multiple times to refresh the token if it's about to expire. For production usage, we recommend the token provider be a dynamic request that produces a new JWT token with an updated `exp` claim.

**Type:** `Function`

**Required:** yes

### Required JWT claims

| Field | Type | Description |
|-------|:----:|-------------|
| `sub` | `string` | The unique user ID (If `sub` is the same for two clients, the server will trust them as if they are the same user). |
| `exp` | `integer` | The timestamp when the token expires. |

### Return fields for `rtc_token_provider`

| Field | Type | Description |
|-------|:----:|-------------|
| `token` | `string` | A generated JWT token. This token should be signed with a private key as described in [JWT authentication]({{site.baseurl}}/rtc/jwt-authentication/). |

### Example of providing a static JWT token

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_token_provider: () => Promise.resolve({ token: "your-jwt-token" })
})
```

### Example of providing a JWT token from your server

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_token_provider: () => {
    return fetch('http://yourserver/getJwtToken', {
      method: 'POST'
    })
    .then(response => response.json())
    .then(token => ({ token });
  }
})
```

## `rtc_snapshot`

Real-time collaboration sessions don't typically have a save button and the session is constantly stored. Responsibility for content storage is left up to the integrator; a version number is provided to aid conflict resolution. For each document ID and version combination the snapshot content is guaranteed to be identical.

The snapshot callback will be executed at regular intervals with access to the serialized editor content. The content is retrieved though a `getContent` function to reduce CPU load if the callback decides to not use the editor content.

**Type:** `Function`

**Required:** no

### Input fields for `rtc_snapshot`

| Field | Type | Description |
|-------|:----:|-------------|
| `documentId` | `string` | The active document unique ID returned by [`rtc_document_details_provider`](#rtc_document_details_provider). |
| `version` | `integer` | An increasing version number between 0 and 2147483648 (2<sup>31</sup>). |
| `getContent()` | `string` | Function to execute to get the content for that particular version. |

### Example of getting content snapshots

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

## `rtc_initial_content_provider`

By default, the initial editor content is retrieved from the target element using normal TinyMCE content loading. For more information on this, see the [TODO link to doc] documentation.

As an alternative to this, the RTC plugin provides a `rtc_initial_content_provider` option to allow the initial content be retrieved for a new RTC session. This also works better with the various {{site.productname}} [integrations]({{site.baseurl}}/integrations/) that don't provide access to the target element directly.

**Type:** `Function`

**Required:** no

### Input fields for `rtc_snapshot`

| Field | Type | Description |
|-------|:----:|-------------|
| `documentId` | `string` | The active document unique ID returned by [`rtc_document_details_provider`](#rtc_document_details_provider). |


### Return fields for `rtc_initial_content_provider`

| Field | Type | Description |
|-------|:----:|-------------|
| `content` | `string` | String containing the HTML to be imported into the editor when there is no active session. |

### Example of providing static content

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_initial_content_provider: () => Promise.resolve({ content: "<p>Hello world!</p>" })
})
```

### Example of providing dynamic content from the server

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_initial_content_provider: ({documentId}) => {
    return fetch(`http://yourserver/getContent/${documentId}`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    }).then(response => response.json());
  }
})
```

## `rtc_custom_user_details`

The `rtc_custom_user_details` option allows extra details to be provided about the current user to the other connecting clients. This option should not be used to communicate sensitive information; the authenticity of user data cannot not guaranteed.

This API is designed for status flags such as "is the user on a mobile device".

This option accepts an object that must be serializable (`JSON.stringify` will be used to transmit it between clients).

**Type:** `Object`

**Required:** no

### Example of providing custom user details

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_custom_user_details: { onMobile: true, region: 'us' }
})
```

## `rtc_user_details_provider`

By default, a user's unique ID (the `sub` field from their [JWT](#rtc_token_provider)) will be displayed as their name on remote carets shown to other collaborators.

To display an alternative name on the caret the user ID needs to be resolved into user details that include the full user name. This resolution is done on the client side to avoid storing user details in the RTC server.

This provider function will be called for each connecting client. If this option is omitted, the user ID will be presented as the name for the remote user when a user hovers over the remote carets.

**Type:** `Function`

**Required:** no

### Input fields for `rtc_user_details_provider`

| Field | Type | Description |
|-------|:----:|-------------|
| `userId` | `string` | User ID to resolve into user details. |

### Return fields for `rtc_user_details_provider`

| Field | Type | Description |
|-------|:----:|-------------|
| `fullName` | `string` | Full name of user. For example: `"John Doe"`. |

### Example of providing static user details

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_user_details_provider: ({userId}) => Promise.resolve({ fullName: "John Doe" })
})
```

### Example of providing user details from your server

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_user_details_provider: ({userId}) => {
    return fetch('http://yourserver/getUserDetails', {
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

## `rtc_user_connected`

This option allows applications to show when a user enters the RTC session. In combination with [`rtc_user_disconnected`](#rtc_user_disconnected) this allows a list of connected users to be kept up to date.

There are 8 distinct caret colors (given a value from 1 to 8). If more than 8 people connect to a session, the numbers will be reused.

Along with the user ID and caret number this function a copy of the [`rtc_custom_user_details`](#rtc_custom_user_details) data from the user's editor configuration.

> **Caution**: only `userId` is guaranteed to be authentic as it comes from the JWT. {{site.companyname}} suggests using `userId` to fetch the user data from your server to guarantee authenticity, and only using the custom fields for status flags.

**Type:** `Function`

**Required:** no

### Input fields for `rtc_user_connected`

| Field | Type | Description |
|-------|:----:|-------------|
| `userId` | `string` | The user's unique ID (the `sub` field from their [JWT](#rtc_token_provider)) |
| `caretNumber` | `integer` | The user's caret number (1-8) |
| `custom` | `object` | Additional data provided by [`rtc_custom_user_details`](#rtc_custom_user_details) when the user connected to the session. If none was provided, this will be an empty object. |

### Example of providing custom user details for `rtc_user_connected`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_user_connected: ({userId, caretNumber, custom}) => {
    console.log('Connected', userId, caretNumber, custom);
  }
})
```

## `rtc_user_disconnected`

In combination with [`rtc_user_connected`](#rtc_user_connected) this allows a list of connected users to be kept up to date.

**Type:** `Function`

**Required:** no

### Input fields for `rtc_user_disconnected`

| Field | Type | Description |
|-------|:----:|-------------|
| `userId` | `string` | The user's unique ID (the `sub` field from their [JWT](#rtc_token_provider)) |
| `caretNumber` | `integer` | The user's caret number (1-8) |
| `custom` | `object` | Additional data provided by [`rtc_custom_user_details`](#rtc_custom_user_details) when the user connected to the session. If none was provided, this will be an empty object. |

### Example of providing custom user details for `rtc_user_disconnected`

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_user_disconnected: ({userId, caretNumber, custom}) => console.log('Disconnected', userId, caretNumber);
})
```
