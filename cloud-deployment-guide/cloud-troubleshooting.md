---
layout: default
title: Cloud Troubleshooting
description_short: Troubleshooting errors shown by the Tiny Cloud
description: Causes and solutions to common issues when using Tiny Cloud
keywords: tinymce cloud script textarea apiKey troubleshooting banners domain referer
---

When {{site.cloudname}} detects a problem, it will show an editor notification containing information about the problem. This page describes the cause and solution for common {{site.cloudname}} error notifications.

> **NOTE**: The wording of the notifications shown here may differ from the actual notifications from {{site.cloudname}}.

## "This domain is not registered with Tiny Cloud. Please see the quick start guide or create an account."

### Cause

This notification is **only shown** when either:

- An `apiKey` is not provided in the script tag.
- `no-api-key` is provided as the apiKey.

Such as:

```html
<script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
```

### Solution

Update the `src` URL include your (website or application developer's) {{site.cloudname}} API Key. Your API key should replace the string `no-api-key`. For example, if your API is `abcd1234`:

```html
<script src="https://cdn.tiny.cloud/1/abcd1234/tinymce/5/tinymce.min.js" referrerpolicy="origin"></script>
```

To retrieve your API key, or to sign up for an API key, visit: [{{site.cloudname}}]({{site.accountsignup}}).

## "The API key you have entered is invalid. Please review your API key."

### Cause

This notification is shown when either:

- The API key provided cannot be found on the {{site.cloudname}} server.
- The provided `apiKey` has the wrong structure.

The `apiKey` must be:

- An exact length,
- comprised of certain characters, and
- created with a {{site.cloudname}} account on the [{{site.accountpage}} page]({{site.accountsignup}}).

### Solution

Check the `apiKey` provided in the script tag:

- Remove any leading or trailing spaces
- Any other characters that are not in your apiKey. If you are using variable substitution, ensure that the variable is substituting properly.
- Matches the API key shown at {{site.accountpageurl}}.

## "This domain is not registered with Tiny Cloud. Please review your approved domains."

### Cause

{{site.cloudname}} verifies the domain {{site.productname}} is loading from by checking the domain portion of the **Referer** header in the network request. This notification is shown when the **Referer** of your page does not match the list of approved domains stored against your `apiKey`. You can
view what your approved domains are in [Account]({{site.accountpageurl}}).

Sometimes the domains in the **Referer** header does not match with the URL in the browser's address bar. To check the **Referer** header, open your browser's _Developer's Tools_ and open the _Network_ tab. From there, find the request being made to load {{site.productname}} with your API key, and click on the **Headers** tab.  In the section called **Request Headers** there should be a field for **Referer**. This is the value that {{site.productname}} is checking against your approved domains. It must match one your approved domains, or you will receive this notification.

### Solution

If the `Referer` is what you are expecting, then you need to ensure that domain is included in your list of approved domains. If the `Referer` is not what you are expecting, you may need to adjust your application's **Referer** header settings.

## "We could not check your domain because the referer header was missing. Please see the guide on how to ensure the referer header is present."

### Cause

{{site.cloudname}} verifies the domain {{site.productname}} is loading from by checking the domain portion of the **Referer** header in the network request. If the **Referer** header is absent, you will receive this notification.

*Referer* headers are sometimes stripped out by certain browser settings and browser extensions. Remember, {{site.cloudname}} only cares about the domain portion of the **Referer** header, so for improved performance and privacy we recommend setting the `referrerpolicy` to `origin` when requesting {{site.cloudname}} resources.

### Solution

Identify which setting or extension is responsible for blocking the **Referer** being sent. Some common extensions are:

* `Referer Control` - [Google Chrome](https://chrome.google.com/webstore/detail/referer-control/hnkcfpcejkafcihlgbojoidoihckciin?hl=en) and [Firefox](https://addons.mozilla.org/en-US/firefox/addon/referercontrol/)
*

Once you have identified the setting or extension, modify it to allow just the `Origin` portion of the `Referer` to be sent. Alternatively, you can disable it for any pages where you are running {{site.cloudname}}.

## "The ___ premium plugin is not enabled on your API key. Upgrade your account."

### Cause

This notification is shown when your apiKey does not have access to the premium plugin being requested. This could be the result of a trial recently expiring, and your {{site.productname}} configuration attempting to load premium plugins you can no longer access.

You may also be seeing this notification if you are using the wrong apiKey. Ensure that you are using the apiKey that has the right entitlements.

### Solution

Either remove the premium plugin that you do not have access to, or upgrade your subscription to provide access to that premium plugin.
