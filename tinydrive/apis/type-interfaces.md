---
layout: default
title: Tiny Drive TypeScript interfaces
title_nav: TypeScript interfaces
description: List of all available Tiny Drive API interfaces.
keywords: tinydrive configuration typescript
---

{% assign pluginname = "Tiny Drive" %}
{% assign plugincode = "tinydrive" %}

Here is a complete API reference as TypeScript types for developers used to TypeScript syntax.

```ts
interface StandaloneApi
  pick: (settings: StandalonePickerApiSettings) => Promise<PickerResult>;
  browse: (settings: StandalonePickerApiSettings) => Promise<void>;
  start: (settings: StandalonePickerApiSettings) => Promise<void>;
  upload: (settings: StandaloneUploadApiSettings) => Promise<UploadResult>;
}

type TokenProviderCallback = (
  success: (result: TokenResult) => void,
  failure: (error: string) => void
) => void;

interface CommonStandaloneApiSettings {
  token_provider: string | TokenProviderCallback;
}

interface StandalonePickerApiSettings extends CommonStandaloneApiSettings {
  filetypes?: string[];
  dropbox_app_key?: string;
  google_drive_client_id?: string;
  google_drive_key?: string;
  max_image_dimension?: number;
  skin?: string;
  target?: string;
}

interface StandaloneUploadApiSettings extends CommonStandaloneApiSettings {
  path?: string;
  name: string;
  blob: Blob;
  onprogress?: (details: UploadProgress) => void;
  max_image_dimension?: number;
}

interface DriveFile {
  url: string;
  size: number;
  name: string;
  type: string;
  mdate: string;
}

interface PickerResult {
  files: DriveFile[];
}

interface UploadProgress {
  loaded: number;
  total: number;
}

interface UploadResult {
  file: DriveFile;
}
```