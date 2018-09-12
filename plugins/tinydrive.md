---
layout: draft
title: Tiny Drive
title_nav: Tiny Drive
description: Cloud-based file and image management for TinyMCE.
keywords: tinydrive storage media tiny drive
---

This plugin adds the functionality to upload and manage files and images to the cloud. This plugin is only available in Tiny Cloud and requires you to register for an API key. To enable this functionality, add the `tinydrive` to the list of plugins in the `tinymce.init` call. You also also need to authenticate the user using a JWT token.

Once you enable Drive it, by default, integrates as the default file picker for the Image, Link, and Media dialogs and as the default upload handler for local images being pasted or inserted into the document.

## Example

    tinymce.init({
      selector: 'textarea',  // change this value according to your html
      plugins: 'tinydrive'
    });

## Options

These settings are necessary to make Drive work.

## `tinydrive_token_provider`

This setting could either be an URL to a page that takes a HTTP JSON Post request and produces a JSON structure with a valid JWT token. It uses a post request to avoid caching by browsers and proxies.

It can also be a function that provides the same token though a callback. This allows you to make your own http request in any format you like. The provider function is a function that has a success and failure callback where the success takes a object with a token property containing the JWT token and the failure callback takes a string to present as an error message if the token could not be produced.

You can read more about how to create these JWT tokens in the [JWT authentication]({{site.baseurl}}/configure/jwt-authentication/) guide.

**Type:** `String` or `Function`

**Required:** yes

## Example using a JWT token provider URL

    tinymce.init({
      selector: 'textarea',  // change this value according to your HTML
      plugins: 'tinydrive',
      tinydrive_token_provider: '/jwt'
    });

## Example using a JWT token provider callback

    tinymce.init({
      selector: "textarea",  // change this value according to your HTML
      plugins: "tinydrive",
      tinydrive_token_provider: function (success, failure) {
         success({ token: 'jwt-token' });
         // failure('Could not create a jwt token')
      }
    });

## `tinydrive_upload_path`

This setting allows you to change the default upload path for files that get uploaded when pasting content into the editor or uploading directly though the Image dialog or when you drag-and-drop into the editor. It will produce a date based structure within this path like this /uploads/{year}/{month}/{day}. This is to avoid having thousands of files in the same directory as having the default `automatic_uploads` setting enabled it will automatically upload files directly after images are added to the editor.

**Type:** `String`

**Default Value:** `"/uploads"`

## Example

    tinymce.init({
      selector: "textarea",  // change this value according to your HTML
      plugins: "tinydrive",
      tinydrive_upload_path: '/some/other/path'
    });

## Insert File toolbar button

Drive will automatically integrate into the Image, Link, and Media dialogs as a custom file picker. You can also configure it to insert files directly into your content using the '`insertfile`' button. To enable this button add it to your toolbar editor setting.

The Insert File toolbar button will insert an images as `img` tags or other files as links to that file.

## Example of toolbar button

    tinymce.init({
      selector: "textarea",  // change this value according to your HTML
      plugins: "tinydrive",
      toolbar: 'insertfile'
    });

## Restrictions and quotas

Tiny drive has some restrictions on what files you can upload and how large these files can be. Here is a list of the current restrictions for Drive.

- The maximum file size is currently set to 100MB.
- Allowed image extensions: gif, jpeg, jpg, png, tif, tiff, bmp
- Allowed document extensions: doc, xls, ppt, pps, docx, xlsx, pptx, pdf, rtf, txt, keynote, pages, numbers
- Allowed audio extensions: wav, wave, mp3, ogg, ogv, oga, ogx, ogm, spx, opus
- Allowed video extensions: mp4 m4v, ogv, webm, mov
- Allowed archive extensions: zip

## Upload files URL

All files are uploaded to a central storage with a CDN endpoint that means that we are hosting your files and they are publicly available in read only mode for anyone that has access to the URL of that file. The URL format for each file is `https://drive.tiny.cloud/1/{your-api-key}/{uuid}` and gets generated when a file is uploaded if you move or rename a file it will still have the same unique URL so restructuring of you files using Drive won't affect where they are being used. However, deleting a file will make mark the URL as being unused and the URL will not continue to work.

## Internal Tiny Drive Options

There are some somewhat internal settings to the client side part of tinydrive aka "clerk" there are publically available but should not be documented externally.

## `tinydrive_script_url`

This setting allows you to override the default path where the lazy loaded asset manager js file is loaded from.

## Example

    tinymce.init({
      selector: 'textarea',  // change this value according to your html
      plugins: 'tinydrive',
      tinydrive_script_url: 'somedir/assetmanager.js'
    });

## `tinydrive_css_url`

This setting allows you to override the default path where the lazy loaded asset manager css file is loaded from.

## Example

    tinymce.init({
      selector: 'textarea',  // change this value according to your html
      plugins: 'tinydrive',
      tinydrive_css_url: 'somedir/assetmanager.css'
    });

## `tinydrive_demo_files_url`

This setting allows you to create a fake memory only file system from a json structure this allows us to mimic a real file system and demo tiny drive without having to rely on a real server. This will override the `tinydrive_service_url` and `tinydrive_token_provider` settings.

## Example

    tinymce.init({
      selector: 'textarea',  // change this value according to your html
      plugins: 'tinydrive',
      tinydrive_demo_files_url: 'files.json'
    });

## `tinydrive_service_url`

This setting allows you to specify where the api endpoint for the backend is it will do requests based on that endpoint like this `{tinydrive_service_url}/{version}/{path}` for example [`http://localhost:4000/1/client/files/list`](http://localhost:4000/1/client/files/list) . This should be configured to the api gateway endpoint for staging, production or local development.

## Example

    tinymce.init({
      selector: 'textarea',  // change this value according to your html
      plugins: 'tinydrive',
      tinydrive_service_url: 'http://localhost:4000/'
    });