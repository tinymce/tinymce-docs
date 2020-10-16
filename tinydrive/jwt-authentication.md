---
layout: default
title: Tiny Drive JWT Authentication
title_nav: JWT Authentication
description: Guide on how to setup JWT Authentication for Tiny Drive
keywords: jwt authentication
---

## Introduction

{{site.cloudfilemanager}} requires you to setup JSON Web Token (JWT) authentication. This is to ensure that the security of your files remains in your control.

JWT is a standard authorization solution for web services and is documented in more detail at the [https://jwt.io/](https://jwt.io/) website. The guide aims to show how to setup JWT authentication for {{site.cloudfilemanager}}.

> If you haven't tried any of the [Starter projects]({{site.baseurl}}/tinydrive/getting-started/#starterprojects)  yet, we urge you to try them before trying to implement your solution. The source is also available on Github to study.

## Private/public key pair

{{site.cloudname}} services tokens use public/private RSA key pairs. The {{site.cloudname}} services only store the public key, allowing developers to have full control over the authentication.

The private/public key pair can be created on your [{{site.companyname}} - {{site.accountpage}} page]({{site.accountpageurl}}/jwt/), however we only store the public key on the {{site.accountpage}}. The private key should be downloaded and stored in your backend.

> **Important**: Keep the private key secure, do not commit files containing the key to public repositories or websites.

For information on generating an RSA key pair locally, see: [Creating a private/public key pair for {{site.cloudfilemanager}}](#creatingaprivatepublickeypairfortinydrive).

## JWT provider URL

The easiest way to setup JWT authentication against {{site.cloudname}} services is to create a JWT provider endpoint. This endpoint takes a JSON HTTP POST request and produces a JSON result with the token that the service will then use for all the HTTP requests.

The following diagram explains the JWT call flow:

![JSON Web Token Call Flow]({{site.baseurl}}/images/jwt-call-flow.png "JSON Web Token Call Flow")

## JWT requirements

### Algorithm

Our examples use, and we recommend RS256 algorithm. This is a list of supported ones: RS256, RS384, RS512, PS256, PS384, PS512

### Claims

These are like options/data you can send with the JWT token.

* **sub** - _(required)_ Unique string to identify the user. This can be a database ID, hashed email address, or similar identifier.
* **name** - _(required)_ Full name of the user that will be used for presentation inside {{site.cloudfilemanager}}. When the user uploads a file, this name is presented as the creator of that file.
* **https://claims.tiny.cloud/drive/root** - (optional) Full path to a {{site.cloudfilemanager}} specific root for example "/johndoe". The user won't be able to see or manage files outside this configured root path.

> **Note**: The "sub" value is a case-sensitive string containing a **String** or **URI** value. The `sub` cannot have a `:` *unless* it is a valid URI or else the callback would fail.

## JWT endpoint setup procedure

Follow these steps to set up your own JWT endpoint.

 1. Setup a JWT endpoint on your server, this could be a simple page using one of the examples below.
 2. Configure the `tinydrive_token_provider` to that endpoint.
 3. Make sure you copy the private key into the example code.
 4. You should be good to go now.

 > The JWT Endpoint should examine your systems sessions to verify your user has access to your system.

## Need help?

We recommend reading up and trying to understand how JWT works; you need some necessary skills to implement {{site.cloudfilemanager}}. This can be tricky if you need some help, check our [help page]({{site.baseurl}}/tinydrive/get-help/) and if that doesn't work, contact our support.

## PHP token provider endpoint example

This example uses the [Firebase JWT library](https://github.com/firebase/php-jwt) provided through the Composer dependency manager. The private key should be the private key that was generated through your {{site.accountpage}}.

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
  "sub" => "123", // unique user id string
  "name" => "John Doe", // full name of user

  // Optional custom user root path
  // "https://claims.tiny.cloud/drive/root" => "/johndoe",

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

```
tinymce.init({
  selector: 'textarea',
  plugins: 'image media link tinydrive code imagetools',
  tinydrive_token_provider: 'jwt.php',
  toolbar: 'insertfile image link | code'
});
```

## Node token provider endpoint example

This example shows you how to set up a Node.js express handler that produces the tokens. It requires you to install the Express web framework and the `jsonwebtoken` Node modules.

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
    sub: '123', // Unique user id string
    name: 'John Doe', // Full name of user

    // Optional custom user root path
    // 'https://claims.tiny.cloud/drive/root': '/johndoe',

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

```
tinymce.init({
  selector: 'textarea',
  plugins: 'image media link tinydrive code imagetools',
  tinydrive_token_provider: '/jwt',
  toolbar: 'insertfile image link | code'
});
```

### More configuration

If you managed to set this up, you should be good to go with checking out the various [configuration options]({{site.baseurl}}/tinydrive/configuration/) for {{site.cloudfilemanager}} and how you can customize it. Don't forget to change the JWT Claim's (user id, user name) to get those from your system.

If you need some help, check our [help page]({{site.baseurl}}/tinydrive/get-help/) and if that doesn't work, [submit a support request]({{site.supporturl}}).

{% include configuration/gen-rsa-key-pairs.md %}
