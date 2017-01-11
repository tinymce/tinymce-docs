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
<script src="http://cloud.tinymce.com/stable/tinymce.min.js?apiKey=your_API_key"></script>
```

The *“stable”* in this URL specifies the latest release of TinyMCE that has successfully completed the Ephox quality assurance testing process.

This value can be customised in order to load the version of TinyMCE that best suits your needs.

This value can be replaced with any of the following supported versions of TinyMCE: [http://cloud.tinymce.com/versions/tiny](http://cloud.tinymce.com/versions/tiny).

### Selecting specific version numbers

You can specify a *Major* version number, a *Major.Minor* version number or a *Major.Minor.Patch* version number. If the Minor or Patch versions numbers are not present, it will default to the latest Minor/pPatch version released.

##### Example
Major version number (e.g. "4").

The following would load TinyMCE *4.latest.latest*:

```js
<script src="http://cloud.tinymce.com/4/tinymce.min.js?apiKey=your_API_key"></script>
```

##### Example
Major.Minor version number (e.g. "4.3").

The following would load TinyMCE *4.3.latest*:

```js
<script src="http://cloud.tinymce.com/4.3/tinymce.min.js?apiKey=your_API_key"></script>
```

##### Example
Major.Minor.Patch version number (e.g. "4.3.2").

The following would load TinyMCE *4.3.2*:

```js
<script src="http://cloud.tinymce.com/4.3.2/tinymce.min.js?apiKey=your_API_key"></script>
```

If you enter a version that doesn’t exist, you will get a HTTP 404 response.

### "dev" and "stable" releases

Rather than specifying a specific TinyMCE version to load from the Cloud, you can choose to select from our automatically updated *"dev"* and *"stable"* release streams.

Updates to these streams will be automatic, providing you and your users with the latest TinyMCE version related to the criteria below as it’s released from Ephox.

#### "dev" release stream

This stream will deploy the absolute latest released TinyMCE version seen in the [TinyMCE changelog]({{ site.baseurl }}/changelog/).

The current version of TinyMCE available through the *dev* stream can be found at [http://cloud.tinymce.com/dev/version.txt](http://cloud.tinymce.com/dev/version.txt).

##### Example

```js
<script src="http://cloud.tinymce.com/dev/tinymce.min.js?apiKey=your_API_key"></script>
```

#### "stable" release stream

This stream will deploy the latest release of TinyMCE that has undergone release from the Ephox quality assurance testing cycle.

The current version of TinyMCE available through the *stable* stream can be found at [http://cloud.tinymce.com/stable/version.txt](http://cloud.tinymce.com/stable/version.txt).

##### Example

```js
<script src="http://cloud.tinymce.com/stable/tinymce.min.js?apiKey=your_API_key"></script>
```

## Specifying the version of features/plugins deployed from the Cloud

Whether you’re deploying both the [TinyMCE editor and premium plugins via the Cloud]({{ site.baseurl }}/get-started-cloud/editor-and-features) or deploying [only premium plugins from the Cloud]({{ site.baseurl }}/get-started-cloud/features-only), you can use URL query parameters to specify the version of each premium plugin.

#### PowerPaste

* [Developer documentation]({{ site.baseurl }}/plugins/powerpaste)
* [Supported versions](http://plugins.tinymce.com/versions/powerpaste)

##### Example

```js
<script src="http://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&powerpaste=2.1.8"></script>
```

#### Spell Checker Pro

* [Developer documentation]({{ site.baseurl }}/plugins/tinymcespellchecker)
* [Supported versions](http://plugins.tinymce.com/versions/tinymcespellchecker)

##### Example

```js
<script src="http://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&tinymcespellchecker=0.9.6"></script>
```

#### Accessibility Checker

* [Developer documentation]({{ site.baseurl }}/plugins/a11ychecker)
* [Supported versions](http://plugins.tinymce.com/versions/a11ychecker)

##### Example

```js
<script src="http://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&a11ychecker=1.0.2"></script>
```

#### Advanced Code Editor

* [Developer documentation]({{ site.baseurl }}/plugins/advcode/)
* [Supported versions](http://plugins.tinymce.com/versions/advcode)

##### Example

```js
<script src="http://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&advcode=1.0.2"></script>
```

#### Enhanced Media Embed

* [Developer documentation]({{ site.baseurl }}/plugins/mediaembed/)
* [Supported versions](http://plugins.tinymce.com/versions/mediaembed)

##### Example

```js
<script src="http://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&mediaembed=0.0.1"></script>
```

#### Link Checker

* [Developer documentation]({{ site.baseurl }}/plugins/linkchecker/)
* [Supported versions](http://plugins.tinymce.com/versions/linkchecker)

##### Example

```js
<script src="http://cloud.tinymce.com/stable/plugins.min.js?apiKey=your_API_key&linkchecker=1.0.0"></script>
```

## Example (featuring declared editor and plugin versions)

The following example would load:

* TinyMCE 4.5.0
* PowerPaste version 2.1.8
* Advanced Code Editor 1.0.2

```js
<html>
   <head>
      <script src="http://cloud.tinymce.com/4.5.0/tinymce.min.js?apiKey=your_API_key&powerpaste=2.1.8&advcode=1.0.2"></script>
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
