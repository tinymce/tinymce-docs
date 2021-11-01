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

{% include tinydrive-starter-projects.md %}

## Basic setup

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'tinydrive',
  tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER'
});
```

### Implementing with your system

The next step, after seeing how {{site.cloudfilemanager}} works in these starter projects, is trying to implement it with your own system, the [JSON Web Token]({{site.baseurl}}/tinydrive/jwt-authentication/) authentication solution would have to be tied to the login authentication of your system. This usually means integrating the JWT authentication to the existing session authentication so that users automatically login to {{site.cloudfilemanager}} and your system at the same time.

#### Additional resources

Go through the following additional resources to figure out how to configure {{site.cloudfilemanager}} with a specific system.

- We recommend reading up and trying to understand how [JWT authentication]({{site.baseurl}}/tinydrive/jwt-authentication/) works.
- [Configuration Options]({{site.baseurl}}/tinydrive/configuration/)
- [Integrations]({{site.baseurl}}/tinydrive/integrations/)

## Need help?

{{site.companyname}} is striving to make {{site.cloudfilemanager}} as useful and simple as possible. For support related issues such as problems with JWT authentication and implementing {{site.cloudfilemanager}}, check the [help page]({{site.baseurl}}/tinydrive/get-help/) or please contact [{{site.supportname}}]({{site.supporturl}}).
