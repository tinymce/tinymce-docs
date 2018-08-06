---
layout: default
title: TinyMCE Mobile
description: A new mobile-first user experience for rich text editing.
keywords: mobile tablet
---

Why make TinyMCE mobile friendly? Simple. We live in a "mobile-first" world and expect a seamless experience between desktop and mobile. Our goal is to help you achieve this with as little effort as possible.

We're pleased to introduce TinyMCE mobile, available in version 4.7.

TinyMCE mobile is designed to run on iOS Safari and Android Chrome. You'll find a streamlined interface while keeping the most common touch interactions easily to hand.

Configuration is relatively easy, so let's get started.

> Note: Please note that TinyMCE mobile will not work on non-mobile environments.

## How to TinyMCE mobile setup

Please visit our [mobile page](https://www.tinymce.com/mobile) to download the Self-hosted package. If you're using TinyMCE Cloud, mobile is available in the `dev` branch.

## How to set up mobile

In the snippet below, we use TinyMCE Cloud to instantiate the editor. If you're using the Self-hosted package, replace `cloud.tinymce.com/dev/` with your path to `tinymce.min.js`.


```html
<!DOCTYPE html>
<html>
<head><!-- Get TinyMCe Cloud -->
  <script src="https://cloud.tinymce.com/dev/tinymce.min.js"></script>
  <script>tinymce.init({
      selector:'textarea',
      theme: 'modern',
      mobile: { theme: 'mobile' }
    });</script>
</head>
<body>
  <textarea>Now go get a free trial of our Premium Plugins!</textarea>
</body>
</html>
```

> Note:  If you're new to TinyMCE Cloud, [this post](https://go.tinymce.com/blog/how-to-get-tinymce-cloud-up-in-less-than-5-minutes/) will help you get the editor instantiated quickly.

> Tip: Don't forget to add your API key to the `init`:
`<script src="https://cloud.tinymce.com/stable/tinymce.min.js?apiKey=your_API_key"></script>`

If you have experience using TinyMCE, you'll see in the above example that we added a new parameter called `mobile`. To use mobile mode on touch-only devices, add this to your editor settings, specifying the `theme` as `mobile`:

```js
tinymce.init({
  selector: 'textarea',
  theme: 'modern',
  mobile: {
    theme: 'mobile'
  }
});
```

The example above loads default settings. To configure the mobile experience, continue to the section [Configuring mobile](#configuringmobile) below.

> Important: **do not** set `theme` to `mobile` in the top-level of your `init` settings, as it will attempt to load mobile mode on desktop environments as well.

## Configuring mobile

One way to think about configuring TinyMCE mobile is that it is a subset of config options within your standard `tinymce` init. When on a mobile device, anything included in the [mobile]({{ site.baseurl }}/configure/editor-appearance/#mobile) section will be used instead of the equivalent values in the top-level of settings of your config.

Therefore, the mobile section allows you to have completely different settings for mobile than non-mobile devices. The main configuration options you can change are `plugins` and `toolbar`.

### Configuring the Plugins

The plugins supported by mobile are currently limited to the [autosave]({{ site.baseurl }}/plugins/autosave), [autolink]({{ site.baseurl }}/plugins/autolink) and [lists]({{ site.baseurl }}/plugins/lists) plugins. This is by design. We are in the early release cycle and want to hear from our developer community about which plugins should be mobile optimized. Please [complete our survey](https://docs.google.com/forms/d/e/1FAIpQLSdWamU5HsZtv-SPqGRyu6Ql1zLqlrCQFP1vSrzx1oHikMFvlw/viewform) to have your say.

Specify which of these plugins you want by adding a plugin entry to the mobile section:

```js
tinymce.init({
  selector: 'textarea',
  theme: 'modern',
  mobile: {
    theme: 'mobile',
    plugins: [ 'autosave', 'lists', 'autolink' ]
  }
});
```

### Configuring the Toolbar

TinyMCE mobile supports a small subset of the toolbar items supported by the main mode. The toolbar is specified in the [mobile]({{ site.baseurl }}/configure/editor-appearance/#mobile) section also.

```js
tinymce.init({
  selector: 'textarea',
  theme: 'modern',
  mobile: {
    theme: 'mobile',
    plugins: [ 'autosave', 'lists', 'autolink' ],
    toolbar: [ 'undo', 'bold', 'italic', 'styleselect' ]
  }
});
```

Below are the toolbar items currently supported, with any plugins/configuration required. Note, that the `list` functions require the [lists]({{ site.baseurl }}/plugins/lists) plugin and [styleselect](#) requires configuring [style_formats]({{ site.baseurl}}/configure/content-formatting/#style_formats).

| Name | Function | Plugins Required | Configuration |
|--------|----|-----|-------------|
| undo | Undo operation |
| redo | Redo operation |
| bold | Bold formatting operation |
| italic | Italic formatting operation |
| underline | Underline formatting operation |
| link | Insert / Edit a hyperlink |
| unlink | Remove an existing hyperlink |
| image | Insert an image |
| bullist | Insert an unordered list | [lists]({{ site.baseurl }}/plugins/lists) |
| numlist | Insert an ordered list | [lists]({{ site.baseurl }}/plugins/lists) |
| fontsizeselect | Change the font size
| forecolor | Apply a foreground color
| styleselect | Apply a custom style | | [style_formats]({{ site.baseurl }}/configure/content-formatting/#style_formats) |
| removeformat | Removes any inline formatting |

## Browser compatibility

During our initial QA, we tested mobile on the following platforms. If you use other platforms and encounter bugs, please let us know in the [TinyMCE issue tracker](https://github.com/tinymce/tinymce/issues).

{% include mobile_platform_compatibility.md %}

> To shape the future of mobile editing, [complete our survey](https://docs.google.com/forms/d/e/1FAIpQLSdWamU5HsZtv-SPqGRyu6Ql1zLqlrCQFP1vSrzx1oHikMFvlw/viewform) to have your say.
