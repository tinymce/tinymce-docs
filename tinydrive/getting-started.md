---
layout: default
title: Getting started
title_nav: Getting started
description: Getting started with Tiny Drive
keywords: tinydrive starter projects
---

## Prerequisites

* A {{site.cloudname}} API key from [{{site.accountpage}}]({{site.accountsignup}}).
* A JWT key generated at [{{site.accountpageurl}}]({{site.accountpageurl}}). Temporarily store the generated keys for use in the following procedure.

{{site.cloudfilemanager}} allows trouble free management of assets such as images and files in the cloud. {{site.cloudfilemanager}} is only available in [{{site.cloudname}}]({{site.accountsignup}}) and requires registering for an API key.

To enable this functionality in the {{site.productname}} editor, add `tinydrive` to the list of plugins in the `tinymce.init` call. The user also needs to be authenticated using a [JSON Web Token (JWT)]({{site.baseurl}}/tinydrive/jwt-authentication/).

Once {{site.cloudfilemanager}} is enabled, it integrates as the default file picker for the Image, Link, and Media dialogs and as the default upload handler for local images being pasted or inserted into the document.


## Starter projects

To get started quickly and understand how {{site.cloudfilemanager}} works, we highly recommend trying one of the starter projects on Github, should get you up and running in no time.

The starter projects have their own procedures to get {{site.cloudfilemanager}} up and running. Choose a starter project of a familiar language and follow the steps to setup {{site.cloudfilemanager}}. The links will take you to the Github page for the starter project of your choice, where the source code is available for you to view.

#### Choose a familiar language

<table style="text-align: center">
    <tbody>
        <tr>
            <td><a href="https://github.com/tinymce/tinydrive-dotnet-mvc-starter"><img src="{{site.baseurl}}/images/netcore.svg" width="120"></a></td>
            <td><a href="https://github.com/tinymce/tinydrive-nodejs-starter"><img src="{{site.baseurl}}/images/nodejs.svg"  width="120"></a></td>
            <td><a href="https://github.com/tinymce/tinydrive-php-starter"><img src="{{site.baseurl}}/images/php.svg"  width="120"></a></td>
            <td><a href="https://github.com/tinymce/tinydrive-java-spring-starter"><img src="{{site.baseurl}}/images/java.png" height="120"></a></td>
        </tr>
        <tr>
            <td><a href="https://github.com/tinymce/tinydrive-dotnet-mvc-starter">.NET Core</a></td>
            <td><a href="https://github.com/tinymce/tinydrive-nodejs-starter">Node.js</a></td>
            <td><a href="https://github.com/tinymce/tinydrive-php-starter">PHP</a></td>
            <td><a href="https://github.com/tinymce/tinydrive-java-spring-starter">Java Spring</a></td>
        </tr>
    </tbody>
</table>


### Implementing with your system

The next step, after seeing how {{site.cloudfilemanager}} works in these starter projects, is trying to implement it with your own system, the [JSON Web Token]({{site.baseurl}}/tinydrive/jwt-authentication/) authentication solution would have to be tied to the login authentication of your system. This usually means integrating the JWT authentication to the existing session authentication so that users automatically login to {{site.cloudfilemanager}} and your system at the same time.

#### Additional resources

Go through the following additional resources to figure out how to configure {{site.cloudfilemanager}} with a specific system.

- We recommend reading up and trying to understand how [JWT authentication]({{site.baseurl}}/tinydrive/jwt-authentication/) works.
- [Configuration Options]({{site.baseurl}}/tinydrive/configuration/)
- [Integrations]({{site.baseurl}}/tinydrive/integrations/)

## Need help?

{{site.companyname}} is striving to make {{site.cloudfilemanager}} as useful and simple as possible. For support related issues such as problems with JWT authentication and implementing {{site.cloudfilemanager}}, check the [help page]({{site.baseurl}}/tinydrive/get-help/) or please contact [{{site.supportname}}]({{site.supporturl}}).
