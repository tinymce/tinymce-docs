---
layout: default
title: Getting started with Real-Time Collaboration (RTC)
title_nav: Getting started with RTC
description: Getting started with RTC
keywords: rtc
---

{% assign pluginname = "Real-Time Collaboration (RTC)" %}
{% assign plugincode = "rtc" %}

This procedure will assist with setting up {{site.productname}} with real-time collaboration.

> **Important**: {% include misc/secure-context.md %}

The key steps required for setting up Real-Time Collaboration for {{site.productname}} are:

1. Register for a {{site.cloudname}} API key (paid plan required).
1. Add a public key to the {{site.cloudname}} API key.
1. Set up an Encryption Provider endpoint (or server).
1. Set up a JSON Web Token (JWT) Provider endpoint (or server).
1. Configure the required {{site.productname}} options.

## Register for a {{site.cloudname}} API key

If you do not have a {{site.cloudname}} API key with a paid subscription, you can sign up for a trial or purchase a subscription on the [{{site.companyname}} pricing page]({{site.pricingpage}}).

## Add a public key to the {{site.cloudname}} API key

The {{site.companyname}} RTC Server (Real-Time Collaboration Server) requires a _public_ key generated from the same _private_ key that will be used on your JSON Web Token (JWT) Provide server. The public key(s) stored on the RTC Server are used to ensure that content is only sent between authorized users.

There are two methods for generating and adding a public key to your API key:

1. The secure keypair generator at [{{site.accountpage}} - JWT Keys]({{site.accountpageurl}}/jwt/) (recommend).
1. Generate a keypair locally and add the _public_ key to [{{site.accountpage}} - JWT Keys]({{site.accountpageurl}}/jwt/).

### Generate a keypair using the {{site.accountpage}} JWT Keys page

The [{{site.accountpage}} - JWT Keys]({{site.accountpageurl}}/jwt/) page provides a private/public key generator. This generator will store a copy of the _public_ key, and provide a downloadable file for both the public and private keys. {{site.companyname}} does not store the _private_ key and the key-pair cannot be retrieved later.

### Generate a keypair locally

When generating a keypair locally, use one of the supported algorithms.
{% include auth/jwt-supported-algorithms.md %}

For instructions on generating a keypair locally, see: [Creating a private/public key pair for Tiny Cloud]({{site.baseurl}}/advanced/generate-rsa-key-pairs/).

Once a public key has been generated, add the public key to the {{site.cloudname}} API key at: [{{site.accountpage}} - JWT Keys]({{site.accountpageurl}}/jwt/).

## Set up an Encryption endpoint

For information on setting up an Encryption Provider endpoint, see: [Encryption for Real-Time Collaboration]({{site.baseurl}}/rtc/encryption/).

## Set up a JSON Web Token (JWT) Provider endpoint

For information on setting up a JSON Web Token Provider endpoint, see: [Real-Time Collaboration (RTC) JWT Authentication]({{site.baseurl}}/rtc/jwt-authentication/).

## Configure the required {{site.productname}} options

### Basic static Real-Time Collaboration (RTC) setup

This example shows how to add the Real-Time Collaboration (RTC) plugin and configure the required options using static values. This configuration may be useful for setting up an RTC-enabled editor for initial testing, but not for production environments.

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
    .then(response => response.json())
    .then(({keyId, secret}) => ({ key: secret, keyHint: keyId }))
    .catch(error => console.log('Failed to return encryption key\n' + error)),
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
    .then(response => response.json())
    .then(({ jwt }) => ({ token: jwt }))
    .catch(error => console.log('Failed to return a JWT\n' + error))
});
```

For details on the available configuration options, see: [Configuration Options]({{site.baseurl}}/rtc/configuration/).
