---
layout: default
title: Getting started
title_nav: Getting started
description: Getting started with Tiny Drive
keywords: tinydrive starter projects
---

The steps required for setting up {{site.cloudfilemanager}} are:

1. Register for a {{site.cloudname}} API key.
1. Add a public key to the {{site.cloudname}} API key.
1. Set up a JSON Web Token (JWT) Provider endpoint (or server).
1. Configure the required {{site.cloudfilemanager}} options.

## 1. Register for a Tiny Cloud API key

If you do not have a {{site.cloudname}} API key, you can sign up for a trial or purchase a subscription on the [{{site.companyname}} pricing page]({{site.pricingpage}}/).

## 2. Add a public key to the {{site.cloudname}} API key

{% include auth/private-public-key-pairs-for-tiny-cloud-services.md %}

## 3. Set up a JSON Web Token (JWT) Provider endpoint

{{site.cloudfilemanager}} requires setting up JSON Web Token (JWT) authentication. This is to ensure that only authenticated users will be able to access {{site.cloudfilemanager}}.

For information on setting up a JSON Web Token Provider endpoint, see: [{{site.cloudfilemanager}} JWT Authentication Setup]({{site.baseurl}}/tinydrive/jwt-authentication/).

## 4. Configure the required {{site.cloudfilemanager}} options

To use {{site.cloudfilemanager}}, add a script to the page with your API key as part of the URL. The URL is in the following format:

```html
{{site.tdcdnurl}}
```

Then add and configure the required {{site.cloudfilemanager}} APIs. {{site.cloudfilemanager}} has the following APIs:

- [Upload]({{site.baseurl}}/tinydrive/apis/tinydrive-upload/)
- [Browse]({{site.baseurl}}/tinydrive/apis/tinydrive-browse/)
- [Pick]({{site.baseurl}}/tinydrive/apis/tinydrive-pick/)
- [Start]({{site.baseurl}}/tinydrive/apis/tinydrive-start/)

### Example: Adding {{site.cloudfilemanager}} to a page

```html
<script src="{{site.tdcdnurl}}" referrerpolicy="origin"></script>
<script>
tinydrive.pick({
  token_provider: '/your-local/jwt-provider'
}).then(function (result) {
  console.log(result.files);
});
</script>
```

## Next Steps

For information on:

- Setting up a JWT endpoint for authentication, see: [JWT Authentication Setup]({{site.baseurl}}/tinydrive/jwt-authentication/).
- The Upload, Browse, Pick, and Start {{site.cloudfilemanager}} APIs, see: [{{site.cloudfilemanager}} APIs]({{site.baseurl}}/tinydrive/apis/).
- The {{site.cloudfilemanager}} Google Drive and Dropbox integrations, see: [{{site.cloudfilemanager}} integrations]({{site.baseurl}}/tinydrive/integrations/).
