---
layout: default
title: User guide
title_nav: User guide
description: Tiny Drive starter projects
keywords: tinydrive starter projects
---

Tiny Drive allows trouble free management of assets such as images and files in the cloud. Tiny Drive is only available in [Tiny Cloud](https://www.tiny.cloud/download/) and requires registering for an API key.

To enable this functionality in the TinyMCE editor, add `tinydrive` to the list of plugins in the `tinymce.init` call. The user also needs to be authenticated using a [JSON Web Token (JWT)]({{site.baseurl}}/tinydrive/introduction/jwt-authentication/).

Once Drive is enabled, it integrates as the default file picker for the Image, Link, and Media dialogs and as the default upload handler for local images being pasted or inserted into the document.

Checkout the [Tiny Drive Demo]({{site.baseurl}}/tinydrive/introduction/demo) to get familiar with its features.

### Creating an account

To try out Tiny Drive and TinyMCE cloud-delivered editor, the first step is to create a free [Tiny account](https://www.tiny.cloud/download/).  When an account is created, an API key is assigned, which is required for the implementation of Tiny Drive.

> The API key is also provisioned with a free 30-day trial of all Tiny [premium plugins](https://apps.tiny.cloud/product-category/tiny-cloud-extensions/), with no credit card information or commitment required.

Start exploring Tiny Drive by checking out Tiny Drive [Demo]({{site.baseurl}}/tinydrive/introduction/demo), analyzing its image performance capabilities, or head straight to the [signup](https://apps.tiny.cloud/my-account/) page.

Refer to the other documents like [starter projects]({{site.baseurl}}/tinydrive/libraries) and [integrations]({{site.baseurl}}/tinydrive/integrations/) to gain understanding of the Tiny Drive configuration process.

In order to implement Tiny Drive prior in-depth knowledge of JSON Web Token (or JWT) is required, including how they can be used for user authentication and session management in a web application. There will be some coding involved on both the client-side and the server-side to configure JWT as per the instructions in this section.
Tiny recommends reading up and trying to understand how [JWT authentication]({{site.baseurl}}/tinydrive/introduction/jwt-authentication/) works.

> Note: For support related issues such as problems with JWT authentication and implementing Tiny Drive, refer to the [get help page](/tinydrive/get-help/) or please contact [support](https://support.tiny.cloud/hc/en-us/requests/new).

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

If your specific use case has not been covered by any of the above sample [starter projects]({{site.baseurl}}/tinydrive/libraries/), some customizations might be required to be applied to implement Tiny Drive in the specific system. The [JSON Web Token]({{site.baseurl}}/tinydrive/introduction/jwt-authentication/) authentication solution would have to be tied to the login authentication of your system. This usually means integrating the JWT authentication to the existing session authentication so that users automatically login to Tiny Drive and your system.

#### Additional resources

Go through the following additional resources to figure out how to configure Tiny Drive with a specific system.

- We recommend reading up and trying to understand how [JWT authentication]({{site.baseurl}}/tinydrive/introduction/jwt-authentication/) works. In order to implement Tiny Drive you need prior knowledge of JWT in detail, including how they can be used for user authentication and session management in a web application. There will be some coding involved on both the client-side and the server-side to configure JWT as per the instructions in this section.
- [Starter projects]({{site.baseurl}}/tinydrive/libraries/)
- [Configuration Options]({{site.baseurl}}/tinydrive/getting-started/configuration/)
- [Integrations]({{site.baseurl}}/tinydrive/integrations/)

## Need help? ##

Tiny is striving to make Tiny Drive as useful and simple as possible. For support related issues such as problems with JWT authentication and implementing Tiny Drive, check the [help page](/tinydrive/get-help/) or please contact [support](https://support.tiny.cloud/hc/en-us/requests/new).
