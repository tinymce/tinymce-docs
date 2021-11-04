---
layout: default
title: Getting started with Real-time Collaboration (RTC)
title_nav: Getting started with RTC
description: Getting started with RTC
keywords: rtc
---

{% assign pluginname = "Real-time Collaboration (RTC)" %}
{% assign plugincode = "rtc" %}

{{site.requires_5_9v}}

This procedure will assist with setting up {{site.productname}} with real-time collaboration.

> **Important**: {% include misc/secure-context.md %}

The steps required for setting up Real-time Collaboration for {{site.productname}} are:

1. Register for a {{site.cloudname}} API key.
1. Add a public key to the {{site.cloudname}} API key.
1. Set up an Encryption Provider endpoint (or server).
1. Set up a JSON Web Token (JWT) Provider endpoint (or server).
1. Configure the required {{site.productname}} options.

## 1. Register for a Tiny Cloud API key

If you do not have a {{site.cloudname}} API key, you can sign up for a trial or purchase a subscription on the [{{site.companyname}} pricing page]({{site.pricingpage}}).

## 2. Add a public key to the {{site.cloudname}} API key

{% include auth/private-public-key-pairs-for-tiny-cloud-services.md %}

## 3. Set up an Encryption endpoint

{{site.productname}} Real-time Collaboration (RTC) uses encryption keys to encrypt content before sending it to collaborators through the RTC server to provide end-to-end encryption.

For information on setting up an Encryption Provider endpoint, see: [Real-time Collaboration (RTC) Encryption Setup]({{site.baseurl}}/rtc/encryption/).

## 4. Set up a JSON Web Token (JWT) Provider endpoint

Real-time Collaboration (RTC) requires setting up JSON Web Token (JWT) authentication. This is to ensure that only authenticated users will be able to access and collaborate on documents.

For information on setting up a JSON Web Token Provider endpoint, see: [Real-time Collaboration (RTC) JWT Authentication Setup]({{site.baseurl}}/rtc/jwt-authentication/).

## 5. Configure the required TinyMCE RTC options

### Basic static Real-time Collaboration (RTC) setup

This example shows how to add the Real-time Collaboration (RTC) plugin and configure the required options using static values. This configuration may be useful for setting up an RTC-enabled editor for initial testing, but not for production environments as it exposes your sensitive and private data.

{% include rtc/rtc-min-configuration-example.md %}

### Basic Dynamic configuration that fetches encryption keys and tokens from a server

This example is a minimal production setup, where the document ID, encryption secret, and JSON Web Token are dynamically retrieved from a server.

```js
tinymce.init({
  selector: 'textarea#rtc-example',
  plugins: 'rtc',
  /* Set the document ID as a string. */
  rtc_document_id: 'unique-document-id',
  /*
   * Provide a promise that retrieves an encryption key for the document
   * from a remote endpoint or server.
   */
  rtc_encryption_provider: ({documentId, keyHint}) =>
    fetch('/getKey', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ documentId, keyId: keyHint })
    })
    .then((response) => response.json())
    .then(({ keyId, secret }) => ({ key: secret, keyHint: keyId }))
    .catch((error) => console.log('Failed to return encryption key\n' + error)),
  /*
   * Provide a promise that retrieves a JSON Web Token for the user
   * from a remote endpoint or server.
   */
  rtc_token_provider: ({ documentId }) =>
    fetch('/getJwtToken', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ documentId }),
    })
    .then((response) => response.json())
    .then(({ jwt }) => ({ token: jwt }))
    .catch((error) => console.log('Failed to return a JWT\n' + error))
});
```

For details on the available configuration options, see: [Configuration Options]({{site.baseurl}}/rtc/configuration/).
