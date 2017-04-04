---
layout: default
title: Specify Editor & Plugin Versions
description_short: Specifying editor and plugin versions for Cloud deployments.
description: Specifying editor and plugin versions for Cloud deployments.
keywords: tinymce cloud script textarea apiKey
---

## Specifying the TinyMCE editor version deployed from Cloud

When deploying the [TinyMCE editor via the Cloud]({{ site.baseurl }}/get-started-cloud/editor-and-features), you’re able to specify the editor version via the provided for URL.

Our documented default for loading TinyMCE via the Cloud is:

```js
<script src="{{ site.cdnurl }}?apiKey=your_API_key"></script>
```

The *“stable”* in this URL specifies the latest release of TinyMCE that has successfully completed the Ephox quality assurance testing process.

This value can be customised in order to load the version of TinyMCE that best suits your needs.

This value can be replaced with any of the following supported versions of TinyMCE: [https://cloud.tinymce.com/versions/tiny](https://cloud.tinymce.com/versions/tiny).

### Selecting specific version numbers

You can specify a *Major* version number, a *Major.Minor* version number or a *Major.Minor.Patch* version number. If the Minor or Patch versions numbers are not present, it will default to the latest Minor and Patch version released.

##### Example
Major version number (e.g. "4").

The following would load TinyMCE *4.latest.latest*:

```js
<script src="https://cloud.tinymce.com/4/tinymce.min.js?apiKey=your_API_key"></script>
```

##### Example
Major.Minor version number (e.g. "4.3").

The following would load TinyMCE *4.3.latest*:

```js
<script src="https://cloud.tinymce.com/4.3/tinymce.min.js?apiKey=your_API_key"></script>
```

##### Example
Major.Minor.Patch version number (e.g. "4.3.2").

The following would load TinyMCE *4.3.2*:

```js
<script src="https://cloud.tinymce.com/4.3.2/tinymce.min.js?apiKey=your_API_key"></script>
```

If you enter a version that doesn’t exist, you will get a HTTP 404 response.

### "dev" and "stable" releases

Rather than specifying a specific TinyMCE version to load from the Cloud, you can choose to select from our automatically updated *"dev"* and *"stable"* release streams.

Updates to these streams will be automatic, providing you and your users with the latest TinyMCE version related to the criteria below as it’s released from Ephox.

#### "dev" release stream

This stream will deploy the absolute latest released TinyMCE version seen in the [TinyMCE changelog]({{ site.baseurl }}/changelog/).

The current version of TinyMCE available through the *dev* stream can be found at [https://cloud.tinymce.com/dev/version.txt](https://cloud.tinymce.com/dev/version.txt).

##### Example

```js
<script src="https://cloud.tinymce.com/dev/tinymce.min.js?apiKey=your_API_key"></script>
```

#### "stable" release stream

This stream will deploy the latest release of TinyMCE that has undergone release from the Ephox quality assurance testing cycle.

The current version of TinyMCE available through the *stable* stream can be found at [https://cloud.tinymce.com/stable/version.txt](https://cloud.tinymce.com/stable/version.txt).

##### Example

```js
<script src="{{ site.cdnurl }}?apiKey=your_API_key"></script>
```

## Specifying the version of features/plugins deployed from the Cloud

Whether you’re deploying both the [TinyMCE editor and premium plugins via the Cloud]({{ site.baseurl }}/get-started-cloud/editor-and-features) or deploying [only premium plugins from the Cloud]({{ site.baseurl }}/get-started-cloud/features-only), you can use URL query parameters to specify the version of each premium plugin.

#### PowerPaste

* [Developer documentation]({{ site.baseurl }}/plugins/powerpaste)
* [Supported versions](https://plugins.tinymce.com/versions/powerpaste)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&powerpaste=2.1.8"></script>
```

#### Spell Checker Pro

* [Developer documentation]({{ site.baseurl }}/plugins/tinymcespellchecker)
* [Supported versions](https://plugins.tinymce.com/versions/tinymcespellchecker)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&tinymcespellchecker=0.9.6"></script>
```

#### Accessibility Checker

* [Developer documentation]({{ site.baseurl }}/plugins/a11ychecker)
* [Supported versions](https://plugins.tinymce.com/versions/a11ychecker)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&a11ychecker=1.0.2"></script>
```

#### Advanced Code Editor

* [Developer documentation]({{ site.baseurl }}/plugins/advcode/)
* [Supported versions](https://plugins.tinymce.com/versions/advcode)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&advcode=1.0.2"></script>
```

#### Enhanced Media Embed

* [Developer documentation]({{ site.baseurl }}/plugins/mediaembed/)
* [Supported versions](https://plugins.tinymce.com/versions/mediaembed)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&mediaembed=0.0.1"></script>
```

#### Link Checker

* [Developer documentation]({{ site.baseurl }}/plugins/linkchecker/)
* [Supported versions](https://plugins.tinymce.com/versions/linkchecker)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&linkchecker=1.0.0"></script>
```

## Specifying an SDK deployment of features/plugins

If you're deploying [only premium plugins from the Cloud]({{ site.baseurl }}/get-started-cloud/features-only), you may want to have some features served from the Cloud and some features served from your own SDK installation. This is also possible with URL query parameters and the special version name "sdk".

The "sdk" version lets the TinyMCE Plugin Manager know that you're not using the Cloud version of a particular plugin and that it shouldn't serve the plugin
from the Cloud. It also won't display any warning or error messages if you're not entitled to it.


#### PowerPaste

* [Developer documentation]({{ site.baseurl }}/plugins/powerpaste)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&powerpaste=sdk"></script>
```

#### Spell Checker Pro

* [Developer documentation]({{ site.baseurl }}/plugins/tinymcespellchecker)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&tinymcespellchecker=sdk"></script>
```

#### Accessibility Checker

* [Developer documentation]({{ site.baseurl }}/plugins/a11ychecker)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&a11ychecker=sdk"></script>
```

#### Advanced Code Editor

* [Developer documentation]({{ site.baseurl }}/plugins/advcode/)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&advcode=sdk"></script>
```

#### Enhanced Media Embed

* [Developer documentation]({{ site.baseurl }}/plugins/mediaembed/)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&mediaembed=sdk"></script>
```

#### Link Checker

* [Developer documentation]({{ site.baseurl }}/plugins/linkchecker/)

##### Example

```js
<script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&linkchecker=sdk"></script>
```


## Example (featuring a combination of SDK and Cloud features)

The following example would load:

* TinyMCE from your SDK installation
* PowerPaste version 2.1.8 from the Cloud
* Advanced Code Editor from your SDK installation

```js
<html>
   <head>
      <script src="https://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&powerpaste=2.1.8&advcode=sdk"></script>
   </head>
   <body>
      <textarea><p>test textarea</p></textarea>
      <script>
         tinymce.init({
            selector: 'textarea',
            height: 500,
            theme: 'modern',
            plugins: [
               'advlist autolink lists link image charmap print preview hr anchor pagebreak',
               'tinymcespellchecker']
         });
      </script>
   </body>
<html>

```
