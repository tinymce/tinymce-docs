---
layout: draft
title: JWT Authentication
description_short: JWT Authentication
description: JWT tokens is a common way for authorization of web services.
---

Some cloud services for tinymce requires you to setup jwt token authentication. This allows us to verify that you and your end user is allowed to access a particular feature. Jwt tokens is a common way for authorization of web services and is documented more detail at the [https://jwt.io/](https://jwt.io/) website. This guide aims to show how to setup jwt authentication for the cloud services provided for tinymce.

## Private/public key pair

Jwt tokes used by the tinymce cloud services are done using a public/private rsa key. This allows you as an integrator to have full control over the authentication since we don't store the private key only you have access to that key and only you can produce valid jwt tokens. We can only verify that they are valid and extract user information from that token.

The private/public key pair is created in your shop account page but we only store the public key on our side. The private key is for you to store in your backend.

## Jwt token provider url

The easiest way to setup jwt token authentication against tinymce cloud services is to create a jwt token provider page. This page takes a JSON HTTP POST request and produces a JSON result with the token that the service will then use for all the http requests.

## PHP Token provider example

This example uses the [firebase jwt library](https://github.com/firebase/php-jwt) provided though [composer](https://getcomposer.org/). The private key should be the private key that got generated on the store page. Each service requires different claims to be provided so the example shows the sub and name claims needed for tiny drive.

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

## Node Token provider example

This example shows you how to setup a node js express handler that produces the jwt tokens. It requires you to install [express](https://expressjs.com/) and the [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) node modules. Each service requires different claims to be provided so the example shows the sub and name claims needed for tiny drive.

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

## Tiny drive specific jwt claims:

**sub** - (required) Unique string to identify the user. This can be a database id, hashed email address or similar.

**name** - (required) Full name of the user this will be used for presentation inside tiny drive when a user uploads a file the user name is presented as the creator of that file.