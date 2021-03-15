---
layout: default
title: RTC JWT Authentication
title_nav: JWT Authentication
description: Guide on how to setup JWT Authentication for RTC
keywords: jwt authentication
---

{% assign pluginname = "RTC" %}
{% assign plugincode = "rtc" %}
## Introduction

RTC requires setting up JSON Web Token (JWT) authentication. This is to ensure that only authenticated users will be able to access and collaborate on documents.

JWT is a standard authorization solution for web services and is documented in more detail at the [https://jwt.io/](https://jwt.io/) website. This guide aims to show how to setup JWT authentication for RTC.

{% include auth/private-public-key-pairs-for-tiny-cloud-services.md %}

{% include auth/jwt-provider-endpoint-url.md %}

## JWT requirements

{% include auth/jwt-supported-algorithms.md %}

### Claims

Claims are additional data that can be sent as part of the JWT token. The RTC JWT requires the following claims:

| Data | Optional or required | Description |
|---|:---:|---|
| `sub` | required | The unique user ID (for example, if `sub` is the same for two clients, you should trust them as if they're the same user). |
| `exp` | required | The timestamp when the token expires. |

The `sub` field is used to identify users to avoid sending sensitive or identity information to {{site.companyname}} in plain text. By minimizing the information in JWT claims and relying on the client-side resolution of user IDs, no private data will be transmitted through the RTC server without encryption.

{% include auth/jwt-endpoint-setup-procedure.md %}

## Generating a secure encryption key

> **Caution**: These suggestions may not guarantee a secure connection. If data secrecy is important to you please consult a security professional.

Encryption security is a trade off between the complexity of generating a key and the risk of compromise should the key be disclosed to an unknown third party. Here are some suggested ways to generate keys, in descending order of safety:

* Store a global list of keys for your application, and use the document ID along with random data to salt the current key _on your server_ to produce a key unique to the document session. Do not return the salt data to `keyHint`; return an identifier that can be used to look up the unique key on the server.
* Use a fixed random key for each document, and generate random salt data to provide a unique key for each session. Pass the salt data to `keyHint`.
* Generate and store a fixed random key for each document in your database. Ignore the `keyHint` input field and return a fixed arbitrary `keyHint` value.

## Encryption key rotation and key hints

The RTC configuration API is designed to support key rotation. Keys cannot be rotated on demand; if this is important to you, please contact {{site.companyname}} to discuss how we can best provide that functionality.

Document collaboration may be performed in multiple sessions. For example, when a new version of {{site.productname}} is deployed it may be incompatible with existing sessions. Only one session will be active at a time but older sessions may still be used to bootstrap new sessions. As such, old keys cannot be immediately discarded when a new key is requested.

In order to allow for key rotation, a key hint is supplied so the provider may tell the difference between these two cases and act accordingly. If the key hint is `null`, then the client wants the "current" key and can be issued a key different from any previously used key. If the key hint is set, then the client is requesting a previously-issued key so that it can read the session history.

A specific key hint may be specified in the key response. If it is not specified, then an empty string will be sent when the client requests that key in future.

> **Warning**: The key hint is transmitted _in plain text_. Do not store secret or sensitive information in the key hint.

The key hint can be a key thumbprint, ID, or other non-sensitive identifier that will help select the key, such as a timestamp. It is only recorded when `keyHint` is `null` in the request.

## Need help?

{{ site.companyname }} recommends looking into how JWT works; some knowledge about JWT is necessary to implement RTC. This can be tricky, so if you need some help contact our support team.

## PHP token provider endpoint example

This example uses the [Firebase JWT library](https://github.com/firebase/php-jwt) provided through the Composer dependency manager.

`$privateKey` should be a private key generated at {{site.accountpage}}.

### jwt.php

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

### TinyMCE example with jwt.php Endpoint

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_token_provider: () => {
    return fetch('jwt.php', {
      method: 'POST'
    });
  }
});
```

## Node token provider endpoint example

This example shows how to set up a Node.js express handler that produces the tokens. It requires you to install the Express web framework and the `jsonwebtoken` Node module. For instructions on setting up a basic NodeJS Express server and adding {{site.productname}}, see: [Integrating TinyMCE into an Express JS App]({{site.baseurl}}/integrations/expressjs/).

`privateKey` should be a private key generated at {{site.accountpage}}.

### /jwt

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

### TinyMCE example with /jwt endpoint

```js
tinymce.init({
  selector: 'textarea',
  plugins: 'rtc',
  rtc_token_provider: () => {
    return fetch('/jwt', {
      method: 'POST'
    });
  }
});
```

### More configuration

Once JWT authentication has been set up, the RTC plugin can be configured further using the options shown on the [RTC configuration options page]({{site.baseurl}}/rtc/configuration/). Don't forget to change the example JWT claims (user id, user name) to get those from your system.

If you want help [submit a support request]({{site.supporturl}}).

{% include auth/gen-rsa-key-pairs.md %}
