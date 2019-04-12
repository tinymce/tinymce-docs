---
layout: default
title: Dropbox integration
title_nav: Dropbox integration
description: Guide for setting up Tiny Drive with Dropbox.
keywords: dropbox
---

## Overview

Tiny Drive enables you to import files from any Dropbox account if you setup the dropbox integration by providing a Dropbox app key. When the user selects a file from Dropbox it will instantly be uploaded or imported into the Tiny Drive storage so that it can be viewed online and shared though Tiny Drive.

## Obtaining the Dropbox app key

You can get Dropbox integration up and running by the three easy steps below.

### 1. Create the application

1. Open the [https://www.dropbox.com/developers/apps/create](Create app) page
2. Select the `Dropbox API` from `Choose an API`
3. Select `Full Dropbox` from the `Choose the type of access you need`
4. Name your app with something company unique `acmeinc-tinydrive` for example.

<img src="{{site.baseurl}}/images/tinydrive-dropbox-dump1.png" style="border: 1px solid #BBB">

### 2. Get the Dropbox app key and add domains

1. Copy the key from `App key` this will then be used as the key for the [tinydrive_dropbox_app_key]({{site.baseurl}}/tinydrive/configuration/#tinydrive_dropbox_app_key)
2. Configure the domains that is serving your application in `Chooser/Saver domains`

<img src="{{site.baseurl}}/images/tinydrive-dropbox-dump2.png" style="border: 1px solid #BBB">

### 3. Configure tinydrive to use the new Dropbox app key

You configure the Dropbox api key by setting the [tinydrive_dropbox_app_key]({{site.baseurl}}/tinydrive/configuration/#tinydrive_dropbox_app_key) like in the example below.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "tinydrive",
  tinydrive_dropbox_app_key: '<your dropbox app key>'
});
```