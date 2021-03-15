---
layout: default
title: RTC frequently asked questions and troubleshooting
title_nav: FAQ and Troubleshooting
description: Detailed answers to questions that might come up in RTC configuration.
keywords: rtc faq trouble troubleshoot troubleshooting bug
---

{% include misc/beta-note-rtc.md %}

This documentation is in progress. Please contact us with any suggestions you think should be here.

## FAQ

### Why is only the `sub` field required for JWT? Why not include full name and email as well?

At {{site.companyname}} we do not want to store any sensitive information on the RTC server in plain text. By keeping JWT claims to a minimum and relying on client-side resolution of user IDs no private data will ever be transmitted via the server without encryption.

### How do I generate a secure encryption key?

> **Caution**: these suggestions may not guarantee a secure connection. If data secrecy is important to you please consult a security professional.

Encryption security is a trade off between the complexity of generating a key and the risk of compromise should the key be disclosed to an unknown third party. Here are some suggested ways to generate keys, in increasing order of safety:

* Generate and store a fixed random key for each document in your database. Ignore the `keyHint` input field and return a fixed arbitrary `keyHint` value.
* Use a fixed random key for each document, and generate random salt data to provide a unique key for each session. Pass the salt data via `keyHint`.
* Store a global list of keys for your application, and use the document ID along with random data to salt the current key _on your server_ to produce a key unique to the document session. Do not return the salt data via `keyHint`; return an identifier that can be used to look up the unique key on the server.

### Encryption key rotation and key hints

The RTC configuration API has design elements to support key rotation. Keys cannot be rotated on demand; if this is important to you please contact us to discuss how we can best provide that functionality.

Document collaboration may be performed in multiple sessions, for example when a new version of TinyMCE is deployed it may be incompatible with existing sessions. Only one session will be active at a time but older sessions may still be used to bootstrap new sessions. As such, old keys cannot be immediately discarded when a new key is requested.


In order to allow for key rotation, a key hint is supplied so the provider may tell the difference between these two cases and act accordingly. If the key hint is `null`, then the client wants the "current" key and is happy to be issued a key different from any previously used. If the key hint is set, then the client is requesting a previously-issued key so that it can read the session history.

A specific key hint may be specified in the key response. If it is not, then an empty string will be sent when the client requests that key in future.

> **Caution**: the key hint is transmitted in plain text; do not store secret information in the key hint.

The key hint can be a key thumbprint, ID or other non-sensitive identifier that will help select the key e.g. a timestamp. It is only recorded when `keyHint` is `null` in the request.

### What happens if two clients attempt to establish a session at the same time, and how does that interact with encryption key generation?

As noted in the [Document ID configuration]({{site.baseurl}}/rtc/configuration/#rtc_document_id) setting, if a document ID is not known to the server new initial data will be uploaded. If two users manage to do this at the same time one will be forced to wait for the other to establish the session. This has implications for dynamic [rtc_encryption_provider]({{site.baseurl}}/rtc/configuration/#rtc_encryption_provider) configurations.

The connection process for the RTC plugin will be as follows:

* both plugins request a session for the document ID, and the server does not have an existing session.
* both plugins use the encryption provider to  encryption key with no key hint to encrypt the initial content.
* both plugins send a "create session" request to the server.
* one connection wins, and the other is rejected.
* the rejected connection waits for further instructions.
* once the winner completes establishing the session, the server broadcasts "new session available" to all clients connected for the same document ID. This message will include the key hint from the winning encryption key.
* the rejected connection uses this key hint to generate the same encryption key as the winning connection and collaboration begins.

The effect of all this is twofold:

1. If encryption keys are dynamic, old keys cannot be discarded immediately when a new key is generated
2. For any given key hint, the same encryption key must be returned every time

Care must be taken to avoid losing encryption keys to this race condition.


## Troubleshooting

### Server reports JWT authentication was issued in the future

JWT is a very strict protocol. If the computer that signs the JWT has a clock that is significantly ahead of the server clock, and tokens are signed on demand, this error can occur.

To resolve this issue ensure all computer clocks are synchronised using [NTP](https://en.wikipedia.org/wiki/Network_Time_Protocol) or a similar service.

