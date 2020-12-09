---
layout: default
title: Getting started with RTC
title_nav: Getting started
description: Getting started with RTC
keywords: rtc
---

{% assign beta_feature = "The RTC plugin" %}
{% assign pre-release_type = "Closed Beta" %}
{% include misc/beta-note.md %}

## Prerequisites

* A {{site.cloudname}} API key from [{{site.accountpage}}]({{site.accountsignup}}).
* A JSON Web Token (JWT) key generated at [{{site.accountpageurl}}]({{site.accountpageurl}}). Temporarily store the generated keys for use in the following procedure.

## Basic RTC setup

The following example shows how to get the RTC plugin up and running using hardcoded values. For a production setup, the document ID and secret would be retrieved from your server. This example also assumes that a JWT provider endpoint exists at '/jwt'. For information on setting up a JWT endpoint, see: [JWT authentication]({{site.baseurl}}/rtc/jwt-authentication/).

```js
const yourDocumentId = 'some-document-id';
const yourSecretKey = 'your secret key';

tinymce.init({
  selector: 'textarea',
  plugin: 'rtc',
  rtc_document_details_provider: () => Promise.resolve({ documentId: yourDocumentId }).
  rtc_encryption_provider: ({documentId, sessionId}) => {
    return Promise.resolve({ key: yourSecretKey });
  },
  rtc_token_provider: () => {
    return fetch('/jwt', {
      method: 'POST'
    });
  },
  rtc_snapshot: ({version, html}) => console.log(version, html)
})
```

### Additional resources

The following resources provide additional information on setting up the RTC plugin for {{site.productname}}.

* For information on JSON Web Tokens (JWT) and setting up JWT authentication for the RTC plugin, see: [JWT authentication]({{site.baseurl}}/rtc/jwt-authentication/).
* For details on the available configuration options, see: [Configuration Options]({{site.baseurl}}/rtc/configuration/).

## Need help?

{{site.companyname}} is striving to make RTC as useful and simple as possible. For support related issues, such as problems with JWT authentication and implementing RTC, contact [{{site.supportname}}]({{site.supporturl}}).
