---
layout: default
title: Encryption for Real-Time Collaboration
title_nav: RTC Encryption help
description: Useful information for understanding how encryption is used with RTC
keywords: rtc encrypt decrypt key rotate signature
---

> **Caution**: The advice on this page does not guarantee a secure connection. If data secrecy is important for your users, please consult a security professional.

## Encryption keys are mandatory

{{site.companyname}} is committed to protecting customer and end-user privacy through end-to-end encryption.

{{site.productname}} Real-Time Collaboration requires an encryption key:

- To encrypt content before a client sends it to the {{site.cloudname}} server.
- To decrypt content clients receive from the {{site.cloudname}} server.

{{site.productname}} clients use the encryption key but do not transmit it to the {{site.cloudname}} servers. {{site.companyname}} **will never have the key to decrypt document content**.

## The difference between content encryption and JWT signing

Encrypted data is indistinguishable from random data without the decryption key. The Real-Time Collaboration (RTC) plugin performs client-side symmetric encryption (using the same key for encryption and decryption) on the editor content. The encryption key is provided to the client by your server, and is never sent to the {{site.cloudname}} servers; providing end-to-end encryption.

JWT signing does not modify data, and the data can be read by anyone (the data is not encrypted). A JWT signature is transmitted along with the data and is used to validate that the data was not modified after the JWT was created. RTC requires an [asymmetric signing algorithm]({{site.baseurl}}/rtc/jwt-authentication/#supportedalgorithms) for JWT identity tokens. Asymmetric signing uses a public/private key pair: signatures are created with the private key and verified using the public key. The public key stored on the {{site.cloudname}} servers can only be used to verify signatures, not create new ones. This allows the {{site.cloudname}} server to verify that the data contained in the JWT has not been tampered with and is an authentic statement of identity from your server.

## Choosing an encryption key

{{site.companyname}} recommends using secure keys for production environments. Real-Time Collaboration (RTC) encryption keys are a string of unicode characters, and can include emoji, such as: "`not a very secret 🔑`".

For test environments, a fixed key can be used. However, in a production environment, encryption keys should be rotated to improve data protection.

### Fixed keys are not secure

Simple, fixed encryption keys provide minimal protection against data disclosure; for details see: [RTC encryption details](#rtcencryptiondetails). Simple fixed keys can be a good way to get started with RTC, but if a fixed key is disclosed it can be used to decrypt _every_ document uploaded to the {{site.cloudname}} server with that key.

## Generating a secure encryption key

Encryption security is a trade off between: the complexity of generating a key, and the risk of compromise should the key be disclosed to an unknown third-party. Methods generate keys include (in descending order of safety):

* Store a global list of keys for your application, and use the document ID along with random data to salt the key _on your server_ to produce a key unique to the document session. Do not send the salt data to any clients; use `keyHint` to pass around an identifier that clients can use to request the unique key from the server.
* Use a fixed random key for each document, and generate random salt data to provide a unique key for each session. Pass the salt data to other clients through `keyHint`. The salt data will be stored as plain text by the RTC server, but the salt alone cannot be used to decrypt document data.
* Generate and store a fixed random key for each document in your database. Ignore both input and response `keyHint` fields.

## Encryption key rotation and key hints

The Real-Time Collaboration (RTC) configuration API is designed to support key rotation. Keys cannot be rotated on demand; if this is important to you, please contact {{site.companyname}} to discuss how we can best provide that functionality.

Document collaboration may be performed in multiple sessions. For example, when a new version of {{site.productname}} is deployed it may be incompatible with existing sessions. Only one session will be active at a time but older sessions may still be used to bootstrap new sessions. As such, old keys cannot be immediately discarded when a new key is requested.

In order to allow for key rotation a key hint is supplied so the encryption provider may tell the difference between these two cases and act accordingly. If the key hint is `null`, then the RTC protocol needs a new key and this is the opportunity for key rotation. If the key hint is not null the protocol is requesting a previously issued key so that it can read the session history.

If the key hint is not included in an encryption provider response for a new key, an empty string will be recorded as the key hint.

> **Warning**: The key hint is stored by the server in plain text. Do not add secret or sensitive information to the key hint.

The key hint can be a key thumbprint, ID, or other non-sensitive identifier that will help select the key, such as a timestamp. It is only recorded when the protocol requests a new key. Returning a key hint from requests for previously issued keys will have no effect.
