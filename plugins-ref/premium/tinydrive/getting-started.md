---
layout: default
title: Getting started
title_nav: Getting started
description: Getting started with Tiny Drive
keywords: tinydrive starter projects
---

To get started with {{site.cloudfilemanager}}, try one of the starter projects below, or follow our guide on [Implementing Tiny Drive with your system](#implementingtinydrivewithyoursystem).

{% include tinydrive-starter-projects.md %}

## Implementing Tiny Drive with your system

The steps required for setting up {{site.cloudfilemanager}} are:

1. Register for a {{site.cloudname}} API key.
1. Add a public key to the {{site.cloudname}} API key.
1. Set up a JSON Web Token (JWT) Provider endpoint (or server).
1. Configure the required {{site.productname}} options.

## 1. Register for a Tiny Cloud API key

If you do not have a {{site.cloudname}} API key, you can sign up for a trial or purchase a subscription on the [{{site.companyname}} pricing page]({{site.pricingpage}}/).

## 2. Add a public key to the {{site.cloudname}} API key

{% include auth/private-public-key-pairs-for-tiny-cloud-services.md %}

## 3. Set up a JSON Web Token (JWT) Provider endpoint

{{site.cloudfilemanager}} requires setting up JSON Web Token (JWT) authentication. This is to ensure that only authenticated users will be able to access {{site.cloudfilemanager}}.

For information on setting up a JSON Web Token Provider endpoint, see: [{{site.cloudfilemanager}} JWT Authentication Setup]({{site.baseurl}}/plugins-ref/premium/tinydrive/jwt-authentication/).

## 4. Configure the required {{site.productname}} options

To enable the {{site.cloudfilemanager}} plugin:

- Add `tinydrive` to the plugins list
- Configure the [`tinydrive_token_provider`]({{site.baseurl}}/plugins-ref/premium/tinydrive/configuration/#tinydrive_token_provider)

For example:

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your html
  plugins: 'tinydrive',
  toolbar: 'insertfile',
  tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER'
});
```

## Next Steps

For information on:

- Setting up a JWT endpoint for authentication, see: [JWT Authentication Setup]({{site.baseurl}}/plugins-ref/premium/tinydrive/jwt-authentication/).
- Configuring the {{site.cloudfilemanager}} plugin, see: [Tiny Drive configuration]({{site.baseurl}}/plugins-ref/premium/tinydrive/configuration/).
- The included {{site.cloudfilemanager}} toolbar buttons and menu items, see: [Toolbar buttons and menu items for the Tiny Drive plugin]({{site.baseurl}}/plugins-ref/premium/tinydrive/tinydrive_toolbars_menus/).
- Creating custom UI elements or behaviors using the {{site.cloudfilemanager}} APIs, see: [{{site.cloudfilemanager}} APIs]({{site.baseurl}}/plugins-ref/premium/tinydrive/apis/).
- The {{site.cloudfilemanager}} Google Drive and Dropbox integrations, see: [{{site.cloudfilemanager}} integrations]({{site.baseurl}}/plugins-ref/premium/tinydrive/integrations/).
