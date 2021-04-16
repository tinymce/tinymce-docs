---
layout: default
title: Understanding encryption for RTC
title_nav: RTC Encryption help
description: Useful information for understanding how encryption is used with RTC
keywords: rtc encrypt decrypt key rotate signature
---

This documentation is in progress. Please contact us with any suggestions you think should be here.

> **Caution**: The advice on this page does not guarantee a secure connection. If data secrecy is important for your users, please consult a security professional.

## Encryption keys are mandatory

{{site.companyname}} is committed to protecting customer and end-user privacy through end-to-end encryption.

{{site.productname}} Real-Time Collaboration requires an encryption key:

- To encrypt content before a client sends it to the {{site.cloudname}} server.
- To decrypt content clients receive from the {{site.cloudname}} server.

{{site.productname}} clients use the encryption key but do not transmit it to the {{site.cloudname}} servers. {{site.companyname}} **will never have the key to decrypt document content**.

## The difference between content encryption and JWT signing

Encrypted data is indistinguishable from random data without the decryption key. The RTC plugin performs client-side symmetric encryption (using the same key for encryption and decryption) on the editor content. The encryption key is provided to the client by your server, and is never sent to the {{site.cloudname}} servers; that is end-to-end encryption.

JWT signing does not modify data, and the data can be read by anyone (the data is not encrypted). A JWT signature is transmitted along with the data and is used to validate that the data was not modified after the JWT was created. RTC requires an [asymmetric signing algorithm]({{site.baseurl}}/rtc/jwt-authentication/#supportedalgorithms) for JWT identity tokens. Asymmetric signing uses a public/private key pair: signatures are created with the private key and verified using the public key. The public key stored on the {{site.cloudname}} servers can only be used to verify signatures, not create new ones. This allows the {{site.cloudname}} server to verify that the data contained in the JWT has not been tampered with and is an authentic statement of identity from your server.

## Choosing an encryption key

{{site.companyname}} recommends using secure keys for production environments. RTC encryption keys are a string of unicode characters, and can include emoji, such as: "`not a very secret 🔑`".

For test environments, a fixed key can be used. However, in a production environment, encryption keys should be rotated to improve data protection.

### Fixed keys are not secure

Simple, fixed encryption keys provide minimal protection against data disclosure; for details see: [RTC encryption details](#rtcencryptiondetails). Simple fixed keys can be a good way to get started with RTC, but if a fixed key is disclosed it can be used to decrypt _every_ document uploaded to the {{site.cloudname}} server with that key.

## Generating a secure encryption key

Encryption security is a trade off between: the complexity of generating a key, and the risk of compromise should the key be disclosed to an unknown third-party. Methods generate keys include (in descending order of safety):

* Store a global list of keys for your application, and use the document ID along with random data to salt the key _on your server_ to produce a key unique to the document session. Do not send the salt data to any clients; use `keyHint` to pass around an identifier that clients can use to request the unique key from the server.
* Use a fixed random key for each document, and generate random salt data to provide a unique key for each session. Pass the salt data to other clients through `keyHint`. The salt data will be stored as plain text by the RTC server, but the salt alone cannot be used to decrypt document data.
* Generate and store a fixed random key for each document in your database. Ignore both input and response `keyHint` fields.

## Encryption key rotation and key hints

The RTC configuration API is designed to support key rotation. Keys cannot be rotated on demand; if this is important to you, please contact {{site.companyname}} to discuss how we can best provide that functionality.

Document collaboration may be performed in multiple sessions. For example, when a new version of {{site.productname}} is deployed it may be incompatible with existing sessions. Only one session will be active at a time but older sessions may still be used to bootstrap new sessions. As such, old keys cannot be immediately discarded when a new key is requested.

In order to allow for key rotation a key hint is supplied so the encryption provider may tell the difference between these two cases and act accordingly. If the key hint is `null`, then the RTC protocol needs a new key and this is the opportunity for key rotation. If the key hint is not null the protocol is requesting a previously issued key so that it can read the session history.

If the key hint is not included in an encryption provider response for a new key, an empty string will be recorded as the key hint.

> **Warning**: The key hint is stored by the server in plain text. Do not add secret or sensitive information to the key hint.

The key hint can be a key thumbprint, ID, or other non-sensitive identifier that will help select the key, such as a timestamp. It is only recorded when the protocol requests a new key. Returning a key hint from requests for previously issued keys will have no effect.

## RTC encryption details

> **Note**: This section contains the technical details of the encryption used to securely transmit document content. It is provided for information purposes only; an understanding these details is not required to use the RTC plugin.

The RTC plugin does not use the [provided encryption key]({{site.baseurl}}/rtc/configuration#rtc_encryption_provider) to encrypt content directly. The plugin derives a unique session key from the provided key using industry standard cryptography algorithms. This method of content encryption improves protection against brute force decryption.

> **Note**: {{site.companyname}} is in the process of changing the RTC encryption method to [AES-KW](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/wrapKey), which does not require an initialization vector or protocol salt. The description below is still correct for the current beta release.

The RTC protocol encryption technique is as follows:
* As described above, each document ID used for collaboration may have multiple sessions. To ensure each session has a unique key, 256 bits of random data are generated as the salt for each session. The salt is generated using the [`Crypto.getRandomValues()`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) browser API and a 32 byte [`Uint8Array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array).
* The salt data and the provided encryption key are combined using a [PBKDF2](https://tools.ietf.org/html/rfc2898#section-5.2) key derivation function. Derivation is performed by the [SubtleCrypto.deriveKey()](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveKey) browser API, using the following parameters:
  * PBKDF2 [algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Pbkdf2Params), with SHA-512 digest algorithm and 10000 iterations,
  * AES-GCM [derivedKeyAlgorithm](https://developer.mozilla.org/en-US/docs/Web/API/AesKeyGenParams) with a length of 256.
* The derived key is cached (in memory only) and used with [SubtleCrypto.encrypt()](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt) and [SubtleCrypto.decrypt()](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/decrypt) as necessary, specifying the [AES-GCM algorithm](https://developer.mozilla.org/en-US/docs/Web/API/AesGcmParams). For each encrypted message, 96 bits of random data are used as the initialization vector, also generated with [Crypto.getRandomValues()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) but this time using a 12 byte `Uint8Array`. The initialization vector is transmitted alongside the encrypted message.
* When a real-time collaboration session is established, the provided [`keyHint`]({{site.baseurl}}/rtc/configuration#keyhint) and protocol-generated salt are sent to the server through a HTTPS websocket connection, where they are stored as session metadata. When subsequent clients connect to the session, the server sends these values along with other session information so the client can derive the same unique key.
* The provided key and derived key are never transmitted between clients. Each client will already have the provided key through the [rtc_encryption_provider]({{site.baseurl}}/rtc/configuration#rtc_encryption_provider) configuration, so only the salt needs to be transmitted for clients to derive the unique key. The salt alone cannot be used to decrypt the document content.


Our choice of encryption parameters results in an expensive derivation process, even on modern hardware, but the derivation is only performed once by each client when connecting to a session. {{site.companyname}} is committed to the security and privacy of customer data, and {{site.companyname}} has prioritized increased security over derivation performance. Once derivation is complete, encryption and decryption will be hardware accelerated.
