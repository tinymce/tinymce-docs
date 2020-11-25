---
layout: default
title: RTC JWT Authentication
title_nav: JWT Authentication
description: Guide on how to setup JWT Authentication for RTC
keywords: jwt authentication
---

## Introduction

RTC requires you to setup JSON Web Token (JWT) authentication. This is to ensure that only your authenticated uses will be able to access and collaborate on documents.

JWT is a standard authorization solution for web services and is documented in more detail at the [https://jwt.io/](https://jwt.io/) website. The guide aims to show how to setup JWT authentication for RTC.

## Private/public key pair

{{site.cloudname}} services tokens use public/private RSA key pairs. The {{site.cloudname}} services only store the public key, allowing developers to have full control over the authentication.

The private/public key pair can be created on your [{{site.companyname}} - {{site.accountpage}} page]({{site.accountpageurl}}), however we only store the public key on the {{site.accountpage}}. The private key should be downloaded and stored in your backend.

> **Important**: Keep the private key secure, do not commit files containing the key to public repositories or websites.

For information on generating an RSA key pair locally, see: [Creating a private/public key pair for RTC](#creatingaprivatepublickeypairforrtc).

## JWT provider URL

The easiest way to setup JWT authentication against {{site.cloudname}} services is to create a JWT provider endpoint. This endpoint takes a JSON HTTP POST request and produces a JSON result with the token that the service will then use for all the HTTP requests.

The following diagram explains the JWT call flow:

![JSON Web Token Call Flow]({{site.baseurl}}/images/jwt-call-flow.png "JSON Web Token Call Flow")

## JWT requirements

### Algorithm

Our examples use, and we recommend RS256 algorithm. This is a list of supported ones: RS256, RS384, RS512, PS256, PS384, PS512

### Claims

These are like options/data you can send with the JWT token.

* **sub** - _(required)_ The unique user ID (i.e. if `sub` is the same for two clients, you should trust them as if they're the same user)
* **exp** - _(required)_ The timestamp when the token expires

## JWT endpoint setup procedure

Follow these steps to set up your own JWT endpoint.

 1. Setup a JWT endpoint on your server, this could be a simple page using one of the examples below.
 2. Configure the `rtc_token_provider` to fetch the token from that endpoint.
 3. Make sure you copy the private key into the example code.
 4. You should be good to go now.

 > The JWT Endpoint should examine your systems sessions to verify your user has access to your system.

## Need help?

We recommend reading up and trying to understand how JWT works; you need some necessary skills to implement RTC. This can be tricky if you need some help contact our support.

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

```
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

```
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

If you managed to set this up, you should be good to go with checking out the various [configuration options]({{site.baseurl}}/rtc/configuration/) for RTC and how you can customize it. Don't forget to change the JWT Claim's (user id, user name) to get those from your system.

If you need some help [submit a support request]({{site.supporturl}}).

## Creating a private/public key pair for RTC

The procedure for creating a key pair depends on the operating system of the host machine.

* [Linux procedure](#linux).
* [Apple macOS procedure](#applemacos).
* [Microsoft Windows procedure](#microsoftwindows).

### Linux

To create a private/public key pair on a Linux operating system:

1. [Install OpenSSL](#installingopensslonlinux).
1. [Create a private/public key pair](#createaprivatepublickeypaironlinux).
1. [Retrieve the public key](#retrievethepublickeyonlinux).

#### Installing OpenSSL on Linux

The procedure for installing OpenSSL on Linux distributions varies. The installation commands for common Linux distributions have been provided here.

##### Red Hat Enterprise Linux 7 or CentOS 7

On a command line, run the following commands to install OpenSSL on:

* Red Hat Enterprise Linux 6 or 7.
* CentOS 6 or 7.

```sh
sudo yum check-update
sudo yum install openssl
```

##### Red Hat Enterprise Linux 8+, Fedora, or CentOS 8+

On a command line, run the following commands to install OpenSSL on:

* Red Hat Enterprise Linux 8 or later.
* CentOS 8 or later.
* Fedora 18 or later.

```sh
sudo dnf check-update
sudo dnf install openssl
```

##### Debian, Ubuntu, Linux Mint, or other Debian-based distributions

On a command line, run the following commands to install OpenSSL on Debian-based operating systems (such as: Debian, Ubuntu, and Linux Mint).

```sh
sudo apt update
sudo apt install openssl
```

##### SUSE Linux Enterprise Server or openSUSE

On a command line, run the following commands to install OpenSSL on openSUSE-based operating systems (such as: openSUSE and SUSE Linux Enterprise Server).

```sh
sudo zypper refresh
sudo zypper install openssl
```

#### Create a private/public key pair on Linux

To create a private/public key pair:

1. On a command line, run:

    ```sh
    ssh-keygen -m PEM -t rsa -b 2048 -f <MY_RTC_KEY>
    ```

    Where _`<MY_RTC_KEY>`_ should be replaced with a name for the key pair.

2. Enter a passphrase for accessing the key.

Two files will be created in the current directory:

* `<MY_RTC_KEY>` - The private key.
* `<MY_RTC_KEY>.pub` - The public key.

#### Retrieve the public key on Linux

To retrieve the public key, on a command line, run:

```sh
openssl rsa -in <MY_RTC_KEY> -outform DER -pubout | base64 -w0
```

The public key for the `<MY_RTC_KEY>` key pair will be printed on the command line with base64 encoding.

### Apple macOS

To create a private/public key pair on a macOS operating system:

1. [Create a private/public key pair](#createaprivatepublickeypaironmacos).
1. [Retrieve the public key](#retrievethepublickeyonmacos).

#### Create a private/public key pair on macOS

To create a private/public key pair:

1. Using **Finder**, open a **Terminal**.
1. On a terminal, run:

    ```sh
    ssh-keygen -m PEM -t rsa -b 2048 -f <MY_RTC_KEY>
    ```

    Where _`<MY_RTC_KEY>`_ should be replaced with a name for the key pair.

1. Enter a passphrase for accessing the key.

Two files will be created in the current directory:

* `<MY_RTC_KEY>` - The private key.
* `<MY_RTC_KEY>.pub` - The public key.

#### Retrieve the public key on macOS

To retrieve the public key, on a terminal, run:

```sh
openssl rsa -in <MY_RTC_KEY> -outform DER -pubout | base64 -
```

The public key for the `<MY_RTC_KEY>` key pair will be printed on the terminal with base64 encoding.

### Microsoft Windows

To create a private/public key pair on a Microsoft Windows operating system:

1. [Install OpenSSL](#installingopensslonmicrosoftwindows).
1. [Create a private/public key pair](#createaprivatepublickeypaironwindows).
1. [Retrieve the public key](#retrievethepublickeyonwindows).

#### Installing OpenSSL on Microsoft Windows

To install OpenSSL with _Git for Windows_:

1. Download the _Windows_ package from [the Git Downloads page](https://git-scm.com/downloads).
1. Open the downloaded file `Git-<VERSION>-<ARCH>-bit.exe`, where _`<VERSION>`_ is the latest version of _Git for Windows_ and _`<ARCH>`_ is the architecture, such as _32-bit_ or _64-bit_.
1. Click **Next** on the _Information_ and _Select Destination Location_ screens.
1. Select **Check daily for Git for Windows updates** on the *Select Components* screen, then click **Next**.
1. Click **Next** on the remaining screens to accept the default settings.
1. Once the installation is complete, click **Finish**.

#### Create a private/public key pair on Windows

To create a private/public key pair:

1. Open the **Start** menu (or _Windows_ menu) and open **Git Bash**.
1. On the _Git bash_ command line, run:

    ```sh
    ssh-keygen -m PEM -t rsa -b 2048 -f <MY_RTC_KEY>
    ```

    Where _`<MY_RTC_KEY>`_ should be replaced with a name for the key pair.

2. Enter a passphrase for accessing the key.

Two files will be created in the current directory:

* `<MY_RTC_KEY>` - The private key.
* `<MY_RTC_KEY>.pub` - The public key.

#### Retrieve the public key on Windows

To retrieve the public key, on a _Git bash_ command line, run:

```sh
openssl rsa -in <MY_RTC_KEY> -outform DER -pubout | base64 -w0
```

The public key for the `<MY_RTC_KEY>` key pair will be printed on the command line with base64 encoding.