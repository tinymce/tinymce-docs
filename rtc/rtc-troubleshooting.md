---
layout: default
title: Troubleshooting information for the RTC plugin
title_nav: RTC Troubleshooting
description: Useful information for troubleshooting issues with the RTC plugin.
keywords: rtc faq trouble troubleshoot troubleshooting bug
---

This documentation is in progress. Please contact us with any suggestions you think should be here.

## What happens if two clients attempt to establish a session at the same time? How does that impact on encryption key generation?

As noted in the [Document ID configuration option]({{site.baseurl}}/rtc/configuration/#rtc_document_id), if a document ID is not known to the server, new initial data will be uploaded. If two users manage to do this at the same time, one will be forced to wait for the other to establish the session. This has implications for configurations using a dynamic [`rtc_encryption_provider`]({{site.baseurl}}/rtc/configuration/#rtc_encryption_provider).

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

### Server reports JWT authentication was issued in the future

JWT is a very strict protocol. If the computer that signs the JWT has a clock that is significantly ahead of the server clock, and tokens are signed on demand, this error can occur.

To resolve this issue ensure all computer clocks are synchronised using [NTP](https://en.wikipedia.org/wiki/Network_Time_Protocol) or a similar service.
