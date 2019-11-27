---
layout: default
title: Specify editor & plugin versions
description_short: Specifying editor and plugin versions for Tiny Cloud deployments.
description: Specifying editor and plugin versions for Tiny Cloud deployments.
keywords: tinymce cloud script textarea apiKey
---

## Specifying the TinyMCE editor version deployed from Cloud

Use the URL provided to specify the {{site.productname}} version when deploying via {{site.cloudname}}. Refer to the [{{site.productname}} editor via the {{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features) for more information.

The following example is the default for loading {{site.productname}} {{site.productmajorversion}} via {{site.cloudname}}. Substitute 'no-api-key' with your api key in the examples below.

```js
<script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
```

This URL specifies the latest and quality assured release of {{site.productname}}.

### Selecting specific version numbers

> All {{site.cloudname}} channels are based on the {{site.enterpriseversion}} version. For information on the latest version of the {{site.cloudname}} stable channel, see: [{{site.productname}} Release Notes]({{site.baseurl}}/release-notes/). For a list of changes that **may** be present in the {{site.cloudname}} testing channel, see: [{{site.productname}} Changelog]({{site.baseurl}}/changelog/).

Support for requesting specific versions of {{site.productname}} {{site.productmajorversion}} should work same as {{site.productname}} 4.  In the meantime, there are three release channels available, see the section below.

### dev, testing, and stable releases

Choose from `dev`, `testing`, or `stable` release channels to load the latest version of {{site.productname}} from {{site.cloudname}}.

These channels are updated automatically and provide the latest {{site.productname}} version that matches the criteria below.

#### dev release channel

This channel deploys the absolute latest version of {{site.productname}} as documented in [{{site.productname}} changelog]({{ site.baseurl }}/changelog/). The current version of {{site.productname}} available through the `dev` channel [can be found here](https://cdn.tiny.cloud/1/no-api-key/tinymce/5-dev/version.txt).

##### Example: dev release channel

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5-dev/tinymce.min.js" referrerpolicy="origin"></script>
```

#### testing release channel

This channel deploys the current release candidate for the `stable` channel. The {{site.productname}} release candidate is undergoing quality assurance. The current version of {{site.productname}} available through the `testing` channel [can be found at here](https://cdn.tiny.cloud/1/no-api-key/tinymce/5-testing/version.txt).

##### Example: testing release channel

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5-testing/tinymce.min.js" referrerpolicy="origin"></script>
```

#### stable release channel

This channel deploys the latest release of {{site.productname}} that has passed our quality assurance process. The current version of {{site.productname}} available through the `/{{site.productmajorversion}}` stable channel can be found [here](https://cdn.tiny.cloud/1/no-api-key/tinymce/5/version.txt). The {{site.productname}} {{site.productmajorversion}} stable channel can be loaded from [this url](https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js).

##### Example: stable release channel

```js
<script src="{{ site.cdnurl }}" referrerpolicy="origin"></script>
```

## Specifying the version of features/plugins deployed from Tiny Cloud

Use the URL query parameters to specify the version of each premium plugin. This is used when deployment is through the [{{site.productname}} editor and premium plugins via {{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/editor-and-features) or deploying [only premium plugins from {{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/features-only).

#### Mentions

* [Developer documentation]({{ site.baseurl }}/plugins/mentions/)
* [Supported versions](https://plugins.tinymce.com/versions/mentions)

##### Example: Mentions from Tiny Cloud

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?mentions=2.0.0" referrerpolicy="origin"></script>
```

#### Tiny Drive

* [Developer documentation]({{ site.baseurl }}/plugins/drive/)
* [Supported versions](https://plugins.tinymce.com/versions/tinydrive)

##### Example: Tiny Drive from Tiny Cloud

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?tinydrive=1.1.0" referrerpolicy="origin"></script>
```

#### Comments 2.0

* [Developer documentation]({{ site.baseurl }}/plugins/comments/)
* [Supported versions](https://plugins.tinymce.com/versions/tinycomments)

##### Example: Comments from Tiny Cloud

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?tinycomments=2.0.0" referrerpolicy="origin"></script>
```

#### Page Embed

* [Developer documentation]({{ site.baseurl }}/plugins/pageembed/)
* [Supported versions](https://plugins.tinymce.com/versions/pageembed)

##### Example: Page Embed from Tiny Cloud

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?pageembed=1.0.0" referrerpolicy="origin"></script>
```

#### Permanent Pen

* [Developer documentation]({{ site.baseurl }}/plugins/permanentpen/)
* [Supported versions](https://plugins.tinymce.com/versions/permanentpen)

##### Example: Permanent Pen from Tiny Cloud

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?permanentpen=1.0.0" referrerpolicy="origin"></script>
```

#### Format Painter

* [Developer documentation]({{ site.baseurl }}/plugins/formatpainter/)
* [Supported versions](https://plugins.tinymce.com/versions/formatpainter)

##### Example: Format Painter from Tiny Cloud

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?formatpainter=1.0.0" referrerpolicy="origin"></script>
```

#### PowerPaste

* [Developer documentation]({{ site.baseurl }}/plugins/powerpaste)
* [Supported versions](https://plugins.tinymce.com/versions/powerpaste)

##### Example: PowerPaste from Tiny Cloud

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?powerpaste=4.0.0" referrerpolicy="origin"></script>
```

#### Spell Checker Pro

* [Developer documentation]({{ site.baseurl }}/plugins/tinymcespellchecker)
* [Supported versions](https://plugins.tinymce.com/versions/tinymcespellchecker)

##### Example: Spell Checker Pro from Tiny Cloud

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?tinymcespellchecker=1.0.0" referrerpolicy="origin"></script>
```

#### Accessibility Checker

* [Developer documentation]({{ site.baseurl }}/plugins/a11ychecker)
* [Supported versions](https://plugins.tinymce.com/versions/a11ychecker)

##### Example: Accessibility Checker from Tiny Cloud

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?a11ychecker=2.0.0" referrerpolicy="origin"></script>
```

#### Advanced Code Editor

* [Developer documentation]({{ site.baseurl }}/plugins/advcode/)
* [Supported versions](https://plugins.tinymce.com/versions/advcode)

##### Example: Advanced Code Editor from Tiny Cloud

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?advcode=2.0.0" referrerpolicy="origin"></script>
```

#### Enhanced Media Embed

* [Developer documentation]({{ site.baseurl }}/plugins/mediaembed/)
* [Supported versions](https://plugins.tinymce.com/versions/mediaembed)

##### Example: Enhanced Media Embed from Tiny Cloud

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?mediaembed=2.0.0" referrerpolicy="origin"></script>
```

#### Link Checker

* [Developer documentation]({{ site.baseurl }}/plugins/linkchecker/)
* [Supported versions](https://plugins.tinymce.com/versions/linkchecker)

##### Example: Link Checker from Tiny Cloud

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?linkchecker=2.0.0" referrerpolicy="origin"></script>
```

## Specifying a self-hosted deployment of features/plugins

<!-- Additional configuration is required when serving [only premium plugins from {{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/features-only) and from a self-hosted installation. URL query parameters and the special version name "SDK" can also be used in the configuration. -->

If you're deploying [only premium plugins from {{site.cloudname}}]({{ site.baseurl }}/cloud-deployment-guide/features-only), you may want to have some features served from {{site.cloudname}} and some features served from your self-hosted installation. This is also possible with URL query parameters and the special version name "SDK".

The "SDK" version lets the {{site.productname}} Plugin Manager know that you're not using {{site.cloudname}} version of a particular plugin and that it shouldn't serve the plugin from {{site.cloudname}}. It also won't display any warning or error messages if you're not entitled to it.

#### Mentions

* [Developer documentation]({{ site.baseurl }}/plugins/mentions/)

##### Example: Mentions from Tiny Cloud for self-hosted deployments

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?mentions=sdk" referrerpolicy="origin"></script>
```

#### Tiny Drive

* [Developer documentation]({{ site.baseurl }}/plugins/drive/)

##### Example: Tiny Drive from Tiny Cloud for self-hosted deployments

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?tinydrive=sdk" referrerpolicy="origin"></script>
```

#### Comments 2.0

* [Developer documentation]({{ site.baseurl }}/plugins/comments/)

##### Example: Comments from Tiny Cloud for self-hosted deployments

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?tinycomments=sdk" referrerpolicy="origin"></script>
```

#### Page Embed

* [Developer documentation]({{ site.baseurl }}/plugins/pageembed/)

##### Example: Page Embed from Tiny Cloud for self-hosted deployments

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?pageembed=sdk" referrerpolicy="origin"></script>
```

#### Permanent Pen

* [Developer documentation]({{ site.baseurl }}/plugins/permanentpen/)

##### Example: Permanent Pen from Tiny Cloud for self-hosted deployments

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?permanentpen=sdk" referrerpolicy="origin"></script>
```

#### Format Painter

* [Developer documentation]({{ site.baseurl }}/plugins/formatpainter/)

##### Example: Format Painter from Tiny Cloud for self-hosted deployments

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?formatpainter=sdk" referrerpolicy="origin"></script>
```

#### PowerPaste

* [Developer documentation]({{ site.baseurl }}/plugins/powerpaste)

##### Example: PowerPaste from Tiny Cloud for self-hosted deployments

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?powerpaste=sdk" referrerpolicy="origin"></script>
```

#### Spell Checker Pro

* [Developer documentation]({{ site.baseurl }}/plugins/tinymcespellchecker)

##### Example: Spell Checker Pro from Tiny Cloud for self-hosted deployments

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?tinymcespellchecker=sdk" referrerpolicy="origin"></script>
```

#### Accessibility Checker

* [Developer documentation]({{ site.baseurl }}/plugins/a11ychecker)

##### Example: Accessibility Checker from Tiny Cloud for self-hosted deployments

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?a11ychecker=sdk" referrerpolicy="origin"></script>
```

#### Advanced Code Editor

* [Developer documentation]({{ site.baseurl }}/plugins/advcode/)

##### Example: Advanced Code Editor from Tiny Cloud for self-hosted deployments

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?advcode=sdk" referrerpolicy="origin"></script>
```

#### Enhanced Media Embed

* [Developer documentation]({{ site.baseurl }}/plugins/mediaembed/)

##### Example: Enhanced Media Embed from Tiny Cloud for self-hosted deployments

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?mediaembed=sdk" referrerpolicy="origin"></script>
```

#### Link Checker

* [Developer documentation]({{ site.baseurl }}/plugins/linkchecker/)

##### Example: Link Checker from Tiny Cloud for self-hosted deployments

```js
<script src="https://cdn.tiny.cloud/1/no-api-key/tinymce/5/plugins.min.js?linkchecker=sdk" referrerpolicy="origin"></script>
```


### Featuring declared editor and plugin versions

Support for requesting specific versions of {{site.productname}} {{site.productmajorversion}} will work similar to {{site.productname}} 4.  Only the latest version is available via the {{site.cloudname}}.
