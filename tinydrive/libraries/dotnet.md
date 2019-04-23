---
layout: default
title: .Net Core
title_nav: .Net Core
description: .Net Core
keywords: tinydrive .Net Core
---

## Tiny Drive .NET MVC Starter Project

This project will help you get started with Tiny Drive and allow you to play around with it's features.

## Requirements

Before you start your journey with Tiny Drive, it will go a lot smoother if you have done these steps:
1. Login/register to [tiny.cloud](https://apps.tiny.cloud/my-account/)
2. Get a [TinyMCE API Key](https://apps.tiny.cloud/my-account/key-manager/)
3. Get a [JWT Key](https://apps.tiny.cloud/my-account/jwt-key-manager/)

Store the keys temporarily somewhere, you will need to copy & paste them later.

## Prerequisites

.NET Core 2.0+ on any supported platform.

## Procedure

These are the steps needed to get this project running on your machine:

### 1. Clone this repo to your local machine using

```
$ git clone git@github.com:tinymce/tinydrive-dotnet-starter.git
```

### 2. Change the `apiKey` in `tinydrive-dotnet-mvc-starter/appsettings.Development.json`

You get the api key from the `API Key Manager` account manager at http://tiny.cloud.

### 3. Create a `tinydrive-dotnet-mvc-starter/private.key` file containing your generated private RSA key

You get the private RSA key from the `JWT Key Manager` account manager at http://tiny.cloud.

### 4. Go to the directory and start the dev server

```
$ cd tinydrive-dotnet-starter
$ dotnet run
```

### 5. Open the example project at http://localhost:3000

### Implementing with your system

After seeing it running, the next step would be to figure out how to implement it with your own system. You need to tie our JWT Authentication solution to the login authentication of your system, this usually means integrating the JWT authentication to your existing session authentication so that users automatically login to Tiny Drive and your system.

- [JWT Authentication Guide]({{site.baseurl}}/tinydrive/jwt-authentication/)
- [Configuration Options]({{site.baseurl}}/tinydrive/configuration/)

Don't forget you can look at the starter projects on Github to figure out how it works, even if your not familiar any of the languages we have for the starter packages, it may help you figure out how to go about it with your system.

## Need help? ##
We recommend reading up and trying to understand how JWT works, you need some basic skills in order to implement Tiny Drive. This can be tricky, if you need some help, check our [help page](/tinydrive/get-help/) and if that doesn't work, contact our support.