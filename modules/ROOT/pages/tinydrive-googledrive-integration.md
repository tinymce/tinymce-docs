# Google Drive integration
:title_nav: Google Drive
:description: Guide for setting up Tiny Drive with Google Drive.
:keywords: google drive

## Overview

{{site.cloudfilemanager}} enables you to import files from any Google Drive account if you setup the google drive integration by providing Google credentials. When the user selects a file from Google Drive, it will instantly be uploaded or imported into the {{site.cloudfilemanager}} storage so that it can be viewed online and shared through {{site.cloudfilemanager}}. Documents picked from Google Drive will be converted to PDF Files within {{site.cloudfilemanager}}.

## Prerequisites

1. A valid Google Drive user account is required for integrating Google Drive with {{site.cloudfilemanager}}. Refer to this [Google Drive](https://support.google.com/drive/answer/2424384?co=GENIE.Platform%3DDesktop&hl=en) link for more information on creating a Google Drive user account.
2. The Google Drive API should be enabled. Refer to this [Google Drive](https://developers.google.com/drive/api/v3/enable-drive-api) link for more information on enabling the Google Drive API.
3. The Google Picker API should be enabled. Refer to this [Google Drive](https://developers.google.com/picker/docs/) link for more information on enabling the Google Picker API.

## Obtaining the API Key and Client ID

You can obtain the Google Drive credentials by following the steps below.

### 1. Create the Google API Key

1. Open the [Google Console Credentials](https://console.developers.google.com/apis/credentials) page
2. Click on the `Create credentials` button.
3. Click on the `API key` item.

<img src="{{site.baseurl}}/images/tinydrive-googledrive-dump1.png" style="border: 1px solid #BBB">

### 2. Copy the new Google API Key

Copy the generated Google API key this will later be used to configure {{site.cloudfilemanager}}:

<img src="{{site.baseurl}}/images/tinydrive-googledrive-dump2.png" style="border: 1px solid #BBB">

### 3. Create the OAuth client ID

Click on the `Create credentials` button then on `OAuth client ID` item:

<img src="{{site.baseurl}}/images/tinydrive-googledrive-dump3.png" style="border: 1px solid #BBB">

### 4. Fill in the OAuth details

1. Select `Web application` from `Application type`
2. Add your domains to `Authorized JavaScript origins`.
3. Click `create`.
4. Copy the created `client id` it will be used later to configure {{site.cloudfilemanager}}.

<img src="{{site.baseurl}}/images/tinydrive-googledrive-dump4.png" style="border: 1px solid #BBB">

### 5. Restrict Client ID API access

1. Click the edit icons for the Client ID you created
2. Click on the `API restrictions` tab
3. Click on the `Select API` dropdown
4. Select `Google Picker API` from the dropdown
5. Click `Save`

<img src="{{site.baseurl}}/images/tinydrive-googledrive-dump5.png" style="border: 1px solid #BBB">

### 6. Configure tinydrive to use the new Google Drive credentials

The Google Drive API key can be configured by setting the [tinydrive_google_drive_key]({{site.baseurl}}/plugins-ref/premium/tinydrive/configuration/dropbox-and-google-drive/#tinydrive_google_drive_key). The Google OAuth client ID can be configured by setting the [tinydrive_google_drive_client_id]({{site.baseurl}}/plugins-ref/premium/tinydrive/configuration/dropbox-and-google-drive/#tinydrive_google_drive_client_id).

```js
tinymce.init({
  selector: 'textarea',  // change this value according to your HTML
  plugins: 'tinydrive',
  tinydrive_token_provider: 'URL_TO_YOUR_TOKEN_PROVIDER',
  tinydrive_google_drive_key: '<your google api key>',
  tinydrive_google_drive_client_id: '<your google drive OAuth client ID>'
});
```

For information on other {{site.cloudfilemanager}} config options refer to the [configuration]({{site.baseurl}}/plugins-ref/premium/tinydrive/configuration/) section of this document.

### 7. Tiny Drive UI

1. From the {{site.productname}} user interface, click on the ![Insert/edit image]({{site.baseurl}}/images/insertimage.png) button to access the {{site.cloudfilemanager}} user interface.
2. Click on the ![Upload/Create]({{site.baseurl}}/images/upload.png) button to select Google Drive from the list of storages.
3. Select the file to upload/import from Google Drive by clicking on the radio button next to it. Alternatively, to directly insert the file into the editor, double-click on it.
4. Choose **Save** to upload/import the selected file/files to {{site.cloudfilemanager}}.

**Result:** You should be able to view the selected files in your {{site.cloudfilemanager}} storage.

#### Other file options

The following other options can be performed to the selected file :

1. Follow the steps from 1-3 of the {{site.cloudfilemanager}} UI procedure.
2. Choose from the options below as per the requirement:
   * Choose **Star** to flag important files and view the starred file under the **Star** tab in the Google Drive Home tab.
   * Choose **Download** to download the selected file/files.
   * Choose **Delete** to remove the selected file/files from the Google Drive.

Read more about these options [here](https://gsuite.google.com/learning-center/products/drive/get-started/#!/).

## Interactive example

Here is an interactive example of Google Drive enabled on {{site.cloudfilemanager}}.

{% include live-demo.html id="drive-demo-googledrive" %}
