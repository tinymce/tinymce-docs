---
layout: default
title: TinyMCE plugin Yeoman generator
title_nav: Yeoman generator
description_short: How to use the Yeoman generator to bootstrap a new TinyMCE plugin
description: How to use the Yeoman generator to bootstrap a new TinyMCE plugin using ES2015/Babel or TypeScript.
keywords: webpack yeoman generator plugin tinymce
---

{{site.companyname}} maintains a [Yeoman generator]({{ site.baseurl }}/advanced/yeoman-generator/) to assist with creating plugins for {{site.productname}}. The Yeoman Generator will create the files and boilerplate code required for a custom plugin, and sets up some helpful commands.

## Install the generator

The plugin generator is built with the project scaffolding tool [Yeoman](http://yeoman.io/). To get started install both `yo` (the yeoman command) and the generator with the following command:

```sh
npm install --global yo generator-tinymce
```

Wait for the install to finish.

## Run the generator

Start the generator with the following command:

```sh
yo tinymce
```

You will then be guided through these questions:

1. **Plugin name:**
The name of the plugin.
2. **Plugin description (optional):**
An optional description of the plugin.
3. **Initialize git repo?**
Here you can skip the creation of a new repository for the plugin.
4. **What’s your name?**
For license.
5. **Your email (optional):**
For license.
6. **Your website (optional):**
For license.
7. **Which license do you want to use?**
Choose the license for the plugin.

Yeoman installs the needed dependencies, and the project is bootstrapped and ready. `cd` into the plugin directory and run the following command to start the auto-reloading development server:

```sh
npm start
```

## Create distribution ready build

Run the following command once you have completed development of the plugin:

```sh
yarn build
```

A `dist` directory will be created, containing a sub-directory with the same name as the plugin. The sub-directory will contain the following files:

* `plugin.js` - unminified plugin bundle
* `plugin.min.js` - minified and uglified plugin bundle
* `CHANGELOG.txt` - the text file containing your changes
* `LICENSE.txt` - the text file containing your license
* `version.txt` - the text file containing the version of your plugin

For example, `yarn build` will generate the following output for a plugin named `my_plugin`:

```sh
dist/
└── my_plugin/
    ├── CHANGELOG.txt
    ├── LICENSE.txt
    ├── plugin.js
    ├── plugin.min.js
    └── version.txt
```
