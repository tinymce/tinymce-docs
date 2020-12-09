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
| `sub` | required | The unique user ID (i.e. if `sub` is the same for two clients, you should trust them as if they're the same user). |
| `exp` | required | The timestamp when the token expires. |

{% include auth/jwt-endpoint-setup-procedure.md %}

## Need help?

{{ site.companyname }} recommends looking into how JWT works; some knowledge about JWT is necessary to implement RTC. This can be tricky, so if you need some help contact our support.

## PHP token provider endpoint example

This example uses the [Firebase JWT library](https://github.com/firebase/php-jwt) provided through the Composer dependency manager. The private key should be a private key generated at {{site.accountpage}}.

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

Once JWT authentication has been set up, the RTC plugin can be configured further using the options shown on the [RTC configuration options page]({{site.baseurl}}/rtc/configuration/). Don't forget to change the JWT Claim's (user id, user name) to get those from your system.

If you want help [submit a support request]({{site.supporturl}}).

{% include auth/gen-rsa-key-pairs.md %}
