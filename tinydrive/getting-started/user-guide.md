---
layout: default
title: User guide
title_nav: User guide
description: Tiny Drive starter projects
keywords: tinydrive starter projects
---

The Tiny Drive plugin adds the functionality to upload and manage files and images to the cloud. This plugin is only available in [Tiny Cloud](https://www.tiny.cloud/download/) and requires you to register for an API key.

To enable this functionality, add tinydrive to the list of plugins in the tinymce.init call. You also need to authenticate the user using a [JSON Web Token (JWT)]({{site.baseurl}}/tinydrive/introduction/jwt-authentication/).

Once you enable Drive it integrates as the default file picker for the Image, Link, and Media dialogs and as the default upload handler for local images being pasted or inserted into the document.

Checkout the [Tiny Drive Demo]({{site.baseurl}}/tinydrive/introduction/overview/#demo) to get familiar with its features.

### Creating an account

If you would like to try out Drive and our Cloud-delivered editor, the first step is to create a free [Tiny account](https://www.tiny.cloud/download/).  When you create an account, you are assigned an API key, which is required for the implementation of Drive.

> The API key is also provisioned with a free 30-day trial of all of our [premium plugins](https://apps.tiny.cloud/product-category/tiny-cloud-extensions/), with no credit card information or commitment required.

Start off your Tiny Drive journey with checking out our [Demo]({{site.baseurl}}/tinydrive//introduction/overview/#demo), analyzing your image performance, or head straight to our [signup](https://apps.tiny.cloud/my-account/) page.

Refer to the other documents like [Starter projects]({{site.baseurl}}/tinydrive/libraries) and [integrations]({{site.baseurl}}/tinydrive/integrations/) to gain understanding of the Tiny Drive configuration process.

In order to implement Tiny Drive you need prior knowledge of JSON Web Token (or JWT) in detail, including how they can be used for user authentication and session management in a web application. There will be some coding involved on both the client-side and the server-side to configure JWT as per the instructions in this section.
We recommend reading up and trying to understand how [JWT authentication]({{site.baseurl}}/tinydrive/introduction/jwt-authentication/) works.

> Note: For support related issues such as problems with JWT authentication and implementing Tiny Drive, check our [help page](/tinydrive/get-help/) or please contact [support](https://support.tiny.cloud/hc/en-us/requests/new).

## Starter projects

To get started quickly and understand how Tiny Drive works, we highly recommend trying one of the starter projects on Github, should get you up and running in no time.

The starter projects have their own procedures to get Tiny Drive up and running. Choose a starter project of a familiar language and follow the steps to setup Tiny Drive.

#### Choose a familar language

<table style="text-align: center">
    <tbody>
        <tr>
            <td><h3><b>GitHub</b></h3></td>
            <td><h3><b>Tiny Drive docs</b></h3></td>
        </tr>
        <tr>
            <td><a href="https://github.com/tinymce/tinydrive-dotnet-mvc-starter"><img src="{{site.baseurl}}/images/netcore.svg" width="120"></a></td>
            <td><a href="{{site.baseurl}}/tinydrive/libraries/dotnet/">.NET Core</a></td>
        </tr>
        <tr>
            <td><a href="https://github.com/tinymce/tinydrive-nodejs-starter"><img src="{{site.baseurl}}/images/nodejs.svg"  width="120"></a></td>
            <td><a href="{{site.baseurl}}/tinydrive/libraries/nodejs/">Node.js</a></td>
        </tr>
        <tr>
            <td><a href="https://github.com/tinymce/tinydrive-php-starter"><img src="{{site.baseurl}}/images/php.svg"  width="120"></a></td>
            <td><a href="{{site.baseurl}}/tinydrive/libraries/php/">PHP</a></td>
        </tr>
        <tr>
            <td><a href="https://github.com/tinymce/tinydrive-java-spring-starter"><img src="{{site.baseurl}}/images/java.png" height="120"></a></td>
            <td><a href="{{site.baseurl}}/tinydrive/libraries/java/">Java Spring</a></td>
        </tr>
    </tbody>
</table>


### Implementing with your system

If your specific use case has not been covered by any of our sample [Starter projects]({{site.baseurl}}/tinydrive/libraries/), you may have to apply some customizations at your end to figure out how to implement it with your own system. You need to tie our JSON Web Token (or JWT) authentication solution to the login authentication of your system. This usually means integrating the JWT authentication to your existing session authentication so that users automatically login to Tiny Drive and your system.

#### Additional resources

Go through the following additional resources to figure out how to configure Tiny Drive with your system.

- We recommend reading up and trying to understand how [JWT authentication]({{site.baseurl}}/tinydrive/introduction/jwt-authentication/) works. In order to implement Tiny Drive you need prior knowledge of JWT in detail, including how they can be used for user authentication and session management in a web application. There will be some coding involved on both the client-side and the server-side to configure JWT as per the instructions in this section.
- [Concepts]({{site.baseurl}}/tinydrive/introduction/concepts/)
- [Configuration Options]({{site.baseurl}}/tinydrive/getting-started/configuration/)
- [Integrations]({{site.baseurl}}/tinydrive/integrations/)

## Need help? ##

We are striving to make Tiny Drive as useful and simple as possible. For support related issues such as problems with JWT authentication and implementing Tiny Drive, check our [help page](/tinydrive/get-help/) or please contact [support](https://support.tiny.cloud/hc/en-us/requests/new).
