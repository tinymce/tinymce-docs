---
layout: default
title: Specify editor & plugin versions
description_short: Specifying editor and plugin versions for Tiny Cloud deployments.
description: Specifying editor and plugin versions for Tiny Cloud deployments.
keywords: tinymce cloud script textarea apiKey hybrid
---

## Specifying the TinyMCE editor version deployed from Cloud

Use the URL provided to specify the {{site.productname}} version when deploying via {{site.cloudname}}. Refer to the [{{site.productname}} editor via the {{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features) for more information.

The following example is the default for loading {{site.productname}} {{site.productmajorversion}} via {{site.cloudname}}. Substitute 'no-api-key' with your api key in the examples below.

```js
<script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
```

This URL specifies the latest and quality assured release of {{site.productname}}.

### Selecting specific version numbers

> All {{site.cloudname}} channels are based on the {{site.enterpriseversion}} version. For information on the latest version of the {{site.cloudname}} {{site.productmajorversion}} channel, see: [{{site.productname}} Release Notes]({{site.baseurl}}/release-notes/). For a list of changes that **may** be present in the {{site.cloudname}} testing channel, see: [{{site.productname}} Changelog]({{site.baseurl}}/changelog/).

### {{site.productmajorversion}}-dev, {{site.productmajorversion}}-testing, and {{site.productmajorversion}} releases

Choose from `{{site.productmajorversion}}-dev`, `{{site.productmajorversion}}-testing`, or `{{site.productmajorversion}}` release channels to load the latest version of {{site.productname}} from {{site.cloudname}}.

These channels are updated automatically and provide the latest {{site.productname}} version that matches the criteria below.

#### {{site.productmajorversion}}-dev release channel

This channel deploys the absolute latest version of {{site.productname}} as documented in [{{site.productname}} changelog]({{ site.baseurl }}/changelog/). The current version of {{site.productname}} available through the `{{site.productmajorversion}}-dev` channel [can be found here](https://cdn.tiny.cloud/1/no-api-key/tinymce/{{site.productmajorversion}}-dev/version.txt).

##### Example: Using the `{{site.productmajorversion}}-dev` release channel

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/{{site.productmajorversion}}-dev/tinymce.min.js" referrerpolicy="origin"></script>
```

#### {{site.productmajorversion}}-testing release channel

This channel deploys the current **release candidate** for the `{{site.productmajorversion}}` channel. The {{site.productname}} release candidate is undergoing quality assurance. The current version of {{site.productname}} available through the `{{site.productmajorversion}}-testing` channel [can be found at here](https://cdn.tiny.cloud/1/no-api-key/tinymce/{{site.productmajorversion}}-testing/version.txt).

##### Example: Using the `{{site.productmajorversion}}-testing` release channel

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/{{site.productmajorversion}}-testing/tinymce.min.js" referrerpolicy="origin"></script>
```

#### {{site.productmajorversion}} release channel

This channel deploys the latest release of {{site.productname}} that has passed our quality assurance process. The current version of {{site.productname}} available through the `/{{site.productmajorversion}}` channel can be found [here](https://cdn.tiny.cloud/1/no-api-key/tinymce/{{site.productmajorversion}}/version.txt). The {{site.productname}} {{site.productmajorversion}} channel can be loaded from [this url](https://cdn.tiny.cloud/1/no-api-key/tinymce/{{site.productmajorversion}}/plugins.min.js).

##### Example: Using the `{{site.productmajorversion}}` release channel

```js
<script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
```

## Specifying the version of premium plugins deployed from Tiny Cloud

Each TinyMCE version is bundled with a set of premium plugins, but it is possible to specify different versions of each premium plugin to use with TinyMCE. Use the URL query parameters to specify the version of each premium plugin to load. This approach works with both the [{{site.productname}} editor and premium plugins deployment via {{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features) or just the [premium plugins deployment from {{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/features-only).

The `identifier` of the plugin is used as a query parameter. This table summarises the possible options.

| Plugin | Identifier |  Supported Versions |
| ---- | ------------------|  ------------------ |
| [Accessibility Checker]({{site.baseurl}}/plugins/premium/a11ychecker) | `a11ychecker` |  [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/a11ychecker/available-versions) |
| [Advanced Code Editor]({{site.baseurl}}/plugins/premium/advcode/) |  `advcode` |  [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/advcode/available-versions) |
| [Advanced Tables]({{site.baseurl}}/plugins/premium/advtable/) | `advtable` | [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/advtable/available-versions) |
| [Case Change]({{site.baseurl}}/plugins/premium/casechange/) | `casechange` | [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/casechange/available-versions) |
| [Checklist]({{site.baseurl}}/docs/plugins/premium/checklist/) | `checklist` | [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/checklist/available-versions) |
| [Comments]({{site.baseurl}}/plugins/premium/comments/) | `comments` |   [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/tinycomments/available-versions) |
| [Enhanced Media Embed]({{site.baseurl}}/plugins/premium/mediaembed/) | `mediaembed` | [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/mediaembed/available-versions) |
| [Export]({{site.baseurl}}/plugins/premium/export/) | `export` | [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/export/available-versions) |
| [Format Painter]({{site.baseurl}}/plugins/premium/formatpainter/) | `formatpainter` |  [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/formatpainter/available-versions) |
| [Link Checker]({{site.baseurl}}/plugins/premium/linkchecker/) | `linkchecker` |  [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/linkchecker/available-versions) |
| [Mentions]({{site.baseurl}}/plugins/premium/mentions/) | `mentions`   |  [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/mentions/available-versions) |
| [Page Embed]({{site.baseurl}}/plugins/premium/pageembed/) | `pageembed` |  [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/pageembed/available-versions) |
| [Permanent Pen]({{site.baseurl}}/plugins/premium/permanentpen/) | `permanentpen` |  [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/permanentpen/available-versions) |
| [PowerPaste]({{site.baseurl}}/plugins/premium/powerpaste) | `powerpaste` |  [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/powerpaste/available-versions) |
| [Real-Time Collaboration]({{site.baseurl}}/plugins/premium/rtc/) | `rtc` | [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/rtc/available-versions) |
| [Spell Checker Pro]({{site.baseurl}}/plugins/premium/tinymcespellchecker) | `tinymcespellchecker` |  [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/tinymcespellchecker/available-versions) |
| [Tiny Drive]({{site.baseurl}}/plugins/premium/tinydrive/) | `tinydrive` | [Versions](http://cdn.tiny.cloud/1/no-api-key/tinymce-plugins/tinydrive/available-versions) |

### Specifying versions for the editor and premium plugin deployment

If you're deploying [both the editor and premium plugins from {{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features), then {{site.productname}} will load the premium plugins bundled with that version of the editor. If you want to choose to load a different version of a premium plugin, they you must provide then name of the plugin and the version to load via query parameters. The version must match one of the versions listed in the `Supported Versions` link for the relevant plugin.


You can combine multiple plugin specifications using `&` in your query string. For example, you can load

* mentions v2.2
* powerpaste v5.5
* all other premium plugins from those bundled with `{{site.productmajorversion}}` with:

```
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/{{site.productmajorversion}}/tinymce.min.js?mentions=2.2&powerpaste=5.5" referrerpolicy="origin"></script>
```

### Specifying a self-hosted deployment of features/plugins

If you're deploying [only premium plugins from {{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/features-only), you may want to have some features served from {{site.cloudname}} and some features served from your self-hosted installation. There are two ways to achieve this: `plugins.min.js` and `cloud-plugins.min.js`.

#### plugins.min.js

Instead of using `tinymce.min.js`, you can load {{site.productname}} yourself, and then use `plugins.min.js`, which will attempt to load every **premium** plugin from {{site.cloudname}}, unless the version of the plugin is specified as the special version `sdk`. The query string for `plugins.min.js` works the same way as `tinymce.min.js`, except for the addition of `sdk`. For example, this script tag:

```
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/{{site.productmajorversion}}/plugins.min.js?mentions=2.2&powerpaste=5.5&advcode=sdk" referrerpolicy="origin"></script>
```

Will:

* assume {{site.productname}} has already been loaded by another script on the page
* attempt to load `mentions` `v2.2` and `powerpaste` `v5.5` from {{site.cloudname}}
* attempt to load `advcode` from the self-hosted installation
* attempt to load all other premium plugins from those bundled with version `{{site.productmajorversion}}` of {{site.productname}}

> NOTE: The disadvantage of `plugins.min.js` is that if you want to only get one plugin from the {{site.cloudname}}, you need to specify **ALL** other plugins as `sdk`. When {{site.cloudname}} releases a new plugin, this will need to be updated. In situations where you only want a couple of plugins, `cloud-plugins.min.js` is a better choice.

#### cloud-plugins.min.js

Instead of using `tinymce.min.js`, you can load {{site.productname}} yourself, and then use `cloud-plugins.min.js`. Unlike `plugins.min.js`, `cloud-plugins.min.js` defaults to loading every **premium** plugin from the **self-hosted {{site.productname}} installation**, not {{site.cloudname}}. However, plugins can be loaded from {{site.cloudname}} by specifying them as query parameters.

With `cloud-plugins.min.js`, the plugins listed in the query strings don't **need** to specify versions. If there is no version specified, it uses the version bundled with the {{site.productname}} version requested. There is also no need to specify `sdk` as the version for any plugin, as that is the default.

```
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/{{site.productmajorversion}}/cloud-plugins.min.js?mentions=2.2&powerpaste=5.5&advcode" referrerpolicy="origin"></script>
```

Will:

* assume {{site.productname}} has already been loaded by another script on the page
* attempt to load `mentions` `v2.2` and `powerpaste` `v5.5` from {{site.cloudname}}
* attempt to load `advcode` from the version bundled with version `{{site.productmajorversion}}` of {{site.productname}} because it doesn't specify a version
* attempt to load all other premium plugins from the self-hosted installation

> NOTE: The disavantage of `cloud-plugins.min.js` is that if you want most plugins to be retrieved from {{site.cloudname}}, then you need to specify them all. When {{site.cloudname}} releases a new plugin, this will need to be updated. In situations where you want most of the premium plugins to be loaded from {{site.cloudname}}, `plugins.min.js` is a better choice.
