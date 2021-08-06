---
layout: default
title: Real-Time Collaboration configuration options
title_nav: Configuration options
description: List of all available RTC configuration options.
keywords: rtc configuration
---

> **Caution**: These configuration options are subject to change based on customer feedback. API compatibility is not guaranteed during the beta.

## Configuration style

The Real-Time Collaboration (RTC) plugin uses promise-based "provider" functions to support a variety of configuration scenarios including asynchronously fetching data from a server. Function input parameters are provided as an object, allowing unused fields to be omitted.

## Required configuration

The following options are required to use the Real-Time Collaboration (RTC) plugin:

* [`rtc_document_id`](#rtc_document_id)
* [`rtc_encryption_provider`](#rtc_encryption_provider)
* [`rtc_token_provider`](#rtc_token_provider)

For an example minimum configuration, see: [Examples of the minimum required configuration for the RTC plugin](#examplesoftheminimumrequiredconfigurationforthertcplugin).

### `rtc_document_id`

The RTC plugin requires a unique identifier for editor content to enable collaboration, known as the document ID. The identifier set by the integrator is used by the RTC server as a permanent reference for the content. {{site.companyname}} recommends using the same unique ID used by your server where possible, such as the unique page or document ID from a CMS.

> **Warning**: Do not reuse the document ID for different documents, otherwise content will be overwritten. Each document must have a unique identifier.

When a client (user) connects:
* If the document ID already exist, the most recent version of the content is sent to the client's editor.
* If the document ID does not exist, the client uploads new initial content as the first version of that document ID.

> **Warning**: If the content is changed outside of an RTC session, a new document ID must be generated. Changes made outside the RTC session will be overwritten by the content on the RTC server during the next collaboration session.

**Type:** `String`

**Required:** yes

### `rtc_encryption_provider`

The RTC plugin requires an encryption key for end-to-end encryption. This key is not sent to the {{site.cloudname}} server; the {{site.productname}} RTC service cannot read the editor content. The encryption key is used by the browser's [SubtleCrypto](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto) API to encrypt and decrypt editor content on the client.

A key is required when the client needs to:
1. Encrypt new data in the collaboration session.
2. Read previously written data from the collaboration session.

Suggestions on how to generate a secure encryption key and participate in key rotation are available in [Generating a secure encryption key]({{site.baseurl}}/rtc/encryption/#generatingasecureencryptionkey). To help with this process a customisable "key hint" is available.

#### Key Hint

If keys are never rotated this can be ignored. For advice on how to use the key hint to rotate encryption keys, see [Encryption key rotation and key hints]({{site.baseurl}}/rtc/encryption/#encryptionkeyrotationandkeyhints).

> **Warning**: Do not include secret or sensitive information in the key hint. The key hint is stored by the server in plain text.

**Type:** `Function`

**Required:** yes

#### Input fields for `rtc_encryption_provider`

| Field | Type | Description |
|-------|:----:|-------------|
| `documentId` | `string` | The document ID from the [`rtc_document_id`](#rtc_document_id) option |
| `keyHint` | `string` or `null` | Key hint returned by the client which opened the session, if connecting to an existing session. |

#### Return fields for `rtc_encryption_provider`

| Field | Type | Required? | Description |
|-------|:----:|:----:|-------------|
| `key` | `string` | required | Encryption key that is used to locally encrypt operations. This key needs to be the same for all connecting clients on the same session. |
| `keyHint` | `string` | optional | Key hint to provide to future clients to aid in key selection. It is only recorded when the input `keyHint` is `null`. (unicode, max 256 characters) |

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

## Recommended configuration

For the best user experience, {{site.companyname}} recommends including these configuration settings:

* [`rtc_server_disconnected`](#rtc_server_disconnected)
* [`rtc_user_details_provider`](#rtc_user_details_provider)

### `rtc_server_disconnected`

If the RTC session fails to connect, or is disconnected due to an error, the user will be blocked from editing (using [setProgressState]({{site.baseurl}}/api/tinymce/tinymce.editor/#setprogressstate)) along with an error notification:

![RTC disconnected error example]({{site.baseurl}}/images/rtc-error-example.png "RTC disconnected error example")

The `rtc_server_disconnected` callback can be used to provide an alternative response to this condition.

> **Caution**: It is critical to at least handle the `client_update_required` reason. This indicates the RTC plugin is out of date compared to other users on the session. The behavior in this scenario depends on the configuration:
> * If the `rtc_server_disconnected` is set, no message is displayed to the user for this error. It is up to the integrator to manage cleanly reloading the page.
> * If the `rtc_server_disconnected` is not set, the suggested error message will be displayed in a notification asking the user to reload the page.

**Type:** `Function`

**Required:** no

#### Input fields for `rtc_server_disconnected`

| Field | Type | Description |
|-------|:----:|-------------|
| `reason` | `string` | The cause of the disconnection. The value will be one of the reasons described below. |
| `message` | `string` | A suggested description for the error, translated into the active user interface language, suitable for displaying to a user. This string may contain HTML, and in some cases is the same string displayed in the editor notification. |

#### Reasons for disconnection

The `reason` field will have one of the following values.

`client_update_required`
: This error indicates the RTC plugin is out of date and cannot connect to an active session for the supplied `rtc_document_id`. This can happen on startup, but is more common at runtime during editor upgrades. The suggested message recommends the user reload the page.

`encryption`
: Indicates a failure on startup either in the cryptography process or `rtc_encryption_provider`. This usually means there is an error in the editor configuration.

`jwt`
: Indicates a problem with `rtc_token_provider`. Either the provider returned a rejected promise, the returned object structure was incorrect, or the token was invalid.

`content`
: Indicates a problem with `rtc_initial_content_provider`. Either the provider returned a rejected promise or the returned object structure was incorrect.

`general`
: A generic error for reasons that do not yet have a category. Details will be printed to the browser console.

#### Example of handling server disconnection

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_server_disconnected: ({reason, message}) => {
    console.log('Disconnected', reason, message);
    // perform some action in response to the RTC session disconnecting
  }
}
```

### `rtc_user_details_provider`

By default, a user's unique ID (the `sub` field from their [JWT](#rtc_token_provider)) will be displayed as their name in remote caret tooltips.

To display a descriptive name on the caret, the user ID needs to be resolved into user details that include the full user name. This resolution is done on each client to avoid sending any personal information through the RTC server.

Only the full name is required, but the whole object will be cloned and stored within the RTC caret information. It will then be included with both [`rtc_client_connected`](#rtc_client_connected) and [`rtc_client_disconnected`](#rtc_client_disconnected) callbacks so that the lookup does not need to be repeated.

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
| any custom field | `any` | Extra user data for use in the [`rtc_client_connected` API](#rtc_client_connected). |

#### Example of providing static user details

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_user_details_provider: ({userId}) => Promise.resolve({ fullName: "John Doe" })
})
```

#### Example of providing user details from your server

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
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

## Optional configuration

### `rtc_snapshot`

Real-time collaboration integrations regularly store the content, eliminating the need for a save button. The {{site.productname}} RTC plugin provides a version number to assist with storing the regular content snapshots. These snapshots are not stored by the {{site.cloudname}} and must be handled by the integrator.

For any given document ID, the server guarantees the version number will only increase. It can be safely used for conflict resolution. For each document ID and version combination the snapshot content is guaranteed to be identical.

The snapshot callback will be executed at regular intervals with access to the serialized editor content. The content is retrieved through a `getContent` function to reduce CPU load if the callback decides to not use the editor content.


**Type:** `Function`

**Required:** no

#### Input fields for `rtc_snapshot`

| Field | Type | Description |
|-------|:----:|-------------|
| `documentId` | `string` | The document ID from the [`rtc_document_id`](#rtc_document_id) option. |
| `version` | `integer` | An increasing version number, specific to the current document ID, between 0 and 2147483648 (2<sup>31</sup>). |
| `getContent` | `Function` | Render the content for this specific version to HTML. |

#### Example of getting content snapshots

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_snapshot: ({version, getContent}) => {
    console.log('Current version', version);
    console.log('HTML', getContent());
  }
}
```

### `rtc_initial_content_provider`

By default, the initial editor content is retrieved from the element targeted using the {{site.productname}} [`selector` option]({{site.baseurl}}/configure/integration-and-setup/#selector).

The `rtc_initial_content_provider` option allows alternative initial content be retrieved for a new RTC session. This option works with frameworks and integrations (such as the {{site.productname}} [integrations]({{site.baseurl}}/integrations/)) that don't provide access to the target element directly.

**Type:** `Function`

**Required:** no

### Input fields for `rtc_initial_content_provider`

| Field | Type | Description |
|-------|:----:|-------------|
| `documentId` | `string` | The document ID configured using the `rtc_document_id` option.

### Fields to return from `rtc_initial_content_provider`

| Field | Type | Description |
|-------|:----:|-------------|
| `content` | `string` | String containing the HTML to be imported into the editor when there is no active session. |

#### Example of providing static content

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_initial_content_provider: () => Promise.resolve({ content: "<p>Hello world!</p>" })
})
```

#### Example of providing dynamic content from the server

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
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

### `rtc_client_info`

The `rtc_client_info` option allows status flags from the local editor environment to be provided to other connecting clients, for example "is the user on a mobile device". This option should not be used to communicate sensitive information; the authenticity of the data cannot be guaranteed.

This option accepts an object that must be serializable (`JSON.stringify` will be used to transmit it between clients). Other clients receive a copy of this object in their [`rtc_client_connected`](#rtc_client_connected) events.

**Type:** `Object`

**Required:** no

#### Example of client status information

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_client_info: { onMobile: true, region: 'us' }
})
```

### `rtc_client_connected`

This option allows applications to show when a user enters the RTC session. When used in combination with [`rtc_client_disconnected`](#rtc_client_disconnected), a user interface of connected users can be kept up to date.

Only one `rtc_client_connected` event will be fired per client connection. Connecting to a session with multiple existing clients will fire separate `rtc_client_connected` events for each existing client.

**Type:** `Function`

**Required:** no

#### Input fields for `rtc_client_connected`

To help with generating a user interface for connected users, an object for user details is provided with the following fields:

- [User ID (`userId`)](#userid)
- [User Details (`userDetails`)](#userdetails)
- [Client ID (`clientId`)](#clientid)
- [Caret Number (`caretNumber`)](#caretnumber)
- [Client information (`clientInfo`)](#clientinformation)

##### User ID

| Field | Type |
|-------|:----:|
| `userId` | `string` |
{: style="width: auto;"}

This is the user's unique ID (the `sub` field from their [JWT](({{site.baseurl}}/rtc/jwt-authentication/)), which is also used for [`rtc_user_details_provider`](#rtc_user_details_provider)). Multiple connection events will be received with the same user ID if a user opens multiple sessions (for example on desktop and mobile).

##### User Details

| Field | Type |
|-------|:----:|
| `userDetails` | `object` |
{: style="width: auto;"}

This is a copy of the object returned by [`rtc_user_details_provider`](#rtc_user_details_provider). RTC only uses the `fullName` field, but the entire object will be cloned and passed to `rtc_client_connected`.

If a user details provider is not configured, this will be an empty object.

##### Client ID

| Field | Type |
|-------|:----:|
| `clientId` | `string` |
{: style="width: auto;"}

This is a unique identifier, generated by the RTC protocol, that can be used to differentiate between the same user connecting multiple times.

##### Caret Number

| Field | Type |
|-------|:----:|
| `caretNumber` | `integer` |
{: style="width: auto;"}

This will be a number between 1 and 8, corresponding to one of [the 8 colors defined in TinyMCE CSS](https://github.com/tinymce/tinymce/blob/master/modules/oxide/src/less/theme/content/rtc/rtc.less#L1-L8). TinyMCE supports 8 distinct caret colors. If more than 8 clients connect to a session, the numbers will be reused.

A custom skin is required to change these colors, and no more than 8 are supported in this release. For information on creating a custom skin, see: [Customizing the Editor UI]({{site.baseurl}}/general-configuration-guide/customize-ui/).

##### Client information

| Field | Type |
|-------|:----:|
| `clientInfo` | `object` |
{: style="width: auto;"}

This is a copy of the [`rtc_client_info`](#rtc_client_info) data from the remote user's editor configuration.

If none was configured, this will be an empty object.

> **Caution**: {{site.productname}} cannot guarantee the accuracy of data which comes from a remote object. {{site.companyname}} recommends only using the client information data for status flags. To obtain authentic client information, use the [`rtc_user_details_provider`](#rtc_user_details_provider) data returned through the `userDetails` field.

{% include rtc/client-connect-disconnect-example.md %}

### `rtc_client_disconnected`

The `rtc_client_disconnected` option can be used with the [`rtc_client_connected`](#rtc_client_connected) option to maintain a list of connected users.

**Type:** `Function`

**Required:** no

#### Input fields for `rtc_client_disconnected`

The same as [`rtc_client_connected`](#rtc_client_connected)

{% include rtc/client-connect-disconnect-example.md %}
