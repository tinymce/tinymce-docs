---
layout: default
title: Cloud Troubleshooting
description_short: Troubleshooting errors shown by the Tiny Cloud
description: Causes and solutions to common issues when using Tiny Cloud
keywords: tinymce cloud script textarea apiKey troubleshooting banners domain referer
---

When {{site.cloudname}} detects a problem, it will show an editor notification containing information about the problem. This page describes the cause and solution for common {{site.cloudname}} error notifications.

> **NOTE**: The wording of the notifications shown here may differ from the actual notifications from {{site.cloudname}}.

## "A valid API key is required, starting 2024, to continue using TinyMCE. Please alert your admin to check the current API key."

### Cause

This notification is **only shown** when either:

- An `apiKey` is not provided in the script tag.
- `no-api-key` is provided as the API key.

Such as:

```html
<script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
```

### Solution

Update the `src` URL to include your (website or application developer's) {{site.cloudname}} API Key. Your API key should replace the string `no-api-key`. For example, if your API is `abcd1234`:

```html
<script src="https://cdn.tiny.cloud/1/abcd1234/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
```

To retrieve your API key, or to sign up for an API key, visit: [{{site.cloudname}}]({{site.accountsignup}}).

## "A valid API key is required, starting 2024, to continue using TinyMCE. Please alert your admin to check the current API key."

### Cause

This notification is shown when the API key provided cannot be found on the {{site.cloudname}} server.

The `apiKey` must be:

- An exact length,
- comprised of certain characters, and
- created with a {{site.cloudname}} account on the [{{site.accountpage}} page]({{site.accountsignup}}).

### Solution

Check the `apiKey` provided in the script tag:

- Remove any leading or trailing spaces.
- Any other characters that are not in your API key. If you are using variable substitution, ensure that the variable is substituting properly.
- Matches the API key shown at {{site.accountpageurl}}.

## "This domain is not registered with Tiny Cloud. To continue using TinyMCE, a registered domain is required, starting 2024. Please alert your admin to review the approved domains and add this one if required."

### Cause

This notification is shown when the [**Referer**](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) of the page does not match the list of approved domains stored against your `apiKey`. {{site.cloudname}} verifies the domain {{site.productname}} is loading from by checking the domain portion of the **Referer** header in the network request. You can view a list of your approved domains on your [{{site.accountpage}}]({{site.accountpageurl}}).

Sometimes the domain in the **Referer** header does not match with the URL in the browser's address bar. To check the **Referer** header:
1. Open your browser's _Developer's Tools_.
1. Open the _Network_ tab.
1. Find and select the request being made to load {{site.productname}} from {{site.cloudname}} with your API key.
1. Click on the **Headers** tab.

In the section called **Request Headers** there should be a field for **Referer**. This is the value that {{site.productname}} is checking against your approved domains. It must match one of your approved domains listed on your [{{site.accountpage}}]({{site.accountpageurl}}).

### Solution

If the `Referer` is correct for the site, ensure that the domain is included in your list of approved domains on [{{site.accountpage}}]({{site.accountpageurl}}). If the `Referer` is not what you are expecting, you may need to adjust your application's [**Referer** header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) settings.

## "We’re unable to check your domain because the referer header is missing. Please read the Guide on how to ensure your referer header is present, so we can then customize your editor experience."

### Cause

This notification is shown if the [**Referer** header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Referer) is absent for the network request when loading {{site.productname}} from {{site.cloudname}}. {{site.cloudname}} verifies the domain {{site.productname}} is loading from by checking the domain of the **Referer** header in the network request.

*Referer* headers are sometimes removed by browser settings or browser extensions. {{site.cloudname}} only needs the domain in the **Referer** header, so for improved performance and privacy {{site.companyname}} recommends setting the `referrerpolicy` to `origin` when requesting {{site.cloudname}} resources.

### Solution

Identify which browser setting or extension is responsible for blocking the **Referer** being sent. A common extension is `Referer Control`:

- [Google Chrome](https://chrome.google.com/webstore/detail/referer-control/hnkcfpcejkafcihlgbojoidoihckciin?hl=en)
- [Firefox](https://addons.mozilla.org/en-US/firefox/addon/referercontrol/)

Once you have identified the setting or extension, modify it to allow just the `Origin` of the `Referer` to be sent. Alternatively, disable the extension or setting for any pages using {{site.cloudname}}.

## "The ___ premium plugin is not enabled on your API key. Upgrade your account."

### Cause

This notification is shown when your API key does not have access to the premium plugin being requested. This could be the result of a trial expiring, and your {{site.productname}} configuration attempting to load premium plugins you can no longer access.

You may also be seeing this notification if you are using the wrong API key. Ensure that you are using the API key that has the right entitlements.

### Solution

Either remove the premium plugin from your {{site.productname}} configuration, or upgrade your subscription to provide access to that premium plugin.
