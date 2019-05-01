---
layout: default
title: Google Drive integration
title_nav: Google Drive
description: Guide for setting up Tiny Drive with Google Drive.
keywords: google drive
---

## Overview

Tiny Drive enables you to import files from any Google Drive account if you setup the google drive integration by providing a Google credentials. When the user selects a file from Google Drive it will instantly be uploaded or imported into the Tiny Drive storage so that it can be viewed online and shared though Tiny Drive. Documents picked from Google Drive will be converted to PDF Files within Tiny Drive.

## Prerequisites

1. A valid Google Drive user account is required for integrating Google Drive with Tiny Drive. Refer to [this](https://support.google.com/drive/answer/2424384?co=GENIE.Platform%3DDesktop&hl=en) link for more information on creating a Google Drive user account.
2. The Google Drive API should be enabled. Refer to [this](https://developers.google.com/drive/api/v3/enable-drive-api) link for more information on enabling the Google Drive API.
3. The Google Picker API should be enabled. Refer to [this](https://developers.google.com/picker/docs/) link for more information on enabling the Google Picker API.

## Obtaining the API Key and Client ID

You can obtain the Google Drive credentials by following the steps below.

### 1. Create the Google API Key

1. Open the [Google Console Credentials](https://console.developers.google.com/apis/credentials) page
2. Click on the `Create credentials` button.
3. Click on the `API key` item.

<img src="{{site.baseurl}}/images/tinydrive-googledrive-dump1.png" style="border: 1px solid #BBB">

### 2. Copy the new Google API Key

Copy the generated Google API key this will later be used to configure Tiny Drive:

<img src="{{site.baseurl}}/images/tinydrive-googledrive-dump2.png" style="border: 1px solid #BBB">

### 3. Create the OAuth client ID

Click on the `Create credentials` button then on `OAuth client ID` item:

<img src="{{site.baseurl}}/images/tinydrive-googledrive-dump3.png" style="border: 1px solid #BBB">

### 4. Fill in the OAuth details

1. Select `Web application` from `Application type`
2. Add your domains to `Authorized JavaScript origins`.
3. Click `create`.
4. Copy the created `client id` it will be used later to configure Tiny Drive.

<img src="{{site.baseurl}}/images/tinydrive-googledrive-dump4.png" style="border: 1px solid #BBB">

### 5. Restrict Client ID api access

1. Click the edit icons for the Client ID you created
2. Click on the `API restrictions` tab
3. Click on the `Select API` dropdown
4. Select `Google Picker API` from the dropdown
5. Click `Save`

<img src="{{site.baseurl}}/images/tinydrive-googledrive-dump5.png" style="border: 1px solid #BBB">

### 6. Configure tinydrive to use the new Google Drive credentials

You configure the Google drive api key by setting the [tinydrive_google_drive_key]({{site.baseurl}}/tinydrive/configuration/#tinydrive_google_drive_key) and the Google OAuth client ID by setting the [tinydrive_google_drive_client_id]({{site.baseurl}}/tinydrive/configuration/#tinydrive_google_drive_client_id).

```js
tinymce.init({
  selector: "textarea",  // change this value according to your HTML
  plugins: "tinydrive",
  tinydrive_google_drive_key: '<your google api key>',
  tinydrive_google_drive_client_id: '<your google drive OAuth client ID>'
});
```

For more information on other TinyDrive config options refer to the [configuration] section of this document.

### 7. Tiny Drive UI

1. From the Tiny Drive UI, click on the <Insert image> button to access the Tiny Drive UI.
2. Click on the <Upload/Create> button to select Google Drive from the list of storages.
3. Select the file to upload/import from Google Drive by double-clicking.

Result: You should be able to view the selected files in you Tiny Drive storage.