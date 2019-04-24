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

Store the keys temporarily somewhere as you will need to copy & paste them later.

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

If your specific use case has not been covered by any of our sample [Starter projects]({{site.baseurl}}/tinydrive/libraries/starter-projects/), you may have to apply some customizations at your end to figure out how to implement it with your own system. You need to tie our JSON Web Token (or JWT) authentication solution to the login authentication of your system. This usually means integrating the JWT authentication to your existing session authentication so that users automatically login to Tiny Drive and your system.

#### Additional resources

Go through the following additional resources to figure out how to configure Tiny Drive with your system.

- We recommend reading up and trying to understand how [JWT authentication]({{site.baseurl}}/tinydrive/jwt-authentication/) works. In order to implement Tiny Drive you need prior knowledge of JWT in detail, including how they can be used for user authentication and session management in a web application. There will be some coding involved on both the client-side and the server-side to configure JWT as per the instructions in this section.
- [Getting Started]({{site.baseurl}}/tinydrive/getting-started/)
- [Configuration Options]({{site.baseurl}}/tinydrive/configuration/)


## Need help? ##

We’re striving to make Tiny Drive as useful and simple as possible. For support related issues such as problems with JWT authentication and implementing Tiny Drive, check our [help page](/tinydrive/get-help/) or please contact [support](https://support.tiny.cloud/hc/en-us/requests/new).

