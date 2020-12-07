---
layout: default
title: Tiny Drive JWT Authentication
title_nav: JWT Authentication
description: Guide on how to setup JWT Authentication for Tiny Drive
keywords: jwt authentication
---

{% assign pluginname = site.cloudfilemanager %}
{% assign plugincode = "tinydrive" %}
## Introduction

{{site.cloudfilemanager}} requires you to setup JSON Web Token (JWT) authentication. This is to ensure that the security of your files remains in your control.

JWT is a standard authorization solution for web services and is documented in more detail at the [https://jwt.io/](https://jwt.io/) website. The guide aims to show how to setup JWT authentication for {{site.cloudfilemanager}}.

> If you haven't tried any of the [Starter projects]({{site.baseurl}}/tinydrive/getting-started/#starterprojects)  yet, we urge you to try them before trying to implement your solution. The source is also available on Github to study.

{% include auth/private-public-key-pairs-for-tiny-cloud-services.md %}

{% include auth/jwt-provider-endpoint-url.md %}

## JWT requirements

{% include auth/jwt-supported-algorithms.md %}

### Claims

These are like options/data you can send with the JWT token.

<dl>
<dt><code>sub</code> <em>(required)</em></dt><dd>Unique string to identify the user. This can be a database ID, hashed email address, or similar identifier.</dd>
<dt><code>name</code> <em>(required)</em></dt><dd>Full name of the user that will be used for presentation inside {{site.cloudfilemanager}}. When the user uploads a file, this name is presented as the creator of that file.</dd>
<dt><code>https://claims.tiny.cloud/drive/root</code> <em>(optional)</em></dt><dd>Full path to a {{site.cloudfilemanager}} specific root for example "/johndoe". The user won't be able to see or manage files outside this configured root path.</dd>
</dl>

> **Note**: The "`sub`" claim is a case-sensitive string containing a **String** or **URI** value. The `sub` claim cannot have a `:` *unless* it is a valid URI or else the callback will fail.

{% include auth/jwt-endpoint-setup-procedure.md %}

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

```js
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

```js
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

{% include auth/gen-rsa-key-pairs.md %}
