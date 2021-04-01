---
layout: default
title: Encryption information for the RTC protocol
title_nav: RTC Encryption help
description: Useful information for understanding how encryption is used with RTC
keywords: rtc encrypt decrypt key rotate signature
---

This documentation is in progress. Please contact us with any suggestions you think should be here.

> **Caution**: The advice on this page may not guarantee a secure connection. If data secrecy is important to you please consult a security professional.

## Encryption keys are mandatory

RTC requires an encryption key so {{site.companyname}} can prove to ourselves (and any interested customers) that the RTC server does not store document content in a format that we are able to read. We are very focussed on privacy and end-to-end encryption for this feature.

## The difference between content encryption and JWT signing

Encryption is a two way process (encryption and decryption) that transforms data into an encrypted form. Modern encryption algorithms produce an output that is indistinguishable from random data without the decryption key. RTC performs symmetric encryption (meaning encryption and decryption use the same key) on all document content, but the key is never sent to the server. As the key only exists on the client endpoints, the term for this is end-to-end encryption.

Signing is a one way process where the data is not modified and can still be read by anyone. A signature is transmitted along with the data and can be used to validate the data has not been modified since it was approved by whoever has the signing key. RTC requires an [asymmetric signing algorithm]({{site.baseurl}}/rtc/jwt-authentication/#supportedalgorithms) for JWT identity tokens. Asymmetric signing uses a public/private key pair: signatures are created with the private key and verified using the public key. The public key stored on the Tiny Cloud servers can only be used to verify signatures, not create new ones, so it is quite safe for us to hold or cache without security implications should it be disclosed.

## Choosing an encryption key

RTC encryption keys can be any unicode string. {{site.companyname}} strongly recommends using secure keys when collaborating on private production data, but for test environments a simple fixed key is still valid. Our demo application for example uses the simple fixed key `"not a very secret 🔑"`.

### Fixed keys are not secure

Even simple keys provide some protection against data disclosure; for details on this see [RTC encryption details](#rtcencryptiondetails) below. Simple fixed keys can be a good way to get started with RTC but if a key is disclosed it can be used to access any document encrypted with that key. Fixed keys mean _every_ document can be decrypted if the key is disclosed.

## Generating a secure encryption key

Encryption security is a trade off between the complexity of generating a key and the risk of compromise should the key be disclosed to an unknown third party. Here are some suggested ways to generate keys, in descending order of safety:

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

> **Note**: This section contains the technical details of encryption used to securely transmit document contents. It is provided for information purposes only; understanding these details is not required to integrate RTC.

The RTC protocol does not use the [provided encryption key]({{site.baseurl}}/rtc/configuration#rtc_encryption_provider) to encrypt content directly. Using industry standard cryptography algorithms a unique session key for content encryption is derived from the provided key in a way that makes brute force decryption very difficult.

> **Note**: {{site.companyname}} is in the process of changing RTC encryption to [AES-KW](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/wrapKey) which does not require an initialization vector or protocol salt. The description below is still correct for the current beta release.

The RTC protocol encryption technique is as follows:
* 256 bits of random data are generated as the salt for each session. As described above, each document ID used for collaboration may have multiple sessions. The salt is generated with the [Crypto.getRandomValues()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) browser API and a `Uint8Array` of length 32 bytes.
* The salt data and the provided encryption key are combined using the [PBKDF2](https://en.wikipedia.org/wiki/PBKDF2) key derivation function. Derivation is performed by the [SubtleCrypto.deriveKey()](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/deriveKey) browser API, using the following parameters:
  * PBKDF2 [algorithm](https://developer.mozilla.org/en-US/docs/Web/API/Pbkdf2Params), with SHA-512 digest algorithm and 10000 iterations
  * AES-GCM [derivedKeyAlgorithm](https://developer.mozilla.org/en-US/docs/Web/API/AesKeyGenParams) with length 256
* The derived key is cached (in memory only) and used with [SubtleCrypto.encrypt()](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/encrypt) and [SubtleCrypto.decrypt()](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/decrypt) as necessary, specifying the [AES-GCM algorithm](https://developer.mozilla.org/en-US/docs/Web/API/AesGcmParams). For each encrypted message 96 bits of random data are used as the initialization vector, also generated with [Crypto.getRandomValues()](https://developer.mozilla.org/en-US/docs/Web/API/Crypto/getRandomValues) but this time using `Uint8Array` length 12. Each IV is transmitted alongside the encrypted message.
* The provided key and derived key are never transmitted between clients. Each client will already have the provided key, so only the salt needs to be transmitted for clients to recreate the derived key. The salt alone cannot be used to decrypt the document contents.
* When a session is established the provided `keyHint` and protocol-generated salt are sent to the server via a HTTPS websocket connection where they are stored in a database entry linked to the session. When subsequent clients connect to the session, the server sends these values along with other session information so the client can replicate the unique session key using [rtc_encryption_provider]({{site.baseurl}}/rtc/configuration#rtc_encryption_provider) and key derivation.

Our choice of encryption parameters results in an expensive derivation process even on 2021 hardware, but the derivation is only performed once by each client when connecting to a session. {{site.companyname}} is committed to security and privacy of customer data; we chose to favour increased security over derivation performance. Once derivation is complete, encryption and decryption will be hardware accelerated.