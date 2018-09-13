---
layout: draft
title: JWT Authentication
description_short: JWT Authentication
description: JWT tokens is a common way for authorization of web services.
---

Some cloud services for TinyMCE requires you to setup JWT token authentication. This allows us to verify that you and your end user are allowed to access a particular feature. JWT tokens are a common way for authorization of web services and they are documented in more detail at the https://jwt.io/ website. This guide aims to show how to setup JWT authentication for the cloud services provided for TinyMCE.


## Private/Public Key Pair

JWT tokens used by the TinyMCE cloud services are done using a public/private RSA key. This allows you as an integrator to have full control over the authentication as we don't store the private key. Only you have access to the private key, and only you can produce valid JWT tokens. We can only verify that they are valid and extract user information from that token.

The private/public key pair is created in your Tiny account page, but we only store the public key on our side. The private key is for you to store in your backend.


## JWT Token Provider URL

The easiest way to setup JWT token authentication against TinyMCE cloud services is to create a JWT token provider page. This page takes a JSON HTTP POST request and produces a JSON result with the token that the service will then use for all the HTTP requests.

## PHP Token Provider Example

This example uses the [Firebase JWT library]("https://github.com/firebase/php-jwt") provided through the Composer dependency manager. The private key should be the private key that was generated through your Tiny Account. Each service requires different claims to be provided. The following example shows the sub and name claims needed for Tiny Drive.

```js
<?php
require 'vendor/autoload.php';
use \Firebase\JWT\JWT;

$privateKey = <<<EOD
-----BEGIN RSA PRIVATE KEY-----
....
-----END RSA PRIVATE KEY-----
EOD;

$payload = array(
  "sub" => "123",           // Unique user id string
  "name" => "John Doe",     // Full name of user
  "exp" => time() + 60 * 10 // 10 minutes expiration
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

## Node Token Provider Example

This example shows you how to set up a Node.js express handler that produces the JWT tokens. It requires you to install the Express web framework and the JSON web token Node modules. Each service requires different claims to be provided. The following example shows the sub and name claims needed for Tiny Drive.

```js
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const privateKey = `
-----BEGIN RSA PRIVATE KEY-----
....
-----END RSA PRIVATE KEY-----
`;

app.post('/jwt', function (req, res) {
  const payload = {
    sub: '123',         // Unique user id string
    name: 'John Doe',   // Full name of user
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

## Tiny Drive Specific JWT Claims:

**sub** - (required) Unique string to identify the user. This can be a database id, hashed email address, or similar identifier.

**name** - (required) Full name of the user that will be used for presentation inside Tiny Drive. When a user uploads a file, the username is presented as the creator of that file.

