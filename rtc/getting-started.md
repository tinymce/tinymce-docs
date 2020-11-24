---
layout: default
title: Getting started with RTC
title_nav: Getting started
description: Getting started with RTC
keywords: rtc
---

> Requirements
> 1. Register for an API key at [{{site.accountpage}}]({{site.accountsignup}})
> 2. Generate a JWT key at [{{site.accountpage}}]({{site.accountpageurl}})
> 3. Store these keys temporarily, you will need them later.
> Do this before proceeding and it will go a lot smoother

## Simplest form of setup to get RTC up and running

This is the most simple way to get the RTC plugin up and running using hard coded values. In a proper setup the document id and secret would be retrieved from your server. This examples also assumes that a JWT provider endpoint exists at '/jwt' see the [JWT authentication]({{site.baseurl}}/rtc/jwt-authentication/) page for details on how to set that up.

```js
const myDocumentId = 'some-document-id';
const mySecretKey = 'your secret 🔑';

tinymce.init({
  selector: 'textarea',
  plugin: 'rtc',
  rtc_document_details_provider: () => Promise.resolve({ documentId }).
  rtc_encryption_provider: ({documentId, sessionId}) => {
    return Promise.resolve({ key: mySecretKey });
  },
  rtc_token_provider: () => {
    return fetch('/jwt', {
      method: 'POST'
    });
  },
  rtc_snapshot: ({version, html}) => console.log(version, html)
})
```

#### Additional resources

Go through the following additional resources to figure out how to configure RTC.

- We recommend reading up and trying to understand how [JWT authentication]({{site.baseurl}}/rtc/jwt-authentication/) works.
- [Configuration Options]({{site.baseurl}}/rtc/configuration/)

## Need help? ##

{{site.companyname}} is striving to make RTC as useful and simple as possible. For support related issues such as problems with JWT authentication and implementing RTC contact [{{site.supportname}}]({{site.supporturl}}).
