---
layout: default
title: Getting started with Tiny Drive
title_nav: Getting started
description: Guide on how to get started with Tiny Drive
keywords: tinydrive starter
---

## Requirements
Before you start your journey with Tiny Drive, it will go a lot smoother if you have done these steps:
1. Login/register to [tiny.cloud](https://apps.tiny.cloud/my-account/)
2. Get a [TinyMCE API Key](https://apps.tiny.cloud/my-account/key-manager/)
3. Get a [JWT Key](https://apps.tiny.cloud/my-account/jwt-key-manager/)

Store the keys temporarily somewhere, you will need to copy & paste them later.

## Starter projects

To get started quickly and understand how Tiny Drive works, we highly recommend trying one of the starter projects on Github, should get you up and running in no time.

- [.NET Core](https://github.com/tinymce/tinydrive-dotnet-mvc-starter)
- [Node.js](https://github.com/tinymce/tinydrive-nodejs-starter)
- [PHP](https://github.com/tinymce/tinydrive-php-starter)
- [Java](https://github.com/tinymce/tinydrive-java-spring-starter)

The starter projects have their own 5 steps to get Tiny Drive running, follow those steps.

If you do not have any experience with these languages, it might still be useful to see how they work and then try to implement your own solution.

**We really recommend giving these starter packages a try**, it will help you understand how authentication and integration can work in your system. You can then move on and try to implement Tiny Drive into your system.

## Implementing with your system

After seeing it running, the next step would be to figure out how to implement it with your own system. You need to tie our JWT Authentication solution to the login authentication of your system, this usually means integrating the JWT authentication to your existing session authentication so that users automatically login to Tiny Drive and your system.

- [JWT Authentication Guide]({{site.baseurl}}/tinydrive/jwt-authentication/) 
- [Configuration Options]({{site.baseurl}}/tinydrive/configuration/)

Don't forget you can look at the starter projects on Github to figure out how it works, even if your not familiar any of the languages we have for the starter packages, it may help you figure out how to go about it with your system.

## Need help? ##
We recommend reading up and trying to understand how JWT works, you need some basic skills in order to implement Tiny Drive. This can be tricky, if you need some help, check our [help page](/tinydrive/get-help/) and if that doesn't work, contact our support.