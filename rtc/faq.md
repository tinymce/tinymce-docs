---
layout: default
title: RTC frequently asked questions and troubleshooting
title_nav: FAQ and Troubleshooting
description: Detailed answers to questions that might come up in RTC configuration.
keywords: rtc faq trouble troubleshoot troubleshooting bug
---

{% include misc/beta-note-rtc.md %}

## Why is only the `sub` field required for JWT? Why not include full name and email as well?

At {{site.companyname}} we do not want to store any sensitive information on the RTC server. By keeping JWT claims to a minimum and relying on client-side resolution of user ID no private data needs to be transmitted via the server.