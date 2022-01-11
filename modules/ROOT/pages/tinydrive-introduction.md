# Tiny Drive Introduction
:title_nav: Introduction
:description: Introduction of what Tiny Drive is and its capabilities
:keywords: tinydrive introduction overview

{% assign pluginname = "Tiny Drive" %}
{% assign plugincode = "tinydrive" %}

{{site.cloudfilemanager}} is a premium {{site.productname}} plugin for cloud-based asset management and storage. {{site.cloudfilemanager}} allows your users to upload, manage, and use files in {{site.productname}}.

For documentation on using {{site.cloudfilemanager}} outside {{site.productname}}, visit: [{{site.cloudfilemanager}} documentation]({{site.baseurl}}/tinydrive/).

> **Note**: This plugin is only available for [{{site.cloudname}} users]({{site.pricingpage}}/).

## Tiny Drive features

{{site.cloudfilemanager}} allows the following file formats, extensions, and storage options:

| Feature | Value |
| ------- | ----- |
| File upload | Upload files through drag and drop or using the upload button. If integrated with {{site.productname}}, files added using drag and drop or copy and paste in {{site.productname}} will be uploaded using {{site.cloudfilemanager}} |
| CDN | Files are stored in S3 and accessed through Amazons CDN for fast delivery anywhere in the world |
| File management | Move, copy, delete and organize your online file storage |
| Search | Search your library of files, star the ones you use often for quick access |
| Preview | Preview images and video before you select which content to use |
| Integrations | Integrations with Google Drive and Dropbox allows you to import file from these systems through {{site.cloudfilemanager}} |

The storage and bandwidth quota varies based upon your [{{site.cloudname}} Plan]({{site.pricingpage}}/).

## Interactive example

{% include live-demo.html id="drive" %}

{% assign pluginminimumplan = 'tierone' %}
{% include misc/purchase-premium-plugins.md %}

## Upload files URL

The URL format for each file is `https://drive.tiny.cloud/1/{your-api-key}/{uuid}`, and is generated when a file is uploaded.
If a file is moved or renamed, it will still have the same unique URL, so the restructuring of the files using {{site.cloudfilemanager}} won't affect the URL. Deleting a file will mark the URL as being unused, and the URL will not continue to work.

## JSON Web Token (JWT) based authentication

Some {{site.companyname}} services require setting up JSON Web Token (JWT) authentication. This allows the {{site.cloudname}} to verify that the end users are allowed to access a particular feature. JWT is a common authorization solution for web services and is documented in detail on the https://jwt.io/ website. For information on setting up JWT authentication, see the [JWT authentication section]({{site.baseurl}}/plugins-ref/premium/tinydrive/jwt-authentication/).

## User specific file access

{{site.cloudfilemanager}} allows developers to set user-specific directories, so users can only see their own files. This can be done by setting the `https://claims.tiny.cloud/drive/root` custom JSON Web Token (JWT) claim to a path within {{site.accountpage}}. This path will automatically be constructed when the user is accessing {{site.cloudfilemanager}} using a JWT key with that claim. The user can only see and manage files within that directory.

## Security and performance

{{site.companyname}} is aware that security is a primary concern when it comes to cloud storage. As a user's assets are passed between {{site.cloudfilemanager}} and the {{site.cloudname}}, {{site.cloudfilemanager}} uses the {{site.accountname}} API key and a JSON Web Token (JWT) to authenticate each data transaction.

## File types

There is a fixed set of file extensions (formats) that can be uploaded, and these are placed in the file type categories below. Some file formats are blocked as they can be a security issue.

{% include plugins/tinydrive-filetypeslist.md %}

{% include tinydrive-starter-projects.md %}
