---
layout: default
title: Real-time Collaboration (RTC) JWT Authentication Setup
title_nav: JWT Authentication Setup
description: Guide on how to setup JWT Authentication for RTC
keywords: jwt authentication
---

{% assign pluginname = "Real-time Collaboration (RTC)" %}
{% assign plugincode = "rtc" %}
{% include rtc/admon-rtc-eol.md %}

## Introduction

Real-time Collaboration (RTC) requires setting up JSON Web Token (JWT) authentication. This is to ensure that only authenticated users will be able to access and collaborate on documents.

A JSON Web Token (JWT) endpoint is a service for generating and providing authorization tokens to users. These tokens are used to verify that submitted content was sent by an authorized user and to prevent submissions by unauthorized collaborators.

JWT is a standard authorization solution for web services and is documented in detail at [https://jwt.io/](https://jwt.io/). This guide aims to show how to setup JWT authentication for RTC.

## Overview

- [Setting up JWT authentication for Real-time Collaboration](#settingupjwtauthenticationforreal-timecollaboration)
- [Add a public key to the Tiny Cloud API key](#addapublickeytothetinycloudapikey)
- [Set up a JSON Web Token (JWT) endpoint](#setupajsonwebtokenjwtendpoint)
- [JWT endpoint examples](#jwtendpointexamples)

## Setting up JWT authentication for Real-time Collaboration

To set up JSON Web Token (JWT) authentication for {{site.productname}} {{pluginname}}:

1. Add a public key to your {{site.accountpage}}.
1. Set up a JSON Web Token (JWT) Provider endpoint.
1. Configure {{site.productname}} to use the JWT endpoint.

{% include auth/private-public-key-pairs-for-tiny-cloud-services.md %}

## Set up a JSON Web Token (JWT) endpoint

{% include auth/how-jwts-are-used.md %}

### JWT endpoint requirements

A JSON Web Token (JWT) endpoint for {{pluginname}} requires:

- The endpoint or server accepts a JSON HTTP POST request.
- User authentication - A method of verifying the user, and that they should have access to the document.
- The JWTs are generated (signed) using the _private_ key that pairs with the _public_ key generated at (or provided to) [{{site.accountpage}} - JWT Keys]({{site.accountpageurl}}/jwt/).
- The endpoint or server produces a JSON response with the token. The RTC plugin will submit the token with requests to the RTC Server.

### Required JWT claims for Real-time Collaboration

JSON Web Tokens produced by the JWT endpoint must include the following claims:

| Data | Optional or required | Type | Description |
|---|:---:|:---:|---|
| `sub` | required | `string` or `URI` | The _unique_ user ID string or URI. |
| `exp` | required | `number` | The unix timestamp for when the token expires. |

The `sub` field is used to identify users to avoid sending sensitive or identity information to {{site.companyname}} in plain text. By minimizing the information in JWT claims and relying on the client-side resolution of user IDs, no private data will be transmitted through the RTC server without encryption.

> **Caution**: The RTC plugin does not request a new JWT if user's JWT expires during a session. To avoid user disconnections from expired JWTs, ensure the `exp` claim allows for a reasonable

## JWT endpoint examples

The following examples show a minimal JWT endpoint and how to configure {{site.productname}} to use them.

- [PHP token provider endpoint example](#phptokenproviderendpointexample)
- [Node.js token provider endpoint example](#nodejstokenproviderendpointexample)

### PHP token provider endpoint example

This example uses the [Firebase JWT library](https://github.com/firebase/php-jwt) provided through the Composer dependency manager.

`$privateKey` should be the _private_ key that pairs with the _public_ key generated at (or provided to) [{{site.accountpage}} - JWT Keys]({{site.accountpageurl}}/jwt/).

#### jwt.php

```php
<?php
require 'vendor/autoload.php';
use \Firebase\JWT\JWT;

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");

$privateKey = <<<EOD
-----BEGIN PRIVATE KEY-----
....
-----END PRIVATE KEY-----
EOD;

// NOTE: Before you proceed with the TOKEN, verify your users session or access.

$payload = array(
  "sub" => "123", // unique user ID string
  "exp" => time() + 60 * 10 // 10 minute expiration
);

try {
  $token = JWT::encode($payload, $privateKey, 'RS256');
  http_response_code(200);
  header('Content-Type: application/json');
  echo json_encode(array("token" => $token));
} catch (Exception $e) {
  http_response_code(500);
  header('Content-Type: application/json');
  echo $e->getMessage();
}
?>
```

#### TinyMCE example using the jwt.php endpoint

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_document_id: 'unique-document-id',
  rtc_encryption_provider: () => Promise.resolve({ key: 'a secret key' }),
  rtc_token_provider: ({ documentId }) =>
    fetch('jwt.php', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ documentId }),
    })
    .then((response) => response.json())
    .then(({ jwt })) => ({ token: jwt })
    .catch((error) => console.log('Failed to return a JWT\n' + error))
});
```

### Node.js token provider endpoint example

This example shows how to set up a Node.js express handler that produces the tokens. It requires you to install the Express web framework and the `jsonwebtoken` Node module. For instructions on setting up a basic Node.js Express server and adding {{site.productname}}, see: [Integrating TinyMCE into an Express JS App]({{site.baseurl}}/integrations/expressjs/).

`privateKey` should be the _private_ key that pairs with the _public_ key generated at (or provided to) [{{site.accountpage}} - JWT Keys]({{site.accountpageurl}}/jwt/).

#### /jwt

```js
const express = require('express');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
app.use(cors());

const privateKey = `
-----BEGIN PRIVATE KEY-----
....
-----END PRIVATE KEY-----
`;

app.post('/jwt', function (req, res) {
  // NOTE: Before you proceed with the TOKEN, verify your users' session or access.
  const payload = {
    sub: '123', // Unique user ID string
    exp: Math.floor(Date.now() / 1000) + (60 * 10) // 10 minutes expiration
  };

  try {
    const token = jwt.sign(payload, privateKey, { algorithm: 'RS256'});
    res.set('content-type', 'application/json');
    res.status(200);
    res.send(JSON.stringify({
      token: token
    }));
  } catch (e) {
    res.status(500);
    res.send(e.message);
  }
});

app.listen(3000);
```

#### TinyMCE example using the /jwt endpoint

```js
tinymce.init({
  selector: 'textarea', // change this value according to your HTML
  plugins: 'rtc',
  rtc_document_id: 'unique-document-id',
  rtc_encryption_provider: () => Promise.resolve({ key: 'a secret key' }),

  rtc_token_provider: ({ documentId }) =>
    fetch('/jwt', {
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify({ documentId }),
    })
    .then((response) => response.json())
    .then(({ jwt }) => ({ token: jwt }))
    .catch((error) => console.log('Failed to return a JWT\n' + error))
});
```
