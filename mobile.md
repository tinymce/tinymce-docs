---
layout: default
title: TinyMCE Mobile
description: A new mobile-first user experience for rich-text editing.
keywords: mobile tablet beta
---

Why make TinyMCE mobile friendly? Simple. We live in a "mobile-first" world and expect a seamless experience between desktop and mobile. Our goal is to help you achieve this with as little effort as possible.

We're pleased to introduce TinyMCE mobile in beta.

TinyMCE mobile beta is designed to run on iOS Safari and Android Chrome. You'll find a streamlined interface, while keeping the most common touch interactions easily to hand.

Configuration is relatively easy, so let’s get started.

> Please note that the mobile beta will not work on non-mobile environments.

## How to get the mobile beta

Please visit our [mobile beta page](https://www.tinymce.com/mobile) to download the Self-hosted package. If you're using TinyMCE Cloud, the beta is available in the `dev` branch.

## How to setup mobile beta

In the snippet below, we use TinyMCE Cloud to instantiate the editor. If you're using the Self-hosted package, replace `cloud.tinymce.com/dev/` with your path to `tinymce.min.js`.


```html
<!DOCTYPE html>
<html>
<head><!-- Get TinyMCe Cloud -->
  <script src="https://cloud.tinymce.com/dev/tinymce.min.js"></script>
  <script>tinymce.init({
      selector:'textarea',
      theme: 'modern',
      mobile: { theme: 'beta-mobile' }
    });</script>
</head>
<body>
  <textarea>Now go get a free trial of our Premium Plugins!</textarea>
</body>
</html>
```

> If you're new to TinyMCE Cloud, [this post](https://go.tinymce.com/blog/how-to-get-tinymce-cloud-up-in-less-than-5-minutes/) will help you get the editor instantiated quickly.
> Don't forget to add your API key to the `init`:
> `<script src="https://cloud.tinymce.com/stable/tinymce.min.js?apiKey=your_API_key"></script>`

If you have experience using TinyMCE, you'll see in the above example that we added a new parameter called `mobile`. To use mobile mode on touch-only devices, add this parameter to your editor settings, specifying the `theme` as `mobile`:

```js
tinymce.init({
  selector: 'textarea',
  theme: 'modern',
  mobile: {
    theme: 'beta-mobile'
  }
});
```

The example above loads default settings. To configure the mobile experience, continue to the section [Configuring the mobile beta](#configuringthemobilebeta) below.

> Important: **do not** set `theme` to `mobile` in the top-level of your `init` settings, as it will attempt to load mobile mode on desktop environments as well.

## Configuring the mobile beta

One way to think about configuring TinyMCE mobile, is that it is a subset of config options within your standard `tinymce` init. When on a mobile device, anything included in the `mobile` section will be used instead of the equivalent values in the top-level of settings of your config.

Therefore, the mobile section allows you to have completely different settings for mobile than for non-mobile devices. The main configuration options you can change are `plugins` and `toolbar`.

### Configuring the Plugins

The plugins supported by mobile are currently limited to the [autosave]({{ site.baseurl }}/plugins/autosave), [autolink]({{ site.baseurl }}/plugins/autolink) and [lists]({{ site.baseurl }}/plugins/lists) plugins. This is by design. We are in beta and want to hear from our developer community about which plugins should be mobile optimized. Please [complete our survey](https://docs.google.com/forms/d/e/1FAIpQLSdWamU5HsZtv-SPqGRyu6Ql1zLqlrCQFP1vSrzx1oHikMFvlw/viewform) to have your say.

Specify which of these plugins you want by adding a plugin entry to the mobile section:

```js
tinymce.init({
  selector: 'textarea',
  theme: 'modern',
  mobile: {
    theme: 'beta-mobile',
    plugins: [ 'autosave' ]
  }
});
```

### Configuring the Toolbar

TinyMCE mobile beta supports a small subset of the toolbar items supported by the main mode. The toolbar is specified in the mobile section also.

```js
tinymce.init({
  selector: 'textarea',
  theme: 'modern',
  mobile: {
    theme: 'beta-mobile',
    plugins: [ 'autosave' ],
    toolbar: [ 'undo', 'bold', 'italic', 'styleselect' ]
  }
});
```

Below are the toolbar items supported in the beta, with any plugins/configuration required. Note, that the `list` functions require the [lists]({{ site.baseurl }}/plugins/lists) plugin and [styleselect](#) requires configuring [style_formats]({{ site.baseurl}}/configure/content-formatting/#style_formats).

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

> To shape the future of mobile editing, [complete our survey](https://docs.google.com/forms/d/e/1FAIpQLSdWamU5HsZtv-SPqGRyu6Ql1zLqlrCQFP1vSrzx1oHikMFvlw/viewform) to have your say.
