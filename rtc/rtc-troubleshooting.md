---
layout: default
title: Troubleshooting information for the Real-time Collaboration (RTC) plugin
title_nav: RTC Troubleshooting
description: Useful information for troubleshooting issues with the RTC plugin.
keywords: rtc faq trouble troubleshoot troubleshooting bug
---

{% include rtc/admon-rtc-eol.md %}

This documentation is in progress. Please contact us with any suggestions you think should be here.

## Common error messages

### RTC services require a secure context

{% include misc/secure-context.md %}

## What happens if two clients attempt to establish a session at the same time? What impact does that have on encryption key generation?

As noted in the [Document ID configuration option]({{site.baseurl}}/rtc/configuration/rtc-options-required/#rtc_document_id), if a document ID is not known to the server, new initial data will be uploaded. If two users manage to do this at the same time, one will be forced to wait for the other to establish the session. This has implications for configurations using a dynamic [`rtc_encryption_provider`]({{site.baseurl}}/rtc/configuration/rtc-options-required/#rtc_encryption_provider).

If the situation occurs, the connection process for the RTC plugin will be as follows:

1. Both plugins request a session for the document ID, and the server does not have an existing session.
1. Both plugins use the encryption provider to produce an encryption key with no key hint to encrypt the initial content.
1. Both plugins send a "create session" request to the server.
1. One connection "wins", and the other is "rejected".
1. The rejected connection waits for further instructions.
1. Once the winner completes establishing the session, the server broadcasts "new session available" to all clients connected for the same document ID. This message will include the key hint from the winning encryption key.
1. The rejected connection uses this key hint to generate the same encryption key as the winning connection and collaboration begins.

As a result of this process:

1. If encryption keys are dynamic, old keys cannot be discarded immediately when a new key is generated.
2. For any given key hint, the same encryption key must be returned every time.

Care must be taken to avoid losing encryption keys to this race condition.

## Common JWT error messages

If the below error descriptions do not solve the problem, try pasting the token into the [https://jwt.io/ Debugger](https://jwt.io/#debugger-io) for detailed token-format debugging.

### Unsupported JWT signature algorithm

RTC requires an _asymmetric signing algorithm_ for JWT identity tokens. Asymmetric signatures use separate private and public keys; the public key stored on the {{site.cloudname}} server can only be used to verify signatures, not create new ones. The private key, used to create new signatures, remains private.

For a list of supported algorithms, see: [RTC JWT Authentication - Supported algorithms]({{site.baseurl}}/rtc/jwt-authentication/#supportedalgorithms).

### Time-based error messages

Time-based errors include:

* JWT was issued in the future
* JWT has expired
* JWT is not yet valid

If the system clock on the device that signs JWTs is incorrect, the {{site.cloudname}} server may return one of these errors. RTC only requires the `exp` claim as an expiration timestamp, but other optional timestamp claims can be used to protect a token from misuse. If the client or server clocks are significantly different, time-based errors may occur.

To resolve this issue ensure all computer clocks are synchronised using [NTP](https://en.wikipedia.org/wiki/Network_Time_Protocol) or a similar service.

### Unable to retrieve JWK set

A "JWK set" is a structure that contains public keys for validating JWT signatures. At least one public key in the set must match the private key used to sign the provided identity token for RTC. This error means a public key could not be found in the {{site.cloudname}} account of the {{site.companyname}} API key used to load the RTC plugin. For information on creating public/private key pairs, see: [JWT Authentication]({{site.baseurl}}/rtc/jwt-authentication/#privatepublickeypairsfortinycloudservices).

### Errors related to "parts"

A number of part-related errors can be raised if the JWT fails to decode:

* Not enough parts
* A part was not correctly base64 encoded
* A part was not valid JSON
* The header part does not specify an algorithm
* The payload part does not contain all [required claims]({{site.baseurl}}/rtc/jwt-authentication/#claims)
