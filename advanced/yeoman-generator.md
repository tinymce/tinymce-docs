---
layout: default
title: TinyMCE plugin Yeoman generator
title_nav: Yeoman generator
description_short: How to use the Yeoman generator to bootstrap a new TinyMCE plugin
description: How to use the Yeoman generator to bootstrap a new TinyMCE plugin using ES2015/Babel or TypeScript.
keywords: webpack yeoman generator plugin tinymce
---

The TinyMCE Plugin Generator is designed to make it quick and easy to get started creating plugins to extend and enhance your rich-text editing experience.


## Install the generator
The plugin generator is built with the project scaffolding tool [Yeoman](http://yeoman.io/). To get started install both `yo` (the yeoman command) and the generator with the following command:

```bash
npm install --global yo generator-tinymce
```

Wait for the install to finish. 

## Run the generator
Start the generator with the following command:


```bash
yo tinymce
```

You will then be guided through these questions:

1. **Plugin name?**  
The name of the plugin.
2. **How do you want to write your plugin?**  
With what technology do you want to write your plugin? ES2015 transpiled with Babel, Typescript or the module system used internally by Tiny called Bolt.
3. **Use yarn instead of npm?**  
Use `yarn` instead of `npm` for a speedier install.
4. **Skip git repo initialization?**  
Here you can skip the creation of a new repository for the plugin.
5. **What’s your name?**  
For license.
6. **Your email? (optional)**  
For license.
7. **Your website? (optional)**  
For license
8. **Which license do you want to use?**  
Choose the license for the plugin.

Yeoman installs the needed dependencies, and the project is bootstrapped and ready. `cd` into the plugin directory and run the following command to start the auto-reloading development server:

```bash
npm start
```


## Create distribution ready build

Run the following command as root once you have completed development of the plugin:

```bash
npm run build
```

A `dist` directory will be created with a directory named the same as your plugin containing three files:

* `plugin.js` - unminified plugin bundle
* `plugin.min.js` - minified and uglified plugin bundle
* `LICENSE` - the text file containing your license

