---
layout: default
title: Spell Checking in TinyMCE
description: Bring spell checking to your users.
---

In the past TinyMCE relied on (a bit of a hack to access) Google's spellcheck API, which has since been deprecated. As a result the [`spellchecker`](/plugins/spell-checker.md) plugin is not currently working.

However you do have options. The first is to utilize the browser's native spellcheck functionality by assigning the [`browser_spellcheck`](/editor-configuration-settings/spelling/#browser_spellcheck) configuration option the value of `true`. You *may* need to enable the [`contextmenu`](/plugins/context-menu/) plugin.

```js
tinymce.init({
  selector: "textarea",  // change this value according to your html
  browser_spellcheck: true,
  contextmenu: false
});
```

### Other options

For developers who don't mind writing their own plugins, the TinyMCE team recommend the Open Source project [After the Deadline](http://afterthedeadline.com/).

The [nanospell spellchecker](http://tinymcespellcheck.com/) plugin is a better alternative for developers who'd rather buy a plugin. Note that TinyMCE doesn't endorse this project.

For developers requiring a robust, enterprise grade spellchecker, consider [TinyMCE Enterprise](http://www.tinymce.com/enterprise), which contains pro grade spell checking. Check out the [documentation](http://docs.ephox.com/display/TinyMCEEnterprise/Spell+Checking) if you'd like to learn more about the [client-side plugin](http://docs.ephox.com/display/TinyMCEEnterprise/Spellchecking+Client-Side+TinyMCE+Plugin) and [server-side component](http://docs.ephox.com/display/TinyMCEEnterprise/Spellchecking+Server-Side+Components).

## Next Steps

In the next step you'll learn about TinyMCE's [content filtering](../content-filtering/) capabilities.
