---
layout: default
title: Real-Time Collaboration (RTC) Encryption Setup
title_nav: Encryption Setup
description: Useful information for setting up encryption for RTC
keywords: rtc encrypt decrypt key rotate signature
---

{{site.productname}} Real-Time Collaboration (RTC) uses encryption keys to encrypt content before sending it to collaborators through the RTC server to provide end-to-end encryption. This is different from the use of JWTs for RTC, which are used to verify that your servers have allowed the user to access and collaborate on the content.

> **Caution**: The advice on this page does not guarantee a secure connection. If data secrecy is important for your users, please consult a security professional.

## Setting up an encryption endpoint

{{site.companyname}} is committed to protecting customer and end-user privacy through end-to-end encryption.

{{site.productname}} Real-Time Collaboration requires an encryption key:

- To encrypt content before a client sends it to the {{site.cloudname}} server.
- To decrypt content clients receive from the {{site.cloudname}} server.

{{site.productname}} clients use the encryption key, but do not transmit it to the {{site.cloudname}} servers.

### Encryption endpoint requirements

An encryption endpoint for {{pluginname}} requires:

- The endpoint or server accepts a JSON HTTP POST request.
- Accepts `documentId` and `keyHint`.
- Has access to a database containing `documentId` and the encryption details: `keyHint` and `key`.
- When provided a `documentId` and a non-null `keyHint`, the server determines if the pair matches any existing entries in the database and returns the `key` and rejects the request (access not permitted).
- Will generate new encryption keys and keyhints for new documents.
- The endpoint or server produces a JSON response with the `key` and `keyHint`. The RTC plugin will use the key to encrypt and decrypt the editor content prior to transmission to the RTC Server.

### Encryption key and keyHint requirements

The encryption `key`s and `keyHint`s for {{pluginname}}:

- Must both be strings.
- Can include any unicode characters, including emoji, such as: "`not a very secret 🔑`".
- The same `key` needs to be provided to all collaborators working on the same document (`documentId`).
- The `key` should be unique to the document (`documentId`).
- The `key`, `keyHint`, and the `documentId` should not contain personal or confidential information.

> **Warning**: Fixed keys are not secure. Fixed keys can be useful in development, but if a fixed key is disclosed it can be used to decrypt _every_ document uploaded to the {{site.cloudname}} server with that key.

## General advice on generating a secure encryption key

Encryption security is a trade off between:

- The complexity of generating a key, and
- The risk of compromise should the key be disclosed to an unknown third-party.

Methods generate keys include (in descending order of safety):

- Store a global list of keys for your application, and use the document ID along with random data to salt the key _on your server_ to produce a key unique to the document session. Do not send the salt data to any clients; use the `keyHint` and the `documentId` as an identifier that clients can use to request the unique key from the server.
- Use a fixed random key for each document, and generate random salt data to provide a unique key for each session. Pass the salt data to other clients through `keyHint`. The salt data will be stored as plain text by the RTC server, but the salt alone cannot be used to decrypt document data.
- Generate and store a fixed random key for each document in your database. Ignore both input and response `keyHint` fields.

## Encryption key rotation and key hints

> **Important**: The Real-Time Collaboration (RTC) configuration API is designed to support key rotation, but _keys cannot be rotated on demand_ at this time. If this is important to you, please contact {{site.companyname}} to discuss how we can best provide on-demand key rotation support.

Document collaboration may be performed in multiple sessions. For example, when a new version of {{site.productname}} is deployed it may be incompatible with existing sessions. Only one session will be active at a time but older sessions may still be used to bootstrap new sessions. As such, old keys cannot be discarded when a new key is requested.

To allow for key rotation a key hint is supplied so the encryption provider may tell the difference between these two cases and act accordingly. If the key hint is `null`, then the RTC protocol needs a new key and this is the opportunity for key rotation. If the key hint is not null the protocol is requesting a previously issued key so that it can read the session history.

If the key hint is not included in an encryption provider response for a new key, an empty string will be recorded as the key hint.

> **Warning**: The key hint is stored by the server in plain text. Do not add secret or sensitive information to the key hint.

The key hint can be a key thumbprint, ID, or other non-sensitive identifier that will help select the key, such as a timestamp. It is only recorded when the protocol requests a new key. Returning a keyHint from requests for previously issued keys will have no effect.
