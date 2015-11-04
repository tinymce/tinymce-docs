---
layout: default
title: Install
css: foo.css
---

If you've already installed TinyMCE you can skip these installation steps and move on to configuring the editor.

Otherwise, the [Configuration Quick Start](../configuration-quick-start/) is a great place to learn about basic editor configuration. When you're ready to deep dive into advanced configuration options you'll find the [Configuration Reference](../configuration-reference/) and [Plugin & Toolbar/Menu Control](../plugin-toolbar-menu-controls/) resources extremely helpful.



# CDN Installation

{% include install/cdn.md %}

# Package Manager Installation

We have several package manager install options available. Chose your flavor.

## NPM

{% include install/npm.md %}

## Bower

{% include install/bower.md %}

## Composer

{% include install/composer.md %}

## NuGet

{% include install/nuget.md %}

### Use of local plugins/language packs when installing via Package Managers

When using package managers you might have local TinyMCE addons in your project such as plugins or language packs. Load these from your project location rather than from inside the package using these config options:

```js
tinymce.init({
  language: "sv",
  language_url: "/js/sv.js",
  plugins: "myplugin",
  external_plugins: {
    "myplugin": "/js/myplugin/plugin.min.js"
  }
});
```

For next steps see the [Developer Guide](../developer-guide/).



# SDK / Download Installation

{% include install/sdk.md %}

For next steps see the [Developer Guide](../developer-guide/).



# jQuery

{% include install/jquery.md %}

For next steps see the [Developer Guide](../developer-guide/).



# Custom Build Download

{% include install/custom.md %}

For next steps see the [Developer Guide](../developer-guide/).



# Next Steps

At this point, you've seen how to create TinyMCE instances on a page using `tinymce.init()`, and you've seen how to retrieve content from TinyMCE as part of an HTML `<form>` `post`.

There's way more under the hood if you're feeling adventurous: return to the [Developer Guide](../) to explore TinyMCE's advanced configuration settings in the [Configuration Reference](../configuration-reference/) and also learn more about [Plugin & Toolbar/Menu Control](../plugin-toolbar-menu-controls/) options.
