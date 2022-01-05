---
layout: default
title: Set up Tiny Drive JWT Authentication
title_nav: JWT Authentication setup
description: Guide on how to setup JWT Authentication for Tiny Drive
keywords: jwt authentication
---

{% assign pluginname = site.cloudfilemanager %}
{% assign plugincode = "tinydrive" %}
## Introduction

{{site.cloudfilemanager}} requires you to setup JSON Web Token (JWT) authentication. This is to ensure that the security of your files remains in your control.

A JSON Web Token (JWT) endpoint is a service for generating and providing authorization tokens to users. These tokens can then be used to verify that submitted content was sent by an authorized user and to prevent unauthorized access.

JWT is a standard authorization solution for web services and is documented in more detail at the [https://jwt.io/](https://jwt.io/) website. The guide aims to show how to setup JWT authentication for {{site.cloudfilemanager}}.

## Overview

- [Setting up JWT authentication for Tiny Drive](#settingupjwtauthenticationfortinydrive)
- [Add a public key to the Tiny Cloud API key](#addapublickeytothetinycloudapikey)
- [Set up a JSON Web Token (JWT) endpoint](#setupajsonwebtokenjwtendpoint)
- [JWT endpoint examples](#jwtendpointexamples)

## Setting up JWT authentication for Tiny Drive

To set up JSON Web Token (JWT) authentication for {{pluginname}}:

1. Add a public key to your {{site.accountpage}}.
1. Set up a JSON Web Token (JWT) Provider endpoint.
1. Configure {{site.cloudfilemanager}} to use the JWT endpoint.

## Add a public key to the {{site.cloudname}} API key

{% include auth/private-public-key-pairs-for-tiny-cloud-services.md %}

## Set up a JSON Web Token (JWT) endpoint

{% include auth/how-jwts-are-used.md %}

### JWT endpoint requirements

A JSON Web Token (JWT) endpoint for {{pluginname}} requires:

- The endpoint or server accepts a JSON HTTP POST request.
- User authentication - A method of verifying the user, and that they should have access to the {{site.cloudfilemanager}}.
- The JWTs are generated (signed) using the _private_ key that pairs with the _public_ key provided to [{{site.accountpage}} - JWT Keys]({{site.accountpageurl}}/jwt/).
- The endpoint or server produces a JSON response with the token. {{site.cloudfilemanager}} will submit the token with requests to the {{site.cloudfilemanager}} Server.

### Required JWT claims for {{pluginname}}

JSON Web Tokens produced by the JWT endpoint must include the following claims:

`sub` _(required)_
: **Type**: `string` or `URI`
: Unique string or URI to identify the user. This can be a database ID, hashed email address, or similar identifier.

`name` _(required)_
: **Type**: `string`
: Full name of the user that will be used for presentation inside {{site.cloudfilemanager}}. When the user uploads a file, this name is presented as the creator of that file.

`https://claims.tiny.cloud/drive/root` _(optional)_
: **Type**: `string`
: Full path to a {{site.cloudfilemanager}} specific root for example "/johndoe". The user won't be able to see or manage files outside this configured root path.

> **Note**: The "`sub`" claim is a case-sensitive string containing a **String** or **URI** value. The `sub` claim cannot have a `:` *unless* it is a valid URI or else the callback will fail.

## JWT endpoint examples

The following examples show a minimal JWT endpoint and how to configure {{site.cloudfilemanager}} to use them.

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

#### TinyMCE example using the jwt.php endpoint

```js
var button = document.querySelector('.tinydrive-browse');

    button.addEventListener('click', function () {
      tinydrive.browse({
        token_provider: 'jwt.php'
      }).then(function () {
        console.log('Dialog closed');
      });
    }, false);
```

### Node.js token provider endpoint example

This example shows you how to set up a Node.js express handler that produces the tokens. It requires you to install the Express web framework and the `jsonwebtoken` Node modules.

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

#### Tiny Drive example using the /jwt endpoint

```js
var button = document.querySelector('.tinydrive-browse');

    button.addEventListener('click', function () {
      tinydrive.browse({
        token_provider: '/jwt'
      }).then(function () {
        console.log('Dialog closed');
      });
    }, false);
```
