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
interface PluginApi {
  pick: (settings: PluginPickerApiSettings) => Promise<PickerResult>;
  browse: (settings: PluginPickerApiSettings) => Promise<void>;
  upload: (settings: PluginUploadApiSettings) => Promise<UploadResult>;
}

interface PluginPickerApiSettings {
  filetypes?: string[];
}

interface PluginUploadApiSettings {
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
