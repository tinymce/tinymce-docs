---
layout: default
title: Starter projects
title_nav: Overview
description: Tiny Drive starter projects
keywords: tinydrive starter projects
---

## Starter projects

To get started quickly and understand how Tiny Drive works, we highly recommend trying one of the starter projects on Github, should get you up and running in no time.

The starter projects have their own 5 steps to get Tiny Drive up and running. Follow those steps to get Tiny Drive up and running and play around with its features.

### Implementing with your system

If your specific use case has not been covered by any of our sample [Starter projects]({{site.baseurl}}/tinydrive/libraries/starter-projects/), you may have to apply some customizations at your end to figure out how to implement it with your own system. You need to tie our JSON Web Token (or JWT) authentication solution to the login authentication of your system. This usually means integrating the JWT authentication to your existing session authentication so that users automatically login to Tiny Drive and your system.

#### Additional resources

Go through the following additional resources to figure out how to configure Tiny Drive with your system.

- We recommend reading up and trying to understand how [JWT authentication]({{site.baseurl}}/tinydrive/jwt-authentication/) works. In order to implement Tiny Drive you need prior knowledge of JWT in detail, including how they can be used for user authentication and session management in a web application. There will be some coding involved on both the client-side and the server-side to configure JWT as per the instructions in this section.
- [Getting Started]({{site.baseurl}}/tinydrive/getting-started/)
- [Configuration Options]({{site.baseurl}}/tinydrive/configuration/)


#### Choose a familar language

<table style="text-align: center">
    <tbody>
        <tr>
            <td><h3>GitHub</h3></td>
            <td><h3>Tiny Drive docs</h3></td>
        </tr>
        <tr>
            <td><a href="https://github.com/tinymce/tinydrive-dotnet-mvc-starter"><img src="/images/netcore.svg" width="120"></a></td>
            <td><a href="../dotnet/">.NET Core</a></td>
        </tr>
        <tr>
            <td><a href="https://github.com/tinymce/tinydrive-nodejs-starter"><img src="/images/nodejs.svg"  width="120"></a></td>
            <td><a href="../nodejs/">Node.js</a></td>
        </tr>
        <tr>
            <td><a href="https://github.com/tinymce/tinydrive-php-starter"><img src="/images/php.svg"  width="120"></a></td>
            <td><a href="../php/">PHP</a></td>
        </tr>
        <tr>
            <td><a href="https://github.com/tinymce/tinydrive-java-spring-starter"><img src="/images/java.png" height="120"></a></td>
            <td><a href="../java/">Java Spring</a></td>
        </tr>
    </tbody>
</table>

## Need help? ##

We are striving to make Tiny Drive as useful and simple as possible. For support related issues such as problems with JWT authentication and implementing Tiny Drive, check our [help page](/tinydrive/get-help/) or please contact [support](https://support.tiny.cloud/hc/en-us/requests/new).
