---
layout: default
title: .Net Core
title_nav: .Net Core
description: .Net Core
keywords: tinydrive .Net Core
---

## Tiny Drive .NET MVC Starter Project

This project will help you get started with {{site.cloudfilemanager}} using .NET and allow you to play around with its features.

### Requirements

Before you start your journey with {{site.cloudfilemanager}}, it will go a lot smoother if you have done these steps:
1. Login/register to [{{site.accountpage}}]({{site.accountpageurl}}/)
2. Get a [{{site.cloudname}} API Key]({{site.accountpageurl}}/key-manager/)
3. Get a [JWT Key]({{site.accountpageurl}}/jwt/)

Store the keys temporarily somewhere as you will need to copy & paste them later.

### Prerequisites

* .NET Core 2.0+ on any supported platform.

### Procedure

These are the steps needed to get this project running on your machine:

#### 1. Clone this repo to your local machine using

```
$ git clone git@github.com:tinymce/tinydrive-dotnet-starter.git
```

#### 2. Change the `apiKey` in `tinydrive-dotnet-mvc-starter/appsettings.Development.json`

You get the api key from the `API Key Manager` {{site.accountpage}} page at http://tiny.cloud.

#### 3. Create a `tinydrive-dotnet-mvc-starter/private.key` file containing your generated private RSA key

You get the private RSA key from the `JWT Key Manager` {{site.accountpage}} page at http://tiny.cloud.

#### 4. Go to the directory and start the dev server

```
$ cd tinydrive-dotnet-starter
$ dotnet run
```

#### 5. Open the example project at http://localhost:3000

## Implementing with your system

If your specific use case has not been covered by any of the sample [starter projects]({{site.baseurl}}/tinydrive/libraries/), some customizations might be required to be applied to implement {{site.cloudfilemanager}} in the specific system. The [JSON Web Token]({{site.baseurl}}/tinydrive/jwt-authentication/) authentication solution would have to be tied to the login authentication of your system. This usually means integrating the JWT authentication to the existing session authentication so that users automatically login to {{site.cloudfilemanager}} and your system.

### Additional resources

Go through the following additional resources to figure out how to configure {{site.cloudfilemanager}} with your system.

- We recommend reading up and trying to understand how [JWT authentication]({{site.baseurl}}/tinydrive/jwt-authentication/) works. In order to implement {{site.cloudfilemanager}} you need prior knowledge of JWT in detail, including how they can be used for user authentication and session management in a web application. There will be some coding involved on both the client-side and the server-side to configure JWT as per the instructions in this section.
- [Starter projects]({{site.baseurl}}/tinydrive/libraries/)
- [Configuration Options]({{site.baseurl}}/tinydrive/configuration/)
- [Integrations]({{site.baseurl}}/tinydrive/integrations/)

## Need help? ##

We are striving to make {{site.cloudfilemanager}} as useful and as simple as possible. For support related issues such as problems with JWT authentication and implementing {{site.cloudfilemanager}}, check our [help page]({{site.baseurl}}/tinydrive/get-help/) or please contact [{{site.supportname}}]({{site.supporturl}}).

