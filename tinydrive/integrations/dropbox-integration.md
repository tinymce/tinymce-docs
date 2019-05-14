---
layout: default
title: Dropbox integration
title_nav: Dropbox
description: Guide for setting up Tiny Drive with Dropbox.
keywords: dropbox
---

## Overview

Tiny Drive enables you to import files from any Dropbox account if you set up the Dropbox integration by providing a Dropbox app key. When the user selects a file from Dropbox, it will instantly be uploaded or imported into the Tiny Drive storage so that it can be viewed online and shared through Tiny Drive.

## Prerequisites

A valid Dropbox user account is required for integrating Dropbox with Tiny Drive. Refer to [this](https://help.dropbox.com/account/create-account) link for more information on creating a Dropbox user account.

## Obtaining the Dropbox app key

You can get Dropbox integration up and running by following the steps below.

### 1. Create the application

1. Open the [https://www.dropbox.com/developers/apps/create](Create app) page.
2. Select the `Dropbox API` from `Choose an API`.
3. Select `Full Dropbox` from the `Choose the type of access you need`.
4. Name your app with something company unique `acmeinc-tinydrive` for example.

<img src="{{site.baseurl}}/images/tinydrive-dropbox-dump1.png" style="border: 1px solid #BBB">

### 2. Get the Dropbox app key and add domains

1. Copy the key from `App key` this will then be used as the key for the [tinydrive_dropbox_app_key]({{site.baseurl}}/tinydrive/configuration/#tinydrive_dropbox_app_key).
2. Configure the domains that are serving your application in `Chooser/Saver domains`.

<img src="{{site.baseurl}}/images/tinydrive-dropbox-dump2.png" style="border: 1px solid #BBB">

### 3. Configure tinydrive to use the new Dropbox app key

You configure the Dropbox API key by setting the [tinydrive_dropbox_app_key]({{site.baseurl}}/tinydrive/configuration/#tinydrive_dropbox_app_key) like in the example below.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "tinydrive",
  tinydrive_dropbox_app_key: '<your dropbox app key>'
});
```

For more information on other Tiny Drive config options refer to the [configuration]({{site.baseurl}}/getting-started/configuration/#configuringwithdropbox) section of this document.

### 4. Tiny Drive UI

1. From the TinyMCE user interface, click on the ![**Insert/edit image**]({{site.baseurl}}/images/insertimage.png) button to access the Tiny Drive user interface.
2. Click on the ![Upload/Create]({{site.baseurl}}/images/upload.png) button to select Dropbox from the list of storages.
3. Select the file to upload/import from Dropbox by clicking on the radio button next to it and click the **Choose** button to upload or **Cancel** to abort the operation.
4. Alternatively, files from your local browser can be uploaded to the Dropbox by clicking on the **Upload files** option and selecting the files to upload.

**Result:** You should be able to view the selected files in your Tiny Drive storage.

Read more about more Dropbox options [here](https://www.dropbox.com/guide/business).

### Live example

Here is a live example of Dropbox-enabled on Tiny Drive.

{% include codepen.html id="drive-demo-dropbox" %}
