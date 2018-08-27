---
layout: default
title: TinyMCE plugin Yeoman generator
title_nav: Yeoman Generator
description_short: How to use the Yeoman generator to bootstrap a new TinyMCE plugin
description: How to use the Yeoman generator to bootstrap a new TinyMCE plugin using ES2015/Babel or TypeScript.
keywords: webpack yeoman generator plugin tinymce
---

To make it easy and quick to get started creating your plugins for TinyMCE we have created the TinyMCE Plugin Generator. Using this the only thing you have to do is answer a few questions, wait for some dependencies to install and ***bam!*** you are ready to get started creating that plugin you were dreaming about. 


## Install the generator
The plugin generator is built with [Yeoman](http://yeoman.io/), which if you haven’t heard about it before is a project scaffolding tool, so to get started you have to install both `yo` (the yeoman command) and the generator with the following command:

```bash
npm install --global yo generator-tinymce
```

Wait for the install to finish, then let us move on. 

## Run the generator
Start the generator with the following command:


```bash
yo tinymce
```

You will then be guided through these questions:

1. **Plugin name?**  
The name of the plugin.
2. **How do you want to write your plugin?**  
With what technology do you want to write your plugin? ES2015 transpiled with Babel, Typescript or Bolt (which is the module system used internally by Tiny, and probably not something that will be that interesting for external developers to use).
3. **Use yarn instead of npm?**  
If you have yarn installed you can use that instead of npm for a speedier install.
4. **Skip git repo initialization?**  
Most developers probably want to create a new repository for the plugin, but if you want to skip it this is the place to do it.
5. **What’s your name?**  
For license.
6. **Your email? (optional)**  
For license.
7. **Your website? (optional)**  
For license
8. **Which license do you want to use?**  
Hopefully self-explanatory: decide under what license you want to release you plugin.

After you have made your way through these prompts yeoman will install the needed dependencies and we are pretty much done: the project is bootstrapped and ready. `cd` into the plugin directory and run the following to start the auto reloading development server and get started:

```bash
npm start
```

Start hacking and have fun! If you didn’t skip it a git repository has also been initialized and an initial commit committed so if it gets too messy you can always go back with a simple `git reset`.


## Create distribution ready build

When you feel satisfied with your plugin the only thing you need to do is run this command in the project root:

```bash
npm run build
```

A `dist` directory will be created with a directory in it named the same as your plugin containing three files:

* `plugin.js` - unminified plugin bundle
* `plugin.min.js` - minified and uglified plugin bundle
* `LICENSE` - the text file containing your license

Ready for you to distribute out in whatever way you'd like to. 

Have fun and good luck!
